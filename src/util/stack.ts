import type { IData, ProjectBody } from '@/types'

export const data: IData[] = [
  {
    title: 'Frontend',
    lang: [
      { name: 'HTML, CSS, JavaScript', skill: 4 },
      { name: 'TypeScript', skill: 3 },
      { name: 'ReactJs', skill: 3 },
      { name: 'NextJs', skill: 1 },
      { name: 'React Native', skill: 1 },
    ],
  },
  {
    title: 'Backend',
    lang: [
      { name: 'Python', skill: 1 },
      { name: 'Java (SpringBoot)', skill: 1 },
      { name: 'Node (Express, Fastify)', skill: 2 },
    ],
  },
  {
    title: 'Bancos de Dados',
    lang: [
      { name: 'PostgreSQL', skill: 2 },
      { name: 'MariaDB', skill: 3 },
      { name: 'MySQL', skill: 3 },
      { name: 'MongoDB', skill: 3 },
      { name: 'Redis', skill: 2 },
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
      'Transformei a comunicação visual da recepção criando uma plataforma que permite à equipe atualizar conteúdo remotamente. O que antes demorava horas agora leva minutos, com interface intuitiva para gerenciar imagens, vídeos e mensagens em tempo real.',
    skills: ['Fastify', 'NextJS', 'Docker', 'PostgreSQL', 'Websockets'],
    more: {
      status: 'Concluído',
      technologies: [
        'Node.js',
        'TypeScript',
        'React',
        'PostgreSQL',
        'Prisma',
        'Docker',
        'Jest',
        'Nodemailer',
        'Swagger',
      ],
      context:
        'Desenvolvido para otimizar a comunicação institucional de um colégio, este sistema surgiu da necessidade de modernizar o processo de exibição de conteúdo informativo na recepção. O método anterior exigia edição manual de vídeos para cada atualização, criando gargalos operacionais e limitando a agilidade na comunicação com pais e visitantes.',
      challenges: [
        {
          question: 'Como modernizar a comunicação institucional?',
          answer:
            'Criei um sistema web completo para gerenciamento dinâmico de conteúdo digital, permitindo que a equipe de marketing controle remotamente o que é exibido na televisão da recepção em tempo real, melhorando significativamente o engajamento e a informação dos pais durante a espera.',
        },
        {
          question: 'Como separar quem pode fazer modificações e quem não?',
          answer:
            'Implementei sistema de RBAC (Role-Based Access Control) com middleware de autorização, utilizando o Active Directory para controlar acesso a recursos e cadastrei usuários com permissões específicas, podendo assim especificar que o marketing faria modificações de imagens e videos.',
        },
        {
          question: 'Como evitar de estar acessando a televisão da recepção?',
          answer:
            'Utilizei WebSockets para realizar atualizações em tempo real, permitindo que ao enviar uma nova informação (Video, Foto ou Texto) o sistema atualize o conteúdo na recepção sem interromper a transmissão.',
        },
      ],
      results:
        'O projeto revolucionou a eficiência operacional, substituindo processos manuais de edição de vídeo por uma gestão dinâmica que permite atualizações em segundos. A solução entregue inclui controle completo de multi-mídia (imagens, vídeos e textos), sistema de ativação/desativação de conteúdos e atualizações em tempo real. Com uma interface administrativa intuitiva, a equipe de marketing conseguiu uma redução de 90% no tempo necessário para atualizar conteúdos. O resultado foi uma melhoria significativa no engajamento dos pais com as informações institucionais e flexibilidade total para campanhas sazonais e eventos especiais, tornando a comunicação muito mais ágil e efetiva.',
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
      'Criei um sistema que otimiza automaticamente fotos estudantis para PDFs leves sem perder qualidade. Usado diariamente para identificação de alunos, geração de carômetros e listagem de turmas.',
    skills: ['Fastify', 'NextJS', 'Docker', 'PostgreSQL', 'DDD'],
    more: {
      status: 'Concluído',
      technologies: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Prisma', 'Docker', 'Swagger'],
      context:
        'Desenvolvido para atender demanda específica da gestão escolar: criar um sistema centralizado de identificação fotográfica dos alunos que pudesse exportar dados organizados para outras aplicações institucionais. O objetivo era digitalizar e padronizar o processo de carômetro, facilitando a identificação de estudantes pelos funcionários.',
      challenges: [
        {
          question: 'Como gerar PDFs leves e otimizados?',
          answer:
            'Utilizei a biblioteca PDFKit para gerar PDFs leves e otimizados, garantindo uma qualidade de impressão de alta.',
        },
        {
          question: 'Como armazenar fotos?',
          answer:
            'Utilizei um sistema de armazenamento de arquivos para armazenar fotos em disco rápido e seguro, garantindo a segurança dos dados, porém deixando em aberto a possibilidade de armazenar em outros sistemas de armazenamento como R2 ou S3.',
        },
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
      'Digitalizei completamente o processo de compras institucional, criando um sistema com aprovações hierárquicas e rastreabilidade total. A solução foi tão eficaz que se tornou base para a aplicação padrão em toda a rede educacional.',
    skills: ['Fastify', 'React', 'Prisma', 'PostgreSQL', 'Docker'],
    more: {
      status: 'Concluído',
      technologies: [
        'Node.js',
        'TypeScript',
        'React',
        'PostgreSQL',
        'Prisma',
        'Docker',
        'Jest',
        'Nodemailer',
        'Swagger',
        'Clean Architecture',
      ],
      context:
        'Desenvolvido sob demanda da direção para modernizar o processo de aquisições institucionais. O sistema anterior baseava-se em comunicação verbal e informal, criando falta de rastreabilidade, controle de estoque deficiente e ausência de governança nas aprovações. A necessidade era criar um workflow estruturado que formalizasse pedidos e estabelecesse hierarquia de aprovações.',
      challenges: [
        {
          question: 'Como criar um workflow estruturado para aprovações?',
          answer:
            'Implementei sistema de RBAC (Role-Based Access Control) com middleware de autorização, garantindo que informações sensíveis (como aprovador do pedido) fossem visíveis apenas para níveis hierárquicos apropriados.',
        },
        {
          question: 'Como garantir a transparência e controle de estoque?',
          answer:
            'Utilizei o PostgreSQL para armazenar dados de estoque, permitindo que o sistema mantenha controle de estoque e aprovações, garantindo transparência e segurança.',
        },
        {
          question: 'Como validar se os pedidos são novos ou existentes?',
          answer:
            'Após alguns feedbacks do usuário, implementei um sistema de validação de pedidos, portanto o gestor de compras pode verificar se o pedido já foi comprado, podendo remove-lo da lista de pedidos pendentes de compras.',
        },
      ],
      results:
        'O projeto transformou completamente a operação, saindo de processos informais e verbais para um sistema digitalizado e rastreável. O impacto foi tão positivo que a matriz adotou a solução como padrão para toda a rede educacional, utilizando o meu projeto como base para uma versão melhorada. Na prática, conseguimos formalizar 100% dos pedidos de compra, ter controle total do estoque e das aprovações, além de eliminar praticamente todas as perdas que aconteciam por falta de rastreabilidade. O resultado foi uma operação muito mais transparente e eficiente para toda a equipe.',
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
      'Desenvolvi uma evolução natural do sistema de compras para organizar estoque por unidades e setores. Projetado estrategicamente para futura integração automatizada entre compras e inventário.',
    skills: ['Express', 'React', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    more: {
      status: 'Cancelado',
      technologies: ['Node.js', 'Express', 'TypeScript', 'React', 'PostgreSQL', 'Prisma', 'Docker'],
      context:
        'Desenvolvido como extensão natural do bem-sucedido sistema de compras, este projeto surgiu da necessidade organizacional de ter visibilidade completa do inventário antes de aprovar novas aquisições. O objetivo era eliminar compras desnecessárias através de relatórios precisos que mostrassem disponibilidade real de itens em estoque.',
      challenges: [
        {
          question: 'Como organizar estoque por unidades e setores?',
          answer:
            'Cadastrei diferentes setores e unidades de estoque, permitindo que o gestor de compras pudesse organizar e filtrar os pedidos de compra por unidade e setor.',
        },
        {
          question: 'Como evitar a duplicação de dados?',
          answer:
            'A ideia inicial seria utilizar uma validação de dados para cada tipo de produto, criando um registro exclusivo para cada item, evitando a duplicação de dados.',
        },
      ],
      results:
        'O desenvolvimento foi interrompido devido à migração corporativa para o sistema de compras padronizado da rede.',
    },
  },
  {
    id: 4,
    ProjectName: 'Sistema de Geração Automatizada de Relatórios Pedagógicos',
    images: ['/relatorios/relatorios.png', '/relatorios/relatorios-turma.png', '/relatorios/relatorio.png'],
    description:
      'Eliminei uma semana inteira de trabalho manual por semestre, automatizando completamente a geração de relatórios pedagógicos. Sistema evoluiu com base no feedback dos usuários, incluindo relatórios históricos multi-etapas.',
    skills: ['Express', 'React', 'MariaDB', 'Docker', 'Nginx'],
    more: {
      status: 'Concluído',
      technologies: ['Node.js', 'TypeScript', 'React', 'MariaDB', 'Prisma', 'Docker', 'Nginx', 'Geração de PDF', 'SSL'],
      context:
        'Desenvolvido para resolver um gargalo operacional significativo: professores com diferentes níveis de competência em ferramentas de edição geravam relatórios pedagógicos com formatação inconsistente, demandando 1 semana completa de trabalho manual do setor de TI por semestre apenas para padronização e formatação. A escala do problema era proporcional ao número de alunos da instituição.',
      challenges: [
        {
          question: 'Como gerar relatórios de forma consistente e profissional?',
          answer:
            'Utilizei a biblioteca PDFKit para gerar relatórios de forma consistente e profissional, garantindo uma qualidade de impressão de alta.',
        },
        {
          question: 'Como automatizar o processo de impressão de relatórios?',
          answer:
            'Utilizei o Nodemailer para enviar relatórios gerados por email para a secretaria, que ao receber o email já iniciava o processo de impressão.',
        },
        {
          question: 'Com a necessidade, como liberar o acesso ao sistema pela internet e intranet?',
          answer:
            'Implementei arquitetura híbrida com Nginx como proxy reverso, configurando SSL/TLS para acesso seguro via internet. Esta foi minha primeira experiência com Nginx para produção.',
        },
      ],
      results:
        'O projeto gerou uma economia significativa de recursos, eliminando cerca de 40 horas de trabalho manual do TI por semestre através da automação completa do processo. Além da economia de tempo, a solução trouxe padronização total dos relatórios, permitindo que os professores se concentrassem no conteúdo pedagógico ao invés da formatação. A alta aceitação pelos usuários resultou em feedback positivo e pedidos constantes de melhorias, levando o sistema a evoluir continuamente. O que começou como relatórios simples por etapa se expandiu para um histórico completo, habilitando trabalho remoto com segurança e gerando documentos com qualidade profissional.',
    },
  },
  {
    id: 5,
    ProjectName: 'Plataforma de Monitoramento de Acessos',
    images: ['/log/log-login.png', '/log/log.png'],
    description:
      'Criei uma solução de segurança para monitorar visitantes, melhorando o controle de acesso da empresa. Sistema robusto com autenticação completa e interface intuitiva para gestão.',
    skills: ['Express', 'React', 'MongoDB', 'JWT', 'Active Directory'],
    more: {
      status: 'Concluído',
      technologies: ['Node.js', 'TypeScript', 'React', 'MariaDB', 'Express', 'JWT', 'Active Directory'],
      context:
        'Desenvolvido para monitorar acessos em um usuário visitante cadastrado no ActiveDirectory, buscando melhorar a segurança da empresa. O sistema foi desenvolvido com Node.js, Express e MariaDB, incluindo sistema de autenticação e autorização.',
      challenges: [
        {
          question: 'Como enviar os dados coletados de diferentes computadores?',
          answer:
            'Utilizei uma tecnologia chamada HTA para criação de uma página web que coleta os dados ao acessar a máquina e envia-os para o servidor, caso os dados não sejam enviados, a máquina entra em modo de bloqueio.',
        },
        {
          question: 'Como fazer o HTA criado abrir em todas as máquinas da instituição?',
          answer:
            'Utilizei um GPO para configurar o HTA para abrir em todas as máquinas da instituição que forem acessadas com um usuário em específico.',
        }
      ],
      results:
        'O sistema foi desenvolvido com Node.js, Express e MariaDB, incluindo sistema de autenticação e autorização.',
    },
  },
]
