import Joi from "joi";

class AddCarDto {

    make = "";
    model = "";
    year = "";
    mileage ="";
    vin = "";
    conditionReport = "";
    startingPrice = "";
    reservePrice = "";

}


export function validateAddCarDto(addCarDto){

    const schema = Joi.object({
   
        make: Joi.string().max(50).required(),
        model: Joi.string().max(50).required(),
        year: Joi.number().integer().min(1886).max(new Date().getFullYear()),
        mileage: Joi.number().min(0).max(1000000).required(),
        vin: Joi.string().max(20).required(),
        conditionReport: Joi.string(),
        startingPrice: Joi.number().required(),
        reservePrice: Joi.number(),

    })
    return schema.validate(addCarDto);
}

export default AddCarDto;