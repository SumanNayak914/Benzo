import React from 'react';
import { Plus, Heart } from 'lucide-react';

const CartRecommendations = () => {
  const products = [
    {
      id: 1,
      image: "/api/placeholder/100/120",
      price: 49,
      originalPrice: 50,
      savings: 1,
      packInfo: "1 pack (85 g)",
      name: "Bingo! Original Style Chilli...",
      tag: "Bingo Heat",
      tagColor: "bg-orange-500"
    },
    {
      id: 2,
      image: "/api/placeholder/100/120", 
      price: 479,
      originalPrice: 650,
      savings: 171,
      packInfo: "1 pack (8 x 12.5 g)",
      name: "Lindt Lindor Gift Box Milk",
      tag: "Gift Ready",
      tagColor: "bg-red-500"
    },
    {
      id: 3,
      image: "/api/placeholder/100/120",
      price: 298,
      originalPrice: 350,
      savings: 52,
      packInfo: "1 pack (75 g)",
      name: "Open Secret Chocolate...",
      tag: "",
      tagColor: ""
    },
    {
      id: 4,
      image: "/api/placeholder/100/120",
      price: 64,
      originalPrice: 79,
      savings: 15,
      packInfo: "",
      name: "Hershey's Cookies...",
      tag: "Choco",
      tagColor: "bg-brown-500"
    }
  ];

  return (
    <div className="max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 px-4">
        <h3 className="text-gray-900 font-medium text-lg">You might also like</h3>
        <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 pb-4 will-change-transform" style={{ width: 'max-content' }}>
          {products.map((product) => (
            <div key={product.id} className="flex-none w-32 bg-white rounded-lg border border-gray-200 p-3 relative">
              {/* Add Button */}
              <button className="absolute top-2 right-2 w-6 h-6 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors z-10">
                <Plus className="w-4 h-4" />
              </button>

              {/* Product Image Container */}
              <div className="w-full h-20 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-md mb-3 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for product image */}
                <div className="w-16 h-16 bg-white/20 rounded"></div>
                
                {/* Tag if exists */}
                {product.tag && (
                  <div className={`absolute bottom-1 left-1 ${product.tagColor} text-white text-xs px-1 py-0.5 rounded text-[10px] font-medium`}>
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Price Section */}
              <div className="mb-2">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-gray-900 font-semibold text-sm">₹{product.price}</span>
                  <span className="text-gray-400 text-xs line-through">₹{product.originalPrice}</span>
                </div>
                <div className="text-green-600 text-xs font-medium">SAVE ₹{product.savings}</div>
                {product.packInfo && (
                  <div className="text-gray-500 text-xs mt-1">{product.packInfo}</div>
                )}
              </div>

              {/* Product Name */}
              <h4 className="text-gray-800 text-xs font-medium leading-tight line-clamp-2">
                {product.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          transform: translateZ(0);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CartRecommendations;