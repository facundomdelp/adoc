'use client'

import Logo from '@/components/domain/Logo'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-bordeaux px-12 p-4 flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-10 uppercase'>
        <Separator className='w-[200px] h-[0.5px] bg-white' />
        <Logo variant='white' />
        Construyendo futuro
        <Separator className='w-[200px] h-[0.5px] bg-white' />
      </div>
    </footer>
  )
}

export default Footer
