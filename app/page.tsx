'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import SplashScreen from '@/components/SplashScreen'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const router = useRouter()

  const handleSplashComplete = () => {
    setShowSplash(false)
    // Redirect to /work page after splash completes
    router.push('/work')
  }

  if (!showSplash) {
    // Show loading state during redirect
    return (
      <main className="relative w-full h-screen bg-cyber-darker flex items-center justify-center">
        <div className="text-cyan-400 font-mono text-sm animate-pulse">
          LOADING...
        </div>
      </main>
    )
  }

  return <SplashScreen onComplete={handleSplashComplete} />
}
