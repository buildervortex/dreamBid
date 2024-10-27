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
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var dbResult = await this._auctionRepository.AddAuctionAsync(addAuctionDto.ToAuctionFromAddAuctionDto(), userId, id);
            if (dbResult.Error != null) return BadRequest(dbResult.Error);
            if (dbResult.Data == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal server error occoured while adding the auction"));

            return Ok(dbResult.Data.ToAuctionDto());
        }


        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetAuction([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
            var dbResult = await this._auctionRepository.GetAuctionAsync(id);
            if (dbResult.Error != null) return BadRequest(dbResult.Error);

            return Ok(dbResult.Data.ToAuctionDto());
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAuctions([FromQuery] GetAllAuctionQueryObject getAllAuctionQueryObject)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
            var dbResult = await _auctionRepository.GetAllAuctionsAsync(getAllAuctionQueryObject);
            return Ok(dbResult.Data.Select(a => a.ToAuctionDto()).ToList());
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAuction([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var dbresult = await this._auctionRepository.DeleteAuctionAsync(userId, id);
            if (dbresult.Error != null) return BadRequest(dbresult.Error);

            return Ok(dbresult.Data.ToAuctionDto());
        }
    }
}