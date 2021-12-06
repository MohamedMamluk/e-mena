import React from 'react'
import Button from '@material-tailwind/react/Button'
import Toggler from './NavbarComponents/Toggler'
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = React.useState(false)

  return (
    <header>
      <div className="flex justify-between items-center w-full py-4 px-2">
        <div id="image__container" className="w-36">
          <img
            src="/E-Mena.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <Toggler openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
          <nav className="hidden md:!block">
            <ul className="flex gap-4 items-center">
              <li>League of Legends</li>
              <li>Valorant</li>
              <li>PUBG</li>
              <button className="border border-red-600 px-6 py-2 rounded-xl text-xl hover:bg-white hover:text-gray-800 transition duration-300 ml-8">
                انضم لنا
              </button>
            </ul>
          </nav>
        </div>
      </div>
      <nav
        className={` ${openNavbar ? 'block' : 'hidden'} transform md:!hidden`}
      >
        <ul className="flex flex-col items-center gap-4 w-full">
          <li>League of Legends</li>
          <li>Valorant</li>
          <li>PUBG</li>
          <button className="border border-red-600 px-6 py-2 rounded-xl text-xl hover:bg-white hover:text-gray-800 transition duration-300">
            انضم لنا
          </button>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
