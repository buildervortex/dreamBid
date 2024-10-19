import Joi, { func } from "joi";
import { Profiler } from "react";



class UpdateAccountDto{
    bio="";
    DOB="";
    fullName="";
    profilePicture="";
}

export function validateUpdateAccountDto(updateAccountDto){

    const schema = Joi.object({
        bio: Joi.string().min(10).max(500),
        DOB: Joi.date().max("now"),
        fullName: Joi.string().min(4).max(255),
        profilePicture: Joi.any()
        .custom((value, helpers) => {
            if (!value) {
                return helpers.error("file.missing");
            }
            const validTypes = ["image/jpeg", "image/png"];
            const maxSize = 1024 * 1024; 

            if (!validTypes.includes(value.mimetype)) {
                return helpers.error("file.invalidType");
            }

            if (value.size > maxSize) {
                return helpers.error("file.maxSize");
            }

            return value;
        })
        .messages({
            "file.missing": "Profile picture is required.",
            "file.invalidType": "Only JPEG and PNG formats are supported.",
            "file.maxSize": "Profile picture must not exceed 1MB.",
        }),

       
    })
    return schema.validate(updateAccountDto);
}

export default UpdateAccountDto;