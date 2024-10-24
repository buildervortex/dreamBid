using DreamBid.Dtos.Bid;
using DreamBid.Models;

namespace DreamBid.Mappers
{
    public static class BidMapper
    {
        public static Bid ToBidFromAddBidDto(this AddBidDto addBidDto)
        {
            return new Bid
            {
                BidAmount = (double)addBidDto.BidAmount,
                BidDateTime = DateTime.UtcNow
            };
        }

        public static BidDto ToBidDto(this Bid bid)
        {
            return new BidDto
            {
                Id = bid.Id,
                AuctionId = bid.AuctionId,
                BidAmount = bid.BidAmount,
                BidDateTime = DateTime.SpecifyKind(bid.BidDateTime,DateTimeKind.Utc),
                UserId = bid.UserId
            };
        }
    }
}