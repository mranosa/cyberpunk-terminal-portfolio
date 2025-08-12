'use client'

import { useState, useEffect, useRef, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import GlitchText from './GlitchText'
import LightBulbText from './LightBulbText'
import { commandEvents } from '@/utils/commandEvents'
import { fadeInUp, staggerContainer, staggerItem, easings } from '@/utils/animations'
import {
  HelpCommand,
  BlogListCommand,
  WorkExperienceCommand,
  ThoughtsCommand,
  AboutCommand,
  MatrixCommand
} from './terminal/commands'

interface Command {
  id: number
  command: string
  output: string | React.ReactNode
  timestamp: Date
}

interface TerminalProps {
  onContactOpen?: () => void
}

const Terminal = memo(function Terminal({ onContactOpen }: TerminalProps = {}) {
  const posthog = usePostHog()
  const [commands, setCommands] = useState<Command[]>([
    {
      id: 1,
      command: '',
      output: (
        <div className="space-y-1">
          <div className="plasma-cyan ultra-thin">Terminal v0.0.1</div>
          <div className="solar-yellow ultra-light">Click/Tap inside terminal and Type 'help'</div>
        </div>
      ),
      timestamp: new Date(),
    },
  ])
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [showScrollHint, setShowScrollHint] = useState(false)
  const [isScrollable, setIsScrollable] = useState(false)
  const [scrollThumbPosition, setScrollThumbPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartY, setDragStartY] = useState(0)
  const [dragStartScrollTop, setDragStartScrollTop] = useState(0)
  const [lastScrollTime, setLastScrollTime] = useState(Date.now())
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollbarRef = useRef<HTMLDivElement>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Check if content is scrollable
  const checkScrollable = () => {
    if (terminalRef.current) {
      const hasScroll = terminalRef.current.scrollHeight > terminalRef.current.clientHeight
      setIsScrollable(hasScroll)
    }
  }

  // Calculate scrollbar thumb position and size
  const getThumbDimensions = () => {
    if (!terminalRef.current) return { height: 40, position: 0 }
    
    const { scrollTop, scrollHeight, clientHeight } = terminalRef.current
    const thumbHeight = Math.max(30, (clientHeight / scrollHeight) * clientHeight)
    const maxScrollTop = scrollHeight - clientHeight
    const scrollPercent = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0
    const maxThumbTop = clientHeight - thumbHeight - 16 // 16px for padding (8px top + 8px bottom)
    const thumbPosition = 8 + (scrollPercent * maxThumbTop) // 8px top padding
    
    return { height: thumbHeight, position: thumbPosition }
  }

  // Update scrollbar thumb position
  const updateScrollThumbPosition = () => {
    if (terminalRef.current && isScrollable) {
      const { position } = getThumbDimensions()
      setScrollThumbPosition(position)
    }
  }

  // Handle scrollbar drag (works for both thumb and hint)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!terminalRef.current) return
    
    setIsDragging(true)
    setDragStartY(e.clientY)
    setDragStartScrollTop(terminalRef.current.scrollTop)
    setShowScrollHint(true) // Show hint while dragging
    
    // Clear any existing hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
    }
    
    // Prevent text selection while dragging
    e.preventDefault()
  }

  // Auto-hide scroll hint after 3 seconds of inactivity
  const scheduleHideHint = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
    }
    
    hideTimeoutRef.current = setTimeout(() => {
      if (!isDragging) {
        setShowScrollHint(false)
      }
    }, 3000)
  }

  // Show hint and schedule auto-hide
  const showHintWithAutoHide = () => {
    setShowScrollHint(true)
    scheduleHideHint()
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !terminalRef.current) return
      
      const deltaY = e.clientY - dragStartY
      const { scrollHeight, clientHeight } = terminalRef.current
      const maxScroll = scrollHeight - clientHeight
      
      // Calculate new scroll position based on drag distance
      const scrollRatio = deltaY / clientHeight
      const newScrollTop = dragStartScrollTop + (scrollRatio * scrollHeight)
      
      // Clamp scroll position
      terminalRef.current.scrollTop = Math.max(0, Math.min(maxScroll, newScrollTop))
      updateScrollThumbPosition()
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      scheduleHideHint() // Start auto-hide timer when dragging stops
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      // Add cursor style while dragging
      document.body.style.cursor = 'grabbing'
      document.body.style.userSelect = 'none'
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
  }, [isDragging, dragStartY, dragStartScrollTop])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      checkScrollable()
      // Small delay to ensure DOM is updated before calculating position
      setTimeout(() => updateScrollThumbPosition(), 0)
    }
  }, [commands])

  // Check scrollable on window resize and when scrollable state changes
  useEffect(() => {
    const handleResize = () => {
      checkScrollable()
      updateScrollThumbPosition()
    }
    
    window.addEventListener('resize', handleResize)
    handleResize() // Initial check
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Update thumb position when scrollable state changes
  useEffect(() => {
    if (isScrollable) {
      updateScrollThumbPosition()
    }
  }, [isScrollable])

  // Handle scroll events to track activity
  const handleScroll = () => {
    updateScrollThumbPosition()
    setLastScrollTime(Date.now())
    
    // Show hint on scroll and schedule auto-hide
    if (isScrollable) {
      showHintWithAutoHide()
    }
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    let output: string | React.ReactNode = ''

    // Track command usage
    if (posthog && trimmedCmd) {
      posthog.capture('terminal_command', {
        command: trimmedCmd,
        timestamp: new Date().toISOString(),
      })
    }

    switch (trimmedCmd) {
      case 'help':
        output = <HelpCommand />
        break

      case 'dir':
        output = <BlogListCommand />
        break

      case 'work':
        output = <WorkExperienceCommand />
        break

      case 'thoughts':
        output = <ThoughtsCommand />
        break

      case 'about':
        output = <AboutCommand />
        break

      case 'matrix':
        output = <MatrixCommand />
        break

      case 'clear':
        setCommands([
          {
            id: Date.now(),
            command: '',
            output: (
              <div className="aurora-green ultra-thin">
                Terminal cleared. Type 'help' for commands.
              </div>
            ),
            timestamp: new Date(),
          },
        ])
        return

      default:
        if (trimmedCmd === '') {
          return
        } else {
          output = (
            <span className="fusion-orange ultra-light">Command not found: {cmd}</span>
          )
        }
    }

    const newCommand: Command = {
      id: Date.now(),
      command: cmd,
      output,
      timestamp: new Date(),
    }

    setCommands((prev) => [...prev, newCommand])
    setCommandHistory((prev) => [...prev, cmd])
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Emit command event for matrix rain effect
      if (currentCommand.trim()) {
        commandEvents.emit(currentCommand.trim())
      }
      processCommand(currentCommand)
      setCurrentCommand('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentCommand('')
      }
    }
  }

  const commandVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  const cursorVariants = {
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }

  return (
    <motion.section 
      className="min-h-screen py-20 px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-cyber ultra-thin mb-4">
            <GlitchText 
              text="KEN.RANOSA" 
              className="text-5xl md:text-6xl font-cyber ultra-thin quantum-blue"
            />
          </h2>
          <p className="font-mono text-sm">
            <LightBulbText text="HOW.CAN.I.HELP" onClick={onContactOpen} />
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black backdrop-blur-sm ultra-thin-border scan-lines circuit-pattern relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-cyber-cyan/30 backdrop-blur-sm border-b border-cyber-cyan/50 px-4 py-2 flex items-center justify-between relative">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
            </div>
            <div className="font-mono text-xs holographic-ultra ultra-thin" data-text="user@portfolio:~/blog">
              user@portfolio:~/blog
            </div>
          </div>

          {/* Terminal Body */}
          <div className="relative h-[500px] bg-black/50">
            <div
              ref={terminalRef}
              className="h-full overflow-y-auto p-4 font-mono text-sm backdrop-blur-sm hide-scrollbar"
              onClick={() => inputRef.current?.focus()}
              onScroll={handleScroll}
            >
            {commands.map((cmd) => (
              <div key={cmd.id} className="mb-4">
                {cmd.command && (
                  <div className="flex items-start gap-2">
                    <span className="pulsar-lime ultra-light">$</span>
                    <span className="plasma-cyan ultra-thin">{cmd.command}</span>
                  </div>
                )}
                <div className="mt-1 photon-white ultra-thin bg-black/20 rounded px-2 py-1">{cmd.output}</div>
              </div>
            ))}

            {/* Current Input Line */}
            <div className="flex items-start gap-2">
              <span className="pulsar-lime ultra-light">$</span>
              <div className="flex-1 relative">
                <div className="flex items-center">
                  <span className="plasma-cyan ultra-thin">{currentCommand}</span>
                  <span className="terminal-cursor ultra-thin" style={{ color: '#FFD700' }}>_</span>
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="absolute inset-0 bg-transparent text-transparent outline-none focus-visible:outline-none caret-transparent"
                  autoFocus
                  spellCheck={false}
                />
              </div>
            </div>
          </div>
          
            {/* Custom Draggable Scrollbar */}
            {isScrollable && (
              <div 
                ref={scrollbarRef}
                className="absolute right-0 top-0 h-full w-4 group/scrollbar"
                onMouseEnter={showHintWithAutoHide}
                onMouseLeave={() => {
                  if (!isDragging) {
                    scheduleHideHint()
                  }
                }}
                onClick={showHintWithAutoHide}
              >
                {/* Scrollbar Track */}
                <div className="absolute right-1 top-2 bottom-2 w-2 bg-cyber-dark/50 rounded-full">
                {/* Scrollbar Thumb */}
                <div
                  className="absolute right-0 w-2 bg-gradient-to-b from-cyber-cyan to-cyber-purple rounded-full transition-all duration-200 hover:from-cyber-cyan hover:via-cyber-purple hover:to-cyber-pink hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] cursor-grab active:cursor-grabbing"
                  style={{
                    top: `${scrollThumbPosition}px`,
                    height: `${getThumbDimensions().height}px`,
                  }}
                  onMouseDown={handleMouseDown}
                />
              </div>
              <AnimatePresence>
                {showScrollHint && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: isDragging ? 1 : [1, 1.1, 1],
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.3,
                      scale: isDragging ? {} : {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1.5
                      }
                    }}
                    className="absolute right-6 z-20"
                    style={{ 
                      top: `${scrollThumbPosition + getThumbDimensions().height / 2 - 16}px`,
                      cursor: isDragging ? 'grabbing' : 'grab',
                      pointerEvents: 'auto'
                    }}
                    onMouseDown={handleMouseDown}
                  >
                    <div className="bg-cyber-cyan/20 backdrop-blur-md border border-cyber-cyan/50 rounded-full px-3 py-2 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:bg-cyber-cyan/30 transition-colors">
                      <span className="text-xs font-mono plasma-cyan ultra-thin whitespace-nowrap select-none">
                        ↕ Drag
                      </span>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </motion.div>

        {/* Terminal Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 text-center"
        >
          <p className="quantum-blue font-mono text-xs ultra-thin">
            Terminal v0.0.1 | Click/Tap inside terminal and Type 'help'
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
})

export default Terminal