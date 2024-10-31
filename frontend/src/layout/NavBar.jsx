import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthViewModel from "../viewModels/AuthViewModel";
import base64ToImageData from "../utils/image";
import {
  Bell,
  ShoppingCart,
  ChevronDown,
  Store,
  LogOut,
  User,
  Settings,
} from "lucide-react";
import AccountViewModel from "../viewModels/AccountViewModel";
import ImageViewModel from "../viewModels/ImageViewModel";
import ErrorMessage from "../viewModels/ErrorViewModel";
import { toast } from "react-toastify";

const NavBar = ({ navLinks, onLog, log: isLoggedIn, profilePic }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handelLogout = () => {
    AuthViewModel.logOut();
    onLog(AuthViewModel.isLoggedIn());
  };

  return (
    <nav className="bg-fuchsia-800 shadow-md w-full">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Dream Bid
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <span
                  key={link.title}
                  className="text-white hover:text-gray-200 cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => navigate(link.link)}
                >
                  {link.title}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                <button
                  className="p-2 text-white hover:text-gray-200 relative"
                  onClick={() => navigate("/profile/wishlist")}
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
                    3
                  </span>
                </button>

                <button className="p-2 text-white hover:text-gray-200 relative">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
                    2
                  </span>
                </button>

                <div className="relative ml-3">
                  <button
                    onClick={toggleProfileMenu}
                    className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src={profilePic}
                      alt="User profile"
                    />
                    <ChevronDown className="h-4 w-4 text-gray-600" />
                  </button>

                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
                      <span
                        onClick={() => navigate("/profile/dashbord")}
                        className="flex items-center px-4 cursor-pointer py-2 text-sm text-gray-700 z-10 hover:bg-gray-100"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </span>
                      <span
                        onClick={() => navigate("/profile/dashbord")}
                        className="flex items-center px-4 py-2 cursor-pointer text-sm text-gray-700 z-10 hover:bg-gray-100"
                      >
                        <Store className="h-4 w-4 mr-2" />
                        Seller Dashboard
                      </span>
                      <span
                        href="/settings"
                        className="flex items-center px-4 py-2 cursor-pointer text-sm text-gray-700 z-10 hover:bg-gray-100"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </span>
                      <button
                        className="flex items-center w-full px-4 cursor-pointer py-2 text-sm text-gray-700 z-10 hover:bg-gray-100"
                        onClick={() => {
                          handelLogout();
                          navigate("/");
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <span
                  onClick={() => navigate("/login")}
                  className="text-white hover:text-gray-200 cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </span>
                <span
                  onClick={() => navigate("/register")}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md cursor-pointer text-sm font-medium hover:bg-indigo-700"
                >
                  Register
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
