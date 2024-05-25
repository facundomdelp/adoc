import localFont from 'next/font/local'

export const gotham = localFont({
  src: [
    {
      path: '../../public/fonts/GothamBold.ttf',
      style: 'normal',
      weight: 'bold',
    },
    {
      path: '../../public/fonts/GothamMedium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/fonts/GothamBook.ttf',
      style: 'normal',
      weight: 'normal',
    },
  ],
  variable: '--gotham',
})
