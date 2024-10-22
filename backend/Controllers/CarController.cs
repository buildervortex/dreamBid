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

        [HttpPost("{id:int}/images")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> AddImages(IFormFile image, [FromRoute] int id)
        {
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var car = await _carRepository.GetCarByIdAsync(id, userId);
            if (car == null) return NotFound(ErrorMessage.ErrorMessageFromString("Car Not Found"));

            if (image == null || image.Length <= 0) return BadRequest(ErrorMessage.ErrorMessageFromString("Invalid image"));

            string carImagePath = FileManagementUtil.GetOsDependentPath($"cars/{userId}/{id}/images/");
            var subFilePathName = Path.Combine(carImagePath, image.FileName);

            var newFilePath = await this._fileManagerService.StoreFile(image, subFilePathName, false);
            if (newFilePath == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error. Failed to save the car image"));

            var imageObject = new Image();
            imageObject.FileName = image.FileName;
            imageObject.CarId = id;
            imageObject.FilePath = newFilePath;
            imageObject.Length = image.Length;

            var savedImage = await this._carRepository.SaveImage(imageObject);

            if (savedImage == null)
            {
                this._fileManagerService.RemoveFile(newFilePath);
                return NotFound(ErrorMessage.ErrorMessageFromString("Internal Server Error. Failed To save the car image detils"));
            };
            return Ok(savedImage.ToImageDto());
        }
        [HttpGet("{id:int}/images")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetImages([FromRoute] int id, [FromQuery] GetAllImagesQueryObject getAllImagesQueryObject)
        {
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var car = await _carRepository.GetCarByIdAsync(id, userId);
            if (car == null) return NotFound(ErrorMessage.ErrorMessageFromString("Car Not Found"));

            var images = await _carRepository.GetAllImages(getAllImagesQueryObject, id);
            if (images == null) return Ok();

            if (!getAllImagesQueryObject.WithImageData) return Ok(images.Select(i => i.ToImageDto()));

            var imageDtoList = new List<ImageDto>();

            foreach (var image in images)
            {
                if (image.FilePath == null) continue;
                var base64EncodedImage = await this._fileManagerService.GetFileBase64Encoded(image.FilePath);
                if (base64EncodedImage == null) return NotFound(ErrorMessage.ErrorMessageFromString("Internal Server Error. Failed To read the file"));
                imageDtoList.Add(image.ToImageDto(base64EncodedImage));
            }

            return Ok(imageDtoList);
        }

        // [HttpGet("{id:int}/images/{imageId:int}")]
        // [Authorize(Roles = "User")]
        // public async Task<IActionResult> GetImage([FromRoute] int id, [FromRoute] int imageId)
        // {
        //     var userId = User.GetUserId();
        //     if (userId == null) return BadRequest(ErrorMessage.ErrorMessageFromString("The user id is wrong"));

        //     var user = await _userManager.FindByIdAsync(userId);
        //     if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

        //     var car = await _carRepository.GetCarByIdAsync(id, userId);
        //     if (car == null) return NotFound(ErrorMessage.ErrorMessageFromString("Car Not Found"));
        // }

    }
}