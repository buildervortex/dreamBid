using DreamBid.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>          // Here, ApplicationUser is a custom class derived from IdentityUser to include extra user properties if needed.
    {
        public DbSet<Car> Cars { get; set; }
        public DbSet<Image> Images { get; set; }

        public DbSet<Auction> Auction { get; set; }
        public DbSet<Image> Image { get; set; }
        public DbSet<Bid> Bids { get; set; }
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)               // This method is overridden from DbContext and is used to configure the model and relationships using the ModelBuilder instance.
        {
            base.OnModelCreating(builder);                                          // Calls the base implementation of OnModelCreating to ensure that the Identity tables and relationships are configured correctly.

            // Specify Relationships Between Car -> User
            builder.Entity<Car>()
                .HasOne(c => c.User)
                .WithMany(u => u.Cars)
                .HasForeignKey(c => c.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Specify Relationships Between Car -> Image
            builder.Entity<Car>()
                .HasMany(c => c.Images)
                .WithOne(i => i.Car)
                .HasForeignKey(i => i.CarId)
                .OnDelete(DeleteBehavior.SetNull);

            // Specify Relationships Between User -> Image
            builder.Entity<User>()
                .HasOne(u => u.Image)
                .WithOne(i => i.User)
                .HasForeignKey<Image>(i => i.UserId)
                .OnDelete(DeleteBehavior.SetNull);

            // Specify Relationships between auction -> Car
            builder.Entity<Auction>()
                .HasOne(a => a.Car)
                .WithMany(c => c.Auctions)
                .HasForeignKey(a => a.CarId)
                .OnDelete(DeleteBehavior.Cascade);

            // Specify Relationships between bid -> auction
            builder.Entity<Bid>()
                .HasOne(b => b.Auction)
                .WithMany(a => a.Bids)
                .HasForeignKey(b => b.AuctionId)
                .OnDelete(DeleteBehavior.Cascade);

            List<IdentityRole> roles = new List<IdentityRole>   // Creates a list of IdentityRole objects to represent predefined roles in the application.
            {
                new IdentityRole{
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole{
                    Name = "User",
                    NormalizedName = "USER"
                }
            };
            builder.Entity<IdentityRole>().HasData(roles);      // Update the IdentityRole table with given roles
        }
    }
}