import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { z } from "zod";

const passwordSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  mobileNumber: z
    .string()
    .length(10, 'Mobile number must be 10 digits')
    .regex(/^\d{10}$/, 'Mobile number must be exactly 10 digits'), 
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
  confirmPassword: z
    .string()
    .min(6, 'Confirm password must be at least 6 characters')
    .max(20, 'Confirm password must be at most 20 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const SignUpModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { setEmail, setIsLoggedIn, setFirstName, setMobileNumber } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      passwordSchema.parse(formData);
      setErrors({});

      const response = await fetch(`http://localhost:8000/api/v1/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Account created successfully!");
        setEmail(result.data.email);
        setIsLoggedIn(true);
        setFirstName(result.data.fullName);
        setMobileNumber(result.data.mobileNumber);
        onClose();
      } else {
        // Handle specific error codes from backend
        if (response.status === 409) {
          toast.error("User already exists with this email or mobile number.");
        } else {
          toast.error(result.message || "Registration failed. Please try again.");
        }
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors = err.errors.reduce(
          (acc, curr) => ({
            ...acc,
            [curr.path[0]]: curr.message,
          }),
          {}
        );
        setErrors(newErrors);
        toast.error("Please check the form for errors.");
      } else {
        console.error("Signup error:", err);
        toast.error("Connection error. Is the backend server running?");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden animate-slide-up max-h-[90vh] flex flex-col">
        {/* Top Gradient Bar */}
        <div className="h-2 brand-gradient w-full flex-shrink-0" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 z-10"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex-1 overflow-y-auto p-8 md:p-10 scrollbar-hide">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-outfit font-extrabold text-slate-900 mb-2">Create Account</h2>
            <p className="text-slate-500 font-inter">Join the smart home revolution.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-outfit font-bold text-slate-700 ml-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-purple/50 focus:bg-white outline-none transition-all font-inter"
                required
              />
              {errors.fullName && <p className="text-red-500 text-xs ml-1">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-sm font-outfit font-bold text-slate-700 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-purple/50 focus:bg-white outline-none transition-all font-inter"
                  required
                />
                {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-outfit font-bold text-slate-700 ml-1">Mobile</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="10 digit number"
                  className="w-full px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-purple/50 focus:bg-white outline-none transition-all font-inter"
                  required
                />
                {errors.mobileNumber && <p className="text-red-500 text-xs ml-1">{errors.mobileNumber}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-sm font-outfit font-bold text-slate-700 ml-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-purple/50 focus:bg-white outline-none transition-all font-inter"
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
                {errors.password && <p className="text-red-500 text-xs ml-1">{errors.password}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-outfit font-bold text-slate-700 ml-1">Confirm</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-purple/50 focus:bg-white outline-none transition-all font-inter"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs ml-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 brand-gradient text-white font-outfit font-bold rounded-2xl hover:opacity-90 transition-all shadow-xl shadow-brand-purple/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </form>

          <p className="text-center mt-8 text-slate-500 font-inter text-sm">
            Already have an account?{" "}
            <button 
              onClick={() => { onClose(); onSwitchToLogin(); }}
              className="brand-gradient-text font-bold hover:underline"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
