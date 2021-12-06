import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-[#040203] text-gray-200">
      <div className="max-w-7xl mx-auto min-h-screen">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
