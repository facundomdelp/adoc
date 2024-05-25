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
      id='empresa'
      className='mx-12 my-32 min-h-[500px] flex flex-col items-center justify-center text-center md:text-justify'
    >
      <Heading>Contacto</Heading>
      <div>
        <ul className='max-w-[500px] space-y-4 text-lg'>
          {CONTACT_INFO.map(({ slug, Icon, data, link }) => (
            <li key={slug} className='flex gap-3 items-center cursor-default'>
              <Icon size={18} />
              {link ? (
                <a href={link} className='hover:underline' target='_blank'>
                  {data}
                </a>
              ) : (
                data
              )}
            </li>
          ))}
        </ul>
        <iframe src='https://www.google.com/maps/place/-34.452534,+-58.945800/@-34.4524533,-58.9454567,19z/data=!4m4!3m3!8m2!3d-34.452534!4d-58.9458' />
      </div>
    </section>
  )
}

export default Contacto
