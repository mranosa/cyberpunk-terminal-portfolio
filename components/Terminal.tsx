'use client'

import { useState, useEffect, useRef, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlitchText from './GlitchText'
import LightBulbText from './LightBulbText'
import { commandEvents } from '@/utils/commandEvents'
import { fadeInUp, staggerContainer, staggerItem, easings } from '@/utils/animations'
import {
  HelpCommand,
  BlogListCommand,
  BlogReadCommand,
  ProjectsCommand,
  WorkExperienceCommand,
  SkillsCommand,
  SkillsCategoryCommand,
  RecommendationsCommand,
  CVCommand,
  ThoughtsCommand,
  AboutCommand,
  MatrixCommand
} from './terminal/commands'
import { skills } from './terminal/data/skills'

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
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    let output: string | React.ReactNode = ''

    switch (trimmedCmd) {
      case 'help':
        output = <HelpCommand />
        break

      case 'ls':
      case 'dir':
        output = <BlogListCommand />
        break

      case 'projects':
        output = <ProjectsCommand />
        break

      case 'work':
        output = <WorkExperienceCommand />
        break

      case 'recommendations':
      case 'refs':
        output = <RecommendationsCommand />
        break

      case 'skills':
        output = <SkillsCommand />
        break

      case 'skills languages':
      case 'skills frameworks':
      case 'skills tools':
        const category = trimmedCmd.split(' ')[1] as keyof typeof skills
        if (skills[category]) {
          output = <SkillsCategoryCommand category={category} />
        }
        break

      case 'cv':
      case 'resume':
        output = <CVCommand />
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
        if (trimmedCmd.startsWith('read ')) {
          const postIndex = parseInt(trimmedCmd.split(' ')[1]) - 1
          output = <BlogReadCommand postIndex={postIndex} />
        } else if (trimmedCmd === '') {
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
          <div
            ref={terminalRef}
            className="h-[500px] overflow-y-auto p-4 font-mono text-sm bg-black/50 backdrop-blur-sm"
            onClick={() => inputRef.current?.focus()}
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