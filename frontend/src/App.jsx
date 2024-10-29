import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from '@emotion/react';
import Layout from './layout/Layout';
import { useState, useEffect } from 'react';
import Themes, { getCurrentTheme, saveCurrentTheme } from './utils/theme';
import HomePage from './pages/home';
import AuctionDetails from './pages/AuctionDetails';
import Dashboard from './pages/Dashboard';
import AuctionManagementPage from './pages/auctionManagemet';
import WishListPage from './pages/vehiclewishlist';
import SellerDashbordPage from './pages/sellerdashbord';
import TestPage from './tests/test';
import Helpcenter from './pages/helpcenter';
import Auction from './pages/auction';
import TransactionTable from './pages/TransactionTable';





// Navigation links
const navLinks = [
  { path: "/", name: "Home" },
  { path: "/login", name: "Login" },
  { path: "/register", name: "Register" },
  { path: "/auctionManagement", name: "Auction Management"},
  { path: "/wishlist", name: "Wishlist"},
  { path: "/sellerdashbord", name: "Seller Dashbord"},
  { path: "/helpcenter", name: "Helpcenter"},
  { path: "/auction", name: "Auction"},
  {path: "/AuctionDetails",name:"AuctionDetails"},
  {path: "/TransactionTable",name:"TransactionTable"}
]

function App() {
  // Manage theme state
  const [theme, setTheme] = useState(getCurrentTheme());

  // Log the current theme when the app renders
  useEffect(() => {
    console.log("Initial Theme:", theme);
  }, [theme]);

  // Theme change handler (this is where the function goes)
  const handleThemeChange = (event, newThemeName) => {
    let newTheme = saveCurrentTheme(newThemeName);
    console.log("New Theme Selected:", newTheme); // Log new theme
    setTheme(newTheme);
  };

  return (
    <>
      {/* Wrap everything inside the ThemeProvider */}

      <ThemeProvider theme={theme.theme}>
        <Layout onThemeChange={handleThemeChange} navLinks={navLinks}>
          <CssBaseline />
          {/* Define the routes for the app */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/AuctionDetails" element={<AuctionDetails />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/auctionManagement" element={<AuctionManagementPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/sellerdashbord" element={<SellerDashbordPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/helpcenter" element={<Helpcenter />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/TransactionTable" element={<TransactionTable />} />
            
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
