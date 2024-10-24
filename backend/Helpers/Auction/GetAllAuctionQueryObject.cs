using System.ComponentModel.DataAnnotations;

namespace DreamBid.Helpers.Auction
{
    public class GetAllAuctionQueryObject
    {
        [AllowedValues(new[] { "Year", "Mileage", "StartingPrice", "EndTime", "StartTime" })]
        public string OrderBy { get; set; } = "StartingTime";
        public bool Active { get; set; } = true;
        public bool IsDecsending { get; set; } = false;

        [Range(1, int.MaxValue)]
        public int PageNumber { get; set; } = 1;

        [Range(1, int.MaxValue)]
        public int PageSize { get; set; } = 20;

        public string? userId { get; set; } = null;

    }
}