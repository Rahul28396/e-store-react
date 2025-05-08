import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

const Carousel = ({ images = [], autoSlide = true, slideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const slideRef = useRef(null);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);


  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      nextSlide();
    }, slideInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoSlide, slideInterval]);


  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Touch gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide(); // swipe left
    else if (distance < -50) prevSlide(); // swipe right
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        ref={slideRef}
      >
        {images.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      {/* Prev / Next buttons only for desktop */}
      {!isMobile && (
        <>
          <button className="nav-button prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="nav-button next" onClick={nextSlide}>
            ›
          </button>
        </>
      )}

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
