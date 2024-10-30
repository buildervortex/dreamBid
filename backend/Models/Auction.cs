using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DreamBid.Models
{
    [Table("Auctions")]
    public class Auction
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        private DateTime _auctionStartTime;

        [Required]
        public DateTime auctionStartTime { get => DateTime.SpecifyKind(_auctionStartTime, DateTimeKind.Utc); set => _auctionStartTime = value; }

        public DateTime _auctionEndTime;

        [Required]
        public DateTime auctionEndTime { get => DateTime.SpecifyKind(_auctionEndTime, DateTimeKind.Utc); set => _auctionEndTime = value; }

        public string? WinnderId { get; set; } = null;

        public double? highestBidAmount { get; set; } = null;

        public bool IsActive { get; set; }

        public int CarId { get; set; }

        [ForeignKey("CarId")]
        public Car Car { get; set; }

        public ICollection<Bid> Bids { get; set; } = new List<Bid>();

        public ValidationResult Validation()
        {
            if (auctionStartTime.Date < DateTime.UtcNow.Date)
            {
                return new ValidationResult("Auction start time must be today or in the future.");
            }

            if (auctionEndTime <= auctionStartTime.AddMinutes(10))
            {
                return new ValidationResult("Auction end time must be at least 10 minutes after the start time.");
            }

            return ValidationResult.Success;
        }

        public override string ToString()
        {
            return $"Auction Model Object detials. ( Id: {Id} ), ( auctionStartTime: {auctionStartTime.ToLocalTime()} ), ( auctionEndTime: {auctionEndTime.ToLocalTime()} ), ( WinnerId: {WinnderId} ), ( highestBidAmount: {highestBidAmount} ), ( isActive: {IsActive} ), ( cardId: {CarId})";
        }

    }
}