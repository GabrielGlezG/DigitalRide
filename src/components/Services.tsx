import React from 'react';
import { Code2, Brain, Shield, Zap, Bike, Sparkles } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      icon: Code2,
      title: "DESARROLLO DIGITAL",
      subtitle: "Ruta del Código",
      description: "Creamos experiencias digitales que conectan con tus usuarios. Desde aplicaciones web hasta plataformas móviles, desarrollamos soluciones que marcan la diferencia.",
      features: ["Aplicaciones Web Modernas", "Apps Móviles Intuitivas", "Plataformas Escalables", "Interfaces Innovadoras"],
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-900/50 to-indigo-900/50",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Brain,
      title: "CONSULTORÍA TECH",
      subtitle: "Ruta Estratégica",
      description: "Diseñamos el futuro tecnológico de tu empresa. Analizamos, planificamos y ejecutamos estrategias que impulsan el crecimiento y la innovación.",
      features: ["Transformación Digital", "Arquitectura Tecnológica", "Optimización de Procesos", "Estrategia de Innovación"],
      color: "from-slate-400 to-slate-600",
      bgGradient: "from-slate-800/50 to-slate-900/50",
      borderColor: "border-slate-500/20"
    },
    {
      icon: Shield,
      title: "PROTECCIÓN LEGAL",
      subtitle: "Ruta Segura",
      description: "Blindamos tu inversión tecnológica. Especialistas en derecho informático que protegen tus activos digitales y aseguran el cumplimiento normativo.",
      features: ["Contratos Tecnológicos", "Protección de Datos", "Propiedad Intelectual", "Compliance Digital"],
      color: "from-indigo-400 to-indigo-600",
      bgGradient: "from-indigo-900/50 to-slate-900/50",
      borderColor: "border-indigo-500/20"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-500 to-slate-600 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 rounded-full text-indigo-300 text-sm font-bold mb-8 border border-indigo-500/30 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-2 animate-spin" />
            NUESTRAS ESPECIALIDADES
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            RUTAS QUE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-400 to-indigo-400">
              TRANSFORMAN
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tres caminos únicos para llevar tu empresa hacia el éxito digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-3xl p-8 border ${service.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1`}>
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2">{service.title}</h3>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-bold mb-4`}>
                  {service.subtitle}
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-150 transition-transform`}></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group-hover:animate-pulse`}
                >
                  TOMAR ESTA RUTA
                  <Bike className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-12 text-center border border-gray-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-slate-600/10 to-blue-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                ¿LISTO PARA EL
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400"> PASEO</span>?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Combinamos nuestras rutas para crear la aventura digital perfecta que tu empresa necesita
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-indigo-500 via-blue-600 to-slate-600 text-white px-12 py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group"
              >
                <Zap className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                INICIAR AVENTURA DIGITAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
