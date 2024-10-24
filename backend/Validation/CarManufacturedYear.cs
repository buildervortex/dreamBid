using System.ComponentModel.DataAnnotations;

namespace DreamBid.Validation
{
    public class CarManufacturedYearAttribute : ValidationAttribute
    {
        private Boolean _nullable;
        public CarManufacturedYearAttribute(Boolean nullable = false)
        {
            this._nullable = nullable;
        }
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value == null && this._nullable) return ValidationResult.Success;
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