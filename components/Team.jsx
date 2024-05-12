import React from 'react';
import Image from 'next/image';
import { styles } from '@/app/styles';
import { team } from '@/app/layout';
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

const Team = () => {
  return (
    <section className="relative w-full mx-auto bg-black h-[60vh]">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          {team.map(({ id, name, image, description, position }) => (
            <div key={id} className='px-10 w-full h-full bg-clip-border justify-around rounded-lg text-lg bg-black border-4 border-violet-600'>
              <div className='text-gray-500 transition-all'>
                <div className='mt-12 flex items-center justify-center'>
                  <Image className='rounded-full' src={`/assets/images/people/${image}`} alt={name} width={256} height={256} />
                </div>
                <div className='flex flex-col items-center mt-12 text-2xl'>
                  <p>
                    <b>{name}</b>
                  </p>
                  <p>
                    <b>{position}</b>
                  </p>
                </div>
                <div>
                  <p className='text-center mt-8 text-normal'>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Team