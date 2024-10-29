using DreamBid.Data;
using DreamBid.Interfaces;
using DreamBid.Models;
using DreamBid.Repository;
using DreamBid.Service;
using DreamBid.Service.Background;
using Microsoft.AspNetCore.Identity;

namespace DreamBid.Startups.Configuration
{
    public static class BackgroundServiceConfiguration
    {
        // Add Extension to tthe IServiceCollection
        public static void ConfigureBackgroundServices(this IServiceCollection services, IConfiguration configuration)
        {

            // configure the auction service
            services.AddHostedService(provider =>
                new AuctionBackgroundScheduleService(provider, TimeSpan.FromMinutes(5))
            );
        }
    }
}