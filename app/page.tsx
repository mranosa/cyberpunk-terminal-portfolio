'use client'

import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useSearchParams, useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'

const SplashScreen = dynamic(() => import('@/components/SplashScreen'), {
  ssr: false,
})

const Terminal = dynamic(() => import('@/components/Terminal'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-gray-900" />,
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