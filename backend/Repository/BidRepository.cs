using DreamBid.Data;
using DreamBid.Helpers.Bid;
using DreamBid.Interfaces;
using DreamBid.Models;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Repository
{
    public class BidRepository : IBidRepository
    {
        private readonly ApplicationDbContext _context;
        public BidRepository(ApplicationDbContext context)
        {
            this._context = context;
        }
        public async Task<Bid> AddBid(Bid bid)
        {
            await _context.Bids.AddAsync(bid);
            await _context.SaveChangesAsync();

            return bid;
        }

        public Task<Bid> GetBid(int id)
        {
            return _context.Bids.FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<List<Bid>> GetBids(int auctionId, GetAllBidQueryObject queryObject)
        {
            var bids = _context.Bids.AsQueryable().Where(b => b.AuctionId == auctionId);

            bids = queryObject.IsDecsending ? bids.OrderByDescending(b => b.BidAmount) : bids.OrderBy(b => b.BidAmount);

            var skipNumber = (queryObject.PageNumber - 1) * queryObject.PageSize;

            return await bids.Skip(skipNumber).Take(queryObject.PageSize).ToListAsync();
        }
    }
}