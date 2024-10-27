import Joi from "joi";

class UpdateCarDto{

    make = "";
    model = "";
    year = "";
    mileage ="";
    vin = "";
    conditionReport = "";
    startingPrice = "";
    reservePrice = "";



}

export function validateUpdateCarDto(updateCarDto){

    const schema = Joi.object({
   
        make: Joi.string().max(50),
        model: Joi.string().max(50),
        year: Joi.number().integer().min(1886).max(new Date().getFullYear()),
        mileage: Joi.number().min(0).max(1000000),
        vin: Joi.string().max(20),
        conditionReport: Joi.string(),
        startingPrice: Joi.number(),
        reservePrice: Joi.number(),
    })
    return schema.validate(updateCarDto);

}
export default UpdateCarDto;