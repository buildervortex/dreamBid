using DreamBid.Data;
using DreamBid.Dtos.Car;
using DreamBid.Extensions;
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

        public CarRepository(ApplicationDbContext context, IFileManagerService fileManagerService)
        {
            this._context = context;
            this._fileManagerService = fileManagerService;
        }
        public async Task<Car> AddCarAsync(Car car)
        {
            await _context.Cars.AddAsync(car);
            await _context.SaveChangesAsync();

            return car;
        }

        public async Task<Car?> DeleteCar(int carId, string userId)
        {
            var existingCar = await _context.Cars.FirstOrDefaultAsync(c => c.Id == carId && c.UserId == userId);

            if (existingCar == null) return null;

            await existingCar.CleanUpCar(this._fileManagerService, this._context);

            _context.Cars.Remove(existingCar);

            await _context.SaveChangesAsync();


            return existingCar;
        }

        public async Task<List<Car>> GetAllAsync(GetAllCarQueryObject queryObject, string userId)
        {
            var cars = _context.Cars.Where(car => car.UserId == userId).AsQueryable();

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

            return await cars.Skip(skipNumber).Take(queryObject.PageSize).ToListAsync();

        }

        public async Task<Car?> GetCarByIdAsync(int id, string userId)
        {
            return await _context.Cars.FirstOrDefaultAsync(i => i.Id == id && i.UserId == userId);
        }

        public async Task<Car?> UpdateCarAsync(UpdateCarDto updateCarDto, int carId, string userId)
        {
            var existingCar = await _context.Cars.Include(c => c.Auctions).FirstOrDefaultAsync(c => c.Id == carId && c.UserId == userId);

            if (existingCar == null) return null;

            // Only update the starting and reservePrices if there is no remaining auctions
            if (existingCar.Auctions.Count == 0)
            {
                updateCarDto.ReservePrice = existingCar.ReservePrice;
                updateCarDto.StartingPrice = existingCar.StartingPrice;
            }

            updateCarDto.ToCarFromUpdateCarDto(existingCar);

            await _context.SaveChangesAsync();

            return existingCar;
        }
    }
}