
using DreamBid.Data;
using DreamBid.Utils;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Service.Background
{
    public class AuctionBackgroundScheduleService : BackgroundService
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ILogger<AuctionBackgroundScheduleService> _logger;

        private readonly long beforeSeconds = 300;

        public AuctionBackgroundScheduleService(IServiceProvider serviceProvider, ILogger<AuctionBackgroundScheduleService> logger)
        {
            this._serviceProvider = serviceProvider;
            this._logger = logger;
        }


        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            this._logger.LogInformation("Auction Background Schedular Started");
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    await AuctionActivateService();
                    await AuctionDeActivateService();
                    await Task.Delay(TimeSpan.FromMinutes(1), stoppingToken);
                }
                catch (TaskCanceledException e)
                {
                    _logger.LogError(e, "Error happend when running the background schedular");
                }
                catch (Exception e)
                {
                    _logger.LogError(e, "Error happend when running the background schedular");
                }
            }
            this._logger.LogInformation("The Auction Background Schedular Service Stopped");
        }

        private async Task AuctionActivateService()
        {
            using (var scope = this._serviceProvider.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

                var auctions = await dbContext.Auction.Where(a => a.IsActive == false).Include(a => a.Bids).ThenInclude(b => b.User).Include(a => a.Car).ToListAsync();
                auctions = auctions.Where(a => AuctionUtils.IsAuctionActive(a, this.beforeSeconds)).ToList();
                foreach (var auction in auctions)
                {
                    this._logger.LogDebug($"Activate the acution. {auction}");
                    auction.IsActive = true;
                }
                await dbContext.SaveChangesAsync();
            }
        }

        private async Task AuctionDeActivateService()
        {
            using (var scope = this._serviceProvider.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

                var auctions = await dbContext.Auction.Where(a => a.IsActive == true).Include(a => a.Bids).ThenInclude(b => b.User).Include(a => a.Car).ToListAsync();
                auctions = auctions.Where(a => AuctionUtils.AuctionRemainingTime(a, this.beforeSeconds) <= 0).ToList();
                foreach (var auction in auctions)
                {
                    auction.IsActive = false;
                    auction.WinnderId = AuctionUtils.WinnerId(auction);
                    this._logger.LogDebug($"Deactivate the auction. {auction}");
                }
                await dbContext.SaveChangesAsync();
            }
        }
    }
}