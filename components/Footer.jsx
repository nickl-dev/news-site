import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className='flex flex-1 justify-center items-center py-4 border-t-[1px] border-neutral-300'>
        <a
          className='flex justify-center items-center grow'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          By
          <span className='h-4 ml-2'>
            <Image
              src='/assets/images/vercel.svg'
              alt='Vercel Logo'
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </>
  )
}
