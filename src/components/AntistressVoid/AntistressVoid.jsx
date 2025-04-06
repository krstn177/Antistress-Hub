import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './AntistressVoid.module.css'

function AntistressVoid() {
  const videoRef = useRef(null);
  const textareaRef = useRef(null);
  const [text, setText] = useState('');
  const [isTextShort, setIsTextShort] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  // Focus the textarea when the component mounts
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);
  
  // Focus the textarea when isRolling changes from true to false
  useEffect(() => {
    if (!isRolling && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isRolling]);
  
  useEffect(() => {
    // Set background colors directly
    document.documentElement.style.backgroundColor = '#000000';
    document.body.style.backgroundColor = '#000000';
    
    // Clean up when component unmounts
    return () => {
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleRollText = () => {
    text.length < 40 && setIsTextShort(true);
    if (text.trim()) {
      setIsRolling(true);
      
      // Calculate dynamic timeout based on text length
      const baseTimeout = 15000; // 15 seconds base
      const extraTimePerChar = 30; // 30ms per character 
      const timeout = baseTimeout + (text.length * extraTimePerChar);
      
      setTimeout(() => {
        setIsRolling(false);
        setText('');
        
        // Focus the textarea again after animation completes and component re-renders
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.focus();
          }
        }, 0);
      }, timeout);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };


  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Go back
      </Link>
      <div className={styles.videoContainer}>
        {!isVideoLoaded && <div className={styles.loadingState}>Loading...</div>}
        <video 
          ref={videoRef}
          className={styles.backgroundVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          crossOrigin="anonymous"
          onLoadedData={handleVideoLoad}
        >
          <source src="/videos/blackHoleHD.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className={styles.content}>
        {!isRolling && <h1>Antistress Void</h1>}
        {isRolling ? (
          <div className={styles.StarWarsContainer}>
            <div 
              className={styles.textContainer} 
              style={{ '--text-length': text.length }}
            >
              <div className={`${styles.text} ${isTextShort ? styles.shortText : ''}`}>
                {text} 
              </div>
            </div>
          </div>
        ): (
          <div className={styles.textareaContainer}>
            <textarea 
              ref={textareaRef}
              className={styles.textarea}
              placeholder="Type your burdens here and let the void consume them..."
              maxLength={1000}
              rows={10}
              value={text}
              onChange={handleTextChange}
              autoFocus
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