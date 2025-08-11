'use client'

import { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return { ref, controls, isInView }
}

export const useParallax = (offset = 50) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrolled = window.scrollY
      const rate = scrolled * offset * -0.01
      ref.current.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return ref
}

export const useTypewriter = (text: string, speed = 50) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    
    let index = 0
    ref.current.textContent = ''
    
    const interval = setInterval(() => {
      if (!ref.current) return
      
      if (index < text.length) {
        ref.current.textContent += text[index]
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return ref
}

export const useMousePosition = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      ref.current.style.setProperty('--mouse-x', `${x}px`)
      ref.current.style.setProperty('--mouse-y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return ref
}