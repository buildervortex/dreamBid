import LoginAccountDto from "../../dto/auth/loginAccountDto";
import RegisterAccountDto from "../../dto/auth/registerAccountDto";
import AuthViewModel from "../../viewModels/AuthViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Test from "../utils/testUtils";

export async function testRegisterAccount(success, failed) {

    const registerAccountDto = new RegisterAccountDto();
    registerAccountDto.fullName = "example full name";
    registerAccountDto.DOB = new Date("2004-8-12");
    registerAccountDto.email = `exampleemail103@example.com`;
    registerAccountDto.password = "2304asdfASDFA@$12541";
    registerAccountDto.username = `exampleUserName103`;

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

export async function testLoginAccount(success,failed) {

    const loginAccountDto = new LoginAccountDto();
    loginAccountDto.email = `exampleemail103@example.com`;
    loginAccountDto.password ="2304asdfASDFA@$12541";
    let fullName = "example full name";
    let DOB = new Date("2004-8-12");
    let username = `exampleUserName103`;


    const response = await AuthViewModel.loginAccount(loginAccountDto);

    if (!(response instanceof ErrorMessage)){



        Test.assertNotNull(response.id, "loginAccount id", success, failed)
        Test.assertNull(response.bio, "loginAccount bio", success, failed)
        Test.assertEqual(response.DOB.getMonth(),DOB.getMonth(), "loginAccount DOB", success, failed)
        Test.assertEqual(response.fullName,fullName, "loginAccount fullName", success, failed)
        Test.assertEqual(response.email,loginAccountDto.email, "loginAccount email", success, failed)
        Test.assertEqual(response.userName,username, "loginAccount userName", success, failed)
        
          
    }

    else{
        Test.assertHasOwnProperty(response,"error",`loginAccount error happend ${response.error}`,success,failed,"red");
    }
    
}