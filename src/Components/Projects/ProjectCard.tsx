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
  skills,
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
          className="rounded-lg duration-500 border border-black/20"
        />

        <div className="md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex justify-center py-2">
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
      <div className="md:max-w-[40%] text-justify flex flex-col gap-2 justify-around ">
        <div className="gap-3 flex flex-col">
          <h3 className="text-3xl font-bold">{ProjectName}</h3>
          {description.map((text) => (
            <p key={text} className="text-xl text-[#747474] ">
              {text}
            </p>
          ))}
        </div>
        <div className="flex gap-4">
          {skills.map((tag) => (
            <p
              key={tag}
              className="px-4 py-2 border border-[#284B63] text-[#284B63] rounded-full"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
