import Heading from '@/components/domain/Heading'

const Empresa = () => {
  return (
    <section
      id='empresa'
      className='mx-12 pt-32 mb-32 min-h-[500px] flex flex-col items-center justify-center text-center'
    >
      <Heading>Empresa</Heading>
      <p className='max-w-[700px] mb-12'>
        Somos una empresa comprometida con brindar soluciones para la construcción, especializándonos en la venta de
        materiales de calidad. Nos destacamos por ofrecer precios competitivos y un servicio personalizado que se adapta
        a las necesidades de cada cliente
      </p>
      <div className='space-y-6 md:columns-3 md:space-x-6 max-w-[1200px]'>
        <article>
          <h2 className='text-lg font-bold'>Lorem</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae fugit quae ratione, dolorem ipsa?</p>
        </article>
        <article>
          <h2 className='text-lg font-bold'>Lorem</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae fugit quae ratione, dolorem ipsa?</p>
        </article>
        <article>
          <h2 className='text-lg font-bold'>Lorem</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae fugit quae ratione, dolorem ipsa?</p>
        </article>
      </div>
    </section>
  )
}

export default Empresa
