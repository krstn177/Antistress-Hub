import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './AntistressDiary.module.css'
import topMessages from './topMessages.json'
import bottomMessages from './bottomMessages.json'

function AntistressDiary() {
  const [isAnimating, setIsAnimating] = useState(false)
  const rowLimit = 51
  const rowsPerPage = 10
  const [rows, setRows] = useState(Array(10).fill(""))
  const [pageMessages, setPageMessages] = useState([0]) // Start with first message for first page

  const getPageCount = () => Math.ceil(rows.length / rowsPerPage)

  const handleThrowAway = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      setRows(Array(10).fill(""))
      setPageMessages([0]) // Reset to first message
    }, 2000)
  }

  const handleAddLine = () => {
    setRows([...rows, ""])
    // Add next message index for the new page
    setPageMessages(prev => [
      ...prev, 
      (prev[prev.length - 1] + 1) % topMessages.messages.length
    ])
  }

  const handleInputChange = (e, index) => {
    const textarea = e.target
    const value = textarea.value
    const newRows = [...rows]
    newRows[index] = value
    setRows(newRows)

    // Check if we're at the end of the current textarea
    if (textarea.selectionStart === value.length && value.length >= rowLimit) {
      let nextInput = document.querySelectorAll(`.${styles.lineInput}`)[index + 1]
      if (!nextInput) {
        handleAddLine()
        // Wait for state update before getting new input
        setTimeout(() => {
          nextInput = document.querySelectorAll(`.${styles.lineInput}`)[index + 1]
          nextInput?.focus()
        }, 0)
      } else {
        nextInput.focus()
      }
    }
  }

  const renderTopMessage = (pageIndex) => {
    const message = topMessages.messages[pageMessages[pageIndex]]
    return (
      <div className={styles.headerText}>
        {message.lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    )
  }

  const renderBottomMessage = (pageIndex) => {
    const message = bottomMessages.messages[pageMessages[pageIndex]]
    return (
      <div className={styles.headerText}>
        {message.lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    )
  }

  const renderPage = (pageIndex) => {
    const startIdx = pageIndex * rowsPerPage
    const pageRows = rows.slice(startIdx, startIdx + rowsPerPage)
    const isEvenPage = (pageIndex + 1) % 2 === 0

    return (
      <div key={pageIndex} className={`${styles.paper} ${isAnimating ? styles.throwAnimation : ''}`}>
        {!isEvenPage && renderTopMessage(pageIndex)}
        <div className={styles.prompt}>
          Now write down what's troubling you...
        </div>
        {pageRows.map((row, index) => (
          <textarea
            key={startIdx + index}
            value={row}
            onChange={(e) => handleInputChange(e, startIdx + index)}
            className={styles.lineInput}
            rows="1"
            // maxLength={rowLimit}
          />
        ))}
        {isEvenPage && renderBottomMessage(pageIndex)}
        {pageIndex === getPageCount() - 1 && (
          <div 
            className={styles.addLine}
            onClick={handleAddLine}
            disabled={isAnimating}
          >
            +
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Go back
      </Link>
      {[...Array(getPageCount())].map((_, index) => renderPage(index))}
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