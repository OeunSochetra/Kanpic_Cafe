"use client";
import React, { useState } from "react";
import Container from "./Container";

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [{ image: "/cafe.png" }, { image: "/sheed.png" }];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Container>
      <div className="flex items-center justify-center lg:flex-col md:flex-col sm:flex pt-10 gap-20">
        <div className="text-[#f6d08f] pb-7">
          <h1 className="font-semibold lg:text-7xl md:text-5xl">KANPIC CAFE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] m-auto relative">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            className="w-full h-full bg-cover bg-center"
          ></div>
          <div>
            <button onClick={prevSlide}>Previous</button>
          </div>
          <div>
            <button onClick={nextSlide}>Next</button>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
