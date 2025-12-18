import type { Experience } from '@/types/experience.types';

export const experiencesData: Experience[] = [
  {
    id: '1',
    title: 'Desenvolvedor Full Stack Senior',
    company: 'TechCorp Solutions',
    period: '2023 - Presente',
    description: 'Liderança técnica em projetos de grande escala, desenvolvendo aplicações web modernas e arquiteturas escaláveis. Trabalho com equipes ágeis multidisciplinares focadas em qualidade, performance e melhores práticas de desenvolvimento.',
    highlights: [
      {
        title: 'Arquitetura de Microserviços',
        description: 'Projetei e implementei uma arquitetura de microserviços completa que reduziu o tempo de deploy em 60%, melhorou a escalabilidade em 3x e facilitou a manutenção do código.'
      },
      {
        title: 'Sistema de Autenticação Avançado',
        description: 'Desenvolvi um sistema robusto de autenticação e autorização usando JWT, OAuth2 e SSO, garantindo segurança de nível enterprise e excelente experiência do usuário.'
      },
      {
        title: 'Otimização de Performance',
        description: 'Implementei técnicas avançadas de otimização (code splitting, lazy loading, caching) que resultaram em 40% de melhoria no tempo de carregamento e 25% de redução no uso de banda.'
      },
      {
        title: 'CI/CD Pipeline',
        description: 'Configurei pipelines completos de CI/CD que automatizaram testes, builds e deploys, reduzindo erros em produção em 70%.'
      }
    ],
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'Docker', category: 'devops' },
      { name: 'Kubernetes', category: 'devops' },
      { name: 'AWS', category: 'devops' },
      { name: 'GitHub Actions', category: 'devops' }
    ]
  },
  {
    id: '2',
    title: 'Desenvolvedor Frontend Lead',
    company: 'StartupTech Innovation',
    period: '2021 - 2023',
    description: 'Liderança do time frontend em uma startup em crescimento rápido. Desenvolvimento de interfaces modernas, responsivas e acessíveis, com foco em experiência do usuário e performance.',
    highlights: [
      {
        title: 'Design System Completo',
        description: 'Criei um design system completo do zero que padronizou o desenvolvimento frontend, acelerou a criação de novos componentes em 50% e garantiu consistência visual em toda a aplicação.'
      },
      {
        title: 'PWA Implementation',
        description: 'Transformei a aplicação web em um Progressive Web App completo, melhorando significativamente a experiência mobile e aumentando o engajamento em 35%.'
      },
      {
        title: 'Testes Automatizados',
        description: 'Implementei uma suíte completa de testes (unitários, integração e E2E) que aumentou a confiança no código e reduziu bugs em produção em 45%.'
      }
    ],
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Vue.js', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Storybook', category: 'frontend' },
      { name: 'Jest', category: 'frontend' },
      { name: 'Cypress', category: 'frontend' },
      { name: 'GraphQL', category: 'backend' },
      { name: 'Apollo Client', category: 'frontend' }
    ]
  },
  {
    id: '3',
    title: 'Desenvolvedor Mobile',
    company: 'AppSolutions Mobile',
    period: '2020 - 2021',
    description: 'Desenvolvimento de aplicativos mobile nativos e híbridos para iOS e Android, com foco em performance, usabilidade e integração com serviços backend.',
    highlights: [
      {
        title: 'App com 100k+ Downloads',
        description: 'Desenvolvi um aplicativo do zero que alcançou mais de 100 mil downloads na Play Store e App Store, com avaliação média de 4.5 estrelas e excelente retenção de usuários.'
      },
      {
        title: 'Integração com APIs Complexas',
        description: 'Implementei integrações complexas com múltiplas APIs REST e GraphQL, garantindo sincronização eficiente de dados em tempo real e tratamento robusto de erros.'
      },
      {
        title: 'Otimização de Performance Mobile',
        description: 'Apliquei técnicas avançadas de otimização que reduziram o tempo de inicialização em 50% e o consumo de bateria em 30%, melhorando significativamente a experiência do usuário.'
      }
    ],
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'TypeScript', category: 'mobile' },
      { name: 'Expo', category: 'mobile' },
      { name: 'Firebase', category: 'backend' },
      { name: 'Redux', category: 'frontend' },
      { name: 'React Navigation', category: 'mobile' },
      { name: 'Fastlane', category: 'devops' }
    ]
  },
  {
    id: '4',
    title: 'Desenvolvedor Backend',
    company: 'DataFlow Systems',
    period: '2019 - 2020',
    description: 'Desenvolvimento de APIs RESTful e GraphQL robustas, sistemas de processamento de dados e integrações com serviços terceiros. Foco em segurança, escalabilidade e performance.',
    highlights: [
      {
        title: 'API de Alta Performance',
        description: 'Desenvolvi uma API REST que processa mais de 10.000 requisições por segundo, com tempo de resposta médio de 50ms, utilizando técnicas de cache e otimização de queries.'
      },
      {
        title: 'Sistema de Processamento de Dados',
        description: 'Implementei um sistema de processamento assíncrono de grandes volumes de dados usando filas e workers, processando milhões de registros diariamente.'
      },
      {
        title: 'Segurança e Compliance',
        description: 'Implementei medidas de segurança robustas incluindo rate limiting, validação de dados, criptografia e compliance com LGPD, garantindo proteção de dados sensíveis.'
      }
    ],
    technologies: [
      { name: 'Node.js', category: 'backend' },
      { name: 'Python', category: 'backend' },
      { name: 'Express', category: 'backend' },
      { name: 'GraphQL', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'RabbitMQ', category: 'backend' },
      { name: 'Docker', category: 'devops' },
      { name: 'Nginx', category: 'devops' }
    ]
  },
  {
    id: '5',
    title: 'Desenvolvedor Full Stack',
    company: 'Digital Agency Pro',
    period: '2018 - 2019',
    description: 'Desenvolvimento de websites e aplicações web para diversos clientes, desde landing pages até sistemas complexos. Trabalho com diferentes tecnologias e frameworks conforme necessidade do projeto.',
    highlights: [
      {
        title: 'E-commerce Completo',
        description: 'Desenvolvi uma plataforma de e-commerce completa do zero, incluindo sistema de pagamentos, gestão de estoque, painel administrativo e área do cliente, resultando em aumento de 200% nas vendas online.'
      },
      {
        title: 'Sites de Alto Tráfego',
        description: 'Criei e otimizei websites que recebem mais de 1 milhão de visitas mensais, garantindo performance e disponibilidade mesmo em picos de tráfego.'
      },
      {
        title: 'Integração com Sistemas Legados',
        description: 'Desenvolvi integrações complexas com sistemas legados, permitindo migração gradual de dados e funcionalidades sem interrupção dos serviços.'
      }
    ],
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Vue.js', category: 'frontend' },
      { name: 'PHP', category: 'backend' },
      { name: 'Laravel', category: 'backend' },
      { name: 'WordPress', category: 'backend' },
      { name: 'MySQL', category: 'database' },
      { name: 'jQuery', category: 'frontend' },
      { name: 'Bootstrap', category: 'frontend' },
      { name: 'Stripe API', category: 'backend' }
    ]
  },
  {
    id: '6',
    title: 'Desenvolvedor Frontend Júnior',
    company: 'WebStudio Creative',
    period: '2017 - 2018',
    description: 'Início da carreira desenvolvendo interfaces web responsivas e interativas. Aprendizado de boas práticas, padrões de código e trabalho em equipe.',
    highlights: [
      {
        title: 'Primeiros Projetos React',
        description: 'Desenvolvi meus primeiros projetos utilizando React, aprendendo conceitos fundamentais como componentes, estado, props e hooks.'
      },
      {
        title: 'Sites Responsivos',
        description: 'Criei diversos websites totalmente responsivos, garantindo excelente experiência em todos os dispositivos e navegadores.'
      },
      {
        title: 'Integração com APIs',
        description: 'Aprendi a consumir APIs REST, tratar erros, implementar loading states e criar interfaces dinâmicas baseadas em dados externos.'
      }
    ],
    technologies: [
      { name: 'HTML5', category: 'frontend' },
      { name: 'CSS3', category: 'frontend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'SASS', category: 'frontend' },
      { name: 'Git', category: 'devops' },
      { name: 'REST API', category: 'backend' }
    ]
  }
];

