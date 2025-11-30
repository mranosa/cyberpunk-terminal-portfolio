'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import MatrixRain from '@/components/MatrixRainWrapper'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { KenProfile, SynergyForm, SynergyResults } from '@/components/synergy'
import {
  calculateSynergy,
  decodeResultFromUrl,
  encodeResultForUrl,
  generateShareText,
  type SynergyInput,
  type SynergyResult
} from '@/utils/synergyCalculator'

function SynergyContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isMobile, setIsMobile] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [result, setResult] = useState<SynergyResult | null>(null)
  const [copied, setCopied] = useState(false)

  // Check for shared result in URL
  useEffect(() => {
    const encoded = searchParams.get('r')
    if (encoded) {
      const decoded = decodeResultFromUrl(encoded)
      if (decoded) {
        const calculatedResult = calculateSynergy(decoded)
        setResult(calculatedResult)
      }
    }
  }, [searchParams])

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSubmit = async (input: SynergyInput) => {
    setIsCalculating(true)

    // Simulate calculation time for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 1500))

    const calculatedResult = calculateSynergy(input)
    setResult(calculatedResult)
    setIsCalculating(false)

    // Update URL with encoded result for sharing
    const encoded = encodeResultForUrl(input)
    window.history.replaceState({}, '', `/synergy?r=${encoded}`)
  }

  const handleShare = () => {
    if (!result) return
    const text = generateShareText(result)
    const url = window.location.href
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, '_blank', 'width=550,height=420')
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setResult(null)
    window.history.replaceState({}, '', '/synergy')
  }

  const handleBackToTerminal = () => {
    router.push('/terminal')
  }

  return (
    <>
      {!isMobile && <MatrixRain />}
      <div className="relative min-h-screen bg-black text-white">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-black via-cyber-darker to-black opacity-90 z-0" />

        {/* Scanlines effect */}
        <div className="fixed inset-0 pointer-events-none z-10 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)'
          }} />
        </div>

        {/* Main content */}
        <div className="relative z-20 container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <motion.button
              onClick={handleBackToTerminal}
              className="flex items-center gap-2 text-cyber-cyan hover:text-cyber-purple transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="font-mono text-sm">TERMINAL</span>
            </motion.button>

            <motion.h1
              className="text-2xl md:text-3xl font-bold text-cyber-cyan font-mono tracking-wider"
              animate={{
                textShadow: [
                  '0 0 10px rgba(0, 255, 255, 0.5)',
                  '0 0 20px rgba(0, 255, 255, 0.8)',
                  '0 0 10px rgba(0, 255, 255, 0.5)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              SYNERGY.MATRIX
            </motion.h1>

            <div className="w-20" /> {/* Spacer for centering */}
          </motion.header>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-center mb-8 font-mono text-sm max-w-2xl mx-auto"
          >
            Calculate your professional synergy score with Ken using four compatibility systems:
            Big Five (OCEAN), MBTI, Western Zodiac, and Chinese Zodiac.
          </motion.p>

          {/* Ken's Profile */}
          <KenProfile />

          {/* Main content area */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {!result ? (
                <SynergyForm
                  key="form"
                  onSubmit={handleSubmit}
                  isCalculating={isCalculating}
                />
              ) : (
                <SynergyResults
                  key="results"
                  result={result}
                  onShare={handleShare}
                  onCopyLink={handleCopyLink}
                  onReset={handleReset}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Copy notification */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-cyber-green/20
                         border border-cyber-green text-cyber-green font-mono text-sm z-50"
              >
                LINK.COPIED.TO.CLIPBOARD
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-cyber-purple/20 text-center"
          >
            <p className="text-gray-600 font-mono text-xs">
              SYNERGY.ANALYSIS.v1.0 // FOR.PROFESSIONAL.COLLABORATION.ASSESSMENT
            </p>
            <p className="text-gray-700 font-mono text-xs mt-2">
              Results are for entertainment and discussion purposes. Actual team dynamics
              depend on communication, shared goals, and mutual respect.
            </p>
          </motion.footer>
        </div>
      </div>
    </>
  )
}

export default function SynergyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-cyber-cyan font-mono animate-pulse">LOADING.SYNERGY.MATRIX...</div>
      </div>
    }>
      <SynergyContent />
    </Suspense>
  )
}
