import React from 'react'
interface SectionHeaderProps {
  title: string
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h1 className="text-4xl font-black text-center md:!text-right">{title}</h1>
  )
}

export default SectionHeader
