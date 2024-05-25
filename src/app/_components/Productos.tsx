'use client'

import Heading from '@/components/domain/Heading'
import { cn } from '@/lib/utils'
import { useState } from 'react'

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
]

const Productos = () => {
  const [hovered, setHovered] = useState(-1)

  return (
    <section className='w-full flex flex-col items-center justify-center my-32'>
      <Heading>Productos</Heading>
      <ul className='flex flex-wrap gap-4 items-center justify-center w-full m-2'>
        {PRODUCTOS.map(({ name, slug }, index) => (
          <li
            key={`${index}-${slug}`}
            className={cn(
              'relative bg-no-repeat w-[20%] min-w-[40%] aspect-[3/2] sm:min-w-[30%] md:min-w-[20%] bg-cover transition-all'
            )}
            style={{
              backgroundImage: `url("/images/${slug}.jpg")`,
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(-1)}
          >
            <p
              className={cn(
                'absolute inset-0 bg-bordeaux transition-all flex items-center justify-center text-lg duration-300 uppercase',
                hovered === index ? 'opacity-1' : 'opacity-0'
              )}
            >
              {name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Productos
