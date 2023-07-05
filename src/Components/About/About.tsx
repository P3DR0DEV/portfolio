import { Divisor } from ".."

export function About() {
  return (
    <section className="p-5">
      <h2 className="text-center text-xl font-bold">Full Stack Developer</h2>
      <p className="mb-3">
        Hi, my name is <strong>Pedro Henrique Campos Mendes</strong>, Full-Stack
        Developer passionate by tecnology and thirsty of knowledge.
      </p>
      <Divisor />
      <h3 className="text-lg mt-3">About Me:</h3>
      <div className="px-5">
        <ul className="list-disc">
          <li>
            I was 14 years old when i made my first web-site, and its purpose
            was to ask a girl if she accept to be my girlfriend.
          </li>
          <li>My first Programming Language was Python.</li>
          <li>
            I started to study JavaScript because some friends told me to do it,
            and now i'm in love with TypeScript.
          </li>
          <li>
            I can't see myself without programming, it's my job and my hobby.
          </li>
          <li>Nowadays i build my web apps with React TSX and Node.</li>
        </ul>
      </div>
    </section>
  )
}
