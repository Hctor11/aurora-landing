"use client"

import { useState, useEffect } from "react";

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/bg1.jpg",
    "/images/bg2.jpg",
    "/images/bg3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="flex flex-col items-center pt-28 rounded-md w-full h-[70vh] bg-cover transition-all duration-500"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <h1 className="text-4xl mb-12 text-center font-semibold">
        Perfección en techado, <br />
        diseño de lujo para tu hogar.
      </h1>
      <button className="p-2 border-[#22333B] border-2 bg-white w-44 rounded-md transition-all duration-300 ease-in-out hover:bg-[#22333B] hover:text-white hover:shadow-lg hover:scale-105">
        Agendar cita
      </button>
    </div>
  );
};

export default Main;
