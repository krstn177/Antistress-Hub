import { Link } from 'react-router-dom'
import styles from './CtaSection.module.css'

export function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <h2>Ready to Reduce Your Stress?</h2>
      <p>Choose your preferred method and begin your journey to a calmer mind today.</p>
      <div className={styles.ctaButtons}>
        <Link to="/diary" className={`${styles.ctaButton} ${styles.diaryButton}`}>
          Try the Diary
        </Link>
        <Link to="/void" className={`${styles.ctaButton} ${styles.voidButton}`}>
          Experience the Void
        </Link>
      </div>
    </section>
  )
} 