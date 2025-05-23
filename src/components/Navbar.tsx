import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {  Menu, X } from 'lucide-react';
import LogoName from "../assets/Name with white gradient.webp";
import Logo from "../assets/Single logo with white gradient.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ['Home', 'About', 'Services', 'Future', 'Contact'];

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 flex items-center">
  <Link to="/" className="flex items-center space-x-2">
  <img src={Logo} alt="logo icon"  loading="lazy" className="h-12 object-contain" />
<img src={LogoName} alt="logo icon"  loading="lazy" className="h-6 object-contain " />

    
    
  
  </Link>
</motion.div>


          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-stone-200 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-stone-200 hover:text-gray-400 focus:outline-none">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav links */}
      {menuOpen && (
        <div className="md:hidden bg-gray/90 backdrop-blur-md border-t border-gray-200/30">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-stone-200 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
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
