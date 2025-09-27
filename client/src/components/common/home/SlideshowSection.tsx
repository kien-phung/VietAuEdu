"use client";

import React, { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: "1",
    title: "Chương Trình Du Học Nhật Bản 2025",
    description:
      "Cơ hội học tập và làm việc tại Nhật Bản với học bổng lên đến 50%",
    image: "/images/hero-image.jpg",
  },
  {
    id: "2",
    title: "Tuyển Sinh Khóa Học Ngoại Ngữ",
    description: "Khóa học tiếng Nhật cấp tốc chuẩn bị cho kỳ thi JLPT N5-N1",
    image: "/images/cta-background.jpg",
  },
  {
    id: "3",
    title: "Hội Thảo Hướng Nghiệp Miễn Phí",
    description:
      "Gặp gỡ chuyên gia tư vấn và cựu du học sinh thành công tại Nhật",
    image: "/images/placeholder-blog.jpg",
  },
];

interface ISlideshowProps {
  autoPlay?: boolean;
  interval?: number; // in milliseconds
  showIndicators?: boolean;
  showNavigation?: boolean;
}

export default function SlideshowSection({
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showNavigation = true,
}: ISlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Function to go to next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  // Function to go to previous slide
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || isPaused || slides.length <= 1) return;

    const slideInterval = setInterval(goToNext, interval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, isPaused, goToNext, interval]);

  // Handle mouse enter/leave for pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  if (slides.length === 0) {
    return null;
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides container */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            {(slide.title || slide.description) && (
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl mx-auto text-center">
                    {slide.title && (
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="text-base md:text-lg text-white/90">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {showNavigation && slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-20 hidden sm:block"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-20 hidden sm:block"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-play indicator */}
      {autoPlay && slides.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/30 text-white text-xs px-2 py-1 rounded-full z-20 hidden md:block">
          {isPaused ? "Paused" : "Playing"}
        </div>
      )}
    </section>
  );
}
