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
    }
}