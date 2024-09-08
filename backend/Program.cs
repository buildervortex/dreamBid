using DreamBid.Data;
using Microsoft.EntityFrameworkCore;

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

// configure the application db context
builder.Services
.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, new MySqlServerVersion(new Version(10, 11, 3)))
);

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();