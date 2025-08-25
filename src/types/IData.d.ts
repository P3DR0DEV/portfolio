interface Languages {
  name: string
  skill: number
}

export interface IData {
  title: string
  lang: Languages[]
}

type Image = string
export interface ProjectBody {
  id?: number
  ProjectName: string
  images: Image[]
  description: string
  skills: string[]
  more: {
    status: 'Concluído' | 'Em andamento' | 'Cancelado'
    technologies: string[]
    context: string
    challenges: string[]  
    results: string 
  }
}
