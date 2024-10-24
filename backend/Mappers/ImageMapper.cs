using DreamBid.Dtos.Image;
using DreamBid.Models;

namespace DreamBid.Mappers
{
    public static class ImageMappers
    {
        public static ImageDto ToImageDto(this Image image, string? imageData = null)
        {
            return new ImageDto
            {
                Id = image.Id,
                FileName = image.FileName,
                Length = image.Length,
                Image = imageData
            };
        }

        public static Image ToImage(this IFormFile formFile, string fileSubPath, int? CarId = null, string? UserId = null)
        {
            return new Image
            {
                CarId = CarId,
                UserId = UserId,
                FileName = formFile.FileName,
                FilePath = fileSubPath,
                Length = formFile.Length
            };
        }
    }
}