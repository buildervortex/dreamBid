import { Email, Password } from "@mui/icons-material";
import Joi from "joi";

class RegisterAccountDto {
    email = "";
    password = "";
    username = "";
    DOB = "";
    fullName = "";
}

export function validateRegisterAccountDto(registerAccountDto) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().min(5).max(255).required(),
        username: Joi.string().min(5).max(255).required(),
        DOB: Joi.date().max("now").required(),
        fullName: Joi.string().min(4).max(255)
    })
    return schema.validate(registerAccountDto);
}

export default RegisterAccountDto;