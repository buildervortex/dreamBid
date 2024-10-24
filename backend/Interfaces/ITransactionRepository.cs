
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface ITransactionRepository
    {
        Task<Transaction> CreateTransaction(double amount, int bidId);

        Task<Transaction> SetPayment(int transactionId, string status, string? PaypalTransactionId);
    }
}