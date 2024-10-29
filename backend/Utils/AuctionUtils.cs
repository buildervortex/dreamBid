using DreamBid.Models;

namespace DreamBid.Utils
{
    public class AuctionUtils
    {
        public static bool IsAuctionActive(Auction auction, long beforeSeconds = 300)
        {
            var endTime = auction.auctionEndTime.AddSeconds(-beforeSeconds);
            return auction.auctionStartTime < DateTime.UtcNow && endTime > DateTime.UtcNow;
        }

        public static string? CanAddABid(Bid bid, Auction auction, long expireTimeBeforeSeconds = 300)
        {
            if (!IsAuctionActive(auction, expireTimeBeforeSeconds)) return "The Auction is not active";
            if (AuctionRemainingTime(auction, expireTimeBeforeSeconds) <= 0) return "The Auction is expired and not active anymore";
            if (bid.BidAmount <= auction.Car.StartingPrice) return $"The Bid should be greater than the starting price of the auction {auction.Car.StartingPrice}";
            if (auction.highestBidAmount != null)
            {
                if (bid.BidAmount <= auction.highestBidAmount) return $"The bid amount should be grater than the current bid amount {auction.highestBidAmount}";
            }
            return null;
        }

        public static long AuctionRemainingTime(Auction auction, long expireTimeBeforeSeconds = 300)
        {
            var endTime = auction.auctionEndTime.AddSeconds(-expireTimeBeforeSeconds);
            TimeSpan timeSpan = endTime - DateTime.UtcNow;
            if (timeSpan.Seconds <= 0) return 0;
            return timeSpan.Seconds;
        }

        public static string WinnerId(Auction auction)
        {
            if (auction.Bids.Count == 0) return null;
            var highestBid = auction.Bids.OrderByDescending(b => b.BidAmount).FirstOrDefault();
            if (highestBid == null) return null;
            if (auction.Car.ReservePrice != null)
            {
                if (highestBid.BidAmount < auction.Car.ReservePrice) return null;
            }
            if (highestBid.BidAmount <= auction.Car.StartingPrice) return null;
            return highestBid.UserId;
        }
    }
}

// end before 5 min