import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Bike } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-slate-500"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-slate-700/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo size="md" variant="dark" />
            <p className="text-gray-400 mb-6 leading-relaxed mt-4">
              La nueva generación de desarrolladores y consultores tecnológicos. 
              Convertimos cada proyecto en una aventura digital emocionante que revoluciona el mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 group border border-gray-700">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              {/* Agrega aquí los iconos de Linkedin y Github si quieres */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              RUTAS
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-300 block font-medium">
                  Ruta del Código
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-slate-400 transition-colors hover:translate-x-1 transform duration-300 block font-medium">
                  Ruta Estratégica
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-300 block font-medium">
                  Ruta Segura
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-300 transition-colors hover:translate-x-1 transform duration-300 block font-medium">
                  Aventura Completa
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
              CONTACTO
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 group">
                <Mail className="w-4 h-4 mr-2 text-blue-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:gabrielgonzalez@nextai.cl" className="text-sm hover:text-blue-400 transition-colors font-medium">
                  gabrielgonzalez@nextai.cl
                </a>
              </div>
              <div className="flex items-center text-gray-400 group">
                <Phone className="w-4 h-4 mr-2 text-slate-400 group-hover:scale-110 transition-transform" />
                <a href="tel:+56936629914" className="text-sm hover:text-slate-300 transition-colors font-medium">
                  +56 9 3662 9914
                </a>
              </div>
              <div className="flex items-center text-gray-400 group">
                <MapPin className="w-4 h-4 mr-2 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-medium">
              © 2024 Digital Ride. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-medium">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-slate-400 text-sm transition-colors font-medium">
                Términos de Servicio
              </a>
              <div className="flex items-center text-gray-500 text-xs">
                <Bike className="w-3 h-3 mr-1 text-indigo-400" />
                <span>Powered by Adventure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
