import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.page}>
      {/* Header/Hero Section */}
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

      {/* Main Features Section */}
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

      {/* How It Works Section */}
      <section id="about" className={styles.howItWorksSection}>
        <h2 className={styles.sectionTitle}>How Antistress Works</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              {/* Placeholder for step icon */}
              <div className={styles.iconPlaceholder}>1</div>
            </div>
            <h3>Choose Your Method</h3>
            <p>Select between the diary or void based on your current needs and preferences.</p>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              {/* Placeholder for step icon */}
              <div className={styles.iconPlaceholder}>2</div>
            </div>
            <h3>Express Yourself</h3>
            <p>Write freely without judgment, letting your thoughts and emotions flow naturally.</p>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              {/* Placeholder for step icon */}
              <div className={styles.iconPlaceholder}>3</div>
            </div>
            <h3>Feel Relief</h3>
            <p>Experience the calming effect of releasing your stress in a healthy, constructive way.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Call to Action */}
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

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Antistress App. Find your peace, anytime, anywhere.</p>
        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact</a>
          <a href="https://www.vecteezy.com/free-videos/space">Void Video by Vecteezy</a>
        </div>
      </footer>
    </div>
  )
}

export default Home 