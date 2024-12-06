const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 bg-white text-[#22333B] dark:bg-[#22333B] dark:text-white transition duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Contáctanos</h2>
        <p className="text-center text-lg mb-12">
          Estamos aquí para ayudarte a construir el hogar de tus sueños.<br/>
          ¡Contáctanos para más información o una cotización!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <form className="bg-[#F8FAFC] dark:bg-[#2A3B47] text-[#22333B] dark:text-white rounded-lg shadow-lg p-6 w-full md:w-1/2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-teal-700 dark:text-teal-400">
              Envíanos un mensaje
            </h3>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-[#3B4C59]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                placeholder="Tu correo"
                className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-[#3B4C59]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-sm">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-[#3B4C59]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 dark:bg-teal-500 dark:hover:bg-teal-600 text-white p-2 rounded-lg transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
