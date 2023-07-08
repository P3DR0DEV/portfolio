import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"

export function Divisor() {
  return <div className="border border-solid border-white w-full"></div>
}

export function Footer() {
  return (
    <>
      <div className="max-w-screen-xl m-auto">
        <div className="h-screen flex flex-col">
          <section className="flex flex-col items-center h-full justify-evenly">
            <h2 className="text-5xl">LET'S TALK</h2>
            <Divisor />
            <div className="text-[#918E9B] text-xl flex flex-col items-center">
              <p>
                <span className="text-sm">DEVELOPED BY: </span>Pedro Mendes
              </p>
              <p>
                <span className="text-sm">CREATED AT: </span>2023
              </p>
              <a
                target="_blank"
                href="mailto:pedrohenriquecamposmendes@hotmail.com"
              >
                <p>CONTACT ME</p>
              </a>
            </div>
          </section>
        </div>
      </div>
      <footer className="flex flex-col w-full  py-3 bg-[#161619]">
        <p className="text-base text-slate-300 text-center">SOCIALS</p>
        <div
          id="buttons"
          className="flex gap-5 justify-center items-center mt-4"
        >
          <a target="_blank" href="https://www.instagram.com/pedro_camposm">
            <FaInstagramSquare className="text-[#918E9B] text-5xl" />
          </a>
          <a target="_blank" href="https://github.com/P3DR0DEV">
            <FaGithubSquare className="text-[#918E9B] text-5xl" />
          </a>
          <a target="_blank" href="https://linkedin.com/in/pedro-cmendes/">
            <FaLinkedin className="text-[#918E9B] text-5xl" />
          </a>
          <a target="_blank" href="https://www.twitter.com/esquilolo">
            <FaTwitterSquare className="text-[#918E9B] text-5xl" />
          </a>
        </div>
      </footer>
    </>
  )
}
