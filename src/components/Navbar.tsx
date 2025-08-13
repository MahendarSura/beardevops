import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 backdrop-blur-lg border-b border-yellow-600">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/beardevops-logo.png" alt="Beardevops Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-blue-800">
              Beardevops
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/services') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
              }`}
            >
              Services
            </Link>
            <Link
              to="/blogs"
              className={`text-sm font-medium transition-colors ${
                isActive('/blogs') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              to="/auth/login" 
              className="px-4 py-2 text-sm font-medium text-yellow-50 bg-blue-800 rounded-full hover:bg-blue-900 transition-all"
            >
              Login / Signup
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-blue-800 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-yellow-600">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`text-sm font-medium transition-colors ${
                  isActive('/services') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/blogs"
                className={`text-sm font-medium transition-colors ${
                  isActive('/blogs') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-900 underline' : 'text-blue-800 hover:text-blue-950'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
