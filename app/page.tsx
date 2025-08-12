'use client'

import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useSearchParams, useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from '@/components/SplashScreen'

const Terminal = dynamic(() => import('@/components/Terminal'), {
  loading: () => <div className="w-full h-screen bg-cyber-darker" />,
})

const ContactDrawer = dynamic(() => import('@/components/ContactDrawer'))

const MatrixRain = dynamic(() => import('@/components/MatrixRainWrapper'))

function HomeContent() {
  // Check initial state based on sessionStorage
  const [showSplash, setShowSplash] = useState<boolean | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    console.log('=== SPLASH DEBUG ===')
    
    // Check if we should skip splash (coming from internal navigation)
    const skipSplash = searchParams.get('skipSplash') === 'true'
    console.log('Skip splash param:', skipSplash)
    
    // Check if splash was already shown in this session
    const splashShown = typeof window !== 'undefined' ? sessionStorage.getItem('splashShown') === 'true' : false
    console.log('Session storage splashShown:', splashShown)

    if (skipSplash) {
      // Coming from internal navigation, don't show splash
      console.log('Skipping splash due to URL param')
      setShowSplash(false)
      // Clean up the URL by removing the query parameter
      router.replace('/', { scroll: false })
    } else if (!splashShown) {
      // First visit in this session, show splash
      console.log('First visit - SHOWING SPLASH')
      setShowSplash(true)
    } else {
      // Splash was already shown in this session
      console.log('Splash already shown in session')
      setShowSplash(false)
    }
    console.log('===================')
  }, [searchParams, router])

  const handleSplashComplete = () => {
    console.log('Splash screen completed')
    sessionStorage.setItem('splashShown', 'true')
    setShowSplash(false)
  }

  // Wait for initial state to be determined
  if (showSplash === null) {
    return (
      <main className="relative w-full h-screen bg-cyber-darker">
        <MatrixRain />
      </main>
    )
  }

  console.log('Rendering main content, showSplash:', showSplash)
  
  // Simplified rendering for debugging
  if (showSplash) {
    console.log('Rendering SplashScreen component')
    return <SplashScreen onComplete={handleSplashComplete} />
  }
  
  return (
    <main className="relative">
      <MatrixRain />
      <ContactDrawer isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
      <Terminal onContactOpen={() => setIsContactOpen(true)} />
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  )
}