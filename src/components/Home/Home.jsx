import { HeroSection } from './components/HeroSection/HeroSection'
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection'
import { HowItWorksSection } from './components/HowItWorksSection/HowItWorksSection'
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection'
import { CtaSection } from './components/CtaSection/CtaSection'
import { Footer } from './components/Footer/Footer'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  )
} 
export default Home