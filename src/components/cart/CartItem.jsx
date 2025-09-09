import React, { useState } from 'react';
import { Clock, Plus, Minus } from 'lucide-react';

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white  shadow-sm border border-gray-100 p-4 max-w-md mx-auto">
     
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <Clock className="w-4 h-4 text-green-600" />
        </div>
        <span className="text-gray-800 font-medium">Delivery in 8 mins</span>
      </div>

      {/* Product Item */}
      <div className="flex items-center gap-3 mb-4">
        {/* Product Image */}
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <div className="w-8 h-6 bg-white/20 rounded-sm"></div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h3 className="text-gray-900 font-medium text-sm leading-tight mb-1">
            Nova Nova Assorted Nutty Chocolate Truffles Gift Box
          </h3>
          <p className="text-gray-500 text-xs">1 pack (117 g)</p>
        </div>

        {/* Price and Quantity */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs line-through">₹499</span>
            <span className="text-gray-900 font-semibold">₹398</span>
          </div>
          
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              disabled={quantity <= 1}
            >
              <Minus className="w-3 h-3 text-gray-600" />
            </button>
            <span className="text-gray-900 font-medium text-sm min-w-[20px] text-center">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-3 h-3 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <span className="text-gray-600 text-sm">Missed something?</span>
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-1">
          <Plus className="w-4 h-4" />
          Add More Items
        </button>
      </div>
    </div>
  );
};

export default CartItem;