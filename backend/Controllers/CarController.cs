using DreamBid.Data;
using DreamBid.Dtos.Car;
using DreamBid.Dtos.Error;
using DreamBid.Dtos.Image;
using DreamBid.Extensions;
using DreamBid.Helpers.Car;
using DreamBid.Interfaces;
using DreamBid.Mappers;
using DreamBid.Models;
using DreamBid.Utils;
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
        public async Task<IActionResult> CreateCar([FromBody] AddCarDto addCarDto)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var car = addCarDto.ToCarFromAddCarDto();
            car.UserId = userId;

            await _carRepository.AddCarAsync(car);

            return Ok(car.ToCarDto());
        }

        [HttpGet("{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetCarById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ErrorMessage.ErrorMessageFromString("Hello world"));

            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var car = await _carRepository.GetCarByIdAsync(id, userId);

            if (car == null) return NotFound(ErrorMessage.ErrorMessageFromString("Car Not Found"));

            return Ok(car.ToCarDto());
        }

        [HttpGet]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetAllCars([FromQuery] GetAllCarQueryObject getAllCarQueryObject)
        {
            if (!ModelState.IsValid)
                return NotFound(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var cars = await _carRepository.GetAllAsync(getAllCarQueryObject, userId);
            var carDtos = cars.Select(c => c.ToCarDto()).ToList();

            return Ok(carDtos);
        }


        [HttpPatch("{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> UpdateCar([FromBody] UpdateCarDto updateCarDto, [FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return NotFound(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var car = await _carRepository.UpdateCarAsync(updateCarDto, id, userId);
            if (car == null) return NotFound(ErrorMessage.ErrorMessageFromString("Car Not Found"));

            return Ok(car.ToCarDto());
        }

        [HttpDelete("{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteCar([FromRoute] int id)
        {
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var car = await this._carRepository.DeleteCar(id, userId);
            if (car == null) return NotFound(ErrorMessage.ErrorMessageFromString("Car Not Found"));

            return Ok(car.ToCarDto());
        }
    }
}