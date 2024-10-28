using DreamBid.Data;
using DreamBid.Dtos.Error;
using DreamBid.Helpers;
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
        public async Task<DBResult<Bid>> PlaceBidAsync(string userId, int auctionId, Bid bid)
        {
            bid.AuctionId = auctionId;
            bid.UserId = userId;

            var user = await this._context.Users.Where(u => u.Id == userId).FirstOrDefaultAsync();
            if (user == null) return new DBResult<Bid>(null, ErrorMessage.UserNotFound);

            var car = await this._context.Cars.Include(c => c.Auctions).ThenInclude(a => a.Bids).FirstOrDefaultAsync(car => car.Auctions.Any(a => a.Id == auctionId));
            if (car == null) return new DBResult<Bid>(null, ErrorMessage.AuctionNotFound);

            var auction = car.Auctions.FirstOrDefault(a => a.Id == auctionId);
            if (auction == null) return new DBResult<Bid>(null, ErrorMessage.AuctionNotFound);

            if (!auction.IsActive) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString("The auction is not active"));
            if (auction.auctionStartTime > DateTime.Now.ToUniversalTime() && DateTime.Now.ToUniversalTime() > auction.auctionEndTime) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString("The auction is not active"));
            if (bid.BidAmount <= car.StartingPrice) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString($"The bid should be greater than the auction starting price {car.StartingPrice}"));
            if (bid.BidAmount <= auction.highestBidAmount) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString($"The bid should be greater than the current current highest bid {auction.highestBidAmount}"));

            auction.Bids.Add(bid);
            await _context.SaveChangesAsync();

            return new DBResult<Bid>(bid);
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

        public async Task<DBResult<Bid>> CheckBidAvailability(string userId, int auctionId, Bid bid)
        {
            bid.AuctionId = auctionId;
            bid.UserId = userId;

            var user = await this._context.Users.Where(u => u.Id == userId).FirstOrDefaultAsync();
            if (user == null) return new DBResult<Bid>(null, ErrorMessage.UserNotFound);

            var car = await this._context.Cars.Include(c => c.Auctions).ThenInclude(a => a.Bids).FirstOrDefaultAsync(car => car.Auctions.Any(a => a.Id == auctionId));
            if (car == null) return new DBResult<Bid>(null, ErrorMessage.AuctionNotFound);

            var auction = car.Auctions.FirstOrDefault(a => a.Id == auctionId);
            if (auction == null) return new DBResult<Bid>(null, ErrorMessage.AuctionNotFound);

            if (!auction.IsActive) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString("The auction is not active"));
            if (auction.auctionStartTime > DateTime.Now.ToUniversalTime() && DateTime.Now.ToUniversalTime() > auction.auctionEndTime) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString("The auction is not active"));
            if (bid.BidAmount <= car.StartingPrice) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString($"The bid should be greater than the auction starting price {car.StartingPrice}"));
            if (bid.BidAmount <= auction.highestBidAmount) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString($"The bid should be greater than the current current highest bid {auction.highestBidAmount}"));
            if (bid == null) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString("Internal Server Error occoured when processing bid"));

            return new DBResult<Bid>(bid);
        }
    }
}