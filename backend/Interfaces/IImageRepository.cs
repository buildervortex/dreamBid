using DreamBid.Helpers;
using DreamBid.Helpers.Car;
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface IImageRepository : IRepository
    {
        public Task<DBResult<Image>> GetProfileImage(string userId);

        public Task<DBResult<List<Image>>> GetCarImages(string userId, int carId, GetAllImagesQueryObject? getAllImagesQueryObject = null);

        Task<Image> StoreImage(Image image);
        
        Task<DBResult<Image>> DeleteImage(int imageId);
    }
}