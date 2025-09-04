import React from 'react';
import type { WorkExperience } from '../../types/index';
import styles from './WorkExperienceCard.module.css';

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ experience }) => {
  return (
    <div className={styles.card}>
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
      
      {/* Only show achievements section if there are real achievements (not placeholder) */}
      {experience.achievements.length > 0 && experience.achievements[0] !== 'placeholder' && (
        <div className={styles.achievements}>
          {experience.achievements.map((achievement: string, index: number) => (
            <div key={index} className={styles.achievementItem}>
              {achievement}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkExperienceCard;
