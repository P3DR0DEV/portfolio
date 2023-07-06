export function ProjectCard({ isOdd }: { isOdd: boolean }) {
  const align = isOdd ? "items-start" : "items-end"
  return (
    <div className={`bg-[#262626] px-3 py-1 flex flex-col ${align}`}>
      <div>images</div>
      <div>
        <p></p>
      </div>
    </div>
  )
}
