using System.ComponentModel.DataAnnotations;

namespace DreamBid.Dtos.Bid
{
    public class AddBidDto
    {
        [Required]
        public double? BidAmount { get; set; }
    }
}