'use client'

import React, { useEffect, useRef } from 'react'
import { Planet } from './planetData'
import PlanetContent from './PlanetContent'
import { motion, useInView, useAnimation } from 'framer-motion'

interface AnimatedPlanetWrapperProps {
  planet: Planet
}

export default function AnimatedPlanetWrapper({ planet }: AnimatedPlanetWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Find all text nodes and wrap them for animation
    const processTextNodes = (element: Element) => {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            // Skip if parent is already processed or is a script/style tag
            const parent = node.parentElement
            if (!parent || 
                parent.classList.contains('word-animated') ||
                parent.tagName === 'SCRIPT' || 
                parent.tagName === 'STYLE') {
              return NodeFilter.FILTER_REJECT
            }
            // Only process text nodes with actual content
            return node.textContent && node.textContent.trim().length > 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_REJECT
          }
        }
      )

      const textNodes: Node[] = []
      let node
      while (node = walker.nextNode()) {
        textNodes.push(node)
      }

      // Process each text node
      textNodes.forEach((textNode) => {
        const parent = textNode.parentElement
        if (!parent) return

        const text = textNode.textContent || ''
        const words = text.split(/(\s+)/).filter(word => word.length > 0)
        
        // Create a span for each word
        const fragment = document.createDocumentFragment()
        words.forEach((word, index) => {
          if (word.trim()) {
            const span = document.createElement('span')
            span.className = 'word-animated inline-block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(20px)'
            span.style.filter = 'blur(4px)'
            span.textContent = word
            fragment.appendChild(span)
          } else {
            // Preserve whitespace
            fragment.appendChild(document.createTextNode(word))
          }
        })

        // Replace the text node with animated spans
        if (textNode.parentNode) {
          textNode.parentNode.replaceChild(fragment, textNode)
        }
      })
    }

    // Add scroll-triggered animations to sections
    const sections = containerRef.current.querySelectorAll('.border')
    sections.forEach((section, sectionIndex) => {
      // Animate the section container
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate section
              const target = entry.target as HTMLElement
              target.style.transition = 'opacity 0.5s, transform 0.5s'
              target.style.opacity = '1'
              target.style.transform = 'translateX(0)'

              // Animate words inside this section
              const words = target.querySelectorAll('.word-animated')
              words.forEach((word, wordIndex) => {
                const element = word as HTMLElement
                setTimeout(() => {
                  element.style.transition = 'opacity 0.4s, transform 0.4s, filter 0.4s'
                  element.style.opacity = '1'
                  element.style.transform = 'translateY(0)'
                  element.style.filter = 'blur(0)'
                }, wordIndex * 15) // Stagger by 15ms per word
              })

              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
      )

      // Initially hide section
      const sectionElement = section as HTMLElement
      sectionElement.style.opacity = '0'
      sectionElement.style.transform = 'translateX(-20px)'
      
      // Process text nodes in this section
      processTextNodes(section)
      
      // Start observing
      observer.observe(section)
    })
  }, [planet])

  return (
    <div ref={containerRef} className="space-y-6">
      <PlanetContent planet={planet} />
    </div>
  )
}