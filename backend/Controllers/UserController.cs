using System.IdentityModel.Tokens.Jwt;
using System.Reflection;
using System.Security.Claims;
using DreamBid.Dtos.Account;
using DreamBid.Dtos.Error;
using DreamBid.Extensions;
using DreamBid.Interfaces;
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

        public AccountController(UserManager<DreamBid.Models.User> userManager, ITokenService tokenService, SignInManager<DreamBid.Models.User> signInManager, ILogger<AccountController> logger)
        {
            this._userManager = userManager;
            this._tokenService = tokenService;
            this._signInManager = signInManager;
            this._logger = logger;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)                            //  This checks if the data received in the registerDto object is valid according to the validation rules defined in the model (such as required fields or data formats).
                {
                    return BadRequest(ErrorMessage.ErrorMessageFromModelState(ModelState));
                }
                var user = new DreamBid.Models.User           // UserName and Email are set from the data received in the registerDto object.
                {
                    UserName = registerDto.Username,
                    Email = registerDto.Email,
                    DOB = registerDto.DOB,
                    FullName = registerDto.FullName
                };

                var createdUserResult = await _userManager.CreateAsync(user, registerDto.Password);        // attempts to create a new user in the system with the provided User object and registerDto.Password (hashed and stored).

                if (createdUserResult.Succeeded)                          // createdUserResult.Succeeded is a boolean indicating if the creation was successful.
                {
                    var roleResult = await _userManager.AddToRolesAsync(user, new string[] { "User" });  // If the user creation succeeds, the method assigns the user to a role (in this case, the "User" role). Asynchronously adds the user to one or more roles. In this case, the user is assigned the "User" role.new string[] { "User" }: This is an array of roles that the user will be added to. You can specify more roles in this array if needed.
                    if (roleResult.Succeeded)                       // This checks if assigning the role to the user was successful.
                    {
                        Response.Headers["Authorization"] = _tokenService.CreateToken(user, "User");
                        return Ok(new UserDto                    //  If the user was successfully created and assigned the role, the method returns an HTTP 200 Ok response.
                        {
                            UserName = user.UserName,
                            Email = user.Email,
                        });
                    }
                    else
                    {
                        return StatusCode(500, ErrorMessage.ErrorMessageFromIdentityResult(roleResult));
                    }
                }
                else
                {
                    return StatusCode(500, ErrorMessage.ErrorMessageFromIdentityResult(createdUserResult));
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, ErrorMessage.ErrorMessageFromString("An unexpected error occoured"));
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
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

            Response.Headers["Authorization"] = _tokenService.CreateToken(user, "User");

            return Ok(new UserDto
            {
                UserName = user.UserName,
                Email = user.Email
            });
        }

        [Authorize]
        [HttpDelete("me")]
        public async Task<IActionResult> DeleteUser()
        {
            var userId = User.GetUserId();
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            await _userManager.DeleteAsync(user);

            return Ok(new UserDto
            {
                UserName = user.UserName,
                Email = user.Email
            });

        }

        [HttpGet("me")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetUser()
        {
            var userId = User.GetUserId();

            var user = await _userManager.FindByIdAsync(userId);

            if (user == null) return NotFound(ErrorMessage.ErrorMessageFromString("The user doesn't exists"));

            return Ok(new UserDto
            {
                UserName = user.UserName,
                Email = user.Email
            });
        }
    }
}
