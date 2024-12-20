import React from 'react';
import { FaRocket, FaCode, FaServer } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Transformamos Ideas en{' '}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
                Soluciones Digitales
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Desarrollo web, aplicaciones móviles y soluciones de hosting personalizadas para impulsar tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#servicios"
                className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                Explorar Servicios
              </a>
              <a
                href="#contacto"
                className="px-8 py-3 bg-transparent border-2 border-sky-500 text-sky-400 font-semibold rounded-full hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                Contactar
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://6f6d99d2.rocketcdn.me/wp-content/uploads/2021/04/desarrollo-de-software-bogota-800x534-1.jpg"
                alt="HeiTic Soluciones Digitales"
                className="relative z-10 rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: FaRocket, title: "Desarrollo Ágil", description: "Entrega rápida y eficiente de proyectos" },
            { icon: FaCode, title: "Tecnologías Modernas", description: "Utilizamos las últimas herramientas y frameworks" },
            { icon: FaServer, title: "Hosting Confiable", description: "Soluciones de alojamiento seguras y escalables" }
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <feature.icon className="mx-auto h-12 w-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;