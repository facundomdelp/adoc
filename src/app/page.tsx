'use client'

import Onboarding from './_components/Onboarding'
import Empresa from './_components/Empresa'
import Productos from './_components/Productos'
import Servicios from './_components/Servicios'
import Contacto from './_components/Contacto'
import { Waypoint } from 'react-waypoint'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Home() {
  const [animate, setAnimate] = useState({
    empresa: false,
    productos: false,
    servicios: false,
    contacto: false,
  })

  return (
    <main>
      <Onboarding />

      <Waypoint onEnter={() => setAnimate({ ...animate, empresa: true })} />
      <Empresa className={cn('opacity-0', animate.empresa && 'animate-slide-up')} />

      <Waypoint onEnter={() => setAnimate({ ...animate, productos: true })} />
      <Productos className={cn('opacity-0', animate.productos && 'animate-slide-up')} />

      <Waypoint onEnter={() => setAnimate({ ...animate, servicios: true })} />
      <Servicios className={cn('opacity-0', animate.servicios && 'animate-slide-up')} />

      <Waypoint onEnter={() => setAnimate({ ...animate, contacto: true })} />
      <Contacto className={cn('opacity-0', animate.contacto && 'animate-slide-up')} />
    </main>
  )
}
