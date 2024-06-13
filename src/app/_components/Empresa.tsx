import Heading from '@/components/domain/Heading'
import { cn } from '@/lib/utils'

interface EmpresaProps {
  className?: string
}

const Empresa = ({ className }: EmpresaProps) => {
  return (
    <section
      id='empresa'
      className={cn('mx-12 pt-32 mb-32 min-h-[500px] flex flex-col items-center justify-center text-center', className)}
    >
      <Heading>Empresa</Heading>
      <p className='max-w-[700px] mb-12'>
        Somos una empresa comprometida con brindar soluciones para la construcción, especializándonos en la venta de
        materiales de calidad. Nos destacamos por ofrecer precios competitivos y un servicio personalizado que se adapta
        a las necesidades de cada cliente
      </p>
      <div className='space-y-6 md:columns-3 md:space-x-6 max-w-[1200px]'>
        <article>
          <h2 className='text-lg font-bold'>Entregas</h2>
          <p>Entregamos en todo Zona Norte y Capital Federal.</p>
        </article>
        <article>
          <h2 className='text-lg font-bold'>Venta Minorista y Mayorista</h2>
          <p>
            Realizamos ventas a consumidor final, obras y desarrollos inmobiliarios; así como también ventas al por
            mayor a empresas del rubro.
          </p>
        </article>
        <article>
          <h2 className='text-lg font-bold'>Acopio</h2>
          <p>Brindamos servicio de acopio acorde a las necesidades y plazos puntuales de cada cliente.</p>
        </article>
      </div>
    </section>
  )
}

export default Empresa
