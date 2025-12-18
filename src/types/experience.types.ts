export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'other';
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: Highlight[];
  technologies: Technology[];
  imageUrl?: string;
}

