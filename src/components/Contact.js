import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (name) => {
    setFocused(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleBlur = (name) => {
    if (!formData[name]) {
      setFocused(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setFocused({ name: false, email: false, message: false });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
        </div>
        
        <motion.p 
          className="contact-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's build, collaborate or jam!
        </motion.p>
        
        <div className="contact-container">
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <div className={`form-field ${(focused.name || formData.name) ? 'active' : ''}`}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              
              <div className="form-group">
                <div className={`form-field ${(focused.email || formData.email) ? 'active' : ''}`}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              
              <div className="form-group">
                <div className={`form-field ${(focused.message || formData.message) ? 'active' : ''}`}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Connect With Me</h3>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">
                <FiMail className="contact-icon" />
                <span>chakrabortysreeja15@outlook.com</span>
              </a>
              <a href="https://github.com/sreeja-outlook" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FiGithub className="contact-icon" />
                <span>github.com/sreeja-outlook</span>
              </a>
              <a href="https://www.linkedin.com/in/sreeja-chakraborty-a19a33257/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FiLinkedin className="contact-icon" />
                <span>linkedin.com/in/sreeja-chakraborty</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Sreeja Chakraborty. All rights reserved.</p>
            <p>Website created and maintained by Sreeja Chakraborty</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
