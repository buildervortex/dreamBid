using DreamBid.Dtos.Car;
using DreamBid.Models;

namespace DreamBid.Mappers
{
    public static class CarMappers
    {
        public static CarDto ToCarDto(this Car carModel)
        {
            return new CarDto
            {
                Id = carModel.Id,
                ConditionReport = carModel.ConditionReport,
                Make = carModel.Make,
                Mileage = carModel.Mileage,
                Model = carModel.Model,
                ReservePrice = carModel.ReservePrice,
                StartingPrice = carModel.StartingPrice,
                VIN = carModel.VIN,
                Year = carModel.Year,
                Auctions = carModel.Auctions.Select(a => a.ToAuctionDto()).ToList(),
                Images = carModel.Images.Select(i => i.ToImageDto()).ToList()
            };
        }

        public static Car ToCarFromAddCarDto(this AddCarDto addCarDto)
        {
            return new Car
            {
                ConditionReport = addCarDto.ConditionReport,
                Make = addCarDto.Make,
                Mileage = addCarDto.Mileage,
                Model = addCarDto.Model,
                ReservePrice = addCarDto.ReservePrice,
                StartingPrice = addCarDto.StartingPrice,
                VIN = addCarDto.VIN,
                Year = addCarDto.Year
            };
        }

        public static Car ToCarFromUpdateCarDto(this UpdateCarDto updateCarDto, Car? existingCar = null)
        {
            if (existingCar == null) existingCar = new Car();
            existingCar.ConditionReport = updateCarDto.ConditionReport != null ? updateCarDto.ConditionReport : existingCar.ConditionReport;
            existingCar.Make = updateCarDto.Make != null ? updateCarDto.Make : existingCar.Make;
            existingCar.Mileage = updateCarDto.Mileage != null ? (double)updateCarDto.Mileage : existingCar.Mileage;
            existingCar.Model = updateCarDto.Model != null ? updateCarDto.Model : existingCar.Model;
            existingCar.ReservePrice = updateCarDto.ReservePrice != null ? updateCarDto.ReservePrice : existingCar.ReservePrice;
            existingCar.StartingPrice = updateCarDto.StartingPrice != null ? (double)updateCarDto.StartingPrice : existingCar.StartingPrice;
            existingCar.VIN = updateCarDto.VIN != null ? updateCarDto.VIN : existingCar.VIN;
            existingCar.Year = updateCarDto.Year != null ? (int)updateCarDto.Year : existingCar.Year;
            return existingCar;
        }
    }
}