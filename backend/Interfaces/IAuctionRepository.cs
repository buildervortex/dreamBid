using DreamBid.Helpers;
using DreamBid.Helpers.Auction;
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface IAuctionRepository : IRepository
    {
        Task<DBResult<Auction>> AddAuctionAsync(Auction auction, string userId, int carId);

        Task<DBResult<Auction>> GetAuctionAsync(int id);

        Task<DBResult<List<Auction>>> GetAllAuctionsAsync(GetAllAuctionQueryObject getAllAuctionQueryObject);

        Task<DBResult<Auction>> DeleteAuctionAsync(string userId, int auctionId);
    }
}