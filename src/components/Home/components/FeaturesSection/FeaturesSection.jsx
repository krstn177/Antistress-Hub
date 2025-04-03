import { Link } from 'react-router-dom'
import styles from './FeaturesSection.module.css'

export function FeaturesSection() {
  return (
    <section id="features" className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Find Your Peace</h2>
      <p className={styles.sectionSubtitle}>Two powerful ways to release stress and find calm</p>
      
      <div className={styles.cards}>
        <Link to="/diary" className={`${styles.card} ${styles.diaryCard}`}>
          <div className={styles.cardImage}>
            <img 
              src="/pictures/ANTISTRESS-DIARY.webp" 
              alt="Antistress Diary"
              loading="lazy"
            />
          </div>
          <div className={styles.cardContent}>
            <h2>Antistress Diary</h2>
            <p>Write down your thoughts and feelings in a safe, private space. Track your mood and discover patterns in your emotional wellbeing.</p>
            <span className={styles.cardCta}>Start Writing →</span>
          </div>
        </Link>
        
        <Link to="/void" className={`${styles.card} ${styles.voidCard}`}>
          <div className={styles.cardImage}>
            <img 
              src="/pictures/ANTISTRESS-VOID.png" 
              alt="Antistress Void"
              loading="lazy"
            />
          </div>
          <div className={styles.cardContent}>
            <h2>Antistress Void</h2>
            <p>Release your stress, negative thoughts, and anxieties into the void. Watch them disappear and feel the weight lift off your shoulders.</p>
            <span className={styles.cardCta}>Enter the Void →</span>
          </div>
        </Link>
      </div>
    </section>
  )
} 