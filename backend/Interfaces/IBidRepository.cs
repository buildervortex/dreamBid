using DreamBid.Helpers.Bid;
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface IBidRepository
    {
        Task<Bid> AddBid(Bid bid);

        Task<Bid> GetBid(int id);

        Task<List<Bid>> GetBids(int auctionId, GetAllBidQueryObject getAllBidQueryObject);
    }
}