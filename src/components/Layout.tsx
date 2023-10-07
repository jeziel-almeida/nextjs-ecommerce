import React from 'react'
import Header from './Header'
import MainCategory from './MainCategory'
import Footer from './Footer'

const Layout = ({ children }: any) => {
  return (
    <div className='h-screen'>
        <Header />
        <MainCategory />
        <main className='layout'>
            {children}
        </main>
    </div>
  )
}

export default Layout