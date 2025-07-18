import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="logo">
        <FaGraduationCap className="logo-icon" /> EduConsult
      </div>
      <ul>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;