import type { Project } from '../types/index';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'SongSnap',
    description: 'Identify songs using LLMs with Blackboard and repository architectures',
    technologies: [],
    githubUrl: 'https://github.com/Aditya-Tripuraneni/3A04-Project'
  },
  {
    id: '2',
    title: 'Deep Q Neural Network',
    description: 'Designed and implemented a Deep Q-learning algorithm with SARSA-MAX to train an agent in the Mountain Car environment',
    technologies: [],
    githubUrl: 'https://github.com/Aditya-Tripuraneni/Deep-Q-Learning'
  },
  {
    id: '3',
    title: 'C++ In-Memory Database',
    description: 'Multi-threaded, sharded key-value store with TTL support, achieving up to 5.6× speedup via reader-writer locks and async background cleanup',
    technologies: [],
    githubUrl: 'https://github.com/Aditya-Tripuraneni/In-Memory-Database'
  }
];
