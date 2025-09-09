
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banar1 from "../../assets/banar1.png";
import banar2 from "../../assets/banar2.png";
import banar3 from "../../assets/banar3.png";
import banar4 from "../../assets/banar4.png";
import banar5 from "../../assets/banar5.png";
import banar6 from "../../assets/banar6.png";

const sliderImages = [
  { id: 1, img: banar4, mobile: banar1 },
  { id: 2, img: banar5, mobile: banar2 },
  { id: 3, img: banar6, mobile: banar3 },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // start from 1 because of clones
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const SLIDE_DURATION = 3000; // 3 seconds
  const TRANSITION_DURATION = 500;

  const sliderRef = useRef(null);

  // Add clone: [last, ...slides, first]
  const infiniteSlides = [
    sliderImages[sliderImages.length - 1],
    ...sliderImages,
    sliderImages[0],
  ];

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = sliderImages.length * 2;

    sliderImages.forEach((slide) => {
      const img = new Image();
      const mobileImg = new Image();

      const checkComplete = () => {
        loadedCount++;
        if (loadedCount >= totalImages) {
          setAllImagesLoaded(true);
        }
      };

      img.onload = img.onerror = checkComplete;
      mobileImg.onload = mobileImg.onerror = checkComplete;

      img.src = slide.img;
      mobileImg.src = slide.mobile;
    });
  }, []);

  // Progress + Auto-slide
  useEffect(() => {
    if (!allImagesLoaded) return;

    let startTime = Date.now();
    let frame;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(percent);

      if (elapsed >= SLIDE_DURATION) {
        goToNext();
        startTime = Date.now();
        setProgress(0);
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [currentIndex, allImagesLoaded]);

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle infinite loop jump
  useEffect(() => {
    if (currentIndex === 0) {
      // jumped to clone of last
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(sliderImages.length);
      }, TRANSITION_DURATION);
    } else if (currentIndex === infiniteSlides.length - 1) {
      // jumped to clone of first
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, TRANSITION_DURATION);
    }
  }, [currentIndex, infiniteSlides.length]);

  // Touch swipe
  const touchStart = useRef(null);
  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      goToNext();
      setProgress(0);
    }
    if (diff < -50) {
      goToPrev();
      setProgress(0);
    }
    touchStart.current = null;
  };

  // Get actual index for dots
  const getActualIndex = () => {
    if (currentIndex === 0) return sliderImages.length - 1;
    if (currentIndex === infiniteSlides.length - 1) return 0;
    return currentIndex - 1;
  };

  if (!allImagesLoaded) {
    return (
      <div className="w-full my-4 px-3 lg:max-w-7xl lg:mx-auto">
        <div className="relative">
          <div className="w-full h-46 md:h-64 lg:h-80 flex items-center justify-center bg-gray-100 rounded-xl">
            <div className="animate-pulse text-gray-500">Loading images...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full my-4 px-3 lg:max-w-7xl lg:mx-auto">
      <div className="relative group">
        {/* Images */}
        <div
          className="relative w-full overflow-hidden rounded-xl shadow-lg h-46 md:h-40 lg:h-62"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={sliderRef}
            className="flex h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning
                ? `transform ${TRANSITION_DURATION}ms ease-in-out`
                : "none",
            }}
          >
            {infiniteSlides.map((slide, i) => (
              <div key={i} className="w-full h-full flex-shrink-0">
                <picture>
                  <source media="(min-width:768px)" srcSet={slide.img} />
                  <img
                    src={slide.mobile}
                    alt={`Slide ${i}`}
                    className="w-full h-full object-fit rounded-xl"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => {
            goToPrev();
            setProgress(0);
          }}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 items-center justify-center backdrop-blur-sm z-20"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => {
            goToNext();
            setProgress(0);
          }}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 items-center justify-center backdrop-blur-sm z-20"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center mt-4 gap-2">
        {sliderImages.map((_, i) => {
          const isActive = i === getActualIndex();
          return (
            <div
              key={i}
              onClick={() => {
                setCurrentIndex(i + 1); // offset by 1 due to clones
                setProgress(0);
              }}
              className={`relative cursor-pointer rounded-full transition-all duration-300 ${
                isActive ? "w-10 h-1 bg-gray-300" : "w-1.5 h-1.5 bg-gray-400"
              }`}
            >
              {isActive && (
                <div
                  className="absolute top-0 left-0 h-full bg-black rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
