import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { gotham } from '@/lib/fonts'
import Header from './_components/Header'
import Footer from './_components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'ADOC: Soluciones para la Construcción',
  description: 'Venta de materiales para la construcción.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <head>
        <link rel='icon' href='/manifest/favicon.ico' sizes='any' />
        <link rel='icon' href='/manifest/icon?<generated>' type='image/<generated>' sizes='<generated>' />
        <link
          rel='apple-touch-icon'
          href='/manifest/apple-icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body className={cn(gotham.className, 'bg-black text-white')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
