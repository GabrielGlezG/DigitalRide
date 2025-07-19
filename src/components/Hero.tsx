import React from 'react';
import { ArrowRight, Zap, Bike, Star, Users, Clock, Shield } from 'lucide-react';

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

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-full text-emerald-300 text-sm font-bold mb-8 border border-emerald-500/30 backdrop-blur-sm">
              <Zap className="w-5 h-5 mr-2 animate-pulse" />
              INNOVACIÓN • TECNOLOGÍA • CONFIANZA
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              DIGITAL
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 animate-pulse">
                RIDE
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Tu aventura digital comienza aquí. Somos la nueva generación de
              <span className="text-emerald-400 font-semibold"> desarrolladores</span> y
              <span className="text-violet-400 font-semibold"> consultores tecnológicos</span> que convierten cada proyecto en un viaje hacia la excelencia.
            </p>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-xl border border-emerald-500/20">
                <Star className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white">Código que Escala</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-violet-500/10 to-purple-600/10 rounded-xl border border-violet-500/20">
                <Clock className="w-5 h-5 text-violet-400" />
                <span className="text-sm font-bold text-white">Metodología Ágil</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-xl border border-amber-500/20">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold text-white">Protección Legal</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <Bike className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                INICIAR AVENTURA
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="border-2 border-slate-300 text-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                EXPLORAR RUTAS
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-emerald-400" />
                <span className="font-bold">Equipo Multidisciplinario</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-amber-400" />
                <span className="font-bold">Stack Tecnológico Actual</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Dashboard */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-black text-white">DIGITAL RIDE DASHBOARD</h3>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl border border-emerald-500/30">
                  <div className="text-3xl font-black text-emerald-400 mb-2">DEV</div>
                  <div className="text-emerald-300 font-bold text-sm">DESARROLLO</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl border border-violet-500/30">
                  <div className="text-3xl font-black text-violet-400 mb-2">TECH</div>
                  <div className="text-violet-300 font-bold text-sm">CONSULTORÍA</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl border border-amber-500/30">
                  <div className="text-3xl font-black text-amber-400 mb-2">LEG</div>
                  <div className="text-amber-300 font-bold text-sm">PROTECCIÓN</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-teal-500/20 to-emerald-600/20 rounded-2xl border border-teal-500/30">
                  <div className="text-3xl font-black text-teal-400 mb-2">360°</div>
                  <div className="text-teal-300 font-bold text-sm">COBERTURA</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full animate-pulse"></div>
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