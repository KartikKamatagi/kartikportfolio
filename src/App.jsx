import React, { Suspense, lazy, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loading components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const dot = cursorRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) return;

    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.opacity = '1';

      const particle = document.createElement('span');
      particle.className = 'magic-cursor-particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      trail.appendChild(particle);

      window.setTimeout(() => {
        particle.remove();
      }, 700);
    };

    const handleMouseLeave = () => {
      dot.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      dot.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text font-sans selection:bg-primary selection:text-white magic-cursor-enabled">
      <Navbar />
      <main>
        <div ref={cursorRef} className="magic-cursor-dot" />
        <div ref={trailRef} className="magic-cursor-trail" />
        <Suspense fallback={<PageLoader />}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
