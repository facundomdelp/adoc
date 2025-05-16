import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const IMAGES = ['steel-mesh', 'stones', 'bricks', 'sand', 'steel-profiles', 'square-brick']

const getImagePath = (name: string, size = 'full') => {
  if (size === 'thumb') {
    return `/images/thumbnails/${name}_thumb.jpg`
  }

  return `/images/${name}.jpg`
}

const Onboarding = () => {
  const [imageStates, setImageStates] = useState<Record<(typeof IMAGES)[number], string>>(
    IMAGES.reduce((acc, name) => ({ ...acc, [name]: 'initial' }), {})
  )

  useEffect(() => {
    IMAGES.forEach((name) => {
      const thumbImg = new window.Image()
      thumbImg.src = getImagePath(name, 'thumb')
      thumbImg.onload = () => {
        setImageStates((prev) => ({
          ...prev,
          [name]: 'loading',
        }))

        const fullImg = new window.Image()
        fullImg.src = getImagePath(name, 'full')
        fullImg.onload = () => {
          setImageStates((prev) => ({
            ...prev,
            [name]: 'loaded',
          }))
        }
      }
    })
  }, [])

  return (
    <section className='relative flex overflow-hidden justify-center'>
      {IMAGES.map((name, index) => {
        const imageSrc = imageStates[name] === 'initial' ? getImagePath(name, 'thumb') : getImagePath(name, 'full')

        return (
          <div
            key={`${index}-${name}`}
            className='dynamic-100vh grow bg-no-repeat min-w-[150px] transition-all duration-700'
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("${imageSrc}")`,
              backgroundSize: 'cover',
              filter: imageStates[name] === 'loaded' ? 'blur(0)' : 'blur(8px)',
              opacity: imageStates[name] === 'loaded' ? 1 : 0.8,
            }}
          />
        )
      })}

      <div className='absolute inset-0 bg-black opacity-40 z-1' />

      <div className='absolute inset-0 bg-white/20 rounded-lg shadow-lg shadow-black/10 backdrop-blur-[1px] border border-white/30'>
        <div className='relative w-full h-full flex items-center justify-center'>
          <div
            className='absolute w-64 h-64 bg-gray-300 animate-pulse rounded'
            style={{ opacity: imageStates['logo'] === 'loaded' ? 0 : 0.3 }}
          />
          <Image
            width={225}
            height={373.645}
            src='/logos/adoc_bordeaux_white_text.png'
            alt='Logo Adoc'
            className='z-20'
          />
        </div>
      </div>
      <Link
        href='#empresa'
        className={cn(
          'absolute bottom-4 text-white cursor-pointer scroll-smooth',
          'opacity-0 animate-fade-in delay-500'
        )}
      >
        <ChevronDown className='size-12' />
      </Link>
    </section>
  )
}

export default Onboarding
