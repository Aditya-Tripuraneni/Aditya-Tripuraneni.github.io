import React from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.subtitle}>
            
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
