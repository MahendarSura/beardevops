
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Services from '../Services';
import ServiceDetails from '../ServiceDetails';

import Blogs from '../Blogs';
import BlogPost from '../BlogPost';

import Signup from './Signup';
import VerifyOTP from './VerifyOTP';
import SetPassword from './SetPassword';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPasswordOTP from './ResetPasswordOTP';
import ResetPassword from './ResetPassword';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogPost />} />

          {/* Auth Routes */}
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/verify-otp" element={<VerifyOTP />} />
          <Route path="/auth/set-password" element={<SetPassword />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password-otp" element={<ResetPasswordOTP />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

