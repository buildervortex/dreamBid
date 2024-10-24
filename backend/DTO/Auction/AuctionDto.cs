namespace DreamBid.Dtos.Auction
{
    public class AuctionDto
    {
        public int id { get; set; }

        public DateTime auctionStartTime { get; set; }

        public DateTime auctionEndTime { get; set; }

        public string? winnerId { get; set; } = null;

        public double? highestBidAmount { get; set; } = null;

        public bool isActive { get; set; }

        public int carId { get; set; }

    }
}