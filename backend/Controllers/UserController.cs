using DreamBid.Dtos.Account;
using DreamBid.Interfaces;
using DreamBid.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Controllers
{
    [Route("api/v1/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ITokenService _tokenService;

        public AccountController(UserManager<ApplicationUser> userManager, ITokenService tokenService, SignInManager<ApplicationUser> signInManager)
        {
            this._userManager = userManager;
            this._tokenService = tokenService;
            this._signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)                            //  This checks if the data received in the registerDto object is valid according to the validation rules defined in the model (such as required fields or data formats).
                {
                    return BadRequest(ModelState);
                }
                var applicationUser = new ApplicationUser           // UserName and Email are set from the data received in the registerDto object.
                {
                    UserName = registerDto.Username,
                    Email = registerDto.Email,
                    DOB = registerDto.DOB,
                    FullName = registerDto.FullName
                };

                var createdUser = await _userManager.CreateAsync(applicationUser, registerDto.Password);        // attempts to create a new user in the system with the provided applicationUser object and registerDto.Password (hashed and stored).

                if (createdUser.Succeeded)                          // createdUser.Succeeded is a boolean indicating if the creation was successful.
                {
                    var roleResult = await _userManager.AddToRolesAsync(applicationUser, new string[] { "User" });  // If the user creation succeeds, the method assigns the user to a role (in this case, the "User" role). Asynchronously adds the user to one or more roles. In this case, the user is assigned the "User" role.new string[] { "User" }: This is an array of roles that the user will be added to. You can specify more roles in this array if needed.
                    if (roleResult.Succeeded)                       // This checks if assigning the role to the user was successful.
                    {
                        return Ok(new UserDto                    //  If the user was successfully created and assigned the role, the method returns an HTTP 200 Ok response.
                        {
                            UserName = applicationUser.UserName,
                            Email = applicationUser.Email,
                            Token = _tokenService.CreateToken(applicationUser)
                        });
                    }
                    else
                    {
                        return StatusCode(500, roleResult.Errors);
                    }
                }
                else
                {
                    return StatusCode(500, createdUser.Errors);
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.Email.ToLower() == loginDto.Email.ToLower());
            if (user == null)
            {
                return Unauthorized("Invalid Username or Password");
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
            if (!result.Succeeded)
                return Unauthorized("Invalid Username or Password");

            return Ok(new UserDto
            {
                UserName = user.UserName,
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            });
        }
    }
}