import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="hero-section">
      <div className="theme-toggle">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="theme-button"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <BsSun /> : <BsMoon />}
        </motion.button>
      </div>
      
      <div className="container hero-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <motion.span 
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I'm Sreeja
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-title"
          >
            <span className="text-accent">Full Stack Developer</span>
            <span className="hero-title-separator"></span>
            <span>Sports Aficionado</span>
            <span className="hero-title-separator"></span>
            <span>Music Explorer</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hero-cta"
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse-wheel">
          <div className="wheel-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
