import { Splide, SplideSlide } from "@splidejs/react-splide"
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
            <Splide
              className="p-0"
              id="splider-custom"
              options={{
                rewind: true,
                speed: 1000,
                perPage: 3,
                gap: 16,
                arrows: false,
                breakpoints: {
                  900: { perPage: 2 },
                  600: { perPage: 1 },
                },
              }}
            >
              {data.map((skill) => {
                return (
                  <SplideSlide>
                    <Skills key={skill.title} skill={skill} />
                  </SplideSlide>
                )
              })}
            </Splide>
          </div>
        </div>
      </div>
      <Projects />
      <Footer />
    </main>
  )
}
