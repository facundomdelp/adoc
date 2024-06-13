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

const Productos = () => {
  const [hovered, setHovered] = useState(-1)

  return (
    <section id='productos' className='w-full flex flex-col items-center justify-center pt-32 mb-32'>
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
                'absolute inset-0 bg-bordeaux transition-all flex items-center justify-center text-lg duration-300 uppercase text-center p-4 break-words',
                hovered === index ? 'opacity-1' : 'opacity-0'
              )}
              dangerouslySetInnerHTML={{ __html: name }}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Productos
