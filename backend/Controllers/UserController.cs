using DreamBid.Data;
using DreamBid.Dtos.Account;
using DreamBid.Dtos.Error;
using DreamBid.Dtos.User;
using DreamBid.Extensions;
using DreamBid.Interfaces;
using DreamBid.Mappers;
using DreamBid.Utils;
using HeyRed.Mime;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Controllers
{
    [Route("api/v1/accounts")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<DreamBid.Models.User> _userManager;
        private readonly SignInManager<DreamBid.Models.User> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly ILogger<AccountController> _logger;

        private readonly ApplicationDbContext _context;
        private readonly IFileManagerService _fileManagerService;

        public AccountController(UserManager<DreamBid.Models.User> userManager, ITokenService tokenService, SignInManager<DreamBid.Models.User> signInManager, ILogger<AccountController> logger, ApplicationDbContext context, IFileManagerService fileManagerService)
        {
            this._userManager = userManager;
            this._tokenService = tokenService;
            this._signInManager = signInManager;
            this._logger = logger;
            this._context = context;
            this._fileManagerService = fileManagerService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            var UserRole = "User";
            //  This checks if the data received in the registerDto object is valid according to the validation rules defined in the model (such as required fields or data formats).
            if (!ModelState.IsValid) return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var user = registerDto.ToUserFromRegisterDto();

            var createdUserResult = await _userManager.CreateAsync(user, registerDto.Password!);        // attempts to create a new user in the system with the provided User object and registerDto.Password (hashed and stored).

            if (!createdUserResult.Succeeded) return StatusCode(500, ErrorMessage.ErrorMessageFromIdentityResult(createdUserResult));

            var roleResult = await _userManager.AddToRolesAsync(user, new string[] { UserRole });

            if (!roleResult.Succeeded)
            {
                await _userManager.DeleteAsync(user);
                return StatusCode(500, ErrorMessage.ErrorMessageFromIdentityResult(roleResult));
            }

            Response.Headers.Append("x-auth-token", _tokenService.CreateToken(user, UserRole));

            return Ok(user.ToUserDto());
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.Email.ToLower() == loginDto.Email.ToLower());
            if (user == null)
            {
                return Unauthorized(ErrorMessage.ErrorMessageFromString("Invalid Username or Password"));
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
                return Unauthorized(ErrorMessage.ErrorMessageFromString("Invalid Username or Password"));

            Response.Headers.Append("x-auth-token", _tokenService.CreateToken(user, "User"));

            return Ok(user.ToUserDto());
        }

        [HttpDelete("me")]
        [Authorize]
        public async Task<IActionResult> DeleteUser()
        {
            var userId = User.GetUserId();
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            await user.CleanUpUser(this._fileManagerService, this._context, this._logger);
            var result = await _userManager.DeleteAsync(user);

            if (!result.Succeeded) return StatusCode(500, ErrorMessage.ErrorMessageFromString("The user deletion failed"));

            return Ok(user.ToUserDto());

        }

        [HttpGet("me")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetUser()
        {
            var userId = User.GetUserId();

            var user = await _userManager.FindByIdAsync(userId);

            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            return Ok(user.ToUserDto());
        }

        [HttpPost("me")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> UpdateUser([FromBody] UpdateUserDto updateUserDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));

            var userId = User.GetUserId();
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            var result = await _userManager.UpdateAsync(updateUserDto.ToUserFromUpdateUserDto(user));

            if (!result.Succeeded)
                return StatusCode(500, ErrorMessage.ErrorMessageFromString("Internal Server Error. Failed to upate the user"));

            return Ok(user.ToUserDto());
        }

    }
}