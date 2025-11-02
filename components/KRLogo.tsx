'use client'

import { useEffect, useState } from 'react'

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'
const GLITCH_ITERATIONS = 20

export default function KRLogo() {
  const [displayText, setDisplayText] = useState('KR')
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    let iteration = 0
    const targetText = 'KR'

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((char, index) => {
            // Gradually reveal each character
            if (iteration > index * (GLITCH_ITERATIONS / targetText.length)) {
              return char
            }
            // Random glitch character
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          })
          .join('')
      )

      iteration++

      if (iteration >= GLITCH_ITERATIONS) {
        clearInterval(interval)
        setDisplayText(targetText)
        setIsAnimating(false)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-75" />
        <div className="absolute w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-150" />
      </div>

      {/* Main SVG Text */}
      <svg
        width="400"
        height="200"
        viewBox="0 0 400 200"
        className="relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glitch filter */}
          <filter id="glitch">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="1"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isAnimating ? "8" : "0"}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Scan lines pattern */}
          <pattern
            id="scanlines"
            width="100%"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <rect width="100%" height="2" fill="rgba(0, 255, 255, 0.05)" />
          </pattern>

          {/* Gradient colors */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#ff00ff" />
            <stop offset="100%" stopColor="#00ffff" />
          </linearGradient>
        </defs>

        {/* Shadow/depth layers */}
        <text
          x="200"
          y="130"
          fontSize="120"
          fontFamily="'Orbitron', 'Courier New', monospace"
          fontWeight="900"
          textAnchor="middle"
          fill="#0a0a0a"
          transform="translate(3, 3)"
        >
          {displayText}
        </text>

        {/* Colored glitch layers */}
        {isAnimating && (
          <>
            <text
              x="200"
              y="130"
              fontSize="120"
              fontFamily="'Orbitron', 'Courier New', monospace"
              fontWeight="900"
              textAnchor="middle"
              fill="#ff00ff"
              opacity="0.7"
              transform="translate(-2, 0)"
              className="animate-glitch-1"
            >
              {displayText}
            </text>
            <text
              x="200"
              y="130"
              fontSize="120"
              fontFamily="'Orbitron', 'Courier New', monospace"
              fontWeight="900"
              textAnchor="middle"
              fill="#00ffff"
              opacity="0.7"
              transform="translate(2, 0)"
              className="animate-glitch-2"
            >
              {displayText}
            </text>
          </>
        )}

        {/* Main text */}
        <text
          x="200"
          y="130"
          fontSize="120"
          fontFamily="'Orbitron', 'Courier New', monospace"
          fontWeight="900"
          textAnchor="middle"
          fill="url(#textGradient)"
          filter="url(#glow)"
          className={isAnimating ? 'animate-pulse' : ''}
        >
          {displayText}
        </text>

        {/* Scan lines overlay */}
        <rect width="100%" height="100%" fill="url(#scanlines)" />
      </svg>

      {/* Digital artifacts */}
      {isAnimating && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 animate-ping" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 animate-ping delay-100" />
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-purple-400 animate-ping delay-200" />
        </div>
      )}

      {/* Horizontal glitch lines */}
      {isAnimating && (
        <>
          <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-cyan-400/30 animate-scan-line" />
          <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-pink-400/30 animate-scan-line-reverse" />
        </>
      )}
    </div>
  )
}
