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

        // The Navigation property to the related cars
        public ICollection<Car> Cars { get; set; } = new List<Car>();

        // The Navigation property to the related images
        public Image Image { get; set; }
        public int? ImageId { get; set; } = null;

        public override string ToString()
        {
            return $"The User Model Object Details. ( Id: {Id} ), ( userName: {UserName} ), ( passwordHash: {PasswordHash} ), ( email: {Email} ), ( fullName: {FullName} ), ( DOB: {DOB} ), ( Bio: {Bio} ), ( ImageId: {ImageId} )";
        }
    }
}