import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Home, 
  Info, 
  Briefcase, 
  BookOpen, 
  MessageSquare,
  Linkedin, 
  Twitter, 
  Instagram, 
  Github,
  Mail,
  Globe,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-flex items-center mb-6">
              <Code2 className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                beardevops
              </span>
            </Link>
            <p className="text-gray-400">
              Empowering engineers and businesses with expert DevOps solutions, cloud automation, and career guidance — 100% remote.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Key Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 hover:text-white transition-colors">
                ✦ DevOps Consultation
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                ✦ Cloud Architecture Setup
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                ✦ Resume & LinkedIn Optimization
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                ✦ Mock Interviews & Mentorship
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:beardevops@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  beardevops@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://beardevops.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  beardevops.vercel.app
                </a>
              </li>
              <li className="text-gray-400 mt-4">
                Fully remote — available worldwide.
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-4">Stay Connected</h5>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-500 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 text-center text-gray-400">
          © {new Date().getFullYear()} beardevops - All Rights Reserved.
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-pink-500/25 transition-all"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
