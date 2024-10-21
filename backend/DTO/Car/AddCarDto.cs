using System.ComponentModel.DataAnnotations;
using DreamBid.Validation;

namespace DreamBid.Dtos.Car
{
    public class AddCarDto
    {
        [Required]
        [MaxLength(50)]
        public string Make { get; set; }

        [Required]
        [MaxLength(50)]
        public string Model { get; set; }

        [Required]
        [CarManufacturedYear]
        public short Year { get; set; }

        [Required]
        [Range(0, 1000000)]
        public float Mileage { get; set; }

        [Required]
        [MaxLength(20)]
        public string VIN { get; set; }


        public string ConditionReport { get; set; }

        [Required]
        public float StartingPrice { get; set; }

        public double? ReservePrice { get; set; }
    }
}