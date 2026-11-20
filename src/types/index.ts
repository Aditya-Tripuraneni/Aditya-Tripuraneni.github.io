export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  achievements: string[];
  techStack?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface ContactInfo {
  linkedin: string;
  github: string;
}

export interface OpenSourceContribution {
  id: string;
  project: string;
  repoUrl: string;
  stars: string;
  summary: string;
  pullRequests: { number: number; title: string; url: string }[];
}
