import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Eye, Share2, BookOpen, Code, Shield, Brain, Zap } from 'lucide-react';

interface BlogPostProps {
  postId: string;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onBack }) => {
  const blogPosts = {
    'futuro-desarrollo-web-2024': {
      id: 'futuro-desarrollo-web-2024',
      title: "El Futuro del Desarrollo Web: Tendencias 2024",
      excerpt: "Exploramos las tecnologías emergentes que están revolucionando el desarrollo web y cómo pueden impulsar tu negocio hacia el futuro digital.",
      category: 'desarrollo',
      author: "Gabriel González",
      date: "2024-01-15",
      readTime: "8 min",
      views: "1.2k",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["React", "Next.js", "AI", "Web3"],
      content: `
        <h2>La Revolución Silenciosa del Desarrollo Web</h2>
        <p>El desarrollo web está experimentando una transformación sin precedentes. En 2024, no solo estamos construyendo sitios web, estamos creando experiencias digitales inteligentes que aprenden, se adaptan y evolucionan con sus usuarios.</p>
        
        <h3>1. Inteligencia Artificial Integrada</h3>
        <p>La IA ya no es una característica opcional, es una necesidad. Desde chatbots inteligentes hasta personalización de contenido en tiempo real, la IA está redefiniendo cómo los usuarios interactúan con las aplicaciones web.</p>
        
        <h4>Implementaciones Prácticas:</h4>
        <ul>
          <li><strong>Personalización de UX:</strong> Algoritmos que adaptan la interfaz según el comportamiento del usuario</li>
          <li><strong>Generación de contenido:</strong> IA que crea contenido dinámico basado en preferencias</li>
          <li><strong>Optimización automática:</strong> Sistemas que mejoran el rendimiento sin intervención manual</li>
        </ul>
        
        <h3>2. Web3 y Descentralización</h3>
        <p>La web descentralizada no es solo una tendencia, es el futuro. Las aplicaciones web están integrando blockchain, NFTs y criptomonedas de manera nativa.</p>
        
        <blockquote>
          "La descentralización no es solo tecnología, es una filosofía que devuelve el control a los usuarios" - Vitalik Buterin
        </blockquote>
        
        <h3>3. Frameworks de Nueva Generación</h3>
        <p>React, Vue y Angular siguen evolucionando, pero nuevos frameworks como Svelte, Solid.js y Qwik están cambiando las reglas del juego con enfoques innovadores para el rendimiento y la experiencia del desarrollador.</p>
        
        <h4>Comparativa de Rendimiento:</h4>
        <table>
          <tr><th>Framework</th><th>Bundle Size</th><th>Tiempo de Carga</th><th>Curva de Aprendizaje</th></tr>
          <tr><td>React</td><td>42KB</td><td>1.2s</td><td>Media</td></tr>
          <tr><td>Svelte</td><td>10KB</td><td>0.8s</td><td>Baja</td></tr>
          <tr><td>Solid.js</td><td>7KB</td><td>0.6s</td><td>Media</td></tr>
        </table>
        
        <h3>4. Edge Computing y CDNs Inteligentes</h3>
        <p>El edge computing está llevando la computación más cerca del usuario final, reduciendo latencia y mejorando la experiencia. Plataformas como Vercel Edge Functions y Cloudflare Workers están democratizando esta tecnología.</p>
        
        <h3>5. Desarrollo Low-Code/No-Code</h3>
        <p>Aunque pueda parecer contradictorio, las plataformas low-code están complementando, no reemplazando, el desarrollo tradicional. Permiten prototipado rápido y desarrollo de MVPs, liberando tiempo para los desarrolladores para enfocarse en lógica compleja.</p>
        
        <h3>Conclusión: Preparándose para el Futuro</h3>
        <p>El futuro del desarrollo web es emocionante y desafiante. Las empresas que adopten estas tecnologías temprano tendrán una ventaja competitiva significativa. En Digital Ride, no solo seguimos estas tendencias, las implementamos para crear soluciones que están años adelante de la competencia.</p>
        
        <p><strong>¿Listo para llevar tu proyecto al siguiente nivel?</strong> Contacta con nuestro equipo y descubre cómo estas tecnologías pueden transformar tu negocio.</p>
      `
    }
  };

  const post = blogPosts[postId as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Artículo no encontrado</h2>
          <button
            onClick={onBack}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
          >
            Volver al Blog
          </button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'desarrollo': return Code;
      case 'legal': return Shield;
      case 'consultoria': return Brain;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'desarrollo': return 'from-emerald-500 to-teal-600';
      case 'legal': return 'from-amber-500 to-orange-600';
      case 'consultoria': return 'from-violet-500 to-purple-600';
      default: return 'from-blue-500 to-indigo-600';
    }
  };

  const CategoryIcon = getCategoryIcon(post.category);
  const categoryColor = getCategoryColor(post.category);

  const sharePost = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        navigator.clipboard.writeText(window.location.href);
        alert('Enlace copiado al portapapeles');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <button
            onClick={onBack}
            className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al Blog
          </button>

          <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${categoryColor} bg-opacity-20 rounded-full text-white text-sm font-bold mb-6 border border-white/20`}>
            <CategoryIcon className="w-4 h-4 mr-2" />
            {post.category.toUpperCase()}
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{post.readTime} de lectura</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              <span>{post.views} vistas</span>
            </div>
            <button
              onClick={sharePost}
              className="flex items-center hover:text-white transition-colors"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartir
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-800/50 text-gray-300 text-sm rounded-lg border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50">
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              '--tw-prose-body': '#e2e8f0',
              '--tw-prose-headings': '#ffffff',
              '--tw-prose-lead': '#cbd5e1',
              '--tw-prose-links': '#60a5fa',
              '--tw-prose-bold': '#ffffff',
              '--tw-prose-counters': '#94a3b8',
              '--tw-prose-bullets': '#94a3b8',
              '--tw-prose-hr': '#374151',
              '--tw-prose-quotes': '#e2e8f0',
              '--tw-prose-quote-borders': '#374151',
              '--tw-prose-captions': '#94a3b8',
              '--tw-prose-code': '#fbbf24',
              '--tw-prose-pre-code': '#e2e8f0',
              '--tw-prose-pre-bg': '#1e293b',
              '--tw-prose-th-borders': '#374151',
              '--tw-prose-td-borders': '#374151',
            } as React.CSSProperties}
          />
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className={`bg-gradient-to-r ${categoryColor} bg-opacity-20 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10`}>
            <Zap className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-black text-white mb-4">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-gray-300 mb-6">
              Descubre cómo podemos ayudarte a implementar estas ideas en tu proyecto
            </p>
            <button
              onClick={() => {
                onBack();
                setTimeout(() => {
                  const element = document.getElementById('contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className={`bg-gradient-to-r ${categoryColor} text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              Conversemos sobre tu proyecto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;