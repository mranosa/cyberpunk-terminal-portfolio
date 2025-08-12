'use client'

import { useState, useEffect } from 'react'
import SplashScreen from '@/components/SplashScreen'

export default function TestSplash() {
  const [showSplash, setShowSplash] = useState(false)
  const [sessionInfo, setSessionInfo] = useState<string>('')

  useEffect(() => {
    // Get current sessionStorage value
    const current = sessionStorage.getItem('splashShown')
    setSessionInfo(`Current sessionStorage.splashShown: ${current}`)
  }, [])

  const handleClearSession = () => {
    sessionStorage.removeItem('splashShown')
    setSessionInfo('Cleared sessionStorage')
  }

  const handleShowSplash = () => {
    setShowSplash(true)
  }

  const handleSplashComplete = () => {
    setShowSplash(false)
    console.log('Splash screen completed')
  }

  return (
    <div className="min-h-screen bg-cyber-darker p-8 text-white">
      <h1 className="text-2xl mb-4">Splash Screen Test</h1>
      
      <div className="space-y-4">
        <div className="bg-black/50 p-4 rounded">
          <p className="font-mono text-sm">{sessionInfo}</p>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={handleClearSession}
            className="px-4 py-2 bg-cyber-purple text-white rounded hover:bg-cyber-purple/80"
          >
            Clear SessionStorage
          </button>
          
          <button
            onClick={handleShowSplash}
            className="px-4 py-2 bg-cyber-cyan text-black rounded hover:bg-cyber-cyan/80"
          >
            Show Splash Screen
          </button>
        </div>
      </div>

      {showSplash && (
        <div className="fixed inset-0 z-50">
          <SplashScreen onComplete={handleSplashComplete} />
        </div>
      )}
    </div>
  )
}