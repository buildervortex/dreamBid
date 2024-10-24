using DreamBid.Dtos.Auction;
using DreamBid.Dtos.Error;
using DreamBid.Extensions;
using DreamBid.Helpers.Auction;
using DreamBid.Interfaces;
using DreamBid.Mappers;
using DreamBid.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DreamBid.Controllers
{
    [Route("api/v1/auctions")]
    public class AuctionController : ControllerBase
    {

        private readonly UserManager<DreamBid.Models.User> _userManager;
        private readonly ICarRepository _carRepository;

        private readonly IAuctionRepository _auctionRepository;

        private readonly ILogger<AuctionController> _logger;
        public AuctionController(UserManager<DreamBid.Models.User> userManager, ICarRepository carRepository, IAuctionRepository auctionRepository, ILogger<AuctionController> logger)
        {
            this._userManager = userManager;
            this._carRepository = carRepository;
            this._auctionRepository = auctionRepository;
            this._logger = logger;
        }

        [HttpPost("{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> CreateAuction([FromBody] AddAuctionDto addAuctionDto, [FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var car = await _carRepository.GetCarByIdAsync(id, userId);
            if (car == null) return NotFound(ErrorMessage.ErrorMessageFromString("Car Not Found"));

            var auction = addAuctionDto.ToAuctionFromAddAuctionDto();
            auction.CarId = car.Id;

            auction = await this._auctionRepository.AddAuctionAsync(auction);
            if (auction == null) return BadRequest(ErrorMessage.ErrorMessageFromString("Auction add failed. Check whether there is existing active auction for this car"));

            return Ok(auction.ToAuctionDto());
        }


        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetAuction([FromRoute] int id)
        {
            var auction = await this._auctionRepository.GetAuction(id);
            if (auction == null) return NotFound(ErrorMessage.ErrorMessageFromString("Auction Not Found"));

            return Ok(auction.ToAuctionDto());
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAuctions([FromQuery] GetAllAuctionQueryObject getAllAuctionQueryObject)
        {
            var auctions = await _auctionRepository.GetAllAuctions(getAllAuctionQueryObject);
            var auctionDtos = auctions.Select(a => a.ToAuctionDto()).ToList();

            return Ok(auctionDtos);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAuction([FromRoute] int id)
        {
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var auction = await this._auctionRepository.DeleteAuction(id);
            if (auction == null) return NotFound(ErrorMessage.ErrorMessageFromString("Car Not Found"));

            return Ok(auction.ToAuctionDto());

        }
    }
}