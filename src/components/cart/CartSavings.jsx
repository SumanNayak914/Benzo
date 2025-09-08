import React from 'react';
import { ChevronRight } from 'lucide-react';

const CartSavings = () => {
  return (
    <div className="max-w-md mx-auto space-y-3">
      {/* Daily Savings Card */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-100">
        <div className="flex items-start gap-3 mb-4">
          <div className="text-2xl">👑</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-gray-800 font-medium">Save more with</span>
              <div className="bg-black text-white px-2 py-1 rounded text-xs font-semibold">
                daily
              </div>
            </div>
            
            <div className="space-y-2 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <div>
                  <div className="text-gray-900 font-medium text-sm">Lowest prices on Fruits & Veggies</div>
                  <div className="text-gray-600 text-xs">Freshness guaranteed</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-xs">🚚</span>
                </div>
                <div className="text-gray-900 font-medium text-sm">Free delivery above ₹99</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-700 text-sm">Add at <span className="font-semibold">₹1 ₹199</span></span>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Coupons & Offers Card */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm font-bold">%</span>
            </div>
            <span className="text-gray-900 font-medium">View Coupons & Offers</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default CartSavings;