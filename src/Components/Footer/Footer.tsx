import {
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa"
import { FaSquareEnvelope } from "react-icons/fa6"
export function Divisor() {
  return <div className="border border-solid border-white w-full"></div>
}

export function Footer() {
  return (
    <footer className="flex flex-col w-full items-center py-3 mt-8 gap-3">
      <div id="buttons" className="flex gap-5 justify-center items-center mt-4">
        <a
          target="_blank"
          href="https://github.com/P3DR0DEV"
          aria-label="GitHub link"
        >
          <FaGithubSquare className="text-[#918E9B] text-5xl hover:text-[#181717]" />
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/pedro-cmendes/"
          aria-label="LinkedIn link"
        >
          <FaLinkedin className="text-[#918E9B] text-5xl hover:text-[#0A66C2]" />
        </a>
        <a
          target="_blank"
          href="mailto:pedrohenriquecamposmendes@hotmail.com"
          aria-label="Email link"
        >
          <FaSquareEnvelope className="text-[#918E9B] text-5xl hover:text-[#EA4335]" />
        </a>
      </div>
      <small className="text-sm ">&copy; Pedro Mendes, 2023</small>
    </footer>
  )
}
