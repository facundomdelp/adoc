import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { gotham } from '@/lib/fonts'
import Header from './_components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={cn(gotham.className, '')}>
        <Header />
        {children}
      </body>
    </html>
  )
}
