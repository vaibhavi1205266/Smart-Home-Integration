import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; 
import image1 from "../assets/DLN Logo.png";
import image2 from "../assets/image3.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    contactInfo: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const { setEmail, setIsLoggedIn, setFirstName, setMobileNumber } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = formData.contactInfo.includes("@")
    ? { email: formData.contactInfo }
    : { mobileNumber : formData.contactInfo };

    try {
      const response = await fetch(`https://67f6b8ac86e73e5327b6ccd9--mernfoodapp1.netlify.app/api/v1/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, password: formData.password }),
      });

      if (response.ok) {
        const result = await response.json();
        const fullName = result.data.user.fullName;
        const mobileNumber = result.data.user.mobileNumber

        setMessage(`Welcome back, ${fullName}`);
        setEmail(result.data.user.email);
        setIsLoggedIn(true);
        setFirstName(fullName);
        setMobileNumber(mobileNumber)
        setTimeout(() => navigate("/home"), 2000);
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center bg-sky-200">
        <img src={image1} alt="Logo" />
      </div>
      <div className="flex-1 flex justify-center bg-white">
        <form onSubmit={handleSubmit} className="w-80 mt-10">
          <div>
            <button
              onClick={() => navigate("/signup")}
              className=""
            >
              <img src={image2} alt="" className="transform rotate-180 h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold -mt-8 mb-10 text-sky-400 text-center">
              Log In
            </h2>
          </div>
          <div className="mt-20">
            <h1 className="font-semibold text-2xl">Welcome</h1>
            <p className="text-xs mt-2">Please enter your details to proceed.</p>
          </div>
          <div className="mb-4 mt-20">
            <label
              htmlFor="contactInfo"
              className="block text-gray-700 font-medium mb-2 ml-2"
            >
              Mobile or Email
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="Enter your email or mobile number"
              className="w-full px-4 py-2 border-none rounded-3xl bg-sky-200 outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2 ml-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="........"
                className="w-full px-4 py-2 border-none outline-none bg-sky-200 rounded-3xl placeholder:text-6xl placeholder:tracking-widest placeholder:font-black"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="ml-20 font-semibold mt-6 px-14 py-2 bg-sky-400 rounded-3xl"
          >
            Log In
          </button>
          {message && (
            <p className="text-center mt-4 text-green-500">{message}</p>
          )}
          <p className="text-center ml-4 mt-10 text-[14px] text-gray-600">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-sky-400 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
