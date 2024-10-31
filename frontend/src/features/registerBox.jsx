import { useState } from "react";
import RegisterAccountDto from "../dto/auth/registerAccountDto";
import AuthViewModel from "../viewModels/AuthViewModel";
import ErrorMessage from "../viewModels/ErrorViewModel";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterBox = () => {
  const navigate = useNavigate();
  if (AuthViewModel.isLoggedIn()) navigate("/profile/dashbord");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    dob: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerAccountDto = new RegisterAccountDto();
    registerAccountDto.username = formData.username;
    registerAccountDto.password = formData.password;
    registerAccountDto.fullName = formData.fullname;
    registerAccountDto.email = formData.email;
    registerAccountDto.DOB = formData.dob;

    let response = await AuthViewModel.registerAccount(registerAccountDto);

    console.log("Form data submitted:", response);
    // Reset form on successful submission
    setFormData({
      username: "",
      password: "",
      fullname: "",
      email: "",
      dob: "",
    });

    if (response instanceof ErrorMessage) {
      toast.error(response.error);
    } else {
      toast.success("Registration Successful");
      navigate("/profile/dashbord");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-2xl">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-purple-900">
          Sign up
        </h1>
        <form onSubmit={handleSubmit}>
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
              name="email"
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
          {/* Stay logged in Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              id="stayLoggedIn"
              name="stayLoggedIn"
              type="checkbox"
              checked={formData.stayLoggedIn}
              onChange={handleChange}
              className="mr-2"
            />
            <label
              htmlFor="stayLoggedIn"
              className="text-xl font-bold text-purple-900"
            >
              Stay logged in
            </label>
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
