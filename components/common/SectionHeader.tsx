import React from 'react'
interface SectionHeaderProps {
  title: string
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, children }) => {
  return (
    <h1 className="text-4xl font-black text-center md:!text-right flex items-center mb-4">
      {title} {children}
    </h1>
  )
}

export default SectionHeader
