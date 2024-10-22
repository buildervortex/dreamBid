using DreamBid.Data;
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

        public async Task<List<Image>> GetCarImages(int id, GetAllImagesQueryObject? getAllImagesQueryObject = null)
        {
            var images = _context.Images.Where(i => i.CarId == id).AsQueryable();

            if (getAllImagesQueryObject == null) return images.ToList();

            images = getAllImagesQueryObject.IsDecsending ? images.OrderByDescending(i => i.Id) : images.OrderBy(i => i.Id);

            var skipNumber = (getAllImagesQueryObject.PageNumber - 1) * getAllImagesQueryObject.PageSize;
            return await images.Skip(skipNumber).Take(getAllImagesQueryObject.PageSize).ToListAsync();
        }

        public async Task<Image> GetProfileImage(string userId)
        {
            var image = await _context.Images.FirstOrDefaultAsync(i => i.UserId == userId);

            if (image == null) return null;

            return image;
        }

        public async Task<Image> StoreImage(Image image)
        {
            await this._context.Images.AddAsync(image);
            await this._context.SaveChangesAsync();
            return image;
        }
    }
}