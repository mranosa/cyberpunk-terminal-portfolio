'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import GlitchText from './GlitchText'

interface Command {
  id: number
  command: string
  output: string | React.ReactNode
  timestamp: Date
}

const blogPosts = [
  {
    title: 'Optimizing React Performance',
    date: '2024-01-15',
    excerpt:
      'Deep dive into React optimization techniques including memoization, lazy loading, and virtual scrolling...',
    tags: ['React', 'Performance', 'JavaScript'],
  },
  {
    title: 'Building Scalable Microservices',
    date: '2024-01-10',
    excerpt:
      'Architecture patterns and best practices for designing resilient microservice systems...',
    tags: ['Architecture', 'Docker', 'Kubernetes'],
  },
  {
    title: 'The Future of AI in Development',
    date: '2024-01-05',
    excerpt:
      'Exploring how AI tools are revolutionizing the software development workflow...',
    tags: ['AI', 'Development', 'Future'],
  },
]

const projects = [
  {
    id: 1,
    title: 'Neural Commerce Platform',
    description:
      'AI-powered e-commerce solution with predictive analytics and personalized recommendations',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    stats: { stars: 342, forks: 89, commits: 1247 },
    status: 'DEPLOYED',
    link: 'https://github.com/username/neural-commerce',
  },
  {
    id: 2,
    title: 'Quantum Task Manager',
    description:
      'Real-time collaborative project management tool with advanced automation features',
    tech: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'WebSockets'],
    stats: { stars: 567, forks: 123, commits: 892 },
    status: 'ACTIVE',
    link: 'https://github.com/username/quantum-tasks',
  },
  {
    id: 3,
    title: 'CyberSec Dashboard',
    description:
      'Security monitoring and threat detection system with ML-based anomaly detection',
    tech: ['Python', 'FastAPI', 'React', 'TensorFlow', 'Elasticsearch'],
    stats: { stars: 891, forks: 234, commits: 1567 },
    status: 'DEPLOYED',
    link: 'https://github.com/username/cybersec-dashboard',
  },
  {
    id: 4,
    title: 'Blockchain Wallet',
    description:
      'Decentralized cryptocurrency wallet with multi-chain support and DeFi integration',
    tech: ['Rust', 'Web3.js', 'React Native', 'Solidity', 'IPFS'],
    stats: { stars: 1234, forks: 456, commits: 2341 },
    status: 'BETA',
    link: 'https://github.com/username/blockchain-wallet',
  },
]

const thoughts = [
  'Code is poetry written in logic',
  'The best code is no code',
  'Debugging is twice as hard as writing code',
  'Simplicity is the ultimate sophistication',
]

const skills = {
  languages: [
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Python', level: 85 },
    { name: 'Rust', level: 70 },
    { name: 'Go', level: 75 },
  ],
  frameworks: [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'FastAPI', level: 85 },
    { name: 'GraphQL', level: 80 },
    { name: 'Docker/K8s', level: 85 },
  ],
  tools: [
    { name: 'Git/GitHub', level: 95 },
    { name: 'AWS/Cloud', level: 85 },
    { name: 'CI/CD', level: 90 },
    { name: 'Databases', level: 88 },
    { name: 'Testing', level: 92 },
  ],
}

export default function TerminalBlog() {
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
  const [isTyping, setIsTyping] = useState(false)
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
        output = (
          <div className="space-y-1">
            <div className="text-cyber-cyan">Available commands:</div>
            <div>
              <span className="text-cyber-purple">ls</span> - List all blog
              posts
            </div>
            <div>
              <span className="text-cyber-purple">read [number]</span> - Read a
              specific post
            </div>
            <div>
              <span className="text-cyber-purple">projects</span> - List all
              project repositories
            </div>
            <div>
              <span className="text-cyber-purple">skills [category]</span> -
              Display skills matrix (languages, frameworks, tools)
            </div>
            <div>
              <span className="text-cyber-purple">cv</span> - Download
              curriculum vitae
            </div>
            <div>
              <span className="text-cyber-purple">thoughts</span> - Display
              random thoughts
            </div>
            <div>
              <span className="text-cyber-purple">about</span> - About this
              terminal
            </div>
            <div>
              <span className="text-cyber-purple">clear</span> - Clear terminal
            </div>
            <div>
              <span className="text-cyber-purple">matrix</span> - Enter the
              matrix
            </div>
          </div>
        )
        break

      case 'ls':
      case 'dir':
        output = (
          <div className="space-y-2">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-cyber-green">[{index + 1}]</span>
                <div>
                  <div className="text-cyber-cyan">{post.title}</div>
                  <div className="text-gray-500 text-xs">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        )
        break

      case 'projects':
        output = (
          <div className="space-y-4">
            <div className="text-cyber-cyan mb-3">PROJECT REPOSITORIES:</div>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="border border-cyber-purple/30 p-4 bg-black/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-cyber-green font-bold">
                      [{index + 1}]
                    </span>
                    <span className="text-cyber-cyan text-lg">
                      {project.title}
                    </span>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 border ${
                      project.status === 'DEPLOYED'
                        ? 'border-cyber-green text-cyber-green'
                        : project.status === 'ACTIVE'
                          ? 'border-cyber-cyan text-cyber-cyan'
                          : project.status === 'BETA'
                            ? 'border-cyber-orange text-cyber-orange'
                            : 'border-gray-500 text-gray-500'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="text-gray-300 mb-3">{project.description}</div>

                <div>
                  <div className="text-cyber-purple text-sm mb-2">
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs border border-cyber-purple/30 px-2 py-1 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
        break

      case 'skills':
        const allSkills = [
          ...skills.languages,
          ...skills.frameworks,
          ...skills.tools,
        ]
        output = (
          <div className="space-y-4">
            <div className="text-cyber-cyan mb-3">SKILLS MATRIX:</div>

            {/* Languages */}
            <div className="mb-4">
              <div className="text-cyber-purple text-sm mb-2 uppercase tracking-wider">
                Languages
              </div>
              {skills.languages.map((skill, index) => (
                <div key={skill.name} className="flex items-center gap-3 mb-2">
                  <div className="w-24 text-gray-300 font-mono text-sm">
                    {skill.name}
                  </div>
                  <div className="flex-1 max-w-md">
                    <div className="bg-black/50 border border-cyber-cyan/20 h-4 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyber-cyan to-cyan-600 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-cyber-cyan font-mono text-sm w-10">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>

            {/* Frameworks */}
            <div className="mb-4">
              <div className="text-cyber-purple text-sm mb-2 uppercase tracking-wider">
                Frameworks
              </div>
              {skills.frameworks.map((skill, index) => (
                <div key={skill.name} className="flex items-center gap-3 mb-2">
                  <div className="w-24 text-gray-300 font-mono text-sm">
                    {skill.name}
                  </div>
                  <div className="flex-1 max-w-md">
                    <div className="bg-black/50 border border-cyber-purple/20 h-4 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyber-purple to-purple-600 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-cyber-purple font-mono text-sm w-10">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="mb-4">
              <div className="text-cyber-purple text-sm mb-2 uppercase tracking-wider">
                Tools
              </div>
              {skills.tools.map((skill, index) => (
                <div key={skill.name} className="flex items-center gap-3 mb-2">
                  <div className="w-24 text-gray-300 font-mono text-sm">
                    {skill.name}
                  </div>
                  <div className="flex-1 max-w-md">
                    <div className="bg-black/50 border border-cyber-green/20 h-4 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyber-green to-green-600 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-cyber-green font-mono text-sm w-10">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
        break

      case 'skills languages':
      case 'skills frameworks':
      case 'skills tools':
        const category = trimmedCmd.split(' ')[1] as keyof typeof skills
        if (skills[category]) {
          output = (
            <div className="space-y-3">
              <div className="text-cyber-cyan mb-3">
                {category.toUpperCase()} SKILLS:
              </div>
              {skills[category].map((skill, index) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className="w-32 text-gray-300 font-mono text-sm">
                    {skill.name}
                  </div>
                  <div className="flex-1 max-w-lg">
                    <div className="bg-black/50 border border-cyber-cyan/20 h-4 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 ${
                          category === 'languages'
                            ? 'bg-gradient-to-r from-cyber-cyan to-cyan-600'
                            : category === 'frameworks'
                              ? 'bg-gradient-to-r from-cyber-purple to-purple-600'
                              : 'bg-gradient-to-r from-cyber-green to-green-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  <div
                    className={`font-mono text-sm w-10 ${
                      category === 'languages'
                        ? 'text-cyber-cyan'
                        : category === 'frameworks'
                          ? 'text-cyber-purple'
                          : 'text-cyber-green'
                    }`}
                  >
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          )
        }
        break

      case 'cv':
      case 'resume':
        output = (
          <div className="space-y-3">
            <div className="text-cyber-cyan">CV DOWNLOAD INITIATED...</div>
            <div className="border border-cyber-green/30 bg-black/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-cyber-green font-mono text-sm">
                  SOFTWARE_ENGINEER_CV.pdf
                </div>
                <div className="text-cyber-green text-xs">2.4MB</div>
              </div>
              <div className="text-gray-400 text-sm mb-4">
                Complete technical resume with project portfolio, skills matrix,
                and professional experience.
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    // Replace with actual CV file path
                    const link = document.createElement('a')
                    link.href = '/cv/SOFTWARE_ENGINEER_CV.pdf'
                    link.download = 'SOFTWARE_ENGINEER_CV.pdf'
                    link.click()
                  }}
                  className="text-cyber-green hover:text-white text-sm border border-cyber-green/50 
                           hover:border-cyber-green px-3 py-1 transition-colors"
                >
                  DOWNLOAD.PDF →
                </button>
                <div className="text-gray-500 font-mono text-xs">
                  STATUS: <span className="text-cyber-green">READY</span>
                </div>
              </div>
            </div>
            <div className="text-gray-500 text-xs font-mono">
              $ curl -O https://portfolio.domain/cv/SOFTWARE_ENGINEER_CV.pdf
            </div>
          </div>
        )
        break

      case 'thoughts':
        const randomThought =
          thoughts[Math.floor(Math.random() * thoughts.length)]
        output = (
          <div className="text-cyber-purple italic">"{randomThought}"</div>
        )
        break

      case 'about':
        output = (
          <div className="space-y-2 text-gray-300">
            <div className="text-cyber-cyan">{`// PERSONAL.INFO`}</div>
            <div>
              Hi! I'm Ken Ranosa, a Software Engineer from the Philippines.
            </div>
            <div>
              Built with Next.js, TypeScript, and a love for cyberpunk
              aesthetics.
            </div>
            <div className="text-cyber-green">Status: ONLINE</div>
          </div>
        )
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

      case 'matrix':
        output = (
          <div className="text-cyber-green font-mono text-xs">
            <pre>{`
Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

Knock, knock, Neo.
            `}</pre>
          </div>
        )
        break

      default:
        if (trimmedCmd.startsWith('read ')) {
          const postIndex = parseInt(trimmedCmd.split(' ')[1]) - 1
          if (postIndex >= 0 && postIndex < blogPosts.length) {
            const post = blogPosts[postIndex]
            output = (
              <div className="space-y-2">
                <div className="text-cyber-cyan text-lg">{post.title}</div>
                <div className="text-gray-500">{post.date}</div>
                <div className="text-gray-300">{post.excerpt}</div>
                <div className="flex gap-2 mt-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-cyber-purple text-xs border border-cyber-purple/30 px-2 py-1"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          } else {
            output = <span className="text-red-500">Error: Post not found</span>
          }
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
          <p className="text-gray-400 font-mono text-sm">HOW.CAN.I.HELP</p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black border-2 border-cyber-cyan/50"
        >
          {/* Terminal Header */}
          <div className="bg-cyber-cyan/10 border-b border-cyber-cyan/30 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-xs text-cyber-cyan">
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
