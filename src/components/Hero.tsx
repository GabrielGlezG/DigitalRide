import React from 'react';
import { ArrowRight, Zap, Bike } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="pt-20 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden min-h-screen flex items-center">
  {/* Animated grid background */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      animation: 'grid-move 20s linear infinite'
    }}></div>
  </div>

  {/* Floating elements actualizados a tonos sobrios */}
  <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
  <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-zinc-400/20 to-slate-400/20 rounded-full blur-xl animate-bounce"></div>
  <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl animate-pulse"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 rounded-full text-indigo-300 text-sm font-medium mb-6 border border-indigo-500/30 backdrop-blur-sm">
          <Zap className="w-4 h-4 mr-2 animate-pulse" />
          Innovación • Tecnología • Confianza
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          DIGITAL
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-blue-600 animate-pulse">
            RIDE
          </span>
        </h1>

        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Tu aventura digital comienza aquí. Somos la nueva generación de
          <span className="text-blue-400 font-semibold"> desarrolladores</span> y
          <span className="text-indigo-400 font-semibold"> consultores tecnológicos</span> que convierten cada proyecto en un viaje hacia la excelencia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
          >
            <Bike className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            INICIAR AVENTURA
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToServices}
            className="border-2 border-zinc-300 text-zinc-300 px-8 py-4 rounded-xl font-bold hover:bg-zinc-300 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
          >
            EXPLORAR RUTAS
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl border border-blue-500/30">
              <div className="text-4xl font-black text-blue-400 mb-2">∞</div>
              <div className="text-blue-300 font-medium text-sm">RUTAS</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-zinc-400/20 to-slate-400/20 rounded-2xl border border-zinc-300/30">
              <div className="text-4xl font-black text-zinc-200 mb-2">24/7</div>
              <div className="text-zinc-300 font-medium text-sm">SERVICIO</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-2xl border border-indigo-500/30">
              <div className="text-4xl font-black text-indigo-400 mb-2">100%</div>
              <div className="text-indigo-300 font-medium text-sm">CALIDAD</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl border border-blue-500/30">
              <div className="text-4xl font-black text-blue-300 mb-2">&lt;2h</div>
              <div className="text-blue-200 font-medium text-sm">RESPUESTA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    {`
      @keyframes grid-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }
    `}
  </style>
</section>
  );
};

export default Hero;