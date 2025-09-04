import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a 
            href="https://linkedin.com/in/aditya-tripuraneni" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/aditya-tripuraneni" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
