'use client'

import { useState, useEffect } from 'react'

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(children)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchText(
          String(children)
            .split('')
            .map(char => (Math.random() < 0.5 ? String.fromCharCode(char.charCodeAt(0) + Math.floor(Math.random() * 5)) : char))
            .join('')
        )
        setTimeout(() => setGlitchText(children), 100)
      }
    }, 100)

    return () => clearInterval(glitchInterval)
  }, [children])

  return (
    <div className={`glitch-container ${className}`}>
      <div className="glitch-text">{glitchText}</div>
      <div className="glitch-text" aria-hidden="true">{glitchText}</div>
      <div className="glitch-text" aria-hidden="true">{glitchText}</div>
    </div>
  )
}

