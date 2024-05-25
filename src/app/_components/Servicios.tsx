import Heading from '@/components/domain/Heading'
import Image from 'next/image'

const Servicios = () => {
  return (
    <section
      id='servicios'
      className='m-12 pt-32 mb-32 flex flex-col items-center justify-center text-center md:text-justify'
    >
      <Heading>Servicios</Heading>
      <div className='flex flex-col md:flex-row gap-8 md:gap-20 items-center md:items-start'>
        <Image alt='Construcción' src='/images/construction.jpg' height={180} width={180} />
        <article className='max-w-[500px] space-y-8 text-base'>
          <p>
            Ofrecemos asesoramiento personalizado para ayudarte a elegir los mejores productos para tus proyectos,
            entrega a domicilio rápida y segura, y un servicio posventa dedicado a resolver cualquier duda o
            inconveniente después de la compra.
          </p>
          <p>Construimos juntos tus sueños.</p>
        </article>
      </div>
    </section>
  )
}

export default Servicios
