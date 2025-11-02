'use client'

import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useSearchParams, useRouter } from 'next/navigation'
import SplashScreen from '@/components/SplashScreen'

const Terminal = dynamic(() => import('@/components/Terminal'), {
  loading: () => <div className="w-full h-screen bg-cyber-darker" />,
})

const ContactDrawer = dynamic(() => import('@/components/ContactDrawer'))

const MatrixRain = dynamic(() => import('@/components/MatrixRainWrapper'))

function TerminalContent() {
  const [showSplash, setShowSplash] = useState<boolean | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    // Check if we should skip splash (coming from internal navigation)
    const skipSplash = searchParams.get('skipSplash') === 'true'

    // Check if splash was already shown in this session
    const splashShown = typeof window !== 'undefined' ? sessionStorage.getItem('terminalSplashShown') === 'true' : false

    if (skipSplash) {
      // Coming from internal navigation, don't show splash
      setShowSplash(false)
      // Clean up the URL by removing the query parameter
      router.replace('/terminal', { scroll: false })
    } else if (!splashShown) {
      // First visit in this session, show splash
      setShowSplash(true)
    } else {
      // Splash was already shown in this session
      setShowSplash(false)
    }
  }, [searchParams, router])

  const handleSplashComplete = () => {
    sessionStorage.setItem('terminalSplashShown', 'true')
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

  if (showSplash) {
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

export default function TerminalPage() {
  return (
    <Suspense fallback={null}>
      <TerminalContent />
    </Suspense>
  )
}
