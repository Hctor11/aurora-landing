const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">AURORA</h2>
            <p className="text-sm text-gray-400">Perfección en techado.</p>
          </div>
  
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
  
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
  
        <div className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  