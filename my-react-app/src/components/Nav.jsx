import React from 'react'
import { Search, Globe, Award, Headphones } from 'lucide-react';
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
          <a href="#" className="text-gray-600 hover:text-gray-900">Destinations</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Activities</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">USD</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Sign in</a>
          <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
            Login
          </button>
        </div>
      </nav>
      </>
  )
}

export default Nav