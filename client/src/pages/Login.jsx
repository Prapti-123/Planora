import React, { useState } from 'react';
import { User, Lock, Zap } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Single form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(''); // Clear error on input
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    setLoading(true);
  
    

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
         credentials: 'include', // Include cookies for session management
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
       
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Success message
      setSuccess('Login successful! Redirecting...');
      
      // Store authentication state in React Context or state management        
      // Example: setUser(data.user) or setAuth(data.token)
      
      // Redirect after successful login
      setTimeout(() => {
        navigate('/'); // or navigate to dashboard
      }, 1500);

    } catch (err) {
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-1/2 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">LOGIN</h1>
          <p className="text-gray-600 mb-8">How do I get started lorem ipsum dolor at?</p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* email Input */}
            <div className="mb-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login Now'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Login with Others</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-medium text-gray-700">Login with Google</span>
            </button>

            <button 
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="font-medium text-gray-700">Login with Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{' '}
            <button 
              type="button"
              onClick={() => navigate('/signup')}
              className="text-orange-500 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="w-1/2 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full opacity-20"></div>
        
        <div className="relative z-10 text-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl p-12 mb-8">
            <h2 className="text-5xl font-bold text-white mb-4">
              Very good<br />
              plans are<br />
              waiting for<br />
              you Login<br />
              Now!!!
            </h2>
            
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1743164583631-bd803fb429f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bnNldCUyMHdpdGglMjBmcmllbmRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
                alt="Woman with tablet"
                className="mx-auto rounded-2xl w-64 h-80 object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Lightning Icon */}
          <div className="absolute bottom-12 left-12 bg-white rounded-full p-4 shadow-lg">
            <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;