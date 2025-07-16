import React from 'react';
import { Code2, Brain, Shield, Zap, Bike, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

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
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      color: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-900/50 to-teal-900/50",
      borderColor: "border-emerald-500/20",
      price: "Desde $2,500",
      duration: "2-8 semanas"
    },
    {
      icon: Brain,
      title: "CONSULTORÍA TECH",
      subtitle: "Ruta Estratégica",
      description: "Diseñamos el futuro tecnológico de tu empresa. Analizamos, planificamos y ejecutamos estrategias que impulsan el crecimiento y la innovación.",
      features: ["Transformación Digital", "Arquitectura Tecnológica", "Optimización de Procesos", "Estrategia de Innovación"],
      technologies: ["Cloud", "DevOps", "AI/ML", "Analytics"],
      color: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-900/50 to-purple-900/50",
      borderColor: "border-violet-500/20",
      price: "Desde $1,800",
      duration: "1-4 semanas"
    },
    {
      icon: Shield,
      title: "PROTECCIÓN LEGAL",
      subtitle: "Ruta Segura",
      description: "Blindamos tu inversión tecnológica. Especialistas en derecho informático que protegen tus activos digitales y aseguran el cumplimiento normativo.",
      features: ["Contratos Tecnológicos", "Protección de Datos", "Propiedad Intelectual", "Compliance Digital"],
      technologies: ["GDPR", "LOPD", "ISO 27001", "Auditorías"],
      color: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-900/50 to-orange-900/50",
      borderColor: "border-amber-500/20",
      price: "Desde $1,200",
      duration: "1-3 semanas"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "ANÁLISIS",
      description: "Exploramos tu visión y objetivos",
      icon: "🔍",
      color: "from-emerald-500 to-teal-600"
    },
    {
      step: "02", 
      title: "DISEÑO",
      description: "Trazamos la ruta perfecta",
      icon: "🎨",
      color: "from-violet-500 to-purple-600"
    },
    {
      step: "03",
      title: "DESARROLLO",
      description: "Pedaleamos juntos hacia el éxito",
      icon: "⚡",
      color: "from-amber-500 to-orange-600"
    },
    {
      step: "04",
      title: "LANZAMIENTO",
      description: "Llegamos al destino con éxito",
      icon: "🚀",
      color: "from-teal-500 to-emerald-600"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-teal-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-violet-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-amber-500/30 to-orange-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-full text-emerald-300 text-sm font-bold mb-8 border border-emerald-500/30 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            NUESTRAS ESPECIALIDADES
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            RUTAS QUE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-violet-400 to-amber-400">
              TRANSFORMAN
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tres caminos únicos para llevar tu empresa hacia el éxito digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-3xl p-8 border ${service.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1`}>
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 font-bold">{service.duration}</div>
                    <div className={`text-lg font-black text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                      {service.price}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2">{service.title}</h3>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-bold mb-4`}>
                  {service.subtitle}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className={`w-4 h-4 mr-3 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`} />
                      <span className="font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-3 py-1 bg-gradient-to-r ${service.color} bg-opacity-20 text-xs font-bold rounded-full border border-opacity-30`}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group-hover:animate-pulse`}
                >
                  TOMAR ESTA RUTA
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              NUESTRA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> METODOLOGÍA</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cuatro etapas que transforman ideas en aventuras digitales exitosas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center group relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl`}>
                    <span className="text-2xl">{process.icon}</span>
                  </div>
                  <div className={`text-sm font-black text-transparent bg-clip-text bg-gradient-to-r ${process.color} mb-2`}>
                    PASO {process.step}
                  </div>
                  <h4 className="font-black text-white mb-2 text-lg group-hover:text-emerald-300 transition-colors">{process.title}</h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-slate-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-12 text-center border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-violet-600/10 to-amber-500/10 animate-pulse"></div>
          <div className="relative z-10">
            <Bike className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              ¿LISTO PARA EL
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> PASEO</span>?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Combinamos nuestras rutas para crear la aventura digital perfecta que tu empresa necesita
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-500 via-violet-600 to-amber-600 text-white px-12 py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group"
            >
              <Zap className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              INICIAR AVENTURA DIGITAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;