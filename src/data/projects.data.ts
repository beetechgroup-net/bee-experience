import type { Project } from '@/types/project.types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Bee Experience',
    description: 'Site para expor experiências de desenvolvimento de software.',
    longDescription: 'A personal portfolio built to demonstrate modern web development skills and share professional journey. Features a clean, component-based architecture using React and TypeScript, with a custom filter system for projects and experiences.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Tailwind', category: 'frontend' },
      { name: 'Vite', category: 'devops' }
    ],
    projectUrl: 'https://beetechgroup-net.github.io/bee-experience/',
    status: 'users',
    year: '2025',
    category: 'Portfolio'
  },
  {
    id: '2',
    title: 'Industrial Device Integration Platform',
    description: 'Monolithic backend for secure hardware communication and field-level auditing.',
    longDescription: 'Developed a monolithic backend in TypeScript (Node.js) with React web and React Native apps. Implemented secure hardware communication protocol using HMAC and Blowfish encryption for packet-based messaging. Designed byte-level operations for device commands and firmware control. Built a field-level audit system logging all changes with user and timestamp data.',
    technologies: [
      { name: 'Node.js', category: 'backend' },
      { name: 'TypeScript', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'React Native', category: 'mobile' },
      { name: 'Docker', category: 'devops' }
    ],
    status: 'completed',
    year: '2023',
    category: 'IoT'
  },
  {
    id: '3',
    title: 'Flood Risk Prediction Platform',
    description: 'Monitoring platform integrating hydrological data and AI prediction models.',
    longDescription: 'Developed a flood-risk monitoring platform integrating hydrological data (ANA) and rainfall data (NASA NC4). Integrated a pre-trained AI prediction model into a Java microservice to estimate river level variations. Designed multiple Quarkus microservices for data ingestion, AI orchestration, and frontend integration, plus one in Python for NASA data extraction.',
    technologies: [
      { name: 'Java', category: 'backend' },
      { name: 'Quarkus', category: 'backend' },
      { name: 'Python', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'AI', category: 'other' }
    ],
    status: 'completed',
    year: '2023',
    category: 'Environment'
  }
];
