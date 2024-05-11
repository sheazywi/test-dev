import React from 'react';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png';
import { navLists } from '@/app/layout';
import { IoSearchSharp } from "react-icons/io5";
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black'>
      <nav className='flex w-full screen-max-width navbar'>
        {/*<Image src={logo} alt="Logo" width={48} height={48}/>*/}
        {<p className='text-3xl text-white'>starbounded</p>}

        <div className='flex flex-1 justify-center max-sm:hidden '>
          {navLists.map(({ id, link, name }) => (
              <div key={id} className='px-10 text-gray-500 transition-all place-content-center text-lg'>
                <div>
                  <Link href={link}>
                    <p className='cursor-pointer hover:text-white'>
                      {name}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/*<div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 justify-center'>
          <IoSearchSharp className='cursor-pointer text-gray-500 hover:text-white transition-all place-content-center' size={50}/>
        </div>*/}
      </nav>
    </header>
  )
}

export default Navbar