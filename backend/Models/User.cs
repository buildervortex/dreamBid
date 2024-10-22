using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace DreamBid.Models
{
    [Table("Users")]
    public class User : IdentityUser
    {
        public string FullName { get; set; }
        public DateTime DOB { get; set; }
        public string? Bio { get; set; } = null;
        public string? ProfilePicuturePath { get; set; } = null;

        // The Navigation property to the related cars
        public ICollection<Car> Cars { get; set; } = new List<Car>();
    }
}