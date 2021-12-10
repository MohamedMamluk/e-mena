import React from 'react'
interface ButtonProps {
  setOpenNavbar: React.Dispatch<React.SetStateAction<boolean>>
  openNavbar: boolean
}
const Toggler: React.FC<ButtonProps> = ({ setOpenNavbar, openNavbar }) => {
  return (
    <button
      className="flex flex-col rounded-full gap-1 focus:outline-none px-0 py-0 mx-0 w-10 md:!hidden"
      onClick={() => setOpenNavbar(!openNavbar)}
    >
      <span className="block relative w-6 h-px rounded-sm bg-white"></span>
      <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
    </button>
  )
}

export default Toggler
