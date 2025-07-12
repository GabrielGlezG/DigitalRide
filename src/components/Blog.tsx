import React, { useState } from 'react';
import { BookOpen, Calendar, User, ArrowRight, Search, Filter, Zap, Code, Shield, Brain, Bike, Clock, Eye } from 'lucide-react';
import BlogPost from './BlogPost';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  // Si hay un post seleccionado, mostrar el componente BlogPost
  if (selectedPost) {
    return <BlogPost postId={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  const categories = [
    { id: 'all', name: 'Todos', icon: BookOpen, color: 'from-emerald-500 to-teal-600' },
    { id: 'desarrollo', name: 'Desarrollo', icon: Code, color: 'from-blue-500 to-indigo-600' },
    { id: 'consultoria', name: 'Consultoría', icon: Brain, color: 'from-violet-500 to-purple-600' },
    { id: 'legal', name: 'Legal Tech', icon: Shield, color: 'from-amber-500 to-orange-600' },
    { id: 'tendencias', name: 'Tendencias', icon: Zap, color: 'from-teal-500 to-emerald-600' }
  ];

  const blogPosts = [
    {
      id: 'futuro-desarrollo-web-2024',
      title: "El Futuro del Desarrollo Web: Tendencias 2024",
      excerpt: "Exploramos las tecnologías emergentes que están revolucionando el desarrollo web y cómo pueden impulsar tu negocio hacia el futuro digital.",
      category: 'desarrollo',
      author: "Gabriel González",
      date: "2024-01-15",
      readTime: "8 min",
      views: "1.2k",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      tags: ["React", "Next.js", "AI", "Web3"]
    },
    {
      id: 'proteccion-datos-era-digital',
      title: "Protección de Datos en la Era Digital: Guía Completa",
      excerpt: "Todo lo que necesitas saber sobre GDPR, LOPD y las nuevas regulaciones de protección de datos para empresas tecnológicas.",
      category: 'legal',
      author: "Damaris Urzúa",
      date: "2024-01-10",
      readTime: "12 min",
      views: "890",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      tags: ["GDPR", "Compliance", "Seguridad"]
    },
    {
      id: 'transformacion-digital-estrategia',
      title: "Transformación Digital: De la Estrategia a la Ejecución",
      excerpt: "Metodologías probadas para liderar procesos de transformación digital exitosos en organizaciones de cualquier tamaño.",
      category: 'consultoria',
      author: "Gabriel González",
      date: "2024-01-05",
      readTime: "10 min",
      views: "1.5k",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      tags: ["Estrategia", "Digital", "Innovación"]
    },
    {
      id: 4,
      title: "Inteligencia Artificial en el Desarrollo: Herramientas Esenciales",
      excerpt: "Descubre cómo la IA está transformando el desarrollo de software y qué herramientas debes conocer para mantenerte competitivo.",
      category: 'tendencias',
      author: "Gabriel González",
      date: "2024-01-01",
      readTime: "6 min",
      views: "2.1k",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      tags: ["AI", "Machine Learning", "Automatización"]
    },
    {
      id: 5,
      title: "Contratos Tecnológicos: Errores Comunes y Cómo Evitarlos",
      excerpt: "Análisis de los errores más frecuentes en contratos de desarrollo de software y servicios tecnológicos, con soluciones prácticas.",
      category: 'legal',
      author: "Damaris Urzúa",
      date: "2023-12-28",
      readTime: "9 min",
      views: "756",
      image: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      tags: ["Contratos", "Legal", "Software"]
    },
    {
      id: 6,
      title: "Arquitectura de Microservicios: Cuándo y Cómo Implementarla",
      excerpt: "Guía práctica para decidir si tu proyecto necesita microservicios y cómo implementarlos de manera efectiva.",
      category: 'desarrollo',
      author: "Gabriel González",
      date: "2023-12-20",
      readTime: "15 min",
      views: "1.8k",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      tags: ["Arquitectura", "Microservicios", "Escalabilidad"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-teal-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-violet-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-amber-500/30 to-orange-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-full text-emerald-300 text-sm font-bold mb-8 border border-emerald-500/30 backdrop-blur-sm">
            <BookOpen className="w-5 h-5 mr-2 animate-bounce" />
            CENTRO DE CONOCIMIENTO
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            EXPLORANDO EL
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">
              FUTURO DIGITAL
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tendencias y conocimiento especializado para impulsar tu aventura tecnológica
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/90 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-xl font-bold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-gray-600'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'all' && featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-black text-white mb-8 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-amber-400" />
              ARTÍCULOS DESTACADOS
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold rounded-full">
                        DESTACADO
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-2 text-white text-xs">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('es-ES')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => setSelectedPost(post.id)}
                      className="flex items-center text-emerald-400 hover:text-emerald-300 font-bold transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="group bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex items-center space-x-1 text-white text-xs bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm">
                  <Eye className="w-3 h-3" />
                  <span>{post.views}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-black text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedPost(post.id)}
                  className="flex items-center text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors"
                >
                  Leer más
                  <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 mb-2">No se encontraron artículos</h3>
            <p className="text-gray-500">Intenta con otros términos de búsqueda o categorías</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-emerald-500/20 via-teal-600/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-600/10 to-blue-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <Bike className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-bounce" />
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                ¿QUIERES MÁS
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> INSIGHTS</span>?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete a nuestra aventura de conocimiento y recibe los mejores insights tecnológicos directamente en tu inbox
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-emerald-500 via-teal-600 to-blue-500 text-white px-12 py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group"
              >
                <Zap className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                SUSCRIBIRSE AL RIDE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;