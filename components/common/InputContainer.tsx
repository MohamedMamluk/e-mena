import React from 'react'
interface InputProps {
  classes: string
  label: string
}
const InputContainer: React.FC<InputProps> = ({ classes, label, children }) => {
  return (
    <div className={`text-xl ${classes} flex-col md:flex-row`}>
      <label htmlFor="image">{label}</label>
      {children}
    </div>
  )
}

export default InputContainer
