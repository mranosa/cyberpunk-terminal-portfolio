'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const MatrixRain3D = dynamic(() => import('./MatrixRain'), {
  ssr: false,
  loading: () => null
})

const MatrixRain2D = dynamic(() => import('./MatrixRain2D'), {
  ssr: false,
  loading: () => null
})

export default function MatrixRainWrapper() {
  const [use2D, setUse2D] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Function to detect device capabilities
    const detectCapabilities = () => {
      // Check if mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth <= 768

      // Check for slow desktop (various indicators)
      let isSlowDesktop = false
      
      // Check device memory (if available)
      if ('deviceMemory' in navigator) {
        const deviceMemory = (navigator as any).deviceMemory
        if (deviceMemory && deviceMemory <= 4) {
          isSlowDesktop = true
        }
      }

      // Check hardware concurrency (CPU cores)
      if ('hardwareConcurrency' in navigator) {
        const cores = navigator.hardwareConcurrency
        if (cores && cores <= 2) {
          isSlowDesktop = true
        }
      }

      // Check connection speed (if available)
      if ('connection' in navigator) {
        const connection = (navigator as any).connection
        if (connection && connection.effectiveType) {
          if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
            isSlowDesktop = true
          }
        }
      }

      // Check WebGL support and performance
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl') as WebGLRenderingContext | null || 
                   canvas.getContext('experimental-webgl') as WebGLRenderingContext | null
        
        if (!gl) {
          isSlowDesktop = true
        } else {
          // Check max texture size as an indicator of GPU capability
          const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
          if (maxTextureSize < 4096) {
            isSlowDesktop = true
          }
        }
      } catch (e) {
        isSlowDesktop = true
      }

      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        isSlowDesktop = true
      }

      // Performance timing check (if page load was slow)
      if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart
        if (loadTime > 5000) { // If page took more than 5 seconds to load
          isSlowDesktop = true
        }
      }

      // Set to use 2D if mobile OR slow desktop
      setUse2D(isMobile || isSlowDesktop)
      
      // Log decision for debugging
      console.log('Matrix Rain Mode:', {
        isMobile,
        isSlowDesktop,
        use2D: isMobile || isSlowDesktop,
        deviceMemory: (navigator as any).deviceMemory,
        cores: navigator.hardwareConcurrency,
        screenWidth: window.innerWidth
      })
    }

    // Run detection after a small delay to ensure accurate performance metrics
    const timer = setTimeout(() => {
      detectCapabilities()
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return null
  }

  return use2D ? <MatrixRain2D /> : <MatrixRain3D />
}