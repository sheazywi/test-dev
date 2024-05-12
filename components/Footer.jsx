import React from 'react'
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black footer text-white">
      <div className='w-full'>
        <div className="space-y-1">
          <p className='flex flex-1 justify-center'>
            <b>starbounded</b>
          </p>
        </div>
        <Separator className="my-5" />
        <div className="flex flex-1 justify-center space-x-4 text-normal">
          <p>Copyright &copy; 2024 Starbounded Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer