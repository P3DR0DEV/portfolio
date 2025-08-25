import type { ProjectBody } from '@/types'
import { Badge } from '../ui/badge'
import { Carousel } from './Carousel'
import { DetailsDialog } from './DetailsDialog'

interface ProjectBodyProps extends ProjectBody {
  isOdd: boolean
}

export function ProjectCard({ ProjectName, description, images, isOdd, skills, more }: ProjectBodyProps) {
  return (
    <div
      className={
        isOdd
          ? `flex flex-col md:flex-row md:justify-between md:gap-7`
          : `flex flex-col md:flex-row-reverse md:justify-between md:gap-7`
      }
    >
      <div className="xl:w-[700px] md:w-[600px]">
        <Carousel images={images} />
      </div>
      <div className="md:max-w-[40%] text-justify flex flex-col gap-2 justify-around ">
        <div className="gap-3 flex flex-col">
          <h3 className="text-3xl font-bold">{ProjectName}</h3>
          <p className="text-xl">{description}</p>
          <DetailsDialog name={ProjectName} more={more} />
        </div>
        <div className="flex gap-4 flex-wrap">
          {skills.map((tag) => (
            <Badge key={tag} variant="outline" className="px-4 py-2 rounded-full text-sm font-light">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
