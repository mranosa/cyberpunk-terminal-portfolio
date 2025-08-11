'use client'

import { useEffect, useRef } from 'react'

export default function HolographicOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0

    function drawHolographic() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(
        0,
        canvas.height * Math.sin(time * 0.001),
        canvas.width,
        canvas.height * Math.cos(time * 0.001)
      )

      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.02)')
      gradient.addColorStop(0.3, 'rgba(255, 0, 255, 0.02)')
      gradient.addColorStop(0.6, 'rgba(157, 0, 255, 0.02)')
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0.02)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < 3; i++) {
        const offset = i * 100
        const alpha = 0.01 + Math.sin(time * 0.001 + i) * 0.01

        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.beginPath()

        for (let x = 0; x < canvas.width; x += 20) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + time * 0.002 + offset) * 50
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 2

        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, size)
        particleGradient.addColorStop(0, 'rgba(0, 255, 255, 0.5)')
        particleGradient.addColorStop(1, 'rgba(0, 255, 255, 0)')

        ctx.fillStyle = particleGradient
        ctx.fillRect(x - size, y - size, size * 2, size * 2)
      }

      time++
    }

    const interval = setInterval(drawHolographic, 50)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ 
        zIndex: 2,
        mixBlendMode: 'screen'
      }}
    />
  )
}