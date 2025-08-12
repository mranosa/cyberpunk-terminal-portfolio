'use client'

import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'

export default function ForceSplash() {
  const [showSplash, setShowSplash] = useState(true)
  
  const handleComplete = () => {
    console.log('Splash completed!')
    setShowSplash(false)
  }
  
  return (
    <div className="min-h-screen bg-cyber-darker">
      {showSplash ? (
        <SplashScreen onComplete={handleComplete} />
      ) : (
        <div className="p-8 text-white">
          <h1 className="text-2xl">Splash Screen Test Complete</h1>
          <p>The splash screen finished successfully</p>
        </div>
      )}
    </div>
  )
}