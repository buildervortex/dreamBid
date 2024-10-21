namespace DreamBid.Dtos.Car
{
    public class CarDto
    {
        public string Id { get; set; }
        public string Make { get; set; }

        public string Model { get; set; }

        public int Year { get; set; }

        public double Mileage { get; set; }

        public string VIN { get; set; }


        public string ConditionReport { get; set; }

        public double StartingPrice { get; set; }

        public double? ReservePrice { get; set; }
    }
}