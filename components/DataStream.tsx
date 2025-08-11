'use client'

import { useEffect, useState } from 'react'

export default function DataStream() {
  const [streams, setStreams] = useState<Array<{ id: number; position: number; speed: number; data: string }>>([])

  useEffect(() => {
    const generateStream = () => ({
      id: Date.now() + Math.random(),
      position: -200,
      speed: Math.random() * 2 + 1,
      data: Array.from({ length: 20 }, () => 
        Math.random() > 0.5 ? '1' : '0'
      ).join('')
    })

    const initialStreams = Array.from({ length: 5 }, generateStream)
    setStreams(initialStreams)

    const interval = setInterval(() => {
      setStreams(prev => {
        const updated = prev.map(stream => ({
          ...stream,
          position: stream.position + stream.speed
        })).filter(stream => stream.position < window.innerWidth + 200)

        if (updated.length < 5 && Math.random() > 0.7) {
          updated.push(generateStream())
        }

        return updated
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute whitespace-nowrap font-mono text-xs"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${stream.position}px`,
            color: 'rgba(0, 255, 255, 0.15)',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
            transform: 'translateZ(0)',
            animation: 'data-pulse 2s ease-in-out infinite'
          }}
        >
          {stream.data}
        </div>
      ))}
      <style jsx>{`
        @keyframes data-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}