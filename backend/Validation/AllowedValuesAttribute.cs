using System.ComponentModel.DataAnnotations;

public class AllowedValuesAttribute : ValidationAttribute
{
    private readonly HashSet<string> _allowedValues;

    public AllowedValuesAttribute(params string[] allowedValues)
    {
        _allowedValues = new HashSet<string>(allowedValues);
    }

    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value != null && !_allowedValues.Contains(value.ToString()))
        {
            return new ValidationResult($"The value '{value}' is not allowed. Allowed values are: {string.Join(", ", _allowedValues)}.");
        }

        return ValidationResult.Success;
    }
}