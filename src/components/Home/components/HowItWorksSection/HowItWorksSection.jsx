import styles from './HowItWorksSection.module.css'

export function HowItWorksSection() {
  return (
    <section id="about" className={styles.howItWorksSection}>
      <h2 className={styles.sectionTitle}>How Antistress Works</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <div className={styles.iconPlaceholder}>1</div>
          </div>
          <h3>Choose Your Method</h3>
          <p>Select between the diary or void based on your current needs and preferences.</p>
        </div>
        
        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <div className={styles.iconPlaceholder}>2</div>
          </div>
          <h3>Express Yourself</h3>
          <p>Write freely without judgment, letting your thoughts and emotions flow naturally.</p>
        </div>
        
        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <div className={styles.iconPlaceholder}>3</div>
          </div>
          <h3>Feel Relief</h3>
          <p>Experience the calming effect of releasing your stress in a healthy, constructive way.</p>
        </div>
      </div>
    </section>
  )
} 