using DreamBid.Data;
using DreamBid.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

/* Configure all the database connectivity */
// read environment variables
var dbServer = Environment.GetEnvironmentVariable("dreamBidServer") ?? "localhost";
var dbUserName = Environment.GetEnvironmentVariable("dreamBidUserName") ?? "dreamBid";
var dbPassword = Environment.GetEnvironmentVariable("dreamBidPassword") ?? "dreamBid";

var connectionString = $"Server={dbServer};Database=dreamBid;User={dbUserName};Password={dbPassword}";

/* Configure all the dependency injections */

// configure the application db context dependency injection
builder.Services
.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, new MySqlServerVersion(new Version(10, 11, 3)))
);

// This line registers the authentication services with the ASP.NET Core Dependency Injection (DI) system. It specifies the configuration for the authentication schemes used in the application.
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    // configure the identity service.
    // configure the password strength
    options.Password.RequireDigit = true;                               // This setting enforces that passwords must contain at least one digit (0-9).
    options.Password.RequireLowercase = true;                           // This ensures that passwords must include at least one lowercase letter (a-z).
    options.Password.RequireUppercase = true;                           // This setting enforces the inclusion of at least one uppercase letter (A-Z) in passwords.
    options.Password.RequireNonAlphanumeric = false;                    // This configuration specifies whether passwords must contain at least one non-alphanumeric character (e.g., special characters like !, @, #). Setting this to false means that while passwords 
    options.Password.RequiredLength = 6;                                // This sets the minimum length for passwords.
    // configure the login configurations
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);   // the login in timeout to log out
    options.Lockout.MaxFailedAccessAttempts = 5;                        // maximum failed attepmts
    // set the user requirements
    options.User.RequireUniqueEmail = true;                             // set the 
}).AddEntityFrameworkStores<ApplicationDbContext>();                    // This method specifies that Identity should use ApplicationDbContext for storing user data. 


// Configure the JWT Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultForbidScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters   // This section sets the rules for validating JWT tokens.
    {
        ValidateIssuer = true,                                          // Ensures the token has been issued by a trusted issuer. "true" is (Recommended for production; checks the iss claim in the token)
        ValidIssuer = builder.Configuration["JWT:Issure"],              // The issuer value that you expect. This should match the iss claim in the token. can put Any valid string representing the trusted issuer, 
        ValidateAudience = true,                                        // Ensures that the token is intended for the correct audience (i.e., the resource that the token is intended for). "true" is (Recommended in most cases; checks the aud claim in the token)
        ValidAudience = builder.Configuration["JWT:Audience"],          // The expected audience for your tokens. This should match the aud claim in the token.Any string that represents your API or application.
        ValidateIssuerSigningKey = true,                                // Ensures the token's signature is valid by checking it against the key used to sign the token.
        IssuerSigningKey = new SymmetricSecurityKey(                    // The key used to validate the token's signature. This key is usually stored securely 
            System.Text.Encoding.UTF8.GetBytes(builder.Configuration["JWT:SigninKey"])
        )

    };
});

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();
app.UseAuthentication();
app.UseAuthorization();
app.Run(); app.UseHttpsRedirection();
