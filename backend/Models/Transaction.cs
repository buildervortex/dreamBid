using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DreamBid.Models
{
    [Table("Transaction")]
    public class Transaction
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string? PaypalTransactionId { get; set; } = null;

        public double Amount { get; set; }

        public DateTime TransactionDate { get; set; }

        public string Status { get; set; }

        public int? BidId { get; set; }
        public Bid? Bid { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }

        public override string ToString()
        {
            return $"The Transaction Model Object Details. ( Id: {Id} ), ( PaypalTransactionId: {PaypalTransactionId} ), ( Amount: {Amount} ), ( TransactionDate: {TransactionDate} ), ( Status: {Status} ), ( BidId: {BidId} )";
        }
    }
}