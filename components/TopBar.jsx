import React from 'react'
import Image from 'next/image'

export default function TopBar() {
  return (
    <>
      <Image
        alt='News Icon'
        src='/assets/icons/news-app-icon-white.png'
        width={100}
        height={50}
      />
    </>
  )
}
