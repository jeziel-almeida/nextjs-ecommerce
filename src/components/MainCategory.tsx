import { CATEGORY_LINKS } from '@/lib/const/navigation';
import Link from 'next/link';
import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';

const MainCategory = () => {
  return (
    <div className='bg-white border-b border-b-gray-300'>
        <div className='layout'>
            <div className='flex items-center gap-6 text-sm h-11'>
                <Link href={"/list"} className='flex items-center gap-3'>
                    <RiMenu2Line fontSize={18} />
                    All Category
                </Link>
                {CATEGORY_LINKS.map((category, index) => (
                    <Link href={category.path} key={index}>
                        {category.label}
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MainCategory