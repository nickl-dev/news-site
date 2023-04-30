import Image from 'next/image'
import Link from 'next/link'

export default function TopBar() {
  return (
    <nav className='p-4 sm:px-6 md:px-8 fixed w-full bg-black'>
      <Link href='/'>
        <Image
          alt='News Icon'
          className='inline'
          src='/assets/icons/news-app-icon.png'
          width={40}
          height={40}
        />
        <p className='inline ml-2 sm:text-xl align-bottom font-extrabold tracking-tight'>
          {process.env.NEXT_PUBLIC_SITE_TITLE}
        </p>
      </Link>
    </nav>
  )
}
