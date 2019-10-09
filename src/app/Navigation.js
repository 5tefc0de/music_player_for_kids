import React from 'react'

export default function Navigation({ buttonTexts, onClick }) {
  return (
    <nav className="Navigation">
      {buttonTexts.map((text, index) => (
        <button onClick={() => onClick(index)} key={index}>
          {text}
        </button>
      ))}
    </nav>
  )
}
