import Image from 'next/image'
import Link from 'next/link'

export default function TopBar() {
  return (
    <nav className='mb-10 p-4 fixed w-full bg-black'>
      <Link href='/'>
        <Image
          alt='News Icon'
          className='inline'
          src='/assets/icons/news-app-icon.png'
          width={40}
          height={40}
        />
        <p className='inline ml-2 text-3xl align-bottom font-extrabold'>{process.env.NEXT_PUBLIC_SITE_TITLE}</p>
      </Link>
    </nav>
  )
}
