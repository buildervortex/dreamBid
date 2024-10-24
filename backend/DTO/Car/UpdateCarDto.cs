using System.ComponentModel.DataAnnotations;
using DreamBid.Validation;

namespace DreamBid.Dtos.Car
{
    public class UpdateCarDto
    {
        [MaxLength(50)]
        public string? Make { get; set; } = null;

        [MaxLength(50)]
        public string? Model { get; set; } = null;

        [CarManufacturedYear(true)]
        public int? Year { get; set; } = null;

        [Range(0, 1000000)]
        public double? Mileage { get; set; } = null;

        [MaxLength(20)]
        public string? VIN { get; set; } = null;


        public string? ConditionReport { get; set; } = null;

        public double? StartingPrice { get; set; } = null;

        public double? ReservePrice { get; set; } = null;
    }
}