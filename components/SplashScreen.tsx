'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    // Initial loading phase
    const loadingTimer = setTimeout(() => {
      setPhase('typing')
    }, 1500)

    return () => clearTimeout(loadingTimer)
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
          setTimeout(onComplete, 1500)
        }, 1000)
      }
    }, 80)

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
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-cyber-darker z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyber-purple rounded-full mix-blend-screen filter blur-3xl animate-float"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyber-cyan rounded-full mix-blend-screen filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-pink rounded-full mix-blend-screen filter blur-3xl animate-pulse"
        />
      </div>

      <div className="relative z-10 text-center space-y-8">
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

              {/* Loading bars with enhanced animation */}
              <motion.div 
                variants={staggerContainer}
                className="space-y-2 w-80 mx-auto"
              >
                {['NEURAL.PATHWAYS', 'CYBER.INTERFACE', 'MATRIX.PROTOCOLS'].map(
                  (item, i) => (
                    <motion.div 
                      key={item} 
                      variants={staggerItem}
                      className="flex items-center gap-3"
                    >
                      <span className="text-cyber-green font-mono text-xs w-32">
                        {item}
                      </span>
                      <div className="flex-1 h-1 bg-black/50 border border-cyber-cyan/30 overflow-hidden rounded-full">
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: '100%', opacity: 1 }}
                          transition={{ 
                            delay: i * 0.2, 
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink"
                          style={{
                            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                          }}
                        />
                      </div>
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: i * 0.2 + 1.2,
                          type: 'spring',
                          stiffness: 600,
                          damping: 15
                        }}
                        className="text-cyber-green font-mono text-xs"
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
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-4xl md:text-6xl lg:text-7xl font-cyber font-black mb-20"
              >
                <motion.span 
                  className="glitch-text inline-block"
                  data-text={text}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(0, 255, 255, 0.5)',
                      '0 0 20px rgba(0, 255, 255, 0.8)',
                      '0 0 10px rgba(0, 255, 255, 0.5)',
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
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
                initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: 0.3,
                  duration: 1,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <CyberpunkAvatar />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Complete Phase */}
        <AnimatePresence>
          {phase === 'complete' && (
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-cyber-green font-mono text-lg"
              >
                SYSTEM.READY
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-400 font-mono text-sm"
              >
                ENTERING.TERMINAL.INTERFACE...
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 600,
                  damping: 15
                }}
                className="flex justify-center"
              >
                <div className="w-8 h-8 border-2 border-cyber-cyan border-t-transparent rounded-full animate-spin" 
                  style={{
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced loading indicator at bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex items-center gap-2 text-cyber-cyan/50 font-mono text-xs">
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-2 h-2 bg-cyber-cyan rounded-full"
          />
          <motion.span
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {phase === 'loading'
              ? 'LOADING.MODULES'
              : phase === 'typing'
                ? 'ESTABLISHING.IDENTITY'
                : 'READY.FOR.TERMINAL'}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  )
}