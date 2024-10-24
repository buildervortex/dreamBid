using PayPal.Api;

namespace DreamBid.Interfaces
{
    public interface IPayPalService
    {
        Payment CreatePayment(double amount, string transactionId, string description = "Payment for car auction bid");
        Task<Payment> ExecutePayment(string paymentId, string payerId);
    }
}