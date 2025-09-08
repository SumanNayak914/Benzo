import React, { useState } from "react";

const Maaja = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      name: "Maaza Mango Drink",
      qty: "600 ml",
      price: 45,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqOWlp10TSHByQjInIlh05hgNTfGfAb-6Yg&s",
    },
    {
      id: 2,
      name: "Frooti Mango Drink",
      qty: "1 L",
      price: 60,
      image:
        "https://m.media-amazon.com/images/I/51TNaTSPSJL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "Appy Fizz",
      qty: "750 ml",
      price: 55,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzpqkwZUrYQvRdAt5xmgs-36aK8z5L4F_H4tknHgGhoF1Gz_IHiW4l-w&s=10",
    },
    {
      id: 4,
      name: "Pepsi",
      qty: "750 ml",
      price: 40,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlarOhHAAC0zvAngSEp3cQJNvowkNSyiQO60yX5iz4_4QBJL7U9SCORsE&s=10",
    },
    {
      id: 5,
      name: "Coca Cola",
      qty: "750 ml",
      price: 40,
      image:
        "https://cdn.grofers.com/da/cms-assets/cms/product/6646686b-a7eb-40e9-8e2a-808397ec155c.jpg",
    },
    {
      id: 6,
      name: "Thumbs Up",
      qty: "750 ml",
      price: 40,
      image:
        "https://www.bbassets.com/media/uploads/p/xl/251014_12-thums-up-soft-drink.jpg",
    },
    {
      id: 7,
      name: "Sprite",
      qty: "750 ml",
      price: 40,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgO3UIszzPlkmz4MRk3M7V8wgsqfH4MJyjzQBtGn7s7Z2_RXu83-XKL0Ia&s=10",
    },
    {
      id: 8,
      name: "Slice Mango Drink",
      qty: "600 ml",
      price: 45,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0esZ3wTLDK1752MvSRqkqvmpPyvKPJek_h92YzRJ43MueVLELVERtj7u&s=10",
    },
    {
      id: 9,
      name: "Real Fruit Juice - Orange",
      qty: "1 L",
      price: 120,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIuXZHl4ZVZ3G14phviRMhu9JO8pwWLwXYEL11c8xnEPbIsOqoFjAEqbY&s=10",
    },
    {
      id: 10,
      name: "Real Fruit Juice - Mixed Fruit",
      qty: "1 L",
      price: 120,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfU6gIAn8QzjTop-mwUGGm5R5e6xKBm2COde16e_C3tQBY1ekURuiYjjDd&s=10",
    },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <div className="bg-gray-50 p-4 lg:w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Maaja
        </h2>

        {/* Mobile Grid */}
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

          {products.length > 6 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors"
              >
                {showAll
                  ? "Show Less"
                  : `See All (${products.length - 6} more)`}
              </button>
            </div>
          )}
        </div>

        {/* Desktop Scroll */}
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

export default Maaja;
