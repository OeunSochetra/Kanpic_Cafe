"use client";
import React, { useState } from "react";
import Container from "./Container";

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: "/cafe.png" },
    { image: "/sheed.png" },
    { image: "/cafe.png" },
    { image: "/cafe.png" },
  ];

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
      <div className="flex items-center justify-center pt-10 gap-20">
        <div className="text-[#f6d08f] pb-7">
          <h1 className="font-semibold lg:text-7xl md:text-5xl">KANPIC CAFE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            className="w-[300px] h-[230px] bg-cover bg-center"
          ></div>
          <div>
            <button onClick={prevSlide}>Previous</button>
          </div>
          <div>
            <button onClick={nextSlide}>Next</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
