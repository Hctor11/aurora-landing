"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const MENU = [
  { label: "Inicio", id: "landing" },
  { label: "Servicios", id: "services" },
  { label: "Proyectos", id: "projects" },
  { label: "Contacto", id: "contact" },
  { label: "Solicitar Cotización", id: "cotizacion" },
];

const Navigation = () => {
  const containerRef = useRef(null);
  const tl = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useGSAP(
    () => {
      gsap.set(".menu-link-holder", { y: 100 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".overlay", {
          duration: 0.6,
          clipPath: "polygon(0%  0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-holder", {
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: 0.2,
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

  const handleLinkClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

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
      <div className=" cursor-pointer transition-all " onClick={toggleDarkMode}>
        <p className="dark:text-white hover:font-bold">
          {isDarkMode ? "light" : "dark"}
        </p>
      </div>

      <div className="menu" onClick={() => handleMenuOpen()}>
        <p className="cursor-pointer transition-all hover:font-bold dark:text-white">
          MENU
        </p>
      </div>

      <div className="overlay transition-none dark:text-[#22333B] dark:bg-white flex-col-reverse md:flex-row-reverse items-center justify-evenly">
        <div
          className="menu-close cursor-pointer"
          onClick={() => handleMenuOpen()}
        >
          <p className="transition-all hover:font-bold">CLOSE</p>
        </div>
        <div className="menu-links overflow-hidden flex flex-col gap-5">
          {MENU.map((item) => (
            <div className="overflow-hidden" key={item.id}>
              <div className="menu-link-holder">
                <a
                  className="cursor-pointer relative overflow-hidden text-2xl hover:translate-x-2 hover:bg-teal-900"
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
