"use client";

import { useState, useEffect } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    [
      "/images/aurora/a1.jpg",
      "/images/aurora/a2.jpg",
      "/images/aurora/a3.jpg",
    ],
    [
      "/images/eclipse/e1.jpg",
      "/images/eclipse/e2.jpg",
    ],
    [
      "/images/celestia/c1.jpg",
      "/images/celestia/c2.jpg",
    ],
  ];

  useEffect(() => {
    if (hoveredProject !== null) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % projectImages[hoveredProject].length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [hoveredProject, projectImages]);

  return (
    <div id="projects" className="dark:text-white p-2 w-full h-[70vh] overflow-hidden">
      <div className="md:max-w-7xl h-full m-auto md:w-full border items-center flex flex-col">
        <div className="block">
          <h2 className="text-3xl m-3">Proyectos</h2>
        </div>
        <div className="flex flex-col md:grid h-full w-full md:grid-cols-3">
          {[
            {
              title: "Aurora SkyTech",
              description:
                "Diseñado para hogares de lujo, este sistema combina materiales premium con tecnología inteligente.",
            },
            {
              title: "Eclipse Roofline",
              description:
                "Un proyecto enfocado en techos de diseño contemporáneo con acabados exclusivos, como tejas metálicas texturizadas o cerámicas de alta gama.",
            },
            {
              title: "Celestia",
              description:
                "Este proyecto utiliza materiales ecoamigables como madera y revestimientos reciclados de alta calidad, dando un equilibrio entre lujo y respeto al medio ambiente. Ideal para residencias exclusivas en áreas verdes.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`p-3 dark:bg-transparent border-t-2 flex flex-col justify-between h-full relative group ${
                hoveredProject === index ? "bg-transparent" : "bg-white"
              }`}
              style={{
                backgroundImage:
                  hoveredProject === index
                    ? `url(${projectImages[index][currentImageIndex]})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "background-image 0.5s ease, background-color 0.3s",
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => {
                setHoveredProject(null);
                setCurrentImageIndex(0);
              }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <h3
                className="font-bold text-4xl relative z-10 transition-colors group-hover:text-white"
              >
                {project.title}
              </h3>
              <p
                className="text-sm relative z-10 transition-colors group-hover:text-white"
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
