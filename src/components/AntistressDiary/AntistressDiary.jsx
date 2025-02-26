import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './AntistressDiary.module.css'
import topMessages from './topMessages.json'
import bottomMessages from './bottomMessages.json'


function AntistressDiary() {
  const [isAnimating, setIsAnimating] = useState(false)
  const rowsPerPage = 10
  const [pages, setPages] = useState([{isTop: true, message: topMessages.messages[0], content: ''}])

  const handleThrowAway = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      setPages([{isTop: true, message: topMessages.messages[0], content: ''}])
    }, 2000)
  }

  //Make handleChangeText function

  const handleNewPage = () => {
    if (pages[pages.length - 1].isTop) {
      const randomBottomMessageIndex = Math.floor(Math.random() * (bottomMessages.messages.length))
      setPages([...pages, {
        isTop: false, 
        message: bottomMessages.messages[randomBottomMessageIndex],
        content: ''
      }])
    } else {
      const randomTopMessageIndex = Math.floor(Math.random() * (topMessages.messages.length))
      setPages([...pages, {
        isTop: true, 
        message: topMessages.messages[randomTopMessageIndex],
        content: ''
      }])
    }
  }

  const handleTextChange = (index, value) => {
    setPages(prevPages => {
      const newPages = [...prevPages]
      newPages[index] = { ...newPages[index], content: value }
      return newPages
    })
  }

  //Make new page animation
  //Make change text button and throw away button on both sides of the header text
  const renderPage = (page, index) => {
    return (
      <div key={index} className={`${styles.page} ${isAnimating ? styles.throwAnimation : ''}`}>
        {page.isTop && (
          <div className={styles.topPage}>
            {page.message.lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
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
            {page.message.lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
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