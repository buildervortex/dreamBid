using DreamBid.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>          // Here, ApplicationUser is a custom class derived from IdentityUser to include extra user properties if needed.
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}