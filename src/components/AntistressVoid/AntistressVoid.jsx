import { useRef, useState } from 'react'
import styles from './AntistressVoid.module.css'

function AntistressVoid() {
  const videoRef = useRef(null);
  const [text, setText] = useState('');
  const [isRolling, setIsRolling] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleRollText = () => {
    if (text.trim()) {
      setIsRolling(true);
      
      // Calculate dynamic timeout based on text length
      const baseTimeout = 15000; // 15 seconds base
      const extraTimePerChar = 30; // 30ms per character 
      const timeout = baseTimeout + (text.length * extraTimePerChar);
      
      setTimeout(() => {
        setIsRolling(false);
        setText('');
      }, timeout);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video 
          ref={videoRef}
          className={styles.backgroundVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          crossOrigin="anonymous"
        >
          <source src="/videos/blackHoleHD.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className={styles.content}>
        <h1>Antistress Void</h1>
        {isRolling ? (
          <div className={styles.StarWarsContainer}>
            <div 
              className={styles.textContainer} 
              style={{ '--text-length': text.length }}
            >
              <div className={styles.text}>
                {text} 
              </div>
            </div>
          </div>
        ): (
          <div className={styles.textareaContainer}>
            <textarea 
              className={styles.textarea}
              placeholder="Share your thoughts with the void..."
              maxLength={1000}
              rows={10}
              value={text}
              onChange={handleTextChange}
            />
            {text.length > 0 && (
              <p className={styles.characterCount}>
                {text.length} / 1000
              </p>
            )}
            <button 
              className={styles.rollButton}
              onClick={handleRollText}
              disabled={!text.trim()}
            >
              Release to the Void
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AntistressVoid 