import React from 'react';
import { workExperienceData } from '../../data/workExperience';
import WorkExperienceCard from './WorkExperienceCard';
import styles from './WorkExperienceSection.module.css';

const WorkExperienceSection: React.FC = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Work Experience</h2>
          <p className={styles.subtitle}>
            
          </p>
        </div>
        
        <div className={styles.experienceGrid}>
          {workExperienceData.map((experience) => (
            <WorkExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
