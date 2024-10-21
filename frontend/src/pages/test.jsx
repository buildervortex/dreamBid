import RegisterAccountDto from "../dto/auth/registerAccountDto";
import AccountViewModel from "../viewModels/AccountViewModel";
import AuthViewModel from "../viewModels/AuthViewModel";

async function  testRegisterAccount(){

    const  registerAccountDto = new RegisterAccountDto();
    registerAccountDto.fullName = "example full name";
    registerAccountDto.DOB = new Date("2004-8-15");
    registerAccountDto.email = "exampleemail20l@example.com";
    registerAccountDto.password = "2304asdfASDFA@$12541";
    registerAccountDto.username = "exampleUserName20";

    const response = await AuthViewModel.registerAccount(registerAccountDto);
    console.log("Starting the test of register Account");
    console.log(response)
    console.log("Finished the test of register Account");

}


async function testDeleteAccount() {
    const response = await AccountViewModel.deleteAccount();

    console.log("Starting the test of Delete Account");
    console.log(response)
    console.log("Finished the test of Delete Account");
    
}

const TestPage = () => {
  const TestApi = async () => {
    await testRegisterAccount();
    await testDeleteAccount();
  };

  return <button onClick={TestApi}>RUN TEST</button>;
};

export default TestPage;
