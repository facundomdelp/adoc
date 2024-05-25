import Empresa from './_components/Empresa'
import Onboarding from './_components/Onboarding'
import Productos from './_components/Productos'

export default function Home() {
  return (
    <main>
      <Onboarding />
      <Empresa />
      <Productos />
    </main>
  )
}
