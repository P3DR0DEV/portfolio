import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <section className="h-screen p-5">
      <h2 className="text-lg">My Projects</h2>
      <ProjectCard isOdd={false} />
    </section>
  )
}
