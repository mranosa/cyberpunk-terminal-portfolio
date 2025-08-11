'use client'

import { useEffect, useRef } from 'react'
import { commandEvents } from '@/utils/commandEvents'

interface MatrixColumn {
  x: number
  y: number
  z: number
  speed: number
  chars: string[]
  opacity: number
  fontSize: number
  color: string
  velocityY?: number
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const parallaxBurstRef = useRef({ active: false, strength: 0, decay: 0.9 })
  const columnsRef = useRef<MatrixColumn[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("")
    
    // 3D configuration
    const perspective = 800
    const maxZ = 1000
    const layers = 5
    
    // Create columns with different depth layers
    const columns: MatrixColumn[] = []
    const baseColumns = 30 // Reduced from 40 for better performance
    
    for (let layer = 0; layer < layers; layer++) {
      const z = (layer / layers) * maxZ
      const scaleFactor = perspective / (perspective + z)
      const columnsInLayer = Math.floor(baseColumns * scaleFactor)
      const fontSize = Math.max(8, Math.floor(16 * scaleFactor))
      
      for (let i = 0; i < columnsInLayer; i++) {
        columns.push({
          x: Math.random() * canvas.width,
          y: Math.random() * -canvas.height,
          z: z,
          speed: 0.5 + (1 - z / maxZ) * 2,
          chars: Array.from({ length: Math.floor(Math.random() * 15 + 10) }, () => 
            matrix[Math.floor(Math.random() * matrix.length)]
          ),
          opacity: 1 - (z / maxZ) * 0.7,
          fontSize: fontSize,
          color: z < maxZ / 3 ? '#00ffff' : z < (maxZ * 2) / 3 ? '#00cccc' : '#008888',
          velocityY: 0
        })
      }
    }

    // Sort columns by z-index (far to near)
    columns.sort((a, b) => b.z - a.z)
    columnsRef.current = columns

    function project3D(x: number, y: number, z: number) {
      if (!canvas) return { x, y, scale: 1 }
      const scale = perspective / (perspective + z)
      const projectedX = (x - canvas.width / 2) * scale + canvas.width / 2
      const projectedY = (y - canvas.height / 2) * scale + canvas.height / 2
      return { x: projectedX, y: projectedY, scale }
    }

    function triggerParallaxBurst(command: string) {
      console.log('Matrix burst triggered by command:', command)
      
      // Subtle but visible burst effect
      parallaxBurstRef.current = {
        active: true,
        strength: 0.6, // Increased for visibility
        decay: 0.92 // Slower decay for longer effect
      }

      // Affect more columns for better visibility
      const affectedColumns = Math.floor(columnsRef.current.length * 0.5)
      
      for (let i = 0; i < affectedColumns; i++) {
        const column = columnsRef.current[Math.floor(Math.random() * columnsRef.current.length)]
        // More noticeable velocity change
        const depthFactor = 1 - (column.z / maxZ)
        column.velocityY = (Math.random() * 10 + 5) * depthFactor // Speed boost based on depth
      }
    }

    // Subscribe to command events
    const unsubscribe = commandEvents.subscribe(triggerParallaxBurst)

    function draw() {
      if (!ctx || !canvas) return

      // Clear with fade effect
      ctx.fillStyle = 'rgba(5, 5, 7, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update parallax burst
      if (parallaxBurstRef.current.active) {
        parallaxBurstRef.current.strength *= parallaxBurstRef.current.decay
        if (parallaxBurstRef.current.strength < 0.01) {
          parallaxBurstRef.current.active = false
        }
      }

      // Draw columns from back to front
      columnsRef.current.forEach(column => {
        // Apply velocity if burst is active
        if (parallaxBurstRef.current.active && column.velocityY && column.velocityY > 0) {
          column.y += column.velocityY * parallaxBurstRef.current.strength
          column.velocityY *= 0.95 // Gradual dampening
        }

        const { x: projX, y: projY } = project3D(column.x, column.y, column.z)
        
        // Simplified parallax effect based on mouse position
        const parallaxX = (mouseRef.current.x - canvas.width / 2) * (column.z / maxZ) * 0.05
        const parallaxY = (mouseRef.current.y - canvas.height / 2) * (column.z / maxZ) * 0.05
        
        ctx.font = `${column.fontSize}px monospace`
        
        // Simplified shadow for performance
        if (column.z < maxZ / 2) {
          ctx.shadowBlur = 5
          ctx.shadowColor = column.color
        } else {
          ctx.shadowBlur = 0
        }
        
        // Draw each character in the column
        column.chars.forEach((char, index) => {
          const charY = projY + (index * column.fontSize)
          const charX = projX + parallaxX
          
          // Fade based on position
          const fadeFactor = Math.max(0, 1 - (charY / canvas.height))
          const opacity = column.opacity * fadeFactor
          
          // Simplified coloring
          if (index === column.chars.length - 1) {
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
          } else {
            const rgb = column.color.match(/\d+/g)
            if (rgb) {
              ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity * 0.8})`
            }
          }
          
          if (charY > 0 && charY < canvas.height + 50) {
            ctx.fillText(char, charX, charY + parallaxY)
          }
        })
        
        // Update column position with burst effect
        const speedMultiplier = parallaxBurstRef.current.active ? 
          1 + parallaxBurstRef.current.strength * 0.5 : 1
        column.y += column.speed * speedMultiplier
        
        // Reset column when it goes off screen
        if (column.y > canvas.height + 100) {
          column.y = -column.chars.length * column.fontSize
          column.x = Math.random() * canvas.width
          column.velocityY = 0
          column.chars = Array.from({ length: Math.floor(Math.random() * 15 + 10) }, () => 
            matrix[Math.floor(Math.random() * matrix.length)]
          )
        }
        
        // Less frequent character changes for performance
        if (Math.random() > 0.99) {
          const randomIndex = Math.floor(Math.random() * column.chars.length)
          column.chars[randomIndex] = matrix[Math.floor(Math.random() * matrix.length)]
        }
      })

      // Subtle scan line effect with burst enhancement
      if (Math.random() > 0.9 || parallaxBurstRef.current.active) {
        const time = Date.now() * 0.001
        const scanlineY = (Math.sin(time) * 0.5 + 0.5) * canvas.height
        const scanOpacity = parallaxBurstRef.current.active ? 
          0.02 + parallaxBurstRef.current.strength * 0.03 : 0.01
        ctx.fillStyle = `rgba(0, 255, 255, ${scanOpacity})`
        ctx.fillRect(0, scanlineY - 1, canvas.width, 2)
      }
    }

    // Increased interval for better performance (33ms = ~30fps instead of 30ms)
    const animationFrame = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse updates
      if (Math.random() > 0.5) {
        mouseRef.current = { x: e.clientX, y: e.clientY }
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(animationFrame)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      unsubscribe()
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ 
          zIndex: 1,
          opacity: 0.3, // Reduced opacity
          transform: 'perspective(800px) rotateX(5deg)',
          transformOrigin: 'center center'
        }}
      />
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 7, 0.3) 100%)',
          mixBlendMode: 'multiply'
        }}
      />
    </>
  )
}