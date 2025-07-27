'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { TelegramIcon } from './icons/PriceIcons';
import Sidebar from './Sidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'صفحه اصلی', href: '#home' },
    { name: 'خدمات', href: '#services' },
    { name: 'قیمت ترون', href: '#prices' },
    { name: 'درباره ما', href: '#about' },
    { name: 'تماس', href: '#contact' },
  ];

  const dropdownItems = [
    { name: 'خرید ترون', href: '#buy' },
    { name: 'فروش ترون', href: '#sell' },
    { name: 'تبدیل ترون', href: '#convert' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Side - Menu Button and Logo */}
            <div className="flex items-center gap-0">
              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>

              {/* Logo */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image 
                    src="/pics/logo.svg" 
                    alt="ترون‌فای" 
                    width={42} 
                    height={42}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#212121]">
                    ترون‌فای
                  </span>
                  <span className="text-xs text-gray-500">
                    TronFy App
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-700 hover:text-red-800 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-800 transition-colors duration-200 font-medium"
                >
                  <span>معاملات</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    {dropdownItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-800 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-red-800 to-red-700 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center gap-2"
              >
                <TelegramIcon className="text-white" size={20} />
                <span className="hidden sm:inline">ورود به مینی اپ</span>
                <span className="sm:hidden">مینی اپ</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Sidebar */}
      <Sidebar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        menuItems={menuItems}
      />
    </>
  );
};

export default Header; 