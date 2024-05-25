import { cn } from '@/lib/utils'
import Image from 'next/image'

interface LogoProps {
  className?: string
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn(className, 'w-[80px] h-[80px] relative')}>
      <Image fill src='/logos/adoc_bordeaux_black.png' alt='Logo Adoc' className='object-contain' />
    </div>
  )
}

export default Logo
