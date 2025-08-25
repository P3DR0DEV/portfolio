import type { IData, ProjectBody } from '@/types'

export const data: IData[] = [
  {
    title: 'Frontend',
    lang: [
      { name: 'JavaScript', skill: 3 },
      { name: 'ReactJs', skill: 3 },
      { name: 'HTML', skill: 4 },
      { name: 'CSS', skill: 3 },
      { name: 'Tailwind CSS', skill: 3 },
      { name: 'NextJs', skill: 1 },
      { name: 'React Native', skill: 1 },
    ],
  },
  {
    title: 'Backend',
    lang: [
      { name: 'Node', skill: 2 },
      { name: 'Express', skill: 3 },
      { name: 'Fastify', skill: 1 },
      { name: 'SpringBoot', skill: 1 },
    ],
  },
  {
    title: 'Linguagens',
    lang: [
      { name: 'TypeScript', skill: 3 },
      { name: 'JavaScript', skill: 3 },
      { name: 'Python', skill: 1 },
      { name: 'Java', skill: 1 },
    ],
  },
  {
    title: 'Bancos de Dados',
    lang: [
      { name: 'PostgreSQL', skill: 2 },
      { name: 'MariaDB', skill: 3 },
      { name: 'MySQL', skill: 3 },
      { name: 'MongoDB', skill: 3 },
    ],
  },
  {
    title: 'Outros',
    lang: [
      {
        name: 'Docker',
        skill: 2,
      },
      {
        name: 'Jest',
        skill: 2,
      },
      {
        name: 'Vercel',
        skill: 1,
      },
      {
        name: 'Linux',
        skill: 3,
      },
      {
        name: 'Git',
        skill: 2,
      },
      {
        name: 'Github',
        skill: 3,
      },
      {
        name: 'Nvim',
        skill: 2,
      },
      {
        name: 'Figma',
        skill: 3,
      },
    ],
  },
]

export const projectsData: ProjectBody[] = [
  {
    id: 0,
    ProjectName: 'Sistema de Gestão de Conteúdo Digital',
    images: [
      '/propagandas/propagandas.jpeg',
      '/propagandas/video.jpeg',
      '/propagandas/login.jpeg',
      '/propagandas/uploads.jpeg',
      '/propagandas/gerencia.jpeg',
      '/propagandas/upload-video.jpeg',
      '/propagandas/videos.jpeg',
      '/propagandas/criar-recado.jpeg',
      '/propagandas/recados.jpeg',
      '/propagandas/criar-user.jpeg',
      '/propagandas/users.jpeg',
    ],
    description:
      'Sistema completo para gerenciamento dinâmico de conteúdo digital em kiosk educacional. Desenvolvido com Clean Architecture, Node.js, Next.js e comunicação em tempo real via WebSocket. Reduziu em 90% o tempo de atualização de conteúdo, substituindo processo manual por plataforma intuitiva que permite à equipe de marketing controlar remotamente imagens, vídeos e mensagens exibidas na recepção.',
    skills: ['Node.js', 'Fastify', 'NextJS', 'Docker', 'PostgreSQL', 'Websockets', 'Vitest'],
    more: {
      status: 'Concluído',
      technologies: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Prisma', 'Docker', 'Jest', 'Nodemailer', 'Swagger'],
      context:
        'Desenvolvido sob demanda da direção para modernizar o processo de aquisições institucionais. O sistema anterior baseava-se em comunicação verbal e informal, criando falta de rastreabilidade, controle de estoque deficiente e ausência de governança nas aprovações. A necessidade era criar um workflow estruturado que formalizasse pedidos e estabelecesse hierarquia de aprovações.',
      challenges:[
        'Arquitetei sistema robusto com Nodemailer, logs de entrega para garantir comunicação eficaz.','Implementei sistema de RBAC (Role-Based Access Control) com middleware de autorização, garantindo que informações sensíveis (como aprovador do pedido) fossem visíveis apenas para níveis hierárquicos apropriados'
      ],
      results:
        'A solução promoveu uma transformação operacional completa, substituindo processos verbais e informais por um workflow digitalizado, auditável e governado. O reconhecimento institucional foi imediato, com a solução sendo apresentada e aprovada pela matriz, servindo como base para implementação em toda a rede educacional e estabelecendo um novo padrão de processos digitais na organização. Os benefícios mensuráveis incluem a formalização de 100% dos pedidos de compra, controle total de estoque e aprovações, transparência completa no processo decisório e redução drástica de perdas por falta de rastreabilidade. Esta implementação demonstrou como a digitalização estratégica pode gerar impactos significativos tanto operacionais quanto organizacionais, criando valor sustentável para toda a instituição.',
    },  
  },
  {
    id: 1,
    ProjectName: 'Sistema de Carômetro Digital para Identificação Estudantil',
    images: [
      '/carometro/frontpage.png',
      '/carometro/login.png',
      '/carometro/years.png',
      '/carometro/classes.png',
      '/carometro/flex-view.png',
      '/carometro/grid.png',
      '/carometro/update.png',
      '/carometro/pdf.png',
    ],
    description:
      'Plataforma de gestão de fotos estudantis com otimização inteligente de imagens para geração de PDFs leves sem perda de qualidade. Sistema permanece em produção para identificação diária de alunos.',
    skills: ['Node.js', 'Fastify', 'NextJS', 'Docker', 'PostgreSQL', 'DDD'],
    more: {
      status: 'Concluído',
      technologies: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Prisma', 'Docker', 'Swagger'],
      context:
        'Desenvolvido para atender demanda específica da gestão escolar: criar um sistema centralizado de identificação fotográfica dos alunos que pudesse exportar dados organizados para outras aplicações institucionais. O objetivo era digitalizar e padronizar o processo de carômetro, facilitando a identificação de estudantes pelos funcionários.',
      challenges:[
        'Fotos de alta qualidade geravam PDFs excessivamente pesados, impactando performance e armazenamento.'
      ],
      results:
        'O sistema está em operação contínua desde sua implementação, sendo usado diariamente pela equipe para identificação de alunos com total estabilidade. A flexibilidade da plataforma permite tanto visualização digital quanto impressão quando necessário. Processo de identificação muito mais eficiente e moderno, que se tornou parte essencial da rotina operacional da instituição.',
    },  
  },
  {
    id: 2,
    ProjectName: 'Sistema de Gestão de Pedidos de Compras Corporativas',
    images: [
      '/compras/login.png',
      '/compras/novacompra.png',
      '/compras/minhascompras.png',
      '/compras/aprovadas.png',
      '/compras/admview.png',
      '/compras/update.png',
    ],
    description:
      'Plataforma completa de workflow para pedidos de compras institucionais, transformando processo informal em sistema estruturado com aprovações hierárquicas e rastreabilidade completa. Desenvolvido com Clean Architecture e TDD, incluindo sistema de notificações por email e controle granular de permissões. Solução foi tão eficaz que se tornou base para sistema corporativo de toda a rede educacional.',
    skills: ['Node.js', 'Fastify', 'React', 'Prisma', 'Jest', 'PostgreSQL', 'Docker', 'Clean Architecture'],
    more: {
      status: 'Concluído',
      technologies: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Prisma', 'Docker', 'Jest', 'Nodemailer', 'Swagger'],
      context:
        'Desenvolvido sob demanda da direção para modernizar o processo de aquisições institucionais. O sistema anterior baseava-se em comunicação verbal e informal, criando falta de rastreabilidade, controle de estoque deficiente e ausência de governança nas aprovações. A necessidade era criar um workflow estruturado que formalizasse pedidos e estabelecesse hierarquia de aprovações.',
      challenges: [
        'Implementei sistema de RBAC (Role-Based Access Control) com middleware de autorização, garantindo que informações sensíveis (como aprovador do pedido) fossem visíveis apenas para níveis hierárquicos apropriados',],
      results:'O projeto transformou completamente a operação, saindo de processos informais e verbais para um sistema digitalizado e rastreável. O impacto foi tão positivo que a matriz adotou a solução como padrão para toda a rede educacional, utilizando o meu projeto como base para uma versão melhorada. Na prática, conseguimos formalizar 100% dos pedidos de compra, ter controle total do estoque e das aprovações, além de eliminar praticamente todas as perdas que aconteciam por falta de rastreabilidade. O resultado foi uma operação muito mais transparente e eficiente para toda a equipe.',
    },
  },
  {
    id: 3,
    ProjectName: 'Sistema de Controle de Estoque Multi-Unidades',
    images: [
      '/estoque/login-estoque.png',
      '/estoque/products.png',
      '/estoque/estoque-novo.png',
      '/estoque/estoque-update.png',
    ],
    description:
      'Sistema de gestão de inventário desenvolvido como evolução natural do sistema de compras, organizando estoque por unidades e setores para otimizar decisões de aquisição. Arquitetado para futura integração automatizada entre compras e inventário. Demonstra capacidade de pensar em ecossistemas integrados e arquitetura evolutiva',
    skills: ['Node.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Express', 'Docker'],
    more: {
      status: 'Cancelado',
      technologies: ['Node.js','Express', 'TypeScript', 'React', 'PostgreSQL', 'Prisma', 'Docker'],
      context: 'Desenvolvido como extensão natural do bem-sucedido sistema de compras, este projeto surgiu da necessidade organizacional de ter visibilidade completa do inventário antes de aprovar novas aquisições. O objetivo era eliminar compras desnecessárias através de relatórios precisos que mostrassem disponibilidade real de itens em estoque.',
      challenges: ['Arquitetar a comunicação entre os sistemas de compras e estoque.', 'Evitar a duplicação de dados inseridos no sistema de estoque, evitando erros de análise de dados.'],
      results: 'O desenvolvimento foi interrompido devido à migração corporativa para sistema padronizado da rede, demonstrando como decisões organizacionais podem impactar projetos técnicos mesmo quando bem arquitetados.',
    },
  },
  {
    id: 4,
    ProjectName: 'Sistema de Geração Automatizada de Relatórios Pedagógicos',
    images: ['/relatorios/relatorios.png', '/relatorios/relatorios-turma.png', '/relatorios/relatorio.png'],
    description:
      'Plataforma que automatizou completamente a geração de relatórios pedagógicos, eliminando 1 semana de trabalho manual por semestre do setor de TI. Sistema com controle de acesso hierárquico, geração de PDFs padronizados e infraestrutura híbrida intranet/internet com Nginx e SSL. Incluiu evolução para relatórios históricos multi-etapas após feedback dos usuários.',
    skills: ['Node.js', 'React', 'MariaDB', 'Express', 'Docker', 'Nginx', 'SSL'],
    more: {
      status: 'Concluído',
      technologies: ['Node.js', 'TypeScript', 'React', 'MariaDB', 'Prisma', 'Docker', 'Nginx', 'Geração de PDF', 'SSL'],
      context:
        'Desenvolvido para resolver um gargalo operacional significativo: professores com diferentes níveis de competência em ferramentas de edição geravam relatórios pedagógicos com formatação inconsistente, demandando 1 semana completa de trabalho manual do setor de TI por semestre apenas para padronização e formatação. A escala do problema era proporcional ao número de alunos da instituição.',
      challenges: [
        'Implementei arquitetura híbrida com Nginx como proxy reverso, configurando SSL/TLS para acesso seguro via internet. Primeira experiência com Nginx para produção.',
        'Desenvolver um sistema robusto de geração de PDFs com templates consistentes, campos dinâmicos e formatação profissional',
      ],
      results:'O projeto gerou uma economia significativa de recursos, eliminando cerca de 40 horas de trabalho manual do TI por semestre através da automação completa do processo. Além da economia de tempo, a solução trouxe padronização total dos relatórios, permitindo que os professores se concentrassem no conteúdo pedagógico ao invés da formatação. A alta aceitação pelos usuários resultou em feedback positivo e pedidos constantes de melhorias, levando o sistema a evoluir continuamente. O que começou como relatórios simples por etapa se expandiu para um histórico completo, habilitando trabalho remoto com segurança e gerando documentos com qualidade profissional.',
    },
  },
  {
    id: 5,
    ProjectName: 'Plataforma de Monitoramento de Acessos',
    images: ['/log/log-login.png', '/log/log.png'],
    description:
      'Plataforma de monitoramento de acessos em usuários visitantes, buscando melhorar a segurança da empresa. Desenvolvido com Node.js, Express e MariaDB, incluindo sistema de autenticação e autorização.',
    skills: ['Node.js', 'React', 'MongoDB', 'Express', 'JWT', 'Active Directory'],
    more: {
      status: 'Concluído',
      technologies: ['Node.js', 'TypeScript', 'React', 'MariaDB', 'Express', 'JWT', 'Active Directory'],
      context:
        'Desenvolvido para monitorar acessos em um usuário visitante cadastrado no ActiveDirectory, buscando melhorar a segurança da empresa. O sistema foi desenvolvido com Node.js, Express e MariaDB, incluindo sistema de autenticação e autorização.',
      challenges: ['Desenvolver um sistema robusto de autenticação e autorização.', 'Implementar um sistema de monitoramento de acessos.', 'Promover a comunicação entre os sistemas de monitoramento e autenticação nas máquinas da instituição.'],
      results: 'O sistema foi desenvolvido com Node.js, Express e MariaDB, incluindo sistema de autenticação e autorização.',
    }
  },
  {
    id: 6,
    ProjectName: 'ToDo List',
    images: ['/todo/todo-cleared.png', '/todo/todo.png'],
    description:
      'Todo List é um aplicativo simples desenvolvido com ReactJS e TypeScript, usado para lembrar de tarefas e eventos importantes. Foi o primeiro aplicativo desenvolvido com React e TypeScript e me inspirou a criar outros aplicativos com esses frameworks.',
    skills: ['React', 'TypeScript'],
    more: {
      status: 'Concluído',
      technologies: ['React', 'TypeScript'],
      context: 'Desenvolvido para estudar os conceitos básicos de React e TypeScript, incluindo componentes, props, estados e hooks. O sistema foi desenvolvido com React e TypeScript.',
      challenges: ['Compreender os conceitos básicos de React e TypeScript.', 'Desenvolver um sistema simples de lista de tarefas.', 'Utilizar o TypeScript para validar os dados inseridos.'],
      results: 'O sistema foi desenvolvido com React e TypeScript e até hoje utilizo com frequência essa combinação de ferramentas.',
    }
  },
]
