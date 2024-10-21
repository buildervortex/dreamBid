using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DreamBid.Validation;

namespace DreamBid.Models
{
    [Table("Cars")]
    public class Car
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Make { get; set; }

        [Required]
        [MaxLength(50)]
        public string Model { get; set; }

        [Required]
        [CarManufacturedYear]
        public int Year { get; set; }

        [Required]
        [Range(0, 1000000)]
        public double Mileage { get; set; }

        // vehicle identification number
        [Required]
        [MaxLength(20)]
        public string VIN { get; set; }

        public string ConditionReport { get; set; } = string.Empty;

        // Auction start price
        [Required]
        public double StartingPrice { get; set; }

        // Auction reserve price (nullable if no reserve). Minimum price that seller need to sell the car
        public double? ReservePrice { get; set; }

        // Foreign key property that stores the user id
        public string UserId { get; set; }

        // Navigation property 
        [ForeignKey("UserId")]
        public User User { get; set; }

        public ICollection<Image> Images { get; set; }

    }
}