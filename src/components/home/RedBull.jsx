import React, { useState } from "react";

const RedBullSlider = () => {
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      name: "Red Bull Energy Drink",
      qty: "250 ml",
      price: 110,
      oldPrice: 130,
      image:
        "https://m.media-amazon.com/images/I/51Bp30CR3IL.jpg",
    },
    {
      id: 2,
      name: "Red Bull Sugarfree",
      qty: "250 ml",
      price: 115,
      oldPrice: 135,
      image:
        "https://www.bbassets.com/media/uploads/p/l/30005089_5-red-bull-energy-drink-sugar-free.jpg",
    },
    {
      id: 3,
      name: "Red Bull Blue Edition",
      qty: "250 ml",
      price: 120,
      oldPrice: 140,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQwEFM40jFfkx7mwzyLc3OEY6pSmLQhWkPY2dVfIrKsmXu16zPBeZh8s&s=10",
    },
    {
      id: 4,
      name: "Red Bull Tropical Edition",
      qty: "250 ml",
      price: 120,
      oldPrice: 145,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKh8N-boxQgM6BZWpUhVIlLBhZdxj_Ou06d6KL7_Q6UltI-dlsi9Np4V0&s=10",
    },
    {
      id: 5,
      name: "Red Bull Watermelon Edition",
      qty: "250 ml",
      price: 125,
      oldPrice: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsw27JpdcQVNSTX1h2o-qYUG4U-k7m0bQfiJNCmRXdXijhWYBE4iBqhM4&s=10",
    },
    {
      id: 6,
      name: "Red Bull Coconut Edition",
      qty: "250 ml",
      price: 125,
      oldPrice: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fT6f98G2ir1kjlzmOtYYFs90lnp4W2zlx6tXY-JlI4puUauQwossbT4&s=10",
    },
    {
      id: 7,
      name: "Red Bull Peach Edition",
      qty: "250 ml",
      price: 125,
      oldPrice: 150,
      image:
        "https://images-cdn.ubuy.co.in/67c6dd49b3b4496a2560f4df-red-bull-peach-edition-energy-drink.jpg",
    },
    {
      id: 8,
      name: "Red Bull Pear Edition",
      qty: "250 ml",
      price: 125,
      oldPrice: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPcn7sD1Z1nw3jAnSB-4cMj6iX9-8BFk6H93L-JgWDaRerKCnfrW8pqA&s=10",
    },
    {
      id: 9,
      name: "Red Bull Winter Edition",
      qty: "250 ml",
      price: 130,
      oldPrice: 155,
      image:
        "https://images-cdn.ubuy.co.in/671d0b6c53b36029e216177e-red-bull-winter-edition-iced-vanilla.jpg",
    },
    {
      id: 10,
      name: "Red Bull Summer Edition",
      qty: "250 ml",
      price: 130,
      oldPrice: 155,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WUn_KNpz2AfrrFWuoqFCudzmVn0m2hV8ll_fR21kVmtThsQ1mNVb8mqB&s=10",
    },
    {
      id: 11,
      name: "Red Bull Amber Edition",
      qty: "250 ml",
      price: 125,
      oldPrice: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyndCXN9vxS-Anl8Ht8p30GeMebERzb7t6r7DTf9LOXSlfaTobya-w0kO&s=10",
    },
    {
      id: 12,
      name: "Red Bull Red Edition (Cranberry)",
      qty: "250 ml",
      price: 125,
      oldPrice: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrtZhltGYPTElgdbuL4WGL2v5e-NiNu_4EzWs6j5G6KyVcNwkfz8u8EXR&s=10",
    },
    {
      id: 13,
      name: "Red Bull Yellow Edition",
      qty: "250 ml",
      price: 125,
      oldPrice: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxv0sAKON_VNICqPko9mWWJjMfeZG-cigKbtEgh9hlNfEG5dPdwBszx8u&s=10",
    },
    {
      id: 14,
      name: "Red Bull Green Edition",
      qty: "250 ml",
      price: 125,
      oldPrice: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxPn4dYjKnnBd3dNwOoue-2IRnDCR64GAA4xTdiX2t_Vw3kXgW_iexVg&s=10",
    },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="bg-gray-50 p-4 lg:w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Red Bull Drinks
        </h2>

        {/* Scroll container */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="
                bg-white relative flex-shrink-0
                w-[calc((100vw-48px)/3)]
                sm:min-w-[140px] sm:max-w-[140px]
                md:min-w-[160px] md:max-w-[160px]
                rounded-lg 
              "
            >
              {/* Image */}
              <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-t-lg rounded-b-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="p-2">
                <p className="font-medium text-xs mb-1 truncate">{item.name}</p>
                <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-sm font-bold text-green-600">
                    ₹{item.price}
                  </span>
                  <span className="line-through text-gray-400 text-xs">
                    ₹{item.oldPrice}
                  </span>
                </div>
              </div>

              {/* ADD/ADDED Button */}
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

export default RedBullSlider;
