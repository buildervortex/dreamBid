using DreamBid.Dtos.Car;
using DreamBid.Helpers.Car;
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface ICarRepository
    {
        Task<Car> AddCarAsync(Car car);

        Task<Car?> GetCarByIdAsync(int id, string userId);

        Task<List<Car>> GetAllAsync(GetAllCarQueryObject queryObject, string userId);

        Task<Car?> UpdateCarAsync(UpdateCarDto updateCarDto, int carId, string userId);

        Task<Car?> DeleteCar(int carId, string userId);

        Task<Image?> SaveImage(Image image);

        Task<List<Image>> GetAllImages(GetAllImagesQueryObject getAllImagesQueryObject, int carId);
    }
}