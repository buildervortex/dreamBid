using DreamBid.Startups;

var builder = WebApplication.CreateBuilder(args);

// configure startup services to configure all startup configurations
builder.Services.ConfigureServices(builder.Configuration);

builder.Services.AddControllers();


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
app.Run();
