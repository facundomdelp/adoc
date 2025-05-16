'use client'

import Logo from '@/components/domain/Logo'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { NavBar } from './NavBar'
import { Button } from '@/components/ui/button'
import { Equal } from 'lucide-react'
import SocialMedia from '@/components/domain/SocialMedia'

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
  return (
    <>
      <div
        className={cn(
          'flex items-center justify-between fixed z-50 bg-white drop-shadow-md w-full font-medium text-black transition-all md:gap-16 px-6 md:px-12 opacity-90',
          'animate-navbar-fade-in'
        )}
      >
        <NavBar links={navigationLinks} className='md:hidden' />

        <Link href='/'>
          <Logo className='my-3 cursor-pointer shrink-0' />
        </Link>

        <nav className='grow max-w-[600px] hidden md:flex ml-auto'>
          <ul className='flex grow gap-4 justify-between py-8'>
            {navigationLinks.map(({ text, href }, index) => (
              <li key={`${index}-${text}`} className='hover-underline-animation'>
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='gap-4 hidden md:flex'>
          <SocialMedia />
        </div>

        <Button variant='ghost' size='icon' aria-label='Open navigation menu' className='invisible md:hidden'>
          <Equal className='size-6 sm:size-9' />
        </Button>
      </div>
    </>
  )
}

export default Header
