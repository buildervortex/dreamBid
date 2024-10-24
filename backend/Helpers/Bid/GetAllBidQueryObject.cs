using System.ComponentModel.DataAnnotations;

namespace DreamBid.Helpers.Bid
{
    public class GetAllBidQueryObject
    {
        public bool IsDecsending { get; set; } = false;

        [Range(1, int.MaxValue)]
        public int PageNumber { get; set; } = 1;

        [Range(1, int.MaxValue)]
        public int PageSize { get; set; } = 20;
    }
}