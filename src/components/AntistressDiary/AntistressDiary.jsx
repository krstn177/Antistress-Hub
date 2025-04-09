import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './AntistressDiary.module.css'
import topMessages from './topMessages.json'
import bottomMessages from './bottomMessages.json'

const isIOSSafari = () => {
  const ua = window.navigator.userAgent;
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  const webkit = !!ua.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/FxiOS/i);
  return iOSSafari;
};

function AntistressDiary() {
  const [isIOS, setIsIOS] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [releaseMessageIndex, setReleaseMessageIndex] = useState(0)
  const rowsPerPage = 10
  
  // Add this helper function
  const getRandomMessageIndex = (isTop) => {
    const messagesArray = isTop ? topMessages.messages : bottomMessages.messages;
    return Math.floor(Math.random() * messagesArray.length);
  }
  
  const [pages, setPages] = useState([
    {
      isTop: true, 
      messageIndex: getRandomMessageIndex(true),
      content: ''
    }, 
    {
      isTop: false, 
      messageIndex: getRandomMessageIndex(false),
      content: ''
    }
  ]);
  
  const textareaRefs = useRef([]);

  // Define the message variants
  const releaseMessages = [
    { emoji: '👍', text: 'Well done!' },
    { emoji: '😉', text: 'Brilliantly done!' },
    { emoji: '✔️', text: 'Good job!' }
  ];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsIOS(isIOSSafari());
    // Set background colors for diary page
    document.documentElement.style.setProperty('--page-background', '#2d5a27');
    document.documentElement.style.setProperty('--safe-area-background', '#2d5a27');
    
    // Clean up when component unmounts
    return () => {
      document.documentElement.style.setProperty('--page-background', '#ffffff');
      document.documentElement.style.setProperty('--safe-area-background', '#ffffff');
    };
  }, []);

  const handleThrowAway = () => {
    setIsAnimating(true);
    // Show the recycle bin
    const recycleBin = document.getElementsByClassName(styles.recycleBin)[0];
    recycleBin.classList.add(styles.visible);

    // Rotate to the next message
    setReleaseMessageIndex(prevIndex => (prevIndex + 1) % releaseMessages.length);

    // Show message when papers are partway through the animation
    setTimeout(() => {
      setShowMessage(true);
    }, 2800);

    // Hide message before the animation ends
    setTimeout(() => {
      setShowMessage(false);
    }, 4800);

    // Reset pages after animation completes
    setTimeout(() => {
      setIsAnimating(false);
      recycleBin.classList.remove(styles.visible);
      setPages([
        {
          isTop: true, 
          messageIndex: getRandomMessageIndex(true),
          content: ''
        }, 
        {
          isTop: false, 
          messageIndex: getRandomMessageIndex(false),
          content: ''
        }
      ]);
    }, 5000); 
  }

  const handleChangeMessage = (index, direction) => {
    setPages(prevPages => {
      const newPages = [...prevPages];
      const currentPage = newPages[index];

      if (currentPage.isTop) {
        newPages[index] = {
          ...currentPage,
          messageIndex: (currentPage.messageIndex + direction + topMessages.messages.length) % topMessages.messages.length
        };
      } else {
        newPages[index] = {
          ...currentPage,
          messageIndex: (currentPage.messageIndex + direction + bottomMessages.messages.length) % bottomMessages.messages.length
        };
      }
      return newPages;
    });
  };

  const handleNewPage = () => {
    if (pages[pages.length - 1].isTop) {
      setPages([...pages, {
        isTop: false, 
        messageIndex: getRandomMessageIndex(false),
        content: ''
      }])
    } else {
      setPages([...pages, {
        isTop: true, 
        messageIndex: getRandomMessageIndex(true),
        content: ''
      }])
    }
  }

  const handleTextChange = (index, value) => {
    const textarea = textareaRefs.current[index];
    
    // Check if overflow occurred
    if (textarea && textarea.scrollHeight > textarea.offsetHeight) {
      // Find the last space position in the text
      const lastSpaceIndex = value.lastIndexOf(' ');
      
      if (lastSpaceIndex !== -1) {
        // Split the content at the last space
        let contentBeforeSpace = value.substring(0, lastSpaceIndex);
        let contentAfterSpace = value.substring(lastSpaceIndex + 1);

        if (contentAfterSpace.length > 20) {
          // If contentAfterSpace is longer than 20 characters
          // Keep all but the last 5 characters on the current page
          const keepOnCurrentPage = contentAfterSpace.length - 5;
          const charsToMove = contentAfterSpace.substring(0, keepOnCurrentPage);
          const remainingChars = contentAfterSpace.substring(keepOnCurrentPage);
          
          // Update the content variables
          const updatedBeforeSpace = contentBeforeSpace + ' ' + charsToMove + '-';
          const updatedAfterSpace = remainingChars;
          
          // Reassign the variables
          contentBeforeSpace = updatedBeforeSpace;
          contentAfterSpace = updatedAfterSpace;
        }
        
        // Update page content and create overflow page
        handlePageOverflow(index, contentBeforeSpace, contentAfterSpace);
      } else {
        // No space found - handle text with no spaces
        // Keep all except the last 5 characters on the current page
        const contentBeforeSplit = value.substring(0, value.length - 5) + '-';
        const contentAfterSplit = value.substring(value.length - 5);
        
        // Update page content and create overflow page
        handlePageOverflow(index, contentBeforeSplit, contentAfterSplit);
      }
    } else {
      // No overflow, just update the current page
      setPages(prevPages => {
        const newPages = [...prevPages];
        newPages[index] = { ...newPages[index], content: value };
        return newPages;
      });
    }
  };

  // Helper function to handle page overflow and creation
  const handlePageOverflow = (index, contentBefore, contentAfter) => {
    setPages(prevPages => {
      const newPages = [...prevPages];
      newPages[index] = { ...newPages[index], content: contentBefore };
      
      // Check if we need to create a new page
      if (index === newPages.length - 1) {
        // Create a new page with the overflow content
        const isTop = !newPages[index].isTop;
        const messagesArray = isTop ? topMessages.messages : bottomMessages.messages;
        const randomIndex = Math.floor(Math.random() * messagesArray.length);
        
        newPages.push({
          isTop,
          messageIndex: randomIndex,
          content: contentAfter
        });
      } else {
        // Add overflow content to the beginning of the next page
        const nextPageContent = newPages[index + 1].content;
        newPages[index + 1] = {
          ...newPages[index + 1],
          content: contentAfter + (nextPageContent ? ' ' + nextPageContent : '')
        };
      }
      
      // Focus the next page's textarea after state update
      setTimeout(() => {
        if (textareaRefs.current[index + 1]) {
          const nextTextarea = textareaRefs.current[index + 1];
          nextTextarea.focus();
          nextTextarea.selectionStart = contentAfter.length;
          nextTextarea.selectionEnd = contentAfter.length;
        }
      }, 0);
      
      return newPages;
    });
  };

  
  const renderPage = (page, index) => {
    const message = page.isTop 
      ? topMessages.messages[page.messageIndex]
      : bottomMessages.messages[page.messageIndex]

    return (
      <div key={index} className={`${styles.page} ${isAnimating ? styles.throwAnimation : ''}`}>
        {page.isTop && (
          <div className={styles.topPage}>
            <div className={styles.messageHeader}>
              <button 
                id={styles.previousBtn}
                className={styles.changeTextButton}
                onClick={() => handleChangeMessage(index, -1)}
                aria-label="Previous message"
              >
                <span><i className="fa-regular fa-circle-left"></i></span>
              </button>
              <div className={styles.messageText}>
                <p>{message}</p>
              </div>
              <button 
                id={styles.nextBtn}
                className={styles.changeTextButton}
                onClick={() => handleChangeMessage(index, 1)}
                aria-label="Next message"
              >
                <span><i className="fa-regular fa-circle-right"></i></span>
              </button>
              <div className={styles.mobileBtnContainer}>
                <button 
                  className={styles.changeTextButton}
                  onClick={() => handleChangeMessage(index, -1)}
                  aria-label="Previous message"
                >
                  <span><i className="fa-regular fa-circle-left"></i></span>
                </button>
                <button 
                  className={styles.changeTextButton}
                  onClick={() => handleChangeMessage(index, 1)}
                  aria-label="Next message"
                >
                  <span><i className="fa-regular fa-circle-right"></i></span>
                </button>
              </div>
            </div>
          </div>
        )}
        <textarea
          ref={el => textareaRefs.current[index] = el}
          className={styles.textarea}
          rows={rowsPerPage}
          placeholder="Write down what's troubling you..."
          value={page.content}
          onChange={(e) => handleTextChange(index, e.target.value)}
        />
        {!page.isTop && (
          <div className={styles.bottomPage}>
            <div className={styles.messageHeader}>
              <button 
                id={styles.previousBtn}
                className={styles.changeTextButton}
                onClick={() => handleChangeMessage(index, -1)}
                aria-label="Previous message"
              >
                <span><i className="fa-regular fa-circle-left"></i></span>
              </button>
              <div className={styles.messageText}>
                <p>{message}</p>
              </div>
              <button 
                id={styles.nextBtn}
                className={styles.changeTextButton}
                onClick={() => handleChangeMessage(index, 1)}
                aria-label="Next message"
              >
                <span><i className="fa-regular fa-circle-right"></i></span>
              </button>
              <div className={styles.mobileBtnContainer}>
                <button 
                  className={styles.changeTextButton}
                  onClick={() => handleChangeMessage(index, -1)}
                  aria-label="Previous message"
                >
                  <span><i className="fa-regular fa-circle-left"></i></span>
                </button>
                <button 
                  className={styles.changeTextButton}
                  onClick={() => handleChangeMessage(index, 1)}
                  aria-label="Next message"
                >
                  <span><i className="fa-regular fa-circle-right"></i></span>
                </button>
              </div>
            </div>
          </div>
        )}
        {index === pages.length - 1 && (
          <button className={styles.addButton} onClick={handleNewPage}>
            Press for a new page
          </button>
        )}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Go back
      </Link>
      {pages.map((page, index) => renderPage(page, index))}
      {!isAnimating && (
        isIOS ? (
          <div className={styles.iosButtonContainer}>
            <button 
              className={`${styles.throwButton} ${styles.iosThrowButton}`}
              onClick={handleThrowAway}
              disabled={isAnimating}
              aria-label="Throw away pages"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ) : (
          <button 
            className={styles.throwButton}
            onClick={handleThrowAway}
            disabled={isAnimating}
            aria-label="Throw away pages"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        )
      )}

      {showMessage && <div className={styles.releaseMessage}>
        <p style={{fontSize: '65px', marginBottom: '5px'}}>{releaseMessages[releaseMessageIndex].emoji}</p>
        <p style={{marginTop: '5px'}}>{releaseMessages[releaseMessageIndex].text}</p>
      </div>}

      <div className={styles.recycleBin}>
        <img className={styles.recycleBinImg} src="/pictures/recycle-bin.png" alt="recycle bin" />
      </div>
    </div>
  )
}

export default AntistressDiary