const Projects = () => {
  return (
    <div id="projects" className="dark:text-white  p-2 w-full h-[70vh] overflow-hidden">
      <div className="md:max-w-7xl h-full m-auto md:w-full border items-center flex flex-col">
        <div className="block">
          <h2 className="text-3xl m-3">Proyectos</h2>
        </div>
        <div className="flex flex-col md:grid h-full w-full md:grid-cols-3">
          <div className="p-3 border-t-2 flex flex-col justify-between h-full">
            <h3 className="font-bold">Aurora SkyTech</h3>
            <p className="text-sm">
              Diseñado para hogares de lujo, este sistema combina materiales
              premium con tecnología inteligente.
            </p>
          </div>
          <div className="p-3 border-t-2  border-l-2 border-r-2 flex flex-col justify-between h-full">
            <h3 className="font-bold">Eclipse Roofline</h3>
            <p className="text-sm">
              Un proyecto enfocado en techos de diseño contemporáneo con
              acabados exclusivos, como tejas metálicas texturizadas o cerámicas
              de alta gama.
            </p>
          </div>
          <div className="p-3 border-t-2 flex flex-col justify-between h-full">
            <h3 className="font-bold">Celestia</h3>
            <p className="text-sm">
              Este proyecto utiliza materiales ecoamigables como madera y
              revestimientos reciclados de alta calidad, dando un equilibrio
              entre lujo y respeto al medio ambiente. Ideal para residencias
              exclusivas en áreas verdes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
