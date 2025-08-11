'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain2D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Matrix characters
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
    const matrixArray = matrix.split("")
    
    // Column configuration for 2D
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50)
    }

    // Draw function
    function draw() {
      if (!ctx || !canvas) return
      
      // Black background with fade effect
      ctx.fillStyle = 'rgba(5, 5, 7, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Set font
      ctx.font = `${fontSize}px monospace`
      
      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        
        // Calculate position
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        // Gradient effect based on position
        if (y > 0 && y < canvas.height) {
          // White color for leading character
          if (y === drops[i] * fontSize) {
            ctx.fillStyle = '#ffffff'
            ctx.shadowBlur = 8
            ctx.shadowColor = '#00ffff'
          } else {
            // Fade from cyan to darker green
            const fadeRatio = Math.min(1, y / canvas.height)
            const greenValue = Math.floor(255 * (1 - fadeRatio * 0.5))
            const blueValue = Math.floor(255 * (1 - fadeRatio))
            ctx.fillStyle = `rgba(0, ${greenValue}, ${blueValue}, ${0.9 - fadeRatio * 0.4})`
            ctx.shadowBlur = 2
            ctx.shadowColor = `rgba(0, ${greenValue}, ${blueValue}, 0.5)`
          }
          
          ctx.fillText(char, x, y)
        }
        
        // Reset shadow for performance
        ctx.shadowBlur = 0
        
        // Move drop down
        if (y > canvas.height && Math.random() > 0.95) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    // Animation loop with requestAnimationFrame for better performance
    let lastTime = 0
    const fps = 30 // Target 30 FPS for smoother performance on weak devices
    const frameInterval = 1000 / fps

    function animate(currentTime: number) {
      const deltaTime = currentTime - lastTime

      if (deltaTime >= frameInterval) {
        draw()
        lastTime = currentTime - (deltaTime % frameInterval)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
      // Recalculate columns and drops
      const newColumns = Math.floor(canvas.width / fontSize)
      const newDrops: number[] = []
      for (let i = 0; i < newColumns; i++) {
        newDrops[i] = drops[i] || Math.floor(Math.random() * -50)
      }
      drops.length = 0
      drops.push(...newDrops)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 1,
        opacity: 0.4
      }}
    />
  )
}