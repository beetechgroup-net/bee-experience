export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'other';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: Technology[];
  techniques: string[];
  projectUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  status: 'completed' | 'in-progress' | 'archived';
  year: string;
  category: string;
}

