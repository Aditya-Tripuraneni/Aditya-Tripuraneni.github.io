import React, { useState } from 'react';
import styles from './Hero.module.css';
import QuickReference from '../QuickReference/QuickReference';

const Hero: React.FC = () => {
  const [isQuickRefOpen, setIsQuickRefOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openQuickReference = () => {
    setIsQuickRefOpen(true);
  };

  const closeQuickReference = () => {
    setIsQuickRefOpen(false);
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>
        <h1 className={styles.name}>Aditya Tripuraneni</h1>
        <h2 className={styles.title}>Software Engineer</h2>
        <div className={styles.cta}>
          <a 
            href="https://drive.google.com/file/d/1D4l_k_QMAeCDcWgeCUrF8ElUAYsaOOBQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Resume
          </a>
          <button 
            className="btn-secondary"
            onClick={openQuickReference}
          >
            Cheat Sheet
          </button>
        </div>
      </div>
      
      <div 
        className={styles.scrollIndicator}
        onClick={() => scrollToSection('experience')}
      >
        Scroll to explore more 
      </div>

      <QuickReference 
        isOpen={isQuickRefOpen}
        onClose={closeQuickReference}
      />
    </section>
  );
};

export default Hero;
