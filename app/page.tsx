'use client'

import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useSearchParams, useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'

const SplashScreen = dynamic(() => import('@/components/SplashScreen'), {
  ssr: false,
  loading: () => null,
})

const Terminal = dynamic(() => import('@/components/Terminal'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-cyber-darker" />,
})

const ContactDrawer = dynamic(() => import('@/components/ContactDrawer'), {
  ssr: false,
})

const MatrixRain = dynamic(() => import('@/components/MatrixRain'), {
  ssr: false,
})

function HomeContent() {
  const [showSplash, setShowSplash] = useState(true)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
    
    // Check if we should skip splash (coming from internal navigation)
    const skipSplash = searchParams.get('skipSplash') === 'true'
    
    // Check if splash was already shown in this session
    const splashShown = sessionStorage.getItem('splashShown') === 'true'

    if (skipSplash || splashShown) {
      // Coming from internal navigation or already shown, don't show splash
      setShowSplash(false)
      // Clean up the URL by removing the query parameter
      if (skipSplash) {
        router.replace('/', { scroll: false })
      }
    } else {
      // Mark splash as shown for this session
      sessionStorage.setItem('splashShown', 'true')
    }
  }, [searchParams, router])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (!isMounted) {
    return (
      <main className="relative w-full h-screen bg-cyber-darker">
        <MatrixRain />
      </main>
    )
  }

  return (
    <main className="relative">
      <MatrixRain />
      <ContactDrawer isOpen={isContactOpen} onOpenChange={setIsContactOpen} />

      <AnimatePresence mode="wait">
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