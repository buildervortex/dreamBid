using DreamBid.Helpers.Car;
using DreamBid.Models;

namespace DreamBid.Interfaces
{
    public interface IImageRepository
    {
        Task<Image> GetProfileImage(string userId);

        Task<List<Image>> GetCarImages(int id, GetAllImagesQueryObject? getAllImagesQueryObject = null);

        Task<Image> StoreImage(Image image);

        Task<Image> DeleteImage(int imageId);
    }
}