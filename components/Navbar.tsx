import React from 'react'
import Button from '@material-tailwind/react/Button'
import { useRouter } from 'next/router'
import Toggler from './NavbarComponents/Toggler'
import Link from 'next/link'
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = React.useState(false)
  const router = useRouter()
  console.log(router.query)
  return (
    <header className="max-w-[1400px] mx-auto text-3xl">
      <div className="flex justify-between items-center w-full py-4 px-2">
        <div
          id="image__container"
          className="w-60 md:w-36 lg:w-60 cursor-pointer"
        >
          <Link href="/">
            <a>
              <img
                src="/E-Mena.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </a>
          </Link>
        </div>
        <div>
          <Toggler openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
          <nav className="hidden md:!block">
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="/" passHref>
                  <a className="relative flex items-center justify-center">
                    <h2 className="z-30"> Home</h2>
                  </a>
                </Link>
              </li>
              <li
                style={{ borderColor: 'red' }}
                className={`${
                  router.query.id == 'league' ? 'border-b' : ''
                } py-3`}
              >
                <Link href="/category/league" passHref>
                  <a className="relative flex items-center justify-center group">
                    <div
                      className={`w-11 h-11 absolute  opacity-50 hidden group-hover:block ${
                        router.query.id == 'league' ? '!block' : ''
                      }`}
                    >
                      <img src="/league.png" alt="" className="w-full" />
                    </div>
                    <h2 className="z-30"> League of Legends</h2>
                  </a>
                </Link>
              </li>
              <li
                style={{ borderColor: 'red' }}
                className={`${
                  router.query.id == 'valorant' ? 'border-b' : ''
                } py-3`}
              >
                <Link href="/category/valorant" passHref>
                  <a className="relative flex items-center justify-center group">
                    <div
                      className={`w-11 h-11 absolute  opacity-50 hidden group-hover:block ${
                        router.query.id == 'valorant' ? '!block' : ''
                      }`}
                    >
                      <img src="/valorant.png" alt="" className="w-full" />
                    </div>
                    <h2 className="z-30"> Valorant</h2>
                  </a>
                </Link>
              </li>
              <li
                style={{ borderColor: 'red' }}
                className={`${
                  router.query.id == 'PUBG' ? 'border-b' : ''
                } py-3`}
              >
                <Link href="/category/PUBG" passHref>
                  <a className="relative flex items-center justify-center group">
                    <div
                      className={`w-11 h-11 absolute  opacity-50 hidden group-hover:block ${
                        router.query.id == 'PUBG' ? '!block' : ''
                      }`}
                    >
                      <img src="/pubg2.png" alt="" className="w-full" />
                    </div>
                    <h2 className="z-30"> PUBG</h2>
                  </a>
                </Link>
              </li>
              <button className="border font-mkzy border-red-600 px-6 py-2 rounded-xl text-xl hover:bg-white hover:text-gray-800 transition duration-300 ml-10">
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
          <li>
            <Link href="/" passHref>
              <a className="relative flex items-center justify-center">
                <h2 className="z-30"> Home</h2>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/league" passHref>
              <a className="relative">League of Legends</a>
            </Link>
          </li>
          <li>
            <Link href="/category/valorant" passHref>
              <a className="relative">Valorant</a>
            </Link>
          </li>
          <li>
            <Link href="/category/PUBG" passHref>
              <a className="relative">PUBG</a>
            </Link>
          </li>
          <button className="border border-red-600 px-6 py-2 rounded-xl text-xl hover:bg-white hover:text-gray-800 transition duration-300">
            انضم لنا
          </button>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
