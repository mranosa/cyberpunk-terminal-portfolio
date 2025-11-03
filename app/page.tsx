'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SplashScreen from '@/components/SplashScreen'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  // Detect mobile and skip splash screen for optimal mobile performance
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)

      // Skip splash screen on mobile, redirect immediately
      if (mobile) {
        router.push('/work')
      }
    }

    checkMobile()
  }, [router])

  const handleSplashComplete = () => {
    setShowSplash(false)
    // Redirect to /work page after splash completes
    router.push('/work')
  }

  // Show loading state during redirect or mobile detection
  if (!showSplash || isMobile) {
    return (
      <main className="relative w-full h-screen bg-cyber-darker flex items-center justify-center">
        <div className="text-cyan-400 font-mono text-sm animate-pulse">
          LOADING...
        </div>
      </main>
    )
  }

  // Desktop: Show splash screen
  return <SplashScreen onComplete={handleSplashComplete} />
}
