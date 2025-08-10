'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CyberpunkAvatar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-80 h-80 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neon glow rings */}
      <div className="absolute inset-0 rounded-full animate-pulse-neon">
        <div className="absolute inset-0 rounded-full border-2 border-cyber-cyan opacity-30 scale-110 animate-spin-slow" />
        <div className="absolute inset-0 rounded-full border-2 border-cyber-purple opacity-30 scale-125 animate-spin-slow-reverse" />
        <div className="absolute inset-0 rounded-full border-2 border-cyber-pink opacity-20 scale-150 animate-pulse" />
      </div>

      {/* Main avatar container */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyber-cyan shadow-neon-cyan">
        {/* Cyberpunk overlay effects */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent h-1/3 animate-scan" />
          </div>
          
          {/* Digital noise overlay */}
          <div 
            className={`absolute inset-0 opacity-10 mix-blend-screen transition-opacity duration-300 ${
              isHovered ? 'opacity-30' : 'opacity-10'
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Holographic shimmer */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-color-dodge"
            style={{
              background: `linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.3) 50%, transparent 70%)`,
              animation: 'shimmer 3s infinite',
            }}
          />
        </div>

        {/* Cartoon Avatar with cyberpunk effects */}
        <div className="relative w-full h-full">
          <Image
            src="/images/avatar-original.jpeg"
            alt="Ken Ranosa - Software Engineer Avatar"
            fill
            className={`object-cover transition-all duration-500 ${
              isHovered 
                ? 'scale-110 brightness-110 saturate-125' 
                : 'brightness-105 saturate-110'
            }`}
            style={{
              filter: isHovered 
                ? 'hue-rotate(15deg) contrast(115%)' 
                : 'hue-rotate(5deg) contrast(110%)',
            }}
            priority
          />
          
          {/* Subtle cyberpunk color overlay */}
          <div 
            className={`absolute inset-0 mix-blend-overlay transition-opacity duration-300 ${
              isHovered ? 'opacity-25' : 'opacity-20'
            }`}
            style={{
              background: 'linear-gradient(135deg, #00ffff 0%, #9d00ff 100%)',
            }}
          />
          
          {/* Digital glow effect */}
          <div 
            className={`absolute inset-0 mix-blend-screen transition-opacity duration-300 ${
              isHovered ? 'opacity-30' : 'opacity-20'
            }`}
            style={{
              background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 255, 255, 0.3) 100%)',
            }}
          />
        </div>

        {/* Glitch effect on hover */}
        {isHovered && (
          <>
            <div className="absolute inset-0 z-30 animate-glitch opacity-50">
              <Image
                src="/images/avatar-original.jpeg"
                alt="Avatar glitch effect layer 1"
                fill
                className="object-cover"
                style={{
                  filter: 'hue-rotate(90deg) saturate(200%)',
                  clipPath: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)',
                }}
              />
            </div>
            <div className="absolute inset-0 z-30 animate-glitch opacity-50" style={{ animationDelay: '0.1s' }}>
              <Image
                src="/images/avatar-original.jpeg"
                alt="Avatar glitch effect layer 2"
                fill
                className="object-cover"
                style={{
                  filter: 'hue-rotate(-90deg) saturate(200%)',
                  clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)',
                }}
              />
            </div>
          </>
        )}
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-4 right-4 z-40">
        <div className="relative">
          <div className="w-4 h-4 bg-cyber-green rounded-full animate-pulse" />
          <div className="absolute inset-0 w-4 h-4 bg-cyber-green rounded-full animate-ping" />
        </div>
      </div>

      {/* Label */}
      <motion.div 
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="text-cyber-cyan font-mono text-sm tracking-widest uppercase">
          <span className="opacity-50">[</span>
          <span className="px-2 animate-pulse">SYSTEM.USER</span>
          <span className="opacity-50">]</span>
        </div>
      </motion.div>
    </motion.div>
  )
}