"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const MENU: { label: string }[] = [
  {
    label: "Inicio",
  },
  {
    label: "Servicios",
  },
  {
    label: "Proyectos",
  },
  {
    label: "Contacto",
  },
  {
    label: "Solicitar Cotización",
  },
];

const Navigation = () => {
  const containerRef = useRef();
  const tl = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useGSAP(
    () => {
      gsap.set(".menu-link-holder", { y: 100 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".overlay", {
          duration: 1,
          clipPath: "polygon(0%  0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-holder", {
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: containerRef }
  );

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`dark:bg-[#22333B] navigation flex justify-between mb-3 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      ref={containerRef}
    >
      <h1 className="dark:text-white">AURORA</h1>
      <div
        className="cursor-pointer transition-all hover:font-bold"
        onClick={toggleDarkMode}
      >
        <p className="dark:text-white">{ isDarkMode ? "light" : "dark"}</p>
      </div>

      <div className="menu" onClick={() => handleMenuOpen()}>
        <p className="cursor-pointer transition-all hover:font-bold dark:text-white">MENU</p>
      </div>

      <div className="overlay flex-col-reverse md:flex-row-reverse items-center justify-evenly">
        <div
          className="menu-close cursor-pointer"
          onClick={() => handleMenuOpen()}
        >
          <p className="transition-all hover:font-bold">CLOSE</p>
        </div>
        <div className="menu-links overflow-hidden flex flex-col gap-5">
          {MENU.map((item, index) => (
            <div className="overflow-hidden" key={index}>
              <div className="menu-link-holder">
                <Link
                  className="cursor-pointer relative overflow-hidden text-2xl transition-all hover:translate-x-2 hover:bg-teal-900"
                  href="#"
                >
                  {item.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
