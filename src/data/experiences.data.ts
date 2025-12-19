import type { Experience } from '@/types/experience.types';

export const experiencesData: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'SENAI Innovation Department',
    period: 'Jan 2024 – Dec 2025',
    description: 'Developed a full-stack system for over 300,000 users using Quarkus, React, and Next.js. Optimized database queries with CriteriaBuilder and SQL Views, improving performance. Structured backend architecture with service-per-action pattern for microservices. Implemented Keycloak, MinIO, and Docker for security, storage, and deployment. Participated in sprint planning, mentoring juniors and managing production deployments.',
    technologies: [
      { name: 'Quarkus', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Java', category: 'backend' },
      { name: 'SQL', category: 'database' },
      { name: 'Docker', category: 'devops' },
      { name: 'Keycloak', category: 'security' },
      { name: 'MinIO', category: 'storage' }
    ]
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'SENAI Innovation Department',
    period: 'Jun 2023 – Dec 2023',
    description: 'Developed a monolithic backend in TypeScript (Node.js) with React web and React Native apps. Implemented secure hardware communication protocol using HMAC and Blowfish encryption for packet-based messaging. Designed byte-level operations for device commands and firmware control. Built a field-level audit system logging all changes with user and timestamp data. Created Docker deployment scripts and configured Nginx as a reverse proxy.',
    technologies: [
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'React Native', category: 'mobile' },
      { name: 'Docker', category: 'devops' },
      { name: 'Nginx', category: 'devops' }
    ]
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'Flood Risk Prediction Platform',
    period: 'Sep 2022 – May 2023',
    description: 'Developed a flood-risk monitoring platform integrating hydrological data (ANA) and rainfall data (NASA NC4). Integrated a pre-trained AI prediction model into a Java microservice to estimate river level variations. Designed multiple Quarkus microservices for data ingestion, AI orchestration, and frontend integration. Implemented parallel data processing and model training workflows, improving system scalability. Built a dashboard in React to monitor prediction status and control monitoring points.',
    technologies: [
      { name: 'Java', category: 'backend' },
      { name: 'Quarkus', category: 'backend' },
      { name: 'Python', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'AI', category: 'other' }
    ]
  }
];
