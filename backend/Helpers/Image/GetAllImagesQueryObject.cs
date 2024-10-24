using System.ComponentModel.DataAnnotations;

namespace DreamBid.Helpers.Car
{
    public class GetAllImagesQueryObject
    {
        public bool IsDecsending { get; set; } = false;

        [Range(1, int.MaxValue)]
        public int PageNumber { get; set; } = 1;

        [Range(1, int.MaxValue)]
        public int PageSize { get; set; } = 10;

        public bool WithImageData { get; set; } = false;
    }
}