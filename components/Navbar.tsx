import React from 'react'
import { useRouter } from 'next/router'
import Toggler from './NavbarComponents/Toggler'
import Link from 'next/link'
import { signout } from '../utils'
import { Writer } from '../types'
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = React.useState(false)
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [user, setUser] = React.useState<Writer>()
  const [showMenu, setShowMenu] = React.useState(false)

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setLoggedIn(true)
      const userToken = user.user
      setUser(userToken)
    }
  }, [])
  const handleSignout = async () => {
    await signout()
    router.reload()
  }
  const handleUser = async () => {
    if (loggedIn) {
      setShowMenu(!showMenu)
    } else {
      router.push('/login')
    }
  }
  const router = useRouter()
  return (
    <header className="max-w-[1400px] mx-auto text-lg font-poppins select-none">
      <div className="flex justify-between items-center w-full py-4 px-2">
        <div
          id="image__container"
          className="w-60 md:w-36 lg:w-60 cursor-pointer"
        >
          <Link href="/">
            <a>
              <img
                src="/E-Mena.png"
                alt="E-MENA logo"
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
                      <img
                        src="/league.png"
                        alt="League of legends logo"
                        className="w-full"
                      />
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
                      <img
                        src="/valorant.png"
                        alt="valorant logo"
                        className="w-full"
                      />
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
                      <img
                        src="/pubg2.png"
                        alt="PUBG logo"
                        className="w-full"
                      />
                    </div>
                    <h2 className="z-30"> PUBG</h2>
                  </a>
                </Link>
              </li>
              <button
                onClick={() => handleUser()}
                // onClick={() => setShowMenu(!showMenu)}
                className="border font-mkzy border-red-600 px-6 py-2 rounded-xl text-xl hover:bg-white hover:text-gray-800
                 transition duration-300 ml-10"
              >
                {loggedIn ? (
                  <img
                    src={user.image}
                    className="w-14 h-14 rounded-full"
                  ></img>
                ) : (
                  'انضم لنا'
                )}
              </button>
            </ul>
          </nav>
        </div>
      </div>
      {loggedIn && (
        <div
          className={`hidden md:flex justify-end items-center gap-6 mb-5 mr-4 scale-0 ${
            showMenu && 'scale-100'
          } transition-all duration-300 origin-top`}
        >
          <Link href="/write" passHref>
            <a
              className=""
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <h2 className=""> كتابة مقالة</h2>
            </a>
          </Link>
          <button onClick={() => handleSignout()}>تسجيل الخروج</button>
        </div>
      )}

      <nav
        className={` ${
          openNavbar ? 'block' : 'hidden'
        } transform md:!hidden bg-[#202020] pt-5 mb-4`}
      >
        <ul className="flex flex-col items-center gap-4 w-full">
          <li>
            <Link href="/" passHref>
              <a
                onClick={() => {
                  setOpenNavbar(false)
                }}
                className="relative flex items-center justify-center"
              >
                <h2 className="z-30"> Home</h2>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/league" passHref>
              <a
                onClick={() => {
                  setOpenNavbar(false)
                }}
                className="relative"
              >
                League of Legends
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/valorant" passHref>
              <a
                onClick={() => {
                  setOpenNavbar(false)
                }}
                className="relative"
              >
                Valorant
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/PUBG" passHref>
              <a
                onClick={() => {
                  setOpenNavbar(false)
                }}
                className="relative"
              >
                PUBG
              </a>
            </Link>
          </li>
          <button
            onClick={() => handleUser()}
            // onClick={() => setShowMenu(!showMenu)}
            className="border font-mkzy border-red-600 px-6 py-2 rounded-xl text-xl hover:bg-white hover:text-gray-800
                 transition duration-300"
          >
            {loggedIn ? (
              <img src={user.image} className="w-14 h-14 rounded-full"></img>
            ) : (
              'انضم لنا'
            )}
          </button>
          {loggedIn && (
            <div
              className={`flex md:hidden justify-end items-center gap-6 mb-5 scale-0 ${
                showMenu && 'scale-100'
              } transition-all duration-300 origin-top`}
            >
              <Link href="/write" passHref>
                <a
                  className=""
                  onClick={() => {
                    setShowMenu(false)
                    setOpenNavbar(false)
                  }}
                >
                  <h2 className="z-30"> كتابة مقالة</h2>
                </a>
              </Link>
              <button onClick={() => handleSignout()}>تسجيل الخروج</button>
            </div>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
