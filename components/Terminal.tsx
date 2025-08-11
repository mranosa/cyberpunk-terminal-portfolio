'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import GlitchText from './GlitchText'
import LightBulbText from './LightBulbText'
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

export default function Terminal({ onContactOpen }: TerminalProps = {}) {
  const [commands, setCommands] = useState<Command[]>([
    {
      id: 1,
      command: '',
      output: (
        <div className="text-cyber-green">
          <div>Terminal v0.0.1</div>
          <div>Click/Tap inside terminal and Type 'help'</div>
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
              <div className="text-cyber-green">
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
            <span className="text-red-500">Command not found: {cmd}</span>
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

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-cyber font-black mb-4">
            <GlitchText 
              text="KEN.RANOSA" 
              className="text-5xl md:text-6xl font-cyber font-black"
            />
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            <LightBulbText text="HOW.CAN.I.HELP" onClick={onContactOpen} />
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black ultra-thin-border scan-lines circuit-pattern relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-cyber-cyan/10 border-b border-cyber-cyan/30 px-4 py-2 flex items-center justify-between relative">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
            </div>
            <div className="font-mono text-xs holographic-text">
              user@portfolio:~/blog
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="h-[500px] overflow-y-auto p-4 font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {commands.map((cmd) => (
              <div key={cmd.id} className="mb-4">
                {cmd.command && (
                  <div className="flex items-start gap-2">
                    <span className="text-cyber-green">$</span>
                    <span className="text-white">{cmd.command}</span>
                  </div>
                )}
                <div className="mt-1 text-gray-300">{cmd.output}</div>
              </div>
            ))}

            {/* Current Input Line */}
            <div className="flex items-start gap-2">
              <span className="text-cyber-green">$</span>
              <div className="flex-1 relative">
                <div className="flex items-center">
                  <span className="text-white">{currentCommand}</span>
                  <span className="text-cyber-cyan terminal-cursor">_</span>
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="absolute inset-0 bg-transparent text-transparent outline-none caret-transparent"
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
          <p className="text-gray-500 font-mono text-xs">
            Terminal v0.0.1 | Click/Tap inside terminal and Type 'help'
          </p>
        </motion.div>
      </div>
    </section>
  )
}