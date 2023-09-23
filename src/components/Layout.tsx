import React from 'react'
import Header from './Header'
import MainCategory from './MainCategory'

const Layout = ({ children }: any) => {
  return (
    <div>
        <Header />
        <MainCategory />
        <main className='layout'>
            {children}
        </main>
        <footer>footer</footer>
    </div>
  )
}

export default Layout