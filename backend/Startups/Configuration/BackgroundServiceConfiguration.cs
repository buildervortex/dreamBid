using DreamBid.Service.Background;

namespace DreamBid.Startups.Configuration
{
    public static class BackgroundServiceConfiguration
    {
        // Add Extension to tthe IServiceCollection
        public static void ConfigureBackgroundServices(this IServiceCollection services)
        {
            // configure the auction service
            services.AddHostedService<AuctionBackgroundScheduleService>();
        }
    }
}