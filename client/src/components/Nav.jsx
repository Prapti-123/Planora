import React from 'react'
import { Search, Globe, Award, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <Globe className="w-8 h-8 text-orange-500" />
          <span className="text-2xl font-bold text-gray-800">Planora</span>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/destinations" className="text-gray-600 hover:text-gray-900">Destinations</Link>
          <Link to="/activities" className="text-gray-600 hover:text-gray-900">Activities</Link>
          <Link to="/myplans" className="text-gray-600 hover:text-gray-900">My Plans</Link>
          <Link to="/signup" className="text-gray-600 hover:text-gray-900">Sign up</Link>
          <Link to="/login" className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
            Login
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav