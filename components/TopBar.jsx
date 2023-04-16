import React from 'react'
import Image from 'next/image'
import TopBarStyles from '../styles/TopBar.module.scss'

export default function TopBar() {
  return (
    <nav className={TopBarStyles.topbar}>
      <Image
        alt='News Icon'
        className={TopBarStyles.image}
        src='/assets/icons/news-app-icon-black.png'
        width={50}
        height={50}
      />
      <p className={TopBarStyles.site_name}>Simple News</p>
    </nav>
  )
}
