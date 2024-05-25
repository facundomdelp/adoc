'use client'

import Logo from '@/components/domain/Logo'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { NavBar } from './NavBar'
import { Button } from '@/components/ui/button'
import { Equal } from 'lucide-react'

const navigationLinks = [
  {
    text: 'Empresa',
    href: '#empresa',
  },
  {
    text: 'Productos',
    href: '#productos',
  },
  {
    text: 'Servicios',
    href: '#servicios',
  },
  {
    text: 'Contacto',
    href: '#contacto',
  },
]

const Header = () => {
  const [animate, setAnimate] = useState(false)

  return (
    <>
      <div
        className={cn(
          'flex items-center justify-between fixed z-50 bg-white drop-shadow-md w-full font-medium text-black transition-all md:gap-24 px-6 md:px-16',
          animate ? 'opacity-90 top-0' : 'opacity-0 top-[-100%]'
        )}
      >
        <NavBar links={navigationLinks} className='md:hidden' />
        <Link href='/'>
          <Logo className='my-3 cursor-pointer shrink-0' />
        </Link>
        <nav className='grow max-w-[600px] hidden md:flex'>
          <ul className='flex grow gap-4 justify-between py-8'>
            {navigationLinks.map(({ text, href }, index) => (
              <li key={`${index}-${text}`} className='hover-underline-animation'>
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant='ghost' size='icon' aria-label='Open navigation menu' className='invisible md:hidden'>
          <Equal className='size-6 sm:size-9' />
        </Button>
      </div>
      <Waypoint onLeave={() => setAnimate(true)} bottomOffset='1000px' />
    </>
  )
}

export default Header
