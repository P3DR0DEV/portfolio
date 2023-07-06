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
  description: string[]
}
