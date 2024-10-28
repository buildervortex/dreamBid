using DreamBid.Data;
using DreamBid.Dtos.Error;
using DreamBid.Helpers;
using DreamBid.Interfaces;
using DreamBid.Models;
using PayPal;
using PayPal.Api;

namespace DreamBid.Service
{
    public class PayPayService : IPayPalService
    {
        private readonly string _mode;
        private readonly string _clientId;
        private readonly string _clientSecret;
        public PayPayService(string mode, string clientId, string clientSecret)
        {
            this._mode = mode;
            this._clientId = clientId;
            this._clientSecret = clientSecret;
        }

        private APIContext GetAPIContext()
        {
            string accessToken;
            var config = new Dictionary<string, string>
            {
                {"mode",this._mode},
                {"clientId",this._clientId},
                {"clientSecret",this._clientSecret}
            };

            try
            {
                accessToken = new OAuthTokenCredential(this._clientId, this._clientSecret).GetAccessToken();
                if (accessToken == null) return null;
            }
            catch (PayPalException ex)
            {
                return null;
            }
            return new APIContext(accessToken) { Config = config };
        }

        public DBResult<Payment> CreatePayment(double amount, string retureUrl, string cancleUrl, string customData = "",  string description = "Payment for car auction bid")
        {
            var APIContext = GetAPIContext();
            if (APIContext == null) return new DBResult<Payment>(null, ErrorMessage.ErrorMessageFromString("InternalServer Error. Unable to authenticate payment API"));

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
                        custom = customData
                    }
                },
                redirect_urls = new RedirectUrls
                {
                    cancel_url = cancleUrl,
                    return_url = retureUrl
                }
            };
            try
            {
                var createdPayment = payment.Create(APIContext);
                if (createdPayment == null) return new DBResult<Payment>(null, ErrorMessage.ErrorMessageFromString("Internal Server Error occoured when creating the payment"));
                return new DBResult<Payment>(createdPayment);
            }
            catch (PayPalException ex)
            {
                return new DBResult<Payment>(null, ErrorMessage.ErrorMessageFromString("Internal Server Error. Unable to create the payment"));
            }
        }

        public DBResult<Payment> ExecutePayment(string paymentId, string payerId)
        {
            var APIContext = GetAPIContext();
            var paymentExecution = new PaymentExecution { payer_id = payerId };
            var payment = new Payment { id = paymentId };

            try
            {
                var executedPayment = payment.Execute(APIContext, paymentExecution);
                if (executedPayment == null) return new DBResult<Payment>(null, ErrorMessage.ErrorMessageFromString("Internal Server Error occoured when executing the pyament"));
                return new DBResult<Payment>(executedPayment);
            }
            catch (PayPalException e)
            {
                return new DBResult<Payment>(null, ErrorMessage.ErrorMessageFromString("Internal Server Error. Unable execute the payment"));
            }

        }

    }

}