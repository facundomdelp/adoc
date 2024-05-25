const Empresa = () => {
  return (
    <section id='empresa' className='mx-12 my-32 min-h-[300px] flex flex-col items-center justify-center text-center'>
      <h1 className='uppercase'>Empresa</h1>
      <p className='max-w-[700px] mb-12'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, consequuntur. Quae ab, quibusdam veniam fuga
        temporibus eaque perspiciatis facere accusantium veritatis enim accusamus, sapiente optio dolorum voluptatum
        blanditiis cupiditate incidunt.
      </p>
      <div className='space-y-6 md:columns-3 md:space-x-6'>
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
