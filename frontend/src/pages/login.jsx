import { useLocation, useNavigate } from "react-router-dom";
import LoginBox from "../features/loginBox";
import { useEffect, useLayoutEffect } from "react";
import AuthViewModel from "../viewModels/AuthViewModel";

const LoginPage = ({ loggedIn }) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (AuthViewModel.isLoggedIn()) navigate("/sellerdashbord");
  });


  return <LoginBox></LoginBox>;
};

export default LoginPage;
