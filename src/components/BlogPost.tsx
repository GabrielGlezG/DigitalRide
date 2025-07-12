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
    },
    'proteccion-datos-era-digital': {
      id: 'proteccion-datos-era-digital',
      title: "Protección de Datos en la Era Digital: Guía Completa",
      excerpt: "Todo lo que necesitas saber sobre GDPR, LOPD y las nuevas regulaciones de protección de datos para empresas tecnológicas.",
      category: 'legal',
      author: "Damaris Urzúa",
      date: "2024-01-10",
      readTime: "12 min",
      views: "890",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["GDPR", "Compliance", "Seguridad"],
      content: `
        <h2>La Protección de Datos: Más que una Obligación Legal</h2>
        <p>En la era digital, la protección de datos personales no es solo un requisito legal, es un diferenciador competitivo y una responsabilidad ética fundamental para cualquier empresa que maneje información de usuarios.</p>
        
        <h3>Marco Regulatorio Actual</h3>
        
        <h4>GDPR (Reglamento General de Protección de Datos)</h4>
        <p>Desde su implementación en 2018, el GDPR ha establecido el estándar global para la protección de datos. Sus principios fundamentales incluyen:</p>
        
        <ul>
          <li><strong>Licitud, lealtad y transparencia:</strong> Los datos deben procesarse de manera legal y transparente</li>
          <li><strong>Limitación de la finalidad:</strong> Los datos solo pueden usarse para los fines declarados</li>
          <li><strong>Minimización de datos:</strong> Solo recopilar los datos estrictamente necesarios</li>
          <li><strong>Exactitud:</strong> Mantener los datos actualizados y precisos</li>
          <li><strong>Limitación del plazo de conservación:</strong> No conservar datos más tiempo del necesario</li>
          <li><strong>Integridad y confidencialidad:</strong> Proteger los datos contra accesos no autorizados</li>
        </ul>
        
        <h4>Ley de Protección de Datos en Chile</h4>
        <p>Chile ha modernizado su marco legal con la nueva Ley de Protección de Datos Personales, que incluye:</p>
        
        <ul>
          <li>Consentimiento explícito para el tratamiento de datos</li>
          <li>Derecho al olvido y portabilidad de datos</li>
          <li>Notificación obligatoria de brechas de seguridad</li>
          <li>Sanciones significativas por incumplimiento</li>
        </ul>
        
        <h3>Implementación Práctica en Empresas Tech</h3>
        
        <h4>1. Auditoría de Datos</h4>
        <p>Antes de implementar cualquier medida, es crucial realizar una auditoría completa:</p>
        
        <ol>
          <li><strong>Mapeo de datos:</strong> Identificar qué datos se recopilan, dónde se almacenan y cómo se procesan</li>
          <li><strong>Análisis de flujos:</strong> Documentar cómo se mueven los datos dentro y fuera de la organización</li>
          <li><strong>Evaluación de riesgos:</strong> Identificar vulnerabilidades y puntos de exposición</li>
          <li><strong>Revisión de terceros:</strong> Evaluar a proveedores y socios que acceden a datos</li>
        </ol>
        
        <h4>2. Políticas y Procedimientos</h4>
        
        <h5>Política de Privacidad</h5>
        <p>Debe ser clara, accesible y contener:</p>
        <ul>
          <li>Tipos de datos recopilados</li>
          <li>Finalidades del tratamiento</li>
          <li>Base legal para el procesamiento</li>
          <li>Derechos del titular de los datos</li>
          <li>Información de contacto del DPO</li>
        </ul>
        
        <h5>Procedimientos de Respuesta a Incidentes</h5>
        <p>Plan de acción para brechas de seguridad:</p>
        <ol>
          <li>Detección y contención (0-1 hora)</li>
          <li>Evaluación del impacto (1-24 horas)</li>
          <li>Notificación a autoridades (72 horas)</li>
          <li>Comunicación a afectados (sin demora indebida)</li>
          <li>Investigación y remediación</li>
        </ol>
        
        <h3>Tecnologías de Protección</h3>
        
        <h4>Cifrado de Datos</h4>
        <ul>
          <li><strong>En tránsito:</strong> TLS 1.3, HTTPS obligatorio</li>
          <li><strong>En reposo:</strong> AES-256, gestión segura de claves</li>
          <li><strong>En uso:</strong> Computación confidencial, enclaves seguros</li>
        </ul>
        
        <h4>Anonimización y Pseudonimización</h4>
        <p>Técnicas para reducir riesgos:</p>
        <ul>
          <li>Hashing irreversible</li>
          <li>Generalización de datos</li>
          <li>Supresión de identificadores directos</li>
          <li>Agregación estadística</li>
        </ul>
        
        <h3>Derechos de los Titulares</h3>
        
        <p>Los usuarios tienen derechos específicos que las empresas deben facilitar:</p>
        
        <table>
          <tr><th>Derecho</th><th>Descripción</th><th>Plazo de Respuesta</th></tr>
          <tr><td>Acceso</td><td>Conocer qué datos se procesan</td><td>30 días</td></tr>
          <tr><td>Rectificación</td><td>Corregir datos inexactos</td><td>30 días</td></tr>
          <tr><td>Supresión</td><td>Eliminar datos (derecho al olvido)</td><td>30 días</td></tr>
          <tr><td>Portabilidad</td><td>Recibir datos en formato estructurado</td><td>30 días</td></tr>
          <tr><td>Oposición</td><td>Oponerse al procesamiento</td><td>Inmediato</td></tr>
        </table>
        
        <h3>Costos del Incumplimiento</h3>
        
        <h4>Sanciones Económicas</h4>
        <ul>
          <li><strong>GDPR:</strong> Hasta €20M o 4% del volumen de negocio anual</li>
          <li><strong>Chile:</strong> Hasta 15,000 UTM (aproximadamente $900M CLP)</li>
          <li><strong>Otros costos:</strong> Demandas civiles, pérdida de reputación, costos de remediación</li>
        </ul>
        
        <h4>Impacto en el Negocio</h4>
        <ul>
          <li>Pérdida de confianza del cliente</li>
          <li>Restricciones operacionales</li>
          <li>Costos de auditoría y consultoría</li>
          <li>Tiempo de gestión dedicado a crisis</li>
        </ul>
        
        <h3>Mejores Prácticas para Startups y Empresas Tech</h3>
        
        <h4>Privacy by Design</h4>
        <p>Integrar la privacidad desde el diseño del producto:</p>
        <ol>
          <li>Minimización de datos desde el inicio</li>
          <li>Configuraciones de privacidad por defecto</li>
          <li>Transparencia en el procesamiento</li>
          <li>Seguridad integral del sistema</li>
        </ol>
        
        <h4>Gestión de Consentimiento</h4>
        <ul>
          <li>Consentimiento granular por finalidad</li>
          <li>Facilidad para retirar el consentimiento</li>
          <li>Registro auditable de consentimientos</li>
          <li>Renovación periódica cuando sea necesario</li>
        </ul>
        
        <h3>Conclusión</h3>
        <p>La protección de datos no es un obstáculo para la innovación, sino un catalizador para construir productos más seguros, confiables y centrados en el usuario. Las empresas que adopten un enfoque proactivo no solo cumplirán con las regulaciones, sino que construirán una ventaja competitiva basada en la confianza.</p>
        
        <p><strong>¿Necesitas ayuda para implementar un programa de protección de datos robusto?</strong> En Digital Ride combinamos expertise legal y técnico para crear soluciones de compliance que protegen tu negocio y a tus usuarios.</p>
      `
    },
    'transformacion-digital-estrategia': {
      id: 'transformacion-digital-estrategia',
      title: "Transformación Digital: De la Estrategia a la Ejecución",
      excerpt: "Metodologías probadas para liderar procesos de transformación digital exitosos en organizaciones de cualquier tamaño.",
      category: 'consultoria',
      author: "Gabriel González",
      date: "2024-01-05",
      readTime: "10 min",
      views: "1.5k",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Estrategia", "Digital", "Innovación"],
      content: `
        <h2>Transformación Digital: Más Allá de la Tecnología</h2>
        <p>La transformación digital no es solo implementar nuevas tecnologías; es reimaginar completamente cómo una organización crea valor, se relaciona con sus clientes y opera en el mercado digital.</p>
        
        <h3>¿Qué es Realmente la Transformación Digital?</h3>
        <p>La transformación digital es un proceso integral que involucra:</p>
        
        <ul>
          <li><strong>Cultura organizacional:</strong> Adopción de mentalidad digital en todos los niveles</li>
          <li><strong>Procesos de negocio:</strong> Rediseño de operaciones para la era digital</li>
          <li><strong>Experiencia del cliente:</strong> Creación de touchpoints digitales significativos</li>
          <li><strong>Modelos de negocio:</strong> Innovación en la forma de generar y capturar valor</li>
          <li><strong>Tecnología:</strong> Adopción de herramientas que habiliten los objetivos anteriores</li>
        </ul>
        
        <h3>El Marco de Transformación Digital de Digital Ride</h3>
        
        <h4>Fase 1: Diagnóstico y Visión (4-6 semanas)</h4>
        
        <h5>Evaluación del Estado Actual</h5>
        <ul>
          <li><strong>Madurez digital:</strong> Assessment de capacidades tecnológicas actuales</li>
          <li><strong>Análisis de procesos:</strong> Mapeo de flujos de trabajo y puntos de fricción</li>
          <li><strong>Cultura organizacional:</strong> Evaluación de la disposición al cambio</li>
          <li><strong>Competencia:</strong> Benchmarking contra líderes del sector</li>
        </ul>
        
        <h5>Definición de la Visión Digital</h5>
        <p>Trabajamos con el liderazgo para definir:</p>
        <ol>
          <li>Objetivos estratégicos específicos y medibles</li>
          <li>Propuesta de valor digital diferenciada</li>
          <li>Métricas de éxito claras (KPIs)</li>
          <li>Timeline realista de implementación</li>
        </ol>
        
        <h4>Fase 2: Estrategia y Roadmap (6-8 semanas)</h4>
        
        <h5>Arquitectura de la Transformación</h5>
        <p>Diseñamos una arquitectura integral que incluye:</p>
        
        <table>
          <tr><th>Dimensión</th><th>Componentes Clave</th><th>Entregables</th></tr>
          <tr><td>Tecnológica</td><td>Cloud, APIs, Data, Security</td><td>Arquitectura técnica, Stack tecnológico</td></tr>
          <tr><td>Datos</td><td>Governance, Analytics, AI/ML</td><td>Estrategia de datos, Roadmap de analytics</td></tr>
          <tr><td>Procesos</td><td>Automatización, Workflows</td><td>Procesos rediseñados, Automation roadmap</td></tr>
          <tr><td>Personas</td><td>Skills, Change management</td><td>Plan de capacitación, Estrategia de cambio</td></tr>
        </table>
        
        <h5>Priorización de Iniciativas</h5>
        <p>Utilizamos una matriz de impacto vs. esfuerzo para priorizar:</p>
        
        <ul>
          <li><strong>Quick Wins (Alto impacto, Bajo esfuerzo):</strong> Implementación inmediata</li>
          <li><strong>Proyectos Estratégicos (Alto impacto, Alto esfuerzo):</strong> Planificación detallada</li>
          <li><strong>Fill-ins (Bajo impacto, Bajo esfuerzo):</strong> Implementación cuando hay capacidad</li>
          <li><strong>Questionable (Bajo impacto, Alto esfuerzo):</strong> Reevaluación o descarte</li>
        </ul>
        
        <h4>Fase 3: Implementación Ágil (12-24 meses)</h4>
        
        <h5>Metodología de Implementación</h5>
        <p>Adoptamos un enfoque ágil con sprints de 2-4 semanas:</p>
        
        <ol>
          <li><strong>Sprint Planning:</strong> Definición de objetivos y entregables</li>
          <li><strong>Daily Standups:</strong> Seguimiento diario del progreso</li>
          <li><strong>Sprint Review:</strong> Demostración de resultados a stakeholders</li>
          <li><strong>Retrospectiva:</strong> Identificación de mejoras para el siguiente sprint</li>
        </ol>
        
        <h5>Gestión del Cambio</h5>
        <p>El factor humano es crítico. Implementamos:</p>
        
        <ul>
          <li><strong>Comunicación continua:</strong> Updates regulares sobre progreso y beneficios</li>
          <li><strong>Capacitación escalonada:</strong> Training just-in-time para nuevas herramientas</li>
          <li><strong>Champions de cambio:</strong> Identificación y empoderamiento de líderes naturales</li>
          <li><strong>Feedback loops:</strong> Canales para recoger y actuar sobre feedback del equipo</li>
        </ul>
        
        <h3>Tecnologías Habilitadoras Clave</h3>
        
        <h4>Cloud Computing</h4>
        <p>La nube es la base de la transformación digital moderna:</p>
        
        <ul>
          <li><strong>Escalabilidad:</strong> Capacidad de crecer sin inversiones masivas en infraestructura</li>
          <li><strong>Agilidad:</strong> Despliegue rápido de nuevos servicios y aplicaciones</li>
          <li><strong>Costos:</strong> Modelo de pago por uso que optimiza el CAPEX</li>
          <li><strong>Innovación:</strong> Acceso a servicios avanzados (AI, ML, IoT)</li>
        </ul>
        
        <h4>Inteligencia Artificial y Machine Learning</h4>
        <p>IA/ML para automatización y insights:</p>
        
        <ul>
          <li><strong>Automatización de procesos:</strong> RPA para tareas repetitivas</li>
          <li><strong>Análisis predictivo:</strong> Forecasting y optimización de operaciones</li>
          <li><strong>Personalización:</strong> Experiencias customizadas para cada cliente</li>
          <li><strong>Detección de anomalías:</strong> Identificación proactiva de problemas</li>
        </ul>
        
        <h4>APIs y Microservicios</h4>
        <p>Arquitectura flexible y escalable:</p>
        
        <ul>
          <li><strong>Integración:</strong> Conexión fluida entre sistemas legacy y nuevos</li>
          <li><strong>Agilidad:</strong> Desarrollo y despliegue independiente de componentes</li>
          <li><strong>Escalabilidad:</strong> Escalado granular según demanda</li>
          <li><strong>Innovación:</strong> Facilita la experimentación y el desarrollo de nuevos productos</li>
        </ul>
        
        <h3>Casos de Éxito: Lecciones Aprendidas</h3>
        
        <h4>Caso 1: Retail Tradicional → E-commerce Omnicanal</h4>
        <p><strong>Desafío:</strong> Cadena de retail con 50+ tiendas físicas necesitaba competir con gigantes del e-commerce.</p>
        
        <p><strong>Solución implementada:</strong></p>
        <ul>
          <li>Plataforma e-commerce con inventario unificado</li>
          <li>App móvil con funciones de click & collect</li>
          <li>Sistema de CRM integrado para personalización</li>
          <li>Analytics en tiempo real para optimización de inventario</li>
        </ul>
        
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>300% aumento en ventas online en 12 meses</li>
          <li>25% mejora en satisfacción del cliente</li>
          <li>40% reducción en costos operacionales</li>
          <li>ROI del 250% en 18 meses</li>
        </ul>
        
        <h4>Caso 2: Empresa de Servicios Financieros</h4>
        <p><strong>Desafío:</strong> Procesos manuales lentos, experiencia del cliente fragmentada, cumplimiento regulatorio complejo.</p>
        
        <p><strong>Solución implementada:</strong></p>
        <ul>
          <li>Automatización de procesos de onboarding (RPA + AI)</li>
          <li>Portal de cliente self-service</li>
          <li>Sistema de gestión documental digital</li>
          <li>Dashboard ejecutivo con KPIs en tiempo real</li>
        </ul>
        
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>80% reducción en tiempo de onboarding</li>
          <li>60% disminución en errores de procesamiento</li>
          <li>90% de transacciones realizadas via self-service</li>
          <li>Cumplimiento regulatorio 100% automatizado</li>
        </ul>
        
        <h3>Errores Comunes y Cómo Evitarlos</h3>
        
        <h4>1. Enfoque Technology-First</h4>
        <p><strong>Error:</strong> Comenzar con la tecnología en lugar del problema de negocio.</p>
        <p><strong>Solución:</strong> Siempre comenzar con la estrategia de negocio y los objetivos del cliente.</p>
        
        <h4>2. Subestimar la Gestión del Cambio</h4>
        <p><strong>Error:</strong> Asumir que la tecnología será adoptada automáticamente.</p>
        <p><strong>Solución:</strong> Invertir 30-40% del presupuesto en gestión del cambio y capacitación.</p>
        
        <h4>3. Falta de Métricas Claras</h4>
        <p><strong>Error:</strong> No definir KPIs específicos y medibles desde el inicio.</p>
        <p><strong>Solución:</strong> Establecer baseline y métricas de éxito antes de comenzar la implementación.</p>
        
        <h4>4. Proyectos Demasiado Ambiciosos</h4>
        <p><strong>Error:</strong> Intentar transformar todo al mismo tiempo.</p>
        <p><strong>Solución:</strong> Enfoque iterativo con quick wins que generen momentum.</p>
        
        <h3>El Futuro de la Transformación Digital</h3>
        
        <h4>Tendencias Emergentes</h4>
        <ul>
          <li><strong>Hyperautomation:</strong> Automatización end-to-end de procesos complejos</li>
          <li><strong>Composable Business:</strong> Arquitecturas modulares que permiten reconfiguración rápida</li>
          <li><strong>Distributed Cloud:</strong> Servicios cloud distribuidos geográficamente</li>
          <li><strong>AI-Driven Development:</strong> IA que asiste en el desarrollo de software</li>
        </ul>
        
        <h4>Preparándose para lo que Viene</h4>
        <p>Las organizaciones exitosas del futuro serán aquellas que:</p>
        <ol>
          <li>Mantengan una cultura de experimentación continua</li>
          <li>Inviertan en capacidades de datos y analytics</li>
          <li>Desarrollen ecosistemas de partners tecnológicos</li>
          <li>Prioricen la experiencia del empleado tanto como la del cliente</li>
        </ol>
        
        <h3>Conclusión: Tu Próximo Paso</h3>
        <p>La transformación digital no es un destino, es un viaje continuo de evolución y adaptación. Las organizaciones que abrazan este mindset y ejecutan con disciplina no solo sobreviven a la disrupción digital, sino que la lideran.</p>
        
        <p><strong>¿Estás listo para comenzar o acelerar tu transformación digital?</strong> En Digital Ride hemos guiado a decenas de organizaciones en este viaje. Nuestro enfoque combina estrategia de negocio, excelencia técnica y gestión del cambio para garantizar resultados tangibles y sostenibles.</p>
        
        <blockquote>
          "La transformación digital no se trata de tecnología, se trata de estrategia y nuevas formas de pensar." - Digital Ride
        </blockquote>
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

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
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