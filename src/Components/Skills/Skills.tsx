import { IData } from "@/types"

export function Skills({ skill }: { skill: IData }) {
  return (
    <div>
      <p>{skill.title}</p>
    </div>
  )
}
