import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Eye, Share2, CheckCircle } from 'lucide-react';
import { getBlogPostById } from '../data/blogPosts';

interface BlogPostProps {
  postId: string;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onBack }) => {
  const post = getBlogPostById(postId);

  if (!post) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-black text-white mb-4">Artículo no encontrado</h1>
            <p className="text-gray-400 mb-8">El artículo que buscas no existe o ha sido movido.</p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al Blog
            </button>
          </div>
        </div>
      </section>
    );
  }

  const sharePost = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        // You could show a toast notification here
        console.log('URL copiada al portapapeles');
      }
    } catch (error) {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        console.log('URL copiada al portapapeles');
      } catch (clipboardError) {
        console.error('Error al compartir:', error);
      }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'desarrollo':
        return 'from-emerald-500 to-teal-600';
      case 'consultoria':
        return 'from-violet-500 to-purple-600';
      case 'legal':
        return 'from-amber-500 to-orange-600';
      case 'tendencias':
        return 'from-teal-500 to-emerald-600';
      default:
        return 'from-blue-500 to-indigo-600';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'desarrollo':
        return 'Desarrollo';
      case 'consultoria':
        return 'Consultoría';
      case 'legal':
        return 'Legal Tech';
      case 'tendencias':
        return 'Tendencias';
      default:
        return 'General';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver al Blog
        </button>

        {/* Article header */}
        <article className="bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
          {/* Hero image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            
            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-sm font-bold rounded-full shadow-lg`}>
                {getCategoryName(post.category)}
              </span>
            </div>

            {/* Featured badge */}
            {post.featured && (
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold rounded-full">
                  DESTACADO
                </span>
              </div>
            )}
          </div>

          {/* Article content */}
          <div className="p-8 md:p-12">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-400">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                {post.views} vistas
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-lg border border-gray-600/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share button */}
            <div className="flex justify-between items-center mb-12 pb-8 border-b border-gray-700/50">
              <div className="text-gray-400 text-sm">
                Comparte este artículo
              </div>
              <button
                onClick={sharePost}
                className="flex items-center px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </button>
            </div>

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/20 via-teal-600/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-white mb-4">
                  ¿Te gustó este artículo?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  En Digital Ride convertimos estos conocimientos en soluciones reales para tu empresa. 
                  Hablemos sobre cómo podemos impulsar tu aventura digital.
                </p>
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-emerald-500 via-teal-600 to-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Conversemos sobre tu proyecto
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;