using DreamBid.Data;
using DreamBid.Dtos.Error;
using DreamBid.Helpers;
using DreamBid.Helpers.Bid;
using DreamBid.Interfaces;
using DreamBid.Models;
using DreamBid.Utils;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Repository
{
    public class BidRepository : IBidRepository
    {
        private readonly ApplicationDbContext _context;
        private long beforeSeconds = 300;
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
            if (!AuctionUtils.IsAuctionActive(auction, this.beforeSeconds))
            {
                auction.IsActive = false;
                await _context.SaveChangesAsync();
                return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString("The auction is not active"));
            }
            var error = AuctionUtils.CanAddABid(bid, auction, this.beforeSeconds);
            if (error != null) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString(error));

            auction.Bids.Add(bid);
            auction.highestBidAmount = bid.BidAmount;
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
            if (!AuctionUtils.IsAuctionActive(auction, this.beforeSeconds))
            {
                auction.IsActive = false;
                await _context.SaveChangesAsync();
                return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString("The auction is not active"));
            }
            var error = AuctionUtils.CanAddABid(bid, auction, this.beforeSeconds);
            if (error != null) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString(error));

            if (bid == null) return new DBResult<Bid>(null, ErrorMessage.ErrorMessageFromString("Internal Server Error occoured when processing bid"));

            return new DBResult<Bid>(bid);
        }
    }
}