import type { Project } from '../types/index';

export const projectsData: Project[] = [
  {
    id: 'praxis',
    title: 'Praxis',
    description: 'Production SaaS that generates seed-reproducible math practice tests with LaTeX PDF exports. Stripe tiered billing with JWT auth and RLS, earning $100 monthly across 25+ users.',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Stripe'],
    githubUrl: 'https://github.com/Aditya-Tripuraneni/Praxis',
    liveUrl: 'https://praxis-amber.vercel.app',
    featured: true
  },
  {
    id: 'cachelane',
    title: 'CacheLane',
    description: 'Local cache-discipline layer for Claude Code. Sits between Claude Code and the Anthropic API, reorders each prompt so prompt caching fires more often, and prunes stale tool output for 30% to 60% lower input-token cost.',
    technologies: ['TypeScript', 'MCP', 'Claude Code'],
    githubUrl: 'https://github.com/Aditya-Tripuraneni/CacheLane',
    liveUrl: 'https://cache-lane.vercel.app',
    featured: true
  },
  {
    id: 'receipt-radar',
    title: 'Receipt Radar',
    description: 'Android app that scans receipts with an on-device OCR pipeline, parses merchants, dates, and line items into a local database, and surfaces spending insights.',
    technologies: ['Kotlin', 'Android', 'Room', 'Hilt', 'OCR'],
    featured: true
  },
  {
    id: 'songsnap',
    title: 'SongSnap',
    description: 'Identify songs using LLMs with Blackboard and repository architectures',
    technologies: [],
    githubUrl: 'https://github.com/Aditya-Tripuraneni/3A04-Project',
    featured: true
  },
  {
    id: 'deep-q',
    title: 'Deep Q Neural Network',
    description: 'Designed and implemented a Deep Q-learning algorithm with SARSA-MAX to train an agent in the Mountain Car environment',
    technologies: [],
    githubUrl: 'https://github.com/Aditya-Tripuraneni/Deep-Q-Learning',
    featured: true
  },
  {
    id: 'in-memory-db',
    title: 'C++ In-Memory Database',
    description: 'Multi-threaded, sharded key-value store with TTL support, achieving up to 5.6× speedup via reader-writer locks and async background cleanup',
    technologies: [],
    githubUrl: 'https://github.com/Aditya-Tripuraneni/In-Memory-Database',
    featured: true
  }
];
