'use client'

import { useEffect, useRef, useState } from 'react'

interface LightBulbTextProps {
  text: string
  className?: string
  onClick?: () => void
}

export default function LightBulbText({ text, className = '', onClick }: LightBulbTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [isGlowing, setIsGlowing] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Create style element for this component's CSS
    const styleId = 'lightbulb-text-styles'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        .lightbulb-text {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .lightbulb-text.glowing {
          color: #ffff88;
          text-shadow: 
            0 0 5px #ffff88,
            0 0 10px #ffff88,
            0 0 15px #ffff88,
            0 0 20px #ffff88,
            0 0 25px #ffff88;
          animation: flicker 0.5s ease-in-out;
        }
        
        .lightbulb-text.glowing::before {
          opacity: 1;
          animation: bulbGlow 0.5s ease-in-out;
        }
        
        @keyframes flicker {
          0%, 100% {
            text-shadow: 
              0 0 5px #ffff88,
              0 0 10px #ffff88,
              0 0 15px #ffff88,
              0 0 20px #ffff88,
              0 0 25px #ffff88;
          }
          25% {
            text-shadow: 
              0 0 2px #ffff88,
              0 0 5px #ffff88,
              0 0 8px #ffff88,
              0 0 12px #ffff88,
              0 0 15px #ffff88;
          }
          50% {
            text-shadow: 
              0 0 8px #ffff88,
              0 0 15px #ffff88,
              0 0 20px #ffff88,
              0 0 25px #ffff88,
              0 0 30px #ffff88;
          }
          75% {
            text-shadow: 
              0 0 3px #ffff88,
              0 0 6px #ffff88,
              0 0 10px #ffff88,
              0 0 15px #ffff88,
              0 0 20px #ffff88;
          }
        }
        
        @keyframes bulbGlow {
          0% {
            filter: brightness(1);
            transform: translateY(-50%) scale(1);
          }
          50% {
            filter: brightness(1.5) saturate(1.2);
            transform: translateY(-50%) scale(1.1);
          }
          100% {
            filter: brightness(1);
            transform: translateY(-50%) scale(1);
          }
        }
        
        .lightbulb-text:hover {
          cursor: pointer;
        }
      `
      document.head.appendChild(style)
    }
  }, [])


  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const handleMouseEnter = () => {
    setIsGlowing(true)
  }

  const handleMouseLeave = () => {
    setIsGlowing(false)
  }

  return (
    <span 
      ref={containerRef} 
      className={`lightbulb-text ${isGlowing ? 'glowing' : ''} ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  )
}