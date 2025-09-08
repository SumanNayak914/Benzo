import React, { useState, useEffect } from "react";

const coldDrinkBrands = [
  {
    name: "Coca-Cola",
    img: "https://www.shutterstock.com/image-photo/coca-cola-logo-on-vibrant-600nw-2524254995.jpg",
    bgColor: "bg-red-500", // Coca-Cola red theme
    subItems: [
      { name: "Coca-Cola Can", img: "https://static.thcdn.com/images/large/original//productimg/1600/1600/12657918-3185176575347709.jpg" },
      { name: "Coca-Cola Zero", img: "https://cdn.uengage.io/uploads/18085/image-594331-1689248264.jpeg" },
      { name: "Coca-Cola Diet", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJD2RnJ4-qVwdlN7sveeel9gvF6dwfqMfbjJn0D38c0nQcqlDanOq2IvOp&s=10" },
      { name: "Coca-Cola Classic", img: "https://images-cdn.ubuy.co.in/65aff2e9fbeeba556323d2c6-cola-coca-classic-20-oz-bottles-pack.jpg" },
    ],
  },
  {
    name: "Pepsi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FoSt67fOcD2Z3Q03ig9OpRUkQFp2zBywr5LbF1DAcfiuuaSce3uxEbm3&s=10",
    bgColor: "bg-[#061C4F]", // Pepsi blue theme
    subItems: [
      { name: "Pepsi Black", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6q1au6q15AClH30y2tyiXTgk_w2SwvY8W06z-bogTZkVSV0vOQKKtzHzk&s=10" },
      { name: "Diet Pepsi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DOBe27tu0k0vUqbhDWuKedtr_RDdvj_HuGMx9s4xo1x-ScAb8eBl0Wc&s=10" },
      { name: "Pepsi Twist", img: "https://cdn.grofers.com/da/cms-assets/cms/product/f1f81106-7dc8-4da9-96ec-d9e9552e68af.jpg" },
      { name: "Pepsi Blue", img: "https://www.bbassets.com/media/uploads/p/l/40334293_2-pepsi-blue-soft-drink.jpg" },
    ],
  },
  {
    name: "Sprite",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34wrQ3V06hwBZdmCnQB-PPWC1ctg2nzB8bXCZtjmwZx5RM28I3l5vYJw5&s=10",
    bgColor: "bg-green-500", // Sprite green theme
    subItems: [
      { name: "Sprite Can", img: "https://assets.hyperpure.com/data/images/products/4875369379be09449c12d23bee06a759.jpg" },
      { name: "Sprite Zero", img: "https://www.bbassets.com/media/uploads/p/xxl/40052141_2-sprite-soft-drink-zero-sugar-with-natural-lemon-flavour.jpg" },
      { name: "Sprite Lemon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtXMPDq69W-vdqs3e22Pwv6tx80rRCLNJzNqpI74OBQGtHupSj1g_EWLK&s=10" },
      { name: "Sprite 1.25L", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgR2tTUUl68_1swPrqbeGAIAi2t-jN6XeeAcnUntTp-od-oATzmopOnzz-&s=10" },
    ],
  },
];

const BrandDeals = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Auto change every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coldDrinkBrands.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full my-6 lg:w-7xl mx-auto hidden md:flex">
      {/* ✅ Same container size as BrandCategory & Poster */}
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
        
        {/* ---------- LARGE + MEDIUM SCREEN ---------- */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {coldDrinkBrands.map((brand) => (
            <div
              key={brand.name}
              className={`${brand.bgColor} rounded-lg shadow-md overflow-hidden `}
            >
              {/* Poster Image */}
              <div className="w-full h-44 bg-gray-200">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Sub Items with smooth scroll */}
              <div 
                className="flex overflow-x-auto gap-3 p-3 scroll-smooth 
                [&::-webkit-scrollbar]:h-2 
                [&::-webkit-scrollbar-track]:bg-white/20 
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-white/40 
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb:hover]:bg-white/60
                scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-white/40"
                style={{ 
                  scrollbarWidth: 'thin', 
                  scrollbarColor: 'rgba(255,255,255,0.4) rgba(255,255,255,0.2)',
                  paddingLeft: '1rem',
                  paddingRight: '1rem'
                }}
              >
                {[...Array(5)].map((_, index) => {
                  const item = brand.subItems[index % brand.subItems.length];
                  return (
                    <div
                      key={`${item.name}-${index}`}
                      className="flex-shrink-0 w-20 flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-md bg-white/90 overflow-hidden shadow-sm hover:bg-white transition-all duration-200 hover:scale-105">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="mt-1 text-[10px] text-center font-medium text-white truncate w-full">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ---------- SMALL SCREEN (AUTO SLIDER Posters) ---------- */}
        <div className="block md:hidden w-full">
          <div className="relative w-full h-[28vh] overflow-hidden rounded-lg shadow">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {coldDrinkBrands.map((brand, i) => (
                <div key={i} className="w-full flex-shrink-0 h-full">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Dots indicator for mobile */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {coldDrinkBrands.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BrandDeals;