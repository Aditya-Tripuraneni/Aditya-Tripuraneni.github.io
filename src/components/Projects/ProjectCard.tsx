import React from 'react';
import type { Project } from '../../types/index';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const primaryUrl = project.liveUrl ?? project.githubUrl;

  return (
    <div className={styles.card}>
      {primaryUrl ? (
        <a
          href={primaryUrl}
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

      {project.technologies.length > 0 && (
        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>
      )}

      {project.liveUrl && project.githubUrl && (
        <div className={styles.actions}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionButton} ${styles.primaryAction}`}
          >
            Live site
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionButton} ${styles.secondaryAction}`}
          >
            GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
