'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'
import MatrixRain from '@/components/MatrixRainWrapper'

interface Planet {
  name: string
  sanskrit: string
  symbol: string
  color: string
  borderColor: string
  significance: string
  qualities: string[]
  karma: string
  house: string
  element: string
}

const vedicPlanets: Planet[] = [
  {
    name: 'Sun',
    sanskrit: 'Surya',
    symbol: '☉',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400',
    significance: 'Soul, ego, father, authority, and vitality',
    qualities: ['Leadership', 'Confidence', 'Authority', 'Vitality', 'Fame'],
    karma: 'My dharma and life purpose. The Sun reveals my soul\'s essence and the path to self-realization.',
    house: '1st House - Self',
    element: 'Fire'
  },
  {
    name: 'Moon',
    sanskrit: 'Chandra',
    symbol: '☽',
    color: 'text-gray-300',
    borderColor: 'border-gray-300',
    significance: 'Mind, emotions, mother, intuition, and comfort',
    qualities: ['Emotions', 'Intuition', 'Nurturing', 'Memory', 'Imagination'],
    karma: 'My emotional patterns and mental peace. The Moon shows my karmic relationship with comfort and security.',
    house: '4th House - Home & Mother',
    element: 'Water'
  },
  {
    name: 'Mars',
    sanskrit: 'Mangala',
    symbol: '♂',
    color: 'text-red-400',
    borderColor: 'border-red-400',
    significance: 'Energy, courage, siblings, action, and conflict',
    qualities: ['Courage', 'Energy', 'Passion', 'Competition', 'Ambition'],
    karma: 'My warrior spirit and how I face challenges. Mars reveals karmic lessons about anger and assertiveness.',
    house: '3rd House - Courage',
    element: 'Fire'
  },
  {
    name: 'Mercury',
    sanskrit: 'Budha',
    symbol: '☿',
    color: 'text-green-400',
    borderColor: 'border-green-400',
    significance: 'Communication, intellect, business, and analysis',
    qualities: ['Intelligence', 'Communication', 'Wit', 'Trade', 'Adaptability'],
    karma: 'My intellectual dharma and communication patterns. Mercury shows karmic gifts in learning and teaching.',
    house: '6th House - Service',
    element: 'Earth'
  },
  {
    name: 'Jupiter',
    sanskrit: 'Guru/Brihaspati',
    symbol: '♃',
    color: 'text-yellow-300',
    borderColor: 'border-yellow-300',
    significance: 'Wisdom, spirituality, fortune, and expansion',
    qualities: ['Wisdom', 'Fortune', 'Spirituality', 'Teaching', 'Optimism'],
    karma: 'My spiritual teacher and blessings. Jupiter reveals past life good karma and spiritual evolution.',
    house: '9th House - Dharma',
    element: 'Ether'
  },
  {
    name: 'Venus',
    sanskrit: 'Shukra',
    symbol: '♀',
    color: 'text-pink-400',
    borderColor: 'border-pink-400',
    significance: 'Love, beauty, luxury, relationships, and arts',
    qualities: ['Love', 'Beauty', 'Harmony', 'Luxury', 'Creativity'],
    karma: 'My capacity for love and material happiness. Venus shows karmic relationships and artistic gifts.',
    house: '7th House - Partnership',
    element: 'Water'
  },
  {
    name: 'Saturn',
    sanskrit: 'Shani',
    symbol: '♄',
    color: 'text-blue-400',
    borderColor: 'border-blue-400',
    significance: 'Discipline, karma, delays, lessons, and maturity',
    qualities: ['Discipline', 'Patience', 'Responsibility', 'Endurance', 'Wisdom'],
    karma: 'My karmic debts and life lessons. Saturn is the strict teacher showing where I must grow through challenges.',
    house: '10th House - Career',
    element: 'Air'
  },
  {
    name: 'Rahu',
    sanskrit: 'North Node',
    symbol: '☊',
    color: 'text-purple-400',
    borderColor: 'border-purple-400',
    significance: 'Obsession, illusion, foreign elements, and material desires',
    qualities: ['Ambition', 'Innovation', 'Rebellion', 'Transformation', 'Mystery'],
    karma: 'My soul\'s desires and areas of growth. Rahu shows where I seek new experiences and worldly achievements.',
    house: 'Shadow Planet',
    element: 'Shadow'
  },
  {
    name: 'Ketu',
    sanskrit: 'South Node',
    symbol: '☋',
    color: 'text-orange-400',
    borderColor: 'border-orange-400',
    significance: 'Spirituality, detachment, past life, and liberation',
    qualities: ['Spirituality', 'Detachment', 'Mysticism', 'Liberation', 'Intuition'],
    karma: 'My past life expertise and spiritual liberation. Ketu shows where I must let go and embrace spiritual growth.',
    house: 'Shadow Planet',
    element: 'Shadow'
  }
]

export default function BlueprintPage() {
  const router = useRouter()
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(vedicPlanets[0])
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const scrollSpring = useSpring(scrollYProgress, springConfig)

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white relative overflow-hidden">
      <MatrixRain />
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 p-6 border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="font-mono">Back to Terminal</span>
          </button>
          
          <h1 className="text-2xl font-bold text-purple-400 animate-pulse">
            Karmic Blueprint
          </h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-6">
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Vedic Astrology Chart
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The nine Grahas (planets) in Vedic astrology represent cosmic forces that shape my karma, 
            dharma, and life path. Each planet governs specific aspects of my existence and spiritual evolution.
          </p>
        </motion.div>

        {/* Planet Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {vedicPlanets.map((planet, index) => (
              <motion.button
                key={planet.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setSelectedPlanet(planet)}
                className={`px-4 py-2 font-mono text-sm border transition-all ${
                  selectedPlanet.name === planet.name
                    ? `${planet.borderColor} ${planet.color} bg-black/60 shadow-lg`
                    : 'border-gray-600 text-gray-400 hover:border-gray-400 hover:text-gray-300'
                }`}
              >
                <span className="mr-2 text-lg">{planet.symbol}</span>
                {planet.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Selected Planet Details */}
        <motion.div
          key={selectedPlanet.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Left Column - Planet Info */}
          <div className="space-y-6">
            <div className={`border ${selectedPlanet.borderColor} border-opacity-30 p-6 bg-black/40`}>
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-6xl ${selectedPlanet.color}`}>
                  {selectedPlanet.symbol}
                </span>
                <div>
                  <h3 className={`text-2xl font-bold ${selectedPlanet.color}`}>
                    {selectedPlanet.name}
                  </h3>
                  <p className="text-gray-400 font-mono">
                    {selectedPlanet.sanskrit}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 mb-2">SIGNIFICANCE</h4>
                  <p className="text-gray-300">{selectedPlanet.significance}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-gray-400 mb-2">ELEMENT</h4>
                  <p className={`${selectedPlanet.color}`}>{selectedPlanet.element}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-gray-400 mb-2">HOUSE RULERSHIP</h4>
                  <p className="text-gray-300">{selectedPlanet.house}</p>
                </div>
              </div>
            </div>

            {/* Qualities */}
            <div className="border border-gray-600 p-6 bg-black/40">
              <h4 className="text-sm font-bold text-gray-400 mb-4">KEY QUALITIES</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPlanet.qualities.map((quality, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs border ${selectedPlanet.borderColor} border-opacity-50 ${selectedPlanet.color} bg-black/60`}
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Karmic Significance */}
          <div className="space-y-6">
            <div className="border border-purple-500/30 p-6 bg-purple-900/10">
              <h4 className="text-lg font-bold text-purple-400 mb-4">
                ✨ KARMIC SIGNIFICANCE
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {selectedPlanet.karma}
              </p>
            </div>

            {/* Placeholder for personal reading */}
            <div className="border border-yellow-400/30 p-6 bg-yellow-400/5">
              <h4 className="text-lg font-bold text-yellow-400 mb-4">
                📊 MY PLACEMENT
              </h4>
              <div className="space-y-3 text-gray-400">
                <p className="text-sm italic">
                  [Personal birth chart analysis would appear here]
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>House Position:</span>
                    <span className="text-gray-300">Coming soon...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zodiac Sign:</span>
                    <span className="text-gray-300">Coming soon...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Aspects:</span>
                    <span className="text-gray-300">Coming soon...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Strength:</span>
                    <span className="text-gray-300">Coming soon...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Remedies placeholder */}
            <div className="border border-green-400/30 p-6 bg-green-400/5">
              <h4 className="text-lg font-bold text-green-400 mb-4">
                🌿 REMEDIES & ENHANCEMENTS
              </h4>
              <p className="text-sm text-gray-400 italic">
                [Vedic remedies, mantras, and gemstones for this planet would appear here]
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>
            This is a cosmic blueprint based on Vedic astrology principles. 
            For a personalized reading, birth time and location data would be required.
          </p>
        </motion.div>
      </div>
    </div>
  )
}