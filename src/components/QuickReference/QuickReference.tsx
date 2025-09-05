import React, { useState } from 'react';
import styles from './QuickReference.module.css';

interface QuickReferenceProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickReference: React.FC<QuickReferenceProps> = ({ isOpen, onClose }) => {
  const [showCopied, setShowCopied] = useState(false);

  const aboutText = `Aditya Tripuraneni is a software engineering student with experience across healthcare, finance, and aerospace technology. He is currently a software engineering intern at PointClickCare, focusing on performance and data engineering. Previously, he was selected for the competitive RBC Amplify program, where he built AI-driven solutions for Capital Markets, contributing to a patent-pending AI agent architecture designed to generate insights from hedge fund data. His hands-on skills span Python, LangChain, SQL, Snowflake, and AWS Bedrock, complemented by broader experience from RBC's Data Science & Analytics team, McMaster Rocketry, and McMaster Faculty of Engineering Venture Academy. Aditya is known as a fast learner who thrives in collaborative environments, bringing strong backend development skills, a passion for problem-solving, and an energetic presence. He is driven by building scalable, intelligent systems and consistently seeks to grow by tackling challenging, high-impact engineering problems.`;

  const workExperiences = [
    'Software Engineer Intern – PointClickCare (Sept 2025 – Present)',
    'Software Developer Intern – RBC Amplify (May 2025 – Aug 2025)',
    'Software Engineer Intern – RBC, Data Science & Analytics (May 2024 – Aug 2024)',
    'Software Engineer Co-Lead – McMaster Rocketry (Jul 2024 – May 2025)',
    'Software Developer Intern – McMaster Faculty of Engineering Venture Academy (May 2023 – Aug 2023)'
  ];

  const copyText = `${aboutText}

Work Experience:
${workExperiences.map(exp => `• ${exp}`).join('\n')}

Links:
LinkedIn: https://www.linkedin.com/in/aditya-tripuraneni/
GitHub: https://github.com/Aditya-Tripuraneni`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Cheat Sheet</h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {/* About Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>About</h3>
            <p className={styles.aboutText}>{aboutText}</p>
          </div>

          {/* Work Experience Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Work Experience</h3>
            <ul className={styles.experienceList}>
              {workExperiences.map((exp, index) => (
                <li key={index} className={styles.experienceItem}>{exp}</li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Links</h3>
            <div className={styles.links}>
              <a 
                href="https://www.linkedin.com/in/aditya-tripuraneni/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Aditya-Tripuraneni"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Copy Button */}
          <div className={styles.copySection}>
            <button onClick={handleCopy} className={styles.copyButton}>
              Copy to Clipboard
            </button>
            {showCopied && (
              <span className={styles.copiedMessage}>Copied!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickReference;
