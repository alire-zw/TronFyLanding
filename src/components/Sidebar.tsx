'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { TelegramIcon } from './icons/PriceIcons';
import { useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{ name: string; href: string }>;
}

const Sidebar = ({ isOpen, onClose, menuItems }: SidebarProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-0 right-0 h-full w-80 bg-white shadow-2xl border-l border-gray-200 z-[10000]"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image 
                      src="/pics/logo.svg" 
                      alt="ترون‌فای" 
                      width={32} 
                      height={32}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">ترون‌فای</div>
                    <div className="text-xs text-gray-500">TronFy App</div>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 p-6">
                <div className="flex flex-col space-y-6">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-700 hover:text-red-800 transition-colors duration-200 font-medium text-lg"
                      onClick={onClose}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-800 to-red-700 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <TelegramIcon className="text-white" size={20} />
                  ورود به مینی اپ
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar; 