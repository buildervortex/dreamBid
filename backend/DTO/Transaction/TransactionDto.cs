namespace DreamBid.Dtos.Transaction
{
    public class TransactionDto
    {
        public int Id { get; set; }

        public string? PaypalTransactionId { get; set; } = null;

        public double Amount { get; set; }

        public DateTime TransactionDate { get; set; }

        public string Status { get; set; }

        public int? BidId { get; set; }
    }
}