
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface ITransactionRepository:IRepository
    {
        Task<Transaction> CreateTransaction(double amount, int bidId);

        Task<Transaction> SetPayment(int transactionId, string status, string? PaypalTransactionId);
    }
}