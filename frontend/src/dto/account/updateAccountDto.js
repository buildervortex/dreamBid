import Joi, { func } from "joi";
import { Profiler } from "react";



class UpdateAccountDto{
    bio="";
    DOB= new Date();
    fullName="";
   
}

export function validateUpdateAccountDto(updateAccountDto){

    const schema = Joi.object({
        bio: Joi.string().min(10).max(500),
        DOB: Joi.date().max("now"),
        fullName: Joi.string().min(4).max(255),
       
    })
    return schema.validate(updateAccountDto);
}

export default UpdateAccountDto;