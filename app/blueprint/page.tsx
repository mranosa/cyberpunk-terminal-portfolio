'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import MatrixRain from '@/components/MatrixRainWrapper'
import { vedicPlanets, getPlanetUrl } from './planetData'

export default function BlueprintPage() {
  const router = useRouter()

  // Redirect to Sun by default
  useEffect(() => {
    router.push('/blueprint/sun')
  }, [router])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-4"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to Terminal</span>
          </button>
          
          <h1 className="text-4xl font-bold text-green-400 mb-2">
            KARMIC BLUEPRINT — VEDIC ASTROLOGY
          </h1>
          <p className="text-gray-500 text-sm">
            Decoding your cosmic DNA through ancient Vedic wisdom
          </p>
        </motion.div>

        {/* Loading State */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center min-h-[400px]"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block text-6xl mb-4"
            >
              ☉
            </motion.div>
            <p className="text-gray-400 text-lg">Aligning cosmic energies...</p>
            <p className="text-gray-500 text-sm mt-2">Redirecting to your solar blueprint...</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}