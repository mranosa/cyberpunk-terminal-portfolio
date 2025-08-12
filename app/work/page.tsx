'use client'

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { workExperience } from '@/components/terminal/data/workExperience'
import { recommendations } from '@/components/terminal/data/recommendations'
import { skills } from '@/components/terminal/data/skills'
import { projects } from '@/components/terminal/data/projects'
import MatrixRain from '@/components/MatrixRainWrapper'
import { ArrowLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { StarIcon, LinkIcon } from '@heroicons/react/24/solid'
import { useRef, useEffect, useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function WorkPage() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Drag hint states
  const [showScrollHint, setShowScrollHint] = useState(false)
  const [isScrollable, setIsScrollable] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartY, setDragStartY] = useState(0)
  const [dragStartScrollTop, setDragStartScrollTop] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const scrollSpring = useSpring(scrollYProgress, springConfig)

  // Check if page is scrollable
  const checkScrollable = () => {
    const isPageScrollable = document.documentElement.scrollHeight > window.innerHeight
    setIsScrollable(isPageScrollable)
    
    if (isPageScrollable && window.innerWidth <= 768) {
      // Show hint on mobile devices when scrollable
      showHintWithAutoHide()
    }
  }

  // Auto-hide scroll hint after 3 seconds of inactivity
  const scheduleHideHint = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
    }
    
    hideTimeoutRef.current = setTimeout(() => {
      if (!isDragging) {
        setShowScrollHint(false)
      }
    }, 3000)
  }

  // Show hint and schedule auto-hide
  const showHintWithAutoHide = () => {
    setShowScrollHint(true)
    scheduleHideHint()
  }

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    setIsDragging(true)
    setDragStartY(clientY)
    setDragStartScrollTop(window.scrollY)
    setShowScrollHint(true)
    
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
    }
    
    e.preventDefault()
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Handle drag movement
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return
      
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
      const deltaY = clientY - dragStartY
      const scrollRatio = deltaY / window.innerHeight
      const newScrollTop = dragStartScrollTop + (scrollRatio * document.documentElement.scrollHeight)
      
      window.scrollTo({
        top: Math.max(0, Math.min(document.documentElement.scrollHeight - window.innerHeight, newScrollTop)),
        behavior: 'auto'
      })
    }

    const handleEnd = () => {
      setIsDragging(false)
      scheduleHideHint()
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMove)
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchmove', handleMove)
      document.addEventListener('touchend', handleEnd)
      
      document.body.style.cursor = 'grabbing'
      document.body.style.userSelect = 'none'
    }

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseup', handleEnd)
      document.removeEventListener('touchmove', handleMove)
      document.removeEventListener('touchend', handleEnd)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
  }, [isDragging, dragStartY, dragStartScrollTop])

  // Update active section and scroll progress
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
      
      // Calculate scroll progress for drag hint position
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = Math.min(1, Math.max(0, currentScroll / scrollHeight))
      setScrollProgress(progress)
      
      // Show hint on scroll if on mobile
      if (isScrollable && window.innerWidth <= 768) {
        showHintWithAutoHide()
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrollable])

  // Check scrollable on mount and resize
  useEffect(() => {
    const handleResize = () => {
      checkScrollable()
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Initial check
    checkScrollable()
    setIsMobile(window.innerWidth <= 768)
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  const handleBackToTerminal = () => {
    router.push('/?skipSplash=true')
  }

  // Parallax transforms
  const heroY = useTransform(scrollSpring, [0, 0.2], [0, -100])
  const heroOpacity = useTransform(scrollSpring, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollSpring, [0, 0.2], [1, 0.95])

  return (
    <>
      <MatrixRain />
      <div ref={containerRef} className="relative bg-black text-white">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-cyber-cyan z-50 origin-left"
          style={{ scaleX: scrollSpring }}
        />

        {/* Drag Hint for Mobile */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: isDragging ? 1 : [1, 1.1, 1],
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.3,
                scale: isDragging ? {} : {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5
                }
              }}
              className="fixed right-4 z-40 md:hidden transition-[top] duration-100 ease-out"
              style={{ 
                top: `${Math.max(10, Math.min(90, 10 + scrollProgress * 80))}%`,
                cursor: isDragging ? 'grabbing' : 'grab',
                touchAction: 'none'
              }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <div className="bg-cyber-cyan/20 backdrop-blur-md border border-cyber-cyan/50 rounded-full px-3 py-2 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:bg-cyber-cyan/30 transition-colors">
                <span className="text-xs font-mono text-cyber-cyan whitespace-nowrap select-none">
                  ↕ Drag
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Track Indicator for Mobile (optional visual aid) */}
        {isScrollable && isMobile && (
          <div className="fixed right-6 top-[10%] bottom-[10%] w-px bg-gray-800/30 z-30 md:hidden" />
        )}

        {/* Floating Nav Dots */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
          {['INTRO', 'EXPERIENCE', 'SKILLS', 'PROJECTS', 'TESTIMONIALS', 'DOWNLOAD'].map((label, i) => (
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
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
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

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="text-cyber-green glitch-text inline-block">KEN</span>{' '}
                  <span className="text-cyber-cyan glitch-text inline-block">RANOSA</span>
                </h1>
              </motion.div>

              <motion.div
                className="text-xl md:text-2xl text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TypewriterText text="Full Stack Engineer • 15+ Years • Remote" />
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center gap-4 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {['Experience', 'Skills', 'Projects', 'Recommendations', 'CV'].map((item, i) => (
                  <span key={item} className="text-cyber-cyan opacity-60">
                    {item}
                    {i < 4 && <span className="ml-4 text-gray-600">•</span>}
                  </span>
                ))}
              </motion.div>

              {/* Scroll to Explore - Centered below experience text */}
              <motion.div
                className="mt-16 flex flex-col items-center"
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

        {/* Work Experience Timeline */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="01" 
              title="WORK EXPERIENCE" 
              subtitle="A DECADE AND A HALF OF INNOVATION"
            />

            <div className="relative mt-16">
              {/* Timeline Line - Left on mobile, center on desktop */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan via-cyber-green to-transparent" />

              {workExperience.map((job, index) => (
                <TimelineItem
                  key={job.id}
                  job={job}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Matrix */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative overflow-hidden">
          <FloatingParticles />
          
          <motion.div
            className="max-w-7xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="02" 
              title="TECHNICAL ARSENAL" 
              subtitle="TOOLS OF THE TRADE"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-16">
              <SkillCard title="LANGUAGES" skills={skills.languages} color="cyan" delay={0} />
              <SkillCard title="FRAMEWORKS" skills={skills.frameworks} color="purple" delay={0.1} />
              <SkillCard title="TOOLS & TESTING" skills={skills.tools} color="green" delay={0.2} />
              <SkillCard title="DATABASES" skills={skills.databases} color="orange" delay={0.3} />
              {skills.aiml && <SkillCard title="AI/ML" skills={skills.aiml} color="pink" delay={0.4} />}
            </div>
          </motion.div>
        </section>

        {/* Projects Showcase */}
        <section className="scroll-section min-h-screen py-16 md:py-32 px-4 md:px-8 relative">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              number="03" 
              title="PET PROJECTS" 
              subtitle="EXPERIMENTS IN CODE"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-16">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
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
              number="04" 
              title="TESTIMONIALS" 
              subtitle="WORDS FROM COLLEAGUES"
            />
          </motion.div>

          <div className="mt-16 relative">
            <TestimonialMarquee />
          </div>
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
              number="05" 
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
                  link.href = '/cv/SOFTWARE_ENGINEER_CV.pdf'
                  link.download = 'Mark_Kenneth_Ranosa_CV.pdf'
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
              15+ years of experience • Full Stack Development • Remote Work
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

// Component: Timeline Item
function TimelineItem({ job, index, isLeft }: any) {
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
            className={`border border-cyber-cyan/30 p-6 flex flex-col relative overflow-hidden`}
            animate={{
              borderColor: (isHovered || isMobile) ? 'rgba(0, 255, 255, 0.6)' : 'rgba(0, 255, 255, 0.3)',
              height: (isHovered || isMobile) ? 'auto' : '150px',
              minHeight: (isHovered || isMobile) ? '280px' : '150px'
            }}
            transition={{
              height: {
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 0.4
              },
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
              className={`text-xl font-bold text-white mb-1 ${!isHovered && 'line-clamp-1'}`}
              animate={{ 
                scale: isHovered ? 1.02 : 1,
                color: isHovered ? '#ffffff' : '#f0f0f0'
              }}
              transition={{ duration: 0.3 }}
            >
              {job.position}
            </motion.h3>
            <motion.div 
              className={`text-cyber-green mb-2 ${!isHovered && 'line-clamp-1'}`}
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
            
            {/* Achievements - Only visible on hover or mobile */}
            <motion.div 
              className="space-y-2 flex-grow"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: (isHovered || isMobile) ? 1 : 0,
                height: (isHovered || isMobile) ? 'auto' : 0,
                marginBottom: (isHovered || isMobile) ? '16px' : '0px'
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut"
              }}
            >
              {job.achievements.map((achievement: string, i: number) => (
                <motion.div 
                  key={i} 
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: (isHovered || isMobile) ? 1 : 0, 
                    x: (isHovered || isMobile) ? 0 : -20
                  }}
                  transition={{
                    delay: isHovered ? i * 0.05 : 0,
                    duration: 0.3
                  }}
                >
                  <span className="text-cyber-cyan mr-2">▸</span>
                  {achievement}
                </motion.div>
              ))}
            </motion.div>

            {/* Technologies - Only visible on hover or mobile, showing all */}
            <motion.div 
              className="flex flex-wrap gap-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: (isHovered || isMobile) ? 1 : 0,
                height: (isHovered || isMobile) ? 'auto' : 0
              }}
              transition={{ 
                duration: 0.3,
                delay: isHovered ? 0.1 : 0
              }}
            >
              {job.technologies.map((tech: string, i: number) => (
                <motion.span 
                  key={tech} 
                  className="text-xs border border-cyber-cyan/20 px-2 py-1 text-gray-500 hover:border-cyber-cyan/40 hover:text-gray-400 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: (isHovered || isMobile) ? 1 : 0,
                    scale: (isHovered || isMobile) ? 1 : 0.8
                  }}
                  transition={{
                    delay: isHovered ? i * 0.02 : 0,
                    duration: 0.2
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

// Component: Skill Card
function SkillCard({ title, skills, color, delay }: any) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const colorClasses: any = {
    cyan: 'border-cyber-cyan/30 text-cyber-cyan',
    purple: 'border-nova-purple/30 text-nova-purple',
    green: 'border-cyber-green/30 text-cyber-green',
    orange: 'border-cyber-orange/30 text-cyber-orange',
    pink: 'border-pink-400/30 text-pink-400'
  }
  
  const glowColors: any = {
    cyan: 'rgba(0, 255, 255, 0.05)',
    purple: 'rgba(147, 112, 219, 0.05)',
    green: 'rgba(0, 250, 154, 0.05)',
    orange: 'rgba(255, 140, 0, 0.05)',
    pink: 'rgba(255, 105, 180, 0.05)'
  }

  return (
    <motion.div
      className={`relative ${colorClasses[color]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      animate={{
        scale: isHovered ? 1.02 : 1,
        y: isHovered ? -5 : 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`border p-6 relative overflow-hidden ${colorClasses[color]}`}
        animate={{
          borderColor: (isHovered || isMobile) ? 
            color === 'cyan' ? 'rgba(0, 255, 255, 0.6)' :
            color === 'purple' ? 'rgba(147, 112, 219, 0.6)' :
            color === 'green' ? 'rgba(0, 250, 154, 0.6)' :
            color === 'orange' ? 'rgba(255, 140, 0, 0.6)' :
            'rgba(255, 105, 180, 0.6)' 
            : undefined,
          height: (isHovered || isMobile) ? 'auto' : '100px',
          minHeight: (isHovered || isMobile) ? '100px' : '100px'
        }}
        transition={{
          height: { type: "spring", stiffness: 200, damping: 25 },
          borderColor: { duration: 0.3 }
        }}
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ 
            background: `linear-gradient(90deg, transparent, ${glowColors[color]}, transparent)`,
            pointerEvents: 'none' 
          }}
        />
        
        <motion.h3 
          className="font-bold mb-4 text-sm uppercase tracking-wider"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: (isHovered || isMobile) ? 1 : 0,
            height: (isHovered || isMobile) ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {skills?.map((skill: any, i: number) => (
            <motion.span
              key={skill.name}
              className="text-xs border border-current/30 px-3 py-1 text-gray-400 hover:text-current hover:border-current/60 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: (isHovered || isMobile) ? 1 : 0,
                scale: (isHovered || isMobile) ? 1 : 0.8
              }}
              transition={{ delay: isHovered ? i * 0.02 : 0, duration: 0.2 }}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Component: Project Card
function ProjectCard({ project, index }: any) {
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
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      animate={{
        scale: isHovered ? 1.02 : 1,
        y: isHovered ? -5 : 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="border border-nova-purple/30 p-6 relative overflow-hidden"
        animate={{
          borderColor: (isHovered || isMobile) ? 'rgba(147, 112, 219, 0.6)' : 'rgba(147, 112, 219, 0.3)',
          height: (isHovered || isMobile) ? 'auto' : '180px',
          minHeight: (isHovered || isMobile) ? '180px' : '180px'
        }}
        transition={{
          height: { type: "spring", stiffness: 200, damping: 25 },
          borderColor: { duration: 0.3 }
        }}
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ pointerEvents: 'none' }}
        />
        
        <div className="flex items-start justify-between mb-4">
          <div>
            <motion.h3 
              className="text-xl font-bold text-cyber-cyan mb-1"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <div className="text-sm text-nova-purple">{project.type}</div>
          </div>
          <motion.span 
            className="text-xs border border-cyber-orange text-cyber-orange px-2 py-1"
            animate={{ 
              borderColor: isHovered ? 'rgba(255, 140, 0, 0.8)' : 'rgba(255, 140, 0, 0.5)',
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            MVP
          </motion.span>
        </div>

        <motion.p 
          className="text-gray-400 text-sm"
          animate={{ 
            marginBottom: isHovered ? '16px' : '0px',
            opacity: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>

        {/* Highlights - Only visible on hover or mobile */}
        {project.highlights && (
          <motion.div 
            className="space-y-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: (isHovered || isMobile) ? 1 : 0,
              height: (isHovered || isMobile) ? 'auto' : 0,
              marginBottom: (isHovered || isMobile) ? '16px' : '0px'
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {project.highlights.map((highlight: string, i: number) => (
              <motion.div 
                key={i} 
                className="text-gray-500 text-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: (isHovered || isMobile) ? 1 : 0,
                  x: (isHovered || isMobile) ? 0 : -20
                }}
                transition={{ delay: isHovered ? i * 0.05 : 0, duration: 0.3 }}
              >
                <span className="text-cyber-green">▸</span> {highlight}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Technologies - Only visible on hover or mobile, showing all */}
        <motion.div 
          className="flex flex-wrap gap-1"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: (isHovered || isMobile) ? 1 : 0,
            height: (isHovered || isMobile) ? 'auto' : 0
          }}
          transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
        >
          {project.tech.map((tech: string, i: number) => (
            <motion.span 
              key={tech} 
              className="text-xs border border-nova-purple/20 px-2 py-0.5 text-gray-500 hover:border-nova-purple/40 hover:text-gray-400 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: (isHovered || isMobile) ? 1 : 0,
                scale: (isHovered || isMobile) ? 1 : 0.8
              }}
              transition={{ delay: isHovered ? i * 0.02 : 0, duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Component: Testimonial Marquee
function TestimonialMarquee() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
  // Split recommendations into two rows
  const halfLength = Math.ceil(recommendations.length / 2)
  const firstRow = recommendations.slice(0, halfLength)
  const secondRow = recommendations.slice(halfLength)
  
  return (
    <div className="space-y-6 relative">
      {/* First Row - Left to Right */}
      <div className="relative overflow-hidden">
        <motion.div 
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{ x: hoveredCard ? 0 : '-50%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
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
        </motion.div>
      </div>
      
      {/* Second Row - Right to Left */}
      <div className="relative overflow-hidden">
        <motion.div 
          className="flex gap-4"
          initial={{ x: '-50%' }}
          animate={{ x: hoveredCard ? '-50%' : 0 }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
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
        </motion.div>
      </div>
    </div>
  )
}

// Component: Testimonial Card
function TestimonialCard({ rec, onHover, cardId }: any) {
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
      className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
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
        className="border border-pink-400/30 p-4 relative overflow-hidden flex flex-col"
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
        
        <div className="flex items-start gap-3 mb-3">
          <motion.div 
            className="text-2xl"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {rec.avatar}
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <motion.h3 
                className={`text-sm font-bold text-cyber-cyan ${!isHovered && 'truncate'}`}
                animate={{ scale: isHovered ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {rec.name}
              </motion.h3>
              <motion.div 
                className="flex gap-0.5 flex-shrink-0"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-2.5 h-2.5 text-cyber-orange" />
                ))}
              </motion.div>
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
            <LinkIcon className="w-3 h-3 mr-1" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
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

// Component: Floating Particles
function FloatingParticles() {
  const [mounted, setMounted] = useState(false)
  
  // Generate stable random values that won't change between renders
  const particles = useMemo(() => {
    if (!mounted) return []
    return [...Array(20)].map((_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      animateX: Math.random() * window.innerWidth,
      animateY: Math.random() * window.innerHeight,
      duration: Math.random() * 20 + 10
    }))
  }, [mounted])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyber-cyan/30 rounded-full"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
          }}
          animate={{
            x: particle.animateX,
            y: particle.animateY,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}