using DreamBid.Dtos.Error;
using DreamBid.Extensions;
using DreamBid.Helpers;
using DreamBid.Interfaces;
using DreamBid.Mappers;
using DreamBid.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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

        [HttpGet("")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetAllUserTransactions()
        {
            var userId = User.GetUserId();
            if (userId == null) return BadRequest(ErrorMessage.UserIdIncorrect);

            var dbResult = await this._transactionRepository.GetTransactions(userId);
            if (dbResult.Error != null) return BadRequest(dbResult.Error);

            return Ok(dbResult.Data.Select(t => t.ToTransactionDto()));
        }
    }
}


