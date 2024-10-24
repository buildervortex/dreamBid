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

        public string PaypalTransactionId { get; set; }

        public double Amount { get; set; }

        public DateTime TransactionDate { get; set; }

        public string Status { get; set; }

        public int BidId { get; set; }
        public Bid Bid { get; set; }
    }
}