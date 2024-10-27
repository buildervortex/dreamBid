using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace DreamBid.Dtos.Error
{
    public class ErrorMessage
    {

        public static readonly ErrorMessage UserNotFound = new ErrorMessage("User Not Found");
        public static readonly ErrorMessage CarNotFound = new ErrorMessage("Car Not Found");
        public static readonly ErrorMessage AuctionNotFound = new ErrorMessage("Auction Not Found");
        public static readonly ErrorMessage BidNotFound = new ErrorMessage("Bid Not Found");
        public static readonly ErrorMessage TransactionNotFound = new ErrorMessage("Transaction Not Found");
        public static readonly ErrorMessage ImageNotFound = new ErrorMessage("Image Not Found");
        public static readonly ErrorMessage UserIdIncorrect = new ErrorMessage("User Id Incorrect");
        public static readonly ErrorMessage AlreadyInActiveAcution = new ErrorMessage("The car is already in an acitve auction");
        public static readonly ErrorMessage NotFound404 = new ErrorMessage("The requested resource was not found on this server");
        public static readonly ErrorMessage NotFound405 = new ErrorMessage("The requested resource was not found on this http method");

        public string Error { get; set; }

        private ErrorMessage(string message)
        {
            this.Error = message;
        }
        public static ErrorMessage ErrorMessageFromModelState(ModelStateDictionary modelState)
        {
            if (modelState.ErrorCount < 0) throw new Exception("Internal Server Error");

            var error = modelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).FirstOrDefault();

            ErrorMessage errorMessage = new ErrorMessage(error);

            return errorMessage;
        }

        public static ErrorMessage ErrorMessageFromString(string error)
        {
            return new ErrorMessage(error);
        }

        public static ErrorMessage ErrorMessageFromIdentityResult(IdentityResult identityResult)
        {
            var error = identityResult.Errors.Select(e => e.Description).FirstOrDefault();
            return new ErrorMessage(error);
        }
    }
}