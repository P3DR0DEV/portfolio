export function SectionDivisor({ sectionName }: { sectionName: string }) {
  return (
    <div className="my-14 flex items-center gap-6">
      <div className="w-full border border-[#E4E4E7]"></div>
      <h3 className="text-[#747474]">{sectionName}</h3>
      <div className="w-full border border-[#E4E4E7]"></div>
    </div>
  )
}
