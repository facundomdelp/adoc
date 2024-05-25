import { cn } from '@/lib/utils'

interface HeadingProps {
  children: string
}

const Heading = ({ children, ...headingProps }: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 {...headingProps} className='uppercase adoc-underline mb-10 text-center'>
      {children}
    </h1>
  )
}

export default Heading
