import { ProjectBody } from "@/types"
import { Carousel } from "./Carousel"
interface ProjectBodyProps extends ProjectBody {
  isOdd: boolean
}

export function ProjectCard({
  ProjectName,
  description,
  images,
  isOdd,
  skills,
}: ProjectBodyProps) {
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
          {description.map((text) => (
            <p key={text} className="text-xl text-[#747474] ">
              {text}
            </p>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          {skills.map((tag) => (
            <p
              key={tag}
              className="px-4 py-2 border border-[#284B63] text-[#284B63] rounded-full"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
