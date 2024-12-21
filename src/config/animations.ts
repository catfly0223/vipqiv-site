import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const glowPulse: Variants = {
  initial: {
    textShadow: '0 0 5px #00ff00'
  },
  animate: {
    textShadow: [
      '0 0 5px #00ff00',
      '0 0 15px #00ff00',
      '0 0 25px #00ff00',
      '0 0 15px #00ff00',
      '0 0 5px #00ff00'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1]
    }
  }
}

export const matrixReveal: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)'
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const slideIn: Variants = {
  initial: {
    x: -20,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const scaleIn: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
} 