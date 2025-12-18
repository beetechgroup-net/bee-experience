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
  },
  {
    id: '7',
    title: 'Arquiteto de Software',
    company: 'CloudTech Enterprise',
    period: '2022 - 2023',
    description: 'Arquitetura e design de sistemas distribuídos de grande escala, definindo padrões técnicos e guiando decisões arquiteturais críticas para a organização.',
    highlights: [
      {
        title: 'Arquitetura Event-Driven',
        description: 'Projetei uma arquitetura event-driven completa que melhorou a desacoplamento entre serviços em 80% e permitiu escalabilidade horizontal eficiente.'
      },
      {
        title: 'Padrões e Boas Práticas',
        description: 'Estabeleci padrões arquiteturais e guias de boas práticas que foram adotados por toda a organização, melhorando a qualidade do código em 50%.'
      },
      {
        title: 'Migração para Cloud',
        description: 'Liderei a migração completa de infraestrutura on-premise para cloud, reduzindo custos em 40% e melhorando a disponibilidade para 99.9%.'
      }
    ],
    technologies: [
      { name: 'AWS', category: 'devops' },
      { name: 'Azure', category: 'devops' },
      { name: 'Kubernetes', category: 'devops' },
      { name: 'Terraform', category: 'devops' },
      { name: 'Microservices', category: 'backend' },
      { name: 'Event Sourcing', category: 'backend' },
      { name: 'CQRS', category: 'backend' }
    ]
  },
  {
    id: '8',
    title: 'Desenvolvedor DevOps',
    company: 'InfraSolutions',
    period: '2021 - 2022',
    description: 'Automação de processos de deploy, configuração de pipelines CI/CD, gerenciamento de infraestrutura como código e monitoramento de sistemas.',
    highlights: [
      {
        title: 'Pipeline CI/CD Multi-ambiente',
        description: 'Configurei pipelines completos de CI/CD para múltiplos ambientes (dev, staging, prod), reduzindo tempo de deploy de 2 horas para 15 minutos.'
      },
      {
        title: 'Infraestrutura como Código',
        description: 'Migrei toda a infraestrutura para código usando Terraform, permitindo versionamento e replicação rápida de ambientes.'
      },
      {
        title: 'Monitoramento e Alertas',
        description: 'Implementei sistema completo de monitoramento e alertas que reduziu tempo de detecção de problemas de 30 minutos para 2 minutos.'
      }
    ],
    technologies: [
      { name: 'Docker', category: 'devops' },
      { name: 'Kubernetes', category: 'devops' },
      { name: 'Jenkins', category: 'devops' },
      { name: 'GitLab CI', category: 'devops' },
      { name: 'Terraform', category: 'devops' },
      { name: 'Ansible', category: 'devops' },
      { name: 'Prometheus', category: 'devops' },
      { name: 'Grafana', category: 'devops' }
    ]
  },
  {
    id: '9',
    title: 'Desenvolvedor Python',
    company: 'DataScience Labs',
    period: '2020 - 2021',
    description: 'Desenvolvimento de soluções de análise de dados, APIs para machine learning e automação de processos de negócio usando Python.',
    highlights: [
      {
        title: 'API de Machine Learning',
        description: 'Desenvolvi APIs RESTful para servir modelos de machine learning em produção, processando mais de 1 milhão de predições diárias.'
      },
      {
        title: 'Automação de ETL',
        description: 'Criei pipelines de ETL automatizados que processam terabytes de dados diariamente, reduzindo tempo de processamento em 70%.'
      },
      {
        title: 'Scripts de Automação',
        description: 'Desenvolvi scripts Python que automatizaram processos manuais, economizando mais de 20 horas semanais de trabalho manual.'
      }
    ],
    technologies: [
      { name: 'Python', category: 'backend' },
      { name: 'Django', category: 'backend' },
      { name: 'Flask', category: 'backend' },
      { name: 'Pandas', category: 'backend' },
      { name: 'NumPy', category: 'backend' },
      { name: 'FastAPI', category: 'backend' },
      { name: 'Celery', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' }
    ]
  },
  {
    id: '10',
    title: 'Desenvolvedor Java',
    company: 'Enterprise Systems',
    period: '2019 - 2020',
    description: 'Desenvolvimento de aplicações enterprise usando Java e Spring Framework, focando em sistemas robustos e escaláveis.',
    highlights: [
      {
        title: 'Sistema Enterprise',
        description: 'Desenvolvi um sistema enterprise completo que gerencia mais de 100.000 transações diárias com alta disponibilidade e confiabilidade.'
      },
      {
        title: 'Integração com Sistemas Legados',
        description: 'Implementei integrações complexas com sistemas legados usando SOAP e REST, garantindo comunicação eficiente entre sistemas.'
      },
      {
        title: 'Otimização de Performance',
        description: 'Otimizei queries e implementei cache distribuído que melhorou o tempo de resposta em 60% e reduziu carga no banco de dados.'
      }
    ],
    technologies: [
      { name: 'Java', category: 'backend' },
      { name: 'Spring Boot', category: 'backend' },
      { name: 'Spring MVC', category: 'backend' },
      { name: 'Hibernate', category: 'backend' },
      { name: 'Maven', category: 'devops' },
      { name: 'Oracle DB', category: 'database' },
      { name: 'RabbitMQ', category: 'backend' }
    ]
  },
  {
    id: '11',
    title: 'Desenvolvedor .NET',
    company: 'Microsoft Solutions',
    period: '2018 - 2019',
    description: 'Desenvolvimento de aplicações web e desktop usando .NET Framework e .NET Core, criando soluções robustas para clientes corporativos.',
    highlights: [
      {
        title: 'Aplicação Web ASP.NET Core',
        description: 'Desenvolvi uma aplicação web completa usando ASP.NET Core que serve mais de 50.000 usuários simultâneos com alta performance.'
      },
      {
        title: 'API RESTful',
        description: 'Criei APIs RESTful robustas usando Web API que são consumidas por múltiplos clientes (web, mobile, desktop).'
      },
      {
        title: 'Migração para .NET Core',
        description: 'Liderei a migração de aplicações legadas do .NET Framework para .NET Core, melhorando performance em 40% e reduzindo custos.'
      }
    ],
    technologies: [
      { name: 'C#', category: 'backend' },
      { name: '.NET Core', category: 'backend' },
      { name: 'ASP.NET', category: 'backend' },
      { name: 'Entity Framework', category: 'backend' },
      { name: 'SQL Server', category: 'database' },
      { name: 'Azure', category: 'devops' }
    ]
  },
  {
    id: '12',
    title: 'Desenvolvedor Ruby on Rails',
    company: 'RapidDev Agency',
    period: '2017 - 2018',
    description: 'Desenvolvimento rápido de aplicações web usando Ruby on Rails, focando em produtividade e entrega ágil de funcionalidades.',
    highlights: [
      {
        title: 'MVP em Tempo Recorde',
        description: 'Desenvolvi um MVP completo em apenas 3 semanas usando Rails, permitindo validação rápida da ideia de negócio.'
      },
      {
        title: 'Sistema de Pagamentos',
        description: 'Implementei integração completa com gateways de pagamento, processando transações de forma segura e confiável.'
      },
      {
        title: 'Otimização de Queries',
        description: 'Otimizei queries N+1 e implementei eager loading, melhorando performance de páginas em 80% e reduzindo tempo de carregamento.'
      }
    ],
    technologies: [
      { name: 'Ruby', category: 'backend' },
      { name: 'Ruby on Rails', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'Sidekiq', category: 'backend' },
      { name: 'RSpec', category: 'backend' }
    ]
  },
  {
    id: '13',
    title: 'Desenvolvedor Go',
    company: 'HighPerformance Systems',
    period: '2021 - 2022',
    description: 'Desenvolvimento de serviços de alta performance usando Go, focando em concorrência, baixa latência e eficiência de recursos.',
    highlights: [
      {
        title: 'Microserviço de Alta Performance',
        description: 'Desenvolvi um microserviço em Go que processa mais de 50.000 requisições por segundo com latência média de 5ms.'
      },
      {
        title: 'Sistema de Filas',
        description: 'Implementei um sistema de filas distribuído usando Go que processa milhões de mensagens diariamente com alta confiabilidade.'
      },
      {
        title: 'Otimização de Memória',
        description: 'Otimizei uso de memória e CPU, reduzindo custos de infraestrutura em 60% mantendo a mesma performance.'
      }
    ],
    technologies: [
      { name: 'Go', category: 'backend' },
      { name: 'Gin', category: 'backend' },
      { name: 'gRPC', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'Docker', category: 'devops' }
    ]
  },
  {
    id: '14',
    title: 'Desenvolvedor Rust',
    company: 'SecureSystems',
    period: '2022 - 2023',
    description: 'Desenvolvimento de sistemas de baixo nível e alta performance usando Rust, focando em segurança, concorrência e eficiência.',
    highlights: [
      {
        title: 'Sistema de Processamento',
        description: 'Desenvolvi um sistema de processamento de dados em Rust que é 3x mais rápido que a implementação anterior em C++.'
      },
      {
        title: 'Segurança de Memória',
        description: 'Aproveitei o sistema de ownership do Rust para criar código seguro sem overhead de runtime, eliminando bugs de memória.'
      },
      {
        title: 'WebAssembly',
        description: 'Compilei código Rust para WebAssembly, criando módulos de alta performance que rodam no navegador.'
      }
    ],
    technologies: [
      { name: 'Rust', category: 'backend' },
      { name: 'Actix', category: 'backend' },
      { name: 'Tokio', category: 'backend' },
      { name: 'WebAssembly', category: 'frontend' },
      { name: 'PostgreSQL', category: 'database' }
    ]
  },
  {
    id: '15',
    title: 'Desenvolvedor Flutter',
    company: 'CrossPlatform Mobile',
    period: '2020 - 2021',
    description: 'Desenvolvimento de aplicativos mobile multiplataforma usando Flutter, criando apps nativos para iOS e Android com código único.',
    highlights: [
      {
        title: 'App Multiplataforma',
        description: 'Desenvolvi um aplicativo completo que funciona nativamente em iOS e Android, reduzindo tempo de desenvolvimento em 50%.'
      },
      {
        title: 'UI/UX Moderna',
        description: 'Criei interfaces modernas e fluidas usando widgets customizados do Flutter, resultando em excelente experiência do usuário.'
      },
      {
        title: 'Performance Nativa',
        description: 'Otimizei performance do app para alcançar 60 FPS consistentes, rivalizando com apps nativos em performance.'
      }
    ],
    technologies: [
      { name: 'Flutter', category: 'mobile' },
      { name: 'Dart', category: 'mobile' },
      { name: 'Firebase', category: 'backend' },
      { name: 'Provider', category: 'mobile' },
      { name: 'Bloc', category: 'mobile' }
    ]
  },
  {
    id: '16',
    title: 'Desenvolvedor Swift/iOS',
    company: 'Apple Development Studio',
    period: '2019 - 2020',
    description: 'Desenvolvimento de aplicativos nativos para iOS usando Swift e SwiftUI, criando apps elegantes e performáticos.',
    highlights: [
      {
        title: 'App na App Store',
        description: 'Desenvolvi um aplicativo que alcançou top 10 na App Store na categoria de produtividade, com mais de 50.000 downloads.'
      },
      {
        title: 'SwiftUI Moderno',
        description: 'Criei interfaces modernas usando SwiftUI, aproveitando recursos declarativos e animações nativas da plataforma.'
      },
      {
        title: 'Core Data Integration',
        description: 'Implementei persistência de dados usando Core Data, garantindo sincronização eficiente e offline-first.'
      }
    ],
    technologies: [
      { name: 'Swift', category: 'mobile' },
      { name: 'SwiftUI', category: 'mobile' },
      { name: 'UIKit', category: 'mobile' },
      { name: 'Core Data', category: 'database' },
      { name: 'Combine', category: 'mobile' }
    ]
  },
  {
    id: '17',
    title: 'Desenvolvedor Kotlin/Android',
    company: 'Android Pro',
    period: '2018 - 2019',
    description: 'Desenvolvimento de aplicativos nativos para Android usando Kotlin, criando apps modernos e seguindo Material Design.',
    highlights: [
      {
        title: 'App com 500k+ Downloads',
        description: 'Desenvolvi um aplicativo Android que alcançou mais de 500 mil downloads na Play Store com avaliação de 4.7 estrelas.'
      },
      {
        title: 'Jetpack Compose',
        description: 'Migrei interface para Jetpack Compose, criando UI declarativa e moderna que reduziu código em 40%.'
      },
      {
        title: 'Arquitetura MVVM',
        description: 'Implementei arquitetura MVVM completa usando ViewModel e LiveData, melhorando testabilidade e manutenibilidade.'
      }
    ],
    technologies: [
      { name: 'Kotlin', category: 'mobile' },
      { name: 'Android SDK', category: 'mobile' },
      { name: 'Jetpack Compose', category: 'mobile' },
      { name: 'Room', category: 'database' },
      { name: 'Retrofit', category: 'mobile' },
      { name: 'Coroutines', category: 'mobile' }
    ]
  },
  {
    id: '18',
    title: 'Desenvolvedor Angular',
    company: 'Enterprise Web Solutions',
    period: '2020 - 2021',
    description: 'Desenvolvimento de aplicações web enterprise usando Angular, criando SPAs robustas e escaláveis.',
    highlights: [
      {
        title: 'SPA Enterprise',
        description: 'Desenvolvi uma SPA completa usando Angular que serve mais de 10.000 usuários simultâneos com excelente performance.'
      },
      {
        title: 'Lazy Loading',
        description: 'Implementei lazy loading de módulos e componentes, reduzindo bundle inicial em 60% e melhorando tempo de carregamento.'
      },
      {
        title: 'State Management',
        description: 'Configurei NgRx para gerenciamento de estado complexo, melhorando previsibilidade e debugabilidade da aplicação.'
      }
    ],
    technologies: [
      { name: 'Angular', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'RxJS', category: 'frontend' },
      { name: 'NgRx', category: 'frontend' },
      { name: 'Angular Material', category: 'frontend' }
    ]
  },
  {
    id: '19',
    title: 'Desenvolvedor Vue.js',
    company: 'Modern Web Apps',
    period: '2019 - 2020',
    description: 'Desenvolvimento de aplicações web modernas usando Vue.js, criando interfaces reativas e performáticas.',
    highlights: [
      {
        title: 'Aplicação Vue 3',
        description: 'Migrei aplicação para Vue 3, aproveitando Composition API e melhorias de performance, reduzindo bundle size em 30%.'
      },
      {
        title: 'Pinia State Management',
        description: 'Implementei gerenciamento de estado usando Pinia, simplificando código e melhorando developer experience.'
      },
      {
        title: 'Componentes Reutilizáveis',
        description: 'Criei biblioteca de componentes reutilizáveis que acelerou desenvolvimento de novas features em 50%.'
      }
    ],
    technologies: [
      { name: 'Vue.js', category: 'frontend' },
      { name: 'Vue 3', category: 'frontend' },
      { name: 'Pinia', category: 'frontend' },
      { name: 'Vue Router', category: 'frontend' },
      { name: 'Vite', category: 'devops' }
    ]
  },
  {
    id: '20',
    title: 'Desenvolvedor Svelte',
    company: 'Lightweight Web',
    period: '2021 - 2022',
    description: 'Desenvolvimento de aplicações web usando Svelte, criando apps leves e rápidos com bundle mínimo.',
    highlights: [
      {
        title: 'App Ultra Leve',
        description: 'Desenvolvi aplicação Svelte que tem bundle de apenas 15KB gzipped, carregando instantaneamente mesmo em conexões lentas.'
      },
      {
        title: 'Performance Excepcional',
        description: 'Aproveitei compilação do Svelte para criar código otimizado que rivaliza com frameworks vanilla em performance.'
      },
      {
        title: 'Developer Experience',
        description: 'Aproveitei sintaxe simples do Svelte para desenvolver features 2x mais rápido que com outros frameworks.'
      }
    ],
    technologies: [
      { name: 'Svelte', category: 'frontend' },
      { name: 'SvelteKit', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' }
    ]
  },
  {
    id: '21',
    title: 'Desenvolvedor Blockchain',
    company: 'CryptoDev Labs',
    period: '2021 - 2022',
    description: 'Desenvolvimento de smart contracts e aplicações descentralizadas usando Solidity e Web3.',
    highlights: [
      {
        title: 'Smart Contracts',
        description: 'Desenvolvi smart contracts seguros e auditados que processam milhões de dólares em transações sem incidentes.'
      },
      {
        title: 'DApp Completa',
        description: 'Criei uma aplicação descentralizada completa com frontend React e contratos inteligentes na Ethereum.'
      },
      {
        title: 'Segurança e Auditoria',
        description: 'Implementei práticas de segurança rigorosas e passei por auditorias externas, garantindo confiabilidade dos contratos.'
      }
    ],
    technologies: [
      { name: 'Solidity', category: 'backend' },
      { name: 'Web3.js', category: 'frontend' },
      { name: 'Ethereum', category: 'backend' },
      { name: 'Hardhat', category: 'devops' },
      { name: 'Truffle', category: 'devops' }
    ]
  },
  {
    id: '22',
    title: 'Desenvolvedor Game',
    company: 'Indie Game Studio',
    period: '2020 - 2021',
    description: 'Desenvolvimento de jogos usando Unity e C#, criando experiências interativas e envolventes.',
    highlights: [
      {
        title: 'Jogo Mobile',
        description: 'Desenvolvi um jogo mobile completo que alcançou mais de 100.000 downloads e 4.5 estrelas de avaliação.'
      },
      {
        title: 'Otimização de Performance',
        description: 'Otimizei performance do jogo para rodar a 60 FPS em dispositivos de baixo custo, expandindo base de usuários.'
      },
      {
        title: 'Sistema de Monetização',
        description: 'Implementei sistema de monetização balanceado que gerou receita sem prejudicar experiência do jogador.'
      }
    ],
    technologies: [
      { name: 'Unity', category: 'other' },
      { name: 'C#', category: 'backend' },
      { name: 'Unity 2D', category: 'other' },
      { name: 'Unity 3D', category: 'other' }
    ]
  },
  {
    id: '23',
    title: 'Desenvolvedor QA Automation',
    company: 'Quality Assurance Pro',
    period: '2019 - 2020',
    description: 'Desenvolvimento de testes automatizados e frameworks de teste, garantindo qualidade e confiabilidade de software.',
    highlights: [
      {
        title: 'Framework de Testes',
        description: 'Criei framework completo de testes automatizados que cobre 80% do código e reduz tempo de QA em 70%.'
      },
      {
        title: 'CI/CD Integration',
        description: 'Integrei testes automatizados no pipeline CI/CD, detectando bugs antes mesmo do deploy para staging.'
      },
      {
        title: 'Testes E2E',
        description: 'Implementei suíte completa de testes end-to-end que valida fluxos críticos de negócio automaticamente.'
      }
    ],
    technologies: [
      { name: 'Selenium', category: 'other' },
      { name: 'Cypress', category: 'frontend' },
      { name: 'Playwright', category: 'other' },
      { name: 'Jest', category: 'frontend' },
      { name: 'Python', category: 'backend' }
    ]
  },
  {
    id: '24',
    title: 'Desenvolvedor Data Engineer',
    company: 'BigData Solutions',
    period: '2021 - 2022',
    description: 'Desenvolvimento de pipelines de dados, data lakes e sistemas de processamento de big data.',
    highlights: [
      {
        title: 'Pipeline de Dados',
        description: 'Criei pipeline de dados que processa mais de 1 bilhão de eventos diários, transformando e armazenando dados eficientemente.'
      },
      {
        title: 'Data Lake',
        description: 'Implementei data lake completo usando tecnologias cloud, permitindo análise de dados em escala petabyte.'
      },
      {
        title: 'Real-time Processing',
        description: 'Configurei processamento de dados em tempo real usando streaming, permitindo análises e decisões instantâneas.'
      }
    ],
    technologies: [
      { name: 'Python', category: 'backend' },
      { name: 'Apache Spark', category: 'backend' },
      { name: 'Kafka', category: 'backend' },
      { name: 'Airflow', category: 'devops' },
      { name: 'AWS S3', category: 'devops' },
      { name: 'Snowflake', category: 'database' }
    ]
  },
  {
    id: '25',
    title: 'Desenvolvedor Machine Learning',
    company: 'AI Innovations',
    period: '2022 - 2023',
    description: 'Desenvolvimento de modelos de machine learning e sistemas de IA, desde pesquisa até produção.',
    highlights: [
      {
        title: 'Modelo de Recomendação',
        description: 'Desenvolvi modelo de recomendação que aumentou conversão em 35% e engajamento em 50% na plataforma.'
      },
      {
        title: 'MLOps Pipeline',
        description: 'Implementei pipeline completo de MLOps que automatiza treinamento, versionamento e deploy de modelos.'
      },
      {
        title: 'Feature Engineering',
        description: 'Criei pipeline de feature engineering que processa dados brutos e gera features para modelos de forma automatizada.'
      }
    ],
    technologies: [
      { name: 'Python', category: 'backend' },
      { name: 'TensorFlow', category: 'backend' },
      { name: 'PyTorch', category: 'backend' },
      { name: 'Scikit-learn', category: 'backend' },
      { name: 'MLflow', category: 'devops' }
    ]
  },
  {
    id: '26',
    title: 'Desenvolvedor Security',
    company: 'SecureTech',
    period: '2020 - 2021',
    description: 'Desenvolvimento de ferramentas de segurança, implementação de práticas secure coding e auditoria de código.',
    highlights: [
      {
        title: 'Security Framework',
        description: 'Desenvolvi framework de segurança que identifica e previne vulnerabilidades comuns, reduzindo riscos de segurança em 90%.'
      },
      {
        title: 'Penetration Testing',
        description: 'Realizei testes de penetração e identifiquei vulnerabilidades críticas antes que fossem exploradas.'
      },
      {
        title: 'Secure Coding Practices',
        description: 'Estabeleci práticas de secure coding que foram adotadas por toda a equipe, melhorando segurança geral do código.'
      }
    ],
    technologies: [
      { name: 'OWASP', category: 'other' },
      { name: 'Burp Suite', category: 'other' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Python', category: 'backend' }
    ]
  },
  {
    id: '27',
    title: 'Desenvolvedor WordPress',
    company: 'Web Agency',
    period: '2017 - 2018',
    description: 'Desenvolvimento de sites e plugins WordPress, customização de temas e otimização de performance.',
    highlights: [
      {
        title: 'Plugin Customizado',
        description: 'Desenvolvi plugin WordPress que foi usado em mais de 10.000 sites, melhorando funcionalidade e performance.'
      },
      {
        title: 'Tema Responsivo',
        description: 'Criei tema WordPress totalmente responsivo e otimizado que carrega em menos de 2 segundos.'
      },
      {
        title: 'Otimização de Performance',
        description: 'Otimizei sites WordPress que recebem mais de 100.000 visitas mensais, melhorando velocidade e SEO.'
      }
    ],
    technologies: [
      { name: 'WordPress', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'MySQL', category: 'database' },
      { name: 'JavaScript', category: 'frontend' }
    ]
  },
  {
    id: '28',
    title: 'Desenvolvedor Shopify',
    company: 'E-commerce Solutions',
    period: '2019 - 2020',
    description: 'Desenvolvimento de lojas online e apps Shopify, customização de temas e integração com sistemas externos.',
    highlights: [
      {
        title: 'Loja Completa',
        description: 'Desenvolvi loja Shopify completa que processa mais de 1 milhão de reais em vendas mensais.'
      },
      {
        title: 'App Shopify',
        description: 'Criei app Shopify que foi instalado em mais de 5.000 lojas, melhorando experiência de vendedores.'
      },
      {
        title: 'Integração de Pagamentos',
        description: 'Implementei integrações com múltiplos gateways de pagamento, aumentando conversão em 25%.'
      }
    ],
    technologies: [
      { name: 'Shopify', category: 'backend' },
      { name: 'Liquid', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' }
    ]
  },
  {
    id: '29',
    title: 'Desenvolvedor Magento',
    company: 'Enterprise E-commerce',
    period: '2018 - 2019',
    description: 'Desenvolvimento de plataformas e-commerce enterprise usando Magento, criando soluções robustas e escaláveis.',
    highlights: [
      {
        title: 'Plataforma E-commerce',
        description: 'Desenvolvi plataforma Magento que gerencia mais de 50.000 produtos e processa milhares de pedidos diários.'
      },
      {
        title: 'Customização Avançada',
        description: 'Criei módulos customizados que estendem funcionalidade do Magento, atendendo necessidades específicas do negócio.'
      },
      {
        title: 'Performance Optimization',
        description: 'Otimizei performance da loja, reduzindo tempo de carregamento de 8s para 2s e melhorando conversão.'
      }
    ],
    technologies: [
      { name: 'Magento', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'MySQL', category: 'database' },
      { name: 'Redis', category: 'database' }
    ]
  },
  {
    id: '30',
    title: 'Desenvolvedor Salesforce',
    company: 'CRM Solutions',
    period: '2020 - 2021',
    description: 'Desenvolvimento de aplicações e integrações Salesforce, customização de CRM e automação de processos.',
    highlights: [
      {
        title: 'Aplicação Salesforce',
        description: 'Desenvolvi aplicação Salesforce completa que automatiza processos de vendas, aumentando produtividade em 40%.'
      },
      {
        title: 'Integrações',
        description: 'Implementei integrações com sistemas externos usando APIs e webhooks, sincronizando dados em tempo real.'
      },
      {
        title: 'Automação de Workflows',
        description: 'Criei workflows automatizados que reduziram trabalho manual em 60% e melhoraram precisão dos dados.'
      }
    ],
    technologies: [
      { name: 'Salesforce', category: 'backend' },
      { name: 'Apex', category: 'backend' },
      { name: 'Lightning', category: 'frontend' },
      { name: 'SOQL', category: 'database' }
    ]
  },
  {
    id: '31',
    title: 'Desenvolvedor GraphQL',
    company: 'API Solutions',
    period: '2021 - 2022',
    description: 'Desenvolvimento de APIs GraphQL e integração com frontend, criando soluções eficientes de consulta de dados.',
    highlights: [
      {
        title: 'API GraphQL',
        description: 'Desenvolvi API GraphQL completa que substituiu múltiplas APIs REST, reduzindo over-fetching em 70%.'
      },
      {
        title: 'Schema Design',
        description: 'Projetei schema GraphQL otimizado que permite consultas flexíveis mantendo performance e segurança.'
      },
      {
        title: 'Subscriptions Real-time',
        description: 'Implementei subscriptions GraphQL para atualizações em tempo real, melhorando experiência do usuário.'
      }
    ],
    technologies: [
      { name: 'GraphQL', category: 'backend' },
      { name: 'Apollo Server', category: 'backend' },
      { name: 'Apollo Client', category: 'frontend' },
      { name: 'Node.js', category: 'backend' }
    ]
  },
  {
    id: '32',
    title: 'Desenvolvedor Serverless',
    company: 'Cloud Functions',
    period: '2022 - 2023',
    description: 'Desenvolvimento de aplicações serverless usando AWS Lambda, Azure Functions e outras plataformas FaaS.',
    highlights: [
      {
        title: 'Arquitetura Serverless',
        description: 'Migrei aplicação monolítica para arquitetura serverless, reduzindo custos em 70% e melhorando escalabilidade.'
      },
      {
        title: 'Event-Driven Architecture',
        description: 'Implementei arquitetura event-driven usando funções serverless, criando sistema altamente escalável e desacoplado.'
      },
      {
        title: 'Cold Start Optimization',
        description: 'Otimizei cold starts de funções serverless, reduzindo latência inicial de 3s para 200ms.'
      }
    ],
    technologies: [
      { name: 'AWS Lambda', category: 'devops' },
      { name: 'Azure Functions', category: 'devops' },
      { name: 'Serverless Framework', category: 'devops' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Python', category: 'backend' }
    ]
  },
  {
    id: '33',
    title: 'Desenvolvedor Elixir',
    company: 'Concurrent Systems',
    period: '2021 - 2022',
    description: 'Desenvolvimento de sistemas altamente concorrentes usando Elixir e Phoenix, aproveitando o modelo de atores.',
    highlights: [
      {
        title: 'Sistema Concorrente',
        description: 'Desenvolvi sistema que processa mais de 100.000 conexões simultâneas usando Elixir, com baixo uso de recursos.'
      },
      {
        title: 'Real-time Features',
        description: 'Implementei features em tempo real usando Phoenix Channels, criando experiência interativa e responsiva.'
      },
      {
        title: 'Fault Tolerance',
        description: 'Aproveitei supervision trees do Elixir para criar sistema resiliente que se recupera automaticamente de falhas.'
      }
    ],
    technologies: [
      { name: 'Elixir', category: 'backend' },
      { name: 'Phoenix', category: 'backend' },
      { name: 'OTP', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' }
    ]
  },
  {
    id: '34',
    title: 'Desenvolvedor Clojure',
    company: 'Functional Programming',
    period: '2020 - 2021',
    description: 'Desenvolvimento de aplicações usando Clojure, aproveitando programação funcional e imutabilidade.',
    highlights: [
      {
        title: 'Sistema Funcional',
        description: 'Desenvolvi sistema completo usando Clojure que é mais conciso e fácil de manter que implementação imperativa equivalente.'
      },
      {
        title: 'Concorrência',
        description: 'Aproveitei estruturas de dados imutáveis e STM do Clojure para criar sistema concorrente sem locks.'
      },
      {
        title: 'Data Processing',
        description: 'Usei Clojure para processar grandes volumes de dados de forma eficiente e elegante.'
      }
    ],
    technologies: [
      { name: 'Clojure', category: 'backend' },
      { name: 'ClojureScript', category: 'frontend' },
      { name: 'Ring', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' }
    ]
  },
  {
    id: '35',
    title: 'Desenvolvedor Scala',
    company: 'Big Data Enterprise',
    period: '2019 - 2020',
    description: 'Desenvolvimento de sistemas distribuídos e processamento de big data usando Scala e frameworks como Spark.',
    highlights: [
      {
        title: 'Spark Jobs',
        description: 'Desenvolvi jobs Spark em Scala que processam terabytes de dados diariamente, transformando e analisando dados eficientemente.'
      },
      {
        title: 'Akka Actors',
        description: 'Implementei sistema distribuído usando Akka Actors, criando sistema resiliente e escalável.'
      },
      {
        title: 'Functional Programming',
        description: 'Aproveitei programação funcional do Scala para criar código mais seguro e testável.'
      }
    ],
    technologies: [
      { name: 'Scala', category: 'backend' },
      { name: 'Apache Spark', category: 'backend' },
      { name: 'Akka', category: 'backend' },
      { name: 'Play Framework', category: 'backend' }
    ]
  },
  {
    id: '36',
    title: 'Desenvolvedor PHP',
    company: 'Web Development Pro',
    period: '2017 - 2018',
    description: 'Desenvolvimento de aplicações web usando PHP moderno, frameworks como Laravel e Symfony.',
    highlights: [
      {
        title: 'API Laravel',
        description: 'Desenvolvi API RESTful completa usando Laravel que serve mais de 1 milhão de requisições diárias.'
      },
      {
        title: 'Sistema de Cache',
        description: 'Implementei sistema de cache multi-camadas que melhorou performance em 80% e reduziu carga no servidor.'
      },
      {
        title: 'Queue System',
        description: 'Configurei sistema de filas usando Laravel Queues, processando jobs assíncronos de forma eficiente.'
      }
    ],
    technologies: [
      { name: 'PHP', category: 'backend' },
      { name: 'Laravel', category: 'backend' },
      { name: 'Symfony', category: 'backend' },
      { name: 'MySQL', category: 'database' },
      { name: 'Redis', category: 'database' }
    ]
  },
  {
    id: '37',
    title: 'Desenvolvedor C++',
    company: 'Performance Critical',
    period: '2018 - 2019',
    description: 'Desenvolvimento de sistemas de alta performance usando C++, focando em otimização e eficiência de recursos.',
    highlights: [
      {
        title: 'Sistema de Alta Performance',
        description: 'Desenvolvi sistema em C++ que processa milhões de operações por segundo com latência sub-milissegundo.'
      },
      {
        title: 'Memory Management',
        description: 'Otimizei gerenciamento de memória usando técnicas avançadas, reduzindo uso de memória em 50%.'
      },
      {
        title: 'Multi-threading',
        description: 'Implementei processamento multi-threaded eficiente, aproveitando todos os cores do processador.'
      }
    ],
    technologies: [
      { name: 'C++', category: 'backend' },
      { name: 'STL', category: 'backend' },
      { name: 'Boost', category: 'backend' },
      { name: 'CMake', category: 'devops' }
    ]
  },
  {
    id: '38',
    title: 'Desenvolvedor C# Desktop',
    company: 'Desktop Applications',
    period: '2017 - 2018',
    description: 'Desenvolvimento de aplicações desktop usando C# e WPF, criando interfaces ricas e responsivas.',
    highlights: [
      {
        title: 'Aplicação Desktop',
        description: 'Desenvolvi aplicação desktop completa que é usada por mais de 10.000 usuários diariamente.'
      },
      {
        title: 'UI/UX Moderna',
        description: 'Criei interface moderna usando WPF com animações e transições suaves, melhorando experiência do usuário.'
      },
      {
        title: 'Performance',
        description: 'Otimizei performance da aplicação, garantindo responsividade mesmo com grandes volumes de dados.'
      }
    ],
    technologies: [
      { name: 'C#', category: 'backend' },
      { name: 'WPF', category: 'frontend' },
      { name: 'MVVM', category: 'frontend' },
      { name: '.NET Framework', category: 'backend' }
    ]
  },
  {
    id: '39',
    title: 'Desenvolvedor Electron',
    company: 'Cross Platform Desktop',
    period: '2019 - 2020',
    description: 'Desenvolvimento de aplicações desktop multiplataforma usando Electron, criando apps que rodam em Windows, Mac e Linux.',
    highlights: [
      {
        title: 'App Multiplataforma',
        description: 'Desenvolvi aplicação Electron que funciona nativamente em Windows, macOS e Linux com código único.'
      },
      {
        title: 'Performance',
        description: 'Otimizei performance do app Electron, reduzindo uso de memória e melhorando tempo de inicialização.'
      },
      {
        title: 'Native Integration',
        description: 'Implementei integrações nativas com sistema operacional, criando experiência mais integrada.'
      }
    ],
    technologies: [
      { name: 'Electron', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Node.js', category: 'backend' }
    ]
  },
  {
    id: '40',
    title: 'Desenvolvedor Tauri',
    company: 'Lightweight Desktop',
    period: '2022 - 2023',
    description: 'Desenvolvimento de aplicações desktop leves usando Tauri, criando apps com bundle mínimo e alta performance.',
    highlights: [
      {
        title: 'App Ultra Leve',
        description: 'Desenvolvi aplicação Tauri que tem bundle de apenas 3MB, muito menor que equivalente Electron.'
      },
      {
        title: 'Performance Nativa',
        description: 'Aproveitei Rust backend do Tauri para criar app com performance nativa e baixo uso de recursos.'
      },
      {
        title: 'Segurança',
        description: 'Aproveitei modelo de segurança do Tauri para criar app mais seguro que alternativas baseadas em webview.'
      }
    ],
    technologies: [
      { name: 'Tauri', category: 'frontend' },
      { name: 'Rust', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' }
    ]
  },
  {
    id: '41',
    title: 'Desenvolvedor WebAssembly',
    company: 'High Performance Web',
    period: '2021 - 2022',
    description: 'Desenvolvimento de módulos WebAssembly para performance crítica no navegador, compilando código de baixo nível para web.',
    highlights: [
      {
        title: 'Módulo WASM',
        description: 'Desenvolvi módulo WebAssembly que processa dados 10x mais rápido que JavaScript equivalente.'
      },
      {
        title: 'Integração com JS',
        description: 'Integrei módulos WASM com aplicação JavaScript, criando solução híbrida de alta performance.'
      },
      {
        title: 'Otimização',
        description: 'Otimizei código WASM para tamanho mínimo e máxima performance, reduzindo bundle e latência.'
      }
    ],
    technologies: [
      { name: 'WebAssembly', category: 'frontend' },
      { name: 'Rust', category: 'backend' },
      { name: 'C++', category: 'backend' },
      { name: 'JavaScript', category: 'frontend' }
    ]
  },
  {
    id: '42',
    title: 'Desenvolvedor Three.js',
    company: '3D Web Experiences',
    period: '2020 - 2021',
    description: 'Desenvolvimento de experiências 3D interativas no navegador usando Three.js e WebGL.',
    highlights: [
      {
        title: 'Experiência 3D',
        description: 'Criei experiência 3D completa no navegador que permite interação em tempo real com modelos 3D complexos.'
      },
      {
        title: 'Performance',
        description: 'Otimizei renderização 3D para manter 60 FPS mesmo em dispositivos móveis, usando técnicas avançadas.'
      },
      {
        title: 'Interatividade',
        description: 'Implementei controles intuitivos e interações fluidas, criando experiência imersiva e envolvente.'
      }
    ],
    technologies: [
      { name: 'Three.js', category: 'frontend' },
      { name: 'WebGL', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' }
    ]
  },
  {
    id: '43',
    title: 'Desenvolvedor WebRTC',
    company: 'Real-time Communication',
    period: '2021 - 2022',
    description: 'Desenvolvimento de aplicações de comunicação em tempo real usando WebRTC, criando videochamadas e streaming.',
    highlights: [
      {
        title: 'Videochamada',
        description: 'Desenvolvi sistema completo de videochamada usando WebRTC que suporta até 10 participantes simultâneos.'
      },
      {
        title: 'Screen Sharing',
        description: 'Implementei compartilhamento de tela e controle remoto, criando experiência colaborativa completa.'
      },
      {
        title: 'Otimização de Rede',
        description: 'Otimizei uso de banda e qualidade de vídeo baseado em condições de rede, garantindo experiência estável.'
      }
    ],
    technologies: [
      { name: 'WebRTC', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Socket.io', category: 'backend' },
      { name: 'React', category: 'frontend' }
    ]
  },
  {
    id: '44',
    title: 'Desenvolvedor PWA',
    company: 'Progressive Web Apps',
    period: '2020 - 2021',
    description: 'Desenvolvimento de Progressive Web Apps, criando experiências web que funcionam como apps nativos.',
    highlights: [
      {
        title: 'PWA Completo',
        description: 'Transformei aplicação web em PWA completo com offline support, push notifications e instalação nativa.'
      },
      {
        title: 'Service Workers',
        description: 'Implementei service workers avançados que permitem funcionamento offline completo e sincronização inteligente.'
      },
      {
        title: 'App-like Experience',
        description: 'Criei experiência que rivaliza com apps nativos, com splash screen, ícone e comportamento nativo.'
      }
    ],
    technologies: [
      { name: 'Service Workers', category: 'frontend' },
      { name: 'Web App Manifest', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'Workbox', category: 'frontend' }
    ]
  },
  {
    id: '45',
    title: 'Desenvolvedor Micro Frontends',
    company: 'Modular Frontend',
    period: '2022 - 2023',
    description: 'Desenvolvimento de arquitetura de micro frontends, criando aplicações modulares e escaláveis.',
    highlights: [
      {
        title: 'Arquitetura Modular',
        description: 'Implementei arquitetura de micro frontends que permite times trabalharem independentemente em diferentes partes da aplicação.'
      },
      {
        title: 'Module Federation',
        description: 'Usei Module Federation do Webpack para criar sistema de micro frontends eficiente e performático.'
      },
      {
        title: 'Deploy Independente',
        description: 'Configurei deploy independente de cada micro frontend, permitindo releases frequentes sem afetar outros módulos.'
      }
    ],
    technologies: [
      { name: 'Module Federation', category: 'frontend' },
      { name: 'Webpack', category: 'devops' },
      { name: 'React', category: 'frontend' },
      { name: 'Single-SPA', category: 'frontend' }
    ]
  },
  {
    id: '46',
    title: 'Desenvolvedor Deno',
    company: 'Modern Runtime',
    period: '2021 - 2022',
    description: 'Desenvolvimento de aplicações usando Deno, aproveitando TypeScript nativo e segurança por padrão.',
    highlights: [
      {
        title: 'API Deno',
        description: 'Desenvolvi API completa usando Deno que aproveita TypeScript nativo e sistema de permissões seguro.'
      },
      {
        title: 'Standard Library',
        description: 'Usei standard library do Deno para criar código mais simples e sem dependências externas desnecessárias.'
      },
      {
        title: 'Security',
        description: 'Aproveitei modelo de segurança do Deno para criar aplicação mais segura que equivalente Node.js.'
      }
    ],
    technologies: [
      { name: 'Deno', category: 'backend' },
      { name: 'TypeScript', category: 'backend' },
      { name: 'Oak', category: 'backend' }
    ]
  },
  {
    id: '47',
    title: 'Desenvolvedor Bun',
    company: 'Fast Runtime',
    period: '2022 - 2023',
    description: 'Desenvolvimento de aplicações usando Bun, aproveitando runtime ultra-rápido e compatibilidade com Node.js.',
    highlights: [
      {
        title: 'Performance',
        description: 'Migrei aplicação Node.js para Bun, melhorando performance em 3x e reduzindo tempo de startup em 80%.'
      },
      {
        title: 'Built-in Tools',
        description: 'Aproveitei ferramentas built-in do Bun (bundler, test runner, package manager) para simplificar stack.'
      },
      {
        title: 'TypeScript Native',
        description: 'Usei suporte nativo a TypeScript do Bun, eliminando necessidade de transpilação e melhorando DX.'
      }
    ],
    technologies: [
      { name: 'Bun', category: 'backend' },
      { name: 'TypeScript', category: 'backend' },
      { name: 'Elysia', category: 'backend' }
    ]
  },
  {
    id: '48',
    title: 'Desenvolvedor Remix',
    company: 'Full Stack Framework',
    period: '2021 - 2022',
    description: 'Desenvolvimento de aplicações full stack usando Remix, aproveitando web standards e performance otimizada.',
    highlights: [
      {
        title: 'App Full Stack',
        description: 'Desenvolvi aplicação completa usando Remix que aproveita server-side rendering e progressive enhancement.'
      },
      {
        title: 'Web Standards',
        description: 'Usei web standards (Forms, Fetch) do Remix para criar código mais simples e alinhado com plataforma web.'
      },
      {
        title: 'Performance',
        description: 'Aproveitei otimizações do Remix para criar app que carrega instantaneamente e tem excelente Core Web Vitals.'
      }
    ],
    technologies: [
      { name: 'Remix', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' }
    ]
  },
  {
    id: '49',
    title: 'Desenvolvedor Astro',
    company: 'Content-Focused',
    period: '2022 - 2023',
    description: 'Desenvolvimento de sites estáticos e conteúdo usando Astro, criando sites ultra-rápidos com JavaScript mínimo.',
    highlights: [
      {
        title: 'Site Ultra Rápido',
        description: 'Desenvolvi site usando Astro que tem Lighthouse score de 100 em todas as métricas, carregando instantaneamente.'
      },
      {
        title: 'Zero JS',
        description: 'Aproveitei zero JS by default do Astro para criar site que envia apenas HTML e CSS, sem JavaScript desnecessário.'
      },
      {
        title: 'Islands Architecture',
        description: 'Usei islands architecture do Astro para adicionar interatividade apenas onde necessário, mantendo performance.'
      }
    ],
    technologies: [
      { name: 'Astro', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' }
    ]
  },
  {
    id: '50',
    title: 'Desenvolvedor Qwik',
    company: 'Resumable Framework',
    period: '2022 - 2023',
    description: 'Desenvolvimento de aplicações usando Qwik, aproveitando resumability e instant loading.',
    highlights: [
      {
        title: 'Instant Loading',
        description: 'Desenvolvi aplicação Qwik que carrega instantaneamente, aproveitando resumability para evitar hydration.'
      },
      {
        title: 'Lazy Loading',
        description: 'Aproveitei lazy loading automático do Qwik para criar app que envia apenas código necessário para cada interação.'
      },
      {
        title: 'Performance',
        description: 'Criei app que tem melhor performance que qualquer framework React, com TTI próximo de zero.'
      }
    ],
    technologies: [
      { name: 'Qwik', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' }
    ]
  }
];

