using System.ComponentModel.DataAnnotations;

namespace DreamBid.Dtos.Auction
{
    public class AddAuctionDto : IValidatableObject
    {

        private DateTime? _AuctionStartTime { get; set; }
        [Required]
        public DateTime? AuctionStartTime { get => _AuctionStartTime != null ? DateTime.SpecifyKind((DateTime)_AuctionStartTime, DateTimeKind.Utc) : null; set => _AuctionStartTime = DateTime.SpecifyKind((DateTime)value, DateTimeKind.Utc); }

        private DateTime? _AuctionEndTime { get; set; }

        [Required]
        public DateTime? AuctionEndTime { get => _AuctionEndTime != null ? DateTime.SpecifyKind((DateTime)_AuctionEndTime, DateTimeKind.Utc) : null; set => _AuctionEndTime = DateTime.SpecifyKind((DateTime)value, DateTimeKind.Utc); }


        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (AuctionStartTime < DateTime.UtcNow)
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