using DreamBid.Dtos.Error;

namespace DreamBid.Startups.Configuration
{
    public static class MiddlewareConfiguration
    {
        // Add Extension to tthe IServiceCollection
        public static void ConfigureMiddlewares(this WebApplication webApplication)
        {
            // configure the swagger middleware
            if (webApplication.Environment.IsDevelopment())
            {
                webApplication.UseSwagger();
                webApplication.UseSwaggerUI();
            }

            // Add Custom middleware to handle 404 not found urls
            webApplication.Use(async (context, next) =>
            {
                await next.Invoke();
                if (context.Response.StatusCode == StatusCodes.Status404NotFound)
                {
                    context.Response.ContentType = "application/json";

                    var response = ErrorMessage.NotFound404;
                    await context.Response.WriteAsJsonAsync(response);
                }
                else if (context.Response.StatusCode == StatusCodes.Status405MethodNotAllowed)
                {
                    context.Response.ContentType = "application/json";

                    var response = ErrorMessage.NotFound405;
                    await context.Response.WriteAsJsonAsync(response);

                }
            });

            // add the third-party middlwares
            webApplication.UseCors("AllowAllOrigins");
            webApplication.UseHttpsRedirection();
            webApplication.UseAuthentication();
            webApplication.UseAuthorization();
        }
    }
}