import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SportsMusic = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activities = [
    {
      id: 1,
      title: 'Table Tennis',
      period: '6+ Years Experience',
      description: 'Competitive table tennis player with over six years of experience in local and state-level tournaments.',
      icon: '🏓',
      achievements: [
        'State-level competitor',
      ]
    },
    {
      id: 2,
      title: 'Swimming',
      period: 'Certified Trainer',
      description: 'Professional swimming trainer with certification in advanced techniques and water safety protocols.',
      icon: '🏊‍♀️',
      achievements: [
        'Certified swimming instructor',
        'Trained over 100 students',
        'Specializing in freestyle and backstroke'
      ]
    },
    {
      id: 3,
      title: 'Music Collaboration',
      period: 'Ghorchara Music',
      description: 'Active contributor to Ghorchara Music, collaborating on production, arrangement, and performance.',
      icon: '🎵',
      achievements: [
        'Collaborative artist',
        'Digital production',
      ]
    }
  ];

  return (
    <section id="beyond-code" className="beyond-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Beyond Code
          </motion.h2>
        </div>
        
        <div className="timeline">
          {activities.map((activity, index) => (
            <motion.div 
              key={activity.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              <div className="timeline-icon">{activity.icon}</div>
              <div className="timeline-content">
                <h3>{activity.title}</h3>
                <span className="timeline-period">{activity.period}</span>
                <p>{activity.description}</p>
                <ul className="achievement-list">
                  {activity.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsMusic;
