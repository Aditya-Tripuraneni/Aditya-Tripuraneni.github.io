import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.intro}>
            A few projects I'm most excited to share.{' '}
            <Link to="/projects" className={styles.githubLink}>
              View all projects
            </Link>{' '}
            or browse{' '}
            <a
              href="https://github.com/Aditya-Tripuraneni"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              my GitHub
            </a>{' '}
            for everything else.
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projectsData.filter((project) => project.featured).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
