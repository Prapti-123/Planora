import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted');
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Decorative circles */}
      
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500 rounded-full opacity-40"></div>
        {/* Sign Up Form */}
        <div className="relative bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Create an account</h1>

          <div className="space-y-5">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition-colors text-gray-700 placeholder-yellow-500"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition-colors text-gray-700 placeholder-yellow-500"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition-colors text-gray-700 placeholder-yellow-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-12 pr-12 py-3 border-b-2 border-gray-200 focus:border-orange-500 outline-none transition-colors text-gray-700 placeholder-yellow-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Forgot password?
              </a>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-yellow-500 text-gray-900 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors shadow-lg mt-6"
            >
              SIGN UP
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <a href="#" className="text-yellow-600 font-semibold hover:text-orange-500">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;