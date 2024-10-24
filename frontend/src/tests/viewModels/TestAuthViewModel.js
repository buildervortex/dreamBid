import LoginAccountDto from "../../dto/auth/loginAccountDto";
import RegisterAccountDto from "../../dto/auth/registerAccountDto";
import AuthViewModel from "../../viewModels/AuthViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Env from "../env";
import Test from "../utils/testUtils";

export async function testRegisterAccount(success, failed) {

    const registerAccountDto = new RegisterAccountDto();
    registerAccountDto.fullName = Env.fullName;
    registerAccountDto.DOB = Env.DOB;
    registerAccountDto.email = Env.email;
    registerAccountDto.password = Env.password;
    registerAccountDto.username = Env.username;


    const response = await AuthViewModel.registerAccount(registerAccountDto);

    if (!(response instanceof ErrorMessage)) {

        Test.assertNotNull(response.id, "registerAccount id", success, failed)
        Test.assertNull(response.bio, "registerAccount bio", success, failed)
        Test.assertEqual(response.DOB.toISOString(), Env.DOB.toISOString(), "registerAccount DOB", success, failed)
        Test.assertEqual(response.fullName, Env.fullName, "registerAccount fullName", success, failed)
        Test.assertEqual(response.email, Env.email, "registerAccount email", success, failed)
        Test.assertEqual(response.userName, Env.username, "registerAccount userName", success, failed)

        Env.AccountId = response.id;
    }
    else {
        Test.assertHasOwnProperty(response, "error", `registerAccount error happend ${response.error}`, success, failed, "red");
    }
    return true;

}

export async function testLoginAccount(success, failed) {

    const loginAccountDto = new LoginAccountDto();
    loginAccountDto.email = Env.email;
    loginAccountDto.password = Env.password;


    const response = await AuthViewModel.loginAccount(loginAccountDto);

    if (!(response instanceof ErrorMessage)) {

        Test.assertNotNull(response.id, "loginAccount id", success, failed)
        Test.assertNull(response.bio, "loginAccount bio", success, failed)
        Test.assertEqual(response.DOB.toISOString(), Env.DOB.toISOString(), "loginAccount DOB", success, failed)
        Test.assertEqual(response.fullName, Env.fullName, "loginAccount fullName", success, failed)
        Test.assertEqual(response.email, Env.email, "loginAccount email", success, failed)
        Test.assertEqual(response.userName, Env.username, "loginAccount userName", success, failed)

        Env.AccountId = response.id;
    }

    else {
        Test.assertHasOwnProperty(response, "error", `loginAccount error happend ${response.error}`, success, failed, "red");
    }

}