using System.ComponentModel.DataAnnotations;

namespace DreamBid.Dtos.Auction
{
    public class AddAuctionDto : IValidatableObject
    {

        [Required]
        public DateTime? AuctionStartTime { get; set; }

        [Required]
        public DateTime? AuctionEndTime { get; set; }

        public ValidationResult Validate()
        {
            if (AuctionStartTime?.Date < DateTime.UtcNow.Date)
            {
                return new ValidationResult("Auction start time must be today or in the future.");
            }

            if (AuctionEndTime <= AuctionStartTime?.AddMinutes(10))
            {
                return new ValidationResult("Auction end time must be at least 10 minutes after the start time.");
            }

            return ValidationResult.Success;
        }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (AuctionStartTime?.Date < DateTime.UtcNow.Date)
            {
                yield return new ValidationResult("Auction start time must be today or in the future.");
            }

            if (AuctionEndTime < AuctionStartTime?.AddMinutes(10))
            {
                yield return new ValidationResult("Auction end time must be at least 10 minutes after the start time.");
            }

            yield return ValidationResult.Success;
        }
    }
}