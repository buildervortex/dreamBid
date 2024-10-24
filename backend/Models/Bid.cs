using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DreamBid.Models
{
    [Table("Bids")]
    public class Bid
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public DateTime BidDateTime { get; set; }

        public double BidAmount { get; set; }

        public int AuctionId { get; set; }
        public Auction Auction { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }

        public int TransactionId { get; set; }
        public Transaction Transaction { get; set; }
    }
}