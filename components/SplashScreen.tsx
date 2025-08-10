'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CyberpunkAvatar from './CyberpunkAvatar'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [text, setText] = useState('')
  const fullText = "SOFTWARE ENGINEER"
  const [showCursor, setShowCursor] = useState(true)
  const [phase, setPhase] = useState<'loading' | 'typing' | 'complete'>('loading')

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
    }, 100)

    return () => clearInterval(typingInterval)
  }, [phase, onComplete])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-cyber-darker z-50 flex flex-col items-center justify-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyber-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Loading Phase */}
        {phase === 'loading' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="text-cyber-cyan font-mono text-sm tracking-[0.3em]">
              {'<'} INITIALIZING SYSTEM {'/>'}
            </div>
            
            {/* Loading bars */}
            <div className="space-y-2 w-80 mx-auto">
              {['NEURAL.PATHWAYS', 'CYBER.INTERFACE', 'MATRIX.PROTOCOLS'].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-cyber-green font-mono text-xs w-32">{item}</span>
                  <div className="flex-1 h-1 bg-black/50 border border-cyber-cyan/30 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: i * 0.3, duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple"
                    />
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.3 + 1.5 }}
                    className="text-cyber-green font-mono text-xs"
                  >
                    OK
                  </motion.span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Typing Phase */}
        {phase === 'typing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-cyber font-black">
              <span className="glitch-text" data-text={text}>
                {text}
                <span className={`text-cyber-cyan ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
            >
              <CyberpunkAvatar />
            </motion.div>
          </motion.div>
        )}

        {/* Complete Phase */}
        {phase === 'complete' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="text-cyber-green font-mono text-lg">
              SYSTEM.READY
            </div>
            <div className="text-gray-400 font-mono text-sm">
              ENTERING.TERMINAL.INTERFACE...
            </div>
            <div className="flex justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-cyber-cyan border-t-transparent rounded-full" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Loading indicator at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 text-cyber-cyan/50 font-mono text-xs">
          <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
          <span>
            {phase === 'loading' ? 'LOADING.MODULES' : 
             phase === 'typing' ? 'ESTABLISHING.IDENTITY' : 
             'READY.FOR.TERMINAL'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}