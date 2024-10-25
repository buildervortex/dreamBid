
import Joi from "joi";


class LoginAccountDto {

    email = "";
    password = "";
}

export function validateLoginAccountDto(loginAccountDto) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().min(8).max(255).required(),

    })
    return schema.validate(loginAccountDto);
}

export default LoginAccountDto;