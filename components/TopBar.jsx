import Image from 'next/image'
import Link from 'next/link'

export default function TopBar() {
  return (
    <nav className='mb-10 p-4 shadow-md fixed w-full bg-neutral-50'>
      <Link href='/'>
        <Image
          alt='News Icon'
          className='inline'
          src='/assets/icons/news-app-icon-black.png'
          width={40}
          height={40}
        />
        <p className='inline ml-2 text-2xl align-bottom font-georgia font-semibold'>Simple News</p>
      </Link>
    </nav>
  )
}
