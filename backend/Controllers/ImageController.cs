using DreamBid.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DreamBid.Controllers
{
    [Route("api/v1/images")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IFileManagerService _fileManagerService;
        private readonly ICarRepository _carRepository;
        private readonly UserManager<DreamBid.Models.User> _userManager;
        private readonly ILogger<AccountController> _logger;
        public ImageController(IFileManagerService fileManagerService, ICarRepository carRepository, UserManager<DreamBid.Models.User> userManager, ILogger<AccountController> logger)
        {
            this._fileManagerService = fileManagerService;
            this._carRepository = carRepository;
            this._userManager = userManager;
            this._logger = logger;
        }


        [HttpGet("/profiles/{id:int}")]
        public async Task<IActionResult> GetProfileImageById()
        {
            return Ok();
        }

        [HttpGet("/profiles/me")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetProfileImage()
        {
            return Ok();
        }

        [HttpPost("/profiles/me")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> PostProfilePicture()
        {
            return Ok();
        }

        [HttpDelete("/profiles/me")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteProfilePicture()
        {
            return Ok();
        }

        [HttpGet("/cars/{id:int}")]
        public async Task<IActionResult> GetCarImage()
        {
            return Ok();
        }

        [HttpPost("/cars/{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> PostCarImage()
        {
            return Ok();
        }

        [HttpDelete("/cars/{id:int}/{imageId:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteImage()
        {
            return Ok();
        }

        [HttpDelete("/cars/{id:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteAllImages()
        {
            return Ok();
        }
    }
}