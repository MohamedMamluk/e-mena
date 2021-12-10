import React from 'react'
interface ButtonProps {
  name: string
  borderColor: string
  textColor: string
  hoverBG: string
  onClick: () => void
}
const PreviewButtons: React.FC<ButtonProps> = ({
  textColor,
  onClick,
  name,
  borderColor,
  hoverBG
}) => {
  return (
    <button
      onClick={() => onClick()}
      className={`border ${borderColor} ${textColor}
       hover:${hoverBG}  hover:text-white px-8 py-2 rounded-lg text-2xl `}
    >
      {name}
    </button>
  )
}

export default PreviewButtons
