import React from 'react';
import Image from 'next/image';
import logo from '@/public/static/images/logo.png';
import { navLists } from '@/app/layout';
import { IoSearchSharp } from "react-icons/io5";
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='w-full py-4 px-4 flex justify-between items-center bg-black'>
      <nav className='flex w-full navbar max-w-4xl gap-2 mx-auto justify-between'>
        {/*<Image src={logo} alt="Logo" width={48} height={48}/>*/}
        {<p className='md:text-3xl max-md:text-2xl text-white'>starbounded</p>}

        <div className='flex'>
            {navLists.map(({ id, link, name }) => (
                <div key={id} className='max-md:px-4 md:px-10 md:text-lg max-md:text-normal text-gray-500 transition-all place-content-center'>
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