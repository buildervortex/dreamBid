using DreamBid.Data;
using DreamBid.Interfaces;
using DreamBid.Service;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DreamBid.Controllers
{
    [Route("api/v1/transactions")]
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly IPayPalService _payPayService;
        private readonly ILogger<TransactionController> _logger;
        public TransactionController(ITransactionRepository transactionRepository, IPayPalService payPalService, ILogger<TransactionController> logger)
        {
            this._transactionRepository = transactionRepository;
            this._payPayService = payPalService;
            this._logger = logger;
        }

        [HttpGet("executePayment")]
        public async Task<IActionResult> Success([FromQuery] string token, [FromQuery] string PayerId, [FromQuery] string paymentId)
        {
            var payment = await this._payPayService.ExecutePayment(paymentId, PayerId);
            var transactionId = int.Parse(payment.transactions[0].custom);
            var payPalTransactionId = payment.transactions[0].related_resources[0].sale.id;

            if (payment.state == "approved")
            {
                var transaction = await this._transactionRepository.SetPayment(transactionId, "Success", payPalTransactionId);
                return Ok();
            }
            else
            {
                this._logger.LogCritical("The payment was unsuccessful");
                var transaction = await this._transactionRepository.SetPayment(transactionId, "Failed", payPalTransactionId);
            }
            return Ok();
        }
    }
}