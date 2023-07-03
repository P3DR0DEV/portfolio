import { IData } from "@/types"

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
      { name: "Python", skill: 2 },
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
    ],
  },
]
