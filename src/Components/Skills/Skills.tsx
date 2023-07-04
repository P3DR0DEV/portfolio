import { IData } from "@/types"

export function Skills({ skill }: { skill: IData }) {
  return (
    <div className="bg-[#e2e8f0] h-96 rounded-md text-[#4a5568] duration-500">
      <h3 className="text-center text-2xl capitalize  font-bold py-2">
        {skill.title}
      </h3>
      <div className="p-3 overflow-auto">
        {skill.lang.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex justify-between border-b border-[#918e9b86] h-9 items-center"
            >
              <p className="font-bold capitalize text-base">{skill.name}</p>
              <p className="">Skill Level: {skill.skill}/4</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
