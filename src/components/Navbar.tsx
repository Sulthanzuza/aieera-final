import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = ['Home', 'About', 'Services', 'Future', 'Contact'];
  
  // Dynamically set the background color based on scroll position
  const navbarBgClass = scrolled ? "bg-stone-200/95" : "bg-white/80";
  const textColorClass = scrolled ? "text-gray-900" : "text-gray-700";
  const hoverTextColorClass = scrolled ? "hover:text-gray-200" : "hover:text-gray-900";
  const mobileBgClass = scrolled ? "bg-stone-200/95" : "bg-white/90";
  const borderClass = scrolled ? "bg-stone-200/95" : "border-gray-200/20";

  return (
    <nav className={`fixed w-full z-50 ${navbarBgClass} backdrop-blur-md border-b ${borderClass} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={Logo} alt="logo icon" className="h-12 object-contain white" />
            </Link>
          </motion.div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`${textColorClass} ${hoverTextColorClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`${textColorClass} ${hoverTextColorClass} focus:outline-none`}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile nav links */}
      {menuOpen && (
        <div className={`md:hidden ${mobileBgClass} backdrop-blur-md border-t ${borderClass}`}>
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`block ${textColorClass} ${hoverTextColorClass} px-3 py-2 rounded-md text-base font-medium transition-colors`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;