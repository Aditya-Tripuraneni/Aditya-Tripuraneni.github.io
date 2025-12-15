import React, { useState } from 'react';
import type { WorkExperience } from '../../types/index';
import styles from './WorkExperienceCard.module.css';

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ experience }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`} 
      onClick={handleCardClick}
    >
      <div className={styles.cardInner}>
        {/* Front of Card */}
        <div className={styles.cardFront}>
          <div className={styles.header}>
            <div className={styles.titleSection}>
              <h3 className={styles.title}>{experience.title}</h3>
              <div className={styles.company}>{experience.company}</div>
              <div className={styles.location}>{experience.location}</div>
            </div>
            <div className={styles.duration}>{experience.duration}</div>
          </div>
          
          <div className={styles.description}>
            {experience.description.map((item: string, index: number) => (
              <div key={index} className={styles.descriptionItem}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Back of Card */}
        <div className={styles.cardBack}>
          <div className={styles.backContent}>
            <h4 className={styles.backTitle}>Key Achievements</h4>
            <div className={styles.achievements}>
              {experience.achievements.map((achievement: string, index: number) => (
                <div key={index} className={styles.achievementItem}>
                  {achievement}
                </div>
              ))}
            </div>

            {experience.techStack && experience.techStack.length > 0 && (
              <div className={styles.techStackSection}>
                <h4 className={styles.techStackTitle}>Tech Stack</h4>
                <div className={styles.techStack}>
                  {experience.techStack.map((tech: string, index: number) => (
                    <span key={index} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className={styles.flipBackHint}>
              <span className={styles.flipIcon}>↩</span> Click to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
