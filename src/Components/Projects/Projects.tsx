import { projectsData } from '@/util'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section className="p-5">
      <div className="flex flex-col gap-14">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            ProjectName={project.ProjectName}
            description={project.description}
            images={project.images}
            isOdd={(project.id as number) % 2 === 0}
            skills={project.skills}
            more={project.more}
          />
        ))}
      </div>
    </section>
  )
}
