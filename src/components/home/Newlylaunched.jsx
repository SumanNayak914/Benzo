import React, { useState } from "react";

const NewlyLaunched = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      name: "Coca Cola Zero Sugar",
      qty: "500 ml",
      price: 55,
      image: "https://www.bbassets.com/media/uploads/p/xl/40204559_4-coca-cola-coke-zero.jpg",
    },
    {
      id: 2,
      name: "Pepsi Black",
      qty: "500 ml",
      price: 50,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqiAtFM2OPQ0wUIUpYBHq7sqsVRYhy60FCrwcBCHS2GKrY9pjib48tQXS&s=10",
    },
    {
      id: 3,
      name: "Sprite Zero",
      qty: "500 ml",
      price: 52,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXzR4H9EDhn-y1G-OKY9pp16T7j-rNgm60eUNht0C6pe8hMG0kDQGhagZ&s=10",
    },
    {
      id: 4,
      name: "Fanta Apple",
      qty: "500 ml",
      price: 60,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkOTBrCg6V_UABEb9z48ycMdjGYKogz_7OkbNsgD6SUqrEh2EQrvJlVw&s=10",
    },
    {
      id: 5,
      name: "Thums Up Charged",
      qty: "500 ml",
      price: 58,
      image: "https://www.bbassets.com/media/uploads/p/xl/40272433_1-thums-up-charged-soft-drink-berry-bolt-2x-caffeine.jpg",
    },
    {
      id: 6,
      name: "7Up Free",
      qty: "500 ml",
      price: 50,
      image: "https://liberationqualitydrinks.je/cdn/shop/files/7upWebsiteimages_1.png?v=1707301583",
    },
    {
      id: 7,
      name: "Mountain Dew Ice",
      qty: "500 ml",
      price: 62,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-rv8Ozp2F9KWEJXzMvG6IEWZYdV5YRg8HJBx-9w-aBWDkMV7axSw2Uc&s=10",
    },
    {
      id: 8,
      name: "Appy Fizz Lychee",
      qty: "500 ml",
      price: 49,
      image: "https://m.media-amazon.com/images/I/51gXA4puqfL._UF894,1000_QL80_.jpg",
    },
    {
      id: 9,
      name: "Slice Alphonso Mango",
      qty: "500 ml",
      price: 65,
      image: "https://www.vimalagro.com/wp-content/uploads/2018/03/mango_pulp_alphonso_slice_large-1.png",
    },
    {
      id: 10,
      name: "Maaza Gold",
      qty: "500 ml",
      price: 60,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhCFjRlXepa-xu5DhRtolwuxRk-R8Cq-H9i3Quo1VGGxrzvphRwMNigg&s=10",
    },
  ];

  const Newlylaunched = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Newly Launch
        </h2>

        {/* Mobile Grid Layout */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg relative overflow-hidden"
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-2">
                  <p className="font-medium text-xs mb-1 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-green-600">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-1 right-1 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    addedItems[item.id]
                      ? "bg-green-500 text-white border border-green-500"
                      : "bg-white border border-pink-500 text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  {addedItems[item.id] ? "✓" : "ADD"}
                </button>
              </div>
            ))}
          </div>

          {/* See All / Show Less Button */}
          {products.length > 6 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors"
              >
                {showAll ? "Show Less" : `See All (${products.length - 6} more)`}
              </button>
            </div>
          )}
        </div>

        {/* Desktop/Tablet Horizontal Scroll */}
        <div className="hidden md:block">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="min-w-[120px] max-w-[140px] bg-white rounded-lg relative flex-shrink-0"
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-2">
                  <p className="font-medium text-xs mb-1">{item.name}</p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-green-600">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

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

        {/* Custom CSS for hiding scrollbar */}
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

export default NewlyLaunched;
