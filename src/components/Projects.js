import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id, value) => {
    setFlipped(prev => ({ ...prev, [id]: value }));
  };

  // Sample project data - replace with real projects
  const projects = [
    {
      id: 1,
      title: 'My Portfolio',
      description: 'A modern, responsive personal portfolio website built with React.js. Showcases my skills, projects, and contact information with smooth animations and a clean UI. Integrated with email and social links for easy networking. Deployed on Netlify for fast and reliable access.',
      tech: ['React.js', 'Framer Motion', 'CSS', 'Netlify'],
      image: 'placeholder',
      demoLink: 'https://sreejachakraborty.netlify.app/',
      githubLink: 'https://github.com/sreeja-outlook/my_portfolio',
    },
    {
      id: 2,
      title: 'Website of Ghorchara Music',
      description: 'Developed a dynamic website for Ghorchara Music, featuring artist profiles, music samples, and event updates. Focused on user experience and mobile responsiveness. Utilized modern web technologies to ensure fast load times and accessibility. Deployed on Render for robust performance.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Render'],
      image: 'placeholder',
      demoLink: 'https://ghorchara-music.onrender.com/',
      githubLink: 'https://github.com/sreeja-outlook/ghorchara-music',
    },
    //{
    //  id: 3,
    //  title: 'Music Streaming Dashboard',
    //  description: 'Interactive dashboard for music artists to track their streaming statistics and audience demographics.',
    //  tech: ['React', 'D3.js', 'Node.js', 'Express'],
    //  image: 'placeholder',
    //  demoLink: 'https://example.com',
    //  githubLink: 'https://github.com',
    //},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map(project => (
            <motion.div 
              key={project.id} 
              className={`project-card flip-card${flipped[project.id] ? ' flipped' : ''}`}
              variants={itemVariants}
              onMouseEnter={() => handleFlip(project.id, true)}
              onMouseLeave={() => handleFlip(project.id, false)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="project-image">
                    {project.image === 'placeholder' ? (
                      <div className="placeholder-project-image">
                        <span>{project.title.charAt(0)}</span>
                      </div>
                    ) : (
                      <img src={project.image} alt={project.title} />
                    )}
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links" style={{ marginTop: '2em' }}>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{ fontSize: '1.1em', padding: '0.5em 1.2em', background: 'var(--color-accent)', color: '#fff', borderRadius: '6px', marginRight: '1em' }}
                      >
                        <FiExternalLink style={{ marginRight: '0.4em' }} /> Live Demo
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{ fontSize: '1.1em', padding: '0.5em 1.2em', background: 'var(--color-bg-secondary)', color: 'var(--color-accent)', borderRadius: '6px' }}
                      >
                        <FiGithub style={{ marginRight: '0.4em' }} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
