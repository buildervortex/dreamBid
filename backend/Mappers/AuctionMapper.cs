using DreamBid.Dtos.Auction;
using DreamBid.Models;

namespace DreamBid.Mappers
{
    public static class AuctionMapper
    {
        public static Auction ToAuctionFromAddAuctionDto(this AddAuctionDto addAuctionDto)
        {
            return new Auction
            {
                auctionStartTime = (DateTime)addAuctionDto.AuctionStartTime,
                auctionEndTime = (DateTime)addAuctionDto.AuctionEndTime,
                IsActive = true,
            };
        }

        public static AuctionDto ToAuctionDto(this Auction auction)
        {
            return new AuctionDto
            {
                auctionEndTime = DateTime.SpecifyKind(auction.auctionEndTime, DateTimeKind.Utc),
                auctionStartTime = DateTime.SpecifyKind(auction.auctionStartTime, DateTimeKind.Utc),
                carId = auction.CarId,
                highestBidAmount = auction.highestBidAmount,
                id = auction.Id,
                isActive = auction.IsActive,
                winnerId = auction.WinnderId,
                Bids = auction.Bids.Select(b => b.ToBidDto()).ToList(),
                Car = auction.Car != null ? auction.Car.ToCarDto() : null
            };
        }
    }
}