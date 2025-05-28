export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
}