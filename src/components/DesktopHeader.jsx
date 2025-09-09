
import React, { useState, useRef } from 'react';
import { Search, User, ShoppingCart, ChevronDown, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import Login from '../pages/Login'; // Import your existing Login component
import LocationModal from './LocationModal'; // Import LocationModal

const DesktopHeader = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  currentPlaceholderIndex, 
  searchPlaceholders,
  setIsCartOpen 
}) => {
  const desktopScrollRef = useRef(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false); // Location modal state

  const categories = [
    { 
      name: 'All Drinks', 
      icon: '🥤',
      route: '/'
    },
    { 
      name: 'Cola', 
      icon: '🥤',
      route: '/cola'
    },
    { 
      name: 'Juice', 
      icon: '🧃',
      route: '/juice'
    },
    { 
      name: 'Energy', 
      icon: '⚡',
      route: '/energy'
    },
    { 
      name: 'Water', 
      icon: '💧',
      route: '/water'
    },
    { 
      name: 'Sports', 
      icon: '🏃‍♂️',
      route: '/sports'
    },
    { 
      name: 'Tea/Coffee', 
      icon: '☕',
      route: '/tea-coffee'
    },
    { 
      name: 'Soda', 
      icon: '🥤',
      route: '/soda'
    },
    { 
      name: 'Smoothies', 
      icon: '🥤',
      route: '/smoothies'
    },
    { 
      name: 'Milkshakes', 
      icon: '🥛',
      route: '/milkshakes'
    }
  ];

  // Function to scroll category to center
  const scrollCategoryToCenter = (categoryIndex) => {
    if (!desktopScrollRef.current) return;

    const container = desktopScrollRef.current;
    const categoryElement = container.children[categoryIndex];
    
    if (categoryElement) {
      const containerWidth = container.clientWidth;
      const categoryLeft = categoryElement.offsetLeft;
      const categoryWidth = categoryElement.offsetWidth;
      
      const scrollLeft = categoryLeft - (containerWidth / 2) + (categoryWidth / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Handle category navigation with auto-scroll
  const handleCategoryClick = (categoryIndex, route) => {
    setSelectedCategory(categoryIndex);
    
    setTimeout(() => {
      scrollCategoryToCenter(categoryIndex);
    }, 100);
  };

  // Close login popup
  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  // Close location popup
  const closeLocation = () => {
    setIsLocationOpen(false);
  };

  return (
    <>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="hidden md:block sticky top-0 z-50 bg-gradient-to-b from-blue-100 to-white shadow-sm">
        <div className="px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3 pl-12">
              <div 
                className="text-white font-semibold text-lg bg-blue-600 rounded-full py-1.5 px-4 text-center cursor-pointer"
                onClick={() => handleCategoryClick(0, '/')}
              >
                CrateEasy
              </div>
              <div className="bg-green-100 text-green-600 px-3 py-1.5 rounded-full text-xs font-medium md:hidden lg:flex">
                Fresh & Cold
              </div>
            </div>

            {/* Location Selector - Updated to open modal */}
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
              onClick={() => setIsLocationOpen(true)}
            >
              <MapPin className="w-5 h-5 text-black" />
              <span className="text-gray-700 font-medium">Delivery Location</span>
              <ChevronDown className="w-4 h-4 text-black" />
            </div>

            {/* Search Bar */}
            <div className="flex-1    max-w-2xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                {searchQuery === '' && (
                  <div className="absolute left-10 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                    <div className="flex items-center">
                      <span className="text-sm">Search for </span>
                      <div className="relative overflow-hidden h-5 mx-1 w-28">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={currentPlaceholderIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 flex items-center font-medium text-gray-500 whitespace-nowrap text-sm"
                          >
                            "{searchPlaceholders[currentPlaceholderIndex]}"
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6 pr-6 ">
              <div 
                className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => setIsLoginOpen(true)}
              >
                <User className="w-5 h-5" />
                <span className="text-gray-700 font-medium">Login</span>
              </div>
              <div 
                className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 transition-colors "
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-gray-700 font-medium ">Cart</span>
              </div>
            </div>
          </div>

          {/* Desktop Categories */}
          <div className="max-w-7xl mx-auto px-4 border-t border-gray-100 py-4">
            <div 
              ref={desktopScrollRef}
              className="flex items-center space-x-8 overflow-x-auto whitespace-nowrap scrollbar-hide"
            >
              {categories.map((category, index) => {
                const isActive = selectedCategory === index;
                return (
                  <div
                    key={index}
                    onClick={() => handleCategoryClick(index, category.route)}
                    className={`relative flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-lg transition-all duration-300 flex-shrink-0 ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                    
                    {/* Blue underline */}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Login Popup Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-[9999] w-full flex items-center justify-center p-4">
            {/* Backdrop with proper opacity */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30"
              onClick={closeLogin}
            />
            
            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl mx-auto overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeLogin}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Login Component */}
              <div className="p-0">
                <Login onClose={closeLogin} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Location Popup Modal */}
      <AnimatePresence>
        {isLocationOpen && (
          <div className="fixed inset-0 z-[9999] w-full flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30"
              onClick={closeLocation}
            />
            
            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl h-auto mx-auto overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeLocation}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Location Modal Component */}
              <div className="overflow-y-auto max-h-[90vh]">
                <LocationModal onClose={closeLocation} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DesktopHeader;