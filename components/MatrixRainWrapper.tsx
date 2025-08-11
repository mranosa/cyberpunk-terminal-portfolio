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
  const [renderMode, setRenderMode] = useState<'3d' | '2d' | 'none'>('none')
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

      // Determine render mode:
      // - Mobile: no matrix rain
      // - Slow desktop: 2D matrix rain
      // - Fast desktop: 3D matrix rain
      let mode: '3d' | '2d' | 'none' = '3d'
      
      if (isMobile) {
        mode = 'none' // No matrix rain for mobile
      } else if (isSlowDesktop) {
        mode = '2d' // 2D matrix rain for slow desktops
      } else {
        mode = '3d' // 3D matrix rain for fast desktops
      }
      
      setRenderMode(mode)
      
      // Log decision for debugging
      console.log('Matrix Rain Mode:', {
        mode,
        isMobile,
        isSlowDesktop,
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

  // Render based on detected mode
  switch (renderMode) {
    case '2d':
      return <MatrixRain2D />
    case '3d':
      return <MatrixRain3D />
    case 'none':
    default:
      return null // No matrix rain for mobile
  }
}