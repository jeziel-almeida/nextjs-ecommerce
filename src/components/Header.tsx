import Link from 'next/link';
import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';
import { HEADER_NAV } from '@/lib/const/navigation';

const Header = () => {
  return (
    <header className='bg-white border-b border-b-gray-300'>
      <div className="navbar layout">
        <div className="navbar-start">
          <Link href="/" className='flex items-center gap-2 text-secondary text-xl font-semibold'>
            <FaShoppingBasket fontSize={26} />
            <span>Basket</span>
          </Link>
        </div>
        <div className="navbar-center">
          <div className="join w-[30rem]">
            
            <input className="input w-full input-sm input-bordered join-item" placeholder="Search" />
            
            <div className="dropdown dropdown-hover join-item">
              <label
                tabIndex={0}
                className="w-[7rem] px-1 btn btn-sm btn-outline border-gray-300 rounded-none capitalize"
              >
                Category <RiArrowDownSLine />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-1 shadow border border-gray-300 bg-base-100 rounded-lg w-52"
              >
                <li><a>Electronic</a></li>
                <li><a>Home Furniture</a></li>
              </ul>
            </div>

            <button className="btn btn-sm btn-secondary join-item">Search</button>

          </div>
        </div>
        <div className="navbar-end flex gap-8">
          {HEADER_NAV.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className='flex flex-col items-center gap-1 text-gray-500'
            >
              {link.icon}
              <span className='text-xs'>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header