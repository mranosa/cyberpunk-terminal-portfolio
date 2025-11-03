'use client'

import { motion, useScroll, useTransform, useSpring, useInView, useAnimation } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { workExperience } from '@/components/terminal/data/workExperience'
import { recommendations } from '@/components/terminal/data/recommendations'
import MatrixRain from '@/components/MatrixRainWrapper'
import { ArrowLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { LinkIcon } from '@heroicons/react/24/solid'
import { useRef, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMobileOptimizedMotion } from '@/hooks/useMobileOptimizedMotion'
import './work.css'

export default function WorkPage() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const motionOptimized = useMobileOptimizedMotion()
  
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const scrollSpring = useSpring(scrollYProgress, springConfig)


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])


  // Update active section
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
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


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

  // Parallax transforms - reduced for mobile
  const parallaxMultiplier = isMobile ? 0.3 : 1
  const heroY = useTransform(scrollSpring, [0, 0.2], [0, -100 * parallaxMultiplier])
  const heroOpacity = useTransform(scrollSpring, [0, 0.15], [1, isMobile ? 0.3 : 0])
  const heroScale = useTransform(scrollSpring, [0, 0.2], [1, isMobile ? 0.98 : 0.95])

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
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                  onClick={() => setMobileMenuOpen(false)}
                />
                
                {/* Menu Drawer - optimized for mobile */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={isMobile ? { type: 'tween', duration: 0.2 } : { type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-md border-l border-cyber-cyan/30 z-50 overflow-y-auto"
                >
                  <div className="p-6 pt-20">
                    <h2 className="text-cyber-cyan font-bold text-xl mb-6">Navigation</h2>

                    {/* Section Links */}
                    <div className="space-y-2">
                      {['INTRO', 'IMPACT', 'EXPERIENCE', 'BUILDS', 'THEMES', 'GAPS', 'EDGE', 'TESTIMONIALS', 'PLAYBOOK', 'SNAPSHOT', 'CONTACT'].map((label, i) => (
                        <button
                          key={label}
                          onClick={() => scrollToSection(i)}
                          className={`w-full text-left px-4 py-3 border transition-all ${
                            activeSection === i 
                              ? 'border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan' 
                              : 'border-gray-800 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 text-gray-400 hover:text-cyber-cyan'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className={`text-xs font-mono ${activeSection === i ? 'text-cyber-cyan' : 'text-gray-600'}`}>
                              {String(i).padStart(2, '0')}
                            </span>
                            <span className="font-semibold">{label}</span>
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* CV Download in Menu */}
                    <div className="mt-8 pt-8 border-t border-gray-800">
                      <button
                        onClick={() => {
                          const link = document.createElement('a')
                          link.href = '/cv/Ken_Ranosa_CV.pdf'
                          link.download = 'Ken_Ranosa_CV.pdf'
                          link.click()
                          setMobileMenuOpen(false)
                        }}
                        className="w-full px-4 py-3 bg-cyber-green/10 border border-cyber-green/50 text-cyber-green hover:bg-cyber-green/20 transition-all font-bold flex items-center justify-center gap-2"
                      >
                        <ArrowDownTrayIcon className="w-5 h-5" />
                        Download CV
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Nav Dots */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
          {['INTRO', 'IMPACT', 'EXPERIENCE', 'BUILDS', 'THEMES', 'GAPS', 'EDGE', 'TESTIMONIALS', 'PLAYBOOK', 'SNAPSHOT', 'CONTACT'].map((label, i) => (
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
                onClick={() => {
                  const sections = document.querySelectorAll('.scroll-section')
                  sections[i]?.scrollIntoView({ behavior: 'smooth' })
                  setActiveSection(i)
                }}
              />
              <span className="absolute right-8 top-1/2 -translate-y-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Hero Section with Parallax */}
        <motion.section 
          className="scroll-section min-h-screen flex items-center justify-center relative overflow-hidden"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          {/* Animated Background Grid - simplified for mobile */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid-animation" style={{
              backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
              backgroundSize: isMobile ? '100px 100px' : '50px 50px',
              transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
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

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
                  <span className="text-cyber-green glitch-text inline-block">KEN</span>{' '}
                  <span className="text-cyber-cyan glitch-text inline-block">RANOSA</span>
                </h1>
              </motion.div>

              <motion.div
                className="text-lg md:text-xl text-cyber-yellow font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I ship features that help close deals and make teams faster.
              </motion.div>

              <motion.div
                className="text-xl md:text-2xl text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TypewriterText text="TypeScript/React Full-Stack Engineer • Remote-First Engineering Expert" />
              </motion.div>

              {/* Scroll to Explore - Centered below experience text */}
              <motion.div
                className="mt-8 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div 
                  className="relative"
                  animate={{ 
                    y: [0, 8, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Glow effect behind text */}
                  <div className="absolute inset-0 blur-2xl bg-cyber-cyan/20 -z-10 scale-150" />
                  
                  {/* Main text with enhanced visibility */}
                  <div className="text-cyber-cyan text-center">
                    <motion.div 
                      className="font-bold text-lg tracking-[0.3em] uppercase"
                      animate={{ 
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      SCROLL TO EXPLORE
                    </motion.div>
                    
                    {/* Animated arrows */}
                    <div className="flex justify-center gap-4 mt-2">
                      <motion.span
                        className="text-2xl"
                        animate={{ 
                          y: [0, 5, 0],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      >
                        ▼
                      </motion.span>
                      <motion.span
                        className="text-2xl"
                        animate={{ 
                          y: [0, 5, 0],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      >
                        ▼
                      </motion.span>
                      <motion.span
                        className="text-2xl"
                        animate={{ 
                          y: [0, 5, 0],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                      >
                        ▼
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Enhanced animated line */}
                <motion.div 
                  className="w-px h-24 bg-gradient-to-b from-cyber-cyan via-cyber-cyan/30 to-transparent mt-4 relative"
                  animate={{ 
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Animated dots moving down the line */}
                  <motion.div
                    className="absolute w-1.5 h-1.5 bg-cyber-cyan rounded-full left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                    animate={{ 
                      top: ['0%', '100%'],
                      opacity: [1, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeIn"
                    }}
                  />
                  <motion.div
                    className="absolute w-1.5 h-1.5 bg-cyber-cyan rounded-full left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                    animate={{ 
                      top: ['0%', '100%'],
                      opacity: [1, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeIn",
                      delay: 0.5
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Impact Section */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative flex items-center">
          <motion.div
            className="max-w-7xl mx-auto w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="01" 
              title="IMPACT" 
              subtitle="MEASURABLE RESULTS THAT MATTER"
            />

            <div className="space-y-8 mt-16">
              {/* Formative - Deal-closing delivery */}
              <motion.div
                className="border border-cyber-green/30 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 136, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-cyber-green mb-2">
                        Formative [Remote] — deal-closing delivery
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Software Engineer • Feb 2021–Jun 2025 (acquired May 2023)</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyber-green">&gt;$1M</span>
                      <p className="text-gray-400 text-xs">in deals closed</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-cyber-green mr-2">▸</span>
                      Delivered $1M+ in closed deals by consistently shipping time-critical enterprise features (SSO, real-time collaboration, custom reporting, RBAC, demo sandboxes) for educational platform serving <span className="text-cyber-yellow font-bold">2M+ teachers and students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-green mr-2">▸</span>
                      Architected real-time collaborative editing system with WebSockets and MongoDB, enabling multiple teachers to edit formatives simultaneously with live presence indicators and conflict-free synchronization
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-green mr-2">▸</span>
                      Owned <span className="text-cyber-yellow font-bold">10-month Item Bank integration</span> with Newsela's content library (Aug 2024 - May 2025), implementing CRUD operations, search, bulk import/export using TypeScript, React, and GraphQL
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-green mr-2">▸</span>
                      Led codebase-wide GraphQL migration and modernized <span className="text-cyber-yellow font-bold">100+ React class components</span> to functional components with hooks, improving type safety and maintainability
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-green mr-2">▸</span>
                      Delivered <span className="text-cyber-yellow font-bold">37 major platform features</span> over 4 years, completing <span className="text-cyber-yellow font-bold">1,000+ pull requests</span> and <span className="text-cyber-yellow font-bold">615+ code reviews</span> with <span className="text-cyber-yellow font-bold">zero production incidents</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="text-xs border border-cyber-green/20 px-2 py-1 sm:py-2 text-gray-500">TypeScript</span>
                    <span className="text-xs border border-cyber-green/20 px-2 py-1 sm:py-2 text-gray-500">Node.js</span>
                    <span className="text-xs border border-cyber-green/20 px-2 py-1 sm:py-2 text-gray-500">React</span>
                    <span className="text-xs border border-cyber-green/20 px-2 py-1 sm:py-2 text-gray-500">GraphQL</span>
                    <span className="text-xs border border-cyber-green/20 px-2 py-1 sm:py-2 text-gray-500">MongoDB</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyber-green/20">
                    <p className="text-cyber-green font-semibold">
                      Result: Closed &gt;$1M in deals through time-critical feature delivery
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* PearlPay - Integration tests in seconds */}
              <motion.div
                className="border border-cyber-cyan/30 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 255, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-cyber-cyan mb-2">
                        PearlPay [On-Site] — integration tests in seconds
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Senior Software Engineer • Nov 2019–Sep 2020</p>
                    </div>
                    <div className="flex-shrink-0 text-left lg:text-right">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyber-cyan">hours→seconds</span>
                      <p className="text-gray-400 text-xs">per test run</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-cyber-cyan mr-2">▸</span>
                      Reduced integration testing from hours to seconds via LocalStack for AWS service mocking, accelerating development velocity while maintaining PCI compliance for fintech payment platform
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-cyan mr-2">▸</span>
                      Created code generation tool adopted by <span className="text-cyber-yellow font-bold">8 engineers</span> that cut microservice creation time from <span className="text-cyber-yellow font-bold">2 weeks to 1 minute</span>, standardizing service architecture
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-cyan mr-2">▸</span>
                      Introduced company-wide performance evaluation criteria that improved team dynamics, establishing clear expectations and feedback mechanisms for engineering organization
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">AWS Serverless</span>
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">LocalStack</span>
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">Docker</span>
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">Node.js</span>
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">Python</span>
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">Java</span>
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">Spring</span>
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">Django</span>
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">MySQL</span>
                    <span className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500">PyTest</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyber-cyan/20">
                    <p className="text-cyber-cyan font-semibold">
                      Result: Hours → seconds per run. Per-PR validation. Confident merges.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* BEN - 600% faster test runtime */}
              <motion.div
                className="border border-amber-500/40 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.01, borderColor: 'rgba(245, 158, 11, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-amber-500 mb-2">
                        BEN [Remote] — 600% faster test runtime
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Software Engineer in Test • Apr 2016–Jun 2019</p>
                    </div>
                    <div className="flex-shrink-0 text-left lg:text-right">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-500">600%</span>
                      <p className="text-gray-400 text-xs">faster runtime</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      Achieved <span className="text-cyber-yellow font-bold">600% speed improvement</span> in test execution by implementing test automation and parallel execution with Selenium Grid, enabling QA team to test more features per sprint
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      Reduced QA setup from <span className="text-cyber-yellow font-bold">2 days to 3 minutes</span> through automation using Docker and infrastructure-as-code, eliminating manual environment configuration
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      Built YouTube monitoring service using Node.js, Puppeteer, and FFMpeg to track branded content videos across YouTube channels, automating copyright violation detection
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs border border-amber-500/20 px-2 py-2 text-gray-500">JavaScript</span>
                    <span className="text-xs border border-amber-500/20 px-2 py-2 text-gray-500">Node.js</span>
                    <span className="text-xs border border-amber-500/20 px-2 py-2 text-gray-500">WebDriverIO</span>
                    <span className="text-xs border border-amber-500/20 px-2 py-2 text-gray-500">Protractor</span>
                    <span className="text-xs border border-amber-500/20 px-2 py-2 text-gray-500">Jasmine</span>
                    <span className="text-xs border border-amber-500/20 px-2 py-2 text-gray-500">Mocha</span>
                    <span className="text-xs border border-amber-500/20 px-2 py-2 text-gray-500">Chakram</span>
                    <span className="text-xs border border-amber-500/20 px-2 py-2 text-gray-500">MongoDB</span>
                    <span className="text-xs border border-amber-500/20 px-2 py-2 text-gray-500">CI</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-500/20">
                    <p className="text-amber-500 font-semibold">
                      Result: 600% faster runtime. Faster releases. Clearer signals.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Full Resume Download Button */}
              <motion.div
                className="mt-8 flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/cv/Ken_Ranosa_CV.pdf'
                    link.download = 'Ken_Ranosa_CV.pdf'
                    link.click()
                  }}
                  className="group relative px-8 py-4 border-2 border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-black transition-all duration-300 font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-cyber-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative flex items-center gap-3">
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    Full Resume PDF - Complete History & Education
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Work Experience Timeline */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative">
          <WorkExperienceSection />
        </section>

        {/* Builds Section */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="03" 
              title="BUILDS" 
              subtitle="SMALL TOOLS AND MVPS. SHIPPED FAST."
            />

            <div className="space-y-8 mt-16">
              {/* SignZen */}
              <motion.div
                className="border border-cyber-cyan/30 p-8 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 255, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyber-cyan mb-2">SignZen</h3>
                      <p className="text-gray-400">pay-per-unique-gaze ads (Web/IoT)</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-cyber-green font-semibold">Stack:</span>
                    <span className="text-gray-300 ml-2">Python, Node.js, React, TensorFlow/Keras/PyTorch, VLC, HDF5, Firebase, Heroku, Git.</span>
                  </div>

                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-cyber-cyan mr-2">▸</span>
                      Built computer vision MVP for demographic detection and advertising analytics on digital signage networks
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-cyan mr-2">▸</span>
                      Secured <span className="text-cyber-yellow font-bold">2 prospective clients in 2 weeks</span> for MVP rollout to 16,000+ digital screens, validating market demand through rapid customer development
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-cyan mr-2">▸</span>
                      Recruited volunteer engineering talent and advertising experts through vision alignment, building cross-functional team to develop prototype
                    </li>
                  </ul>

                  <div className="border-t border-cyber-cyan/20 pt-4">
                    <span className="text-cyber-yellow font-semibold">Note:</span>
                    <span className="text-gray-300 ml-2">
                      MVP targeted <span className="text-cyber-yellow font-bold">16,000 in-transit</span> and
                      <span className="text-cyber-yellow font-bold"> 100 indoor</span> displays.
                      Disbanded after founder realignment.
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* KyoZen */}
              <motion.div
                className="border border-amber-500/40 p-8 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.01, borderColor: 'rgba(245, 158, 11, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-amber-500 mb-2">KyoZen</h3>
                      <p className="text-gray-400">party matching for e-sports (Web)</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-cyber-green font-semibold">Stack:</span>
                    <span className="text-gray-300 ml-2">Node.js, React, Firebase, Heroku, Git, Bitbucket.</span>
                  </div>
                  
                  <div className="border-t border-amber-500/20 pt-4">
                    <span className="text-cyber-yellow font-semibold">Note:</span>
                    <span className="text-gray-300 ml-2">quick team formation; simple matchmaking loops.</span>
                  </div>
                </div>
              </motion.div>

              {/* PageBoy */}
              <motion.div
                className="border border-cyber-green/30 p-8 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 136, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyber-green mb-2">PageBoy</h3>
                      <p className="text-gray-400">QR ordering for physical stores (Web)</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-cyber-green font-semibold">Stack:</span>
                    <span className="text-gray-300 ml-2">Node.js, AngularJS, Firebase, Bootstrap, Heroku, Git.</span>
                  </div>
                  
                  <div className="border-t border-cyber-green/20 pt-4">
                    <span className="text-cyber-yellow font-semibold">Note:</span>
                    <span className="text-gray-300 ml-2">menu → order → notify; fast setup for small shops.</span>
                  </div>
                </div>
              </motion.div>

              {/* More projects download button */}
              <motion.div
                className="mt-8 flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/cv/Ken_Ranosa_CV.pdf'
                    link.download = 'Ken_Ranosa_CV.pdf'
                    link.click()
                  }}
                  className="group relative px-8 py-4 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative flex items-center gap-3">
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    Download CV for More Projects
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Engineering Themes */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="04" 
              title="ENGINEERING THEMES" 
              subtitle="PERSONAL REFLECTION ON HOW I ADD VALUE"
            />

            <div className="text-center mb-12 text-gray-400">
              <p>Simple and practical.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Public-impact builder */}
              <motion.div
                className="border border-cyber-cyan/30 p-6 backdrop-blur-sm hover:border-cyber-cyan/50 transition-all"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-cyber-cyan mb-3">Public-impact builder</h3>
                <p className="text-gray-300 mb-3">Work that helps people at scale.</p>
                <div className="text-sm">
                  <span className="text-cyber-green font-semibold">Proof:</span>
                  <span className="text-gray-400"> Formative features tied to </span>
                  <span className="text-cyber-yellow font-bold">&gt;$1M</span>
                  <span className="text-gray-400"> in deals.</span>
                </div>
              </motion.div>

              {/* Systems thinker */}
              <motion.div
                className="border border-amber-500/40 p-6 backdrop-blur-sm hover:border-amber-500/60 transition-all"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-amber-500 mb-3">Systems thinker</h3>
                <p className="text-gray-300 mb-3">Clear trade-offs (consistency/latency/cost).</p>
                <div className="text-sm">
                  <span className="text-cyber-green font-semibold">Proof:</span>
                  <span className="text-gray-400"> reliable CI/test architecture; integration isolation.</span>
                </div>
              </motion.div>

              {/* Team multiplier */}
              <motion.div
                className="border border-cyber-green/30 p-6 backdrop-blur-sm hover:border-cyber-green/50 transition-all"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-cyber-green mb-3">Team multiplier</h3>
                <p className="text-gray-300 mb-3">Execute fast. Build and share tools.</p>
                <div className="text-sm">
                  <span className="text-cyber-green font-semibold">Proof:</span>
                  <span className="text-gray-400"> generator adopted by 8 engineers; reusable CI snippets.</span>
                </div>
              </motion.div>

              {/* Partner and evangelist */}
              <motion.div
                className="border border-cyber-orange/30 p-6 backdrop-blur-sm hover:border-cyber-orange/50 transition-all"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-cyber-orange mb-3">Partner and evangelist</h3>
                <p className="text-gray-300 mb-3">Align early. Explain clearly. Influence without authority.</p>
                <div className="text-sm">
                  <span className="text-cyber-green font-semibold">Proof:</span>
                  <span className="text-gray-400"> demo-first reviews; testimonials on collaboration.</span>
                </div>
              </motion.div>

              {/* Crisis engineer */}
              <motion.div
                className="border border-pink-400/30 p-6 backdrop-blur-sm hover:border-pink-400/50 transition-all"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-pink-400 mb-3">Crisis engineer</h3>
                <p className="text-gray-300 mb-3">Calm in incidents. Root cause. Durable fixes.</p>
                <div className="text-sm">
                  <span className="text-cyber-green font-semibold">Proof:</span>
                  <span className="text-gray-400"> faster, stable tests; flake triage; preventative checks.</span>
                </div>
              </motion.div>

              {/* Periodic reset, higher bar */}
              <motion.div
                className="border border-cyber-yellow/30 p-6 backdrop-blur-sm hover:border-cyber-yellow/50 transition-all"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-cyber-yellow mb-3">Periodic reset, higher bar</h3>
                <p className="text-gray-300 mb-3">Declutter. Recenter. Retool.</p>
                <div className="text-sm">
                  <span className="text-cyber-green font-semibold">Proof:</span>
                  <span className="text-gray-400"> sustainable cadence and the habits below.</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Gaps Section */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="05" 
              title="GAPS" 
              subtitle="KNOWN GAPS AND ACTIVE FIXES"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {/* Avoiding overwork */}
              <motion.div
                className="border border-cyber-cyan/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 255, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-cyber-cyan mb-3">Avoiding overwork</h3>
                  <p className="text-gray-300 text-sm">
                    3 focused blocks/day, planned breaks, capacity cap 
                    <span className="text-cyber-yellow font-bold"> → steady pace</span>
                  </p>
                </div>
              </motion.div>

              {/* Asking for help earlier */}
              <motion.div
                className="border border-amber-500/40 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(245, 158, 11, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-amber-500 mb-3">Asking for help earlier</h3>
                  <p className="text-gray-300 text-sm">
                    call risks in week 1, share a short RFC
                    <span className="text-cyber-yellow font-bold"> → faster decisions</span>
                  </p>
                </div>
              </motion.div>

              {/* Aligning before building */}
              <motion.div
                className="border border-cyber-green/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 136, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-cyber-green mb-3">Aligning before building</h3>
                  <p className="text-gray-300 text-sm">
                    1-page brief, early demo
                    <span className="text-cyber-yellow font-bold"> → fewer reworks</span>
                  </p>
                </div>
              </motion.div>

              {/* Protecting focus */}
              <motion.div
                className="border border-cyber-orange/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(255, 140, 0, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-cyber-orange mb-3">Protecting focus</h3>
                  <p className="text-gray-300 text-sm">
                    1–3 goals/week, public done list, time-boxed spikes
                    <span className="text-cyber-yellow font-bold"> → consistent progress</span>
                  </p>
                </div>
              </motion.div>

              {/* Infra specialization */}
              <motion.div
                className="border border-pink-400/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(255, 105, 180, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-pink-400 mb-3">Infra specialization</h3>
                  <p className="text-gray-300 text-sm">
                    partner with SREs; own CI/tests/observability; write runbooks
                    <span className="text-cyber-yellow font-bold"> → clear ownership</span>
                  </p>
                </div>
              </motion.div>

              {/* Design & accessibility depth */}
              <motion.div
                className="border border-cyber-yellow/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(255, 204, 0, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-cyber-yellow mb-3">Design & accessibility depth</h3>
                  <p className="text-gray-300 text-sm">
                    a11y checklist, Lighthouse runs, quick review
                    <span className="text-cyber-yellow font-bold"> → clean, usable UI</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Edge Section */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="06" 
              title="EDGE" 
              subtitle="WHAT I DO BEST, WITH PROOF"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {/* Deliver under deadline */}
              <motion.div
                className="border border-cyber-green/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 136, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-cyber-green mb-3">Deliver under deadline</h3>
                  <p className="text-gray-300 text-sm">
                    features tied to <span className="text-cyber-yellow font-bold">&gt;$1M</span> in deals
                  </p>
                </div>
              </motion.div>

              {/* Make teams faster */}
              <motion.div
                className="border border-cyber-cyan/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 255, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-cyber-cyan mb-3">Make teams faster</h3>
                  <p className="text-gray-300 text-sm">
                    <span className="text-cyber-yellow font-bold">600%</span> faster tests; 
                    <span className="text-cyber-yellow font-bold"> hours → seconds</span> integration loop
                  </p>
                </div>
              </motion.div>

              {/* Enable the team */}
              <motion.div
                className="border border-amber-500/40 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(245, 158, 11, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-amber-500 mb-3">Enable the team</h3>
                  <p className="text-gray-300 text-sm">
                    generator cut setup <span className="text-cyber-yellow font-bold">2 weeks → 1 minute</span>; 
                    adopted by <span className="text-cyber-yellow font-bold">8</span> engineers; YouTube UX analysis bot
                  </p>
                </div>
              </motion.div>

              {/* Full-stack with test discipline */}
              <motion.div
                className="border border-cyber-orange/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(255, 140, 0, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-cyber-orange mb-3">Full-stack with test discipline</h3>
                  <p className="text-gray-300 text-sm">
                    TypeScript/Node/React + GraphQL + CI; Started career with TDD Java stack
                  </p>
                </div>
              </motion.div>

              {/* Bias to ship */}
              <motion.div
                className="border border-pink-400/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(255, 105, 180, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-pink-400 mb-3">Bias to ship</h3>
                  <p className="text-gray-300 text-sm">
                    ensured time-sensitive delivery; founder experience; shipped side projects
                  </p>
                </div>
              </motion.div>

              {/* Remote-Proven */}
              <motion.div
                className="border border-cyber-yellow/30 p-6 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(255, 204, 0, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-cyber-yellow mb-3">Remote-Proven</h3>
                  <p className="text-gray-300 text-sm">
                    reliable delivery across time zones
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>


        {/* Recommendations */}
        <section className="scroll-section min-h-screen py-16 md:py-32 relative overflow-hidden">
          <motion.div
            className="max-w-7xl mx-auto px-4 md:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="07" 
              title="TESTIMONIALS" 
              subtitle="WORDS FROM COLLEAGUES"
            />
          </motion.div>

          <div className="mt-16 relative">
            <TestimonialMarquee />
          </div>
          
          {/* What this signals to hiring managers */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto px-4 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="border border-cyber-cyan/30 p-8 backdrop-blur-sm" style={{ backgroundColor: '#0a0a0a' }}>
              <h3 className="text-xl font-bold text-cyber-cyan mb-6">What this signals to hiring managers:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-cyber-green font-bold mr-3">Speed:</span>
                  <span className="text-gray-300">
                    repeatedly trusted with urgent work; fast learner; shortens feedback loops
                  </span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-cyber-purple font-bold mr-3">Results:</span>
                  <span className="text-gray-300">
                    revenue impact, defect discovery during refactors, measurable test/CI wins
                  </span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-cyber-orange font-bold mr-3">Likeability:</span>
                  <span className="text-gray-300">
                    coachable, collaborative, energizing presence on teams
                  </span>
                </div>
              </div>
              
              {/* CTA Download Button */}
              <div className="mt-8 pt-6 border-t border-cyber-cyan/20 flex justify-center">
                <motion.button
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/cv/Ken_Ranosa_CV.pdf'
                    link.download = 'Ken_Ranosa_CV.pdf'
                    link.click()
                  }}
                  className="group relative px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all duration-300 font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative flex items-center gap-3">
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    Download CV & See Full Work History
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Playbook Section */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="08" 
              title="PLAYBOOK" 
              subtitle="HOW I WORK"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Cadence */}
              <motion.div
                className="border border-cyber-cyan/30 p-8 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 255, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-cyber-cyan mb-6">Cadence:</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <span className="text-cyber-green">•</span> 3 deep-work blocks/day at ~70% effort 
                      <span className="text-gray-500 block text-sm mt-1">(sustainable pace)</span>
                    </div>
                    <div>
                      <span className="text-cyber-green">•</span> Weekly <span className="font-bold text-cyber-yellow">1–3 main deliverables</span> with clear acceptance criteria
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Definition of Done */}
              <motion.div
                className="border border-amber-500/40 p-8 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(245, 158, 11, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-amber-500 mb-6">Definition of Done:</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <span className="text-cyber-green">•</span> Tests green (unit + integration), perf check, docs updated
                    </div>
                    <div>
                      <span className="text-cyber-green">•</span> Logging/metrics in place; rollback plan ready
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Collaboration Contract */}
              <motion.div
                className="border border-cyber-green/30 p-8 backdrop-blur-sm relative overflow-hidden group"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 136, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-cyber-green mb-6">Collaboration Contract:</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <span className="text-cyber-orange font-semibold">PM/Design:</span> 
                      <span className="block mt-1">1-page problem spec before building</span>
                    </div>
                    <div>
                      <span className="text-cyber-orange font-semibold">Eng:</span>
                      <span className="block mt-1">small PRs, async-friendly reviews, pair programming</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Snapshot Section */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="09" 
              title="SNAPSHOT" 
              subtitle="A FEW SIGNALS BEYOND CODE"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
              {/* Personality Types */}
              <motion.div
                className="border border-cyber-cyan/30 p-6 sm:p-8 backdrop-blur-sm"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <span className="text-cyber-green font-bold">ENFJ-A</span>
                    <span className="text-gray-400 text-sm sm:text-base">— collaborative, outcome-first</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <span className="text-cyber-purple font-bold">Aries</span>
                    <span className="text-gray-400 text-sm sm:text-base">— decisive, action-first</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <span className="text-cyber-orange font-bold">Fire Rabbit</span>
                    <span className="text-gray-400 text-sm sm:text-base">— empathetic, steady under pressure</span>
                  </div>
                </div>
              </motion.div>

              {/* Vedic Chart Intro */}
              <motion.div
                className="border border-pink-400/30 p-6 sm:p-8 backdrop-blur-sm"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-pink-400 font-bold mb-4">Vedic chart (career lens)</h3>
                <p className="text-gray-400 text-sm">
                  — a brief, personal lens I use for self-reflection. It's not evidence; the proof is in the work and metrics above.
                </p>
              </motion.div>
            </div>

            {/* Vedic Insights */}
            <div className="mt-8 space-y-6">
              {/* Mission-led builder */}
              <motion.div
                className="border border-cyber-yellow/20 p-6 backdrop-blur-sm"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-cyber-cyan font-bold mb-2">Mission-led builder</h4>
                    <p className="text-gray-300">— work that helps people at scale; comfortable with visibility.</p>
                  </div>
                  <div className="md:max-w-md">
                    <span className="text-gray-500 text-sm italic">Why: </span>
                    <span className="text-gray-400 text-sm">Sun + Jupiter + Rahu in Pisces, 10th (Uttarabhadra/Revati) → public impact, big goals.</span>
                  </div>
                </div>
              </motion.div>

              {/* Systems thinker */}
              <motion.div
                className="border border-cyber-yellow/20 p-6 backdrop-blur-sm"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-cyber-purple font-bold mb-2">Systems thinker</h4>
                    <p className="text-gray-300">— clear about trade-offs in distributed systems and protocols.</p>
                  </div>
                  <div className="md:max-w-md">
                    <span className="text-gray-500 text-sm italic">Why: </span>
                    <span className="text-gray-400 text-sm">Mercury in Aquarius, 9th (Shatabhisha) → networks, standards, research mindset.</span>
                  </div>
                </div>
              </motion.div>

              {/* Fast shipper, team multiplier */}
              <motion.div
                className="border border-cyber-yellow/20 p-6 backdrop-blur-sm"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-cyber-green font-bold mb-2">Fast shipper, team multiplier</h4>
                    <p className="text-gray-300">— executes quickly and shares tools others reuse.</p>
                  </div>
                  <div className="md:max-w-md">
                    <span className="text-gray-500 text-sm italic">Why: </span>
                    <span className="text-gray-400 text-sm">Mars in Aries, 11th (Krittika) → high energy + community leverage.</span>
                  </div>
                </div>
              </motion.div>

              {/* Partner & evangelist */}
              <motion.div
                className="border border-cyber-yellow/20 p-6 backdrop-blur-sm"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-cyber-orange font-bold mb-2">Partner & evangelist</h4>
                    <p className="text-gray-300">— aligns PM/Design/Eng; explains clearly; good with customers.</p>
                  </div>
                  <div className="md:max-w-md">
                    <span className="text-gray-500 text-sm italic">Why: </span>
                    <span className="text-gray-400 text-sm">Moon in Sagittarius, 7th with Uranus/Neptune → collaborative, teaching/evangelism vibe.</span>
                  </div>
                </div>
              </motion.div>

              {/* Crisis steady */}
              <motion.div
                className="border border-cyber-yellow/20 p-6 backdrop-blur-sm"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-pink-400 font-bold mb-2">Crisis steady</h4>
                    <p className="text-gray-300">— calm in incidents; fixes root causes and prevents repeats.</p>
                  </div>
                  <div className="md:max-w-md">
                    <span className="text-gray-500 text-sm italic">Why: </span>
                    <span className="text-gray-400 text-sm">Saturn in Scorpio, 6th (Jyeshtha) → depth, discipline under pressure.</span>
                  </div>
                </div>
              </motion.div>

              {/* Reset → upgrade */}
              <motion.div
                className="border border-cyber-yellow/20 p-6 backdrop-blur-sm"
                style={{ backgroundColor: '#0a0a0a' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-cyber-yellow font-bold mb-2">Reset → upgrade</h4>
                    <p className="text-gray-300">— periodic declutter/retooling leads to better versions.</p>
                  </div>
                  <div className="md:max-w-md">
                    <span className="text-gray-500 text-sm italic">Why: </span>
                    <span className="text-gray-400 text-sm">Ketu in Virgo, 4th aspecting the 10th cluster → healthy detachment → reinvention.</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Note */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-500 italic text-sm">
                *Fun signals I identify with; I still lead with data and delivery.*
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* CV Download */}
        <section className="scroll-section min-h-screen flex items-center justify-center py-16 md:py-32 px-4 md:px-8 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="10" 
              title="GET MY CV" 
              subtitle="DOWNLOAD THE FULL STORY"
            />

            <motion.div
              className="mt-16 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/cv/Ken_Ranosa_CV.pdf'
                  link.download = 'Ken_Ranosa_CV.pdf'
                  link.click()
                }}
                className="group relative px-12 py-6 border-2 border-cyber-green text-cyber-green hover:text-black font-bold text-lg overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-cyber-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative flex items-center gap-3">
                  <ArrowDownTrayIcon className="w-6 h-6" />
                  DOWNLOAD CV
                </span>
              </button>
            </motion.div>

            <motion.div
              className="mt-8 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              TypeScript/React Full-Stack Engineer • Remote Work
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mt-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
                
                {/* Main container */}
                <div className="relative border border-cyber-cyan/30 p-8 backdrop-blur-sm" style={{ backgroundColor: '#0a0a0a' }}>
                  <h3 className="text-cyber-cyan font-bold mb-8 text-xl text-center">Let's Connect</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Email */}
                    <motion.a
                      href="mailto:ken.ranosa@gmail.com"
                      className="group/item flex flex-col items-center p-4 border border-cyber-green/20 hover:border-cyber-green/50 transition-all duration-300"
                      style={{ backgroundColor: '#0a0a0a' }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="w-12 h-12 mb-3 flex items-center justify-center border border-cyber-green/30 group-hover/item:border-cyber-green/60 transition-colors">
                        <span className="text-cyber-green text-2xl">@</span>
                      </div>
                      <span className="text-cyber-green font-semibold text-sm mb-1">Email</span>
                      <span className="text-gray-400 text-xs text-center group-hover/item:text-gray-300 transition-colors">
                        ken.ranosa@gmail.com
                      </span>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                      href="https://www.linkedin.com/in/mranosa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item flex flex-col items-center p-4 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300"
                      style={{ backgroundColor: '#0a0a0a' }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="w-12 h-12 mb-3 flex items-center justify-center border border-amber-500/40 group-hover/item:border-amber-500/70 transition-colors">
                        <span className="text-amber-500 text-xl font-bold">in</span>
                      </div>
                      <span className="text-amber-500 font-semibold text-sm mb-1">LinkedIn</span>
                      <span className="text-gray-400 text-xs text-center group-hover/item:text-gray-300 transition-colors">
                        /in/mranosa
                      </span>
                    </motion.a>

                    {/* Calendar */}
                    <motion.a
                      href="#"
                      className="group/item flex flex-col items-center p-4 border border-cyber-orange/30 hover:border-cyber-orange/60 transition-all duration-300"
                      style={{ backgroundColor: '#0a0a0a' }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="w-12 h-12 mb-3 flex items-center justify-center border border-cyber-orange/30 group-hover/item:border-cyber-orange/60 transition-colors">
                        <span className="text-cyber-orange text-xl">📅</span>
                      </div>
                      <span className="text-cyber-orange font-semibold text-sm mb-1">Calendar</span>
                      <span className="text-gray-400 text-xs text-center group-hover/item:text-gray-300 transition-colors">
                        Book 15 minutes
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  )
}

// Component: Section Title
function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <motion.div
      className="text-center mb-8 md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-cyber-cyan text-sm mb-2">[{number}]</div>
      <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 glitch-text">{title}</h2>
      <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest px-4">{subtitle}</div>
    </motion.div>
  )
}

// Component: Work Experience Section
function WorkExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleCount = 3
  
  const displayedJobs = isExpanded ? workExperience : workExperience.slice(0, visibleCount)
  const hasMore = workExperience.length > visibleCount
  
  return (
    <motion.div
      className="max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle 
        number="02" 
        title="WORK EXPERIENCE" 
        subtitle="A DECADE AND A HALF OF INNOVATION"
      />

      <div className="relative mt-16">
        {/* Timeline Line - adjusts height based on expanded state */}
        <motion.div 
          className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-cyber-cyan via-cyber-green to-transparent"
          animate={{
            height: isExpanded ? 'auto' : '100%'
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ bottom: 0 }}
        />

        {/* Timeline Items */}
        <AnimatePresence mode="sync">
          {displayedJobs.map((job, index) => (
            <TimelineItem
              key={job.id}
              job={job}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </AnimatePresence>

        {/* Show More/Less Button */}
        {hasMore && (
          <motion.div
            className="relative flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all duration-300 font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="relative flex items-center gap-2">
                {isExpanded ? (
                  <>
                    <span>Show Less</span>
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↑
                    </motion.span>
                  </>
                ) : (
                  <>
                    <span>View {workExperience.length - visibleCount} More Positions</span>
                    <motion.span
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↓
                    </motion.span>
                  </>
                )}
              </span>
              {!isExpanded && (
                <span className="absolute -top-2 -right-2 bg-cyber-yellow text-black text-xs px-2 py-1 rounded animate-pulse">
                  +{workExperience.length - visibleCount}
                </span>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// Component: Timeline Item
function TimelineItem({ job, index = 0, isLeft }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center mb-12 md:mb-24 
        ${isLeft ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Mobile: all items on right, Desktop: alternating */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 
        ${isLeft ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
        <motion.div
          className={`inline-block w-full ${isLeft ? 'ml-auto' : 'mr-auto'}`}
          initial={false}
          animate={{
            scale: isHovered ? 1.02 : 1,
            y: isHovered ? -5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.3
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className={`border border-cyber-cyan/30 p-8 flex flex-col relative overflow-hidden`}
            animate={{
              borderColor: isHovered ? 'rgba(0, 255, 255, 0.6)' : 'rgba(0, 255, 255, 0.3)'
            }}
            transition={{
              borderColor: {
                duration: 0.3
              }
            }}
            style={{ backgroundColor: '#0a0a0a' }}
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
              initial={{ x: '-100%' }}
              animate={{
                x: isHovered ? '100%' : '-100%'
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
              style={{ pointerEvents: 'none' }}
            />
            <motion.div 
              className="text-cyber-cyan text-sm mb-2"
              animate={{ opacity: isHovered ? 1 : 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {job.duration}
            </motion.div>
            <motion.h3 
              className={`text-xl font-bold text-white mb-2`}
              animate={{ 
                scale: isHovered ? 1.02 : 1,
                color: isHovered ? '#ffffff' : '#f0f0f0'
              }}
              transition={{ duration: 0.3 }}
            >
              {job.position}
            </motion.h3>
            <motion.div 
              className={`text-cyber-green mb-2`}
              animate={{ opacity: isHovered ? 1 : 0.85 }}
              transition={{ duration: 0.2 }}
            >
              {job.company}
            </motion.div>
            <motion.div 
              className="text-gray-500 text-sm"
              animate={{ 
                marginBottom: isHovered ? '16px' : '0px',
                opacity: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.3 }}
            >
              {job.location} • {job.type}
            </motion.div>
            

            {/* Technologies */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1
              }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05 + 0.2
              }}
            >
              {job.technologies.map((tech: string, i: number) => (
                <motion.span 
                  key={tech} 
                  className="text-xs border border-cyber-cyan/20 px-2 py-2 text-gray-500 hover:border-cyber-cyan/40 hover:text-gray-400 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    delay: index * 0.05 + 0.2 + i * 0.02,
                    duration: 0.3
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Connection Line from Card to Timeline - Mobile: short horizontal line */}
      <motion.div
        className={`absolute top-8 md:top-1/2 md:-translate-y-1/2 h-px bg-cyber-cyan/30 
          left-8 w-4 md:w-auto
          ${isLeft ? 'md:right-1/2 md:left-8' : 'md:left-1/2 md:right-8'}`}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
        style={{ originX: isLeft ? 1 : 0 }}
      />

      {/* Timeline Dot - Mobile: left side, Desktop: center */}
      <motion.div
        className="absolute left-4 md:left-1/2 top-8 md:top-1/2 
          -translate-x-1/2 md:-translate-y-1/2 
          w-4 h-4 bg-cyber-cyan rounded-full border-2 border-black z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.3 }}
      />
    </motion.div>
  )
}

// Component: Typewriter Effect
function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')
  
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  )
}

// Component: Testimonial Marquee
function TestimonialMarquee() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showAllMobile, setShowAllMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Split recommendations into two rows
  const halfLength = Math.ceil(recommendations.length / 2)
  const firstRow = recommendations.slice(0, halfLength)
  const secondRow = recommendations.slice(halfLength)
  
  // For mobile, show static grid instead of marquee
  if (isMobile) {
    const visibleRecommendations = showAllMobile ? recommendations : recommendations.slice(0, 3)
    const hasMore = recommendations.length > 3
    
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="wait">
            {visibleRecommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.3
                }}
              >
                <TestimonialCard 
                  rec={rec} 
                  onHover={() => {}}
                  cardId={rec.id}
                  isMobileGrid={true}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {hasMore && (
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300"
            >
              <span>{showAllMobile ? 'Show Less' : `Show ${recommendations.length - 3} More`}</span>
              <motion.span
                animate={{ rotate: showAllMobile ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        )}
      </div>
    )
  }
  
  return (
    <div className="space-y-8 relative">
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        .marquee-paused {
          animation-play-state: paused !important;
        }
      `}</style>
      
      {/* First Row - Left to Right */}
      <div className="relative overflow-hidden">
        <div 
          className={`flex gap-4 marquee-left ${hoveredCard ? 'marquee-paused' : ''}`}
          style={{ width: 'fit-content' }}
        >
          {/* Duplicate for seamless loop */}
          {[...firstRow, ...firstRow].map((rec, i) => (
            <TestimonialCard 
              key={`${rec.id}-${i}`} 
              rec={rec} 
              onHover={setHoveredCard}
              cardId={`row1-${rec.id}-${i}`}
            />
          ))}
        </div>
      </div>
      
      {/* Second Row - Right to Left */}
      <div className="relative overflow-hidden">
        <div 
          className={`flex gap-4 marquee-right ${hoveredCard ? 'marquee-paused' : ''}`}
          style={{ width: 'fit-content' }}
        >
          {/* Duplicate for seamless loop */}
          {[...secondRow, ...secondRow].map((rec, i) => (
            <TestimonialCard 
              key={`${rec.id}-${i}`} 
              rec={rec} 
              onHover={setHoveredCard}
              cardId={`row2-${rec.id}-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Component: Testimonial Card
function TestimonialCard({ rec, onHover, cardId, isMobileGrid = false }: any) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <motion.div 
      className={isMobileGrid ? "w-full" : "flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"}
      onMouseEnter={() => {
        onHover(cardId)
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        onHover(null)
        setIsHovered(false)
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
        y: isHovered ? -5 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3
      }}
    >
      <motion.div
        className="border border-pink-400/30 p-6 relative overflow-hidden flex flex-col"
        animate={{
          borderColor: (isHovered || isMobile) ? 'rgba(255, 105, 180, 0.6)' : 'rgba(255, 105, 180, 0.3)',
          height: (isHovered || isMobile) ? 'auto' : '120px',
          minHeight: (isHovered || isMobile) ? '200px' : '120px'
        }}
        transition={{
          height: { type: "spring", stiffness: 200, damping: 25 },
          borderColor: { duration: 0.3 }
        }}
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ pointerEvents: 'none' }}
        />
        
        <div className="flex items-start gap-4 mb-4">
          <motion.div 
            className="text-2xl"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {rec.avatar}
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <motion.h3 
                className={`text-sm font-bold text-cyber-cyan ${!isHovered && 'truncate'}`}
                animate={{ scale: isHovered ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {rec.name}
              </motion.h3>
            </div>
            <motion.div 
              className={`text-xs text-gray-400 ${!isHovered && 'truncate'}`}
              animate={{ opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {rec.position} at {rec.company}
            </motion.div>
          </div>
        </div>

        {/* Quote - Only fully visible on hover or mobile */}
        <motion.blockquote 
          className="text-gray-300 text-xs italic flex-grow"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: (isHovered || isMobile) ? 1 : 0,
            marginBottom: (isHovered || isMobile) ? '12px' : '0px'
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          "{rec.recommendation}"
        </motion.blockquote>

        {/* LinkedIn link - Only visible on hover or mobile */}
        <motion.div 
          className="text-xs text-gray-500"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: (isHovered || isMobile) ? 1 : 0,
            height: (isHovered || isMobile) ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <a 
            href={`https://${rec.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-cyan transition-colors inline-flex items-center"
          >
            <LinkIcon className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
