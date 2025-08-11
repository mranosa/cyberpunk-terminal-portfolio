import { Variants } from 'framer-motion'

// Custom easing functions for smooth animations
export const easings = {
  easeOutExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeInOutExpo: [0.87, 0, 0.13, 1] as [number, number, number, number],
  easeOutBack: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  spring: { type: 'spring' as const, stiffness: 400, damping: 30 },
  smooth: { type: 'spring' as const, stiffness: 280, damping: 20 },
  bouncy: { type: 'spring' as const, stiffness: 600, damping: 15 },
}

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easings.easeOutExpo },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: easings.easeOutExpo },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: easings.easeOutExpo },
  },
}

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: easings.smooth,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
}

// Slide animations
export const slideInFromRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: easings.smooth,
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.3, ease: easings.easeInOutExpo },
  },
}

export const slideInFromLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: easings.smooth,
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.3, ease: easings.easeInOutExpo },
  },
}

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easings.smooth,
  },
}

// Terminal-specific animations
export const typewriterContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
}

export const typewriterChar: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.05 },
  },
}

// Cyberpunk glitch effect
export const glitchAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  glitch: {
    x: [0, -2, 2, -1, 1, 0],
    filter: [
      'hue-rotate(0deg)',
      'hue-rotate(90deg)',
      'hue-rotate(-90deg)',
      'hue-rotate(45deg)',
      'hue-rotate(0deg)',
    ],
    transition: {
      duration: 0.3,
      repeat: 1,
    },
  },
}

// Neon pulse animation
export const neonPulse: Variants = {
  initial: {
    textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
  },
  animate: {
    textShadow: [
      '0 0 5px rgba(0, 255, 255, 0.5)',
      '0 0 20px rgba(0, 255, 255, 0.8)',
      '0 0 30px rgba(0, 255, 255, 1)',
      '0 0 20px rgba(0, 255, 255, 0.8)',
      '0 0 5px rgba(0, 255, 255, 0.5)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Matrix rain animation
export const matrixDrop: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: [0, 1, 1, 0],
    transition: {
      delay: i * 0.1,
      duration: 2,
      repeat: Infinity,
      repeatDelay: Math.random() * 5,
      ease: 'linear',
    },
  }),
}

// 3D card flip animation
export const cardFlip: Variants = {
  hidden: {
    rotateY: 180,
    opacity: 0,
  },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: easings.smooth,
  },
  hover: {
    rotateY: 10,
    scale: 1.05,
    transition: { duration: 0.2 },
  },
}

// Blur in animation
export const blurIn: Variants = {
  hidden: {
    filter: 'blur(10px)',
    opacity: 0,
  },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.8, ease: easings.easeOutExpo },
  },
}