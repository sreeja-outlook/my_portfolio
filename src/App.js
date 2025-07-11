import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AudioProvider } from './context/AudioContext';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SportsMusic from './components/SportsMusic';
import Contact from './components/Contact';
import './styles/global.css';

function ScrollIndicator() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollWidth(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator-container">
      <div className="scroll-indicator-bar" style={{ width: `${scrollWidth}%` }}></div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AudioProvider>
        <ScrollIndicator />
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              key="loader"
              className="preloader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="loader">
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
              </div>
              <p className="loader-text">Sreeja Chakraborty</p>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="app"
            >
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>
              <header>
                <Nav />
              </header>
              <main id="main-content">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <SportsMusic />
                <Contact />
              </main>
            </motion.div>
          )}
        </AnimatePresence>
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;
