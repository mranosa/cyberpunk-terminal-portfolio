'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from '@/components/SplashScreen'
import TerminalBlog from '@/components/TerminalBlog'
import ContactDrawer from '@/components/ContactDrawer'
import MatrixRain from '@/components/MatrixRain'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <main className="relative">
      <MatrixRain />
      <ContactDrawer />

      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {!showSplash && <TerminalBlog />}
    </main>
  )
}
