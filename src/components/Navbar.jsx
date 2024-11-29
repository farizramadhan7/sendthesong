// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 bg-white z-[100] border-b border-zinc-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo with Custom Font */}
        <Link 
          to="/" 
          className="text-2xl sm:text-3xl" 
          style={{ fontFamily: 'ReenieBeanie' }}
        >
          telcomsendthesong
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4 sm:space-x-6 ml-4 sm:ml-8">
          <Link to="/submit" className="text-sm sm:text-base lg:text-lg hover:text-gray-600">
            Submit
          </Link>
          <Link to="/browse" className="text-sm sm:text-base lg:text-lg hover:text-gray-600">
            Browse
          </Link>
          <Link to="/support" className="text-sm sm:text-base lg:text-lg hover:text-gray-600">
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
