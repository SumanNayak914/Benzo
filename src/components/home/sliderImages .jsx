// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const sliderImages = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80",
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80",
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&q=80",
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80",
//   },
// ];

// const ImageSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   // Auto change every 3s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % sliderImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//     center: { x: 0, opacity: 1 },
//     exit: (direction) => ({
//       x: direction > 0 ? "-100%" : "100%",
//       opacity: 0,
//     }),
//   };

//   return (
//     <div className="w-full my-4 px-3  ">
//       <div className="relative w-full h-[22vh] overflow-hidden rounded-lg shadow-md">
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={activeIndex}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.3 },
//             }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <img
//               src={sliderImages[activeIndex].img}
//               alt={`Slide ${activeIndex + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* ---------- Dots/Active Bar ---------- */}
//       <div className="flex justify-center mt-3 gap-2">
//         {sliderImages.map((_, i) =>
//           i === activeIndex ? (
//             <motion.div
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className="relative h-[6px] w-10 bg-gray-300 rounded-full overflow-hidden cursor-pointer"
//             >
//               <motion.div
//                 className="absolute top-0 left-0 h-full bg-black"
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 3, ease: "linear" }}
//               />
//             </motion.div>
//           ) : (
//             <div
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer"
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banar1 from "../../assets/banar1.png"; 
import banar2 from "../../assets/banar2.png";
import banar3 from "../../assets/banar3.png";
import banar4 from "../../assets/banar4.png";
import banar5 from "../../assets/banar5.png"; 
import banar6 from "../../assets/banar6.png"; 

const sliderImages = [
  {
    id: 1,
    img: banar4,
    mobile: banar1, 
  },
  {
    id: 2,
    img: banar5,
    mobile:banar2,
  },
  {
    id: 3,
    img:banar6,
    mobile: banar3,
  },
  
];;

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const imagePromises = sliderImages.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const mobileImg = new Image();
        let loadedCount = 0;

        const checkComplete = () => {
          loadedCount++;
          if (loadedCount === 2) resolve();
        };

        img.onload = checkComplete;
        img.onerror = reject;
        mobileImg.onload = checkComplete;
        mobileImg.onerror = reject;

        img.src = slide.img;
        mobileImg.src = slide.mobile;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Continue even if some images fail
  }, []);

  // Auto change every 4s - only start after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, imagesLoaded]);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="w-full my-4 px-3 lg:max-w-7xl lg:mx-auto">
      <div className="relative group">
        {/* Image Container */}
        <div
          className="relative w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {!imagesLoaded && (
            <div className="w-full h-48 md:h-64 lg:h-80 flex items-center justify-center">
              <div className="animate-pulse text-gray-500">Loading images...</div>
            </div>
          )}

          {imagesLoaded && (
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet={sliderImages[activeIndex].img}
                  />
                  <img
                    src={sliderImages[activeIndex].mobile}
                    alt={`Slide ${activeIndex + 1}`}
                    className="w-full h-46 md:h-40 lg:h-62  object-cover rounded-xl"
                  />
                  {/* ✅ Alternative option:
                      className="w-full aspect-[16/9] object-cover rounded-xl"
                      (yeh height ki jagah aspect ratio lock karega) */}
                </picture>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Navigation Arrows */}
        {imagesLoaded && (
          <>
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 items-center justify-center backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 items-center justify-center backdrop-blur-sm"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {imagesLoaded && (
        <div className="flex justify-center items-center mt-4 gap-2">
          {sliderImages.map((_, i) =>
            i === activeIndex ? (
              <motion.div
                key={i}
                onClick={() => goToSlide(i)}
                className="relative h-1 w-12 bg-gray-300 rounded-full overflow-hidden cursor-pointer flex items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-0 left-0 h-full bg-black rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </motion.div>
            ) : (
              <motion.div
                key={i}
                onClick={() => goToSlide(i)}
                className="w-1.5 h-1.5 bg-gray-400 hover:bg-black rounded-full cursor-pointer transition-colors duration-200"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
