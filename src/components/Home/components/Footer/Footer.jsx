import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Antistress Space. All rights reserved.
        </p>
        <div className={styles.links}>
          <a 
            href="https://www.vecteezy.com/free-videos/black-hole" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            Black Hole Stock Videos by Vecteezy
          </a>
          <span className={styles.separator}>•</span>
          <a href="/terms" className={styles.link}>Terms & Conditions</a>
          <span className={styles.separator}>•</span>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
} 