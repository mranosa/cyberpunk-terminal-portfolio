'use client'

import { useRouter } from 'next/navigation'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export function BlueprintCommand() {
  const router = useRouter()

  const handleViewBlueprint = () => {
    router.push('/blueprint')
  }

  const planetHighlights = [
    { planet: 'Sun', domain: 'Soul & Identity', color: 'text-yellow-400' },
    { planet: 'Moon', domain: 'Mind & Emotions', color: 'text-gray-300' },
    { planet: 'Mars', domain: 'Energy & Action', color: 'text-red-400' }
  ]

  const karmicTeaser = [
    '🌟 Discover my soul\'s purpose encoded in the stars',
    '🔮 Uncover karmic patterns shaping my destiny',
    '⚡ Reveal hidden talents written in planetary alignments',
    '🌙 Understand my emotional blueprint and relationships',
    '🪐 Decode life challenges and their spiritual meaning'
  ]

  return (
    <div className="space-y-6">
      <div className="text-cyber-cyan mb-4 text-xl font-bold animate-pulse">
        === KARMIC BLUEPRINT ===
      </div>
      
      {/* Mystical introduction */}
      <div className="border border-purple-500/30 p-4 bg-purple-900/10">
        <div className="text-purple-400 mb-3 font-semibold">
          ✨ MY COSMIC SIGNATURE AWAITS
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          My karmic blueprint is a sacred map of my soul's journey, revealing 
          the cosmic forces that shaped my birth and continue to guide my path.
        </p>
      </div>

      {/* Planet preview grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {planetHighlights.map((item, index) => (
          <div key={index} className="border border-purple-500/30 p-3 bg-black/40 hover:bg-purple-900/20 transition-all">
            <div className={`${item.color} text-xl font-bold mb-1`}>
              {item.planet}
            </div>
            <div className="text-gray-400 text-xs">
              {item.domain}
            </div>
          </div>
        ))}
      </div>

      {/* Compelling teaser points */}
      <div className="border border-cyber-cyan/30 p-4 bg-black/30">
        <div className="text-cyan-400 mb-3 font-semibold">
          🔮 WHAT MY BLUEPRINT REVEALS:
        </div>
        <ul className="space-y-2">
          {karmicTeaser.map((point, i) => (
            <li key={i} className="text-gray-300 hover:text-white transition-colors">
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Vedic planets teaser */}
      <div className="border border-yellow-400/30 p-4 bg-yellow-400/5">
        <div className="text-yellow-400 mb-2 font-semibold">
          🪐 9 VEDIC PLANETS ANALYZED
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'].map((planet, i) => (
            <span
              key={i}
              className="text-xs border border-yellow-400/50 px-2 py-1 text-gray-300 hover:text-yellow-400 hover:border-yellow-400 transition-all"
            >
              {planet}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-xs">
          Each planet governs specific aspects of my karma and dharma
        </p>
      </div>

      {/* Mystical CTA */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleViewBlueprint}
          className="relative px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black transition-all duration-300 flex items-center gap-3 group font-bold text-lg animate-pulse hover:animate-none shadow-[0_0_20px_rgba(168,85,247,0.3)]"
        >
          <span>UNVEIL MY COSMIC MAP</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded animate-pulse">
            DESTINY
          </span>
        </button>
      </div>

      <div className="text-center text-gray-500 text-xs">
        Ancient Vedic wisdom meets modern interpretation • Click to explore my karmic path
      </div>
    </div>
  )
}