import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Category-wise items
const categories = {
  Sprites: [
    {
      id: 1,
      name: "Sprite 250ml Can",
      qty: "250ml",
      price: 35,
      oldPrice: 40,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9wjMOVNy8e33KEYIWMheBqzWyosvSxJUymYCn8WFYazxI3YFoEpU00I&s=10",
    },
    {
      id: 2,
      name: "Sprite 500ml Bottle",
      qty: "500ml",
      price: 40,
      oldPrice: 45,
      image:
        "https://5.imimg.com/data5/JE/BI/GLADMIN-36790193/sprite-500ml-500x500.png",
    },
    {
      id: 3,
      name: "Sprite 1.25L Bottle",
      qty: "1.25L",
      price: 70,
      oldPrice: 80,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0_0rKl581WHrlVZNVf74kCbqU71NG3Cvjuoxb5Uv09elO9f9__bcEAI&s=10",
    },
    {
      id: 4,
      name: "Sprite 2L Family Pack",
      qty: "2L",
      price: 110,
      oldPrice: 120,
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/5f4e81a52158d5e7bf2806035d04dfe8",
    },
  ],
  Maaza: [
    {
      id: 5,
      name: "Maaza Mango 250ml",
      qty: "250ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEOT0a_cR_PsZlQfCsHIoxmvIVCe7ASpfFydgo7IBBq4OL5AfrhlUl80&s=10",
    },
    {
      id: 6,
      name: "Maaza Mango 600ml",
      qty: "600ml",
      price: 45,
      oldPrice: 50,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLJT1bxdDiIR-FBduQDbAcVZnCCwz-e_hcwgNxYMxeWbeZgs8FJu1p1zT&s=10",
    },
    {
      id: 7,
      name: "Maaza Mango 1.2L",
      qty: "1.2L",
      price: 85,
      oldPrice: 95,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwkVi7WIWIt9NfEYMqfWi-yDhnDdGRJ32GXg2JvbHkbhmK8oio-dzq0q7&s=10",
    },
    {
      id: 8,
      name: "Maaza Mango 1.75L Family Pack",
      qty: "1.75L",
      price: 120,
      oldPrice: 130,
      image:
        "https://cdn.zigpy.com/filemanager/admin/confetionary/admin/maaza-mango-soft-drink-850ml.webp",
    },
  ],
  Drinks: [
    {
      id: 9,
      name: "Coca Cola",
      qty: "500ml",
      price: 40,
      oldPrice: 45,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqZtBRpIjR6aZklLw5-ZPvKVocKXuCu2QfInHNXBQbLQVsP5JKyVi8pHU6_C-VzDveg0mgHR5d3N7koExKCct4AkaZmsm37lW0zribWEc",
    },
    {
      id: 10,
      name: "Pepsi",
      qty: "500ml",
      price: 35,
      oldPrice: 40,
      image:
        "https://www.pepsicopartners.com/medias/300Wx300H-1-HYK-24760.jpg?context=bWFzdGVyfHJvb3R8MjQxNjB8aW1hZ2UvanBlZ3xhRFZsTDJoaU1DOHhNRGN3TlRneU5qVTBOVFk1TkM4ek1EQlhlRE13TUVoZk1TMUlXVXN0TWpRM05qQXVhbkJufGVlMDZmNzFiOGIxMjFhMDUxMDA5NmU5MzUwYjMzZDQ1MTA4ZDViY2M5MGFlZWY0ZWU3ODcxZTUyNWU2NmQzZDc",
    },
  ],
};

const SpriteSlider = () => {
  const [activeCategory, setActiveCategory] = useState("Sprites");
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
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
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
  }, [activeCategory]);

  const items = categories[activeCategory];

  return (
    <div className="bg-gray-50 p-4 lg:w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Category Tabs */}
        <div className="flex gap-4 mb-6">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeCategory === cat
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-600 border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scroll container with arrows */}
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 border hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 border hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-1 overflow-x-auto no-scrollbar pb-4"
            onScroll={checkScrollPosition}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white relative flex-shrink-0 w-[calc((100vw-32px-8px)/3)] sm:w-[140px] md:w-[160px] lg:w-[180px] rounded-lg shadow-sm"
              >
                <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-lg bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-2 pb-10">
                  <p className="font-medium text-xs sm:text-sm mb-1 truncate">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-sm font-bold text-green-600">
                      ₹{item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 text-xs">
                        ₹{item.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition ${
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

export default SpriteSlider;
