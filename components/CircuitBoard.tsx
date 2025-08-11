'use client'

import { useEffect, useRef } from 'react'

export default function CircuitBoard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function drawCircuit() {
      if (!ctx || !canvas) return

      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)'
      ctx.lineWidth = 0.5

      const gridSize = 50
      const nodeSize = 2

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          if (Math.random() > 0.5) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            
            if (Math.random() > 0.5) {
              ctx.lineTo(x + gridSize, y)
              
              if (Math.random() > 0.7) {
                ctx.moveTo(x + gridSize / 2, y)
                ctx.lineTo(x + gridSize / 2, y + gridSize)
              }
            } else {
              ctx.lineTo(x, y + gridSize)
              
              if (Math.random() > 0.7) {
                ctx.moveTo(x, y + gridSize / 2)
                ctx.lineTo(x + gridSize, y + gridSize / 2)
              }
            }
            ctx.stroke()

            if (Math.random() > 0.8) {
              const gradient = ctx.createRadialGradient(x, y, 0, x, y, nodeSize)
              gradient.addColorStop(0, 'rgba(0, 255, 255, 0.4)')
              gradient.addColorStop(1, 'rgba(0, 255, 255, 0)')
              
              ctx.fillStyle = gradient
              ctx.beginPath()
              ctx.arc(x, y, nodeSize, 0, Math.PI * 2)
              ctx.fill()
            }
          }
        }
      }

      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 4 + 2

        ctx.strokeStyle = 'rgba(255, 0, 255, 0.1)'
        ctx.lineWidth = 0.5
        ctx.strokeRect(x - size / 2, y - size / 2, size, size)

        ctx.fillStyle = 'rgba(255, 0, 255, 0.05)'
        ctx.fillRect(x - size / 2, y - size / 2, size, size)
      }
    }

    drawCircuit()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawCircuit()
    }

    window.addEventListener('resize', handleResize)

    const interval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawCircuit()
    }, 5000)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-50"
      style={{ zIndex: 1 }}
    />
  )
}