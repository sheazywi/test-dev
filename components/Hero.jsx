import React from 'react';
import { styles } from '@/app/styles';

const Hero = () => {
  return (
    <section className="relative w-full h-full mx-auto bg-black">
      <div className={`${styles.paddingX} absolute justify-center inset-0 top-[120px] max-w-4xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>Hi, we{`'`}re<span className='text-[#915eff]'> Starbounded</span></h1>
          <h1 className={`${styles.heroSubText} mt-2 text-white`}>We develop web applications, games, <br className='sm:block hidden'/>softwares, and many more.</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero