'use client'

import { useEffect, useRef } from 'react'

interface MatrixColumn {
  x: number
  y: number
  z: number
  speed: number
  chars: string[]
  opacity: number
  fontSize: number
  color: string
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

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
    const minZ = 0
    const layers = 5
    
    // Create columns with different depth layers
    const columns: MatrixColumn[] = []
    const baseColumns = 40
    
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
          color: z < maxZ / 3 ? '#00ffff' : z < (maxZ * 2) / 3 ? '#00cccc' : '#008888'
        })
      }
    }

    // Sort columns by z-index (far to near)
    columns.sort((a, b) => b.z - a.z)

    function project3D(x: number, y: number, z: number) {
      const scale = perspective / (perspective + z)
      const projectedX = (x - canvas.width / 2) * scale + canvas.width / 2
      const projectedY = (y - canvas.height / 2) * scale + canvas.height / 2
      return { x: projectedX, y: projectedY, scale }
    }

    function draw() {
      if (!ctx || !canvas) return

      // Clear with fade effect
      ctx.fillStyle = 'rgba(5, 5, 7, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw columns from back to front
      columns.forEach(column => {
        const { x: projX, y: projY, scale } = project3D(column.x, column.y, column.z)
        
        // Parallax effect based on mouse position
        const parallaxX = (mouseRef.current.x - canvas.width / 2) * (column.z / maxZ) * 0.05
        const parallaxY = (mouseRef.current.y - canvas.height / 2) * (column.z / maxZ) * 0.05
        
        ctx.font = `${column.fontSize}px monospace`
        ctx.shadowBlur = column.z < maxZ / 2 ? 10 : 5
        ctx.shadowColor = column.color
        
        // Draw each character in the column
        column.chars.forEach((char, index) => {
          const charY = projY + (index * column.fontSize)
          const charX = projX + parallaxX
          
          // Fade based on position and depth
          const fadeFactor = Math.max(0, 1 - (charY / canvas.height))
          const opacity = column.opacity * fadeFactor
          
          // Highlight the leading character
          if (index === column.chars.length - 1) {
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.shadowBlur = 20
          } else {
            const rgb = column.color.match(/\d+/g)
            if (rgb) {
              ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity * 0.8})`
            }
            ctx.shadowBlur = column.z < maxZ / 2 ? 10 : 5
          }
          
          if (charY > 0 && charY < canvas.height + 50) {
            ctx.fillText(char, charX, charY + parallaxY)
          }
        })
        
        // Update column position
        column.y += column.speed
        
        // Reset column when it goes off screen
        if (column.y > canvas.height + 100) {
          column.y = -column.chars.length * column.fontSize
          column.x = Math.random() * canvas.width
          column.chars = Array.from({ length: Math.floor(Math.random() * 15 + 10) }, () => 
            matrix[Math.floor(Math.random() * matrix.length)]
          )
        }
        
        // Randomly change characters for glitch effect
        if (Math.random() > 0.98) {
          const randomIndex = Math.floor(Math.random() * column.chars.length)
          column.chars[randomIndex] = matrix[Math.floor(Math.random() * matrix.length)]
        }
      })

      // Add subtle scan line effect
      const time = Date.now() * 0.001
      const scanlineY = (Math.sin(time) * 0.5 + 0.5) * canvas.height
      
      ctx.fillStyle = 'rgba(0, 255, 255, 0.02)'
      ctx.fillRect(0, scanlineY - 2, canvas.width, 4)
    }

    const animationFrame = setInterval(draw, 30)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(animationFrame)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ 
          zIndex: 1,
          opacity: 0.4,
          transform: 'perspective(800px) rotateX(5deg)',
          transformOrigin: 'center center'
        }}
      />
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 7, 0.4) 100%)',
          mixBlendMode: 'multiply'
        }}
      />
    </>
  )
}