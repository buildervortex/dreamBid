import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const RegisterBox = ({ handleSubmit }) => {
  const theme = useTheme();
  
  // Manage form data using state
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullname:'',
    email: '',
    dob: '',
    stayLoggedIn: false,
  });
  
  // Handle form data change
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-2xl">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-purple-900">
          Sign up
        </h1>
        <form onSubmit={(e) => handleSubmit(e, formData.username, formData.password, formData.stayLoggedIn)}>
            {/* Full Name Field */}
        <div className="mb-6">
            <label
              htmlFor="fullname"
              className="block mb-2 text-xl font-bold text-purple-900"
            >
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-purple-200 border border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
            {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-bold text-purple-900"
            >
              Email
            </label>
            <input
              id="email"
              name="emial"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-purple-200 border border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          {/* User Name Field */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-xl font-bold text-purple-900"
            >
              User Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter user name"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-purple-200 border border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-xl font-bold text-purple-900"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-purple-200 border border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
            {/* Date of birth Field */}
           <div className="mb-6">
            <label
              htmlFor="dob"
              className="block mb-2 text-xl font-bold text-purple-900"
            >
              Date Of Birth
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              placeholder="Enter your birthday"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-purple-200 border border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 text-2xl font-bold text-white transition duration-300 bg-purple-900 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-600"
          >
            Sign up
          </button>
          
          {/* Sign up link styled as a button */}
          <div className="mt-4 text-center">
            <span className="text-gray-600">Haven’t an account?</span>
            <button
              type="button"
              className="ml-2 font-bold text-purple-900 transition duration-300 hover:underline focus:outline-none"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterBox;
