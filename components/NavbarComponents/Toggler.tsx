import React from 'react'
import Button from '@material-tailwind/react/Button'
interface ButtonProps {
  setOpenNavbar: React.Dispatch<React.SetStateAction<boolean>>
  openNavbar: boolean
}
const Toggler: React.FC<ButtonProps> = ({ setOpenNavbar, openNavbar }) => {
  return (
    <Button
      ripple="light"
      color="none"
      className="flex flex-col rounded-full px-0 py-0 mx-0 w-10 md:!hidden"
      onClick={() => setOpenNavbar(!openNavbar)}
    >
      <span className="block relative w-6 h-px rounded-sm bg-white"></span>
      <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
    </Button>
  )
}

export default Toggler
