import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const IMAGES = ['steel-mesh', 'stones', 'bricks', 'sand', 'steel-profiles', 'square-brick']

const Onboarding = () => {
  return (
    <div className='relative flex overflow-hidden justify-center'>
      {IMAGES.map((name, index) => (
        <div
          key={`${index}-${name}`}
          className='h-[100vh] grow bg-no-repeat min-w-[150px]'
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/images/${name}.jpg")`,
            backgroundSize: 'cover',
          }}
        />
      ))}
      <div className='absolute inset-0 bg-black opacity-40 z-1' />
      <div className='absolute inset-0 bg-white/20 rounded-lg shadow-lg shadow-black/10 backdrop-blur-[1px] border border-white/30'>
        <Image
          width={250}
          height={250}
          src='/logos/adoc_bordeaux_white_text.png'
          alt='Logo Adoc'
          className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20'
        />
      </div>
      <Link href='#empresa' className='absolute bottom-4 text-white cursor-pointer scroll-smooth'>
        <ChevronDown className='size-12' />
      </Link>
    </div>
  )
}

export default Onboarding
