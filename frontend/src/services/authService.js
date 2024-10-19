import API from "./api";

export default class AuthService {
    static async registerAccount(registerAccountDto) {
        const response = await API.post("/accounts/register", registerAccountDto);
        return response.data;
    }
}