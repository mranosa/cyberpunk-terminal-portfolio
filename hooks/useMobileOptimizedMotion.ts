'use client'

import { useEffect, useState } from 'react'

export function useMobileOptimizedMotion() {
  const [isMobile, setIsMobile] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    
    // Check reduced motion preference
    const checkReducedMotion = () => {
      setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkMobile()
    checkReducedMotion()

    window.addEventListener('resize', checkMobile)
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkReducedMotion)

    return () => {
      window.removeEventListener('resize', checkMobile)
      mediaQuery.removeEventListener('change', checkReducedMotion)
    }
  }, [])

  // Return optimized motion values
  const getMotionProps = (desktop: any, mobile: any = {}) => {
    if (reduceMotion) {
      return {} // No animations if reduced motion is preferred
    }
    
    if (isMobile) {
      // Simplified mobile animations
      return {
        initial: mobile.initial || { opacity: 0 },
        animate: mobile.animate || { opacity: 1 },
        transition: mobile.transition || { duration: 0.3 },
        whileHover: undefined, // Disable hover on mobile
        whileTap: mobile.whileTap || { scale: 0.98 }
      }
    }
    
    return desktop
  }

  const getTransition = (duration = 0.6) => {
    if (reduceMotion) return { duration: 0 }
    if (isMobile) return { duration: duration * 0.5 } // Faster on mobile
    return { duration }
  }

  const getSpring = () => {
    if (reduceMotion) return { type: 'tween', duration: 0 }
    if (isMobile) return { type: 'tween', duration: 0.3 }
    return { type: 'spring', stiffness: 100, damping: 30 }
  }

  return {
    isMobile,
    reduceMotion,
    getMotionProps,
    getTransition,
    getSpring
  }
}