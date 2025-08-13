'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  staggerChildren?: number
  animateOnScroll?: boolean
  threshold?: number
  splitBy?: 'word' | 'char'
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay: number; staggerChildren: number }) => ({
    opacity: 1,
    transition: {
      delay: custom.delay,
      staggerChildren: custom.staggerChildren,
    },
  }),
}

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  staggerChildren = 0.03,
  animateOnScroll = true,
  threshold = 0.1,
  splitBy = 'word',
}) => {
  const { ref, isInView } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  })

  const words = splitBy === 'word' ? text.split(' ') : text.split('')

  return (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={animateOnScroll ? (isInView ? 'visible' : 'hidden') : 'visible'}
      custom={{ delay, staggerChildren }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={childVariants}
        >
          {splitBy === 'word' ? (
            <>
              {word}
              {index < words.length - 1 && '\u00A0'}
            </>
          ) : (
            word === ' ' ? '\u00A0' : word
          )}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface AnimatedParagraphProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
}) => {
  const { ref, isInView } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedHeadingProps {
  text: string
  className?: string
  delay?: number
  threshold?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className = '',
  delay = 0,
  threshold = 0.1,
  as: Component = 'h2',
}) => {
  const { ref, isInView } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  })

  const words = text.split(' ')

  return (
    <Component
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
    >
      <motion.span
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={{ delay, staggerChildren: 0.05 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={childVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}