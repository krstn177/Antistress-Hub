import styles from './TestimonialsSection.module.css'

export function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>What Our Users Say</h2>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <div className={styles.testimonialContent}>
            <p>"The Antistress Diary has become my daily ritual. It helps me process my thoughts and stay balanced."</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.avatarPlaceholder}>
                <img 
                  src="/pictures/review-2.webp" 
                  alt="Sarah K.'s profile"
                  loading="lazy"
                />
              </div>
              <span>Sarah K.</span>
            </div>
          </div>
        </div>
        
        <div className={styles.testimonial}>
          <div className={styles.testimonialContent}>
            <p>"I love the Void feature! There's something so therapeutic about watching my worries disappear into nothingness."</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.avatarPlaceholder}>
                <img 
                  src="/pictures/review-1.webp" 
                  alt="Michael T.'s profile"
                  loading="lazy"
                />
              </div>
              <span>Michael T.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 