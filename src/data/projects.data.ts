import type { Project } from '@/types/project.types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Plataforma E-commerce Completa',
    description: 'Sistema completo de e-commerce com gestão de produtos, carrinho, checkout e painel administrativo.',
    longDescription: 'Desenvolvi uma plataforma completa de e-commerce do zero, incluindo sistema de autenticação, gestão de produtos, carrinho de compras, processamento de pagamentos e painel administrativo completo. A plataforma suporta múltiplos métodos de pagamento e integração com sistemas de frete.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Stripe', category: 'backend' },
      { name: 'Redis', category: 'database' }
    ],
    techniques: ['Server-Side Rendering', 'State Management', 'Payment Integration', 'Image Optimization', 'SEO Optimization'],
    projectUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/user/ecommerce',
    status: 'completed',
    year: '2023',
    category: 'E-commerce'
  },
  {
    id: '2',
    title: 'App Mobile de Delivery',
    description: 'Aplicativo mobile para delivery de comida com geolocalização e pagamento integrado.',
    longDescription: 'Desenvolvi um aplicativo mobile completo para delivery de comida, incluindo sistema de geolocalização em tempo real, rastreamento de pedidos, múltiplos métodos de pagamento e notificações push. O app foi desenvolvido para iOS e Android usando React Native.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'TypeScript', category: 'mobile' },
      { name: 'Firebase', category: 'backend' },
      { name: 'Google Maps API', category: 'other' },
      { name: 'Redux', category: 'frontend' }
    ],
    techniques: ['Geolocation', 'Push Notifications', 'Real-time Updates', 'Offline Support', 'Payment Gateway Integration'],
    projectUrl: 'https://apps.apple.com/app/delivery-app',
    githubUrl: 'https://github.com/user/delivery-app',
    status: 'completed',
    year: '2023',
    category: 'Mobile'
  },
  {
    id: '3',
    title: 'Dashboard Analytics em Tempo Real',
    description: 'Dashboard interativo para visualização de dados em tempo real com gráficos e métricas.',
    longDescription: 'Criei um dashboard completo de analytics que processa milhões de eventos diários e apresenta visualizações em tempo real. O sistema inclui gráficos interativos, filtros avançados, exportação de dados e alertas configuráveis.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'D3.js', category: 'frontend' },
      { name: 'WebSocket', category: 'backend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Elasticsearch', category: 'database' }
    ],
    techniques: ['Real-time Data Processing', 'Data Visualization', 'WebSocket Communication', 'Data Aggregation', 'Performance Optimization'],
    projectUrl: 'https://analytics.example.com',
    githubUrl: 'https://github.com/user/analytics-dashboard',
    status: 'completed',
    year: '2023',
    category: 'Analytics'
  },
  {
    id: '4',
    title: 'API RESTful de Alta Performance',
    description: 'API RESTful escalável processando mais de 10.000 requisições por segundo.',
    longDescription: 'Desenvolvi uma API RESTful completa com arquitetura de microserviços, capaz de processar mais de 10.000 requisições por segundo. Implementei cache distribuído, rate limiting, autenticação JWT e documentação completa com Swagger.',
    technologies: [
      { name: 'Node.js', category: 'backend' },
      { name: 'Express', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'Docker', category: 'devops' },
      { name: 'Kubernetes', category: 'devops' }
    ],
    techniques: ['Microservices Architecture', 'Caching Strategies', 'Rate Limiting', 'Load Balancing', 'API Documentation'],
    projectUrl: 'https://api.example.com/docs',
    githubUrl: 'https://github.com/user/high-performance-api',
    status: 'completed',
    year: '2022',
    category: 'Backend'
  },
  {
    id: '5',
    title: 'Sistema de Gestão de Projetos',
    description: 'Plataforma colaborativa para gestão de projetos com kanban, time tracking e relatórios.',
    longDescription: 'Desenvolvi um sistema completo de gestão de projetos com quadro kanban interativo, rastreamento de tempo, atribuição de tarefas, comentários em tempo real e relatórios detalhados. O sistema suporta múltiplos projetos e equipes.',
    technologies: [
      { name: 'Vue.js', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Socket.io', category: 'backend' }
    ],
    techniques: ['Real-time Collaboration', 'Drag and Drop', 'WebSocket Communication', 'File Upload', 'Email Notifications'],
    projectUrl: 'https://projectmanager.example.com',
    githubUrl: 'https://github.com/user/project-manager',
    status: 'completed',
    year: '2022',
    category: 'Productivity'
  },
  {
    id: '6',
    title: 'Plataforma de Streaming de Vídeo',
    description: 'Plataforma completa de streaming de vídeo com transcodificação e CDN.',
    longDescription: 'Criei uma plataforma de streaming de vídeo completa, incluindo upload de vídeos, transcodificação automática em múltiplas resoluções, player customizado, sistema de comentários e recomendações baseadas em IA.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'FFmpeg', category: 'backend' },
      { name: 'AWS S3', category: 'devops' },
      { name: 'CloudFront', category: 'devops' },
      { name: 'PostgreSQL', category: 'database' }
    ],
    techniques: ['Video Processing', 'CDN Integration', 'Adaptive Bitrate Streaming', 'Content Recommendation', 'Video Analytics'],
    projectUrl: 'https://streaming.example.com',
    githubUrl: 'https://github.com/user/video-streaming',
    status: 'completed',
    year: '2022',
    category: 'Media'
  },
  {
    id: '7',
    title: 'Chat em Tempo Real',
    description: 'Aplicação de chat em tempo real com salas, mensagens privadas e compartilhamento de arquivos.',
    longDescription: 'Desenvolvi um sistema completo de chat em tempo real com suporte a múltiplas salas, mensagens privadas, compartilhamento de arquivos, emojis e reações. O sistema usa WebSockets para comunicação instantânea e suporta milhares de usuários simultâneos.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Socket.io', category: 'backend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Redis', category: 'database' }
    ],
    techniques: ['WebSocket Communication', 'Real-time Messaging', 'File Upload', 'Message Encryption', 'Presence System'],
    projectUrl: 'https://chat.example.com',
    githubUrl: 'https://github.com/user/realtime-chat',
    status: 'completed',
    year: '2022',
    category: 'Communication'
  },
  {
    id: '8',
    title: 'Sistema de Autenticação Multi-fator',
    description: 'Sistema robusto de autenticação com 2FA, OAuth2 e SSO.',
    longDescription: 'Implementei um sistema completo de autenticação e autorização com suporte a autenticação multi-fator (2FA), OAuth2, SSO, recuperação de senha e gestão de sessões. O sistema é altamente seguro e escalável.',
    technologies: [
      { name: 'Node.js', category: 'backend' },
      { name: 'Express', category: 'backend' },
      { name: 'JWT', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' }
    ],
    techniques: ['Two-Factor Authentication', 'OAuth2', 'Single Sign-On', 'Session Management', 'Password Hashing'],
    projectUrl: 'https://auth.example.com',
    githubUrl: 'https://github.com/user/auth-system',
    status: 'completed',
    year: '2022',
    category: 'Security'
  },
  {
    id: '9',
    title: 'Marketplace de Serviços',
    description: 'Plataforma marketplace conectando prestadores de serviço com clientes.',
    longDescription: 'Desenvolvi um marketplace completo onde prestadores de serviço podem se cadastrar e clientes podem contratar serviços. O sistema inclui sistema de avaliações, pagamentos, mensagens e agendamento.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Stripe', category: 'backend' }
    ],
    techniques: ['Payment Processing', 'Rating System', 'Search and Filtering', 'Geolocation', 'Email Notifications'],
    projectUrl: 'https://marketplace.example.com',
    githubUrl: 'https://github.com/user/marketplace',
    status: 'completed',
    year: '2021',
    category: 'Marketplace'
  },
  {
    id: '10',
    title: 'Blog com CMS Customizado',
    description: 'Sistema de blog com CMS customizado e editor WYSIWYG.',
    longDescription: 'Criei um sistema completo de blog com CMS customizado, editor WYSIWYG rico, sistema de tags e categorias, comentários, busca e SEO otimizado. O sistema permite publicação fácil de conteúdo.',
    technologies: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Markdown', category: 'other' }
    ],
    techniques: ['Content Management', 'WYSIWYG Editor', 'SEO Optimization', 'Full-text Search', 'RSS Feed'],
    projectUrl: 'https://blog.example.com',
    githubUrl: 'https://github.com/user/blog-cms',
    status: 'completed',
    year: '2021',
    category: 'CMS'
  },
  {
    id: '11',
    title: 'App de Finanças Pessoais',
    description: 'Aplicativo mobile para controle financeiro pessoal com gráficos e relatórios.',
    longDescription: 'Desenvolvi um aplicativo mobile completo para gestão financeira pessoal, incluindo registro de receitas e despesas, categorização automática, gráficos interativos, metas financeiras e exportação de relatórios.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'TypeScript', category: 'mobile' },
      { name: 'Firebase', category: 'backend' },
      { name: 'Recharts', category: 'mobile' }
    ],
    techniques: ['Data Visualization', 'Local Storage', 'Biometric Authentication', 'Export to PDF', 'Budget Tracking'],
    projectUrl: 'https://apps.apple.com/app/finance-app',
    githubUrl: 'https://github.com/user/finance-app',
    status: 'completed',
    year: '2021',
    category: 'Finance'
  },
  {
    id: '12',
    title: 'Sistema de Monitoramento de Servidores',
    description: 'Dashboard para monitoramento de servidores e infraestrutura em tempo real.',
    longDescription: 'Criei um sistema completo de monitoramento de servidores e infraestrutura com métricas em tempo real, alertas configuráveis, dashboards customizáveis e histórico de performance. O sistema monitora CPU, memória, disco e rede.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Prometheus', category: 'devops' },
      { name: 'Grafana', category: 'devops' },
      { name: 'Docker', category: 'devops' }
    ],
    techniques: ['Real-time Monitoring', 'Alert System', 'Metrics Collection', 'Data Visualization', 'Infrastructure as Code'],
    projectUrl: 'https://monitoring.example.com',
    githubUrl: 'https://github.com/user/server-monitoring',
    status: 'completed',
    year: '2021',
    category: 'DevOps'
  },
  {
    id: '13',
    title: 'Plataforma de Cursos Online',
    description: 'Sistema completo de ensino à distância com vídeos, exercícios e certificados.',
    longDescription: 'Desenvolvi uma plataforma completa de cursos online com sistema de vídeos, exercícios interativos, fóruns de discussão, sistema de certificados e painel administrativo para instrutores.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'AWS S3', category: 'devops' }
    ],
    techniques: ['Video Streaming', 'Progress Tracking', 'Certificate Generation', 'Payment Integration', 'Discussion Forums'],
    projectUrl: 'https://courses.example.com',
    githubUrl: 'https://github.com/user/online-courses',
    status: 'completed',
    year: '2021',
    category: 'Education'
  },
  {
    id: '14',
    title: 'Sistema de Agendamento',
    description: 'Plataforma para agendamento de serviços com calendário e notificações.',
    longDescription: 'Criei um sistema completo de agendamento com calendário interativo, múltiplos tipos de serviços, disponibilidade configurável, confirmações por email e SMS, e lembretes automáticos.',
    technologies: [
      { name: 'Vue.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Twilio', category: 'backend' }
    ],
    techniques: ['Calendar Integration', 'Email Notifications', 'SMS Notifications', 'Time Zone Handling', 'Recurring Appointments'],
    projectUrl: 'https://booking.example.com',
    githubUrl: 'https://github.com/user/booking-system',
    status: 'completed',
    year: '2021',
    category: 'Scheduling'
  },
  {
    id: '15',
    title: 'Rede Social para Profissionais',
    description: 'Plataforma de networking profissional com perfis, conexões e feed.',
    longDescription: 'Desenvolvi uma rede social focada em profissionais com perfis detalhados, sistema de conexões, feed de atualizações, mensagens privadas, grupos e eventos.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'GraphQL', category: 'backend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Redis', category: 'database' }
    ],
    techniques: ['Social Graph', 'News Feed Algorithm', 'Real-time Updates', 'File Upload', 'Privacy Controls'],
    projectUrl: 'https://network.example.com',
    githubUrl: 'https://github.com/user/professional-network',
    status: 'completed',
    year: '2020',
    category: 'Social'
  },
  {
    id: '16',
    title: 'Sistema de Gestão de Estoque',
    description: 'Sistema completo para controle de estoque com relatórios e alertas.',
    longDescription: 'Criei um sistema completo de gestão de estoque com controle de entrada e saída, relatórios detalhados, alertas de estoque baixo, integração com fornecedores e código de barras.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Excel Export', category: 'other' }
    ],
    techniques: ['Inventory Management', 'Barcode Scanning', 'Report Generation', 'Low Stock Alerts', 'Supplier Integration'],
    projectUrl: 'https://inventory.example.com',
    githubUrl: 'https://github.com/user/inventory-system',
    status: 'completed',
    year: '2020',
    category: 'Inventory'
  },
  {
    id: '17',
    title: 'Plataforma de Doações',
    description: 'Sistema para arrecadação de doações com transparência e rastreamento.',
    longDescription: 'Desenvolvi uma plataforma completa para arrecadação de doações com sistema de pagamento seguro, transparência total de uso dos recursos, rastreamento de projetos e relatórios detalhados.',
    technologies: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Stripe', category: 'backend' }
    ],
    techniques: ['Payment Processing', 'Transparency Reports', 'Project Tracking', 'Email Campaigns', 'Social Sharing'],
    projectUrl: 'https://donations.example.com',
    githubUrl: 'https://github.com/user/donation-platform',
    status: 'completed',
    year: '2020',
    category: 'Non-profit'
  },
  {
    id: '18',
    title: 'App de Fitness e Treino',
    description: 'Aplicativo mobile para acompanhamento de treinos e progresso físico.',
    longDescription: 'Criei um aplicativo mobile completo de fitness com planos de treino personalizados, acompanhamento de progresso, integração com wearables, receitas saudáveis e comunidade de usuários.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Firebase', category: 'backend' },
      { name: 'HealthKit', category: 'mobile' },
      { name: 'Google Fit', category: 'mobile' }
    ],
    techniques: ['Wearable Integration', 'Progress Tracking', 'Workout Plans', 'Social Features', 'Nutrition Tracking'],
    projectUrl: 'https://apps.apple.com/app/fitness-app',
    githubUrl: 'https://github.com/user/fitness-app',
    status: 'completed',
    year: '2020',
    category: 'Health'
  },
  {
    id: '19',
    title: 'Sistema de Votação Online',
    description: 'Plataforma segura para votações e eleições online.',
    longDescription: 'Desenvolvi um sistema completo de votação online com segurança criptográfica, verificação de identidade, auditoria completa e resultados em tempo real. O sistema garante anonimato e integridade dos votos.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Blockchain', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' }
    ],
    techniques: ['Cryptographic Security', 'Identity Verification', 'Vote Encryption', 'Audit Trail', 'Real-time Results'],
    projectUrl: 'https://voting.example.com',
    githubUrl: 'https://github.com/user/online-voting',
    status: 'completed',
    year: '2020',
    category: 'Governance'
  },
  {
    id: '20',
    title: 'Plataforma de Freelancers',
    description: 'Marketplace conectando freelancers com clientes para projetos.',
    longDescription: 'Criei uma plataforma completa de freelancers onde profissionais podem criar perfis, clientes podem postar projetos, sistema de propostas, pagamentos seguros e sistema de avaliações.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Stripe', category: 'backend' }
    ],
    techniques: ['Profile Management', 'Project Bidding', 'Escrow System', 'Rating System', 'Messaging System'],
    projectUrl: 'https://freelancers.example.com',
    githubUrl: 'https://github.com/user/freelancer-platform',
    status: 'completed',
    year: '2020',
    category: 'Marketplace'
  },
  {
    id: '21',
    title: 'Sistema de CRM',
    description: 'Sistema completo de CRM para gestão de relacionamento com clientes.',
    longDescription: 'Desenvolvi um CRM completo com gestão de leads, pipeline de vendas, histórico de interações, automações de marketing, relatórios e integração com email e telefonia.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Email API', category: 'backend' }
    ],
    techniques: ['Lead Management', 'Sales Pipeline', 'Email Integration', 'Marketing Automation', 'Analytics Dashboard'],
    projectUrl: 'https://crm.example.com',
    githubUrl: 'https://github.com/user/crm-system',
    status: 'completed',
    year: '2019',
    category: 'CRM'
  },
  {
    id: '22',
    title: 'App de Delivery de Medicamentos',
    description: 'Aplicativo para entrega de medicamentos com receita médica.',
    longDescription: 'Criei um aplicativo mobile para delivery de medicamentos com validação de receitas médicas, geolocalização, rastreamento em tempo real e integração com farmácias.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Google Maps', category: 'other' }
    ],
    techniques: ['Prescription Validation', 'Real-time Tracking', 'Geolocation', 'Push Notifications', 'Payment Integration'],
    projectUrl: 'https://apps.apple.com/app/pharmacy-delivery',
    githubUrl: 'https://github.com/user/pharmacy-app',
    status: 'completed',
    year: '2019',
    category: 'Health'
  },
  {
    id: '23',
    title: 'Plataforma de Eventos',
    description: 'Sistema para criação e gestão de eventos com venda de ingressos.',
    longDescription: 'Desenvolvi uma plataforma completa para criação e gestão de eventos com venda de ingressos online, check-in digital, networking entre participantes e relatórios de participação.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'QR Code', category: 'other' }
    ],
    techniques: ['Ticket Sales', 'QR Code Generation', 'Event Management', 'Networking Features', 'Analytics'],
    projectUrl: 'https://events.example.com',
    githubUrl: 'https://github.com/user/event-platform',
    status: 'completed',
    year: '2019',
    category: 'Events'
  },
  {
    id: '24',
    title: 'Sistema de Biblioteca Digital',
    description: 'Plataforma para empréstimo e leitura de livros digitais.',
    longDescription: 'Criei um sistema completo de biblioteca digital com catálogo de livros, sistema de empréstimo, leitor de e-books integrado, recomendações personalizadas e sistema de reservas.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'PDF.js', category: 'frontend' }
    ],
    techniques: ['E-book Reader', 'Recommendation Engine', 'Digital Lending', 'Search System', 'User Profiles'],
    projectUrl: 'https://library.example.com',
    githubUrl: 'https://github.com/user/digital-library',
    status: 'completed',
    year: '2019',
    category: 'Education'
  },
  {
    id: '25',
    title: 'Plataforma de Crowdfunding',
    description: 'Sistema para arrecadação coletiva de fundos para projetos.',
    longDescription: 'Desenvolvi uma plataforma completa de crowdfunding onde criadores podem lançar campanhas, doadores podem contribuir, sistema de recompensas e atualizações de progresso em tempo real.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Stripe', category: 'backend' }
    ],
    techniques: ['Campaign Management', 'Payment Processing', 'Reward System', 'Progress Tracking', 'Social Sharing'],
    projectUrl: 'https://crowdfunding.example.com',
    githubUrl: 'https://github.com/user/crowdfunding',
    status: 'completed',
    year: '2019',
    category: 'Finance'
  },
  {
    id: '26',
    title: 'App de Música e Playlists',
    description: 'Aplicativo mobile para streaming de música e criação de playlists.',
    longDescription: 'Criei um aplicativo mobile completo de streaming de música com reprodução offline, criação de playlists, recomendações baseadas em IA, letras sincronizadas e modo karaokê.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Audio Streaming', category: 'other' }
    ],
    techniques: ['Audio Streaming', 'Offline Playback', 'Music Recommendation', 'Lyrics Sync', 'Playlist Management'],
    projectUrl: 'https://apps.apple.com/app/music-app',
    githubUrl: 'https://github.com/user/music-app',
    status: 'completed',
    year: '2019',
    category: 'Media'
  },
  {
    id: '27',
    title: 'Sistema de Gestão de Frotas',
    description: 'Plataforma para gestão e rastreamento de veículos em tempo real.',
    longDescription: 'Desenvolvi um sistema completo de gestão de frotas com rastreamento GPS em tempo real, manutenção preventiva, relatórios de consumo, rotas otimizadas e alertas de segurança.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Google Maps', category: 'other' },
      { name: 'GPS Tracking', category: 'other' }
    ],
    techniques: ['GPS Tracking', 'Route Optimization', 'Maintenance Scheduling', 'Fuel Management', 'Real-time Alerts'],
    projectUrl: 'https://fleet.example.com',
    githubUrl: 'https://github.com/user/fleet-management',
    status: 'completed',
    year: '2018',
    category: 'Logistics'
  },
  {
    id: '28',
    title: 'Plataforma de Tutoria Online',
    description: 'Sistema para aulas particulares online com vídeo e quadro branco.',
    longDescription: 'Criei uma plataforma completa de tutoria online com videochamadas, quadro branco colaborativo, compartilhamento de tela, gravação de aulas e sistema de pagamentos.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'WebRTC', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' }
    ],
    techniques: ['Video Conferencing', 'Screen Sharing', 'Whiteboard Collaboration', 'Session Recording', 'Payment Integration'],
    projectUrl: 'https://tutoring.example.com',
    githubUrl: 'https://github.com/user/online-tutoring',
    status: 'completed',
    year: '2018',
    category: 'Education'
  },
  {
    id: '29',
    title: 'Sistema de Gestão de Restaurante',
    description: 'Sistema completo para gestão de restaurante com pedidos e estoque.',
    longDescription: 'Desenvolvi um sistema completo para gestão de restaurante incluindo sistema de pedidos, gestão de mesas, controle de estoque, relatórios de vendas e integração com delivery.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Printer Integration', category: 'other' }
    ],
    techniques: ['Order Management', 'Table Management', 'Inventory Control', 'Sales Reports', 'Kitchen Display'],
    projectUrl: 'https://restaurant.example.com',
    githubUrl: 'https://github.com/user/restaurant-management',
    status: 'completed',
    year: '2018',
    category: 'Hospitality'
  },
  {
    id: '30',
    title: 'App de Viagens e Turismo',
    description: 'Aplicativo mobile para planejamento e reserva de viagens.',
    longDescription: 'Criei um aplicativo mobile completo para planejamento de viagens com busca de hotéis, voos, criação de roteiros, recomendações de lugares e compartilhamento de experiências.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Travel APIs', category: 'backend' }
    ],
    techniques: ['Travel Booking', 'Itinerary Planning', 'Location Recommendations', 'Social Sharing', 'Offline Maps'],
    projectUrl: 'https://apps.apple.com/app/travel-app',
    githubUrl: 'https://github.com/user/travel-app',
    status: 'completed',
    year: '2018',
    category: 'Travel'
  },
  {
    id: '31',
    title: 'Plataforma de Recrutamento',
    description: 'Sistema para recrutamento e seleção de candidatos.',
    longDescription: 'Desenvolvi uma plataforma completa de recrutamento com gestão de vagas, sistema de candidaturas, triagem automatizada, agendamento de entrevistas e feedback de candidatos.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'AI Matching', category: 'other' }
    ],
    techniques: ['Candidate Matching', 'Resume Parsing', 'Interview Scheduling', 'Assessment Tests', 'Analytics Dashboard'],
    projectUrl: 'https://recruitment.example.com',
    githubUrl: 'https://github.com/user/recruitment-platform',
    status: 'completed',
    year: '2018',
    category: 'HR'
  },
  {
    id: '32',
    title: 'Sistema de Gestão de Condomínio',
    description: 'Plataforma para gestão completa de condomínios residenciais.',
    longDescription: 'Criei um sistema completo de gestão de condomínio com gestão de moradores, cobrança de taxas, reserva de áreas comuns, comunicação entre moradores e prestação de contas.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Payment Gateway', category: 'backend' }
    ],
    techniques: ['Resident Management', 'Fee Collection', 'Facility Booking', 'Communication System', 'Financial Reports'],
    projectUrl: 'https://condominium.example.com',
    githubUrl: 'https://github.com/user/condominium-management',
    status: 'completed',
    year: '2017',
    category: 'Property'
  },
  {
    id: '33',
    title: 'App de Produtividade',
    description: 'Aplicativo mobile para gestão de tarefas e produtividade.',
    longDescription: 'Desenvolvi um aplicativo mobile completo de produtividade com gestão de tarefas, pomodoro timer, hábitos diários, estatísticas de produtividade e sincronização em nuvem.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Firebase', category: 'backend' },
      { name: 'Local Storage', category: 'mobile' }
    ],
    techniques: ['Task Management', 'Pomodoro Technique', 'Habit Tracking', 'Productivity Analytics', 'Cloud Sync'],
    projectUrl: 'https://apps.apple.com/app/productivity',
    githubUrl: 'https://github.com/user/productivity-app',
    status: 'completed',
    year: '2017',
    category: 'Productivity'
  },
  {
    id: '34',
    title: 'Plataforma de Leilões Online',
    description: 'Sistema para leilões online com lances em tempo real.',
    longDescription: 'Criei uma plataforma completa de leilões online com sistema de lances em tempo real, notificações push, histórico de lances, sistema de pagamentos e verificação de identidade.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Socket.io', category: 'backend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' }
    ],
    techniques: ['Real-time Bidding', 'Push Notifications', 'Payment Processing', 'Identity Verification', 'Auction Management'],
    projectUrl: 'https://auctions.example.com',
    githubUrl: 'https://github.com/user/online-auctions',
    status: 'completed',
    year: '2017',
    category: 'E-commerce'
  },
  {
    id: '35',
    title: 'Sistema de Gestão de Clínicas',
    description: 'Plataforma completa para gestão de clínicas médicas.',
    longDescription: 'Desenvolvi um sistema completo para gestão de clínicas com agendamento de consultas, prontuários eletrônicos, gestão de pacientes, receitas digitais e relatórios médicos.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'HIPAA Compliance', category: 'other' }
    ],
    techniques: ['Appointment Scheduling', 'Electronic Health Records', 'Patient Management', 'Digital Prescriptions', 'Medical Reports'],
    projectUrl: 'https://clinic.example.com',
    githubUrl: 'https://github.com/user/clinic-management',
    status: 'completed',
    year: '2017',
    category: 'Health'
  },
  {
    id: '36',
    title: 'App de Culinária e Receitas',
    description: 'Aplicativo mobile com receitas, lista de compras e modo passo a passo.',
    longDescription: 'Criei um aplicativo mobile completo de culinária com milhares de receitas, modo passo a passo com timer, lista de compras integrada, vídeos tutoriais e sistema de favoritos.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' }
    ],
    techniques: ['Recipe Management', 'Step-by-step Guide', 'Shopping List', 'Video Integration', 'Favorites System'],
    projectUrl: 'https://apps.apple.com/app/recipes',
    githubUrl: 'https://github.com/user/recipe-app',
    status: 'completed',
    year: '2017',
    category: 'Food'
  },
  {
    id: '37',
    title: 'Plataforma de Investimentos',
    description: 'Sistema para gestão e acompanhamento de investimentos.',
    longDescription: 'Desenvolvi uma plataforma completa de investimentos com carteira de ativos, acompanhamento de performance, gráficos interativos, notícias financeiras e simulação de investimentos.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Financial APIs', category: 'backend' }
    ],
    techniques: ['Portfolio Management', 'Performance Tracking', 'Financial Charts', 'News Integration', 'Investment Simulation'],
    projectUrl: 'https://investments.example.com',
    githubUrl: 'https://github.com/user/investment-platform',
    status: 'completed',
    year: '2016',
    category: 'Finance'
  },
  {
    id: '38',
    title: 'Sistema de Gestão de Escolas',
    description: 'Plataforma completa para gestão escolar.',
    longDescription: 'Criei um sistema completo de gestão escolar com matrículas, notas, frequência, comunicação com pais, portal do aluno e relatórios acadêmicos.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' }
    ],
    techniques: ['Student Management', 'Grade Management', 'Attendance Tracking', 'Parent Communication', 'Academic Reports'],
    projectUrl: 'https://school.example.com',
    githubUrl: 'https://github.com/user/school-management',
    status: 'completed',
    year: '2016',
    category: 'Education'
  },
  {
    id: '39',
    title: 'App de Meditação e Bem-estar',
    description: 'Aplicativo mobile para meditação guiada e bem-estar mental.',
    longDescription: 'Desenvolvi um aplicativo mobile completo de meditação com sessões guiadas, música relaxante, rastreamento de progresso, desafios diários e estatísticas de bem-estar.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Firebase', category: 'backend' },
      { name: 'Audio Player', category: 'mobile' }
    ],
    techniques: ['Guided Meditation', 'Audio Streaming', 'Progress Tracking', 'Daily Challenges', 'Wellness Statistics'],
    projectUrl: 'https://apps.apple.com/app/meditation',
    githubUrl: 'https://github.com/user/meditation-app',
    status: 'completed',
    year: '2016',
    category: 'Health'
  },
  {
    id: '40',
    title: 'Plataforma de Marketplace B2B',
    description: 'Marketplace para transações entre empresas.',
    longDescription: 'Criei uma plataforma completa de marketplace B2B com catálogo de produtos, sistema de cotações, gestão de pedidos, integração com ERP e sistema de avaliações.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' }
    ],
    techniques: ['B2B Marketplace', 'Quote System', 'Order Management', 'ERP Integration', 'Rating System'],
    projectUrl: 'https://b2b-marketplace.example.com',
    githubUrl: 'https://github.com/user/b2b-marketplace',
    status: 'completed',
    year: '2016',
    category: 'B2B'
  },
  {
    id: '41',
    title: 'Sistema de Gestão de Hotéis',
    description: 'Plataforma completa para gestão hoteleira.',
    longDescription: 'Desenvolvi um sistema completo de gestão de hotéis com reservas, check-in/check-out, gestão de quartos, faturamento e relatórios de ocupação.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Payment Gateway', category: 'backend' }
    ],
    techniques: ['Reservation Management', 'Room Management', 'Billing System', 'Occupancy Reports', 'Guest Management'],
    projectUrl: 'https://hotel.example.com',
    githubUrl: 'https://github.com/user/hotel-management',
    status: 'completed',
    year: '2015',
    category: 'Hospitality'
  },
  {
    id: '42',
    title: 'App de Idiomas',
    description: 'Aplicativo mobile para aprendizado de idiomas com gamificação.',
    longDescription: 'Criei um aplicativo mobile completo de aprendizado de idiomas com lições interativas, reconhecimento de voz, sistema de gamificação, flashcards e acompanhamento de progresso.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Speech Recognition', category: 'mobile' }
    ],
    techniques: ['Interactive Lessons', 'Speech Recognition', 'Gamification', 'Flashcards', 'Progress Tracking'],
    projectUrl: 'https://apps.apple.com/app/language-learning',
    githubUrl: 'https://github.com/user/language-app',
    status: 'completed',
    year: '2015',
    category: 'Education'
  },
  {
    id: '43',
    title: 'Plataforma de Streaming de Podcasts',
    description: 'Sistema para streaming e descoberta de podcasts.',
    longDescription: 'Desenvolvi uma plataforma completa de podcasts com player integrado, descoberta de conteúdo, sistema de assinaturas, playlists e recomendações personalizadas.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Audio Streaming', category: 'other' }
    ],
    techniques: ['Audio Streaming', 'Content Discovery', 'Subscription System', 'Playlist Management', 'Recommendations'],
    projectUrl: 'https://podcasts.example.com',
    githubUrl: 'https://github.com/user/podcast-platform',
    status: 'completed',
    year: '2015',
    category: 'Media'
  },
  {
    id: '44',
    title: 'Sistema de Gestão de Imóveis',
    description: 'Plataforma para gestão e venda de imóveis.',
    longDescription: 'Criei um sistema completo de gestão de imóveis com catálogo de propriedades, busca avançada, tour virtual 360°, agendamento de visitas e gestão de contratos.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: '360° Viewer', category: 'frontend' }
    ],
    techniques: ['Property Listing', 'Advanced Search', 'Virtual Tours', 'Visit Scheduling', 'Contract Management'],
    projectUrl: 'https://realestate.example.com',
    githubUrl: 'https://github.com/user/real-estate',
    status: 'completed',
    year: '2015',
    category: 'Real Estate'
  },
  {
    id: '45',
    title: 'App de Notícias Personalizadas',
    description: 'Aplicativo mobile com feed de notícias personalizado.',
    longDescription: 'Desenvolvi um aplicativo mobile completo de notícias com feed personalizado baseado em IA, categorias customizáveis, modo offline, compartilhamento social e notificações push.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'News APIs', category: 'backend' }
    ],
    techniques: ['AI Personalization', 'Offline Reading', 'Push Notifications', 'Social Sharing', 'Category Customization'],
    projectUrl: 'https://apps.apple.com/app/news-app',
    githubUrl: 'https://github.com/user/news-app',
    status: 'completed',
    year: '2014',
    category: 'Media'
  },
  {
    id: '46',
    title: 'Plataforma de Gestão de Projetos Ágeis',
    description: 'Sistema completo para metodologias ágeis com sprints e kanban.',
    longDescription: 'Criei uma plataforma completa de gestão ágil com sprints, kanban, burndown charts, retrospectivas, velocity tracking e integração com ferramentas de desenvolvimento.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'GitHub API', category: 'backend' }
    ],
    techniques: ['Sprint Planning', 'Kanban Board', 'Burndown Charts', 'Velocity Tracking', 'Git Integration'],
    projectUrl: 'https://agile.example.com',
    githubUrl: 'https://github.com/user/agile-platform',
    status: 'completed',
    year: '2014',
    category: 'Productivity'
  },
  {
    id: '47',
    title: 'Sistema de Gestão de Transporte',
    description: 'Plataforma para gestão de transporte público e privado.',
    longDescription: 'Desenvolvi um sistema completo de gestão de transporte com rastreamento de veículos, otimização de rotas, gestão de passageiros, bilhetagem eletrônica e relatórios operacionais.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'GPS Tracking', category: 'other' }
    ],
    techniques: ['Vehicle Tracking', 'Route Optimization', 'Passenger Management', 'Electronic Ticketing', 'Operational Reports'],
    projectUrl: 'https://transport.example.com',
    githubUrl: 'https://github.com/user/transport-management',
    status: 'completed',
    year: '2014',
    category: 'Logistics'
  },
  {
    id: '48',
    title: 'App de Compartilhamento de Carros',
    description: 'Aplicativo mobile para carona e compartilhamento de veículos.',
    longDescription: 'Criei um aplicativo mobile completo de compartilhamento de carros com busca de rotas, sistema de avaliações, pagamento integrado, rastreamento em tempo real e histórico de viagens.',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Google Maps', category: 'other' },
      { name: 'Payment Gateway', category: 'backend' }
    ],
    techniques: ['Ride Matching', 'Real-time Tracking', 'Rating System', 'Payment Integration', 'Trip History'],
    projectUrl: 'https://apps.apple.com/app/car-sharing',
    githubUrl: 'https://github.com/user/car-sharing',
    status: 'completed',
    year: '2014',
    category: 'Transportation'
  },
  {
    id: '49',
    title: 'Plataforma de Gestão de Conteúdo',
    description: 'Sistema CMS completo com editor visual e versionamento.',
    longDescription: 'Desenvolvi um CMS completo com editor visual WYSIWYG, versionamento de conteúdo, workflow de aprovação, multi-idioma, SEO otimizado e sistema de plugins.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Rich Text Editor', category: 'frontend' }
    ],
    techniques: ['Visual Editor', 'Content Versioning', 'Approval Workflow', 'Multi-language', 'SEO Optimization'],
    projectUrl: 'https://cms.example.com',
    githubUrl: 'https://github.com/user/content-management',
    status: 'completed',
    year: '2013',
    category: 'CMS'
  },
  {
    id: '50',
    title: 'Sistema de Gestão de Assinaturas',
    description: 'Plataforma completa para gestão de assinaturas recorrentes.',
    longDescription: 'Criei um sistema completo de gestão de assinaturas com múltiplos planos, cobrança recorrente automática, upgrade/downgrade de planos, gestão de cancelamentos e analytics de retenção.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Stripe', category: 'backend' },
      { name: 'Webhooks', category: 'backend' }
    ],
    techniques: ['Subscription Management', 'Recurring Billing', 'Plan Management', 'Churn Analysis', 'Payment Webhooks'],
    projectUrl: 'https://subscriptions.example.com',
    githubUrl: 'https://github.com/user/subscription-management',
    status: 'completed',
    year: '2013',
    category: 'SaaS'
  }
];

