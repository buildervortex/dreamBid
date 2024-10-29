using DreamBid.Dtos.Car;
using DreamBid.Helpers;
using DreamBid.Helpers.Car;
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface ICarRepository : IRepository
    {
        Task<DBResult<Car>> AddCarAsync(Car car, string userId);

        Task<DBResult<Car>> GetCarByIdAsync(int id, string userId);

        Task<DBResult<List<Car>>> GetAllAsync(GetAllCarQueryObject queryObject, string userId);

        Task<DBResult<Car>> UpdateCarAsync(UpdateCarDto updateCarDto, int carId, string userId);

        Task<DBResult<Car>> DeleteCarAsync(int carId, string userId);

    }
}