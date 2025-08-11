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
          color: #C0C0C0;
          font-weight: 200;
          cursor: pointer;
        }
        
        .lightbulb-text.glowing {
          color: #FFD700;
          text-shadow: 
            0 0 10px #FFD700,
            0 0 20px #FFD700,
            0 0 30px #FFA500,
            0 0 40px #FFA500,
            0 0 50px #FFD700;
          animation: flicker 0.5s ease-in-out;
          font-weight: 100;
        }
        
        .lightbulb-text.glowing::before {
          opacity: 1;
          animation: bulbGlow 0.5s ease-in-out;
        }
        
        @keyframes flicker {
          0%, 100% {
            text-shadow: 
              0 0 10px #FFD700,
              0 0 20px #FFD700,
              0 0 30px #FFA500,
              0 0 40px #FFA500,
              0 0 50px #FFD700;
          }
          25% {
            text-shadow: 
              0 0 5px #FFD700,
              0 0 10px #FFD700,
              0 0 15px #FFA500,
              0 0 20px #FFA500,
              0 0 25px #FFD700;
          }
          50% {
            text-shadow: 
              0 0 15px #FFD700,
              0 0 25px #FFD700,
              0 0 35px #FFA500,
              0 0 45px #FFA500,
              0 0 60px #FFD700;
          }
          75% {
            text-shadow: 
              0 0 8px #FFD700,
              0 0 15px #FFD700,
              0 0 20px #FFA500,
              0 0 30px #FFA500,
              0 0 40px #FFD700;
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