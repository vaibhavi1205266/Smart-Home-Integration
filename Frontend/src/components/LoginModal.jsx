// import React, { useState } from "react";
// import { useUser } from "../context/UserContext";
// import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
// import { toast } from "react-hot-toast";

// const LoginModal = ({ isOpen, onClose, onSwitchToSignUp }) => {
//   const [formData, setFormData] = useState({
//     contactInfo: "",
//     password: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const { setEmail, setIsLoggedIn, setFirstName, setMobileNumber } = useUser();
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const data = formData.contactInfo.includes("@")
//       ? { email: formData.contactInfo }
//       : { mobileNumber: formData.contactInfo };

//     try {
//       const response = await fetch(`http://localhost:8000/api/v1/users/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...data, password: formData.password }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         toast.success(`Welcome back, ${result.data.user.fullName}!`);
//         setEmail(result.data.user.email);
//         setIsLoggedIn(true);
//         setFirstName(result.data.user.fullName);
//         setMobileNumber(result.data.user.mobileNumber);
//         onClose();
//       } else {
//         toast.error(result.message || "Login failed. Please check your credentials.");
//       }
//     } catch (err) {
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center p-4">
//       <div 
//         className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in" 
//         onClick={onClose} 
//       />
      
//       <div className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden animate-slide-up">
//         {/* Top Gradient Bar */}
//         <div className="h-2 brand-gradient w-full" />
        
//         <button 
//           onClick={onClose}
//           className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
//         >
//           <FaTimes size={20} />
//         </button>

//         <div className="p-10">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-outfit font-extrabold text-slate-900 mb-2">Welcome Back</h2>
//             <p className="text-slate-500 font-inter">Experience the future of smart living.</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <label className="block text-sm font-outfit font-bold text-slate-700 ml-1">Email or Mobile</label>
//               <input
//                 type="text"
//                 name="contactInfo"
//                 value={formData.contactInfo}
//                 onChange={handleChange}
//                 placeholder="Enter your details"
//                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-purple/50 focus:bg-white outline-none transition-all font-inter"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="block text-sm font-outfit font-bold text-slate-700 ml-1">Password</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="••••••••"
//                   className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-purple/50 focus:bg-white outline-none transition-all font-inter"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full py-4 brand-gradient text-white font-outfit font-bold rounded-2xl hover:opacity-90 transition-all shadow-xl shadow-brand-purple/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? "Signing in..." : "Log In"}
//             </button>
//           </form>

//           <p className="text-center mt-10 text-slate-500 font-inter text-sm">
//             Don't have an account?{" "}
//             <button 
//               onClick={() => { onClose(); onSwitchToSignUp(); }}
//               className="brand-gradient-text font-bold hover:underline"
//             >
//               Create Account
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;

import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
// Import the centralized API URL
import { API_BASE_URL } from "../config"; 

const LoginModal = ({ isOpen, onClose, onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({
    contactInfo: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Destructure context functions to track user state
  const { setEmail, setIsLoggedIn, setFirstName, setMobileNumber } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Determine if input is email or mobile number
    const data = formData.contactInfo.includes("@")
      ? { email: formData.contactInfo }
      : { mobileNumber: formData.contactInfo };

    try {
      // Points to: https://smart-home-integration-backend.vercel.app/api/v1/users/login
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, password: formData.password }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(`Welcome back, ${result.data.user.fullName}!`);
        
        // Update global user state
        setEmail(result.data.user.email);
        setIsLoggedIn(true);
        setFirstName(result.data.user.fullName);
        setMobileNumber(result.data.user.mobileNumber);
        
        onClose(); // Close modal on success
      } else {
        toast.error(result.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast.error("Network error. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden animate-slide-up">
        <div className="h-2 bg-gradient-to-r from-purple-600 to-indigo-600 w-full" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
        >
          <FaTimes size={20} />
        </button>

        <div className="p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-500">Log in to manage your smart home.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 ml-1">Email or Mobile</label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                placeholder="Enter email or mobile"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-purple-500 focus:bg-white outline-none transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-purple-500 focus:bg-white outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl hover:opacity-90 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Log In"}
            </button>
          </form>

          <p className="text-center mt-10 text-slate-500 text-sm">
            Don't have an account?{" "}
            <button 
              onClick={() => { onClose(); onSwitchToSignUp(); }}
              className="text-purple-600 font-bold hover:underline"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
