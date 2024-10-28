
using DreamBid.Dtos.Transaction;
using DreamBid.Helpers;
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface ITransactionRepository : IRepository
    {
        Task<DBResult<Transaction>> CreateTransactionAsync(Transaction transaction);

        Task<DBResult<Transaction>> UpdateTransactionAsync(int transactionId, UpdateTransactionDto transaction);

        Task<DBResult<List<Transaction>>> GetTransactions(string userId);
    }
}