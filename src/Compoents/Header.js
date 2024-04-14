import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 py-4 text-white flex justify-between items-center px-4">

      <Link to='/'>
        <img
          src={logo}
          alt="Bahabelom Gebremedhn"
          className="profile-image rounded-full h-12 w-12  ml-8" // Reduced size and margin
        />
      </Link>
      <ul className="hidden md:flex space-x-8">
        <li className="hover:text-blue-500">
          <Link to="/about" className="active:text-blue-500 text-base font-medium">About</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to="/projects" className="active:text-blue-500 text-base font-medium">Projects</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to="/contact" className="active:text-blue-500 text-base font-medium">Contact</Link>
        </li>
      </ul>

      {/* Responsive Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isMenuOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu (displayed on smaller screens) */}
      {isMenuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-gray-800 py-4 text-white flex flex-col space-y-4">
          <li className="hover:text-blue-500">
            <Link to="/about" className="active:text-blue-500 block px-4 py-2 text-base font-medium">
              About
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/projects" className="active:text-blue-500 block px-4 py-2 text-base font-medium">
              Projects
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/contact" className="active:text-blue-500 block px-4 py-2 text-base font-medium">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
