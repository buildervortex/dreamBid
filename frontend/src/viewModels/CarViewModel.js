import { validateAddCarDto } from "../dto/car/addCarDto";
import { validateUpdateCarDto } from "../dto/car/updateCarDto";
import CarMapper from "../mappers/CarMapper";
import CarService from "../services/carService";
import ErrorMessage from "./ErrorViewModel";



export default class CarViewModel{

static async createCar(addCarDto){
    const {error} = validateAddCarDto(addCarDto);
    if(error)
        return ErrorMessage.errorMessageFromJoiError(error);
    const response = await CarService.createCar(addCarDto);

    if (error in response) {
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return CarMapper.ToCarDto(response);

    }

static async getCarById(id){
    
    const response = await CarService.getCarById(id);

    if (error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return CarMapper.ToCarDto(response);

}

static async getAllCars(PageNumber=1,PageSize=5,SortBy="StartingPrice",isDecsending=true){
    const response = await CarService.getAllCars(PageNumber,PageSize,SortBy,isDecsending);
    if(error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return CarMapper.ToCarDto(car);

}

static async updateCar(id,updateCarDto){

    const {error} = validateUpdateCarDto(updateCarDto);
    if(error)
        return ErrorMessage.errorMessageFromJoiError(error);
    const response = await CarService.updateCar(id,updateCarDto);

    if(error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return CarMapper.ToCarDto(response);
}


static async deleteCar(id){

    const response = await CarService.deleteCar(id);
    if (error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return CarMapper.ToCarDto(response);
}



}

