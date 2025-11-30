'use client'

import { useState, useEffect, Suspense, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
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
import './synergy.css'

function SynergyContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [result, setResult] = useState<SynergyResult | null>(null)
  const [copied, setCopied] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const scrollSpring = useSpring(scrollYProgress, springConfig)

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
      <div ref={containerRef} className="relative bg-black text-white">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-cyber-cyan z-50 origin-left"
          style={{ scaleX: scrollSpring }}
        />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid-animation" style={{
              backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
              backgroundSize: isMobile ? '100px 100px' : '50px 50px'
            }} />
          </div>

          <div className="relative z-10 text-center px-4 md:px-8 pb-16 md:pb-32">
            <motion.button
              onClick={handleBackToTerminal}
              className="mb-8 text-cyber-cyan hover:text-cyber-green transition-colors inline-flex items-center gap-2 group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Terminal</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
                <span className="text-cyber-purple glitch-text inline-block">SYNERGY</span>{' '}
                <span className="text-cyber-cyan glitch-text inline-block">MATRIX</span>
              </h1>
            </motion.div>

            <motion.div
              className="text-lg md:text-xl text-cyber-yellow font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Calculate your professional compatibility with Ken
            </motion.div>

            <motion.div
              className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Analyze synergy using Big Five (OCEAN), MBTI, Western Zodiac, and Chinese Zodiac
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-12 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 blur-2xl bg-cyber-cyan/20 -z-10 scale-150" />
                <div className="text-cyber-cyan text-center">
                  <motion.div
                    className="font-bold text-lg tracking-[0.3em] uppercase"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    SCROLL TO BEGIN
                  </motion.div>
                  <div className="flex justify-center gap-4 mt-2">
                    {[0, 0.3, 0.6].map((delay, i) => (
                      <motion.span
                        key={i}
                        className="text-2xl"
                        animate={{ y: [0, 5, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay }}
                      >
                        ▼
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Content Section - Profile, Form, Results */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Ken's Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <KenProfile />
            </motion.div>

            {/* Form or Results */}
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <SynergyForm
                    onSubmit={handleSubmit}
                    isCalculating={isCalculating}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <SynergyResults
                    result={result}
                    onShare={handleShare}
                    onCopyLink={handleCopyLink}
                    onReset={handleReset}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 px-4 border-t border-cyber-purple/20 text-center"
        >
          <p className="text-gray-600 font-mono text-xs">
            SYNERGY.ANALYSIS.v2.0 // FOR.PROFESSIONAL.COLLABORATION.ASSESSMENT
          </p>
          <p className="text-gray-700 font-mono text-xs mt-2 max-w-2xl mx-auto">
            Results are for entertainment and discussion purposes. Actual team dynamics
            depend on communication, shared goals, and mutual respect.
          </p>
        </motion.footer>

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
