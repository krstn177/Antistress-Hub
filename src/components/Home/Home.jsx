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
    // Set background colors directly
    document.documentElement.style.backgroundColor = '#673ab7';
    document.body.style.backgroundColor = '#673ab7';
    
    // Clean up when component unmounts
    return () => {
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
    };
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