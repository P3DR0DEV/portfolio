import { ProjectBody } from "@/types"
interface ProjectBodyProps extends ProjectBody {
  isOdd: boolean
}

export function ProjectCard({
  ProjectName,
  description,
  images,
  isOdd,
}: ProjectBodyProps) {
  const align = isOdd ? "flex-row" : "flex-row-reverse"

  //TODO Make the images component
  return (
    <div className={`bg-[#262626] px-3 py-3 rounded-md`}>
      <h1 className="text-2xl font-bold md:text-center">{ProjectName}</h1>
      <div
        className={`flex flex-col  md:flex md:${align} md:justify-between md:gap-3`}
      >
        <div className="md:self-start self-center">images</div>
        <div className="md:max-w-[40%] text-justify flex flex-col gap-3 mt-3">
          {description.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
