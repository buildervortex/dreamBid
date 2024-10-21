using System.ComponentModel.DataAnnotations;
using DreamBid.Validation;

namespace DreamBid.Dtos.Account
{
    public class RegisterDto
    {
        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string? Username { get; set; }

        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
        [Required]
        [DateOfBirth]
        public DateTime DOB { get; set; }
        [Required]
        [StringLength(255, MinimumLength = 4)]
        public string? FullName { get; set; }
    }
}