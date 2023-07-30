import { About, Footer, Projects, Skills } from "./Components"

import { data } from "./util"

export function App() {
  return (
    <main id="container" className="bg-[#1d1d1d] text-white">
      <div className="bg-[#4a5568]">
        <div className="max-w-screen-xl m-auto">
          <div className="flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/98365194?s=400&u=f423bb737769760c21b39a2e46cd0f1778698b7b&v=4"
              alt="Profile Pic"
              className="rounded-full h-60 mt-6"
            />
            <h1 className="text-3xl text-center py-5">
              Hi, i'm Pedro Mendes! 👋
            </h1>
          </div>
          <About />
          <div className="p-5">
            <h2 className="text-xl">Technologies:</h2>
            <div className="flex overflow-x-auto mt-3 flex-nowrap gap-5 items-center snap-x snap-mandatory">
              {data.map((skill) => {
                return <Skills key={skill.title} skill={skill} />
              })}
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Footer />
    </main>
  )
}
