export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface ContactInfo {
  linkedin: string;
  github: string;
}
