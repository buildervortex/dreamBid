using DreamBid.Dtos.Bid;
using DreamBid.Dtos.Error;
using DreamBid.Extensions;
using DreamBid.Helpers.Bid;
using DreamBid.Interfaces;
using DreamBid.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DreamBid.Controllers
{
    [Route("api/v1/bids")]
    public class BidController : ControllerBase
    {
        private readonly UserManager<DreamBid.Models.User> _userManager;
        private readonly IAuctionRepository _auctionRepository;
        private readonly IBidRepository _bidRepository;
        public BidController(UserManager<DreamBid.Models.User> userManager, IAuctionRepository auctionRepository, IBidRepository bidRepository)
        {
            this._userManager = userManager;
            this._auctionRepository = auctionRepository;
            this._bidRepository = bidRepository;
        }
        [HttpPost("{auctionId:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> PlaceBid([FromRoute] int auctionId, [FromBody] AddBidDto addBidDto)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var auction = await this._auctionRepository.GetAuction(auctionId);
            if (auction == null) return NotFound(ErrorMessage.ErrorMessageFromString("The auction doesn't exists"));

            var bid = addBidDto.ToBidFromAddBidDto();
            bid.AuctionId = auctionId;
            bid.UserId = userId;

            bid = await this._bidRepository.AddBid(bid);

            return Ok(bid.ToBidDto());
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