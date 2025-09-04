import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>
        <h1 className={styles.name}>Aditya Tripuraneni</h1>
        <h2 className={styles.title}>Software Engineer</h2>
        <div className={styles.cta}>
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('experience')}
          >
            View My Experience
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('projects')}
          >
            See My Projects
          </button>
        </div>
      </div>
      
      <div 
        className={styles.scrollIndicator}
        onClick={() => scrollToSection('experience')}
      >
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
