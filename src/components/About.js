import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px',
  });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
        </div>
        
        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-wrapper">
              {/* Replace with actual image */}
              <div className="placeholder-image">
                <span>SK</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="about-bio">
              As a Full Stack Developer Intern at Naiyo24 Pvt. Ltd. and BCA student at Techno Main Salt Lake, 
              I bring together technical expertise with a diverse background in sports and music. This unique combination 
              allows me to approach problem-solving with both analytical precision and creative thinking.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-text">
                  <h4>BCA Student</h4>
                  <p>Techno Main Salt Lake</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">💻</div>
                <div className="highlight-text">
                  <h4>Full Stack Intern</h4>
                  <p>Naiyo24 Pvt. Ltd.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">📊</div>
                <div className="highlight-text">
                  <h4>Marketing</h4>
                  <p>Learning through real-world projects</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🏊‍♀️</div>
                <div className="highlight-text">
                  <h4>Swimming</h4>
                  <p>Certified trainer</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🏓</div>
                <div className="highlight-text">
                  <h4>Table Tennis</h4>
                  <p>6+ years experience</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🎵</div>
                <div className="highlight-text">
                  <h4>Music</h4>
                  <p>Contributor to Ghorchara Music</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
