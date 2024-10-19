import RegisterAccountDto from "../dto/auth/registerAccountDto";
import AuthViewModel from "../viewModels/AuthViewModel";

const RegisterPage = () => {
  const registerAccount = async () => {
    const registerAccountDto = new RegisterAccountDto();
    registerAccountDto.fullName = "example full name";
    registerAccountDto.DOB = new Date("2004-8-15");
    registerAccountDto.email = "exampleemail15l@example.com";
    registerAccountDto.password = "2304asdfASDFA@$12541";
    registerAccountDto.username = "exampleUserName15";

    const response = await AuthViewModel.registerAccount(registerAccountDto);
    console.log(response)
  };

  return <button onClick={registerAccount}>Register</button>;
};

export default RegisterPage;
