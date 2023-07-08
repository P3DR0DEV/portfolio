import { ProjectBody } from "@/types"
import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
interface ProjectBodyProps extends ProjectBody {
  isOdd: boolean
}

export function ProjectCard({
  ProjectName,
  description,
  images,
  isOdd,
}: ProjectBodyProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  function prevSlide(e: MouseEvent) {
    e.preventDefault
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function nextSlide(e: MouseEvent) {
    e.preventDefault
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function goToSlide(index: number) {
    setCurrentIndex(index)
  }
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
        <div className="md:self-start self-center relative group">
          <img
            src={images[currentIndex]}
            alt=""
            className="rounded-md duration-500"
          />

          <div className="md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          <div className="md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

          <div className="flex top-4 justify-center py-2">
            {images.map((slide, index) => (
              <div
                key={slide}
                onClick={() => goToSlide(index)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        <div className="md:max-w-[40%] text-justify flex flex-col gap-3 mt-3">
          {description.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
