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
        protected override void OnModelCreating(ModelBuilder builder)               // This method is overridden from DbContext and is used to configure the model and relationships using the ModelBuilder instance.
        {
            base.OnModelCreating(builder);                                          // Calls the base implementation of OnModelCreating to ensure that the Identity tables and relationships are configured correctly.
            List<IdentityRole> roles = new List<IdentityRole>   // Creates a list of IdentityRole objects to represent predefined roles in the application.
            {
                new IdentityRole{
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole{
                    Name = "User",
                    NormalizedName = "USER"
                },
                new IdentityRole{
                    Name = "Seller",
                    NormalizedName = "SELLER"
                }
            };
            builder.Entity<IdentityRole>().HasData(roles);      // Update the IdentityRole table with given roles
        }
    }
}