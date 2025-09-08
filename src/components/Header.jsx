import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

// Import your existing cart components
import CartHeader from "../components/cart/CartHeader";
import CartItem from "../components/cart/CartItem";
import CartRecommendations from "../components/cart/CartRecommendations";
import CartSavings from "../components/cart/CartSavings";
import CartSummary from "../components/cart/CartSummary";

// Import the separated header components
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
          
          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-full md:w-96 h-full bg-gray-100 z-50 shadow-xl overflow-y-auto"
          >
            {/* Close button overlay */}
            <button 
              onClick={onClose}
              className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
            >
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>

            {/* Cart page content */}
            <div className="min-h-screen">
              <CartHeader />
              <CartItem />
              <CartSavings />
              <CartRecommendations />
              <CartSummary />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const searchPlaceholders = [
   "coca cola",
    "pepsi",
    "maza",
    "sprite",
    "fanta",
    "thumbs up",
    "limca",
    "mountain dew"
  ];

  // Auto-change placeholder text
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [searchPlaceholders.length]);

  // Shared props for both header components
  const headerProps = {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    currentPlaceholderIndex,
    searchPlaceholders,
    setIsCartOpen
  };

  return (
    <>
      {/* Desktop Header */}
      <DesktopHeader {...headerProps} />

      {/* Mobile Header */}
      <MobileHeader {...headerProps} />

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;