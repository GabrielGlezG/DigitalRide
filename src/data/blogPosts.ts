// Archivo centralizado para gestionar todos los artículos del blog
// Para agregar un nuevo artículo, simplemente añádelo a este archivo

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'desarrollo' | 'legal' | 'consultoria' | 'tendencias';
  author: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  featured: boolean;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
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
  },
  // Aquí puedes agregar más artículos siguiendo la misma estructura
  // Ejemplo de cómo agregar un nuevo artículo:
  /*
  {
    id: 'nuevo-articulo-2024',
    title: "Título del Nuevo Artículo",
    excerpt: "Descripción breve del artículo...",
    category: 'desarrollo', // o 'legal', 'consultoria', 'tendencias'
    author: "Tu Nombre",
    date: "2024-01-20",
    readTime: "5 min",
    views: "0",
    image: "URL_DE_LA_IMAGEN",
    featured: false, // true si quieres que aparezca como destacado
    tags: ["Tag1", "Tag2", "Tag3"],
    content: `
      <h2>Título Principal</h2>
      <p>Contenido del artículo en HTML...</p>
      
      <h3>Subtítulo</h3>
      <p>Más contenido...</p>
      
      <ul>
        <li>Lista de elementos</li>
        <li>Otro elemento</li>
      </ul>
      
      <blockquote>
        "Cita importante" - Autor
      </blockquote>
      
      <h3>Conclusión</h3>
      <p>Conclusión del artículo...</p>
    `
  }
  */
];

// Función helper para obtener un artículo por ID
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// Función helper para obtener artículos por categoría
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

// Función helper para obtener artículos destacados
export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

// Función helper para buscar artículos
export const searchBlogPosts = (searchTerm: string): BlogPost[] => {
  const term = searchTerm.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(term) ||
    post.excerpt.toLowerCase().includes(term) ||
    post.tags.some(tag => tag.toLowerCase().includes(term))
  );
};