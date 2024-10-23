using DreamBid.Data;
using DreamBid.Helpers.Auction;
using DreamBid.Interfaces;
using DreamBid.Models;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Repository
{
    public class AuctionRepository : IAuctionRepository
    {
        private readonly ApplicationDbContext _context;
        public AuctionRepository(ApplicationDbContext context)
        {
            this._context = context;
        }
        public async Task<Auction> AddAuctionAsync(Auction auction)
        {
            await _context.Auction.AddAsync(auction);
            await _context.SaveChangesAsync();

            return auction;
        }

        public async Task<Auction> DeleteAuction(int id)
        {
            var existingAuction = await _context.Auction.FirstOrDefaultAsync(a => a.Id == id);

            if (existingAuction == null) return null;

            _context.Auction.Remove(existingAuction);

            await _context.SaveChangesAsync();

            return existingAuction;
        }

        public async Task<List<Auction>> GetAllAuctions(GetAllAuctionQueryObject queryObject)
        {
            var auctions = _context.Auction.AsQueryable().Where(a => a.IsActive == queryObject.Active);

            if (queryObject.userId != null)
            {
                auctions = auctions.Where(a => a.Car.UserId == queryObject.userId);
            }

            if (queryObject.OrderBy.Equals("EndTime", StringComparison.OrdinalIgnoreCase))
            {
                auctions = queryObject.IsDecsending ? auctions.OrderByDescending(a => a.auctionEndTime) : auctions.OrderBy(a => a.auctionEndTime);
            }
            else if (queryObject.OrderBy.Equals("StartTime", StringComparison.OrdinalIgnoreCase))
            {
                auctions = queryObject.IsDecsending ? auctions.OrderByDescending(a => a.auctionStartTime) : auctions.OrderBy(a => a.auctionStartTime);
            }
            else if (queryObject.OrderBy.Equals("StartingPrice", StringComparison.OrdinalIgnoreCase))
            {
                auctions = queryObject.IsDecsending ? auctions.OrderByDescending(a => a.Car.StartingPrice) : auctions.OrderBy(a => a.Car.StartingPrice);
            }
            else if (queryObject.OrderBy.Equals("Mileage", StringComparison.OrdinalIgnoreCase))
            {
                auctions = queryObject.IsDecsending ? auctions.OrderByDescending(a => a.Car.Mileage) : auctions.OrderBy(a => a.Car.Mileage);
            }

            var skipNumber = (queryObject.PageNumber - 1) * queryObject.PageSize;

            return await auctions.Skip(skipNumber).Take(queryObject.PageSize).ToListAsync();
        }

        public async Task<Auction?> GetAuction(int id)
        {
            return await _context.Auction.FirstOrDefaultAsync(a => a.Id == id);
        }
    }
}