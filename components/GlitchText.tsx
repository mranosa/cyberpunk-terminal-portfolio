'use client'

import { useEffect, useRef, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Create style element for this component's CSS
    const styleId = 'glitch-text-styles'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        .glitch-container {
          position: relative;
          display: inline-block;
          font-weight: 900;
        }
        
        .glitch-container.active {
          animation: mainGlitch 0.5s ease-in-out;
        }
        
        .glitch-container .main-text {
          color: #ffffff;
          position: relative;
          z-index: 3;
        }
        
        .glitch-container .glitch-copy {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .glitch-container.active .glitch-copy:nth-child(2) {
          color: #00ffff;
          animation: glitch1 0.5s ease-in-out;
          z-index: 1;
        }
        
        .glitch-container.active .glitch-copy:nth-child(3) {
          color: #ff00ff;
          animation: glitch2 0.5s ease-in-out;
          z-index: 2;
        }
        
        @keyframes mainGlitch {
          0%, 100% { transform: translate(0); }
          10% { transform: translate(-2px, 1px); }
          20% { transform: translate(2px, -1px); }
          30% { transform: translate(-1px, 2px); }
          40% { transform: translate(1px, -2px); }
          50% { transform: translate(-2px, -1px); }
          60% { transform: translate(2px, 1px); }
          70% { transform: translate(-1px, -1px); }
          80% { transform: translate(1px, 2px); }
          90% { transform: translate(-2px, -2px); }
        }
        
        @keyframes glitch1 {
          0%, 100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          10% {
            clip-path: inset(20% 0 70% 0);
            transform: translate(-5px, 0);
          }
          20% {
            clip-path: inset(70% 0 20% 0);
            transform: translate(-5px, 0);
          }
          30% {
            clip-path: inset(40% 0 50% 0);
            transform: translate(-5px, 0);
          }
          40% {
            clip-path: inset(60% 0 30% 0);
            transform: translate(-5px, 0);
          }
          50% {
            clip-path: inset(10% 0 80% 0);
            transform: translate(-5px, 0);
          }
          60% {
            clip-path: inset(80% 0 10% 0);
            transform: translate(-5px, 0);
          }
        }
        
        @keyframes glitch2 {
          0%, 100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          15% {
            clip-path: inset(30% 0 60% 0);
            transform: translate(5px, 0);
          }
          25% {
            clip-path: inset(60% 0 30% 0);
            transform: translate(5px, 0);
          }
          35% {
            clip-path: inset(10% 0 80% 0);
            transform: translate(5px, 0);
          }
          45% {
            clip-path: inset(80% 0 10% 0);
            transform: translate(5px, 0);
          }
          55% {
            clip-path: inset(50% 0 40% 0);
            transform: translate(5px, 0);
          }
          65% {
            clip-path: inset(20% 0 70% 0);
            transform: translate(5px, 0);
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  // Timer to trigger glitch effect every 3 seconds
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 500) // 500ms duration
    }, 3000) // Every 3 seconds

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div ref={containerRef} className={`glitch-container ${isGlitching ? 'active' : ''} ${className}`}>
      <span className="main-text">{text}</span>
      <span className="glitch-copy">{text}</span>
      <span className="glitch-copy">{text}</span>
    </div>
  )
}