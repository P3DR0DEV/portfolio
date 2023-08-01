import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/sea-green"

export function Carousel({ images }: { images: string[] }) {
  return (
    <Splide
      style={{ padding: 0 }}
      options={{ rewind: true, arrows: false }}
      aria-label="Project Images"
      id="splider-custom"
    >
      {images.map((image) => (
        <SplideSlide>
          <img src={image} />
        </SplideSlide>
      ))}
    </Splide>
  )
}
