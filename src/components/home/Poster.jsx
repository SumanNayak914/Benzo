import React from "react";

const Poster = () => {
  return (
    <div className=" my-6 lg:w-7xl mx-auto">
      {/* ✅ Same container as BrandCategory */}
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
        
        {/* Large/Medium screen poster */}
        <div className="hidden md:block w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JH0-eCcA1y4jxcj12dtLk0Jmx_dZlKoRWyMgpFHHIIQRGZxLx0cOS7JQ&s=10"
            alt="Desktop Poster"
            className="w-full h-[30vh] object-cover rounded-lg shadow"
          />
        </div>

        {/* Small screen poster */}
        <div className="block md:hidden w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JH0-eCcA1y4jxcj12dtLk0Jmx_dZlKoRWyMgpFHHIIQRGZxLx0cOS7JQ&s=10"
            alt="Mobile Poster"
            className="w-full h-[20vh] object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Poster;
