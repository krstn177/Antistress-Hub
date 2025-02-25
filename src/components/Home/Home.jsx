import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Antistress</h1>
      <div className={styles.links}>
        <Link to="/diary" className={styles.link}>
          Antistress Diary
        </Link>
        <Link to="/void" className={styles.link}>
          Antistress Void
        </Link>
      </div>
    </div>
  )
}

export default Home 