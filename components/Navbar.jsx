import React from 'react';
import Image from 'next/image';
import { logo } from '@/public/images/logo.png';
import { navLists } from '@/app/layout';
import { BiSolidDashboard } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <Image src={ logo } alt="Logo" width={20} height={20}/>

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div key={nav} className='px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all'>
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <BiSolidDashboard className='cursor-pointer text-gray-500 hover:text-white transition-all' size={35}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar