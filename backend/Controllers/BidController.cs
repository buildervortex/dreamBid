using DreamBid.Data;
using DreamBid.Dtos.Bid;
using DreamBid.Dtos.Error;
using DreamBid.Dtos.Transaction;
using DreamBid.Extensions;
using DreamBid.Helpers.Bid;
using DreamBid.Interfaces;
using DreamBid.Mappers;
using DreamBid.Models;
using DreamBid.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DreamBid.Controllers
{
    [Route("api/v1/bids")]
    public class BidController : ControllerBase
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly IBidRepository _bidRepository;
        private readonly IPayPalService _payPayService;

        private readonly string returnUrl = "http://localhost:5189/api/v1/bids/payment/Success";
        private readonly string cancleUrl = "http://localhost:5189/api/v1/bids/payment/Failure";
        public BidController(IBidRepository bidRepository, IPayPalService payPalService, ITransactionRepository transactionRepository)
        {
            this._bidRepository = bidRepository;
            this._payPayService = payPalService;
            this._transactionRepository = transactionRepository;
        }
        [HttpPost("{auctionId:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> PlaceBid([FromRoute] int auctionId, [FromBody] AddBidDto addBidDto)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var dbResult = await this._bidRepository.CheckBidAvailability(userId, auctionId, addBidDto.ToBidFromAddBidDto());
            if (dbResult.Error != null) return BadRequest(dbResult.Error);

            var serializeBid = JsonConvert.SerializeObject(dbResult.Data);

            var createdPaymentResult = _payPayService.CreatePayment(10, this.returnUrl, this.cancleUrl, serializeBid, $"Dreambid auction payment on auction id {auctionId}");
            if (createdPaymentResult.Error != null) return BadRequest(createdPaymentResult.Error);

            var approvalUrl = createdPaymentResult.Data.links.FirstOrDefault(link => link.rel.Equals("approval_url", StringComparison.OrdinalIgnoreCase))?.href;
            if (approvalUrl == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error occoured when adding the bid"));

            return Ok(
                new { approvalUrl = approvalUrl }
            );
        }

        [HttpGet("payment/Success")]
        public async Task<IActionResult> SuccessBidPayment([FromQuery] string token, [FromQuery] string payerId, [FromQuery] string paymentId)
        {
            var paymentResult = this._payPayService.ExecutePayment(paymentId, payerId);
            if (paymentResult.Error != null) return BadRequest(paymentResult.Error);

            var bid = JsonConvert.DeserializeObject<Bid>(paymentResult.Data.transactions[0].custom);
            if (bid == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The payment is not valid"));

            var payPalTransactionId = paymentResult.Data.transactions[0].related_resources[0].sale.id;
            var transactionAmount = paymentResult.Data.transactions[0].amount.total;
            if (payPalTransactionId == null || transactionAmount == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The payment is not valid"));

            var transactionDBResult = await this._transactionRepository.CreateTransactionAsync(bid.ToTransactionFromAddBidDto(double.Parse(transactionAmount), payPalTransactionId));
            if (transactionDBResult.Error != null) return BadRequest(transactionDBResult.Error);
            bid.TransactionId = transactionDBResult.Data.Id;

            var bidDBResult = await _bidRepository.PlaceBidAsync(bid.UserId, bid.AuctionId, bid);
            if (bidDBResult.Error != null) return BadRequest(bidDBResult.Error);

            return Ok(transactionDBResult.Data.ToTransactionDto());
        }

        [HttpGet("payment/Failure")]
        public async Task<IActionResult> FailedBidPayment([FromQuery] string token)
        {
            return BadRequest(ErrorMessage.ErrorMessageFromString("The paymetn was failed"));
        }

        [HttpGet("{bidId:int}")]
        public async Task<IActionResult> GetBid([FromRoute] int bidId)
        {
            var bid = await this._bidRepository.GetBid(bidId);
            if (bid == null) return NotFound(ErrorMessage.ErrorMessageFromString("Bid Not Found"));

            return Ok(bid.ToBidDto());
        }

        [HttpGet("auction/{auctionId:int}")]
        public async Task<IActionResult> GetBids([FromRoute] int auctionId, [FromQuery] GetAllBidQueryObject getAllBidQueryObject)
        {
            var bids = await this._bidRepository.GetBids(auctionId, getAllBidQueryObject);
            var bidDtos = bids.Select(b => b.ToBidDto()).ToList();

            return Ok(bidDtos);
        }
    }
}