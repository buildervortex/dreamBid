using DreamBid.Helpers;
using DreamBid.Helpers.Bid;
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface IBidRepository : IRepository
    {
        Task<DBResult<Bid>> PlaceBidAsync(string userId, int auctionId, Bid bid);

        Task<Bid> GetBid(int id);

        Task<List<Bid>> GetBids(int auctionId, GetAllBidQueryObject getAllBidQueryObject);

        Task<DBResult<Bid>> CheckBidAvailability(string userId, int auctionId, Bid bid);
    }
}