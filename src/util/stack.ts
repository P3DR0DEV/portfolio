import type { IData, ProjectBody } from "@/types";

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
			{ name: "React Native", skill: 1 },
		],
	},
	{
		title: "Backend",
		lang: [
			{ name: "Node", skill: 2 },
			{ name: "Express", skill: 3 },
			{ name: "Fastify", skill: 1 },
			{ name: "SpringBoot", skill: 1 },
		],
	},
	{
		title: "Languages",
		lang: [
			{ name: "TypeScript", skill: 3 },
			{ name: "JavaScript", skill: 3 },
			{ name: "Python", skill: 1 },
			{ name: "Java", skill: 1 },
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
				name: "Jest",
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
			{
				name: "Git",
				skill: 2,
			},
			{
				name: "Github",
				skill: 3,
			},
			{
				name: "Nvim",
				skill: 2,
			},
			{
				name: "Figma",
				skill: 3,
			},
		],
	},
];

export const projectsData: ProjectBody[] = [
	{
		id: 0,
		ProjectName: "Advertisement System",
		images: [
			"/propagandas/propagandas.jpeg",
			"/propagandas/video.jpeg",
			"/propagandas/login.jpeg",
			"/propagandas/uploads.jpeg",
			"/propagandas/gerencia.jpeg",
			"/propagandas/upload-video.jpeg",
			"/propagandas/videos.jpeg",
			"/propagandas/criar-recado.jpeg",
			"/propagandas/recados.jpeg",
			"/propagandas/criar-user.jpeg",
			"/propagandas/users.jpeg",
		],
		description: [
			"Web Application built to use as a platform to advertise events hosted in the school.",
			"Only admins can create and manage advertisements.",
			"Uses WebSockets to have real-time updates.",
			"It was built using NextJS 15 and TailwindCSS, NodeJs, Fastify, Websockets, PostgreSQL, Jest, and Clean Architecture.",
		],
		skills: [
			"Node.js",
			"Fastify",
			"NextJS 15",
			"Tailwind CSS",
			"PostgreSQL",
			"Websockets",
		],
	},
	{
		id: 1,
		ProjectName: "BHO Shopping",
		images: [
			"/compras/login.png",
			"/compras/novacompra.png",
			"/compras/minhascompras.png",
			"/compras/aprovadas.png",
			"/compras/admview.png",
			"/compras/update.png",
		],
		description: [
			"Web Application built to make a simple way to request, approve or reject a purchase.",
			"Only the admin can approve or reject a purchase.",
			"Each purchase can be updated, rejected, approved.",
			"It was built using TSX and TailwindCSS, NodeJs and PostgreSQL with Prisma ORM.",
			"It was my first time building a backend with Clean-Arch using in memory and databases repositories, and tests.",
		],
		skills: [
			"Node.js",
			"Fastify",
			"React",
			"Tailwind CSS",
			"PostgreSQL",
			"JEST",
			"Clean Architecture",
		],
	},
	{
		id: 2,
		ProjectName: "Storage BHO",
		images: [
			"/estoque/login-estoque.png",
			"/estoque/products.png",
			"/estoque/estoque-novo.png",
			"/estoque/estoque-update.png",
		],
		description: [
			"Web Application built to keep track of what the company have in they storage.",
			"Each product can be updated by adding, subtracting, or removing from the storage, directed to another department or section, and deleted.",
		],
		skills: ["Node.js", "React", "Tailwind CSS", "PostgreSQL"],
	},
	{
		id: 3,
		ProjectName: "Student's Report",
		images: [
			"/relatorios/relatorios.png",
			"/relatorios/relatorios-turma.png",
			"/relatorios/relatorio.png",
		],
		description: [
			"Web Application built to simplify the process of generating standardized PDF student reports each semester, thus improving teacher efficiency and saving time since it was used to generate 300+ reports.",
			"Each student can be updated by changing name and his number, removing from class, update the report, etc. ",
		],
		skills: ["Node.js", "React", "MySQL"],
	},
	{
		id: 4,
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
		id: 5,
		ProjectName: "ToDo List",
		images: ["/todo/todo-cleared.png", "/todo/todo.png"],
		description: [
			"This was my first Web App built using ReactJS and i use it a lot to remind me of what I have to do.",
			"It is a simple todo list built with react and typescript but since it was my first app I have affection for him",
			"That's when I started to get angry with typescript",
		],
		skills: ["React", "TypeScript"],
	},
];
