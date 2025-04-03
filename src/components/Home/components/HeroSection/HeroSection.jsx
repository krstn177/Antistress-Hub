import { Link } from 'react-router-dom'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Welcome to the Antistress Space</h1>
        <p className={styles.subtitle}>Your absolutely free digital sanctuary for mental wellness</p>
        <div className={styles.heroButtons}>
          <Link to="/diary" className={`${styles.ctaButton} ${styles.diaryButton}`}>
            Go to Diary
          </Link>
          <Link to="/void" className={`${styles.ctaButton} ${styles.voidButton}`}>
            Experience the Void
          </Link>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img 
          src="/pictures/HERO-IMAGE(3).webp" 
          alt="Antistress Hero"
          loading="eager"
          width="1200"
          height="800"
          className={styles.heroImg}
        />
      </div>
    </header>
  )
} 