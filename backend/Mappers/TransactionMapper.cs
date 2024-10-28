using DreamBid.Dtos.Transaction;
using DreamBid.Models;

namespace DreamBid.Mappers
{
    public static class TransactionMapper
    {
        public static TransactionDto ToTransactionDto(this Transaction transaction)
        {
            return new TransactionDto
            {
                Amount = transaction.Amount,
                BidId = transaction.BidId,
                Id = transaction.Id,
                PaypalTransactionId = transaction.PaypalTransactionId,
                Status = transaction.Status,
                TransactionDate = transaction.TransactionDate
            };
        }
    }
}