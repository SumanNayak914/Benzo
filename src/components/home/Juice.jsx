import React from "react";

const products = [
  { name: "Fresh Juices", img: "https://www.healthxchange.sg/adobe/dynamicmedia/deliver/dm-aid--31a88e17-1a7e-4c6a-9360-d81bf6f55805/juicing-health-fresh-juice-good.jpg?preferwebp=true" },
  { name: "Flavoured Juices", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmEnVkrout_E_0Y-EttwV_qOBtRQyJ2VutIEjUHxmXS0YyGAIeojQRAI&s=10" },
  { name: "Juice Bottles", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeoWKvlNPp7t-TcF5OgF7glimNIBIRwewWgMYRotKgEW1OWG03EfSl0do&s=10" },
  { name: "Fruit Snacks", img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=300" },
  { name: "Mixed Fruit Juice", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXisjHOSvqy6epH3c7nxjlTj8B5SKufgkTwm229Mjke-ZrWt04Wu2QG68&s=10" },
  { name: "Orange Juice", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzIbtantKudDBuLYbI4FyUqfM_BIhXS8-8g-4xk8DGjSIYGMZsxINO4Q&s=10" },
  { name: "Mango Juice", img: "https://vaya.in/recipes/wp-content/uploads/2018/02/mango-frooti.jpg" },
  { name: "Pineapple Juice", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRT3e15SDY5oGRbWA87R5rIA-3cP4nFnAYD4CWLCqrEOnYn1nlx0aDrE&s=10" },
];

const Juice = () => {
  return (
    <div className="lg:w-7xl mx-auto ">
      {/* --- Poster Section (small + large both) --- */}
      <div className="relative w-full">
        <img
          src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=1200"
          alt="Juice Poster"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        {/* Overlay text (sm + md + lg sab pe image ke andar hi) */}
        <div className="absolute left-6 md:left-10 top-1/2 transform -translate-y-1/2 text-white drop-shadow-lg">
          <h2 className="text-sm md:text-lg uppercase tracking-wide">Premium</h2>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Juice <br /> Store
          </h1>
        </div>
      </div>

      {/* --- Products Section --- */}
      <div className="container mx-auto px-4 mt-6">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 h-36 bg-white rounded-xl shadow-md text-center p-2"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-24 object-cover rounded-md mb-2"
              />
              <h3 className="text-sm text-gray-700 font-medium">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* --- Powered By Custom Marquee --- */}
      <div className="relative overflow-hidden bg-gray-100 h-14 mt-6 flex items-center justify-center">
        <div className="marquee-container text-lg font-medium text-gray-700"></div>
      </div>

      {/* --- Marquee Custom CSS --- */}
      <style>{`
        .marquee-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        @keyframes marqueeWords {
          0% { opacity: 0; transform: translateX(100%); }
          10% { opacity: 1; transform: translateX(0); }
          30% { opacity: 1; transform: translateX(0); }
          40% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 0; transform: translateX(100%); }
          60% { opacity: 1; transform: translateX(0); }
          70% { opacity: 1; transform: translateX(0); }
          80% { opacity: 0; transform: translateX(-100%); }
          90% { opacity: 0; transform: translateX(100%); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .marquee-container::before {
          content: "Powered by FreshFruits";
          position: absolute;
          width: 100%;
          text-align: center;
          animation: marqueeWords 8s infinite;
        }
        .marquee-container::after {
          content: "";
        }
        /* Har cycle me content badalne ke liye multiple pseudo elements ka trick chahiye,
           ya JS se dynamic update karna better rahega */
      `}</style>
    </div>
  );
};

export default Juice;
