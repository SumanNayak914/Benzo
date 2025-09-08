import React, { useState } from "react";

const Amul = () => {
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      name: "Amul Kool Kesar",
      qty: "200 ml",
      price: 25,
      oldPrice: 30,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CHo-08juUL39sdPl5BkInKShKo0USfIKu3RiH0-ekrX1IDuP91kR_uU&s=10",
    },
    {
      id: 2,
      name: "Amul Kool Rose",
      qty: "200 ml",
      price: 25,
      oldPrice: 30,
      image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sNIQ_J2GVrno_xnIDDtFyVDwDGizTo3WaPLx6EJxREK-selhWVVdtBGt&s=10",
    },
    {
      id: 3,
      name: "Amul Kool Elaichi",
      qty: "200 ml",
      price: 25,
      oldPrice: 30,
      image:
        "https://m.media-amazon.com/images/I/71g4ws8WRsL._UF894,1000_QL80_.jpg",
    },
    {
      id: 4,
      name: "Amul Kool Badam",
      qty: "200 ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://www.bbassets.com/media/uploads/p/l/40003716_4-amul-kool-milk-shake-badam.jpg",
    },
    {
      id: 5,
      name: "Amul Kool Thandai",
      qty: "200 ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8UH-WohHLHyUfeKb2HJnm1yfqqwRp888i2oS9D7yUpHlEK6X7MXHIos&s=10",
    },
    {
      id: 6,
      name: "Amul Kool Café",
      qty: "200 ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://www.bbassets.com/media/uploads/p/xl/20005992_2-amul-kool-cafe-milk-coffee.jpg",
    },
    {
      id: 7,
      name: "Amul Kool Vanilla",
      qty: "200 ml",
      price: 25,
      oldPrice: 30,
      image:
        "https://content.jdmagicbox.com/quickquotes/images_main/amul-kool-koko-milkshake-can-200-ml-2003149946-q7s0fqsu.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
    },
    {
      id: 8,
      name: "Amul Kool Koko",
      qty: "200 ml",
      price: 25,
      oldPrice: 30,
      image:
        "https://5.imimg.com/data5/AY/CX/MY-28606098/amul-kool-koko-500x500.jpg",
    },
    {
      id: 9,
      name: "Amul Kool Strawberry",
      qty: "200 ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://www.bbassets.com/media/uploads/p/l/239656_4-amul-kool-milk-shake-strawberry.jpg",
    },
    {
      id: 10,
      name: "Amul Kool Mango",
      qty: "200 ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://www.bbassets.com/media/uploads/p/l/40012986_3-amul-kool-milk-shake-mango.jpg",
    },
    {
      id: 11,
      name: "Amul Kool Chocolate",
      qty: "200 ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeib-LFeheMGOh3zBK8eVGy-jqlunRjgG13o4RTbkXMKAfGSrQyMJEgek&s=10",
    },
    {
      id: 12,
      name: "Amul Kool Coffee",
      qty: "200 ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEqoLhWJnpqlvRm4eX339iiTBn6CLiCvyY7jKDl_e_NnrobUHwNVb2iJL&s=10",
    },
    {
      id: 13,
      name: "Amul Kool Milkshake Banana",
      qty: "200 ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://www.bbassets.com/media/uploads/p/xl/40181677_4-amul-banana-milk-shake.jpg",
    },
    {
      id: 14,
      name: "Amul Kool Milkshake Pineapple",
      qty: "200 ml",
      price: 30,
      oldPrice: 35,
      image:
        "https://m.media-amazon.com/images/I/71Zu7p+9pUL._UF894,1000_QL80_.jpg",
    },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className=" p-4 lg:w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Amul Kool Drinks
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

export default Amul;
