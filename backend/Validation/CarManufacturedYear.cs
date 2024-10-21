using System.ComponentModel.DataAnnotations;

namespace DreamBid.Validation
{
    public class CarManufacturedYearAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is int year)
            {
                int currentYear = DateTime.Now.Year;
                if (year <= currentYear) return ValidationResult.Success;
                else return new ValidationResult($"The year {year} cannot be in the future");
            }
            return new ValidationResult("Invalid year format");
        }
    }
}