"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { heroCards } from "@/helpers/mock";
import Image from "next/image";

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Handle responsive slides count
  useEffect(() => {
    const updateSlidesCount = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(1.5); 
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(1.2); 
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(1); 
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesCount();
    window.addEventListener("resize", updateSlidesCount);
    return () => window.removeEventListener("resize", updateSlidesCount);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroCards.length) % heroCards.length);
  };

  const slideWidth = 100 / slidesToShow;

  return (
   <div className="relative w-full max-w-7xl mx-auto p-4 sm:p-6">
  <div className="relative overflow-hidden">
    {/* Slides */}
    <div
      className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
    >
      {heroCards.map((card) => (
        <div
          key={card.id}
          className="flex-shrink-0 relative rounded-xl sm:rounded-2xl overflow-hidden"
          style={{ width: `calc(${slideWidth}% - 1rem)` }}
        >
          {/* Responsive Image Container */}
          <div className="relative w-full h-[320px] md:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              quality={100}
              className="object-cover rounded-xl sm:rounded-2xl"
            />
          </div>

          {/* Responsive Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 text-white bg-gradient-to-t from-black/60 via-transparent to-transparent">
            {/* Top Badge */}
            <span className="text-xs font-poppins sm:text-sm uppercase tracking-wider self-start bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
              NEW IMAGE MODEL
            </span>

            {/* Main Title */}
            <div className="text-center flex-1 flex items-center justify-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                {card.title}
              </h1>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="lg:text-3xl sm:text-xl font-bold mb-1 sm:mb-2">
                  {card.subtitle}
                </h2>
                <p className="text-sm sm:text-base text-white/90 max-w-none sm:max-w-[20rem] lg:max-w-[25rem]">
                  {card.description}
                </p>
              </div>

              {/* Button */}
              <div className="flex-shrink-0">
                <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-2xl sm:rounded-3xl bg-white text-black font-medium hover:bg-black cursor-pointer hover:text-white transition-colors text-sm sm:text-base">
                  {card.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Controls */}
    <div className="flex items-center justify-between pt-4 sm:pt-6">
      {/* Mobile Prev */}
      <div className="flex sm:hidden">
        <button
          onClick={prevSlide}
          className="bg-[#F3F4F6FF] hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg"
        >
          <ChevronLeftIcon className="h-4 w-4 text-black" />
        </button>
      </div>

      <div className="hidden sm:block w-16" />

      {/* Indicators */}
      <div className="flex gap-2 sm:gap-3">
        {heroCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 cursor-pointer h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-black dark:bg-[#F3F4F6FF]"
                : "bg-[#F3F4F6FF] dark:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Desktop Controls */}
      <div className="flex gap-2">
        <div className="hidden sm:flex gap-2">
          <button
            onClick={prevSlide}
            className="bg-[#F3F4F6FF] cursor-pointer dark:bg-[#F3F4F6FF] hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeftIcon className="h-4 w-4 text-black dark:text-black" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#F3F4F6FF] cursor-pointer dark:bg-[#F3F4F6FF] hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRightIcon className="h-4 w-4 text-gray-800 dark:text-black" />
          </button>
        </div>

        {/* Mobile Next */}
        <button
          onClick={nextSlide}
          className="sm:hidden bg-white/80 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg"
        >
          <ChevronRightIcon className="h-4 w-4 text-gray-800" />
        </button>
      </div>
    </div>
  </div>
</div>

  );
}