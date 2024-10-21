using System.ComponentModel.DataAnnotations;

namespace DreamBid.Helpers.Car
{
    public class GetAllCarQueryObject
    {
        [AllowedValues(new []{"Id","StartingPrice","ReservePrice","Mileage","Year"})]
        public string SortBy { get; set; } = "Id";
        public bool IsDecsending { get; set; } = false;

        public int PageNumber { get; set; } = 1;

        public int PageSize { get; set; } = 20;
    }
}