'use client'

import Logo from '@/components/domain/Logo'
import SocialMedia from '@/components/domain/SocialMedia'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Equal, InstagramIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import { ReactNode, useCallback, useEffect, useState } from 'react'

export const NavBar = ({
  opened = false,
  links,
  className,
}: {
  children?: ReactNode
  opened?: boolean
  links: Array<Record<'text' | 'href', string>>
  className?: string
}) => {
  const [drawerOpen, setDrawerOpen] = useState(opened)

  useEffect(() => {
    setDrawerOpen(opened)
  }, [opened])

  const handleNavigation = useCallback(() => {
    setDrawerOpen(false)
  }, [])

  return (
    <Drawer direction='left' open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger asChild className={className}>
        <Button variant='ghost' size='icon' aria-label='Open navigation menu'>
          <Equal className='size-9' />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='pl-6 pr-7 overflow-y-auto text-black h-full mr-12 max-w-[400px]'>
        <header className='border-black border-b mb-4'>
          <Logo className='mb-6' />
        </header>
        <nav>
          <ul>
            {links.map(({ text, href }, index) => (
              <li key={`${index}-${text}`} onClick={handleNavigation} className='my-8 font-medium'>
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <SocialMedia className='mt-auto mb-6' />
      </DrawerContent>
    </Drawer>
  )
}
