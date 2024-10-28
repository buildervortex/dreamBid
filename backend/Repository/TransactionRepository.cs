using DreamBid.Data;
using DreamBid.Dtos.Error;
using DreamBid.Dtos.Transaction;
using DreamBid.Helpers;
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
        public async Task<DBResult<Transaction>> CreateTransactionAsync(Transaction transaction)
        {
            await _context.Transaction.AddAsync(transaction);
            await _context.SaveChangesAsync();
            return new DBResult<Transaction>(transaction);
        }

        public async Task<DBResult<Transaction>> UpdateTransactionAsync(int transactionId, UpdateTransactionDto updateTransactionDto)
        {
            var existingTransaction = await _context.Transaction.FirstOrDefaultAsync(t => t.Id == transactionId);
            if (existingTransaction == null) return new DBResult<Transaction>(null, ErrorMessage.ErrorMessageFromString("The updateTransactionDto was not found"));

            existingTransaction.PaypalTransactionId = updateTransactionDto.PaypalTransactionId == null ? existingTransaction.PaypalTransactionId : updateTransactionDto.PaypalTransactionId;
            existingTransaction.Amount = updateTransactionDto.Amount == null ? existingTransaction.Amount : (double)updateTransactionDto.Amount;
            existingTransaction.TransactionDate = updateTransactionDto.TransactionDate == null ? existingTransaction.TransactionDate : (DateTime)updateTransactionDto.TransactionDate;
            existingTransaction.Status = updateTransactionDto.Status == null ? existingTransaction.Status : updateTransactionDto.Status;
            existingTransaction.BidId = updateTransactionDto.BidId == null ? existingTransaction.BidId : updateTransactionDto.BidId;

            await _context.SaveChangesAsync();
            if (existingTransaction == null) return new DBResult<Transaction>(null, ErrorMessage.ErrorMessageFromString("Internal Server Error occoured when adding the transaction to the database"));
            return new DBResult<Transaction>(existingTransaction);
        }

        public async Task<DBResult<List<Transaction>>> GetTransactions(string userId)
        {
            var user = await this._context.Users.Where(u => u.Id == userId).Include(u => u.Transactions).FirstOrDefaultAsync();
            if (user == null) return new DBResult<List<Transaction>>(null, ErrorMessage.UserNotFound);

            return new DBResult<List<Transaction>>(user.Transactions.ToList());
        }
    }
}