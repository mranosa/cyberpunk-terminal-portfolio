'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CyberpunkAvatar from './CyberpunkAvatar'
import { fadeInUp, scaleIn, staggerContainer, staggerItem, glitchAnimation, blurIn } from '@/utils/animations'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [text, setText] = useState('')
  const fullText = 'SOFTWARE ENGINEER'
  const [showCursor, setShowCursor] = useState(true)
  const [phase, setPhase] = useState<'loading' | 'typing' | 'complete'>(
    'loading'
  )
  const [loadingProgress, setLoadingProgress] = useState([0, 0, 0])

  useEffect(() => {
    // Animate loading bars with proper timing
    const timers: NodeJS.Timeout[] = []
    
    ;[0, 1, 2].forEach((index) => {
      timers.push(
        setTimeout(() => {
          setLoadingProgress(prev => {
            const newProgress = [...prev]
            newProgress[index] = 100
            return newProgress
          })
        }, 300 + index * 200)
      )
    })
    
    // Transition to typing phase after loading
    timers.push(
      setTimeout(() => {
        setPhase('typing')
      }, 1400)
    )

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  useEffect(() => {
    if (phase !== 'typing') return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setPhase('complete')
          setTimeout(onComplete, 1200)
        }, 800)
      }
    }, 60)

    return () => clearInterval(typingInterval)
  }, [phase, onComplete])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 bg-cyber-darker z-50 flex flex-col items-center justify-center"
      style={{ willChange: 'opacity, transform, filter' }}
    >
      {/* Optimized background effects with GPU acceleration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[300px] max-h-[300px] bg-gradient-radial from-cyber-purple/30 to-transparent rounded-full"
          style={{ 
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform',
            filter: 'blur(60px)'
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] max-w-[300px] max-h-[300px] bg-gradient-radial from-cyber-cyan/30 to-transparent rounded-full"
          style={{ 
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform',
            filter: 'blur(60px)'
          }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] bg-gradient-radial from-cyber-pink/20 to-transparent rounded-full"
          style={{ 
            transform: 'translate3d(-50%, -50%, 0)',
            willChange: 'transform',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center justify-center w-full px-4">
        {/* Loading Phase */}
        <AnimatePresence mode="wait">
          {phase === 'loading' && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <motion.div 
                variants={fadeInUp}
                className="text-cyber-cyan font-mono text-sm tracking-[0.3em]"
              >
                {'<'} INITIALIZING SYSTEM {'/>'}
              </motion.div>

              {/* Optimized loading bars */}
              <motion.div 
                variants={staggerContainer}
                className="space-y-3 w-72 sm:w-80 mx-auto px-4"
              >
                {['NEURAL.PATHWAYS', 'CYBER.INTERFACE', 'MATRIX.PROTOCOLS'].map(
                  (item, i) => (
                    <motion.div 
                      key={item} 
                      variants={staggerItem}
                      className="flex items-center gap-3"
                    >
                      <span className="text-cyber-green font-mono text-[10px] sm:text-xs w-28 sm:w-32 truncate">
                        {item}
                      </span>
                      <div className="flex-1 h-1 bg-black/30 border border-cyber-cyan/20 overflow-hidden rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink transition-all duration-700 ease-out"
                          style={{
                            width: `${loadingProgress[i]}%`,
                            boxShadow: loadingProgress[i] > 0 ? '0 0 15px rgba(0, 255, 255, 0.4)' : 'none',
                            transform: 'translate3d(0, 0, 0)',
                          }}
                        />
                      </div>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ 
                          opacity: loadingProgress[i] === 100 ? 1 : 0,
                          scale: loadingProgress[i] === 100 ? 1 : 0.5
                        }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 500,
                          damping: 15
                        }}
                        className="text-cyber-green font-mono text-[10px] sm:text-xs"
                      >
                        OK
                      </motion.span>
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Typing Phase */}
        <AnimatePresence mode="wait">
          {phase === 'typing' && (
            <motion.div
              variants={blurIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-12"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cyber font-black mb-12 sm:mb-16 lg:mb-20"
                style={{ willChange: 'transform, opacity' }}
              >
                <motion.span 
                  className="inline-block relative"
                  style={{
                    textShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
                    willChange: 'transform'
                  }}
                >
                  {text}
                  <motion.span
                    animate={{ opacity: showCursor ? 1 : 0 }}
                    transition={{ duration: 0.1 }}
                    className="text-cyber-cyan"
                  >
                    _
                  </motion.span>
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.2,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25
                }}
                className="transform-gpu"
                style={{ willChange: 'transform, opacity' }}
              >
                <CyberpunkAvatar />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Complete Phase */}
        <AnimatePresence mode="wait">
          {phase === 'complete' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-6 z-20"
            >
              <div className="space-y-3 text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-cyber-green font-mono text-lg sm:text-xl"
                >
                  SYSTEM.READY
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-gray-400 font-mono text-sm sm:text-base"
                >
                  ENTERING.TERMINAL.INTERFACE...
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 0.4,
                  type: 'spring',
                  stiffness: 400,
                  damping: 20
                }}
                className="relative z-30"
              >
                {/* Cyberpunk hexagon loader */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  {/* Outer hexagon */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyber-cyan"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.3)',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Inner hexagon */}
                  <motion.div
                    className="absolute inset-2 border border-cyber-purple"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      boxShadow: '0 0 15px rgba(157, 0, 255, 0.6), inset 0 0 15px rgba(157, 0, 255, 0.3)',
                    }}
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Center pulse */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyber-cyan to-cyber-pink rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.8)',
                      }}
                    />
                  </motion.div>
                  
                  {/* Glitch lines */}
                  {[0, 120, 240].map((rotation, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"
                      style={{
                        transformOrigin: 'center',
                        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scaleX: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Optimized loading indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex items-center gap-2 text-cyber-cyan/40 font-mono text-[10px] sm:text-xs">
          <div 
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyber-cyan rounded-full"
            style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              transform: 'translate3d(0, 0, 0)',
            }}
          />
          <span className="select-none">
            {phase === 'loading'
              ? 'LOADING.MODULES'
              : phase === 'typing'
                ? 'ESTABLISHING.IDENTITY'
                : 'READY.FOR.TERMINAL'}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}