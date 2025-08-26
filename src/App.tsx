/** biome-ignore-all lint/correctness/useUniqueElementIds: <> */
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { About, Footer, Projects, SectionDivisor, Skills } from './Components'
import { ModeToggle } from './Components/ModeToggle'
import { data } from './util'
export function App() {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 600px)': { slides: { perView: 2, spacing: 16 } },
      '(min-width: 1000px)': { slides: { perView: 3, spacing: 16 } },
    },
  })

  return (
    <main id="container">
      <div className="max-w-(--breakpoint-2xl) m-auto">
        <div className="flex flex-col items-center gap-4">
          <div className='self-end mt-8 mr-4'>
            <ModeToggle />
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/98365194?s=400&u=f423bb737769760c21b39a2e46cd0f1778698b7b&v=4"
            alt="Profile Pic"
            className="rounded-full h-40 mt-6"
          />
          <h1 className="text-4xl text-center">Olá, eu sou Pedro Mendes 👋</h1>
          <h2 className="text-2xl text-center">Full Stack Developer</h2>
          <h3 className="text-lg text-center flex-wrap">
            Desenvolvedor apaixonado por criar soluções digitais inovadoras. Especializado em Node.js, React e
            tecnologias modernas.
          </h3>
        </div>
        <SectionDivisor sectionName="PROJETOS" />
        <Projects />
        <SectionDivisor sectionName="SOBRE" />
        <About />
        <SectionDivisor sectionName="TECNOLOGIAS" />
        <div className="m-2">
          <div ref={sliderRef} className="keen-slider">
            {data.map((skill) => (
              <div className="keen-slider__slide px-1" key={skill.title}>
                <Skills skill={skill} key={skill.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
