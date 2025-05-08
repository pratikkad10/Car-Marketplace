import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
          <div className='min-h-[calc(100vh-105px)] flex items-center justify-center mt-10'>
            {children}
            </div>
        <Footer/>
    </div>
  )
}

export default Layout