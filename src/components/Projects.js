import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample project data - replace with real projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with payment integration, admin dashboard, and responsive design.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'placeholder',
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Productivity application with drag-and-drop task management, user authentication, and real-time updates.',
      tech: ['React', 'Firebase', 'Material UI'],
      image: 'placeholder',
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Music Streaming Dashboard',
      description: 'Interactive dashboard for music artists to track their streaming statistics and audience demographics.',
      tech: ['React', 'D3.js', 'Node.js', 'Express'],
      image: 'placeholder',
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
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
              className="project-card"
              variants={itemVariants}
            >
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
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub /> GitHub
                  </a>
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
