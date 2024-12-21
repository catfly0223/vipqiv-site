import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

export const useScrollAnimation = (ref: React.RefObject<HTMLElement>) => {
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return {
    isInView,
    hasAnimated,
    animationClass: isInView ? 'animate' : 'initial'
  }
} 