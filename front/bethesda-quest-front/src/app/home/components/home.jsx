import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.home}>
        <div>
          <Image src="./bg_home.svg" width={200} height={200} className={styles.bg}   alt="" />
        </div>
    </div>
  )
}
