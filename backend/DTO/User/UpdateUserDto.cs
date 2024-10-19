using System.ComponentModel.DataAnnotations;
using DreamBid.Validation;

namespace DreamBid.Dtos.User
{
    public class UpdateUserDto
    {
        [StringLength(500, MinimumLength = 10)]
        public string? Bio { get; set; }

        [DateOfBirth]
        public DateTime? DOB { get; set; }

        [StringLength(255, MinimumLength = 4)]
        public string? FullName { get; set; }

    }
}