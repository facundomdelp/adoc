'use client'

import Heading from '@/components/domain/Heading'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

const PRODUCTOS = [
  {
    name: 'Ladrillos',
    slug: 'bricks',
  },
  {
    name: 'Arena',
    slug: 'sand',
  },
  {
    name: 'Ladrillo Hueco',
    slug: 'square-brick',
  },
  {
    name: 'Mallas',
    slug: 'steel-mesh',
  },
  {
    name: 'Hierro',
    slug: 'steel-profiles',
  },
  {
    name: 'Piedra',
    slug: 'stones',
  },
  {
    name: 'Chapa',
    slug: 'sheet-steel',
  },
  {
    name: 'Alambre',
    slug: 'wire',
  },
  {
    name: 'Clavos',
    slug: 'nails',
  },
  {
    name: 'Pegamentos',
    slug: 'glues',
  },
  {
    name: 'Cemento',
    slug: 'cement',
  },
  {
    name: 'Impermea<wbr>bilizantes',
    slug: 'water-proofing',
  },
]

interface ProductosProps {
  className?: string
}

const Productos = ({ className }: ProductosProps) => {
  return (
    <section id='productos' className={cn('w-full flex flex-col items-center justify-center pt-32 mb-32', className)}>
      <Heading>Productos</Heading>
      <ul className='flex flex-wrap gap-4 items-center justify-center w-full m-2'>
        {PRODUCTOS.map(({ name, slug }, index) => (
          <Producto key={`${index}-${slug}`} slug={slug} name={name} />
        ))}
      </ul>
    </section>
  )
}

interface ProductoProps {
  slug: string
  name: string
}

const Producto = ({ slug, name }: ProductoProps) => {
  const [hovered, setHovered] = useState(false)
  const [animate, setAnimate] = useState(false)

  return (
    <>
      <li
        className={cn(
          'relative bg-no-repeat w-[20%] min-w-[40%] aspect-[3/2] sm:min-w-[30%] md:min-w-[20%] bg-cover transition-all',
          'opacity-0',
          animate && 'animate-fade-in'
        )}
        style={{
          backgroundImage: `url("/images/${slug}.jpg")`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Waypoint onEnter={() => setAnimate(true)} />
        <p
          className={cn(
            'absolute inset-0 bg-bordeaux transition-all flex items-center justify-center text-lg duration-300 uppercase text-center p-4 break-words',
            hovered ? 'opacity-1' : 'opacity-0'
          )}
          dangerouslySetInnerHTML={{ __html: name }}
        />
      </li>
    </>
  )
}

export default Productos
