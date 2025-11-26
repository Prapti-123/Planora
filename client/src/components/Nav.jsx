import React, { useState, useEffect } from "react";
import { Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    checkLogin();
  }, []);

  // Check if user is logged in (check for auth token/state)
  const checkLogin = () => {
    // "http://localhost:5000/api/users/check-auth"
    // Since we can't use localStorage, check your auth context/state here
    // For now, this is a placeholder - replace with your actual auth check
    // Example: const token = getAuthToken(); // from your auth context
    // setIsLoggedIn(!!token);
    
    // Temporary: Set to false by default
    setIsLoggedIn(false);//isko true krna h or else me false likhna h
  };

  // Logout handler
  const handleLogout = () => {
    // "http://localhost:5000/api/users/logout"
    // Clear authentication state
    // If using Context: clearAuth();
    // If using state management: dispatch(logout());
    
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate('/login');
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.profile-menu')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm relative">
      <div className="flex items-center space-x-2">
        <Globe className="w-8 h-8 text-orange-500" />
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Planora
        </Link>
      </div>

      <div className="flex items-center space-x-8">
        <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
          Home
        </Link>
       
        <Link to="/myplans" className="text-gray-600 hover:text-gray-900 transition-colors">
          My Plans
        </Link>
        
        {/* Show Sign up and Login only when NOT logged in */}
        {!isLoggedIn && (
          <>
            <Link to="/signup" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign up
            </Link>
            <Link 
              to="/login" 
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              Login
            </Link>
          </>
        )}
        
        {/* Show Profile button when logged in */}
        {isLoggedIn && (
          <div className="relative profile-menu">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              Profile
            </button>
            
            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 top-12 bg-white border border-gray-200 w-48 shadow-lg rounded-lg overflow-hidden z-50">
                <Link
                  to="/myplans"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors text-gray-700"
                >
                  My Plans
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors text-gray-700"
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors text-red-600 border-t border-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
