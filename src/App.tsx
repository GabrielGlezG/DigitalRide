import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="min-h-screen relative bg-slate-900">
      {/* <ParticlesBackground /> */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Header />
        <Hero />
        <Services />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;