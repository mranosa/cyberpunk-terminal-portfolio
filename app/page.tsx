'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from '@/components/SplashScreen'
import Terminal from '@/components/Terminal'
import ContactDrawer from '@/components/ContactDrawer'
import MatrixRain from '@/components/MatrixRain'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [isContactOpen, setIsContactOpen] = useState(false)

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
