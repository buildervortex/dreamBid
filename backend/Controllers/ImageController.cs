using System.Data.Common;
using DreamBid.Data;
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
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.UserSecrets;

namespace DreamBid.Controllers
{
    [Route("api/v1/images")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IFileManagerService _fileManagerService;
        private readonly ICarRepository _carRepository;
        private readonly ApplicationDbContext _context;
        private readonly UserManager<DreamBid.Models.User> _userManager;
        private readonly ILogger<AccountController> _logger;
        private readonly IImageRepository _imageRepository;
        private readonly string _profilePicturePath = FileManagementUtil.GetOsDependentPath("users/profilePictures/");
        public ImageController(IFileManagerService fileManagerService, ICarRepository carRepository, UserManager<DreamBid.Models.User> userManager, ILogger<AccountController> logger, IImageRepository imageRepository, ApplicationDbContext context)
        {
            this._fileManagerService = fileManagerService;
            this._carRepository = carRepository;
            this._userManager = userManager;
            this._logger = logger;
            this._imageRepository = imageRepository;
            this._context = context;
        }


        [HttpGet("profiles/{id}")]
        public async Task<IActionResult> GetProfileImageById([FromRoute] string id)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
            var user = await _userManager.Users.Include(u => u.Image).SingleOrDefaultAsync(u => u.Id == id);
            if (user == null) return NotFound(ErrorMessage.UserNotFound);

            if (user.Image == null || user.Image.FilePath == null) return NotFound(ErrorMessage.ErrorMessageFromString("The Profile picture not found"));

            var base64EncodedString = await this._fileManagerService.GetFileBase64Encoded(user.Image.FilePath);

            if (base64EncodedString == null) return NotFound(ErrorMessage.ErrorMessageFromString("The Profile picture not found"));

            return Ok(user.Image.ToImageDto(base64EncodedString));
        }

        [HttpGet("profiles/me")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetProfileImage()
        {
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var dbResult = await this._imageRepository.GetProfileImage(userId);
            if (dbResult.Error != null) return BadRequest(dbResult.Error);
            if (dbResult.Data == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error happend when tring to get profile image"));

            var base64EncodedString = await this._fileManagerService.GetFileBase64Encoded(dbResult.Data.FilePath);

            if (base64EncodedString == null) return NotFound(ErrorMessage.ErrorMessageFromString("The Profile picture not found"));

            return Ok(dbResult.Data.ToImageDto(base64EncodedString));
        }

        [HttpPost("profiles/me")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> PostProfilePicture(IFormFile profilePicture)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var user = await _userManager.Users.Include(u => u.Image).SingleOrDefaultAsync(u => u.Id == userId);
            if (user == null) return NotFound(ErrorMessage.UserNotFound);

            if (profilePicture == null || profilePicture.Length <= 0) return BadRequest(ErrorMessage.ErrorMessageFromString("Invalid image for the profile picture"));

            // remove existing profile picture
            if (user.Image != null) this._fileManagerService.RemoveFileWithAnyExtension(user.Image.FilePath);

            // generate new profile picture filename
            var fileName = $"{user.Id}{Path.GetExtension(profilePicture.FileName)}";
            var subFilePathName = Path.Combine(this._profilePicturePath, fileName);

            // store the profile picture
            var newFilePath = await this._fileManagerService.StoreFile(profilePicture, subFilePathName, true);
            if (newFilePath == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error. Failed to save the profile picture"));

            var image = await this._imageRepository.StoreImage(profilePicture.ToImage(newFilePath, UserId: userId));

            await _userManager.UpdateAsync(user);

            if (image == null)
            {
                this._fileManagerService.RemoveFile(newFilePath);
                return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error. Failed to upate the user"));
            }

            return Ok(image.ToImageDto());
        }

        [HttpDelete("profiles/me")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteProfilePicture()
        {
            var userId = User.GetUserId();
            var user = await _userManager.Users.Include(u => u.Image).SingleOrDefaultAsync(u => u.Id == userId);
            if (user == null) return NotFound(ErrorMessage.UserNotFound);

            if (user.Image == null || user.Image.FilePath == null) return NotFound(ErrorMessage.ErrorMessageFromString("The Profile picture not found"));

            var imageDto = user.Image.ToImageDto();

            this._fileManagerService.RemoveFileWithAnyExtension(user.Image.FilePath);

            await this._imageRepository.DeleteImage(user.Image.Id);

            return Ok(imageDto);

        }

        [HttpGet("cars/{id:int}")]
        public async Task<IActionResult> GetCarImages([FromRoute] int id, [FromQuery] GetAllImagesQueryObject getAllImagesQueryObject)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var dbResult = await this._imageRepository.GetCarImages(userId, id, getAllImagesQueryObject);

            if (dbResult.Error != null) return BadRequest(dbResult.Error);
            if (dbResult.Data == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error happend when tring to get all car images"));

            if (!getAllImagesQueryObject.WithImageData) return Ok(dbResult.Data.Select(i => i.ToImageDto()));

            var imageDtoList = new List<ImageDto>();

            foreach (var image in dbResult.Data)
            {
                if (image.FilePath == null) continue;
                var base64EncodedImage = await this._fileManagerService.GetFileBase64Encoded(image.FilePath);
                if (base64EncodedImage == null) return NotFound(ErrorMessage.ErrorMessageFromString("Internal Server Error. Failed To read the file"));
                imageDtoList.Add(image.ToImageDto(base64EncodedImage));
            }

            return Ok(imageDtoList);
        }

        [HttpPost("cars/{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> PostCarImage(IFormFile image, [FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var user = await this._context.Users.Where(u => u.Id == userId).Include(u => u.Cars).ThenInclude(c => c.Images).Include(u => u.Cars).ThenInclude(c => c.Auctions).FirstOrDefaultAsync();
            if (user == null) return BadRequest(ErrorMessage.UserNotFound);

            var car = user.Cars.FirstOrDefault(c => c.Id == id);
            if (car == null) return BadRequest(ErrorMessage.CarNotFound);

            if (image == null || image.Length <= 0) return BadRequest(ErrorMessage.ErrorMessageFromString("Invalid image"));

            string carImagePath = FileManagementUtil.GetOsDependentPath($"cars/{id}/");
            var subFilePathName = Path.Combine(carImagePath, image.FileName);

            var newFilePath = await this._fileManagerService.StoreFile(image, subFilePathName, false);
            if (newFilePath == null) return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error. Failed to save the car image"));

            var imageObject = image.ToImage(newFilePath, id);

            var savedImage = await this._imageRepository.StoreImage(imageObject);

            if (savedImage == null)
            {
                this._fileManagerService.RemoveFile(newFilePath);
                return NotFound(ErrorMessage.ErrorMessageFromString("Internal Server Error. Failed To save the car image detils"));
            };

            return Ok(savedImage.ToImageDto());

        }

        [HttpDelete("cars/{id:int}/{imageId:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteImage([FromRoute] int id, [FromRoute] int imageId)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var user = await this._context.Users.Where(u => u.Id == userId).Include(u => u.Cars).ThenInclude(c => c.Images).Include(u => u.Cars).ThenInclude(c => c.Auctions).FirstOrDefaultAsync();
            if (user == null) return BadRequest(ErrorMessage.UserNotFound);

            var car = user.Cars.FirstOrDefault(c => c.Id == id);
            if (car == null) return BadRequest(ErrorMessage.CarNotFound);

            if (car.Auctions.Any(a => a.IsActive)) return BadRequest(ErrorMessage.AlreadyInActiveAcution);

            var dBResult = await _imageRepository.DeleteImage(imageId);
            if (dBResult.Error != null) return BadRequest(dBResult.Error);

            this._fileManagerService.RemoveFile(dBResult.Data.FilePath);

            return Ok(dBResult.Data.ToImageDto());
        }

        [HttpDelete("cars/{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteAllImages([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var user = await this._context.Users.Where(u => u.Id == userId).Include(u => u.Cars).ThenInclude(c => c.Images).Include(u => u.Cars).ThenInclude(c => c.Auctions).FirstOrDefaultAsync();
            if (user == null) return BadRequest(ErrorMessage.UserNotFound);

            var car = user.Cars.FirstOrDefault(c => c.Id == id);
            if (car == null) return BadRequest(ErrorMessage.CarNotFound);

            if (car.Auctions.Any(a => a.IsActive)) return BadRequest(ErrorMessage.AlreadyInActiveAcution);

            var images = car.Images.ToList();

            foreach (var image in car.Images.ToList())
            {
                if (image.FilePath == null) continue;
                await _imageRepository.DeleteImage(image.Id);
            }

            string carImagePath = FileManagementUtil.GetOsDependentPath($"cars/{id}/");
            this._fileManagerService.RemoveDirectoryRecursivly(carImagePath);

            return Ok(images.Select(i => i.ToImageDto()));
        }
    }
}