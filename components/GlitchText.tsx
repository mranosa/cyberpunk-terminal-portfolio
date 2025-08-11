'use client'

import { useEffect, useRef, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isGlitching, setIsGlitching] = useState(false)
  const [ultraGlitch, setUltraGlitch] = useState(false)

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
        
        .glitch-container.ultra-active {
          animation: ultraMainGlitch 0.3s ease-in-out;
          filter: contrast(1.5) brightness(1.2);
        }
        
        .glitch-container.ultra-active .glitch-copy:nth-child(2) {
          color: #00ffff;
          animation: ultraGlitch1 0.3s ease-in-out;
          z-index: 1;
          opacity: 0.8;
          mix-blend-mode: screen;
        }
        
        .glitch-container.ultra-active .glitch-copy:nth-child(3) {
          color: #ff00ff;
          animation: ultraGlitch2 0.3s ease-in-out;
          z-index: 2;
          opacity: 0.8;
          mix-blend-mode: screen;
        }
        
        .glitch-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            transparent 50%,
            rgba(0, 255, 255, 0.02) 50%
          );
          background-size: 100% 2px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .glitch-container.ultra-active::before {
          opacity: 1;
          animation: scanLineMove 0.3s linear;
        }
        
        @keyframes scanLineMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        @keyframes ultraMainGlitch {
          0%, 100% { transform: translate(0) scale(1); }
          10% { transform: translate(-0.5px, 0.5px) scale(1.01); }
          20% { transform: translate(0.5px, -0.5px) scale(0.99); }
          30% { transform: translate(-0.5px, -0.5px) scale(1.01); }
          40% { transform: translate(0.5px, 0.5px) scale(0.99); }
          50% { transform: translate(-0.5px, 0) scale(1); }
          60% { transform: translate(0.5px, 0) scale(1.01); }
          70% { transform: translate(0, -0.5px) scale(0.99); }
          80% { transform: translate(0, 0.5px) scale(1); }
          90% { transform: translate(-0.5px, -0.5px) scale(1.01); }
        }
        
        @keyframes ultraGlitch1 {
          0%, 100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          10% {
            clip-path: inset(5% 0 90% 0);
            transform: translate(-1px, 0);
          }
          20% {
            clip-path: inset(90% 0 5% 0);
            transform: translate(-1px, 0);
          }
          30% {
            clip-path: inset(45% 0 50% 0);
            transform: translate(-1px, 0);
          }
          40% {
            clip-path: inset(50% 0 45% 0);
            transform: translate(-1px, 0);
          }
          50% {
            clip-path: inset(25% 0 70% 0);
            transform: translate(-1px, 0);
          }
          60% {
            clip-path: inset(70% 0 25% 0);
            transform: translate(-1px, 0);
          }
          70% {
            clip-path: inset(15% 0 80% 0);
            transform: translate(-1px, 0);
          }
        }
        
        @keyframes ultraGlitch2 {
          0%, 100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          15% {
            clip-path: inset(10% 0 85% 0);
            transform: translate(1px, 0);
          }
          25% {
            clip-path: inset(85% 0 10% 0);
            transform: translate(1px, 0);
          }
          35% {
            clip-path: inset(35% 0 60% 0);
            transform: translate(1px, 0);
          }
          45% {
            clip-path: inset(60% 0 35% 0);
            transform: translate(1px, 0);
          }
          55% {
            clip-path: inset(40% 0 55% 0);
            transform: translate(1px, 0);
          }
          65% {
            clip-path: inset(55% 0 40% 0);
            transform: translate(1px, 0);
          }
          75% {
            clip-path: inset(20% 0 75% 0);
            transform: translate(1px, 0);
          }
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
      if (Math.random() > 0.5) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 500) // 500ms duration
      } else {
        setUltraGlitch(true)
        setTimeout(() => setUltraGlitch(false), 300) // 300ms ultra-thin duration
      }
    }, 3000) // Every 3 seconds

    // Occasional random ultra glitch
    const ultraInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setUltraGlitch(true)
        setTimeout(() => setUltraGlitch(false), 150) // 150ms quick burst
      }
    }, 7000)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(ultraInterval)
    }
  }, [])

  return (
    <div ref={containerRef} className={`glitch-container ${isGlitching ? 'active' : ''} ${ultraGlitch ? 'ultra-active' : ''} ${className}`}>
      <span className="main-text">{text}</span>
      <span className="glitch-copy">{text}</span>
      <span className="glitch-copy">{text}</span>
    </div>
  )
}