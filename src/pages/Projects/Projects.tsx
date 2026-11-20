import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import ProjectCard from '../../components/Projects/ProjectCard';
import styles from './Projects.module.css';

const Projects: React.FC = () => (
  <main className={styles.page}>
    <div className={styles.container}>
      <Link to="/" className={styles.back}>← Home</Link>
      <h1 className={styles.title}>All Projects</h1>
      <p className={styles.intro}>
        More of what I've built. There's even more on{' '}
        <a
          href="https://github.com/Aditya-Tripuraneni"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          my GitHub
        </a>.
      </p>
      <div className={styles.grid}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </main>
);

export default Projects;
