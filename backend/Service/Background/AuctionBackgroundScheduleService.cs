
using DreamBid.Data;
using DreamBid.Utils;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Service.Background
{
    public class AuctionBackgroundScheduleService : BackgroundService
    {
        private readonly TimeSpan _interval;
        private readonly IServiceProvider _serviceProvider;

        private readonly long beforeSeconds = 300;

        public AuctionBackgroundScheduleService(IServiceProvider serviceProvider, TimeSpan timeSpan)
        {
            this._interval = timeSpan;
            this._serviceProvider = serviceProvider;
        }


        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    await AuctionActivateService();
                    await AuctionDeActivateService();
                    await Task.Delay(this._interval, stoppingToken);
                }
                catch (TaskCanceledException e)
                {

                }
                catch (Exception e)
                {

                }
            }
        }

        private async Task AuctionActivateService()
        {
            using (var scope = this._serviceProvider.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

                var auctions = await dbContext.Auction.Where(a => a.IsActive == false && AuctionUtils.IsAuctionActive(a, this.beforeSeconds)).ToListAsync();
                foreach (var auction in auctions)
                {
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

                var auctions = await dbContext.Auction.Where(a => a.IsActive == true && AuctionUtils.AuctionRemainingTime(a, this.beforeSeconds) <= 0).Include(a => a.Bids).ThenInclude(b => b.User).ToListAsync();
                foreach (var auction in auctions)
                {
                    auction.IsActive = false;
                    auction.WinnderId = AuctionUtils.WinnerId(auction);
                }
                await dbContext.SaveChangesAsync();
            }
        }
    }
}