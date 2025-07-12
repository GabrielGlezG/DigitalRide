import React, { useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection('contacto');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo size="sm" variant="dark" />

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-bold relative group"
            >
              RUTAS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-300 hover:text-slate-400 transition-colors font-bold relative group"
            >
              NOSOTROS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('equipo')}
              className="text-gray-300 hover:text-indigo-400 transition-colors font-bold relative group"
            >
              EQUIPO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-300 hover:text-emerald-400 transition-colors font-bold relative group"
            >
              BLOG
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-300 hover:text-indigo-300 transition-colors font-bold relative group"
            >
              CONTACTO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-300 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-bold flex items-center group"
            >
              <Bike className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              SUBIRSE
            </button>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-2xl">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors font-bold py-2"
            >
              RUTAS
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="block w-full text-left text-gray-300 hover:text-slate-400 transition-colors font-bold py-2"
            >
              NOSOTROS
            </button>
            <button
              onClick={() => scrollToSection('equipo')}
              className="block w-full text-left text-gray-300 hover:text-indigo-400 transition-colors font-bold py-2"
            >
              EQUIPO
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors font-bold py-2"
            >
              BLOG
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left text-gray-300 hover:text-indigo-300 transition-colors font-bold py-2"
            >
              CONTACTO
            </button>
            <button
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-bold mt-4 flex items-center justify-center group"
            >
              <Bike className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              SUBIRSE AL RIDE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
