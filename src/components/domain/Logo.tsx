import { cn } from '@/lib/utils'
import Image from 'next/image'

interface LogoProps {
  variant?: 'bordeaux_black' | 'white_mini'
  className?: string
}

const Logo = ({ className, variant = 'bordeaux_black' }: LogoProps) => {
  return (
    <div className={cn(className, 'w-[80px] h-[80px] relative')}>
      <Image fill src={`/logos/adoc_${variant}.png`} alt='Logo Adoc' className='object-contain' />
    </div>
  )
}

export default Logo
