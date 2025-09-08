import React from "react";

const coldDrinkBrands = [
  { name: "Coca-Cola", img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/shape/cover/sport/iStock-487787108-3f77e523663f73c106cbcb81834a4248.jpg" },
  { name: "Pepsi", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1IpgR7VRetcBsZXJ_BXRi0JMOXEinfTRWGRxxLrgukq56RIQXwhyp9rhfJWAP6iN07tPPviOWsFFQKkVgFUq0lNv4QPgWnM0TDUQ52A" },
  { name: "Sprite", img: "https://cdn.uengage.io/uploads/18085/image-843563-1685703917.jpeg" },
  { name: "Fanta", img: "https://creativereview-new.imgix.net/uploads/2023/04/fanta-branding-8.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1920&h=1080" },
  { name: "Thums Up", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpeyWb2J5y_3BuxugftdPkcOcMsEI1JMdycu0ul9rJx94bc6B1pAGSVwI&s=10" },
  { name: "7Up", img: "https://www.7up.com/images/simple-7up/storeLocator.jpg" },
  { name: "Mountain Dew", img: "https://www.bbassets.com/media/uploads/p/xl/292398_10-mountain-dew-soft-drink.jpg" },
  { name: "Mirinda", img: "https://www.bbassets.com/media/uploads/p/l/40327061_2-mirinda-soft-drink.jpg"},
  { name: "Limca", img: "https://img.cdnx.in/340140/SKU-7973_0-1711569413789.jpg?format=webp" },
  { name: "RC Cola", img: "https://rccolainternational.com/cdn/shop/files/RCColaClassic.webp?v=1712419504" },
  { name: "Shasta", img: "https://www.shastapop.com/wp-content/uploads/2024/07/IMG_Shasta-ZERO-Twist.png" },
  { name: "Canada Dry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe27VFx8pCoFTJWHtXVCwptNoI2BuVkyuq5BlKt-kC8A2X_kloUyyzB3Y&s=10" },
];

const BrandCategory = () => {
  return (
    <div className="lg:w-7xl mx-auto pt-6 md:pt-8">
      {/* Container centered & same size as Poster + BrandDeals */}
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
        
        {/* Horizontal scroll row with hidden scrollbar and smooth scroll */}
        <div 
          className="flex overflow-x-auto gap-x-3 sm:gap-x-4 pb-2 scroll-smooth"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
        >
          {coldDrinkBrands.map((brand) => (
            <div
              key={brand.name}
              className="
                flex-shrink-0 
                basis-1/5         /* small → 5 per row */
                sm:basis-[12.5%]  /* tablet → ~8 per row */
                lg:basis-1/10     /* large → 10 per row */
                flex flex-col items-center
              "
            >
              {/* Image Box */}
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-sm bg-gray-100">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Brand Name */}
              <span className="mt-2 text-xs md:text-sm font-medium text-gray-700 text-center truncate w-full">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for Webkit browsers */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BrandCategory;