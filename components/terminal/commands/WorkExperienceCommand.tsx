'use client'

import { useRouter } from 'next/navigation'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export function WorkExperienceCommand() {
  const router = useRouter()

  const handleMoreInfo = () => {
    router.push('/work')
  }

  // Calculate total years of experience
  const totalYears = 15 // 2009 to 2025

  // Key highlights for the teaser
  const highlights = [
    { label: 'Years of Experience', value: `${totalYears}+`, color: 'text-cyber-cyan' },
    { label: 'Companies', value: '9', color: 'text-cyber-green' },
    { label: 'Deal Value Closed', value: '$1M+', color: 'text-pink-400' }
  ]

  const teaserPoints = [
    '🚀 Delivered $1M+ in critical features at Formative',
    '⚡ Achieved 600% performance improvements at BEN',
    '🎯 Founded SignZen - validated with 16K+ screens ready',
    '🔧 Reduced deployment time from 2 weeks to 1 minute',
    '💡 Built tools adopted by entire engineering teams'
  ]

  const techStack = [
    'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'GraphQL', 'MongoDB', 'AWS', 'Docker', 'Git'
  ]

  return (
    <div className="space-y-6">
      <div className="text-cyber-cyan mb-4 text-xl font-bold animate-pulse">
        === WORK EXPERIENCE TEASER ===
      </div>
      
      {/* Eye-catching stats grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {highlights.map((stat, index) => (
          <div key={index} className="border border-cyber-green/30 p-4 bg-black/40 hover:bg-black/60 transition-all">
            <div className={`${stat.color} text-2xl font-bold mb-2`}>
              {stat.value}
            </div>
            <div className="text-gray-400 text-xs uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Compelling teaser content */}
      <div className="border border-cyber-cyan/30 p-4 bg-black/30">
        <div className="text-pink-400 mb-4 font-semibold">
          🔥 CAREER HIGHLIGHTS:
        </div>
        <ul className="space-y-2 mb-4">
          {teaserPoints.map((point, i) => (
            <li key={i} className="text-gray-300 hover:text-white transition-colors">
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack preview */}
      <div className="border border-cyber-green/30 p-4 bg-black/30">
        <div className="text-cyber-green mb-4 font-semibold">
          💻 TECH ARSENAL:
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs border border-cyber-cyan/50 px-2 py-2 text-gray-300 hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
            >
              {tech}
            </span>
          ))}
          <span className="text-xs px-2 py-2 text-yellow-400 animate-pulse">
            +20 more...
          </span>
        </div>
      </div>

      {/* Current status */}
      <div className="border border-yellow-400/30 p-4 bg-yellow-400/5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-400 text-sm font-semibold">CURRENTLY AVAILABLE</span>
        </div>
        <p className="text-gray-300 text-sm">
          Senior Software Engineer with 15+ years crafting scalable solutions.
          From startups to enterprise, I deliver results that matter.
        </p>
      </div>

      {/* Enticing CTA */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleMoreInfo}
          className="relative px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all duration-300 flex items-center gap-3 group font-bold text-lg animate-pulse hover:animate-none"
        >
          <span>DISCOVER FULL JOURNEY</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          <span className="absolute -top-2 -right-2 bg-pink-400 text-black text-xs px-2 py-2 rounded">
            9 COMPANIES
          </span>
        </button>
      </div>

      <div className="text-center text-gray-500 text-xs">
        Type 'work' to see career highlights • Click button for complete experience
      </div>
    </div>
  )
}