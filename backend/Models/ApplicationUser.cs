using Microsoft.AspNetCore.Identity;

namespace DreamBid.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }
        public DateTime DOB { get; set; }
    }
}