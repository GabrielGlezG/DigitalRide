// import React, { useEffect, useRef } from 'react';

// const ParticlesBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Set canvas size
//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     setCanvasSize();

//     // Particle array
//     const particles: Array<{
//       x: number;
//       y: number;
//       dx: number;
//       dy: number;
//       size: number;
//       color: string;
//       opacity: number;
//       pulse: number;
//     }> = [];

//     // Create particles with new color palette
//     const createParticles = () => {
//       const colors = [
//         '#10B981', // emerald-500
//         '#F59E0B', // amber-500
//         '#8B5CF6', // violet-500
//         '#06B6D4', // cyan-500
//         '#EF4444', // red-500
//         '#14B8A6'  // teal-500
//       ];
      
//       for (let i = 0; i < 80; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           dx: (Math.random() - 0.5) * 1.2,
//           dy: (Math.random() - 0.5) * 1.2,
//           size: Math.random() * 4 + 1,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           opacity: Math.random() * 0.6 + 0.2,
//           pulse: Math.random() * Math.PI * 2
//         });
//       }
//     };

//     // Animation function
//     const animate = () => {
//       // Clear canvas with dark trail effect
//       ctx.fillStyle = 'rgba(15, 23, 42, 0.08)'; // slate-900 with low opacity
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       // Draw and update particles
//       particles.forEach((particle, index) => {
//         // Update position
//         particle.x += particle.dx;
//         particle.y += particle.dy;
//         particle.pulse += 0.02;

//         // Bounce off walls
//         if (particle.x <= 0 || particle.x >= canvas.width) particle.dx *= -1;
//         if (particle.y <= 0 || particle.y >= canvas.height) particle.dy *= -1;

//         // Pulsing effect
//         const pulseFactor = Math.sin(particle.pulse) * 0.5 + 1;
//         const currentSize = particle.size * pulseFactor;

//         // Draw particle with enhanced glow effect
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        
//         // Create gradient for glow effect
//         const gradient = ctx.createRadialGradient(
//           particle.x, particle.y, 0,
//           particle.x, particle.y, currentSize * 4
//         );
//         gradient.addColorStop(0, particle.color);
//         gradient.addColorStop(0.5, particle.color + '40');
//         gradient.addColorStop(1, 'transparent');
        
//         ctx.fillStyle = gradient;
//         ctx.globalAlpha = particle.opacity * pulseFactor;
//         ctx.fill();

//         // Draw connections between nearby particles
//         particles.forEach((otherParticle, otherIndex) => {
//           if (index !== otherIndex) {
//             const distance = Math.sqrt(
//               Math.pow(particle.x - otherParticle.x, 2) + 
//               Math.pow(particle.y - otherParticle.y, 2)
//             );

//             if (distance < 120) {
//               ctx.beginPath();
//               ctx.moveTo(particle.x, particle.y);
//               ctx.lineTo(otherParticle.x, otherParticle.y);
              
//               // Create gradient for connection line
//               const lineGradient = ctx.createLinearGradient(
//                 particle.x, particle.y,
//                 otherParticle.x, otherParticle.y
//               );
//               lineGradient.addColorStop(0, particle.color + '60');
//               lineGradient.addColorStop(1, otherParticle.color + '60');
              
//               ctx.strokeStyle = lineGradient;
//               ctx.globalAlpha = (1 - distance / 120) * 0.3 * pulseFactor;
//               ctx.lineWidth = 1.5;
//               ctx.stroke();
//             }
//           }
//         });
//       });

//       requestAnimationFrame(animate);
//     };

//     // Handle resize
//     const handleResize = () => {
//       setCanvasSize();
//     };

//     // Initialize
//     createParticles();
//     animate();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full pointer-events-none"
//       style={{ 
//         zIndex: 1,
//         opacity: 0.6
//       }}
//     />
//   );
// };

// export default ParticlesBackground;