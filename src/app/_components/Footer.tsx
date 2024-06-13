'use client'

import Logo from '@/components/domain/Logo'
import { cn } from '@/lib/utils'
import { Separator } from '@radix-ui/react-separator'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

const Footer = () => {
  const [animate, setAnimate] = useState(false)

  return (
    <footer className='bg-bordeaux px-12 p-4'>
      <Waypoint onEnter={() => setAnimate(true)} />
      <div className={cn('flex items-center justify-center gap-6 sm:gap-10 uppercase', animate && 'animate-fade-in')}>
        <Separator className='w-[200px] h-[0.5px] bg-white' />
        <Logo variant='white_mini' className='min-w-[60px]' />
        <p className='hidden sm:block'>
          Construyendo
          <br />
          futuro
        </p>
        <Separator className='w-[200px] h-[0.5px] bg-white' />
      </div>
    </footer>
  )
}

export default Footer
