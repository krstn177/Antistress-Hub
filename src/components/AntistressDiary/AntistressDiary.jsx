import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './AntistressDiary.module.css'
import topMessages from './topMessages.json'
import bottomMessages from './bottomMessages.json'


function AntistressDiary() {
  const [isAnimating, setIsAnimating] = useState(false)
  const rowsPerPage = 10
  const [pages, setPages] = useState([{isTop: true, messageIndex: 0, content: ''}, {isTop: false, messageIndex: 0, content: ''}])
  const [charsLimit, setCharsLimit] = useState(0)

  useEffect(() => {
    const textarea = document.getElementsByClassName(styles.textarea)[0];
    if (textarea) {
      const linesPerTextarea = Math.floor(textarea.clientHeight / parseInt(getComputedStyle(textarea).lineHeight));
      const charsPerLine = Math.floor(textarea.clientWidth / (parseInt(getComputedStyle(textarea).fontSize) * 0.6));
      setCharsLimit(linesPerTextarea * charsPerLine);
    }
  }, []); // Empty dependency array means this runs once on mount

  const handleThrowAway = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      setPages([{isTop: true, messageIndex: 0, content: ''}, {isTop: false, messageIndex: 0, content: ''}])
    }, 2000)
  }

  const handleChangeMessage = (index) => {
    setPages(prevPages => {
      const newPages = [...prevPages]
      const currentPage = newPages[index]
      
      if (currentPage.isTop) {
        newPages[index] = {
          ...currentPage,
          messageIndex: (currentPage.messageIndex + 1) % topMessages.messages.length
        }
      } else {
        newPages[index] = {
          ...currentPage,
          messageIndex: (currentPage.messageIndex + 1) % bottomMessages.messages.length
        }
      }
      return newPages
    })
  }

  const handleNewPage = () => {
    if (pages[pages.length - 1].isTop) {
      const randomIndex = Math.floor(Math.random() * bottomMessages.messages.length)
      setPages([...pages, {
        isTop: false, 
        messageIndex: randomIndex,
        content: ''
      }])
    } else {
      const randomIndex = Math.floor(Math.random() * topMessages.messages.length)
      setPages([...pages, {
        isTop: true, 
        messageIndex: randomIndex,
        content: ''
      }])
    }
  }

  const handleTextChange = (index, value) => {
    setPages(prevPages => {
      const newPages = [...prevPages];
      const textarea = document.getElementsByClassName(styles.textarea)[index];
      
      // If we've reached or about to reach the scroll limit
      if (textarea && 
          (textarea.scrollHeight > textarea.clientHeight || 
           // Check if we're at the limit and about to overflow
           (value.length >= charsLimit && value[charsLimit - 2] === ' '))) {
        
        // Find the last line break or space before the limit
        const lastBreakIndex = value.lastIndexOf('\n', charsLimit - 2); // Adjust limit to prevent space at end
        const lastSpaceIndex = value.lastIndexOf(' ', charsLimit - 2);
        const splitIndex = Math.max(lastBreakIndex, lastSpaceIndex);
        
        const firstPart = value.substring(0, splitIndex > 0 ? splitIndex : charsLimit - 2);
        const remainingText = value.substring(splitIndex > 0 ? splitIndex + 1 : charsLimit - 2);
        
        // Update current page with first part
        newPages[index] = { ...newPages[index], content: firstPart };
        
        // Create new page or update next page
        if (index === newPages.length - 1) {
          const isCurrentTop = newPages[index].isTop;
          const messages = !isCurrentTop ? topMessages.messages : bottomMessages.messages;
          const randomIndex = Math.floor(Math.random() * messages.length);
          
          newPages.push({
            isTop: !isCurrentTop,
            messageIndex: randomIndex,
            content: remainingText
          });

          // Use setTimeout to focus on the new textarea after it's rendered
          setTimeout(() => {
            const textareas = document.getElementsByClassName(styles.textarea);
            const nextTextarea = textareas[index + 1];
            if (nextTextarea) {
              nextTextarea.focus();
              // Place cursor at the end of the text
              nextTextarea.setSelectionRange(remainingText.length, remainingText.length);
            }
          }, 0);
        } else {
          // Update existing next page
          newPages[index + 1] = {
            ...newPages[index + 1],
            content: remainingText + (newPages[index + 1].content || '')
          };

          // Focus on the next textarea
          setTimeout(() => {
            const textareas = document.getElementsByClassName(styles.textarea);
            const nextTextarea = textareas[index + 1];
            if (nextTextarea) {
              nextTextarea.focus();
              // Place cursor at the end of the remaining text
              nextTextarea.setSelectionRange(remainingText.length, remainingText.length);
            }
          }, 0);
        }
      } else {
        // Normal update if we haven't reached the end
        newPages[index] = { ...newPages[index], content: value };
      }
      
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
                className={styles.changeTextButton}
                onClick={() => handleChangeMessage(index)}
              >
                <span>↻</span>
              </button>
              <div className={styles.messageText}>
                {message.lines.map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        )}
        <textarea 
          className={styles.textarea}
          rows={rowsPerPage}
          placeholder="Write down what's troubling you..."
          value={page.content}
          onChange={(e) => handleTextChange(index, e.target.value)}
        />
        {!page.isTop && (
          <div className={styles.bottomPage}>
            <div className={styles.messageHeader}>
              <div className={styles.messageText}>
                {message.lines.map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              </div>
              <button 
                className={styles.changeTextButton}
                onClick={() => handleChangeMessage(index)}
              >
                <span>↻</span>
              </button>
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
      <button 
        className={styles.throwButton}
        onClick={handleThrowAway}
        disabled={isAnimating}
      >
        🗑️
      </button>
      <div className={styles.recycleBin}>
        🗑️
      </div>
    </div>
  )
}

export default AntistressDiary