'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { matrixReveal, glowPulse } from '@/config/animations'

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
  glitchInterval?: number
  glitchProbability?: number
}

export default function GlitchText({ 
  children, 
  className = '',
  glitchInterval = 2000,
  glitchProbability = 0.3 
}: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(children)
  const [isGlitching, setIsGlitching] = useState(false)

  const performGlitch = useCallback(() => {
    if (Math.random() < glitchProbability) {
      setIsGlitching(true)
      
      const glitchCount = Math.floor(Math.random() * 3) + 1
      let currentCount = 0

      const glitchInterval = setInterval(() => {
        setGlitchText(
          String(children)
            .split('')
            .map(char => {
              if (Math.random() < 0.3) {
                const offset = Math.floor(Math.random() * 10) - 5
                return String.fromCharCode(char.charCodeAt(0) + offset)
              }
              return char
            })
            .join('')
        )

        currentCount++
        if (currentCount >= glitchCount) {
          clearInterval(glitchInterval)
          setTimeout(() => {
            setGlitchText(children)
            setIsGlitching(false)
          }, 50)
        }
      }, 50)
    }
  }, [children, glitchProbability])

  useEffect(() => {
    const interval = setInterval(performGlitch, glitchInterval)
    return () => clearInterval(interval)
  }, [performGlitch, glitchInterval])

  return (
    <motion.div 
      variants={matrixReveal}
      initial="initial"
      animate="animate"
      className={`glitch-container ${className}`}
    >
      <motion.div 
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className={`glitch-text ${isGlitching ? 'glitching' : ''}`}
      >
        {glitchText}
      </motion.div>
      <motion.div 
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className={`glitch-text glitch-clone ${isGlitching ? 'glitching' : ''}`} 
        aria-hidden="true"
      >
        {glitchText}
      </motion.div>
      <motion.div 
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className={`glitch-text glitch-clone ${isGlitching ? 'glitching' : ''}`} 
        aria-hidden="true"
      >
        {glitchText}
      </motion.div>
    </motion.div>
  )
}

