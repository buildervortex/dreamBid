using DreamBid.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace DreamBid
{
    public class CleanUpService : ICleanUpService
    {
        private readonly IFileManagerService _fileManagerService;
        private readonly UserManager<DreamBid.Models.User> _userManager;
        private readonly IImageRepository _imageRepository;

        public CleanUpService(IFileManagerService fileManagerService, UserManager<DreamBid.Models.User> userManager, IImageRepository imageRepository)
        {
            this._fileManagerService = fileManagerService;
            this._userManager = userManager;
            this._imageRepository = imageRepository;
        }
        public async Task CleanUpUser(string userId)
        {
            var user = await _userManager.Users.Include(u => u.Image).Include(c => c.Cars).SingleOrDefaultAsync(u => u.Id == userId);
            if (user == null) return;

            if (user.Image == null) return;

            this._fileManagerService.RemoveFileWithAnyExtension(user.Image.FilePath);

            // Remove cars
            foreach (var car in user.Cars)
            {
                await this.CleanUpCar(car.Id);
            }

        }

        public async Task CleanUpCar(int carId)
        {
            var images = await _imageRepository.GetCarImages(carId);
            foreach (var image in images)
            {
                this._fileManagerService.RemoveFile(image.FilePath);
            }
        }
    }
}