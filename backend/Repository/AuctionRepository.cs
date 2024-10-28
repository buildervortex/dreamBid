using DreamBid.Data;
using DreamBid.Dtos.Error;
using DreamBid.Helpers;
using DreamBid.Helpers.Auction;
using DreamBid.Interfaces;
using DreamBid.Models;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Repository
{
    public class AuctionRepository : IAuctionRepository
    {
        private readonly ApplicationDbContext _context;
        public AuctionRepository(ApplicationDbContext context)
        {
            this._context = context;
        }
        public async Task<DBResult<Auction>> AddAuctionAsync(Auction auction, string userId, int carId, AuctionDetails auctionDetails)
        {
            var user = await this._context.Users.Where(u => u.Id == userId).Include(u => u.Cars).ThenInclude(c => c.Auctions).FirstOrDefaultAsync();
            if (user == null) return new DBResult<Auction>(null, ErrorMessage.UserNotFound);
            var car = user.Cars.FirstOrDefault(c => c.Id == carId);
            if (car == null) return new DBResult<Auction>(null, ErrorMessage.CarNotFound);
            if (car.Auctions.Any(a => a.IsActive)) return new DBResult<Auction>(null, ErrorMessage.AlreadyInActiveAcution);

            auction.CarId = carId;
            car.Auctions.Add(auction);
            await _context.SaveChangesAsync();

            this.LoadTheDetails(auction, auctionDetails);

            return new DBResult<Auction>(auction);
        }

        public async Task<DBResult<Auction>> DeleteAuctionAsync(string userId, int auctionId, AuctionDetails auctionDetails)
        {
            var user = await this._context.Users.Where(u => u.Id == userId).Include(u => u.Cars).ThenInclude(c => c.Auctions).FirstOrDefaultAsync();
            if (user == null) return new DBResult<Auction>(null, ErrorMessage.UserNotFound);

            var car = user.Cars.FirstOrDefault(car => car.Auctions.Any(a => a.Id == auctionId));
            if (car == null) return new DBResult<Auction>(null, ErrorMessage.AuctionNotFound);

            var auction = car.Auctions.FirstOrDefault(a => a.Id == auctionId);
            if (auction == null) return new DBResult<Auction>(null, ErrorMessage.AuctionNotFound);
            if (auction.IsActive) return new DBResult<Auction>(null, ErrorMessage.ErrorMessageFromString("The auction is in active stage"));

            car.Auctions.Remove(auction);

            await _context.SaveChangesAsync();
            this.LoadTheDetails(auction, auctionDetails);

            return new DBResult<Auction>(auction);
        }

        public async Task<DBResult<List<Auction>>> GetAllAuctionsAsync(GetAllAuctionQueryObject queryObject)
        {
            var auctions = _context.Auction.AsQueryable().Where(a => a.IsActive == queryObject.Active);

            if (queryObject.userId != null)
            {
                auctions = auctions.Where(a => a.Car.UserId == queryObject.userId);
            }

            if (queryObject.OrderBy.Equals("EndTime", StringComparison.OrdinalIgnoreCase))
            {
                auctions = queryObject.IsDecsending ? auctions.OrderByDescending(a => a.auctionEndTime) : auctions.OrderBy(a => a.auctionEndTime);
            }
            else if (queryObject.OrderBy.Equals("StartTime", StringComparison.OrdinalIgnoreCase))
            {
                auctions = queryObject.IsDecsending ? auctions.OrderByDescending(a => a.auctionStartTime) : auctions.OrderBy(a => a.auctionStartTime);
            }
            else if (queryObject.OrderBy.Equals("StartingPrice", StringComparison.OrdinalIgnoreCase))
            {
                auctions = queryObject.IsDecsending ? auctions.OrderByDescending(a => a.Car.StartingPrice) : auctions.OrderBy(a => a.Car.StartingPrice);
            }
            else if (queryObject.OrderBy.Equals("Mileage", StringComparison.OrdinalIgnoreCase))
            {
                auctions = queryObject.IsDecsending ? auctions.OrderByDescending(a => a.Car.Mileage) : auctions.OrderBy(a => a.Car.Mileage);
            }

            var skipNumber = (queryObject.PageNumber - 1) * queryObject.PageSize;

            var auctionsList = await auctions.Skip(skipNumber).Take(queryObject.PageSize).ToListAsync();
            auctionsList.ForEach(a => this.LoadTheDetails(a, queryObject));
            return new DBResult<List<Auction>>(auctionsList);
        }

        public async Task<DBResult<Auction>> GetAuctionAsync(int id, AuctionDetails auctionDetails)
        {
            var auction = await _context.Auction.FirstOrDefaultAsync(a => a.Id == id);
            if (auction == null) return new DBResult<Auction>(null, ErrorMessage.AuctionNotFound);
            this.LoadTheDetails(auction,auctionDetails);
            return new DBResult<Auction>(auction);
        }

        private void LoadTheDetails(Auction auction, AuctionDetails auctionDetails)
        {
            if (auctionDetails.WithCar && !this._context.Entry(auction).Reference(a => a.Car).IsLoaded)
            {
                this._context.Entry(auction).Reference(a => a.Car).Load();
            }

            if (auctionDetails.WithBids && !this._context.Entry(auction).Collection(a => a.Bids).IsLoaded)
            {
                this._context.Entry(auction).Collection(a => a.Bids).Load();
            }
        }
    }
}