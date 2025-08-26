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
          ? `flex flex-col lg:flex-row lg:justify-between lg:gap-7`
          : `flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-7`
      }
    >
      <div className="xl:w-[820px] lg:w-[600px]">
        <Carousel images={images} />
      </div>
      <div className="lg:max-w-[40%] text-justify flex flex-col gap-2 justify-around">
        <div className="gap-3 flex flex-col">
          <h3 className="text-3xl font-bold">{ProjectName}</h3>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>
        <div className='space-y-4'>
        <DetailsDialog name={ProjectName} more={more} />
        <div className="flex gap-4 flex-wrap">
          {skills.map((tag) => (
            <Badge key={tag} variant="outline" className="px-4 py-2 rounded-full text-sm font-normal">
              {tag}
            </Badge>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
