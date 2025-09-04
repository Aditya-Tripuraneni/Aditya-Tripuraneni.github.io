import React from 'react';
import type { Project } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      {project.githubUrl ? (
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.titleLink}
        >
          {project.title}
        </a>
      ) : (
        <h3 className={styles.title}>{project.title}</h3>
      )}
      
      {project.description && (
        <div className={styles.description}>
          <div className={styles.bulletPoint}>
            {project.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
