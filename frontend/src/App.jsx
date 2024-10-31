import { Routes, Route, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./layout/Layout";
import { useState, useEffect, useLayoutEffect } from "react";
import HomePage from "./pages/home";
import AuctionDetails from "./pages/AuctionDetails";
import TestPage from "./tests/test";
import Helpcenter from "./pages/helpcenter";
import Auction from "./pages/auction";
import AuthViewModel from "./viewModels/AuthViewModel";
import { toast, ToastContainer } from "react-toastify";
import ProfilePage from "./pages/ProfilePage";
import base64ToImageData from "./utils/image";
import ImageViewModel from "./viewModels/ImageViewModel";
import ErrorMessage from "./viewModels/ErrorViewModel";
import PaymentSuccess from "./pages/paymentSuccess";
import PaymentFailed from "./pages/paymentFailed";

// Navigation links
const navLinks = [
  { link: "/helpcenter", title: "Helpcenter" },
  { link: "/auction", title: "Auctions" },
  { link: "/AuctionDetails", title: "AuctionDetails" },
  { link: "/TransactionTable", title: "TransactionTable" },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const [profilePicture, setProfilePicture] = useState(base64ToImageData(""));

  useEffect(() => {
    setLoggedIn(AuthViewModel.isLoggedIn());
  }, [location.pathname]);

  useEffect(() => {
    const getData = async () => {
      let response = await ImageViewModel.getOwnProfilePicture();
      if (response instanceof ErrorMessage) toast.error(response.error);
      else setProfilePicture(base64ToImageData(response.image));
    };
    getData();
  }, [location.pathname]);

  return (
    <>
      <Layout
        navLinks={navLinks}
        onLog={setLoggedIn}
        log={loggedIn}
        profilePic={profilePicture}
      >
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage loggedIn={loggedIn} />} />
          <Route path="/helpcenter" element={<Helpcenter />} />
          <Route
            path="/register"
            element={<RegisterPage loggedIn={loggedIn} />}
          />
          <Route path="/AuctionDetails" element={<AuctionDetails />} />
          <Route
            path="/profile/*"
            element={<ProfilePage profilePic={profilePicture}></ProfilePage>}
          ></Route>
          <Route path="/auction" element={<Auction />} />
          <Route path="/success" element={<PaymentSuccess></PaymentSuccess>} />
          <Route path="/failed" element={<PaymentFailed></PaymentFailed>} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick={true}
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
