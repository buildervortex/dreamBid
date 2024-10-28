using DreamBid.Helpers;
using PayPal.Api;

namespace DreamBid.Interfaces
{
    public interface IPayPalService
    {
        DBResult<Payment> CreatePayment(double amount, string retureUrl, string cancleUrl, string customData = "", string description = "Payment for car auction bid");
        DBResult<Payment> ExecutePayment(string paymentId, string payerId);
    }
}