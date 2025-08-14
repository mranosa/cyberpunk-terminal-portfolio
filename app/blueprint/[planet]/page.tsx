'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { vedicPlanets, getPlanetByName, getPlanetUrl } from '../planetData'
import AnimatedPlanetWrapper from '../AnimatedPlanetWrapper'
import MatrixRain from '@/components/MatrixRainWrapper'

export default function PlanetPage() {
  const params = useParams()
  const router = useRouter()
  const planetName = params.planet as string
  
  // Get the current planet data
  const currentPlanet = getPlanetByName(planetName)
  
  // If planet not found, redirect to main blueprint page
  if (!currentPlanet) {
    router.push('/blueprint')
    return null
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-4"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to Terminal</span>
          </button>
          
          <h1 className="text-4xl font-bold text-green-400 mb-2">
            KARMIC BLUEPRINT — VEDIC ASTROLOGY
          </h1>
          <p className="text-gray-500 text-sm">
            Decoding your cosmic DNA through ancient Vedic wisdom
          </p>
        </motion.div>

        {/* Planet Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {vedicPlanets.map((planet, index) => (
              <motion.button
                key={planet.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => router.push(getPlanetUrl(planet.name))}
                className={`px-4 py-2 font-mono text-sm border transition-all ${
                  currentPlanet.name === planet.name
                    ? `${planet.borderColor} ${planet.color} bg-black/70 shadow-lg`
                    : 'border-gray-600 text-gray-400 hover:border-gray-400 hover:text-gray-300'
                }`}
              >
                <span className="mr-2 text-lg">{planet.symbol}</span>
                {planet.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Planet Content */}
        <motion.div
          key={currentPlanet.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatedPlanetWrapper planet={currentPlanet} />
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