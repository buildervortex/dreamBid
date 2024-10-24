import CarDto from "../dto/car/carDto";

export default class CarMapper{

    static ToCarDto(data){
        let carDto = new CarDto();
        carDto.id = data.id;
        carDto.make = data.make;
        carDto.model = data.model;
        carDto.year = data.year;
        carDto.mileage = data.mileage;
        carDto.vin = data.vin;
        carDto.conditionReport = data.conditionReport;
        carDto.startingPrice = data.startingPrice;
        carDto.reservePrice = data.reservePrice;
        return carDto;
    }
}