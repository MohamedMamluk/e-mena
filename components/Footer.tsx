import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className=" bg-[#171717] pt-10 text-center px-5">
      <div
        id="main__footer"
        className="flex flex-col items-center md:flex-row md:justify-evenly"
      >
        <div className="max-w-xs md:!w-1/3 flex-shrink-2">
          <img src="/E-Mena.png" alt="E-Mena logo" className="w-full" />
        </div>
        <div
          id="sections"
          className="flex flex-col items-center md:!items-start  w-2/3 flex-shrink-1 gap-6 md:gap-0  md:flex-row md:!justify-between"
        >
          <section>
            <h2 className="text-lg font-bold">صفحات الموقع</h2>
            <ul className="text-sm text-gray-400 font-poppins">
              <li className="hover:text-gray-200">
                <Link href="/" passHref>
                  <a className="relative flex items-center justify-center">
                    <h2 className="z-30"> Home</h2>
                  </a>
                </Link>
              </li>
              <li className="hover:text-gray-200">
                <Link href="/category/league" passHref>
                  <a className="relative">League of Legends</a>
                </Link>
              </li>
              <li className="hover:text-gray-200">
                <Link href="/category/valorant" passHref>
                  <a className="relative">Valorant</a>
                </Link>
              </li>
              <li className="hover:text-gray-200">
                <Link href="/category/PUBG" passHref>
                  <a className="relative">PUBG</a>
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold">الالعاب</h2>
            <ul className="text-sm text-gray-400 font-poppins">
              <li className="hover:text-gray-200">
                <a href="https://leagueoflegends.com/" target="_blank">
                  League of Legends{' '}
                </a>
              </li>
              <li className="hover:text-gray-200">
                <a href="https://playvalorant.com/" target="_blank">
                  Valorant
                </a>
              </li>
              <li className="hover:text-gray-200">
                <a
                  href="https://emea.battlegrounds.pubg.com/en/"
                  target="_blank"
                >
                  PUBG
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold">من نحن؟</h2>
            <p
              style={{ direction: 'rtl', width: '30ch' }}
              className="text-sm text-gray-400 "
            >
              موقع E-Mena هو موقع مخصص لاخبار الالعاب الالكترونية فى الوطن
              العربى، بحيث يأتى لك بالاخبار فور حدوثها.
            </p>
          </section>
        </div>
      </div>
      <p
        style={{
          direction: 'rtl',
          marginTop: '3rem',
          fontSize: '14px'
        }}
      >
        جميع حقوق النشر محفوظة لموقع E-MENA{' '}
      </p>
    </footer>
  )
}

export default Footer
