import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cocaColaItems = [
  {
    id: 1,
    name: "Coca-Cola Original Taste Can",
    qty: "300 ml",
    price: 39,
    oldPrice: 49,
    image: "https://www.chennaigrocers.com/cdn/shop/products/COCACOLAORIGINAL300ML.jpg?v=1606801061&width=2250",
  },
  {
    id: 2,
    name: "Coca-Cola Zero Sugar Can",
    qty: "300 ml",
    price: 45,
    oldPrice: 55,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8x5dJKv57mkg6hInUEm1htB0u10WscozyY0CKpL0JvylGmhQT80X1IY&s=10",
  },
  {
    id: 3,
    name: "Coca-Cola Diet Bottle",
    qty: "500 ml",
    price: 55,
    oldPrice: 65,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJQPX8ukxfabQyEw2cItrU1cYvgHiKNSvnCCKOveiGc9KJSe2mb8_eFA&s=10",
  },
  {
    id: 4,
    name: "Coca-Cola Original PET Bottle",
    qty: "1.25 L",
    price: 75,
    oldPrice: 85,
    image: "https://www.bbassets.com/media/uploads/p/l/251023_11-coca-cola-soft-drink-original-taste.jpg",
  },
  {
    id: 5,
    name: "Coca-Cola Zero Sugar PET Bottle",
    qty: "750 ml",
    price: 60,
    oldPrice: 70,
    image: "https://www.bbassets.com/media/uploads/p/l/40262162_2-coca-cola-soft-drink-zero-sugar-no-calories.jpg",
  },
  {
    id: 6,
    name: "Coca-Cola Mini Can Pack",
    qty: "6 x 150 ml",
    price: 220,
    oldPrice: 260,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2Hm6S8uTSZcttHIG4P1_E1CK5mFd88vucKpCda3BcudKAH-QV0t2fG37q9cd9pVWItIddGwkCu6Tqqnde3TEdYqFXRwkL1fDnzWq9IihObB0krJOAtTM3Tw",
  },
  {
    id: 7,
    name: "Coca-Cola Glass Bottle",
    qty: "200 ml",
    price: 25,
    oldPrice: 35,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHH4QOq6f5flG0tGM0HE2hLPXOD4_eLyaoaqjTP2dNR23fGmtJRIX5OkqR&s=10",
  },
];

const TopPickSlider = ({ title = "Coca Cola", items = cocaColaItems }) => {
  const [addedItems, setAddedItems] = useState({});
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, [items]);

  return (
    <div className="bg-gray-50 p-4 lg:w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          {title}
        </h2>

        {/* Scroll container with arrows */}
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-all duration-200 border border-gray-200 hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-all duration-200 border border-gray-200 hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          )}

          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-1 overflow-x-auto no-scrollbar pb-4"
            onScroll={checkScrollPosition}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white relative flex-shrink-0
                  w-[calc((100vw-32px-8px)/3)]
                  sm:w-[140px]
                  md:w-[160px]
                  lg:w-[180px]
                  rounded-lg shadow-sm"
              >
                {/* Image */}
                <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-lg bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content */}
                <div className="p-2 pb-10">
                  <p className="font-medium text-xs sm:text-sm mb-1 truncate">{item.name}</p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-sm font-bold text-green-600">
                      ₹{item.price}
                    </span>
                    {item.oldPrice ? (
                      <span className="line-through text-gray-400 text-xs">
                        ₹{item.oldPrice}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* ADD Button */}
                <button
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    addedItems[item.id]
                      ? "bg-green-500 text-white border border-green-500"
                      : "bg-white border border-pink-500 text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  {addedItems[item.id] ? "ADDED" : "ADD"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Hide scrollbar */}
        <style jsx>{`
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TopPickSlider;
