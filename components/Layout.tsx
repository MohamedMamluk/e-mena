import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-[#040203] text-gray-200 font-mkzy">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta
          name="google-site-verification"
          content="kO7ZgeZWyJC663DXNQu1mQ27oe3SThOTVlBNFnHFvSg"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
