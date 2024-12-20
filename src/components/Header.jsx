import React, { useState } from 'react';
import { FaBars, FaTimes, FaLaptopCode, FaGithub, FaLinkedin, FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-gradient-to-r from-slate-950 via-cyan-900 to-slate-900 text-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 group">
            <FaLaptopCode className="text-3xl text-sky-500 group-hover:text-blue-600 transition-colors duration-300" />
            <span className="font-bold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text">
              HeiTic
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {['Inicio', 'Servicios', 'Proyectos', 'Sobre Nosotros'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-zinc-200 hover:text-sky-200 transition-colors duration-300 group text-lg"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-white/20 text-white pl-10 pr-4 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-white w-44 backdrop-blur-sm placeholder-white transition-all duration-300 focus:w-56"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white group-hover:text-white transition-colors duration-300" />
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-2xl text-zinc-200 hover:text-sky-300 transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="#" className="text-2xl text-zinc-200 hover:text-sky-300 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="bg-white text-cyan-950 px-4 py-1.5 rounded-full font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-indigo-300/50"
              >
                <FaUser />
                <span>Login</span>
              </a>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors duration-300"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-pink-200/80 to-indigo-200/80 backdrop-blur-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {['Inicio', 'Servicios', 'Proyectos', 'Sobre Nosotros'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-white/30 rounded-lg transition-all duration-300 text-lg"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="px-4 pb-6 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full bg-white/50 text-gray-800 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-xl text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="#" className="text-xl text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                <FaLinkedin />
              </a>
            </div>
            
            <a
              href="#"
              className="block text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-4 py-2 rounded-full font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-indigo-300/50"
            >
              <FaUser className="inline mr-2" />
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;