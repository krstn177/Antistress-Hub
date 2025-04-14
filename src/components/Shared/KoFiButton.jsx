import styles from './KoFiButton.module.css';

function KoFiButton() {
  return (
    <div className={styles.koFiContainer}>
      <a 
        href='https://ko-fi.com/T6T71DH6UW' 
        target='_blank' 
        rel='noopener noreferrer'
        className={styles.kofiButton}
      >
        <span className={styles.kofiText}>
          <img 
            src='https://storage.ko-fi.com/cdn/cup-border.png' 
            alt="Ko-fi donations" 
            className={styles.kofiImg}
          />
          Support Our Efforts
        </span>
      </a>
    </div>
  );
}

export default KoFiButton; 