import { About, Footer, Projects, SectionDivisor, Skills } from "./Components"
import { data } from "./util"

export function App() {
  return (
    <main id="container" className="">
      <div className="max-w-screen-xl m-auto">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/98365194?s=400&u=f423bb737769760c21b39a2e46cd0f1778698b7b&v=4"
            alt="Profile Pic"
            className="rounded-full h-40 mt-6"
          />
          <h1 className="text-4xl text-center">Hi, i'm Pedro Mendes! 👋</h1>
          <h3 className="text-lg">
            I'm a Full Stack Developer based in Belo Horizonte, Brazil.
          </h3>
        </div>
        <SectionDivisor sectionName="WORK" />
        <Projects />
        <SectionDivisor sectionName="ABOUT" />
        <About />
        <SectionDivisor sectionName="TECNOLOGIES" />
        <div className="flex overflow-x-auto mt-3 flex-nowrap gap-5 items-center snap-x snap-mandatory">
          {data.map((skill) => (
            <Skills skill={skill} key={skill.title} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
