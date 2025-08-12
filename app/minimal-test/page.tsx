'use client'

import { useState, useEffect } from 'react'
import SplashScreen from '@/components/SplashScreen'
import Terminal from '@/components/Terminal'

export default function MinimalTest() {
  const [showSplash, setShowSplash] = useState<boolean | null>(null)
  
  useEffect(() => {
    // Simple logic - always show splash if not shown before
    const shown = sessionStorage.getItem('testSplashShown')
    console.log('Test page - splash shown before?', shown)
    
    if (!shown) {
      console.log('Showing splash!')
      setShowSplash(true)
    } else {
      console.log('Not showing splash')
      setShowSplash(false)
    }
  }, [])
  
  const handleComplete = () => {
    console.log('Splash completed - setting session storage')
    sessionStorage.setItem('testSplashShown', 'true')
    setShowSplash(false)
  }
  
  // Loading state
  if (showSplash === null) {
    return <div className="min-h-screen bg-cyber-darker flex items-center justify-center text-white">Loading...</div>
  }
  
  // Show splash or terminal
  return (
    <div className="min-h-screen bg-cyber-darker">
      {showSplash ? (
        <SplashScreen onComplete={handleComplete} />
      ) : (
        <Terminal />
      )}
    </div>
  )
}