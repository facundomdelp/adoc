import Onboarding from './_components/Onboarding'
import Empresa from './_components/Empresa'
import Productos from './_components/Productos'
import Servicios from './_components/Servicios'
import Contacto from './_components/Contacto'

export default function Home() {
  return (
    <main>
      <Onboarding />
      <Empresa />
      <Productos />
      <Servicios />
      <Contacto />
    </main>
  )
}
