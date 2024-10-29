using System.Data.Common;
using DreamBid.Dtos.Car;
using DreamBid.Dtos.Error;
using DreamBid.Extensions;
using DreamBid.Helpers.Car;
using DreamBid.Interfaces;
using DreamBid.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DreamBid.Controllers
{
    [Route("api/v1/accounts/cars")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly IFileManagerService _fileManagerService;
        private readonly ICarRepository _carRepository;
        private readonly UserManager<DreamBid.Models.User> _userManager;
        private readonly ILogger<AccountController> _logger;
        public CarController(IFileManagerService fileManagerService, ICarRepository carRepository, UserManager<DreamBid.Models.User> userManager, ILogger<AccountController> logger)
        {
            this._fileManagerService = fileManagerService;
            this._carRepository = carRepository;
            this._userManager = userManager;
            this._logger = logger;
        }

        [HttpPost]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> AddCar([FromBody] AddCarDto addCarDto)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) return Unauthorized(ErrorMessage.UserIdIncorrect);

            var dbResult = await _carRepository.AddCarAsync(addCarDto.ToCarFromAddCarDto(), userId);

            if (dbResult.Error != null) return BadRequest(dbResult.Error);
            if (dbResult.Data == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error happend when tring to add car"));

            
            return Ok(dbResult.Data.ToCarDto());
        }

        [HttpGet("{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetCarById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ErrorMessage.ErrorMessageFromString("Hello world"));

            var userId = User.GetUserId();
            if (userId == null) return Unauthorized(ErrorMessage.UserIdIncorrect);

            var dbResult = await _carRepository.GetCarByIdAsync(id, userId);

            if (dbResult.Error != null) return BadRequest(dbResult.Error);
            if (dbResult.Data == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error happend when tring to get car"));

            
            return Ok(dbResult.Data.ToCarDto());
        }

        [HttpGet]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetAllCars([FromQuery] GetAllCarQueryObject getAllCarQueryObject)
        {
            if (!ModelState.IsValid)
                return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) return Unauthorized(ErrorMessage.UserIdIncorrect);

            var dbResult = await _carRepository.GetAllAsync(getAllCarQueryObject, userId);

            if (dbResult.Error != null) return BadRequest(dbResult.Error);
            if (dbResult.Data == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error happend when tring to add cars"));

            var carDtos = dbResult.Data.Select(c => c.ToCarDto()).ToList();


            return Ok(carDtos);
        }


        [HttpPatch("{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> UpdateCar([FromBody] UpdateCarDto updateCarDto, [FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) Unauthorized(ErrorMessage.UserIdIncorrect);

            var dbResult = await _carRepository.UpdateCarAsync(updateCarDto, id, userId);

            if (dbResult.Error != null) return BadRequest(dbResult.Error);
            if (dbResult.Data == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error happend when tring to update car"));

            

            return Ok(dbResult.Data.ToCarDto());
        }

        [HttpDelete("{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteCar([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var dBResult = await this._carRepository.DeleteCarAsync(id, userId);
            if (dBResult.Error != null) return BadRequest(dBResult.Error);
            if (dBResult.Data == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error happend when tring to delete car"));

            return Ok(dBResult.Data.ToCarDto());
        }
    }
}