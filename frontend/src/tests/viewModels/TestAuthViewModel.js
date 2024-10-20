import RegisterAccountDto from "../../dto/auth/registerAccountDto";
import AuthViewModel from "../../viewModels/AuthViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Test from "../utils/testUtils";

export async function testRegisterAccount(success, failed) {

    const registerAccountDto = new RegisterAccountDto();
    registerAccountDto.fullName = "example full name";
    registerAccountDto.DOB = new Date("2004-8-12");
    registerAccountDto.email = `exampleemail102@example.com`;
    registerAccountDto.password = "2304asdfASDFA@$12541";
    registerAccountDto.username = `exampleUserName102`;

    const response = await AuthViewModel.registerAccount(registerAccountDto);

    if (!(response instanceof ErrorMessage)) {

        Test.assertNotNull(response.id, "registerAccount id", success, failed)
        Test.assertNull(response.bio, "registerAccount bio", success, failed)
        Test.assertEqual(response.DOB.toISOString(), registerAccountDto.DOB.toISOString(), "registerAccount DOB", success, failed)
        Test.assertEqual(response.fullName, registerAccountDto.fullName, "registerAccount fullName", success, failed)
        Test.assertEqual(response.email, registerAccountDto.email, "registerAccount email", success, failed)
        Test.assertEqual(response.userName, registerAccountDto.username, "registerAccount userName", success, failed)
    }
    else {
        Test.assertHasOwnProperty(response, "error", `registerAccount error happend ${response.error}`, success, failed, "red");
    }

}