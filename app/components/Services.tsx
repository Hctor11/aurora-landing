const servicesData = [
    {
      icon: "/icons/icon1.svg",
      title: "Servicio 1",
      description: "Descripción breve del servicio 1 para dar más detalles al cliente.",
      bgColor: "bg-blue-500",
    },
    {
      icon: "/icons/icon2.svg",
      title: "Servicio 2",
      description: "Descripción breve del servicio 2 para explicar sus beneficios.",
      bgColor: "bg-green-500",
    },
    {
      icon: "/icons/icon3.svg",
      title: "Servicio 3",
      description: "Descripción breve del servicio 3 con detalles útiles.",
      bgColor: "bg-red-500",
    },
    {
      icon: "/icons/icon4.svg",
      title: "Servicio 4",
      description: "Descripción adicional de un servicio extra para los clientes.",
      bgColor: "bg-yellow-500",
    },
  ];
  
  const Services = () => {
    return (
      <div className="w-screen h-screen bg-fit bg-[url('/images/bg4.jpg')] flex ">
        <div className="md:max-w-7xl md:w-full md:m-auto flex flex-col md:flex-row md:justify-between">
          <div className="mb-10 max-w-48">
            <h1 className="text-7xl text-white font-bold mb-4 text-center">Servicios</h1>
            <span className="text-white text-left block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae in voluptas quae fugit facilis saepe aspernatur eum, ea ipsum.
            </span>
          </div>
  
          <div className="flex flex-col gap-6 mr-24">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white max-w-60 rounded-lg shadow-lg p-6 justify-start flex flex-col text-left"
              >
                {/* Ícono */}
                <div className={`${service.bgColor} p-4 rounded-full mb-4`}>
                  {/* <img src={service.icon} alt={`Icono de ${service.title}`} className="w-8 h-8" /> */}
                </div>
                {/* Título */}
                <h2 className="text-xl text-left font-semibold text-gray-800 mb-2">{service.title}</h2>
                {/* Descripción */}
                <span className="text-gray-600">{service.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  