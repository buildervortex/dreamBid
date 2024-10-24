using DreamBid.Data;
using DreamBid.Interfaces;
using DreamBid.Models;
using PayPal.Api;

namespace DreamBid.Service
{
    public class PayPayService : IPayPalService
    {
        private readonly string _mode;
        private readonly string _clientId;
        private readonly string _clientSecret;
        private readonly string _cancleUrl;
        private readonly string _returnUrl;
        public PayPayService(string mode, string clientId, string clientSecret, string cancleUrl, string returnUrl)
        {
            this._mode = mode;
            this._clientId = clientId;
            this._clientSecret = clientSecret;
            this._cancleUrl = cancleUrl;
            this._returnUrl = returnUrl;
        }

        private APIContext GetAPIContext()
        {
            var config = new Dictionary<string, string>
            {
                {"mode",this._mode},
                {"clientId",this._clientId},
                {"clientSecret",this._clientSecret}
            };

            var accessToken = new OAuthTokenCredential(this._clientId, this._clientSecret).GetAccessToken();

            return new APIContext(accessToken) { Config = config };
        }

        public Payment CreatePayment(double amount, string transactionId, string description = "Payment for car auction bid")
        {
            var APIContext = GetAPIContext();

            var payment = new Payment
            {
                intent = "sale",
                payer = new Payer { payment_method = "paypal" },
                transactions = new List<PayPal.Api.Transaction>
                {
                    new PayPal.Api.Transaction{
                        description = description,
                        invoice_number = Guid.NewGuid().ToString(),
                        amount = new Amount{
                            currency = "USD",
                            total =amount.ToString("F2")
                        },
                        custom = transactionId
                    }
                },
                redirect_urls = new RedirectUrls
                {
                    cancel_url = this._cancleUrl,
                    return_url = this._returnUrl
                }
            };

            var createdPayment = payment.Create(APIContext);
            return createdPayment;
        }

        public async Task<Payment> ExecutePayment(string paymentId, string payerId)
        {
            var APIContext = GetAPIContext();
            var paymentExecution = new PaymentExecution { payer_id = payerId };
            var payment = new Payment { id = paymentId };

            var executedPayment = payment.Execute(APIContext, paymentExecution);

            return executedPayment;
        }
    }

}