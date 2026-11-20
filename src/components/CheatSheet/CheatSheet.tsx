import React, { useState } from 'react';
import { workExperienceData } from '../../data/workExperience';
import { openSourceData } from '../../data/openSource';
import styles from './CheatSheet.module.css';

const CheatSheet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const aboutText = `Aditya Tripuraneni is a backend and infrastructure engineer, mostly writing Kotlin, Java, and Go, studying Software Engineering (Co-op) at McMaster University. At Wealthsimple, he scaled a Kotlin and Temporal replay workflow from 30 to 100,000 accounts per request, led release cleanup that freed 26 TB, wrote a Go Kafka consumer posting events to the book of records across 100K+ accounts, and co-designed a read-only Kotlin and Spring AI MCP server so AI assistants can investigate data freshness. Before that he interned at PointClickCare, building a Java and Redis ingestion pipeline that indexed 30K+ clinical notes into Qdrant for RAG search, and at RBC, building an agentic AI hedge fund platform and BigQuery data validation tooling. In Winter 2027 he joins Shopify's Infrastructure team, writing Go for fleet automation across Kubernetes clusters on Google Cloud.`;

  const summaries: Record<string, string> = {
    '1': 'Infrastructure team: Go, Kubernetes, fleet automation on Google Cloud.',
    '2': 'Kotlin/Temporal replay at 100K accounts per request, 26 TB freed, Go Kafka consumer, Spring AI MCP server.',
    '3': 'Java/Redis/Qdrant RAG ingestion pipeline: 30K+ notes across 100+ organizations.',
    '4': 'Agentic AI hedge fund platform for 4+ trading teams; FastAPI latency down 47%.',
    '5': 'BigQuery validation across 5M+ records; automation saving 100+ hours monthly.',
    '6': 'Led software development for rocket telemetry systems.'
  };

  const roles = workExperienceData
    .map((exp) => `• ${exp.title} – ${exp.company} (${exp.duration})\n   ${summaries[exp.id] ?? ''}`)
    .join('\n\n');

  const openSource = openSourceData
    .map((item) => `• ${item.project} (${item.stars}★): ${item.pullRequests.map((pr) => `#${pr.number}`).join(', ')} merged`)
    .join('\n');

  const cheatSheetText = `Aditya Tripuraneni – Backend & Infrastructure Engineer

Experience:
${roles}

Open Source:
${openSource}

Projects:
• Praxis – https://praxis-amber.vercel.app
• CacheLane – https://cache-lane.vercel.app

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
