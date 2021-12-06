import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-[#202020] pt-10 text-center px-5">
      <div
        id="main__footer"
        className="flex flex-col items-center md:flex-row md:justify-between"
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
            <ul className="text-sm text-gray-400 ">
              <li className="hover:text-gray-200">Home</li>
              <li className="hover:text-gray-200">League of Legends</li>
              <li className="hover:text-gray-200">Valorant</li>
              <li className="hover:text-gray-200">PUBG</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold">الالعاب</h2>
            <ul className="text-sm text-gray-400 ">
              <li className="hover:text-gray-200">League of Legends</li>
              <li className="hover:text-gray-200">Valorant</li>
              <li className="hover:text-gray-200">PUBG</li>
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
