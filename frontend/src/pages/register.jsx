import { useEffect, useLayoutEffect } from "react";
import RegisterBox from "../features/registerBox";
import AuthViewModel from "../viewModels/AuthViewModel";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (AuthViewModel.isLoggedIn()) navigate("/sellerdashbord");
  });


  return <RegisterBox></RegisterBox>;
};

export default RegisterPage;
