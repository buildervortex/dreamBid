using System.ComponentModel.DataAnnotations;

namespace DreamBid.Helpers.Auction
{
    public class AuctionDetails
    {
        public bool WithBids { get; set; } = false;
        public bool WithCar { get; set; } = false;
    }
}