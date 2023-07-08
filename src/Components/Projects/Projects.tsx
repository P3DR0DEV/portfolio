import { ProjectCard } from "./ProjectCard"
import { projectsData } from "@/util"

export function Projects() {
  return (
    <div className="max-w-screen-xl m-auto">
      <section className="p-5">
        <h2 className="text-lg mb-2">My Projects</h2>
        <div className="flex flex-col gap-4">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              ProjectName={project.ProjectName}
              description={project.description}
              images={project.images}
              isOdd={(project.id as number) % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
