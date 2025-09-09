
import React, { useState, useRef } from 'react';
import { Search, ChevronDown, MapPin, ShoppingCart, CircleUserRound, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import LocationModal from './LocationModal'; // 

const MobileHeader = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  currentPlaceholderIndex, 
  searchPlaceholders,
  setIsCartOpen 
}) => {
  const mobileScrollRef = useRef(null);
  const [activeZepto, setActiveZepto] = useState('CrateEasy');
  const [isLocationOpen, setIsLocationOpen] = useState(false); // Location modal state
  const navigate = useNavigate();

  const mobileCategories = [
    { 
      name: 'All Drinks', 
      icon: '🥤',
      headerBg: 'bg-blue-100',
      textColor: 'text-blue-800',
      route: '/'
    },
    { 
      name: 'Cola', 
      icon: '🥤',
      headerBg: 'bg-orange-100',
      textColor: 'text-orange-800',
      route: '/cola'
    },
    { 
      name: 'Juice', 
      icon: '🧃',
      headerBg: 'bg-green-100',
      textColor: 'text-green-800',
      route: '/juice'
    },
    { 
      name: 'Energy', 
      icon: '⚡',
      headerBg: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      route: '/energy'
    },
    { 
      name: 'Water', 
      icon: '💧',
      headerBg: 'bg-cyan-100',
      textColor: 'text-cyan-800',
      route: '/water'
    },
    { 
      name: 'Sports', 
      icon: '🏃‍♂️',
      headerBg: 'bg-green-100',
      textColor: 'text-green-800',
      route: '/sports'
    },
    { 
      name: 'Tea/Coffee', 
      icon: '☕',
      headerBg: 'bg-amber-100',
      textColor: 'text-amber-800',
      route: '/tea-coffee'
    },
    { 
      name: 'Soda', 
      icon: '🥤',
      headerBg: 'bg-lime-100',
      textColor: 'text-lime-800',
      route: '/soda'
    },
    { 
      name: 'Smoothies', 
      icon: '🥤',
      headerBg: 'bg-purple-100',
      textColor: 'text-purple-800',
      route: '/smoothies'
    },
    { 
      name: 'Milkshakes', 
      icon: '🥛',
      headerBg: 'bg-pink-100',
      textColor: 'text-pink-800',
      route: '/milkshakes'
    }
  ];

  // Function to scroll category to center
  const scrollCategoryToCenter = (categoryIndex) => {
    if (!mobileScrollRef.current) return;

    const container = mobileScrollRef.current;
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

  // Handle login navigation
  const handleLoginClick = () => {
    navigate('/login');
  };

  // Close location popup
  const closeLocation = () => {
    setIsLocationOpen(false);
  };

  // Get current mobile category for header background
  const currentMobileCategory = mobileCategories[selectedCategory];

  return (
    <>
     

      {/* Mobile Header */}
      <div className="md:hidden">
        
        <div className={`${currentMobileCategory ? currentMobileCategory.headerBg : 'bg-blue-100'} px-4 pt-4 pb-2 transition-colors duration-300`}>
          
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-1 w-80 max-w-full">
              <div className="flex">
                <button
                  onClick={() => setActiveZepto('CrateEasy')}
                  className={`flex-1 py-2.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeZepto === 'CrateEasy'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : `text-gray-600 hover:text-blue-600 ${currentMobileCategory?.textColor}`
                  }`}
                >
                  CrateEasy
                </button>
                <button
                  onClick={() => setActiveZepto('fresh-cold')}
                  className={`flex-1  py-2.5 px-4 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    activeZepto === 'fresh-cold'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-green-600 hover:text-green-700'
                  }`}
                >
                  CrateEasy Fresh & Cold
                </button>
              </div>
            </div>
          </div>

          {/* Location and User Icon */}
          <div className="flex items-center justify-between">
           
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-lg transition-colors"
              onClick={() => setIsLocationOpen(true)}
            >
              <MapPin className={`w-4 h-4 ${currentMobileCategory?.textColor || 'text-blue-800'}`} />
              <span className={`text-sm font-medium `}>Delivery Location</span>
              <ChevronDown className={`w-3 h-3 ${currentMobileCategory?.textColor || 'text-blue-800'}`} />
            </div>
            
            {/* User Login Icon - Added onClick handler */}
            <button 
              onClick={handleLoginClick}
              className="p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <CircleUserRound  size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Search Bar and Categories - Only for Mobile */}
      <div className={`md:hidden sticky top-0 z-50 ${currentMobileCategory ? currentMobileCategory.headerBg : 'bg-blue-100'} px-4 py-3 border-white/30 transition-colors duration-300`}>
        {/* Mobile Search Bar */}
        <div className="mb-4">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-transparent border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            
            {!searchQuery && (
              <div className="absolute left-9 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="flex items-center text-sm text-gray-400">
                  <span>Search for </span>
                  <div className="relative overflow-hidden h-5 mx-1 w-24">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPlaceholderIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 flex items-center font-medium text-gray-500 whitespace-nowrap"
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

        {/* Mobile Categories with Auto-scroll and Underline */}
        <div 
          ref={mobileScrollRef}
          className="flex items-center space-x-6 overflow-x-auto whitespace-nowrap scrollbar-hide"
        >
          {mobileCategories.map((category, index) => {
            const isActive = selectedCategory === index;
            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(index, category.route)}
                className="relative flex items-center space-x-2 cursor-pointer min-w-0 flex-shrink-0 py-2 px-2 transition-all duration-300"
              >
                <span className="text-lg">{category.icon}</span>
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-gray-500'
                }`}>
                  {category.name}
                </span>

                {/* Mobile underline */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    initial={false}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
        
     
      

      {/* Location Popup Modal - Mobile Optimized */}
      <AnimatePresence>
        {isLocationOpen && (
          <div className="md:hidden fixed inset-0 z-[9999] w-full">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30"
              onClick={closeLocation}
            />
            
            {/* Modal Container - Full screen for mobile */}
            <motion.div 
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute inset-0 bg-white overflow-hidden"
            >
              {/* Close Button - Mobile positioned */}
              <button
                onClick={closeLocation}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Location Modal Component */}
              <div className="h-full overflow-y-auto">
                <LocationModal onClose={closeLocation} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;