using DreamBid.Data;
using DreamBid.Dtos.Car;
using DreamBid.Dtos.Error;
using DreamBid.Extensions;
using DreamBid.Helpers;
using DreamBid.Helpers.Car;
using DreamBid.Interfaces;
using DreamBid.Mappers;
using DreamBid.Models;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Repository
{
    public class CarRepository : ICarRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IFileManagerService _fileManagerService;
        private readonly ILogger<CarRepository> _logger;

        public CarRepository(ApplicationDbContext context, IFileManagerService fileManagerService, ILogger<CarRepository> logger)
        {
            this._context = context;
            this._fileManagerService = fileManagerService;
            this._logger = logger;
        }
        public async Task<DBResult<Car>> AddCarAsync(Car car, string userId)
        {
            car.UserId = userId;

            var user = await _context.Users.Where(u => u.Id == userId).Include(u => u.Cars).FirstOrDefaultAsync();

            if (user == null) return new DBResult<Car>(null, ErrorMessage.UserNotFound);

            user.Cars.Add(car);

            await _context.SaveChangesAsync();

            this._logger.LogInformation($"The car added by user ( {userId} ), with car ( {car} )");

            return new DBResult<Car>(car);
        }

        public async Task<DBResult<Car>> DeleteCarAsync(int carId, string userId)
        {
            var user = await _context.Users.Where(u => u.Id == userId).Include(u => u.Cars).ThenInclude(c => c.Auctions).FirstOrDefaultAsync();

            if (user == null) return new DBResult<Car>(null, ErrorMessage.UserNotFound);

            var car = user.Cars.FirstOrDefault(c => c.Id == carId);

            if (car == null) return new DBResult<Car>(null, ErrorMessage.CarNotFound);
            if (car.Auctions.Any(a => a.IsActive)) return new DBResult<Car>(null, ErrorMessage.AlreadyInActiveAcution);

            user.Cars.Remove(car);

            await _context.SaveChangesAsync();
            await car.CleanUpCar(this._fileManagerService, this._context);
            this._logger.LogInformation($"The car deleted for user id ( {userId} ), with car ( {car} )");

            return new DBResult<Car>(car);
        }

        public async Task<DBResult<List<Car>>> GetAllAsync(GetAllCarQueryObject queryObject, string userId)
        {
            var user = await _context.Users.Where(u => u.Id == userId).Include(u => u.Cars).FirstOrDefaultAsync();

            if (user == null) return new DBResult<List<Car>>(null, ErrorMessage.UserNotFound);

            var cars = user.Cars.AsQueryable();

            // queryObject.SortBy.Equals("StartingPrice", StringComparison.OrdinalIgnoreCase)
            if (queryObject.SortBy.Equals("StartingPrice", StringComparison.OrdinalIgnoreCase))
            {
                cars = queryObject.IsDecsending ? cars.OrderByDescending(c => c.StartingPrice) : cars.OrderBy(c => c.StartingPrice);
            }
            else if (queryObject.SortBy.Equals("ReservePrice", StringComparison.OrdinalIgnoreCase))
            {
                cars = queryObject.IsDecsending ? cars.OrderByDescending(c => c.ReservePrice) : cars.OrderBy(c => c.ReservePrice);
            }
            else if (queryObject.SortBy.Equals("Mileage", StringComparison.OrdinalIgnoreCase))
            {
                cars = queryObject.IsDecsending ? cars.OrderByDescending(c => c.Mileage) : cars.OrderBy(c => c.Mileage);
            }
            else if (queryObject.SortBy.Equals("Year", StringComparison.OrdinalIgnoreCase))
            {
                cars = queryObject.IsDecsending ? cars.OrderByDescending(c => c.Year) : cars.OrderBy(c => c.Year);
            }
            else if (queryObject.SortBy.Equals("Id", StringComparison.OrdinalIgnoreCase))
            {
                cars = queryObject.IsDecsending ? cars.OrderByDescending(c => c.Id) : cars.OrderBy(c => c.Id);
            }
            var skipNumber = (queryObject.PageNumber - 1) * queryObject.PageSize;

            var carResult = cars.Skip(skipNumber).Take(queryObject.PageSize).ToList();

            this._logger.LogInformation($"The all cars queried by user ( {userId} ), with cars ( {carResult} )");

            return new DBResult<List<Car>>(carResult);
        }

        public async Task<DBResult<Car>> GetCarByIdAsync(int carId, string userId)
        {

            var user = await _context.Users.Where(u => u.Id == userId).Include(u => u.Cars).FirstOrDefaultAsync();

            if (user == null) return new DBResult<Car>(null, ErrorMessage.UserNotFound);

            var car = user.Cars.FirstOrDefault(c => c.Id == carId);

            if (car == null) return new DBResult<Car>(null, ErrorMessage.CarNotFound);

            this._logger.LogInformation($"The car get for user id ( {userId} ), with car ( {car} )");

            return new DBResult<Car>(car);
        }

        public async Task<DBResult<Car>> UpdateCarAsync(UpdateCarDto updateCarDto, int carId, string userId)
        {
            var user = await _context.Users.Where(u => u.Id == userId).Include(u => u.Cars).ThenInclude(c => c.Auctions).FirstOrDefaultAsync();

            if (user == null) return new DBResult<Car>(null, ErrorMessage.UserNotFound);

            var car = user.Cars.FirstOrDefault(c => c.Id == carId);

            if (car == null) return new DBResult<Car>(null, ErrorMessage.CarNotFound);

            if (car.Auctions.Any(a => a.IsActive)) return new DBResult<Car>(null, ErrorMessage.AlreadyInActiveAcution);

            if (car.Auctions.Count != 0)
            {
                updateCarDto.ReservePrice = car.ReservePrice;
                updateCarDto.StartingPrice = car.StartingPrice;
            }

            updateCarDto.ToCarFromUpdateCarDto(car);

            await _context.SaveChangesAsync();

            this._logger.LogInformation($"The car update for user id ( {userId} ), with car ( {car} )");

            return new DBResult<Car>(car);
        }
    }
}