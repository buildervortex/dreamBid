using DreamBid.Data;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Startups.Configuration
{
    public static class DatabaseConfiguration
    {
        // Add Extension to tthe IServiceCollection
        public static void ConfigureDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            /* Configure all the database connectivity */
            // read environment variables
            var dbServer = Environment.GetEnvironmentVariable("dreamBidServer") ?? "localhost";
            var dbUserName = Environment.GetEnvironmentVariable("dreamBidUserName") ?? "dreamBid";
            var dbPassword = Environment.GetEnvironmentVariable("dreamBidPassword") ?? "dreamBid";

            var connectionString = $"Server={dbServer};Database=dreamBid;User={dbUserName};Password={dbPassword}";

            /* Configure all the dependency injections */

            // configure the application db context dependency injection
            services
            .AddDbContext<ApplicationDbContext>(options =>
                options.UseMySql(connectionString, new MySqlServerVersion(new Version(10, 11, 3)))
            );

        }
    }
}