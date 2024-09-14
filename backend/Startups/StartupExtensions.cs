using DreamBid.Service.Configuration;
using DreamBid.Startups.Configuration;

namespace DreamBid.Startups
{
    public static class StartupExtensions
    {
        public static void ConfigureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.ConfigureSwagger();
            services.ConfigureJsonOptions();
            services.ConfigureDatabase(configuration);
            services.ConfigureAuthentication(configuration);
            services.ConfigureDependencies();
        }
    }
}