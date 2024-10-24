using DreamBid.Data;
using DreamBid.Interfaces;
using DreamBid.Models;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Repository
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly ApplicationDbContext _context;
        public TransactionRepository(ApplicationDbContext context)
        {
            this._context = context;
        }
        public async Task<Transaction> CreateTransaction(double amount, int bidId)
        {
            var transaction = new Transaction
            {
                Amount = amount,
                BidId = bidId,
                Status = "Pending",
                TransactionDate = DateTime.UtcNow,
                PaypalTransactionId = null
            };

            await _context.Transaction.AddAsync(transaction);
            await _context.SaveChangesAsync();

            return transaction;
        }

        public async Task<Transaction> SetPayment(int transactionId, string status, string? PaypalTransactionId)
        {
            var existingTransaction = await _context.Transaction.FirstOrDefaultAsync(t => t.Id == transactionId);

            if (existingTransaction == null) return null;

            existingTransaction.Status = status;
            existingTransaction.PaypalTransactionId = PaypalTransactionId == null ? existingTransaction.PaypalTransactionId : PaypalTransactionId;

            await _context.SaveChangesAsync();

            return existingTransaction;
        }
    }
}