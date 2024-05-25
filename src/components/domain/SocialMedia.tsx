import { cn } from '@/lib/utils'
import { InstagramIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'

interface SocialMediaProps {
  className?: string
}

const SocialMedia = ({ className }: SocialMediaProps) => {
  return (
    <div className={cn('gap-4 flex text-black', className)}>
      <Link href='https://instagram.com/adocmateriales' target='_blank' className='hover:text-bordeaux transition-all'>
        <InstagramIcon />
      </Link>
      <Link href='mailto:info@adocmateriales.com' target='_blank' className='hover:text-bordeaux transition-all'>
        <MailIcon />
      </Link>
    </div>
  )
}

export default SocialMedia
