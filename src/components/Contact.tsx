import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Zap, Bike } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const subject = encodeURIComponent(`🚴‍♂️ NUEVA AVENTURA DIGITAL - ${formData.service || 'Consulta'} - ${formData.company || formData.name}`);
      const body = encodeURIComponent(`
🎯 NUEVA AVENTURA DIGITAL

👤 CONTACTO:
Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company || 'No especificada'}

🚴‍♂️ RUTA DE INTERÉS:
${formData.service || 'No especificada'}

💭 MENSAJE:
${formData.message}

---
Enviado desde digitalride.com
      `);

      const mailtoLink = `mailto:gabrielgonzalez@nextai.cl?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      setSubmitStatus('success');

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-slate-400/30 to-slate-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full text-blue-300 text-sm font-bold mb-8 border border-blue-500/30 backdrop-blur-sm">
            <Bike className="w-5 h-5 mr-2 animate-bounce" />
            PUNTO DE ENCUENTRO
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            ¿LISTO PARA EL
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-400 to-indigo-400">
              PASEO?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conversemos sobre tu aventura digital. Ofrecemos <strong className="text-blue-400">consulta gratuita</strong> para explorar tu visión y diseñar la ruta perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-black text-white mb-8">CANALES DE COMUNICACIÓN</h3>

              <div className="space-y-6">
                {/* EMAIL */}
                <div className="flex items-center group p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <div className="w-14 h-14 min-w-[3.5rem] min-h-[3.5rem] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg flex-shrink-0">
                    <Mail className="w-7 h-7 text-white flex-shrink-0" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-white text-lg">EMAIL</div>
                    <a href="mailto:gabrielgonzalez@nextai.cl" className="text-blue-400 hover:text-blue-300 font-bold transition-colors break-words">
                      gabrielgonzalez@nextai.cl
                    </a>
                  </div>
                </div>

                {/* TELÉFONO */}
                <div className="flex items-center group p-4 bg-gradient-to-r from-slate-500/10 to-slate-700/10 rounded-xl border border-slate-500/30 hover:border-slate-400/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-slate-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-black text-white text-lg">TELÉFONO</div>
                    <a href="tel:+56936629914" className="text-slate-300 hover:text-slate-200 font-bold transition-colors">
                      +56 9 3662 9914
                    </a>
                  </div>
                </div>

                {/* UBICACIÓN */}
                <div className="flex items-center group p-4 bg-gradient-to-r from-indigo-500/10 to-slate-700/10 rounded-xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-slate-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-black text-white text-lg">UBICACIÓN</div>
                    <div className="text-indigo-300 font-bold">Santiago, Chile</div>
                  </div>
                </div>
              </div>

              {/* Free Consultation Box */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-blue-300 mr-3 animate-pulse" />
                  <span className="font-black text-white text-lg">CONSULTA GRATUITA</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Sesión de 30 minutos sin costo para explorar tu proyecto y diseñar 
                  una ruta personalizada que impulse tu aventura digital.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2 text-blue-300" />
                    <span className="font-bold">Respuesta &lt;2h</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Bike className="w-4 h-4 mr-2 text-slate-300" />
                    <span className="font-bold">Equipo dedicado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-gray-300 mb-2">
                    NOMBRE COMPLETO *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/90 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-black text-gray-300 mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/90 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-black text-gray-300 mb-2">
                  EMPRESA
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/90 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-black text-gray-300 mb-2">
                  RUTA DE INTERÉS
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/90 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white backdrop-blur-sm"
                >
                  <option value="">Selecciona una ruta</option>
                  <option value="desarrollo">Ruta del Código</option>
                  <option value="consultoria">Ruta Estratégica</option>
                  <option value="legal">Ruta Segura</option>
                  <option value="integral">Aventura Completa</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-black text-gray-300 mb-2">
                  MENSAJE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/90 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Cuéntanos tu visión, objetivos y cómo podemos acompañarte en esta aventura digital..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-xl backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-blue-300 font-bold">¡Mensaje enviado! Te contactaremos pronto.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl backdrop-blur-sm">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-red-300 font-bold">Error al enviar. Intenta nuevamente.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-slate-500 text-white py-4 px-6 rounded-xl font-black text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    ENVIANDO...
                  </>
                ) : (
                  <>
                    <Bike className="w-6 h-6 mr-3 animate-pulse" />
                    SUBIRSE AL RIDE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
