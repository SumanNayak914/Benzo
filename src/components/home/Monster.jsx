import React, { useState } from "react";

const Monster = () => {
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      name: "Monster Energy Original",
      qty: "350 ml",
      price: 120,
      oldPrice: 140,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJc9bK10c9_lyJlphuRllKbDIaOTFcIntKnv_9oSMzQOu-CIdfPc-AGA&s=10",
    },
    {
      id: 2,
      name: "Monster Zero Sugar",
      qty: "350 ml",
      price: 125,
      oldPrice: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRjcVdR5t6KG3VrsZ_dbhVuplYe2ky0VREvYlOyz2xlbEKZSXfwRC-9Y&s=10",
    },
    {
      id: 3,
      name: "Monster Ultra Red",
      qty: "350 ml",
      price: 130,
      oldPrice: 155,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BoqRFbh0TinHvDSeMg8xqsZoXEyd1U1qCRaluaZ2Gg3TRMUvhvbfIv92&s=10",
    },
    {
      id: 4,
      name: "Monster Ultra Blue",
      qty: "350 ml",
      price: 130,
      oldPrice: 155,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBuJtjAwdbW9aWEf0FaZO23CGXQb1jtoZZskScMIX7Cqs6O1mFgKj5ry5&s=10",
    },
    {
      id: 5,
      name: "Monster Ultra Sunrise",
      qty: "350 ml",
      price: 135,
      oldPrice: 160,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfh_4QY6QYjZ-_kfoZ2c7fc5kgDqCu2JMqCbls6_T5wzYmSHLAOdulHM&s=10",
    },
    {
      id: 6,
      name: "Monster Ultra Violet",
      qty: "350 ml",
      price: 135,
      oldPrice: 160,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rCE1uYTfZ5LccaQI30FlRsRVulf_0I68CPItGrTp9OR_xaFJZnUtpg&s=10",
    },
    {
      id: 7,
      name: "Monster Ultra Fiesta Mango",
      qty: "350 ml",
      price: 135,
      oldPrice: 160,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswLHcR1Ok2VAPbufTRiLXrc97SakAjWhPMg&s",
    },
    {
      id: 8,
      name: "Monster Ultra Paradise",
      qty: "350 ml",
      price: 135,
      oldPrice: 160,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOG9pGlbdLXER0LZdjjXw1M-7OGUWgIbzXTQRiakYDin_Jedm481W5PzSc&s=10",
    },
    {
      id: 9,
      name: "Monster Mango Loco",
      qty: "350 ml",
      price: 140,
      oldPrice: 165,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZb26S1qeRMEcKCtnAU4rcgZlUA7jqyXR8AczTC1S86SP_4ORv1wmcq3f&s=10",
    },
    {
      id: 10,
      name: "Monster Pipeline Punch",
      qty: "350 ml",
      price: 140,
      oldPrice: 165,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpegQO_x6T1VLcyCOy6KP1AtdIVw4WExst3IPXzP20PtiKdnWFbBat8zd&s=10",
    },
    {
      id: 11,
      name: "Monster Rehab Tea + Lemonade",
      qty: "350 ml",
      price: 140,
      oldPrice: 170,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrP4AFRr9K-FYpsmCKxrDTa3HZ2bdTkyfpUxlHAQ1oIQCh9akmDyCz4gS&s=10",
    },
    {
      id: 12,
      name: "Monster Rehab Peach Tea",
      qty: "350 ml",
      price: 140,
      oldPrice: 170,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiYP6QaIvtAjdhYcH574cYx7_VOLhXy_5eE0Ds6YPtptKZv1eM5h3I_4&s=10",
    },
    {
      id: 13,
      name: "Monster Rehab Raspberry Tea",
      qty: "350 ml",
      price: 140,
      oldPrice: 170,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDMIkxSQ0Nwo6lkNCc9thYQxwz5uWDb5FdlP3xmFBYfAoluDcdwc5vgE&s=10",
    },
    {
      id: 14,
      name: "Monster Import",
      qty: "350 ml",
      price: 145,
      oldPrice: 175,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvrd7Ofc9LjlDoQGgKPIs6iGauR7HD7onOV_qH2KHt9ZI1tTuouPv_tU&s=10",
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
          Monster Energy Drinks
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

export default Monster;
