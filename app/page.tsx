'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from '@/components/SplashScreen'
import Terminal from '@/components/Terminal'
import ContactDrawer from '@/components/ContactDrawer'
import MatrixRain from '@/components/MatrixRain'

function HomeContent() {
  const [showSplash, setShowSplash] = useState(true)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    // Check if we should skip splash (coming from internal navigation)
    const skipSplash = searchParams.get('skipSplash') === 'true'

    if (skipSplash) {
      // Coming from internal navigation, don't show splash
      setShowSplash(false)
      // Clean up the URL by removing the query parameter
      router.replace('/', { scroll: false })
    }
  }, [searchParams, router])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <main className="relative">
      <MatrixRain />
      <ContactDrawer isOpen={isContactOpen} onOpenChange={setIsContactOpen} />

      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {!showSplash && <Terminal onContactOpen={() => setIsContactOpen(true)} />}
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
