'use client'

import Logo from '@/components/domain/Logo'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

const navigationLinks = [
  {
    name: 'Empresa',
  },
  {
    name: 'Productos',
  },
  {
    name: 'Servicios',
  },
  {
    name: 'Contacto',
  },
]

const Header = () => {
  const [animate, setAnimate] = useState(false)
  console.log('👽 ~ Header ~ animate:', animate)

  return (
    <>
      <div
        className={cn(
          'flex items-center px-16 justify-between fixed z-50 bg-white drop-shadow-md w-full font-medium text-black transition-all',
          animate ? 'opacity-70 top-0' : 'opacity-0 top-[-100%]'
        )}
      >
        <Logo className='my-6 cursor-pointer' />
        <nav className='flex-grow max-w-[800px] '>
          <ul className='flex gap-4 justify-between py-8'>
            {navigationLinks.map(({ name }, index) => (
              <li key={`${index}-${name}`} className='hover-underline-animation'>
                <Link href='#'>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Waypoint onLeave={() => setAnimate(true)} bottomOffset='1000px' />
    </>
  )
}

export default Header
