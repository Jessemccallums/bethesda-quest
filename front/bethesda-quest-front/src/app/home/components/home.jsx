import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.titlebox}>
        <h1 className={styles.title}>
          Welcome To <br />Bethesda Quest
        </h1>
      </div>
        <div>
          <Image src="./bg_home.svg" layout='fill' className={styles.bg}   alt="" />
        </div>
        <div>
          <Image src="./card-home.svg" width={200} height={200} className={styles.bg1}   alt="" />
        </div>
        <div>
          <button className={styles.btn_img}>
            <Image src="./btn.svg" width={100} height={100} className={styles.btn}/>
          </button>
        </div>
    </div>
  )
}
