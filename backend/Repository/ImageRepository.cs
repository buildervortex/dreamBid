using DreamBid.Data;
using DreamBid.Dtos.Error;
using DreamBid.Helpers;
using DreamBid.Helpers.Car;
using DreamBid.Interfaces;
using DreamBid.Models;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Repository
{
    public class ImageRepository : IImageRepository
    {
        private readonly ApplicationDbContext _context;

        public ImageRepository(ApplicationDbContext context)
        {
            this._context = context;
        }

        public async Task<Image> DeleteImage(int imageId)
        {
            var image = await _context.Images.FirstOrDefaultAsync(i => i.Id == imageId);

            if (image == null) return null;

            _context.Images.Remove(image);

            await _context.SaveChangesAsync();

            return image;
        }

        public async Task<DBResult<List<Image>>> GetCarImages(string userId, int carId, GetAllImagesQueryObject? getAllImagesQueryObject = null)
        {
            var user = await _context.Users.Where(u => u.Id == userId).Include(u => u.Cars).ThenInclude(c => c.Images).FirstOrDefaultAsync();

            if (user == null) return new DBResult<List<Image>>(null, ErrorMessage.UserNotFound);

            var car = user.Cars.FirstOrDefault(c => c.Id == carId);

            if (car == null) return new DBResult<List<Image>>(null, ErrorMessage.CarNotFound);

            var images = car.Images.AsQueryable();

            if (getAllImagesQueryObject == null) return new DBResult<List<Image>>(images.ToList());

            images = getAllImagesQueryObject.IsDecsending ? images.OrderByDescending(i => i.Id) : images.OrderBy(i => i.Id);

            var skipNumber = (getAllImagesQueryObject.PageNumber - 1) * getAllImagesQueryObject.PageSize;
            return new DBResult<List<Image>>(images.Skip(skipNumber).Take(getAllImagesQueryObject.PageSize).ToList());
        }

        public async Task<DBResult<Image>> GetProfileImage(string userId)
        {
            var user = await _context.Users.Where(u => u.Id == userId).Include(u => u.Image).FirstOrDefaultAsync();

            if (user == null) return new DBResult<Image>(null, ErrorMessage.UserNotFound);
            if (user.Image == null || user.Image.FilePath == null) return new DBResult<Image>(null, ErrorMessage.ImageNotFound);

            return new DBResult<Image>(user.Image);
        }

        public async Task<Image> StoreImage(Image image)
        {
            await this._context.Images.AddAsync(image);
            await this._context.SaveChangesAsync();
            return image;
        }
    }
}