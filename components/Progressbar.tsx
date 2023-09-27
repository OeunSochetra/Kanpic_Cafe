"use client";
import React from "react";
import { useState, useEffect } from "react";

const Progressbar = () => {
  //this is how to setup Progressbar loading from scratch and call this to use in laoing.tsx

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev <= 100 ? 0 : prev + 10));
      }, 600);

      return clearInterval(interval);
    }, 4000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="loader">
      <span className="" style={{ width: `${progress}%` }}></span>
    </div>
  );
};

export default Progressbar;
