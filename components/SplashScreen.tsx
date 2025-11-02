'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import KRLogo from './KRLogo'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    // Auto-complete after 3 seconds (logo animation time)
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 bg-cyber-darker z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ willChange: 'opacity, transform, filter' }}
    >
      {/* Background gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-[15%] left-[10%] w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-[15%] right-[10%] w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.8, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-gradient-radial from-pink-500/15 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Matrix rain effect overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)',
            animation: 'scan-line-move 8s linear infinite'
          }}
        />
      </div>

      {/* KR Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="relative z-10"
      >
        <KRLogo />
      </motion.div>

      {/* Cyberpunk grid corners */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left corner */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 0.4, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-400/40"
        />

        {/* Top right corner */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 0.4, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-purple-400/40"
        />

        {/* Bottom left corner */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 0.4, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-pink-400/40"
        />

        {/* Bottom right corner */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 0.4, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-cyan-400/40"
        />
      </div>

      {/* Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex items-center gap-2 text-cyan-400/40 font-mono text-xs">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="select-none">INITIALIZING.SYSTEM</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
