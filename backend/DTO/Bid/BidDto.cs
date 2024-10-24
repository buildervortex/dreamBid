namespace DreamBid.Dtos.Bid
{
    public class BidDto
    {
        public int Id { get; set; }
        public DateTime BidDateTime { get; set; }

        public double BidAmount { get; set; }

        public int AuctionId { get; set; }
        public string UserId { get; set; }
    }
}