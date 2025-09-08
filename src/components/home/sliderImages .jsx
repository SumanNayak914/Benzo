import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sliderImages = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&q=80",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80",
  },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto change every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="w-full my-4 px-3  md:hidden">
      <div className="relative w-full h-[22vh] overflow-hidden rounded-lg shadow-md">
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
              opacity: { duration: 0.3 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={sliderImages[activeIndex].img}
              alt={`Slide ${activeIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------- Dots/Active Bar ---------- */}
      <div className="flex justify-center mt-3 gap-2">
        {sliderImages.map((_, i) =>
          i === activeIndex ? (
            <motion.div
              key={i}
              onClick={() => setActiveIndex(i)}
              className="relative h-[6px] w-10 bg-gray-300 rounded-full overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
              />
            </motion.div>
          ) : (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer"
            />
          )
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
