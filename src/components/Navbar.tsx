import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react'; 
import LogoName from "../assets/Name with white gradient.webp";
import Logo from "../assets/Single logo with white gradient.webp";

const Navbar = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

 
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

 
  const services = [
    { name: 'Branding', path: '/services/branding' },
    { name: 'Chatbots', path: '/services/chat-bots' },
    { name: 'Content Marketing', path: '/services/content-marketing' },
    { name: 'Customisation & Strategy', path: '/services/customization' },
    { name: 'Email Automation', path: '/services/email-automation' },
    { name: 'GEO', path: '/services/generative-engine-optimization' },
    { name: 'Paid Ads', path: '/services/paid-ads' },
    { name: 'SEO', path: '/services/search-engine-optimization' },
    { name: 'Social Media Marketing', path: '/services/socialmedia-marketing' },
    { name: 'Web Desiging', path: '/services/web-designing' },
    { name: 'Web Development', path: '/services/web-development' },
  ];

 
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', dropdown: services },
    { name: 'Future', path: '/future' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={Logo} alt="logo icon" loading="lazy" className="h-12 object-contain" />
              <img src={LogoName} alt="logo icon" loading="lazy" className="h-6 object-contain " />
            </Link>
          </motion.div>

          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              item.dropdown ? (
                
                <motion.div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesMenuOpen(true)}
                  onMouseLeave={() => setServicesMenuOpen(false)}
                >
                  <Link 
                   to={item.path}
                   className="flex items-center text-stone-200 hover:text-gray-400 px-3 py-1 rounded-md text-sm font-medium transition-colors focus:outline-none">
                    {item.name}
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <AnimatePresence>
                    {servicesMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white/10 backdrop-blur-lg ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {item.dropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              onClick={() => setServicesMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-stone-200 hover:bg-gray-500/30 transition-colors"
                              role="menuitem"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
              
                <motion.div key={item.name} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={item.path}
                    className="text-stone-200 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )
            ))}
          </div>

          {/* --- Mobile menu button --- */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-stone-200 hover:text-gray-400 focus:outline-none">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Nav Links --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray/90 backdrop-blur-md border-t border-gray-200/30"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((item) => (
                item.dropdown ? (
                 
                  <div key={item.name}>
                    <Link
                     to={item.path}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex justify-between items-center text-stone-200 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    {mobileServicesOpen && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-500">
                        {item.dropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            onClick={toggleMenu} 
                            className="block text-stone-300 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={toggleMenu}
                    className="block text-stone-200 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;