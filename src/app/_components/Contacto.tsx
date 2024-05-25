import Heading from '@/components/domain/Heading'
import { InstagramIcon, MailIcon, MapPin, PhoneIcon } from 'lucide-react'

const CONTACT_INFO = [
  { slug: 'phone-1', Icon: PhoneIcon, data: '+54 911 5043-8724 (Gonzalo)', link: '' },
  { slug: 'phone-2', Icon: PhoneIcon, data: '+54 911 5940-5008 (Manuel)', link: '' },
  { slug: 'mail', Icon: MailIcon, data: 'info@adocmateriales.com', link: 'mailto:info@adocmateriales.com' },
  { slug: 'instagram', Icon: InstagramIcon, data: '/adocmateriales', link: 'https://instagram.com/adocmateriales' },
  { slug: 'address', Icon: MapPin, data: 'AU Ramal Pilar, KM 57', link: '' },
]

const Contacto = () => {
  return (
    <section
      id='contacto'
      className='pt-32 mb-32 min-h-[500px] flex flex-col items-center justify-center text-center md:text-justify'
    >
      <Heading>Contacto</Heading>
      <div className='flex gap-16 items-center justify-center flex-col lg:flex-row'>
        <ul className='max-w-[500px] space-y-8 text-base sm:text-lg'>
          {CONTACT_INFO.map(({ slug, Icon, data, link }) => (
            <li key={slug} className='flex gap-4 items-center cursor-default text-center justify-center lg:justify-end'>
              <Icon size={18} className='lg:hidden' />
              {link ? (
                <a href={link} className='hover:underline' target='_blank'>
                  {data}
                </a>
              ) : (
                data
              )}
              <Icon size={18} className='hidden lg:block' />
            </li>
          ))}
        </ul>
        <GoogleMap />
      </div>
    </section>
  )
}

const GoogleMap = () => {
  return (
    <div className='max-w-[100%] list-none transition-none overflow-hidden w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]'>
      <div id='gmap-canvas' className='h-[100%] w-[100%] max-w-[100%]'>
        <iframe
          className='h-[100%] w-[100%] border-none'
          frameBorder='0'
          src='https://www.google.com/maps/embed/v1/search?q=Vélez+Sársfield+192,+Pilar,+Provincia+de+Buenos+Aires&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Contacto
