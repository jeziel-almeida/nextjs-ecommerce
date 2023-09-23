import React from 'react'
import Header from './Header'

const Layout = ({ children }: any) => {
  return (
    <div>
        <Header />
        <main className='layout'>
            {children}
        </main>
        <footer>footer</footer>
    </div>
  )
}

export default Layout