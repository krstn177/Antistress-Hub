import { HeroSection } from './components/HeroSection/HeroSection'
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection'
import { HowItWorksSection } from './components/HowItWorksSection/HowItWorksSection'
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection'
import { CtaSection } from './components/CtaSection/CtaSection'
import { Footer } from './components/Footer/Footer'
import styles from './Home.module.css'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    // Set background colors for home page - using a gradient-like color from your existing gradient
    document.documentElement.style.setProperty('--page-background', '#673ab7')
    document.documentElement.style.setProperty('--safe-area-background', '#673ab7')
    
    // Clean up when component unmounts
    return () => {
      document.documentElement.style.setProperty('--page-background', '#ffffff')
      document.documentElement.style.setProperty('--safe-area-background', '#ffffff')
    }
  }, [])

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