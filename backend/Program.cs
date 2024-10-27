using DreamBid.Dtos.Error;
using DreamBid.Middlewares;
using DreamBid.Startups;
using DreamBid.Startups.Configuration;

var builder = WebApplication.CreateBuilder(args);

// configure startup services to configure all startup configurations
builder.Services.ConfigureServices(builder.Configuration);

var app = builder.Build();

// Configure all the middlewares
app.ConfigureMiddlewares();

app.MapControllers();
app.Run();
