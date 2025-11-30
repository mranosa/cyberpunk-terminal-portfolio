'use client'

import { useState, useEffect, Suspense, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import MatrixRain from '@/components/MatrixRainWrapper'
import { ArrowLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
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

const NAV_SECTIONS = ['INTRO', 'PROFILE', 'ANALYZE', 'RESULTS']

function SynergyContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
        // If results exist, set active section to results
        setActiveSection(3)
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

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const top = rect.top + window.scrollY
        const bottom = top + rect.height

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
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

    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.querySelector('#results-section')
      resultsSection?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
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
    // Scroll back to form
    const formSection = document.querySelector('#analyze-section')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBackToTerminal = () => {
    router.push('/terminal')
  }

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.scroll-section')
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {!isMobile && <MatrixRain />}
      <div ref={containerRef} className="relative bg-black text-white scroll-snap-container">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-cyber-cyan z-50 origin-left"
          style={{ scaleX: scrollSpring }}
        />

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="fixed top-4 right-4 z-50 p-3 bg-black/80 backdrop-blur-sm border border-cyber-cyan/30 hover:border-cyber-cyan/60 transition-all"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-1.5"
            >
              <motion.span
                className="block w-6 h-0.5 bg-cyber-cyan"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-cyber-cyan"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-cyber-cyan"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed right-0 top-0 h-full w-64 bg-black/95 border-l border-cyber-cyan/30 z-40 p-6 pt-20"
                >
                  <nav className="space-y-4">
                    {NAV_SECTIONS.map((label, i) => (
                      <button
                        key={label}
                        onClick={() => scrollToSection(i)}
                        className={`block w-full text-left py-2 px-4 font-mono text-sm transition-all ${
                          activeSection === i
                            ? 'text-cyber-cyan border-l-2 border-cyber-cyan'
                            : 'text-gray-400 hover:text-cyber-cyan'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </nav>

                  <div className="mt-8 pt-8 border-t border-cyber-cyan/20">
                    <button
                      onClick={handleBackToTerminal}
                      className="w-full px-4 py-3 bg-cyber-cyan/10 border border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all font-bold flex items-center justify-center gap-2"
                    >
                      <ArrowLeftIcon className="w-5 h-5" />
                      Back to Terminal
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Nav Dots - Desktop */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
          {NAV_SECTIONS.map((label, i) => (
            <motion.div
              key={label}
              className="relative group"
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={`w-3 h-3 rounded-full border cursor-pointer transition-all ${
                  activeSection === i
                    ? 'bg-cyber-cyan border-cyber-cyan'
                    : 'bg-transparent border-gray-500 hover:border-cyber-cyan'
                }`}
                onClick={() => scrollToSection(i)}
              />
              <span className="absolute right-8 top-1/2 -translate-y-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="scroll-section min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid-animation" style={{
              backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
              backgroundSize: isMobile ? '100px 100px' : '50px 50px'
            }} />
          </div>

          <div className="relative z-10 text-center px-4 md:px-8 pb-16 md:pb-32">
            {!isMobile && (
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
            )}

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

        {/* Ken's Profile Section */}
        <section id="profile-section" className="scroll-section min-h-screen flex items-center justify-center py-16 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-cyber-cyan text-center mb-8 font-mono"
            >
              OPERATOR.PROFILE
            </motion.h2>
            <KenProfile />
          </div>
        </section>

        {/* Analysis Form Section */}
        <section id="analyze-section" className="scroll-section min-h-screen flex items-center justify-center py-16 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-cyber-purple text-center mb-8 font-mono"
            >
              {result ? 'RECALCULATE' : 'ANALYZE.SYNERGY'}
            </motion.h2>
            <AnimatePresence mode="wait">
              {!result && (
                <SynergyForm
                  key="form"
                  onSubmit={handleSubmit}
                  isCalculating={isCalculating}
                />
              )}
            </AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <p className="text-gray-400 mb-6">Results calculated! Scroll down to view or recalculate below.</p>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-black border-2 border-cyber-purple text-cyber-purple font-mono uppercase tracking-wider hover:bg-cyber-purple hover:text-black transition-all duration-300"
                >
                  NEW CALCULATION
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Results Section */}
        <section id="results-section" className="scroll-section min-h-screen flex items-center justify-center py-16 px-4">
          <div className="max-w-4xl mx-auto w-full synergy-results">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-cyber-green text-center mb-8 font-mono"
            >
              SYNERGY.RESULTS
            </motion.h2>
            <AnimatePresence mode="wait">
              {result ? (
                <SynergyResults
                  key="results"
                  result={result}
                  onShare={handleShare}
                  onCopyLink={handleCopyLink}
                  onReset={handleReset}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-6 opacity-30">?</div>
                  <p className="text-gray-500 font-mono">
                    Complete the analysis form above to see your synergy results
                  </p>
                  <button
                    onClick={() => scrollToSection(2)}
                    className="mt-6 px-6 py-2 border border-cyber-cyan/50 text-cyber-cyan font-mono text-sm hover:bg-cyber-cyan/10 transition-all"
                  >
                    GO TO FORM
                  </button>
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
