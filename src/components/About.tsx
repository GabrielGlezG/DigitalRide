import React from 'react';
import { Target, Zap, Users, Lightbulb, Bike, Globe, Code, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "PRECISIÓN LÁSER",
      description: "Cada línea de código, cada estrategia, cada decisión apunta directamente al éxito de tu proyecto.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-900/30 to-indigo-900/30",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Zap,
      title: "VELOCIDAD EXTREMA",
      description: "Desarrollamos a la velocidad del pensamiento. Tu tiempo es oro, y nosotros lo respetamos.",
      color: "from-slate-400 to-slate-600",
      bgColor: "from-slate-800/30 to-slate-900/30",
      borderColor: "border-slate-500/20"
    },
    {
      icon: Users,
      title: "EQUIPO FUSIÓN",
      description: "No somos proveedores, somos tu equipo extendido. Trabajamos como una sola mente colectiva.",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "from-indigo-900/30 to-slate-900/30",
      borderColor: "border-indigo-500/20"
    },
    {
      icon: Lightbulb,
      title: "INNOVACIÓN PURA",
      description: "Cada proyecto es un laboratorio de ideas. Experimentamos, creamos, revolucionamos.",
      color: "from-zinc-400 to-gray-500",
      bgColor: "from-zinc-800/30 to-gray-800/30",
      borderColor: "border-zinc-500/20"
    }
  ];

  const stats = [
    { icon: Bike, label: "MODO", value: "24/7", color: "text-blue-400", bg: "from-blue-500/20 to-indigo-500/20" },
    { icon: Code, label: "CÓDIGO", value: "100%", color: "text-slate-400", bg: "from-slate-500/20 to-slate-600/20" },
    { icon: Globe, label: "ALCANCE", value: "∞", color: "text-indigo-400", bg: "from-indigo-500/20 to-indigo-600/20" },
    { icon: Clock, label: "RESPUESTA", value: "&lt;2h", color: "text-zinc-400", bg: "from-zinc-500/20 to-gray-500/20" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-slate-400/30 to-slate-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full text-blue-300 text-sm font-bold mb-8 border border-blue-500/30 backdrop-blur-sm">
              <Bike className="w-5 h-5 mr-2 animate-bounce" />
              QUIÉNES SOMOS
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              LOS ARQUITECTOS DE TU
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-400 to-indigo-400">
                FUTURO DIGITAL
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Somos <strong className="text-blue-400">Digital Ride</strong>, una empresa emergente que nació para 
              hacer que la tecnología sea un <strong className="text-slate-300">paseo emocionante</strong>. 
              No seguimos las reglas del juego, <strong className="text-indigo-300">las reescribimos</strong>.
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Como un <strong className="text-indigo-300">paseo en bicicleta</strong> que disfrutas, 
              convertimos cada proyecto en una <strong className="text-zinc-300">aventura digital</strong> donde cada kilómetro cuenta y cada destino es <strong className="text-blue-400">extraordinario</strong>.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className={`flex items-center space-x-3 p-4 bg-gradient-to-r ${stat.bg} backdrop-blur-sm rounded-xl border border-gray-700/50 hover:shadow-lg transition-all duration-300 group hover:scale-105`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className={`text-2xl font-black ${stat.color}`} dangerouslySetInnerHTML={{ __html: stat.value }}></div>
                    <div className="text-xs text-gray-400 font-bold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className={`bg-gradient-to-br ${value.bgColor} backdrop-blur-sm p-6 rounded-2xl border ${value.borderColor} hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:rotate-1`}>
                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-black text-white mb-3 text-lg group-hover:text-blue-300 transition-colors">{value.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              NUESTRA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"> METODOLOGÍA</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cuatro etapas que transforman ideas en aventuras digitales exitosas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "ANÁLISIS", desc: "Exploramos tu visión", color: "from-blue-500 to-indigo-600" },
              { step: "02", title: "DISEÑO", desc: "Trazamos la ruta", color: "from-slate-400 to-slate-600" },
              { step: "03", title: "DESARROLLO", desc: "Pedaleamos juntos", color: "from-indigo-400 to-indigo-600" },
              { step: "04", title: "LANZAMIENTO", desc: "Llegamos al destino", color: "from-zinc-400 to-gray-500" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl`}>
                  <span className="text-white font-black text-xl">{process.step}</span>
                </div>
                <h4 className="font-black text-white mb-2 text-lg group-hover:text-blue-300 transition-colors">{process.title}</h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
