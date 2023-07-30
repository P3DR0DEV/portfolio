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
  return (
    <div className={`bg-[#262626] px-3 py-2 rounded-md`}>
      <h1 className="text-2xl font-bold text-center py-4">{ProjectName}</h1>
      <div
        className={
          isOdd
            ? `flex flex-col md:flex-row md:justify-between md:gap-7`
            : `flex flex-col md:flex-row-reverse md:justify-between md:gap-7`
        }
      >
        <div className="md:max-w-[40%] text-justify flex flex-col gap-3 mt-3">
          {description.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
