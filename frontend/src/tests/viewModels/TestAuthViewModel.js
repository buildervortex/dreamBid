import RegisterAccountDto from "../../dto/auth/registerAccountDto";
import AuthViewModel from "../../viewModels/AuthViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Test from "../utils/testUtils";

export async function testRegisterAccount() {

    const registerAccountDto = new RegisterAccountDto();
    registerAccountDto.fullName = "example full name";
    registerAccountDto.DOB = new Date("2004-8-15");
    registerAccountDto.email = `exampleemail100@example.com`;
    registerAccountDto.password = "2304asdfASDFA@$12541";
    registerAccountDto.username = `exampleUserName100`;

    const response = await AuthViewModel.registerAccount(registerAccountDto);

    if (!(response instanceof ErrorMessage)) {

        Test.assertNotNull(response.id, "registerAccount id");
        Test.assertNull(response.bio, "registerAccount bio")
        Test.assertEqual(response.DOB.toISOString(), registerAccountDto.DOB.toISOString(), "registerAccount DOB")
        Test.assertEqual(response.fullName, registerAccountDto.fullName, "registerAccount fullName")
        Test.assertEqual(response.email, registerAccountDto.email, "registerAccount email")
        Test.assertEqual(response.userName, registerAccountDto.username, "registerAccount userName")
    }
    else {
        Test.assertHasOwnProperty(response, "error", `registerAccount error happend ${response.error}`, "red");
    }

}