import { IData, ProjectBody } from "@/types"

export const data: IData[] = [
  {
    title: "Frontend",
    lang: [
      { name: "JavaScript", skill: 3 },
      { name: "ReactJs", skill: 3 },
      { name: "HTML", skill: 4 },
      { name: "CSS", skill: 3 },
      { name: "Tailwind CSS", skill: 3 },
      { name: "NextJs", skill: 1 },
    ],
  },
  {
    title: "Backend",
    lang: [
      { name: "Node", skill: 2 },
      { name: "Express", skill: 3 },
    ],
  },
  {
    title: "Languages",
    lang: [
      { name: "TypeScript", skill: 3 },
      { name: "JavaScript", skill: 3 },
      { name: "Python", skill: 1 },
    ],
  },
  {
    title: "Databases",
    lang: [
      { name: "PostgreSQL", skill: 2 },
      { name: "MariaDB", skill: 3 },
      { name: "MySQL", skill: 3 },
      { name: "MongoDB", skill: 3 },
    ],
  },
  {
    title: "Others",
    lang: [
      {
        name: "Docker",
        skill: 2,
      },
      {
        name: "Vercel",
        skill: 1,
      },
      {
        name: "Linux",
        skill: 3,
      },
      { name: "Git", skill: 2 },
    ],
  },
]

export const projectsData: ProjectBody[] = [
  {
    id: 1,
    ProjectName: "Storage BHO",
    images: [
      "/estoque/login-estoque.png",
      "/estoque/products.png",
      "/estoque/estoque-novo.png",
      "/estoque/estoque-update.png",
    ],
    description: [
      "Web Application built to keep track of what the company have in they storage.",
      "Each product can be updated by adding, subtracting, or removing from the storage, directed to another department or section, and deleted. ",
      "It was built using TSX (React with TypeScript) and TailwindCSS, NodeJs (Express) and PostgreSQL with Prisma ORM.",
    ],
    skills: ["Node.js", "React", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: 2,
    ProjectName: "Student's Report",
    images: [
      "/relatorios/relatorios.png",
      "/relatorios/relatorios-turma.png",
      "/relatorios/relatorio.png",
    ],
    description: [
      "Web Application built to simplify the process of generating patternized PDF student reports each semester, thus improving teacher efficiency and saving time since it was used to generate 300+ reports.",
      "Each student can be updated by changing name and his number, removing from class, update the report, etc. ",
      "It was built using TSX (React with TypeScript), NodeJs (Express) and MYSQL with Sequelize ORM.",
    ],
    skills: ["Node.js", "React", "MySQL"],
  },
  {
    id: 3,
    ProjectName: "Web Monitoring Platform",
    images: ["/log/log-login.png", "/log/log.png"],
    description: [
      "Web Application built to safeguard the company against potential cybercrimes by maintaining essential guest user details.",
      "In the 1.0 version it was built using NodeJS (Express) and EJS (View Engine) and MariaDB",
      "To enhance performance, system security and code readability in the version 2.0 I splitted the monolith to a front-end TSX (React with TypeScript) and the back-end NodeJs (Express) and MariaDB with Sequelize ORM.",
    ],
    skills: ["Node.js", "React", "MongoDB"],
  },
  {
    id: 4,
    ProjectName: "ToDo List",
    images: ["/todo/todo-cleared.png", "/todo/todo.png"],
    description: [
      "This was my first Web App built using ReactJS and i use it a lot to remind me of what I have to do.",
      "It is a simple todo list built with react and typescript but since it was my first app I have affection for him",
      "That's when I started to get angry with typescript",
    ],
    skills: ["React", "TypeScript"],
  },
]
