import React, { useState } from 'react';
import styles from './CheatSheet.module.css';

const CheatSheet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const aboutText = `Aditya Tripuraneni is a software engineering student with experience across healthcare, finance, and aerospace technology. He is currently a software engineering intern at PointClickCare, focusing on performance and data engineering. Previously, he was selected for the competitive RBC Amplify program, where he built AI-driven solutions for Capital Markets, contributing to a patent-pending AI agent architecture designed to generate insights from hedge fund data. His hands-on skills span Python, LangChain, SQL, Snowflake, and AWS Bedrock, complemented by broader experience from RBC's Data Science & Analytics team, McMaster Rocketry, and McMaster Faculty of Engineering Venture Academy. Aditya is known as a fast learner who thrives in collaborative environments, bringing strong backend development skills, a passion for problem-solving, and an energetic presence. He is driven by building scalable, intelligent systems and consistently seeks to grow by tackling challenging, high-impact engineering problems.`;

  const cheatSheetText = `Aditya Tripuraneni – Software Engineer

Internships:
• Software Engineer Intern – PointClickCare (Sept 2025 – Present)
   Data + performance engineering.

• Software Developer Intern – RBC Amplify (May 2025 – Aug 2025)
   Designed a patent pending solution for Capital Markets.

• Software Engineer Intern – RBC, Data Science & Analytics (May 2024 – Aug 2024)
   Built automation tools for data workflows.

• Software Engineer Co-Lead – McMaster Rocketry (Jul 2024 – May 2025)
   Led software development for rocket telemetry systems.

• Software Developer Intern – McMaster Faculty of Engineering Venture Academy (May 2023 – Aug 2023)
   Developed educational technology platforms.

Links:
LinkedIn: https://www.linkedin.com/in/aditya-tripuraneni/
GitHub: https://github.com/Aditya-Tripuraneni`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cheatSheetText);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={styles.floatingButton}
        onClick={toggleModal}
        aria-label="Open Quick Reference"
      >
        📄
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Quick Reference</h2>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              {/* About Section */}
              <div className={styles.aboutSection}>
                <h3 className={styles.sectionTitle}>About</h3>
                <p className={styles.aboutText}>{aboutText}</p>
              </div>

              {/* Cheat Sheet Section */}
              <div className={styles.cheatSheetSection}>
                <h3 className={styles.sectionTitle}>Quick Copy Reference</h3>
                <div className={styles.cheatSheetBox}>
                  <pre className={styles.cheatSheetText}>{cheatSheetText}</pre>
                </div>
                
                <div className={styles.buttonContainer}>
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
        </div>
      )}
    </>
  );
};

export default CheatSheet;
