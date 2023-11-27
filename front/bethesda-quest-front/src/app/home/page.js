import Image from 'next/image'
import styles from './home.module.css'
import Home from './components/home'

export default function home() {
  return (
    <div className={styles.main}>
      <Home /> 
    </div>
  )
}
