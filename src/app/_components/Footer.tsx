'use client'

import Logo from '@/components/domain/Logo'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-bordeaux px-12 p-4'>
      <div className='flex items-center justify-center gap-6 sm:gap-10 uppercase'>
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
