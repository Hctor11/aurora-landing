const servicesData = [
  {
    title: "Consultoría Estratégica",
    description:
      "Te ayudamos a desarrollar estrategias personalizadas para optimizar tus procesos y alcanzar tus objetivos empresariales.",
    bgColor: "bg-blue-500",
  },
  {
    title: "Diseño Web",
    description:
      "Creamos sitios web modernos y funcionales que se adaptan a las necesidades de tu negocio, optimizados para cualquier dispositivo.",
    bgColor: "bg-green-500",
  },
  {
    title: "Marketing Digital",
    description:
      "Potencia tu presencia en línea con campañas efectivas en redes sociales, SEO y publicidad programática.",
    bgColor: "bg-red-500",
  },
  {
    title: "Análisis de Datos",
    description:
      "Transformamos tus datos en decisiones estratégicas mediante reportes y visualizaciones detalladas.",
    bgColor: "bg-yellow-500",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="w-screen h-screen bg-fit bg-[url('/images/bg4.jpg')] flex "
    >
      <div className="md:max-w-7xl md:w-full md:m-auto flex flex-col md:flex-row  md:justify-between">
        <div className="ml-10 mb-10 max-w-48">
          <h1 className="text-7xl text-white font-bold mb-4 text-center">
            Servicios
          </h1>
          <span className="text-white text-left block">
            Ofrecemos soluciones integrales diseñadas para satisfacer las
            necesidades de tu negocio en un mundo digital competitivo.
          </span>
        </div>

        <div className="flex justify-center items-center m-auto flex-col gap-6 mr-24">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white max-w-60 rounded-lg shadow-lg p-6 justify-start flex flex-col text-left"
            >
              <h2 className="text-xl text-left font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <span className="text-gray-600">{service.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
