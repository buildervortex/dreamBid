using DreamBid.Helpers.Auction;
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface IAuctionRepository
    {
        Task<Auction> AddAuctionAsync(Auction auction);

        Task<Auction?> GetAuction(int id);

        Task<List<Auction>> GetAllAuctions(GetAllAuctionQueryObject getAllAuctionQueryObject);

        Task<Auction> DeleteAuction(int id);
    }
}