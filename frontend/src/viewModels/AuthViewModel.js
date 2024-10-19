import { validateRegisterAccountDto } from "../dto/auth/registerAccountDto";
import AuthService from "../services/authService";
import ErrorMessage from "./ErrorViewModel";
import AccountMapper from '../mappers/AccountMapper';

export default class AuthViewModel {
    static async registerAccount(registerAccountDto) {
        const { error } = validateRegisterAccountDto(registerAccountDto);
        if (error)
            return ErrorMessage.errorMessageFromJoiError(error);

        const response = await AuthService.registerAccount(registerAccountDto);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return AccountMapper.ToAccountDto(response);
    }
}