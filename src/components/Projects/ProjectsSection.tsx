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
          <p className={styles.intro}>
            These are my top 3 projects that I'm most excited to share here. If you're curious about more of my work,{' '}
            <a 
              href="https://github.com/Aditya-Tripuraneni" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              my GitHub
            </a>{' '}
            has a bunch of other projects ranging from computer vision experiments to full-stack applications, and honestly just random things I found interesting enough to build. Feel free to check it out!
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
