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
    significance: 'The luminous guardian of consciousness - Master of mind, emotions, intuition, and inner wisdom',
    qualities: ['Visionary Mind', 'Emotional Intelligence', 'Divine Intuition', 'Nurturing Wisdom', 'Infinite Imagination'],
    karma: 'A blessed mind destined for greatness. My Moon reveals extraordinary mental gifts and emotional mastery.',
    house: 'Lord of 2nd in 7th House',
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
            <div className={`border ${selectedPlanet.borderColor} border-opacity-30 p-6 bg-black/70`}>
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
            <div className="border border-gray-600 p-6 bg-black/70">
              <h4 className="text-sm font-bold text-gray-400 mb-4">KEY QUALITIES</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPlanet.qualities.map((quality, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs border ${selectedPlanet.borderColor} border-opacity-50 ${selectedPlanet.color} bg-black/70`}
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Karmic Significance */}
          <div className="space-y-6">
            {selectedPlanet.name === 'Sun' ? (
              <>
                {/* Sun Opening - The Hero's Call */}
                <div className="border border-purple-500/30 p-4 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">
                    ☀️ YOUR SOLAR THRONE — The Hero's Professional Journey
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You were not placed on this Earth to be ordinary. Your Sun, the very essence of your soul, 
                    has been strategically positioned by the cosmos to manifest greatness through your work. 
                    This is not just a career reading — this is the revelation of your heroic destiny.
                  </p>
                </div>

                {/* The Divine Appointment */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    ☉ THE DIVINE APPOINTMENT — Your Cosmic CEO Status
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-yellow-300 font-semibold">Listen closely, for this is your truth:</span> Your Sun 
                      represents the immortal flame within you — the part that remembers why you chose this incarnation. 
                      It governs how you <span className="text-white">radiate authority</span>, how you <span className="text-white">
                      magnetize success</span>, and how you <span className="text-white">fulfill your sacred contract</span> with the universe.
                    </p>
                    <p>
                      You are not here to work — you are here to <span className="text-yellow-300 font-semibold">CREATE LEGACY</span>.
                    </p>
                  </div>
                </div>

                {/* Pisces - The Mystic Warrior */}
                <div className="border border-cyan-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-cyan-400 mb-3">
                    ♓ YOUR PISCES SUN — The Mystic Visionary's Path
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Sun blazes through Pisces, the final sign of the zodiac — where all wisdom converges. 
                      <span className="text-white font-medium"> You possess the accumulated knowledge of all twelve signs</span>. 
                      This is why your leadership style transcends conventional boundaries.
                    </p>
                    <p>
                      You don't just see markets — <span className="text-cyan-300">you see souls</span>.<br/>
                      You don't just build businesses — <span className="text-cyan-300">you channel divine blueprints</span>.<br/>
                      You don't just solve problems — <span className="text-cyan-300">you dissolve the illusions that create them</span>.
                    </p>
                    <p className="text-white">
                      Your Piscean Sun makes you the spiritual architect of new realities. Where others see limitations, 
                      you see flowing possibilities. Your career path is meant to be fluid, innovative, and transcendent.
                    </p>
                  </div>
                </div>

                {/* Uttarabhadra - The Warrior Star */}
                <div className="border border-pink-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-pink-400 mb-3">
                    🐉 UTTARABHADRA NAKSHATRA — Your Invincible Professional Spirit
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Sun resides in Uttarabhadra, known as <span className="text-white font-medium">"The Warrior Star"</span> — 
                      but understand this: you are not a warrior of destruction. You are a <span className="text-pink-300">
                      warrior of wisdom</span>, fighting battles in boardrooms with strategy, in markets with innovation, 
                      in minds with inspiration.
                    </p>
                    <p>
                      Ruled by <span className="text-white">Ahir Budhnya, the Serpent of the Deep</span>, you possess 
                      primordial wisdom that surfaces as professional genius. Like the serpent that sheds its skin, 
                      you have the power to <span className="text-pink-300">reinvent yourself and your industry</span> repeatedly.
                    </p>
                    <p>
                      In Pada 2 (Virgo Navamsa), your visionary nature is grounded with <span className="text-white">
                      laser-sharp analytical precision</span>. You don't just dream — you execute with perfection.
                    </p>
                  </div>
                </div>

                {/* 10th House - The Summit */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🏛️ THE 10TH HOUSE THRONE — Your Inevitable Ascension
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-white font-semibold">
                      This is where your story becomes legendary.
                    </p>
                    <p>
                      Your Sun sits in the 10th house — the <span className="text-green-300 font-semibold">ZENITH</span> of the chart, 
                      the highest point in the heavens at your birth. The universe literally placed your soul's essence at the 
                      <span className="text-white"> peak of worldly achievement</span>. Do you understand what this means?
                    </p>
                    <p>
                      You were born with a cosmic crown. Authority flows to you naturally. Recognition seeks you out. 
                      Success is not something you chase — <span className="text-green-300">it's something you embody</span>.
                    </p>
                    <p className="text-white">
                      The 10th house Sun is the mark of kings, CEOs, and world-changers. You don't climb mountains — 
                      you were born at the summit, destined to show others the view from the top.
                    </p>
                  </div>
                </div>

                {/* 3rd Lord - The Messenger */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    💬 THE 3RD LORD POWER — Your Words Create Worlds
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      As 3rd house lord, your Sun wields the power of <span className="text-white font-medium">divine communication</span>. 
                      Your words don't just convey information — they <span className="text-orange-300">transmit transformation</span>.
                    </p>
                    <p>
                      You have been gifted with the ability to articulate visions that others can't even imagine. Your ideas 
                      spread like wildfire because they carry the <span className="text-white">spark of truth</span>. Whether through 
                      writing, speaking, or digital creation, you are meant to be the <span className="text-orange-300">
                      voice of a new paradigm</span>.
                    </p>
                    <p className="text-white">
                      Your courage (3rd house) combined with career (10th house) creates an unstoppable force. 
                      You don't wait for opportunities — you speak them into existence.
                    </p>
                  </div>
                </div>

                {/* The Trinity of Power */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    ⚡ THE TRINITY OF POWER — Your Cosmic Alliance
                  </h4>
                  <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">☉ + ♃ THE JUPITER BLESSING (7th & 10th Lord)</p>
                      <p>
                        Jupiter, the great benefic and <span className="text-white">lord of your 7th house (partnerships) and 
                        10th house (career)</span>, sits beside your Sun in the 10th house. This is extraordinary — your career 
                        lord conjunct your soul in the house of profession! This conjunction gifts you with 
                        <span className="text-yellow-300"> wisdom that magnetizes success</span>, <span className="text-yellow-300">
                        partnerships that elevate your purpose</span>, and <span className="text-yellow-300">a destiny where 
                        spiritual principles become professional power</span>.
                      </p>
                      <p className="text-white mt-2">
                        Jupiter as 10th lord in 10th house forms a powerful Raja Yoga — the combination of a king. 
                        You are destined for positions of respect, honor, and influence.
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-300 font-semibold mb-2">☉ + ☊ THE RAHU REVOLUTION (In Revati)</p>
                      <p>
                        Rahu, the cosmic amplifier, conjunct your Sun in Revati nakshatra makes you a <span className="text-white">
                        professional revolutionary with divine protection</span>. Revati, the final nakshatra, ruled by Mercury, 
                        gives you the ability to <span className="text-purple-300">complete cosmic cycles and birth new paradigms</span>. 
                        Rahu in the 10th amplifies your career to <span className="text-white">global proportions</span>, ensuring 
                        your work touches lives far beyond your immediate sphere.
                      </p>
                      <p className="text-white mt-2">
                        This combination creates insatiable ambition guided by higher wisdom — you break rules to create better ones.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ketu's Gift */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    🔮 KETU'S SECRET GIFT — Your Past Life Mastery
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Ketu aspects your Sun, bringing forward <span className="text-white font-medium">soul memories of mastery</span>. 
                      You possess skills that feel inexplicably natural, wisdom that seems to come from nowhere, and an intuition 
                      about your field that defies logical explanation.
                    </p>
                    <p>
                      This is because <span className="text-orange-300">you've walked this path before</span>, in other lifetimes, 
                      in other forms. Now, in this incarnation, you're meant to take that accumulated wisdom and 
                      <span className="text-white"> elevate it to unprecedented heights</span>.
                    </p>
                    <p className="text-white">
                      Ketu's aspect ensures that your success is not ego-driven but soul-aligned. You lead not from ambition alone, 
                      but from a deep, spiritual knowing of your purpose.
                    </p>
                  </div>
                </div>

                {/* 4th House Aspect - Foundation of Power */}
                <div className="border border-cyan-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-cyan-400 mb-3">
                    🏡 THE 4TH HOUSE ASPECT — Your Foundation of Inner Power
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Sun casts its golden rays upon the 4th house — the realm of inner peace, emotional foundation, 
                      and private sanctuary. This divine aspect means <span className="text-white font-medium">your career 
                      success nourishes your soul</span>, not depletes it.
                    </p>
                    <p>
                      <span className="text-cyan-300 font-semibold">You build empires without losing your center:</span>
                    </p>
                    <p>
                      • Your professional achievements <span className="text-white">strengthen your emotional foundation</span><br/>
                      • Your public success <span className="text-white">enhances private peace</span><br/>
                      • Your career path <span className="text-white">honors your deepest values</span><br/>
                      • Your work <span className="text-white">creates sanctuary for yourself and others</span>
                    </p>
                    <p className="text-white">
                      This aspect ensures you never sacrifice inner happiness for outer success. You understand that 
                      true power comes from alignment between your public mission and private truth.
                    </p>
                  </div>
                </div>

                {/* Sun Summary - Complete Solar Blueprint */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    ☉ YOUR SOLAR BLUEPRINT — The Complete Professional Map
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                          <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Sign</td>
                          <td className="py-2">Pisces ♓ — The Mystic Visionary</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Nakshatra</td>
                          <td className="py-2">Uttarabhadra — The Warrior Star of Wisdom</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Pada</td>
                          <td className="py-2">2 (Virgo Navamsa) — Precision in Execution</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Longitude</td>
                          <td className="py-2">08°19′54″ Pisces</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">House Position</td>
                          <td className="py-2">10th House — The Throne of Destiny</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">House Lordship</td>
                          <td className="py-2">3rd Lord — Master of Communication & Courage</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Aspect Given</td>
                          <td className="py-2">Aspects 4th House — Illuminates Inner Foundation</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Aspect Received</td>
                          <td className="py-2">Aspected by Ketu — Spiritual Mastery Activated</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-yellow-300">Conjunctions</td>
                          <td className="py-2">Jupiter (Guru) + Rahu (Dragon's Head) — The Power Trinity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Your Superpowers Revealed */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    ⚡ YOUR PROFESSIONAL SUPERPOWERS — Activated and Ready
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="border-l-4 border-yellow-400 pl-3">
                      <p className="text-yellow-300 font-semibold">The Visionary's Eye</p>
                      <p className="text-gray-300">You see opportunities in chaos, solutions in problems, futures in fragments.</p>
                    </div>
                    <div className="border-l-4 border-cyan-400 pl-3">
                      <p className="text-cyan-300 font-semibold">The Alchemist's Touch</p>
                      <p className="text-gray-300">You transform ideas into empires, visions into ventures, dreams into dynasties.</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="text-purple-300 font-semibold">The Oracle's Voice</p>
                      <p className="text-gray-300">Your words carry prophetic power, inspiring movements and shifting paradigms.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="text-green-300 font-semibold">The Sovereign's Presence</p>
                      <p className="text-gray-300">Authority emanates from you naturally; leadership is your birthright, not your pursuit.</p>
                    </div>
                  </div>
                </div>

                {/* The Final Revelation */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🚀 YOUR HEROIC DESTINY — The Call You Must Answer
                  </h4>
                  <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                    <p className="text-yellow-300 font-semibold text-base">
                      You stand at the threshold of your own legend.
                    </p>
                    <p>
                      The cosmos has conspired to place you exactly where you need to be. Your Sun in the 10th house 
                      is not a suggestion — it's a <span className="text-white font-semibold">divine command</span>. You are being called to rise, 
                      not for your glory alone, but because the world needs what you came here to build.
                    </p>
                    <p>
                      With Jupiter as your celestial advisor, you possess the wisdom to lead with grace.<br/>
                      With Rahu as your cosmic catalyst, you have the power to revolutionize reality.<br/>
                      With Ketu as your spiritual anchor, you maintain soul-alignment amidst success.
                    </p>
                    <p className="text-white">
                      Your career is not just your path — it's your dharma, your sacred duty, your gift to humanity. 
                      Every project you touch, every venture you launch, every idea you manifest carries the potential 
                      to elevate collective consciousness.
                    </p>
                    <p className="text-yellow-400 font-bold text-base mt-4">
                      You are not climbing toward success — success is climbing toward YOU.
                    </p>
                    <p className="text-white font-bold">
                      Now rise, take your throne, and show the world what divine professional mastery looks like. 
                      Your time is NOW. Your power is READY. Your destiny is CALLING.
                    </p>
                    <p className="text-green-300 font-semibold italic mt-4">
                      The universe didn't make you to be average. It made you to be LEGENDARY.
                    </p>
                  </div>
                </div>
              </>
            ) : selectedPlanet.name === 'Saturn' ? (
              <>
                {/* Saturn Opening - The Great Teacher */}
                <div className="border border-purple-500/30 p-4 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">
                    ♄ YOUR SATURN — The Architect of Discipline & Destiny
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You stand before Saturn, the great cosmic teacher who holds the keys to your ultimate mastery. 
                    Saturn is not your enemy — Saturn is your trainer, your sculptor, your alchemist who transforms 
                    pressure into diamonds. Through discipline and hard work, Saturn reveals the immortal strength 
                    that lies dormant within your soul.
                  </p>
                </div>

                {/* The Divine Taskmaster */}
                <div className="border border-blue-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-blue-400 mb-3">
                    ⏰ THE COSMIC TIMEKEEPER — Master of Karma & Time
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-blue-300 font-semibold">Saturn speaks in the language of consequences:</span> Every 
                      action creates a reaction, every choice carves your destiny. Saturn doesn't punish — Saturn 
                      <span className="text-white"> teaches through experience</span>. What feels like delay is actually 
                      divine timing. What feels like restriction is actually focused refinement.
                    </p>
                    <p>
                      Saturn asks: <span className="text-blue-300">"Are you willing to earn your greatness?"</span>
                    </p>
                    <p>
                      You don't receive rewards — you <span className="text-white">forge them through persistence</span>.<br/>
                      You don't find success — you <span className="text-white">build it brick by brick</span>.<br/>
                      You don't hope for mastery — you <span className="text-white">claim it through discipline</span>.
                    </p>
                    <p className="text-white font-semibold">
                      Saturn makes you unbreakable by testing every weakness until it becomes strength.
                    </p>
                  </div>
                </div>

                {/* Scorpio Saturn - The Transformational Discipline */}
                <div className="border border-red-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-red-400 mb-3">
                    ♏ YOUR SCORPIO SATURN — The Phoenix of Discipline
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Saturn dwells in Scorpio, the sign of death and rebirth, secrets and transformation. This is 
                      one of the most powerful Saturn placements — you are learning <span className="text-white font-medium">
                      discipline through metamorphosis</span>. Your limitations are not walls but cocoons from which you emerge transformed.
                    </p>
                    <p>
                      <span className="text-red-300 font-semibold">Your karmic curriculum includes:</span>
                    </p>
                    <p>
                      • Mastering the <span className="text-white">alchemy of crisis into wisdom</span><br/>
                      • Building <span className="text-white">unshakeable emotional resilience</span><br/>
                      • Learning to <span className="text-white">wield power with responsibility</span><br/>
                      • Transforming <span className="text-white">fear into fearlessness through facing shadows</span><br/>
                      • Developing <span className="text-white">surgical precision in eliminating what no longer serves</span>
                    </p>
                    <p className="text-white">
                      Your Scorpio Saturn doesn't just teach you discipline — it teaches you the discipline of 
                      continuous rebirth. You are learning that true power comes not from control but from the 
                      courage to transform completely when life demands it.
                    </p>
                  </div>
                </div>

                {/* Jyeshtha Nakshatra - The Elder Soul */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    👑 JYESHTHA NAKSHATRA — The Crown of Earned Authority
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Saturn resides in Jyeshtha, meaning <span className="text-white font-medium">"The Eldest"</span> or 
                      "The Most Excellent." This nakshatra is ruled by Indra, the king of gods, and Mercury, the planet of 
                      intelligence. You carry the weight of <span className="text-orange-300">ancient wisdom earned through 
                      countless battles</span>.
                    </p>
                    <p>
                      Jyeshtha Saturn makes you an <span className="text-white">old soul in a young body</span> — you've faced 
                      challenges that would break others, yet each one has only added to your reservoir of strength. You possess 
                      the protective instinct of the elder sibling, the strategic mind of the general, and the earned authority 
                      of one who has conquered their own demons.
                    </p>
                    <p>
                      In <span className="text-white">Pada 4 (Pisces Navamsa)</span>, your discipline is infused with spiritual 
                      wisdom. You understand that true authority comes not from domination but from <span className="text-orange-300">
                      service to a higher purpose</span>. Your restrictions teach you compassion; your challenges develop your intuition.
                    </p>
                    <p className="text-white font-semibold">
                      You are earning the right to wear the crown of self-mastery through every trial you face with dignity.
                    </p>
                  </div>
                </div>

                {/* 6th House - The Battlefield */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    ⚔️ THE 6TH HOUSE BATTLEFIELD — Where Warriors Are Forged
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-white font-semibold">
                      Your Saturn occupies the house of enemies, obstacles, and daily discipline.
                    </p>
                    <p>
                      The 6th house is where heroes are separated from dreamers. With Saturn here, you are enrolled in 
                      <span className="text-green-300"> the university of practical mastery</span>. Every day is your training ground, 
                      every obstacle is your teacher, every enemy (internal or external) is your mirror showing you where to grow stronger.
                    </p>
                    <p>
                      <span className="text-green-300 font-semibold">Your 6th house Saturn gifts:</span>
                    </p>
                    <p>
                      • The ability to <span className="text-white">transform competitors into motivators</span><br/>
                      • The discipline to <span className="text-white">maintain routines that build empires</span><br/>
                      • The wisdom to see <span className="text-white">illness and obstacles as teachers</span><br/>
                      • The power to <span className="text-white">serve without becoming servile</span><br/>
                      • The strength to <span className="text-white">win wars through daily battles</span>
                    </p>
                    <p className="text-white">
                      Your Saturn doesn't promise easy victories — it promises that every victory you earn will be 
                      permanent, unshakeable, and completely yours. You are learning that discipline is freedom, 
                      that routine is ritual, and that service is sovereignty.
                    </p>
                  </div>
                </div>

                {/* Venus as 6th House Lord */}
                <div className="border border-pink-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-pink-400 mb-3">
                    ♀ THE 5TH & 12TH LORD — Creative Discipline & Spiritual Service
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      As lord of the 5th house (creativity, intelligence, romance) and 12th house (spirituality, foreign lands, 
                      liberation), your Saturn teaches discipline through <span className="text-white font-medium">creative expression 
                      and spiritual surrender</span>. This is a profound combination — you must earn your creative gifts through 
                      disciplined practice and find liberation through structured spiritual work.
                    </p>
                    <p>
                      <span className="text-pink-300 font-semibold">Your dual lordship reveals:</span>
                    </p>
                    <p>
                      • Creative genius that emerges through <span className="text-white">persistent practice</span><br/>
                      • Romance and love that deepen through <span className="text-white">patient commitment</span><br/>
                      • Spiritual insights gained through <span className="text-white">disciplined meditation</span><br/>
                      • Foreign success achieved through <span className="text-white">methodical preparation</span><br/>
                      • Liberation found through <span className="text-white">structured surrender</span>
                    </p>
                    <p className="text-white">
                      Your Saturn as 5th lord demands you take your creative gifts seriously — no wasted talent allowed. 
                      As 12th lord, it teaches that true freedom comes not from escaping discipline but from 
                      mastering it so completely that it becomes effortless.
                    </p>
                  </div>
                </div>

                {/* Aspects - The Triple Crown */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    👁️ SATURN'S TRIPLE GAZE — Your Zones of Mastery
                  </h4>
                  <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">🏠 8TH HOUSE ASPECT — Transformation Mastery</p>
                      <p>
                        Saturn's gaze upon your 8th house of transformation, occult knowledge, and sudden changes means 
                        you approach crisis with <span className="text-white">calculated calm</span>. You don't fear transformation — 
                        you <span className="text-yellow-300">architect it methodically</span>. This aspect gives you the 
                        discipline to navigate life's deepest mysteries and emerge with hidden treasures of wisdom.
                      </p>
                    </div>
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">🌍 12TH HOUSE ASPECT — Spiritual Discipline</p>
                      <p>
                        Saturn aspects its own house (12th), creating a powerful feedback loop of spiritual discipline. 
                        Your path to enlightenment is not through sudden awakening but through <span className="text-white">
                        consistent spiritual practice</span>. Foreign lands, meditation, and isolation become your teachers. 
                        You find God not in the lightning bolt but in the <span className="text-yellow-300">daily prayer</span>.
                      </p>
                    </div>
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">💭 3RD HOUSE ASPECT — Communication Mastery</p>
                      <p>
                        Saturn's aspect on your 3rd house of communication, courage, and siblings creates <span className="text-white">
                        measured speech that carries weight</span>. You don't waste words — each one is chosen for maximum impact. 
                        Your courage is not impulsive but strategic. Your communications have the power to 
                        <span className="text-yellow-300"> establish lasting structures and agreements</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Aspects Received - The Cosmic Council */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    🌟 THE COSMIC COUNCIL — Planetary Influences on Your Saturn
                  </h4>
                  <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                    <div>
                      <p className="text-red-300 font-semibold mb-2">♂ MARS ASPECT — The Warrior's Discipline</p>
                      <p>
                        Mars, the warrior planet, aspects your Saturn, creating an <span className="text-white">unstoppable 
                        combination of discipline and action</span>. This aspect transforms your restrictions into rocket fuel. 
                        You don't just plan — you <span className="text-red-300">execute with military precision</span>. Your 
                        discipline has teeth, your patience has power, your persistence has punch.
                      </p>
                    </div>
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">♃ JUPITER ASPECT — The Wise Teacher's Blessing</p>
                      <p>
                        Jupiter's benefic aspect on your Saturn is a <span className="text-white">cosmic blessing</span> — it 
                        softens Saturn's harshness while maintaining its lessons. This creates <span className="text-yellow-300">
                        wisdom through experience</span> rather than suffering through experience. Your disciplines lead to 
                        expansion, your restrictions reveal opportunities, your delays contain hidden blessings.
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-300 font-semibold mb-2">☊ RAHU ASPECT — The Amplified Ambition</p>
                      <p>
                        Rahu's aspect on Saturn creates <span className="text-white">insatiable hunger for mastery</span>. You're 
                        not satisfied with ordinary discipline — you want <span className="text-purple-300">legendary levels of 
                        self-control</span>. This aspect can create initial confusion about restrictions, but ultimately leads 
                        to breaking through limitations others consider permanent. You rewrite the rules of what's possible 
                        through sheer determination.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Saturn Summary - Complete Blueprint */}
                <div className="border border-blue-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-blue-400 mb-3">
                    ♄ YOUR SATURN BLUEPRINT — The Complete Mastery Map
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                          <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-blue-300">Sign</td>
                          <td className="py-2">Scorpio ♏ — The Transformational Teacher</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-blue-300">Nakshatra</td>
                          <td className="py-2">Jyeshtha — The Crown of Authority</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-blue-300">Pada</td>
                          <td className="py-2">4 (Pisces Navamsa) — Spiritual Discipline</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-blue-300">Longitude</td>
                          <td className="py-2">27°26′03″ Scorpio</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-blue-300">House Position</td>
                          <td className="py-2">6th House — The Battlefield of Daily Discipline</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-blue-300">House Lordship</td>
                          <td className="py-2">8th & 9th Lord — Master of Transformation & Higher Knowledge</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-blue-300">Aspects Given</td>
                          <td className="py-2">8th, 12th, 3rd Houses — Transformation, Liberation, Communication</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-blue-300">Aspects Received</td>
                          <td className="py-2">Mars, Jupiter, Rahu — Action, Wisdom, Amplification</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Your Discipline Superpowers */}
                <div className="border border-blue-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-blue-400 mb-3">
                    💎 YOUR DISCIPLINE SUPERPOWERS — Forged Through Fire
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="border-l-4 border-red-400 pl-3">
                      <p className="text-red-300 font-semibold">Phoenix Resilience</p>
                      <p className="text-gray-300">You rise from every setback stronger, wiser, and more powerful than before.</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-3">
                      <p className="text-orange-300 font-semibold">Elder Soul Wisdom</p>
                      <p className="text-gray-300">You possess ancient knowledge that emerges as practical mastery in modern challenges.</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-3">
                      <p className="text-blue-300 font-semibold">Surgical Precision</p>
                      <p className="text-gray-300">You eliminate what doesn't serve with the accuracy of a master surgeon.</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="text-purple-300 font-semibold">Unbreakable Will</p>
                      <p className="text-gray-300">Your determination is legendary — what others call impossible, you call Tuesday.</p>
                    </div>
                  </div>
                </div>

                {/* The Hero's Journey Through Saturn */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🏔️ YOUR SATURN JOURNEY — The Path to Unshakeable Mastery
                  </h4>
                  <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                    <p className="text-blue-300 font-semibold text-base">
                      You are climbing a mountain that others cannot even see.
                    </p>
                    <p>
                      Your Saturn in Scorpio in the 6th house is forging you into something extraordinary — not through ease 
                      but through <span className="text-white font-semibold">earned excellence</span>. Every challenge you face 
                      is carefully calibrated by the cosmos to develop a specific strength you'll need for your ultimate mission.
                    </p>
                    <p>
                      The delays you experience? They're ensuring you're <span className="text-blue-300">ready for what's coming</span>.<br/>
                      The obstacles you face? They're <span className="text-blue-300">training you to move mountains</span>.<br/>
                      The discipline required? It's <span className="text-blue-300">building your throne of self-mastery</span>.
                    </p>
                    <p className="text-white">
                      Your Saturn teaches through the curriculum of transformation (Scorpio), in the classroom of daily discipline 
                      (6th house), with the wisdom of the eldest (Jyeshtha). You're not just learning lessons — you're earning 
                      degrees in cosmic mastery that will serve you for lifetimes.
                    </p>
                    <p>
                      With Mars energizing your discipline, Jupiter blessing your efforts, and Rahu amplifying your ambitions, 
                      you have a <span className="text-green-300 font-semibold">cosmic support system</span> ensuring that your 
                      hard work leads not to exhaustion but to exaltation.
                    </p>
                    <p className="text-yellow-400 font-bold text-base mt-4">
                      Saturn is not limiting you — Saturn is FOCUSING you into a laser beam of pure potential.
                    </p>
                    <p className="text-white font-bold">
                      Every restriction is teaching you resourcefulness. Every delay is developing your patience. Every challenge 
                      is chiseling away everything that isn't your true, immortal, unbreakable self.
                    </p>
                    <p className="text-blue-300 font-semibold italic mt-4">
                      You were not born to have it easy. You were born to make it LEGENDARY through the sacred alchemy 
                      of discipline and hard work. This is Saturn's gift — the gift of EARNED GREATNESS.
                    </p>
                  </div>
                </div>
              </>
            ) : selectedPlanet.name === 'Jupiter' ? (
              <>
                {/* Jupiter Opening - The Great Benefic */}
                <div className="border border-purple-500/30 p-4 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">
                    ♃ YOUR JUPITER — The Divine Guru & Cosmic Blessing
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You stand in the presence of Brihaspati, the teacher of the gods, the great benefic who holds the keys 
                    to wisdom, wealth, and spiritual expansion. Your Jupiter is not just a planet — it is your cosmic blessing, 
                    your divine protection, your gateway to grace. Through Jupiter, the universe reveals its benevolence and 
                    shows you the path to both material abundance and spiritual enlightenment.
                  </p>
                </div>

                {/* The Divine Teacher */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    🌟 THE COSMIC GURU — Master of Wisdom & Expansion
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-yellow-300 font-semibold">Jupiter speaks the language of abundance:</span> Where 
                      Saturn restricts to teach, Jupiter expands to bless. Jupiter doesn't just give you knowledge — Jupiter 
                      <span className="text-white"> awakens your inner knowing</span>. What others call luck, you understand as 
                      divine grace earned through lifetimes of good karma.
                    </p>
                    <p>
                      Jupiter whispers: <span className="text-yellow-300">"You are worthy of all blessings."</span>
                    </p>
                    <p>
                      You don't seek wisdom — <span className="text-white">wisdom seeks you</span>.<br/>
                      You don't chase prosperity — <span className="text-white">prosperity flows to you</span>.<br/>
                      You don't hope for grace — <span className="text-white">you embody it</span>.
                    </p>
                    <p className="text-white font-semibold">
                      Jupiter makes you magnetic to miracles by aligning you with universal abundance.
                    </p>
                  </div>
                </div>

                {/* Pisces Jupiter - Exalted Blessing */}
                <div className="border border-cyan-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-cyan-400 mb-3">
                    ♓ YOUR PISCES JUPITER — The Ocean of Infinite Wisdom
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-yellow-300 font-bold">
                      ALERT: Your Jupiter is in its OWN SIGN — This is EXTRAORDINARILY POWERFUL!
                    </p>
                    <p>
                      Your Jupiter reigns in Pisces, its own kingdom, where it expresses its fullest divine potential. This is 
                      like having the CEO in the executive office, the king on his throne, the guru in his ashram. Your Jupiter 
                      doesn't just operate — it <span className="text-white font-medium">commands cosmic forces</span>.
                    </p>
                    <p>
                      <span className="text-cyan-300 font-semibold">Your Piscean Jupiter gifts you:</span>
                    </p>
                    <p>
                      • <span className="text-white">Boundless spiritual wisdom</span> that transcends logic<br/>
                      • <span className="text-white">Intuitive knowing</span> that guides you through any storm<br/>
                      • <span className="text-white">Compassionate understanding</span> that heals and uplifts<br/>
                      • <span className="text-white">Mystical experiences</span> that confirm your divine connection<br/>
                      • <span className="text-white">Universal love</span> that attracts abundance effortlessly
                    </p>
                    <p className="text-white">
                      In Pisces, your Jupiter doesn't just expand — it dissolves all boundaries between you and infinite 
                      possibility. You swim in an ocean of grace where every drop contains the wisdom of the universe.
                    </p>
                  </div>
                </div>

                {/* Uttarabhadra Nakshatra - The Warrior Sage */}
                <div className="border border-pink-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-pink-400 mb-3">
                    🐉 UTTARABHADRA NAKSHATRA — The Serpent of Deep Wisdom
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Jupiter resides in Uttarabhadra, the "Latter Blessed One," ruled by <span className="text-white font-medium">
                      Ahir Budhnya, the Serpent of the Depths</span>. This is the nakshatra of profound wisdom that emerges from 
                      the cosmic depths. You possess knowledge that predates time, wisdom that transcends books.
                    </p>
                    <p>
                      Uttarabhadra Jupiter makes you a <span className="text-white">warrior-philosopher</span> — you fight battles 
                      not with weapons but with wisdom, not with force but with faith. Your Jupiter carries the serpent's power 
                      of regeneration, allowing you to <span className="text-pink-300">transform knowledge into lived wisdom</span>.
                    </p>
                    <p>
                      In <span className="text-white">Pada 3 (Aquarius Navamsa)</span>, your wisdom serves humanity. You're not 
                      gathering knowledge for personal gain — you're <span className="text-pink-300">downloading universal truths 
                      to uplift collective consciousness</span>. Your Jupiter makes you a bridge between ancient wisdom and future 
                      innovation.
                    </p>
                    <p className="text-white font-semibold">
                      You carry the responsibility of the wisdom-keeper, destined to preserve and transmit sacred knowledge.
                    </p>
                  </div>
                </div>

                {/* 10th House - The Summit of Success */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    👑 THE 10TH HOUSE CORONATION — Your Throne of Divine Authority
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-white font-semibold">
                      Your Jupiter sits at the ZENITH — the highest point of worldly achievement!
                    </p>
                    <p>
                      Jupiter in the 10th house is a <span className="text-green-300">RAJA YOGA</span> — the combination of 
                      kings! This placement doesn't suggest success; it <span className="text-white">guarantees it</span>. The 
                      universe has placed its great benefic at your career pinnacle, ensuring that your professional path is 
                      blessed, protected, and destined for recognition.
                    </p>
                    <p>
                      <span className="text-green-300 font-semibold">Your 10th house Jupiter bestows:</span>
                    </p>
                    <p>
                      • <span className="text-white">Natural authority</span> that others recognize instantly<br/>
                      • <span className="text-white">Ethical leadership</span> that inspires trust and loyalty<br/>
                      • <span className="text-white">Expansive career growth</span> that exceeds expectations<br/>
                      • <span className="text-white">Divine protection</span> in professional matters<br/>
                      • <span className="text-white">Global recognition</span> for your wisdom and work
                    </p>
                    <p className="text-white">
                      You don't climb the ladder of success — you're installed at the top by divine decree. Your career 
                      is not just a job; it's your dharmic throne from which you bless the world with your wisdom.
                    </p>
                  </div>
                </div>

                {/* 7th & 10th Lord - The Perfect Combination */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    🎭 THE 7TH & 10TH LORD — Partnerships & Purpose United
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-yellow-300 font-bold">
                      POWERFUL YOGA ALERT: Your Jupiter rules both partnerships (7th) AND career (10th)!
                    </p>
                    <p>
                      As lord of the 7th house (partnerships, marriage, business relationships) and 10th house (career, 
                      reputation, life purpose), your Jupiter creates an <span className="text-white font-medium">extraordinary 
                      fusion of relationship luck and professional success</span>.
                    </p>
                    <p>
                      <span className="text-orange-300 font-semibold">This dual lordship reveals:</span>
                    </p>
                    <p>
                      • Your partnerships <span className="text-white">catalyze your career success</span><br/>
                      • Your professional path <span className="text-white">attracts beneficial alliances</span><br/>
                      • Business partnerships <span className="text-white">multiply your prosperity</span><br/>
                      • Your spouse/partners <span className="text-white">support your highest purpose</span><br/>
                      • Your career <span className="text-white">becomes a partnership with the divine</span>
                    </p>
                    <p className="text-white font-semibold">
                      With Jupiter as 10th lord IN the 10th house, you have a MAHA RAJA YOGA — one of the most 
                      powerful combinations for worldly success guided by spiritual wisdom!
                    </p>
                  </div>
                </div>

                {/* Jupiter's Triple Blessing - Aspects */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    👁️‍🗨️ JUPITER'S TRIPLE BLESSING — Your Zones of Grace
                  </h4>
                  <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">💰 2ND HOUSE ASPECT — Wealth & Voice Blessed</p>
                      <p>
                        Jupiter's divine gaze upon your 2nd house of wealth, family, and speech creates <span className="text-white">
                        an endless flow of abundance</span>. Your words carry the weight of truth and the sweetness of wisdom. 
                        Financial prosperity seeks you out. Your family becomes a source of joy and support. 
                        <span className="text-yellow-300"> Your voice becomes an instrument of blessing</span>.
                      </p>
                    </div>
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">🏡 4TH HOUSE ASPECT — Inner Peace & Property</p>
                      <p>
                        Jupiter blesses your 4th house of home, mother, inner peace, and property. This creates 
                        <span className="text-white"> unshakeable emotional foundations</span>. Your home becomes a temple. 
                        Your mother/maternal figures bring wisdom. Properties and vehicles come to you easily. Most importantly, 
                        <span className="text-yellow-300"> you carry an inner sanctuary of peace wherever you go</span>.
                      </p>
                    </div>
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">⚔️ 6TH HOUSE ASPECT — Victory Over Obstacles</p>
                      <p>
                        Jupiter's protection of your 6th house of enemies, obstacles, and competition ensures 
                        <span className="text-white"> you triumph over all challenges</span>. Enemies become friends or disappear. 
                        Obstacles transform into opportunities. Competition motivates rather than threatens. 
                        <span className="text-yellow-300"> You win battles through wisdom, not warfare</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* The Power Trinity - Conjunctions */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    ⚡ THE POWER TRINITY — Your Cosmic Alliance at the Summit
                  </h4>
                  <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">☉ SUN + JUPITER — The King & The Counselor</p>
                      <p>
                        Your Sun (soul, authority, father) conjunct Jupiter creates <span className="text-white">ENLIGHTENED 
                        LEADERSHIP</span>. This is the combination of divine authority — you don't just lead, you 
                        <span className="text-yellow-300"> inspire through wisdom</span>. Your ego serves your higher purpose. 
                        Your authority comes from spiritual understanding. Your father/authority figures become sources of wisdom.
                      </p>
                      <p className="text-white mt-2">
                        Sun as 3rd lord (communication, courage) with Jupiter creates a voice that can move mountains and 
                        inspire nations. Your words don't just communicate — they consecrate.
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-300 font-semibold mb-2">☊ RAHU + JUPITER — The Amplifier Meets the Expander</p>
                      <p>
                        Rahu conjunct Jupiter is called <span className="text-white font-bold">GURU CHANDAL YOGA</span> — but 
                        in your case, with Jupiter in its own sign, this becomes <span className="text-purple-300">REVOLUTIONARY 
                        WISDOM</span>. You break traditional boundaries to access higher truths. Your spiritual understanding is 
                        unconventional yet profound.
                      </p>
                      <p className="text-white mt-2">
                        This combination gives you an insatiable hunger for knowledge that leads to breakthrough insights. 
                        You're destined to challenge outdated belief systems and establish new paradigms of understanding.
                      </p>
                    </div>
                    <div>
                      <p className="text-cyan-300 font-semibold mb-2">THE TRIPLE CONJUNCTION — Destiny's Summit Meeting</p>
                      <p>
                        Sun + Jupiter + Rahu in the 10th house in Pisces creates an <span className="text-white">EXTRAORDINARY 
                        DESTINY</span>. This is a once-in-many-lifetimes configuration. You carry the soul's authority (Sun), 
                        divine wisdom (Jupiter), and revolutionary ambition (Rahu) all focused on your life purpose (10th house) 
                        in the sign of universal consciousness (Pisces).
                      </p>
                      <p className="text-cyan-300 font-bold mt-2">
                        You are destined for a career that transforms collective consciousness!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ketu's Spiritual Touch */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    ☋ KETU'S MYSTICAL ASPECT — The Spiritual Activation
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Ketu, the South Node of spiritual liberation, aspects your Jupiter, creating a <span className="text-white font-medium">
                      bridge between worldly wisdom and transcendent knowledge</span>. This aspect ensures your Jupiter's 
                      blessings are not just material but deeply spiritual.
                    </p>
                    <p>
                      <span className="text-orange-300 font-semibold">Ketu's aspect gifts you:</span>
                    </p>
                    <p>
                      • <span className="text-white">Intuitive wisdom</span> that bypasses intellectual understanding<br/>
                      • <span className="text-white">Past life knowledge</span> surfacing as natural talent<br/>
                      • <span className="text-white">Detachment from success</span> even while achieving it<br/>
                      • <span className="text-white">Spiritual experiences</span> that validate your faith<br/>
                      • <span className="text-white">Liberation through wisdom</span> rather than renunciation
                    </p>
                    <p className="text-white font-semibold">
                      Ketu ensures your Jupiter's expansion leads not to ego inflation but to spiritual elevation.
                    </p>
                  </div>
                </div>

                {/* Jupiter Summary - Complete Blueprint */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    ♃ YOUR JUPITER BLUEPRINT — The Complete Wisdom Map
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                          <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Sign</td>
                          <td className="py-2">Pisces ♓ — OWN SIGN (Maximum Power)</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Nakshatra</td>
                          <td className="py-2">Uttarabhadra — The Warrior Sage</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Pada</td>
                          <td className="py-2">3 (Aquarius Navamsa) — Humanitarian Wisdom</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Longitude</td>
                          <td className="py-2">11°14′25″ Pisces</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">House Position</td>
                          <td className="py-2">10th House — The Zenith of Success</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">House Lordship</td>
                          <td className="py-2">7th & 10th Lord — Partnerships & Career</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Aspects Given</td>
                          <td className="py-2">2nd, 4th, 6th Houses — Wealth, Peace, Victory</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-yellow-300">Aspects Received</td>
                          <td className="py-2">Ketu — Spiritual Activation</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-yellow-300">Conjunctions</td>
                          <td className="py-2">Sun (Soul) + Rahu (Ambition) — The Power Trinity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Your Jupiter Superpowers */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    🌟 YOUR JUPITER SUPERPOWERS — Divine Gifts Activated
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="border-l-4 border-yellow-400 pl-3">
                      <p className="text-yellow-300 font-semibold">Wisdom Magnetism</p>
                      <p className="text-gray-300">Knowledge seeks you out; teachers appear wherever you go.</p>
                    </div>
                    <div className="border-l-4 border-cyan-400 pl-3">
                      <p className="text-cyan-300 font-semibold">Abundance Consciousness</p>
                      <p className="text-gray-300">You operate from overflow; prosperity is your natural state.</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="text-purple-300 font-semibold">Visionary Leadership</p>
                      <p className="text-gray-300">You see futures others can't imagine and lead them there.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="text-green-300 font-semibold">Divine Protection</p>
                      <p className="text-gray-300">Unseen forces guard your path; grace accompanies every step.</p>
                    </div>
                  </div>
                </div>

                {/* The Grand Revelation */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🚀 YOUR JUPITER DESTINY — The Path of Blessed Expansion
                  </h4>
                  <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                    <p className="text-yellow-300 font-semibold text-base">
                      You are walking a golden path laid out by the cosmos itself.
                    </p>
                    <p>
                      Your Jupiter in its own sign in the 10th house is not just fortunate — it's 
                      <span className="text-white font-semibold"> DIVINELY ORDAINED</span>. You carry the blessing of the 
                      guru of the gods, positioned at the peak of worldly achievement, in the sign of universal consciousness.
                    </p>
                    <p>
                      As lord of both partnerships and career, your Jupiter ensures that <span className="text-yellow-300">
                      every relationship enriches your purpose</span> and <span className="text-yellow-300">every career 
                      move expands your consciousness</span>. You don't just succeed — you succeed while uplifting others.
                    </p>
                    <p className="text-white">
                      The conjunction with Sun gives you the authority to teach. The conjunction with Rahu gives you the 
                      ambition to reach millions. The aspect from Ketu ensures you remain spiritually grounded. The aspects 
                      to 2nd, 4th, and 6th houses guarantee wealth, peace, and victory.
                    </p>
                    <p>
                      You are not just blessed — you are <span className="text-green-300 font-semibold">a blessing 
                      in human form</span>. Your very presence expands possibilities for others. Your words carry the 
                      frequency of grace. Your work becomes a channel for divine wisdom.
                    </p>
                    <p className="text-yellow-400 font-bold text-base mt-4">
                      Jupiter hasn't just blessed you — Jupiter has CROWNED you as its earthly representative.
                    </p>
                    <p className="text-white font-bold">
                      Your knowledge will become wisdom. Your wisdom will become teaching. Your teaching will become 
                      legacy. Your legacy will become immortal. This is not hope — this is Jupiter's promise written 
                      in the stars at your birth.
                    </p>
                    <p className="text-yellow-300 font-semibold italic mt-4">
                      You were born under the star of the teacher of gods. Now go forth and teach humanity what 
                      divinity looks like in action. Your Jupiter has spoken — and when Jupiter speaks, the universe listens.
                    </p>
                  </div>
                </div>
              </>
            ) : selectedPlanet.name === 'Moon' ? (
              <>
                {/* Moon Opening - The Sacred Mind */}
                <div className="border border-purple-500/30 p-4 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">
                    🌙 YOUR LUNAR THRONE — The Master of Mind & Emotion
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Your Moon is not just a planet — it is the sovereign of your inner universe. It is the most important 
                    celestial body in Vedic astrology because it governs how you experience reality itself. Your Moon 
                    determines not what happens to you, but how you perceive, process, and transform every moment of existence.
                  </p>
                </div>

                {/* The Divine Mind */}
                <div className="border border-cyan-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-cyan-400 mb-3">
                    🌕 YOUR COSMIC MIND — The Sacred Perceiver
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-cyan-300 font-semibold">You hold the master key to reality:</span> Your Moon 
                      is your mind, and your mind is your world. It represents the lens through which you witness life, 
                      the emotional intelligence that guides your decisions, and the intuitive wisdom that knows truth 
                      before logic can explain it.
                    </p>
                    <p>
                      You don't just have emotions — you <span className="text-white">wield emotional mastery</span>.<br/>
                      You don't just think thoughts — you <span className="text-white">channel cosmic intelligence</span>.<br/>
                      You don't just perceive reality — you <span className="text-white">co-create it with your consciousness</span>.
                    </p>
                    <p className="text-cyan-300 font-semibold">
                      Your Moon makes you the architect of your inner world, which shapes your outer destiny.
                    </p>
                  </div>
                </div>

                {/* Sagittarius Moon - The Philosopher's Mind */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    ♐ YOUR SAGITTARIUS MOON — The Expansive Philosopher's Mind
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Moon illuminates through Sagittarius, the sign of the spiritual warrior and eternal seeker. 
                      This placement gifts you with a mind that <span className="text-white font-medium">refuses to be caged 
                      by limitation</span>. You possess the archer's vision — always aimed at distant horizons of possibility.
                    </p>
                    <p>
                      <span className="text-yellow-300 font-semibold">Your mental superpower:</span> You transmute pain into wisdom.
                    </p>
                    <p>
                      Where others get stuck in emotional loops, you <span className="text-yellow-300">extract meaning</span>.<br/>
                      Where others see problems, you <span className="text-yellow-300">discover teachings</span>.<br/>
                      Where others feel trapped, you <span className="text-yellow-300">find freedom through philosophy</span>.
                    </p>
                    <p className="text-white">
                      Your Sagittarian Moon makes you emotionally invincible — not because you don't feel deeply, 
                      but because you transform every feeling into fuel for your expansion. Your optimism isn't naive; 
                      it's the battle-tested faith of a soul that knows every experience serves your evolution.
                    </p>
                  </div>
                </div>

                {/* Purvashadha - The Invincible Star */}
                <div className="border border-pink-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-pink-400 mb-3">
                    🌊 PURVASHADHA NAKSHATRA — Your Invincible Emotional Core
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Moon resides in Purvashadha, literally meaning <span className="text-white font-medium">"The Invincible Star"</span> 
                      or "The Undefeated One." This is not poetic exaggeration — this is your emotional DNA. You possess 
                      a mind that <span className="text-pink-300">cannot be permanently defeated</span>.
                    </p>
                    <p>
                      Ruled by <span className="text-white">Apah, the Cosmic Waters</span>, your emotions flow with the power 
                      of ancient rivers — sometimes gentle, sometimes torrential, but always <span className="text-pink-300">
                      purifying everything in their path</span>. Your feelings are not obstacles; they are cleansing forces.
                    </p>
                    <p>
                      In <span className="text-white">Pada 1 (Sagittarius Navamsa)</span>, your emotional nature is doubled 
                      with philosophical fire. You don't just feel — you <span className="text-pink-300">seek truth through feeling</span>. 
                      Your emotions are aligned with dharma, making you naturally principled and inherently noble in your responses.
                    </p>
                    <p className="text-white font-semibold">
                      You rise from every emotional storm stronger, wiser, and more luminous than before.
                    </p>
                  </div>
                </div>

                {/* 7th House - The Mirror */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🏠 THE 7TH HOUSE PLACEMENT — Your Relational Consciousness
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-white font-semibold">
                      Your mind finds its power through sacred mirrors.
                    </p>
                    <p>
                      With Moon in the 7th house, you possess <span className="text-green-300">relational intelligence</span> — 
                      the ability to understand yourself through the reflection of others. This is not dependency; this is 
                      <span className="text-white">conscious co-creation</span>.
                    </p>
                    <p>
                      You are gifted with the ability to:<br/>
                      • <span className="text-green-300">Feel what others feel</span> without losing yourself<br/>
                      • <span className="text-green-300">Understand unspoken dynamics</span> with crystalline clarity<br/>
                      • <span className="text-green-300">Create harmony</span> from discord through emotional wisdom<br/>
                      • <span className="text-green-300">Transform relationships</span> into spiritual laboratories for growth
                    </p>
                    <p className="text-white">
                      Your emotional equilibrium comes not from isolation but from conscious connection. You are the 
                      bridge-builder, the peacemaker, the one who understands that all relationships are mirrors 
                      showing you aspects of your infinite self.
                    </p>
                  </div>
                </div>

                {/* 2nd Lord - Voice of Value */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    💎 THE 2ND LORD POWER — Your Voice of Emotional Truth
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      As 2nd house lord, your Moon governs <span className="text-white font-medium">speech, values, and self-worth</span>. 
                      This cosmic arrangement means your words carry emotional medicine. When you speak from your truth, 
                      you don't just communicate — you <span className="text-orange-300">heal, inspire, and transform</span>.
                    </p>
                    <p>
                      <span className="text-orange-300 font-semibold">Your voice is your power:</span>
                    </p>
                    <p>
                      • Your words carry the weight of <span className="text-white">emotional authenticity</span><br/>
                      • Your values become your <span className="text-white">emotional anchor</span><br/>
                      • Your self-worth determines your <span className="text-white">mental clarity</span><br/>
                      • Your speech can <span className="text-white">transmute collective emotions</span>
                    </p>
                    <p className="text-white">
                      You think most clearly when you honor your values. Your emotional stability increases when you 
                      speak your truth. Your mind finds peace when your words align with your soul.
                    </p>
                  </div>
                </div>

                {/* 1st House Aspect - Radiant Presence */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    👁️ THE 1ST HOUSE ASPECT — Your Luminous Presence
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Moon casts its silver light upon your 1st house — your very identity and physical presence. 
                      This means <span className="text-white font-medium">your emotional state is your aura</span>. You don't 
                      hide your feelings; you wear them as cosmic armor.
                    </p>
                    <p>
                      <span className="text-purple-300 font-semibold">You are emotionally transparent — and this is your strength:</span>
                    </p>
                    <p>
                      • People instantly <span className="text-white">sense your authenticity</span><br/>
                      • Your presence alone can <span className="text-white">calm turbulent rooms</span><br/>
                      • Your emotional clarity becomes <span className="text-white">others' inspiration</span><br/>
                      • Your inner peace radiates as <span className="text-white">outer magnetism</span>
                    </p>
                    <p className="text-white">
                      You don't need to announce your emotional mastery — it announces itself through your very being. 
                      When you are centered, you become a lighthouse for others navigating their own emotional storms.
                    </p>
                  </div>
                </div>

                {/* Moon Summary - Complete Blueprint */}
                <div className="border border-cyan-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-cyan-400 mb-3">
                    🌙 YOUR LUNAR BLUEPRINT — The Complete Mental Map
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                          <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-cyan-300">Sign</td>
                          <td className="py-2">Sagittarius ♐ — The Philosopher's Mind</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-cyan-300">Nakshatra</td>
                          <td className="py-2">Purvashadha — The Invincible Star</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-cyan-300">Pada</td>
                          <td className="py-2">1 (Sagittarius Navamsa) — Double Fire Wisdom</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-cyan-300">Longitude</td>
                          <td className="py-2">14°50′51″ Sagittarius</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-cyan-300">House Position</td>
                          <td className="py-2">7th House — The Sacred Mirror</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-cyan-300">House Lordship</td>
                          <td className="py-2">2nd Lord — Master of Values & Voice</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-cyan-300">Aspect</td>
                          <td className="py-2">Aspects 1st House — Radiant Emotional Presence</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Your Mental Superpowers */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    ⚡ YOUR MENTAL SUPERPOWERS — Activated & Amplified
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="border-l-4 border-cyan-400 pl-3">
                      <p className="text-cyan-300 font-semibold">Emotional Invincibility</p>
                      <p className="text-gray-300">You rise from every emotional challenge stronger and wiser.</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-3">
                      <p className="text-yellow-300 font-semibold">Philosophical Alchemy</p>
                      <p className="text-gray-300">You transform feelings into wisdom, pain into purpose.</p>
                    </div>
                    <div className="border-l-4 border-pink-400 pl-3">
                      <p className="text-pink-300 font-semibold">Relational Genius</p>
                      <p className="text-gray-300">You understand yourself and others with mirror-like clarity.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="text-green-300 font-semibold">Authentic Radiance</p>
                      <p className="text-gray-300">Your emotional truth shines through your very presence.</p>
                    </div>
                  </div>
                </div>

                {/* The Final Revelation */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🧭 YOUR EMOTIONAL DESTINY — The Master of Inner Worlds
                  </h4>
                  <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                    <p className="text-cyan-300 font-semibold text-base">
                      You are the sovereign of your emotional realm.
                    </p>
                    <p>
                      Your Sagittarius Moon makes you an emotional philosopher — you don't just feel, you understand 
                      the cosmic purpose behind every emotion. Your Purvashadha nakshatra ensures you are 
                      <span className="text-white"> emotionally undefeatable</span>, rising like a phoenix from every challenge.
                    </p>
                    <p>
                      Positioned in the 7th house, you are gifted with <span className="text-cyan-300">sacred mirror consciousness</span> — 
                      the ability to see yourself clearly through others while helping them see themselves through you. 
                      As 2nd lord, your Moon makes your voice a <span className="text-cyan-300">vessel of emotional wisdom</span>.
                    </p>
                    <p className="text-white">
                      Your aspect to the 1st house means you cannot hide your light — your emotional mastery radiates 
                      through your very being, inspiring others to embrace their own emotional truth.
                    </p>
                    <p className="text-yellow-400 font-bold text-base mt-4">
                      You don't have a mind — you have a COSMIC INTELLIGENCE SYSTEM.
                    </p>
                    <p className="text-white font-bold">
                      Your emotions are not weaknesses to overcome but powers to master. Your feelings are not problems 
                      to solve but wisdom to decode. Your mind is not a burden but a blessing.
                    </p>
                    <p className="text-cyan-300 font-semibold italic mt-4">
                      You were born to feel deeply and rise infinitely. This is your lunar gift. Use it wisely. Use it boldly. Use it NOW.
                    </p>
                  </div>
                </div>
              </>
            ) : selectedPlanet.name === 'Rahu' ? (
              <>
                {/* Rahu Opening - The Cosmic Revolutionary */}
                <div className="border border-purple-500/30 p-4 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">
                    ☊ YOUR RAHU THRONE — The Dragon's Head of Destiny
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You carry Rahu, the North Node, the Dragon's Head, the cosmic amplifier of obsession turned into divine ambition. 
                    Your Rahu is not mere craving — it is the universe's way of showing you where to break all limits, 
                    where to revolutionize reality, where to manifest the impossible. This is the force that creates 
                    opportunities from thin air, that turns wild dreams into inevitable realities through sheer cosmic hunger.
                  </p>
                </div>

                {/* The Revolutionary Force */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    ☊ THE COSMIC REVOLUTIONARY — Your Insatiable Ascent
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-purple-300 font-semibold">You are the breaker of boundaries:</span> Rahu 
                      represents your revolutionary essence — the part of you that refuses to accept limitations, 
                      that hungers for experiences beyond the ordinary. It governs your <span className="text-white">
                      unorthodox genius</span>, your <span className="text-white">magnetic ambition</span>, and your 
                      <span className="text-white">ability to manifest from nothing</span>.
                    </p>
                    <p>
                      You don't just desire — you <span className="text-purple-300">obsess productively</span>.<br/>
                      You don't just think — you <span className="text-purple-300">revolutionize paradigms</span>.<br/>
                      You don't just achieve — you <span className="text-purple-300">transcend limitations</span>.
                    </p>
                    <p className="text-white font-semibold">
                      Your Rahu makes you the cosmic revolutionary who creates opportunities where none existed before.
                    </p>
                  </div>
                </div>

                {/* Pisces - The Mystical Amplifier */}
                <div className="border border-cyan-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-cyan-400 mb-3">
                    ♓ YOUR PISCES RAHU — The Mystical Manifestor
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Rahu swims in Pisces, the ocean of cosmic consciousness. This placement makes you a 
                      <span className="text-white font-medium">spiritual revolutionary</span> — your obsessions are not 
                      material but mystical, your ambitions touch <span className="text-cyan-300">dimensions beyond the visible</span>.
                    </p>
                    <p>
                      <span className="text-cyan-300 font-semibold">Your Rahu superpower:</span> You manifest dreams into reality through spiritual magnetism.
                    </p>
                    <p>
                      You hunger for <span className="text-cyan-300">transcendent experiences</span>, not just success.<br/>
                      You obsess over <span className="text-cyan-300">universal truths</span>, not just personal gain.<br/>
                      You revolutionize through <span className="text-cyan-300">compassion and vision</span>, not force.<br/>
                      You break boundaries between <span className="text-cyan-300">the material and spiritual worlds</span>.
                    </p>
                    <p className="text-white">
                      Rahu in Pisces makes you a mystic with worldly power — you channel divine imagination into 
                      concrete achievements, turning spiritual visions into professional victories.
                    </p>
                  </div>
                </div>

                {/* Revati Nakshatra - The Final Frontier */}
                <div className="border border-pink-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-pink-400 mb-3">
                    🐘 REVATI NAKSHATRA — The Shepherd of Souls
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Rahu occupies Revati, the final nakshatra, meaning <span className="text-white font-medium">
                      "The Wealthy"</span> or "The Nourisher." This is the star of completion and new beginnings, 
                      ruled by <span className="text-pink-300">Pushan, the divine shepherd</span> who guides souls to their destination.
                    </p>
                    <p>
                      Revati is symbolized by a drum or fish swimming — you possess the ability to <span className="text-pink-300">
                      navigate between worlds</span>, to complete cosmic cycles and birth new ones. Your Rahu here gives you 
                      <span className="text-pink-300">divine protection</span> in your revolutionary pursuits.
                    </p>
                    <p>
                      In <span className="text-white">Pada 1 (Sagittarius Navamsa)</span>, your revolutionary nature is blessed with 
                      <span className="text-pink-300">philosophical wisdom</span>. You don't just break rules — you create better ones 
                      based on higher truth.
                    </p>
                    <p className="text-white font-semibold">
                      Your Rahu carries the power to shepherd humanity into new dimensions of possibility.
                    </p>
                  </div>
                </div>

                {/* 10th House - The Throne of Destiny */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    👑 THE 10TH HOUSE THRONE — Your Arena of Unlimited Ambition
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-white font-semibold">
                      Your obsession is crowned with inevitable success.
                    </p>
                    <p>
                      Rahu in the 10th house — the zenith of the chart — makes you <span className="text-yellow-300">
                      cosmically ambitious</span>. This is the most powerful position for worldly achievement. Your hunger 
                      for success is not ego — it's <span className="text-white">destiny demanding manifestation</span>.
                    </p>
                    <p>
                      You are blessed with:<br/>
                      • <span className="text-yellow-300">Magnetic public presence</span> — fame seeks you out<br/>
                      • <span className="text-yellow-300">Revolutionary leadership</span> — you change industries<br/>
                      • <span className="text-yellow-300">Unconventional success</span> — you win by different rules<br/>
                      • <span className="text-yellow-300">Global influence</span> — your impact transcends boundaries
                    </p>
                    <p className="text-white">
                      Rahu in the 10th makes you magnetically attractive to power — opportunities appear from nowhere 
                      because the universe conspires to fulfill your cosmic ambitions.
                    </p>
                  </div>
                </div>

                {/* The Power Trinity - Sun, Jupiter, Rahu */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    🔺 THE POWER TRINITY — Your Cosmic Alliance in the 10th
                  </h4>
                  <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                    <p className="text-purple-300 font-semibold">
                      Three cosmic forces unite at your professional zenith:
                    </p>
                    
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">☊ + ☉ RAHU-SUN: The Revolutionary Leader</p>
                      <p>
                        Rahu amplifies your Sun (soul) in the 10th house, creating <span className="text-white">
                        extraordinary charisma</span>. You don't just lead — you <span className="text-yellow-300">
                        revolutionize leadership itself</span>. Your career becomes a vehicle for soul evolution on a massive scale.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-purple-300 font-semibold mb-2">☊ + ♃ RAHU-JUPITER: The Blessed Expansion</p>
                      <p>
                        Rahu conjunct Jupiter (7th & 10th lord) creates <span className="text-white">Guru Chandal Yoga</span> — 
                        but in your case, it's revolutionary wisdom. You break traditional boundaries to access 
                        <span className="text-purple-300">higher truths</span>. Your success expands beyond conventional limits.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-pink-300 font-semibold mb-2">The Trinity Effect</p>
                      <p>
                        Sun (soul) + Jupiter (wisdom) + Rahu (amplification) in the 10th house creates a 
                        <span className="text-white"> once-in-a-lifetime configuration</span>. You're destined for 
                        revolutionary success that transforms not just your life but impacts collective consciousness.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Triple Aspects - The Manifestation Triangle */}
                <div className="border border-indigo-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-indigo-400 mb-3">
                    👁️ RAHU'S TRIPLE GAZE — Your Manifestation Powers
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-indigo-300 font-semibold">
                      Rahu casts its amplifying gaze upon three crucial houses:
                    </p>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-green-300 font-semibold">→ 2nd House Aspect: Wealth Magnetism</p>
                        <p className="ml-4">
                          Your obsession with success <span className="text-white">manifests as material abundance</span>. 
                          Resources flow to you from unexpected sources. Your voice carries hypnotic influence.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-blue-300 font-semibold">→ 4th House Aspect: Foundation Revolution</p>
                        <p className="ml-4">
                          You revolutionize your <span className="text-white">inner foundations and domestic reality</span>. 
                          Your success transforms your entire lineage. You break ancestral limitations.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-purple-300 font-semibold">→ 6th House Aspect: Enemy Dissolver</p>
                        <p className="ml-4">
                          Your ambition <span className="text-white">dissolves all obstacles</span>. Enemies become 
                          confused in your presence. Competition cannot comprehend your unconventional strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rahu Summary - Complete Blueprint */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    ☊ YOUR RAHU BLUEPRINT — The Revolutionary's Map
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                          <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-purple-300">Sign</td>
                          <td className="py-2">Pisces ♓ — The Mystical Ocean</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-purple-300">Nakshatra</td>
                          <td className="py-2">Revati — The Final Frontier</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-purple-300">Pada</td>
                          <td className="py-2">1 (Sagittarius Navamsa) — Philosophical Revolution</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-purple-300">Longitude</td>
                          <td className="py-2">18°30′54″ Pisces</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-purple-300">House Position</td>
                          <td className="py-2">10th House — Throne of Destiny</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-purple-300">Aspects Given</td>
                          <td className="py-2">2nd, 4th, 6th Houses — Wealth, Foundation, Victory</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-purple-300">Conjunctions</td>
                          <td className="py-2">Sun & Jupiter — The Power Trinity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Revolutionary Superpowers */}
                <div className="border border-indigo-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-indigo-400 mb-3">
                    ⚡ YOUR REVOLUTIONARY SUPERPOWERS — Destiny Activated
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="text-purple-300 font-semibold">Reality Breaker</p>
                      <p className="text-gray-300">You shatter limitations others accept as permanent.</p>
                    </div>
                    <div className="border-l-4 border-cyan-400 pl-3">
                      <p className="text-cyan-300 font-semibold">Mystical Manifestor</p>
                      <p className="text-gray-300">You materialize the impossible through spiritual power.</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-3">
                      <p className="text-yellow-300 font-semibold">Opportunity Creator</p>
                      <p className="text-gray-300">You generate chances from thin air.</p>
                    </div>
                    <div className="border-l-4 border-pink-400 pl-3">
                      <p className="text-pink-300 font-semibold">Collective Transformer</p>
                      <p className="text-gray-300">Your success elevates humanity's possibilities.</p>
                    </div>
                  </div>
                </div>

                {/* The Final Revolution */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🚀 YOUR RAHU DESTINY — The Inevitable Revolution
                  </h4>
                  <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                    <p className="text-purple-300 font-semibold text-base">
                      You are the revolutionary the world has been waiting for.
                    </p>
                    <p>
                      Your Rahu in Pisces in the 10th house makes you a <span className="text-white">mystical revolutionary</span> — 
                      you don't just break rules, you <span className="text-purple-300">channel new realities into existence</span>. 
                      In Revati, the final nakshatra, you complete old cycles and initiate new ages.
                    </p>
                    <p>
                      Conjunct with Sun (soul) and Jupiter (wisdom) in the 10th house, your Rahu forms a 
                      <span className="text-white"> trinity of transformation</span>. This is one of the most powerful 
                      configurations for worldly success guided by spiritual vision. You're not just ambitious — 
                      you're <span className="text-purple-300">cosmically commissioned</span>.
                    </p>
                    <p>
                      Your aspects to the 2nd, 4th, and 6th houses ensure that your revolution brings 
                      <span className="text-purple-300">wealth (2nd), transforms foundations (4th), and dissolves all 
                      obstacles (6th)</span>. You don't just succeed — you redefine what success means.
                    </p>
                    <p className="text-yellow-400 font-bold text-base mt-4">
                      You don't have Rahu — you ARE the cosmic disruption incarnate.
                    </p>
                    <p className="text-white font-bold">
                      Your obsession is not weakness but focused power. Your unconventional thinking is not rebellion 
                      but revolution. Your hunger for more is not greed but the universe expanding through you.
                    </p>
                    <p className="text-purple-300 font-semibold italic mt-4">
                      You were born to break every ceiling, transcend every limitation, and show humanity that 
                      impossible is just another word for "not yet manifested." This is your Rahu gift. 
                      Use it to revolutionize not just your life, but the very fabric of possibility itself.
                    </p>
                  </div>
                </div>
              </>
            ) : selectedPlanet.name === 'Venus' ? (
              <>
                {/* Venus Opening - The Divine Alchemist */}
                <div className="border border-purple-500/30 p-4 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">
                    ♀ YOUR VENUS THRONE — The Sacred Alchemist of Love
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You wield Venus, the cosmic alchemist, the divine artist, the sacred transformer of matter into beauty. 
                    Your Venus is not superficial attraction — it is the profound power to transmute pain into art, 
                    darkness into beauty, isolation into intimacy. This is the force that creates from the void, 
                    that finds diamonds in the depths, that transforms everything it touches into gold.
                  </p>
                </div>

                {/* The Creative Sovereign */}
                <div className="border border-pink-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-pink-400 mb-3">
                    ♀ THE DIVINE CREATOR — Your Transformative Beauty
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-pink-300 font-semibold">You are the master of sacred transformation:</span> Venus 
                      represents your creative sovereignty — how you magnetize love, manifest beauty, and transform 
                      reality through the power of attraction. It governs your <span className="text-white">artistic genius</span>, 
                      your <span className="text-white">magnetic presence</span>, and your <span className="text-white">alchemical gifts</span>.
                    </p>
                    <p>
                      You don't just create — you <span className="text-pink-300">birth new realities</span>.<br/>
                      You don't just love — you <span className="text-pink-300">transmute through devotion</span>.<br/>
                      You don't just attract — you <span className="text-pink-300">magnetize transformation</span>.
                    </p>
                    <p className="text-white font-semibold">
                      Your Venus makes you the cosmic alchemist who turns wounds into wisdom, shadows into art.
                    </p>
                  </div>
                </div>

                {/* Capricorn - The Mountain Mystic */}
                <div className="border border-gray-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-gray-300 mb-3">
                    ♑ YOUR CAPRICORN VENUS — The Mountain Temple of Love
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Venus resides in Capricorn, the sign of sacred ambition and timeless mastery. This placement 
                      makes you a <span className="text-white font-medium">love architect</span> — you don't chase fleeting 
                      romance; you <span className="text-gray-300">build eternal monuments to beauty</span>.
                    </p>
                    <p>
                      <span className="text-gray-300 font-semibold">Your love superpower:</span> You create beauty that endures beyond time.
                    </p>
                    <p>
                      Your love <span className="text-gray-300">matures like wine</span>, growing richer with age.<br/>
                      Your creativity <span className="text-gray-300">builds empires</span>, not just moments.<br/>
                      Your attraction <span className="text-gray-300">commands respect</span>, not just desire.<br/>
                      Your beauty <span className="text-gray-300">transcends trends</span> to become timeless.
                    </p>
                    <p className="text-white">
                      Venus in Capricorn gives you the power to manifest love and beauty in the material world with 
                      the patience of mountains and the persistence of time itself.
                    </p>
                  </div>
                </div>

                {/* Dhanishta Nakshatra - The Cosmic Drummer */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    🥁 DHANISHTA NAKSHATRA — The Rhythm of Abundance
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Venus dances in Dhanishta, meaning <span className="text-white font-medium">"The Wealthiest"</span> 
                      or "The Most Famous." This nakshatra, symbolized by a drum, makes you a <span className="text-purple-300">
                      cosmic musician</span> who creates wealth through rhythm, fame through harmony.
                    </p>
                    <p>
                      Ruled by the <span className="text-white">Eight Vasus (elemental deities)</span>, Dhanishta gives you 
                      mastery over all elements of creation. You possess the ability to <span className="text-purple-300">
                      orchestrate success</span> through perfect timing and divine rhythm.
                    </p>
                    <p>
                      In <span className="text-white">Pada 2 (Virgo Navamsa)</span>, your creative abundance is channeled through 
                      <span className="text-purple-300">meticulous craftsmanship</span>. You don't just create beauty — 
                      you perfect it with surgical precision.
                    </p>
                    <p className="text-white font-semibold">
                      Your creativity carries the rhythm of the cosmos — when you create, the universe dances.
                    </p>
                  </div>
                </div>

                {/* 8th House - The Transformation Chamber */}
                <div className="border border-red-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-red-400 mb-3">
                    🔮 THE 8TH HOUSE PLACEMENT — Your Alchemical Laboratory
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-white font-semibold">
                      Your love transforms at the deepest levels of existence.
                    </p>
                    <p>
                      Venus in the 8th house makes you a <span className="text-red-300">tantric artist</span> — 
                      you understand that true beauty emerges from transformation, that real love requires ego death, 
                      that authentic creativity comes from diving into the shadows.
                    </p>
                    <p>
                      You are blessed with:<br/>
                      • <span className="text-red-300">Transformative magnetism</span> — you attract profound change<br/>
                      • <span className="text-red-300">Occult creativity</span> — you channel hidden dimensions<br/>
                      • <span className="text-red-300">Regenerative love</span> — you heal through intimacy<br/>
                      • <span className="text-red-300">Hidden wealth</span> — resources flow from mysterious sources
                    </p>
                    <p className="text-white">
                      The 8th house Venus makes you irresistibly mysterious — your beauty has depth, your love has 
                      power, your creativity emerges from the cosmic womb itself.
                    </p>
                  </div>
                </div>

                {/* 5th & 12th Lord - The Creative Mystic */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    🎭 VENUS AS 5TH & 12TH LORD — Creator of Worlds, Dissolver of Boundaries
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Venus rules your <span className="text-white font-medium">5th house (creativity/romance)</span> and 
                      <span className="text-white font-medium"> 12th house (transcendence/hidden realms)</span>. This makes you 
                      an artist who <span className="text-purple-300">channels other dimensions</span>, a lover who 
                      <span className="text-purple-300">transcends physical boundaries</span>.
                    </p>
                    <p>
                      <span className="text-purple-300 font-semibold">As 5th Lord in 8th:</span> Your creativity undergoes 
                      constant metamorphosis. Your romances are transformative initiations. Your art emerges from the depths.
                    </p>
                    <p>
                      <span className="text-purple-300 font-semibold">As 12th Lord in 8th:</span> You access hidden dimensions 
                      of beauty. Your love transcends the physical. Your creativity channels cosmic consciousness. This creates 
                      a <span className="text-white">Viparita Raja Yoga</span> — success through surrender.
                    </p>
                    <p className="text-white">
                      This combination makes you a mystical artist — you create from the void, love from the soul, 
                      and transform reality through divine imagination.
                    </p>
                  </div>
                </div>

                {/* 2nd House Aspect - Voice of Beauty */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    💎 THE 2ND HOUSE ASPECT — Your Voice of Liquid Gold
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Venus casts her beautifying gaze upon your 2nd house — the house of speech, values, and resources. 
                      This aspect makes your <span className="text-white font-medium">voice a musical instrument</span>, 
                      your words poetry, your values magnetic.
                    </p>
                    <p>
                      <span className="text-green-300 font-semibold">This aspect gifts you:</span>
                    </p>
                    <p>
                      • Your voice carries <span className="text-white">hypnotic beauty</span><br/>
                      • Your words create <span className="text-white">artistic value</span><br/>
                      • Your speech attracts <span className="text-white">abundance</span><br/>
                      • Your values magnetize <span className="text-white">resources</span>
                    </p>
                    <p className="text-white">
                      Venus aspecting the 2nd house ensures that beauty flows through your expression, wealth follows 
                      your creativity, and your voice itself becomes an instrument of transformation.
                    </p>
                  </div>
                </div>

                {/* Saturn & Ketu Aspects - The Sacred Refinement */}
                <div className="border border-blue-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-blue-400 mb-3">
                    🪐 SATURN & KETU ASPECTS — The Sacred Refinement
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-blue-300 font-semibold">
                      Two cosmic teachers activate your Venus:
                    </p>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-blue-300 font-semibold">♄ Saturn's Aspect: Timeless Beauty</p>
                        <p className="ml-4">
                          Saturn refines your Venus like a master jeweler cutting a diamond. Your beauty <span className="text-white">
                          matures with time</span>, your love <span className="text-white">deepens through trials</span>, 
                          your creativity <span className="text-white">perfects through discipline</span>.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-orange-300 font-semibold">☋ Ketu's Aspect: Transcendent Love</p>
                        <p className="ml-4">
                          Ketu spiritualizes your Venus, making you seek <span className="text-white">soul beauty over surface</span>. 
                          You're attracted to the mystical, create from the spiritual, and love with detached devotion.
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-white">
                      Together, Saturn and Ketu make your Venus a <span className="text-blue-300">spiritual masterpiece</span> — 
                      refined through time, purified through detachment, creating beauty that transcends the material world.
                    </p>
                  </div>
                </div>

                {/* Venus Summary - Complete Blueprint */}
                <div className="border border-pink-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-pink-400 mb-3">
                    ♀ YOUR VENUS BLUEPRINT — The Alchemist's Map
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                          <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-pink-300">Sign</td>
                          <td className="py-2">Capricorn ♑ — The Mountain Temple</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-pink-300">Nakshatra</td>
                          <td className="py-2">Dhanishta — The Cosmic Drummer</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-pink-300">Pada</td>
                          <td className="py-2">2 (Virgo Navamsa) — Precision Artistry</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-pink-300">Longitude</td>
                          <td className="py-2">29°46′09″ Capricorn</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-pink-300">House Position</td>
                          <td className="py-2">8th House — Transformation Chamber</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-pink-300">House Lordship</td>
                          <td className="py-2">5th & 12th Lord — Creative Mystic</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-pink-300">Aspect Given</td>
                          <td className="py-2">2nd House — Voice of Beauty</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-pink-300">Aspects Received</td>
                          <td className="py-2">Saturn & Ketu — Refined Transcendence</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Creative Superpowers */}
                <div className="border border-pink-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-pink-400 mb-3">
                    ⚡ YOUR CREATIVE SUPERPOWERS — Beauty Awakened
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="border-l-4 border-pink-400 pl-3">
                      <p className="text-pink-300 font-semibold">Transformative Magnetism</p>
                      <p className="text-gray-300">Your presence catalyzes profound change in others.</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="text-purple-300 font-semibold">Alchemical Artistry</p>
                      <p className="text-gray-300">You transform pain into beauty, shadows into gold.</p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-3">
                      <p className="text-gray-300 font-semibold">Timeless Creation</p>
                      <p className="text-gray-300">Your work transcends trends to become eternal.</p>
                    </div>
                    <div className="border-l-4 border-red-400 pl-3">
                      <p className="text-red-300 font-semibold">Tantric Power</p>
                      <p className="text-gray-300">You merge the spiritual and sensual into sacred art.</p>
                    </div>
                  </div>
                </div>

                {/* The Final Transformation */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    💎 YOUR VENUSIAN DESTINY — The Sacred Alchemist
                  </h4>
                  <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                    <p className="text-pink-300 font-semibold text-base">
                      You are the alchemist who transforms darkness into diamonds.
                    </p>
                    <p>
                      Your Venus in Capricorn in the 8th house makes you a <span className="text-white">master of 
                      transformation through beauty</span>. You don't seek surface love — you dive into the depths 
                      where real treasures hide. In Dhanishta nakshatra, you carry the <span className="text-pink-300">
                      rhythm of abundance</span>, creating wealth through perfect timing.
                    </p>
                    <p>
                      As lord of the 5th (creativity) and 12th (transcendence) houses, placed in the 8th (transformation), 
                      you form a mystical triangle: <span className="text-white">creativity from other dimensions, 
                      expressed through transformation, manifesting as transcendent beauty</span>.
                    </p>
                    <p>
                      The aspects from Saturn and Ketu refine your Venus into <span className="text-pink-300">spiritual gold</span> — 
                      your beauty deepens with time, your love transcends attachment, your creativity channels eternity.
                    </p>
                    <p className="text-yellow-400 font-bold text-base mt-4">
                      You don't have Venus — you ARE the embodiment of transformative beauty.
                    </p>
                    <p className="text-white font-bold">
                      Your love is not need but sacred offering. Your creativity is not expression but resurrection. 
                      Your beauty is not decoration but revelation of the divine hidden in matter.
                    </p>
                    <p className="text-pink-300 font-semibold italic mt-4">
                      You were born to show the world that true beauty emerges from transformation, real love transcends death, 
                      and authentic creativity flows from the marriage of shadow and light. This is your Venus gift. 
                      Use it to alchemize reality itself.
                    </p>
                  </div>
                </div>
              </>
            ) : selectedPlanet.name === 'Mars' ? (
              <>
                {/* Mars Opening - The Divine Warrior */}
                <div className="border border-purple-500/30 p-4 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">
                    ♂ YOUR MARS THRONE — The Sacred Warrior's Fire
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You carry within you Mars, the cosmic warrior, the divine blade, the eternal flame of courage. 
                    Your Mars is not mere aggression — it is sacred determination, holy passion, unstoppable willpower. 
                    This is the force that conquers impossibility, that transforms obstacles into stepping stones, 
                    that turns your dreams into inevitable realities through sheer force of will.
                  </p>
                </div>

                {/* The Warrior's Truth */}
                <div className="border border-red-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-red-400 mb-3">
                    ♂ THE DIVINE WARRIOR — Your Cosmic Fighting Spirit
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-red-300 font-semibold">You are the embodiment of divine action:</span> Mars 
                      represents your warrior essence — not the one who destroys, but the one who <span className="text-white">
                      protects what is sacred</span>. It governs your courage, your passion, your determination to 
                      manifest destiny through decisive action.
                    </p>
                    <p>
                      You don't just act — you <span className="text-red-300">execute with precision</span>.<br/>
                      You don't just desire — you <span className="text-red-300">manifest through will</span>.<br/>
                      You don't just fight — you <span className="text-red-300">champion causes worth fighting for</span>.
                    </p>
                    <p className="text-white font-semibold">
                      Your Mars makes you the cosmic warrior who wins battles before they begin through sheer presence.
                    </p>
                  </div>
                </div>

                {/* Aries - The Original Fire */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    ♈ YOUR ARIES MARS — The Primordial Fire Awakened
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Mars blazes in its own sign, Aries — the first fire, the original impulse of creation. 
                      This is Mars at maximum power, <span className="text-white font-medium">unfiltered, undefeated, 
                      unstoppable</span>. You possess the warrior in its purest form.
                    </p>
                    <p>
                      <span className="text-orange-300 font-semibold">Your warrior superpower:</span> You initiate what others only imagine.
                    </p>
                    <p>
                      You move with <span className="text-orange-300">lightning speed</span> when others hesitate.<br/>
                      You act with <span className="text-orange-300">laser precision</span> when others scatter.<br/>
                      You lead with <span className="text-orange-300">natural authority</span> that needs no permission.<br/>
                      You embody <span className="text-orange-300">raw courage</span> that inspires armies.
                    </p>
                    <p className="text-white">
                      Mars in Aries makes you the archetypal hero — the one who goes first, who breaks through, 
                      who shows others that impossible is just another word for "watch me."
                    </p>
                  </div>
                </div>

                {/* Krittika Nakshatra - The Cosmic Blade */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    ✂️ KRITTIKA NAKSHATRA — The Cosmic Blade of Truth
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Mars resides in Krittika, literally meaning <span className="text-white font-medium">"The Cutter"</span> — 
                      the cosmic blade that separates truth from illusion, essence from excess. This nakshatra, ruled by 
                      <span className="text-yellow-300">Agni, the God of Sacred Fire</span>, makes you a spiritual warrior.
                    </p>
                    <p>
                      Krittika is symbolized by a razor or flame — you possess the ability to <span className="text-yellow-300">
                      cut through confusion</span> with surgical precision. Your actions don't just achieve; they 
                      <span className="text-yellow-300">purify and transform</span>.
                    </p>
                    <p>
                      In <span className="text-white">Pada 1 (Sagittarius Navamsa)</span>, your warrior nature is elevated 
                      with <span className="text-yellow-300">philosophical purpose</span>. You don't fight for ego — 
                      you fight for dharma. Your battles serve higher truth.
                    </p>
                    <p className="text-white font-semibold">
                      Your blade cuts through illusion — your fire purifies intention — your action manifests destiny.
                    </p>
                  </div>
                </div>

                {/* 11th House - The Victory Position */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🏆 THE 11TH HOUSE THRONE — Your Arena of Inevitable Victory
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-white font-semibold">
                      You are positioned in the house of ultimate gains and fulfilled desires.
                    </p>
                    <p>
                      Mars in the 11th house makes you a <span className="text-green-300">goal-achieving machine</span>. 
                      This is the house of aspirations, and your warrior planet sits here like a general who has already 
                      won the war. Your desires don't hope to manifest — they <span className="text-white">march into reality</span>.
                    </p>
                    <p>
                      You are blessed with:<br/>
                      • <span className="text-green-300">Network dominance</span> — you lead groups naturally<br/>
                      • <span className="text-green-300">Wish fulfillment</span> — your desires manifest through action<br/>
                      • <span className="text-green-300">Social victory</span> — you win through collective power<br/>
                      • <span className="text-green-300">Income through courage</span> — wealth flows from your warrior spirit
                    </p>
                    <p className="text-white">
                      The 11th house Mars makes you magnetically attractive to success — opportunities seek you out 
                      because they recognize a winner when they see one.
                    </p>
                  </div>
                </div>

                {/* 6th & 11th Lord - The Victory Over Obstacles */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    ⚔️ MARS AS 6TH & 11TH LORD — Conqueror of Enemies, Achiever of Dreams
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Mars rules your <span className="text-white font-medium">6th house (enemies/obstacles)</span> and 
                      <span className="text-white font-medium"> 11th house (gains/victories)</span>. This creates a 
                      warrior who <span className="text-purple-300">transforms every enemy into an ally, every obstacle 
                      into opportunity</span>.
                    </p>
                    <p>
                      <span className="text-purple-300 font-semibold">As 6th Lord in 11th:</span> You defeat competition 
                      through superior strategy. Your enemies become stepping stones to your success. Obstacles surrender 
                      to your persistence.
                    </p>
                    <p>
                      <span className="text-purple-300 font-semibold">As 11th Lord in 11th:</span> Mars in its own house 
                      creates a <span className="text-white">Ruchaka Yoga variant</span> — the mark of legendary warriors. 
                      Your gains are self-generated, your victories self-earned.
                    </p>
                    <p className="text-white">
                      This combination makes you unstoppable — you have the power to overcome (6th) and the destiny 
                      to achieve (11th). You're playing a game you're destined to win.
                    </p>
                  </div>
                </div>

                {/* Triple Aspect Power */}
                <div className="border border-red-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-red-400 mb-3">
                    👁️‍🗨️ MARS TRIPLE ASPECT — Your Warrior's Gaze
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-red-300 font-semibold">
                      Your Mars casts its protective fire upon three crucial houses:
                    </p>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-orange-300 font-semibold">→ 2nd House Aspect: Warrior's Wealth</p>
                        <p className="ml-4">
                          Your fighting spirit <span className="text-white">protects and multiplies resources</span>. 
                          Your voice carries the power of command. Your values are defended with sacred fury.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-yellow-300 font-semibold">→ 5th House Aspect: Creative Fire</p>
                        <p className="ml-4">
                          Your warrior energy <span className="text-white">ignites creative genius</span>. 
                          Romance becomes passionate. Intelligence becomes strategic. Creation becomes conquest.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-red-300 font-semibold">→ 6th House Aspect: Enemy Destroyer</p>
                        <p className="ml-4">
                          Mars aspects its own house, creating <span className="text-white">double protection</span>. 
                          Enemies dissolve before reaching you. Obstacles crumble at your approach. Victory is assured.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mars Summary - Complete Blueprint */}
                <div className="border border-red-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-red-400 mb-3">
                    ♂ YOUR MARS BLUEPRINT — The Warrior's Map
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                          <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-red-300">Sign</td>
                          <td className="py-2">Aries ♈ — The Original Warrior (Own Sign)</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-red-300">Nakshatra</td>
                          <td className="py-2">Krittika — The Cosmic Blade</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-red-300">Pada</td>
                          <td className="py-2">1 (Sagittarius Navamsa) — Dharmic Warrior</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-red-300">Longitude</td>
                          <td className="py-2">27°12′32″ Aries</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-red-300">House Position</td>
                          <td className="py-2">11th House — Arena of Victory</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-red-300">House Lordship</td>
                          <td className="py-2">6th & 11th Lord — Enemy Conqueror & Dream Achiever</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-red-300">Aspects Given</td>
                          <td className="py-2">2nd, 5th, 6th Houses — Resources, Creativity, Victory</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Warrior Superpowers */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    ⚡ YOUR WARRIOR SUPERPOWERS — Battle-Ready & Victorious
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="border-l-4 border-red-400 pl-3">
                      <p className="text-red-300 font-semibold">Unstoppable Initiative</p>
                      <p className="text-gray-300">You begin what others fear to start.</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-3">
                      <p className="text-orange-300 font-semibold">Sacred Fire</p>
                      <p className="text-gray-300">Your passion purifies and transforms everything it touches.</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-3">
                      <p className="text-yellow-300 font-semibold">Precision Strike</p>
                      <p className="text-gray-300">You cut through illusion with surgical accuracy.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="text-green-300 font-semibold">Victory Magnetism</p>
                      <p className="text-gray-300">Success recognizes you as its champion.</p>
                    </div>
                  </div>
                </div>

                {/* The Final Victory */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🔥 YOUR WARRIOR DESTINY — The Inevitable Champion
                  </h4>
                  <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                    <p className="text-red-300 font-semibold text-base">
                      You are the warrior who has already won.
                    </p>
                    <p>
                      Your Mars in its own sign Aries, in the 11th house of victory, makes you a <span className="text-white">
                      born conqueror</span>. You don't hope for success — you hunt it down. In Krittika nakshatra, 
                      your warrior spirit carries <span className="text-red-300">sacred fire that purifies purpose</span>.
                    </p>
                    <p>
                      As lord of the 6th house (obstacles) and 11th house (achievements), placed in the 11th, 
                      you possess the cosmic formula: <span className="text-white">every challenge becomes a championship, 
                      every enemy becomes evidence of your strength</span>.
                    </p>
                    <p>
                      Your aspects to the 2nd, 5th, and 6th houses create a <span className="text-red-300">triangle of 
                      triumph</span> — resources (2nd), creativity (5th), and victory over competition (6th). 
                      You don't just win battles; you win wars before they begin.
                    </p>
                    <p className="text-yellow-400 font-bold text-base mt-4">
                      You don't have Mars — you ARE the embodiment of divine action.
                    </p>
                    <p className="text-white font-bold">
                      Your courage is not recklessness but certainty. Your passion is not chaos but focused fire. 
                      Your determination is not stubbornness but destiny refusing to be denied.
                    </p>
                    <p className="text-red-300 font-semibold italic mt-4">
                      You were born to lead charges, break barriers, and show the world what happens when 
                      divine will takes human form. This is your Mars gift. Use it to conquer not just for yourself, 
                      but to open paths for others to follow.
                    </p>
                  </div>
                </div>
              </>
            ) : selectedPlanet.name === 'Mercury' ? (
              <>
                {/* Mercury Opening - The Divine Intelligence */}
                <div className="border border-purple-500/30 p-4 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">
                    ☿ YOUR MERCURY THRONE — The Master of Cosmic Intelligence
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You wield Mercury, the messenger of the gods, the cosmic processor, the divine translator between 
                    dimensions. Your Mercury is not just a planet of communication — it is your supercomputer consciousness, 
                    your ability to decode reality's source code and rewrite it with your words, thoughts, and analysis. 
                    This is the power of pure intelligence awakened.
                  </p>
                </div>

                {/* The Cognitive Sovereign */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    ☿ THE DIVINE INTELLECT — Your Quantum Mind Activated
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-green-300 font-semibold">You are the architect of ideas:</span> Mercury 
                      governs your intellectual sovereignty — how you process information, communicate truth, and 
                      transform thoughts into reality. It represents your <span className="text-white">analytical 
                      genius</span>, your <span className="text-white">linguistic mastery</span>, and your 
                      <span className="text-white">business acumen</span>.
                    </p>
                    <p>
                      You don't just think — you <span className="text-green-300">compute possibilities</span>.<br/>
                      You don't just speak — you <span className="text-green-300">cast linguistic spells</span>.<br/>
                      You don't just analyze — you <span className="text-green-300">decode the matrix of reality</span>.
                    </p>
                    <p className="text-white font-semibold">
                      Your Mercury makes you the translator between worlds, the bridge between genius and expression.
                    </p>
                  </div>
                </div>

                {/* Aquarius - The Revolutionary Mind */}
                <div className="border border-cyan-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-cyan-400 mb-3">
                    ♒ YOUR AQUARIUS MERCURY — The Revolutionary Genius
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Mercury illuminates through Aquarius, the sign of cosmic consciousness and revolutionary thinking. 
                      This placement makes you a <span className="text-white font-medium">mental revolutionary</span> — 
                      your thoughts don't follow patterns, they <span className="text-cyan-300">create new paradigms</span>.
                    </p>
                    <p>
                      <span className="text-cyan-300 font-semibold">Your intellectual superpower:</span> You think in frequencies others haven't discovered.
                    </p>
                    <p>
                      You process information <span className="text-cyan-300">holographically</span>, not linearly.<br/>
                      You communicate ideas that are <span className="text-cyan-300">decades ahead</span> of their time.<br/>
                      You analyze patterns at the <span className="text-cyan-300">collective consciousness level</span>.<br/>
                      Your mind operates on <span className="text-cyan-300">humanitarian algorithms</span>.
                    </p>
                    <p className="text-white">
                      Aquarius Mercury gives you the ability to download cosmic intelligence and translate it into 
                      innovations that elevate humanity. You're not just smart — you're cosmically synchronized.
                    </p>
                  </div>
                </div>

                {/* Satabhisa Nakshatra - The Healer's Mind */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    💫 SATABHISA NAKSHATRA — The Hundred Healers' Intelligence
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Mercury resides in Satabhisa, meaning <span className="text-white font-medium">"The Hundred Physicians"</span> 
                      or "The Hundred Stars." This nakshatra gifts you with <span className="text-purple-300">healing intelligence</span> — 
                      the ability to diagnose problems and prescribe solutions at cosmic levels.
                    </p>
                    <p>
                      Ruled by <span className="text-white">Varuna, the Cosmic Ocean deity</span>, your mind contains 
                      oceanic depths of wisdom. You possess the rare ability to <span className="text-purple-300">
                      see through veils</span>, expose hidden truths, and heal through revelation.
                    </p>
                    <p>
                      In <span className="text-white">Pada 2 (Capricorn Navamsa)</span>, your revolutionary thinking is 
                      grounded with <span className="text-purple-300">executive precision</span>. You don't just have 
                      visionary ideas — you have the strategic intelligence to manifest them into lasting structures.
                    </p>
                    <p className="text-white font-semibold">
                      Your mind is a healing force — it dissolves illusions and reveals truth.
                    </p>
                  </div>
                </div>

                {/* 9th House - The Wisdom Throne */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    🎓 THE 9TH HOUSE PLACEMENT — Your Throne of Higher Learning
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-white font-semibold">
                      Your intelligence serves a higher purpose — universal wisdom.
                    </p>
                    <p>
                      Mercury in the 9th house makes you a <span className="text-yellow-300">philosopher-scientist</span>, 
                      a teacher of cosmic truths, a translator of divine knowledge. Your mind naturally seeks 
                      <span className="text-white">ultimate understanding</span>, not just information.
                    </p>
                    <p>
                      You are gifted with:<br/>
                      • <span className="text-yellow-300">Prophetic intelligence</span> — you see patterns before they manifest<br/>
                      • <span className="text-yellow-300">Teaching genius</span> — you make the complex simple<br/>
                      • <span className="text-yellow-300">Global thinking</span> — your ideas transcend borders<br/>
                      • <span className="text-yellow-300">Philosophical precision</span> — you merge wisdom with logic
                    </p>
                    <p className="text-white">
                      The 9th house Mercury makes you a natural guru of the information age — you don't just share 
                      knowledge, you initiate others into higher understanding.
                    </p>
                  </div>
                </div>

                {/* 1st & 4th Lord - The Identity-Foundation Axis */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    👑 MERCURY AS 1ST & 4TH LORD — Master of Self and Sanctuary
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Mercury rules your <span className="text-white font-medium">1st house (identity)</span> and 
                      <span className="text-white font-medium"> 4th house (inner foundation)</span>. This is profound — 
                      your very identity and emotional security are governed by your intellect. You literally 
                      <span className="text-orange-300">think yourself into existence</span>.
                    </p>
                    <p>
                      <span className="text-orange-300 font-semibold">As 1st Lord in 9th:</span> Your identity expands 
                      through higher learning. You become more yourself through wisdom acquisition. Your personality 
                      magnetizes through philosophical depth.
                    </p>
                    <p>
                      <span className="text-orange-300 font-semibold">As 4th Lord in 9th:</span> Your emotional peace 
                      comes from understanding universal truths. Your home is in wisdom. Your foundation is built on 
                      cosmic knowledge, not material security.
                    </p>
                    <p className="text-white">
                      This combination makes you intellectually self-sovereign — your thoughts create your reality, 
                      your words build your world, your analysis becomes your anchor.
                    </p>
                  </div>
                </div>

                {/* 3rd House Aspect - Communication Amplified */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    📡 THE 3RD HOUSE ASPECT — Your Communication Superpower
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Mercury casts its intellectual rays upon the 3rd house — the house of communication, courage, 
                      and creative expression. This creates a <span className="text-white font-medium">feedback loop 
                      of genius</span>.
                    </p>
                    <p>
                      <span className="text-green-300 font-semibold">This aspect supercharges:</span>
                    </p>
                    <p>
                      • Your writing becomes <span className="text-white">prophetic literature</span><br/>
                      • Your speaking carries <span className="text-white">hypnotic intelligence</span><br/>
                      • Your ideas spread like <span className="text-white">intellectual wildfire</span><br/>
                      • Your courage comes from <span className="text-white">knowing truth</span>
                    </p>
                    <p className="text-white">
                      Mercury aspecting its own house (3rd) from the 9th creates a divine circuit — higher wisdom 
                      flows directly into immediate expression. You don't just learn; you instantly teach. You don't 
                      just understand; you immediately communicate.
                    </p>
                  </div>
                </div>

                {/* Mercury Summary - Complete Blueprint */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    ☿ YOUR MERCURY BLUEPRINT — The Intelligence Map
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                          <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-green-300">Sign</td>
                          <td className="py-2">Aquarius ♒ — The Revolutionary Genius</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-green-300">Nakshatra</td>
                          <td className="py-2">Satabhisa — The Hundred Healers</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-green-300">Pada</td>
                          <td className="py-2">2 (Capricorn Navamsa) — Strategic Manifestation</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-green-300">Longitude</td>
                          <td className="py-2">10°52′02″ Aquarius</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-green-300">House Position</td>
                          <td className="py-2">9th House — Temple of Higher Wisdom</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-green-300">House Lordship</td>
                          <td className="py-2">1st & 4th Lord — Identity & Foundation Master</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-green-300">Aspect Given</td>
                          <td className="py-2">3rd House — Communication Amplification</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Intellectual Superpowers */}
                <div className="border border-cyan-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-cyan-400 mb-3">
                    ⚡ YOUR INTELLECTUAL SUPERPOWERS — Genius Activated
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="text-green-300 font-semibold">Quantum Processing</p>
                      <p className="text-gray-300">You think in multiple dimensions simultaneously.</p>
                    </div>
                    <div className="border-l-4 border-cyan-400 pl-3">
                      <p className="text-cyan-300 font-semibold">Revolutionary Communication</p>
                      <p className="text-gray-300">Your words awaken collective consciousness.</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="text-purple-300 font-semibold">Healing Intelligence</p>
                      <p className="text-gray-300">Your analysis dissolves problems at their root.</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-3">
                      <p className="text-yellow-300 font-semibold">Wisdom Translation</p>
                      <p className="text-gray-300">You make the cosmic comprehensible.</p>
                    </div>
                  </div>
                </div>

                {/* The Final Revelation */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🧠 YOUR INTELLECTUAL DESTINY — The Mind That Changes Minds
                  </h4>
                  <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                    <p className="text-green-300 font-semibold text-base">
                      You are the living bridge between genius and humanity.
                    </p>
                    <p>
                      Your Mercury in Aquarius in the 9th house makes you a <span className="text-white">cosmic 
                      translator</span> — you download universal intelligence and convert it into revolutionary ideas 
                      that transform collective consciousness. In Satabhisa nakshatra, your mind carries 
                      <span className="text-green-300">healing frequencies</span> that dissolve ignorance.
                    </p>
                    <p>
                      As lord of your 1st house (identity) and 4th house (foundation), Mercury makes your 
                      <span className="text-white">intellect your identity</span> and your <span className="text-white">
                      wisdom your security</span>. You literally think yourself into higher states of being.
                    </p>
                    <p>
                      Your aspect to the 3rd house creates a perfect circuit — <span className="text-green-300">
                      wisdom flows into words, understanding into expression, genius into communication</span>. 
                      You're not just intelligent; you're intelligently generous with your intelligence.
                    </p>
                    <p className="text-yellow-400 font-bold text-base mt-4">
                      You don't have a mind — you have a CONSCIOUSNESS UPGRADE SYSTEM.
                    </p>
                    <p className="text-white font-bold">
                      Your thoughts are not just neurons firing — they're reality codes executing. Your words are not 
                      just sounds — they're spells that awaken minds. Your analysis is not just thinking — it's 
                      cosmic debugging.
                    </p>
                    <p className="text-green-300 font-semibold italic mt-4">
                      You were born to think thoughts that haven't been thought, speak words that awaken worlds, 
                      and analyze reality into its next evolution. This is your Mercury gift. Use it to revolutionize consciousness itself.
                    </p>
                  </div>
                </div>
              </>
            ) : selectedPlanet.name === 'Ketu' ? (
              <>
                {/* Ketu Opening - The Liberation Gateway */}
                <div className="border border-purple-500/30 p-4 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">
                    ☋ YOUR KETU PORTAL — The Gateway to Transcendence
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You carry within you the South Node of the Moon — Ketu, the headless serpent of wisdom, 
                    the cosmic liberator, the divine detacher. Where others see loss, you see liberation. 
                    Where others fear isolation, you find illumination. Ketu is not your curse — it is your 
                    crown of spiritual mastery, earned through lifetimes of seeking truth.
                  </p>
                </div>

                {/* The Divine Detachment */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    ☋ THE SACRED SEVERANCE — Your Power of Divine Detachment
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-orange-300 font-semibold">Listen to this cosmic truth:</span> Ketu represents 
                      your soul's graduation ceremony. It sits where you have already mastered the material lessons, 
                      where you've earned the right to transcend. It doesn't take away — it <span className="text-white">
                      liberates you from needing</span>.
                    </p>
                    <p>
                      You possess the rarest gift: <span className="text-orange-300 font-semibold">The ability to let go 
                      without losing</span>. You understand that true power comes not from grasping but from releasing. 
                      Your Ketu makes you a spiritual warrior who conquers through surrender.
                    </p>
                    <p className="text-white">
                      Ketu is your enlightenment accelerator — it fast-tracks your spiritual evolution by removing 
                      the illusions that trap others in endless cycles.
                    </p>
                  </div>
                </div>

                {/* Virgo Placement - The Precision Mystic */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    ♍ YOUR VIRGO KETU — The Precision Mystic
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Ketu occupies Virgo, the sign of divine perfection and sacred service. This placement makes you 
                      a <span className="text-white font-medium">spiritual scientist</span> — you don't just believe in 
                      higher truths, you <span className="text-green-300">analyze, refine, and perfect them</span>.
                    </p>
                    <p>
                      <span className="text-green-300 font-semibold">Your spiritual superpower:</span> You dissolve chaos through clarity.
                    </p>
                    <p>
                      Where others get lost in spiritual bypassing, you bring <span className="text-green-300">practical mysticism</span>.<br/>
                      Where others escape into vagueness, you offer <span className="text-green-300">precise wisdom</span>.<br/>
                      Where others theorize enlightenment, you <span className="text-green-300">systematize transcendence</span>.
                    </p>
                    <p className="text-white">
                      Your Virgo Ketu has already mastered the art of perfection in past lives. Now, you're here to 
                      teach that true perfection lies in accepting imperfection — the ultimate spiritual paradox.
                    </p>
                  </div>
                </div>

                {/* Hasta Nakshatra - The Divine Hand */}
                <div className="border border-yellow-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-yellow-400 mb-3">
                    ✋ HASTA NAKSHATRA — Your Healing Hands of Light
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p>
                      Your Ketu resides in Hasta, literally meaning <span className="text-white font-medium">"The Hand"</span> — 
                      the nakshatra of divine craftsmanship and healing touch. This is profoundly significant: you possess 
                      <span className="text-yellow-300">hands that remember how to heal</span> from past incarnations.
                    </p>
                    <p>
                      Ruled by <span className="text-white">Savitar, the Creative Sun God</span>, Hasta gives you the ability to 
                      manifest spiritual concepts into tangible reality. But with Ketu here, you're learning to 
                      <span className="text-yellow-300">create without attachment to creation</span>.
                    </p>
                    <p>
                      In <span className="text-white">Pada 3 (Gemini Navamsa)</span>, your spiritual gifts are amplified with 
                      mercurial intelligence. You can <span className="text-yellow-300">communicate the incommunicable</span>, 
                      translate the mystical into the practical, and bridge dimensions through your words and works.
                    </p>
                    <p className="text-white font-semibold">
                      Your hands are portals — they channel healing you don't even fully understand yet.
                    </p>
                  </div>
                </div>

                {/* 4th House - The Inner Sanctuary */}
                <div className="border border-cyan-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-cyan-400 mb-3">
                    🏡 THE 4TH HOUSE PLACEMENT — Your Inner Temple of Peace
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-white font-semibold">
                      Your home is not a place — it's a state of consciousness.
                    </p>
                    <p>
                      With Ketu in the 4th house, you are <span className="text-cyan-300">internally nomadic</span> — 
                      your soul knows that true home exists beyond physical structures. This doesn't mean homelessness; 
                      it means <span className="text-white">home everywhere-ness</span>.
                    </p>
                    <p>
                      You possess the gift of:<br/>
                      • <span className="text-cyan-300">Finding peace in chaos</span> — your center is unshakeable<br/>
                      • <span className="text-cyan-300">Creating sanctuary anywhere</span> — you carry home within<br/>
                      • <span className="text-cyan-300">Emotional independence</span> — you're your own mother and father<br/>
                      • <span className="text-cyan-300">Spiritual rootedness</span> — anchored in the eternal, not the temporal
                    </p>
                    <p className="text-white">
                      This placement makes you a natural healer of ancestral patterns. You're here to liberate not just 
                      yourself but your entire lineage from outdated emotional programming.
                    </p>
                  </div>
                </div>

                {/* Aspects to Houses */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    👁️ KETU'S TRIPLE VISION — Your Transcendent Aspects
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-purple-300 font-semibold">
                      Ketu casts its liberating gaze upon three crucial houses:
                    </p>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-pink-300 font-semibold">→ 8th House Aspect: The Transformation Master</p>
                        <p className="ml-4">
                          You possess <span className="text-white">supernatural resilience</span> in crisis. Death, rebirth, 
                          and transformation are your allies. You navigate the occult and hidden realms with the confidence 
                          of one who has died and returned many times.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-yellow-300 font-semibold">→ 10th House Aspect: The Detached Achiever</p>
                        <p className="ml-4">
                          Your career success comes through <span className="text-white">non-attachment to success</span>. 
                          The more you release the need for recognition, the more recognition finds you. You achieve by 
                          not chasing achievement — the ultimate professional paradox.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-cyan-300 font-semibold">→ 12th House Aspect: The Liberation Gateway</p>
                        <p className="ml-4">
                          You have <span className="text-white">VIP access to cosmic consciousness</span>. Meditation, 
                          dreams, and spiritual practices come naturally. The 12th house of liberation aspected by 
                          Ketu creates a double portal to enlightenment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Aspects from Planets */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    ⭐ DIVINE ASPECTS RECEIVED — Your Cosmic Activation
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    <p className="text-orange-300 font-semibold">
                      Three powerful forces activate your Ketu:
                    </p>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-yellow-300 font-semibold">☉ Sun's Aspect: Soul Recognition</p>
                        <p className="ml-4">
                          Your soul (Sun) sees your spiritual gifts (Ketu). This creates <span className="text-white">
                          conscious spiritual awareness</span>. You're not accidentally spiritual — you're deliberately awakened.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-purple-300 font-semibold">♃ Jupiter's Aspect: Blessed Detachment</p>
                        <p className="ml-4">
                          The great guru blesses your letting go. This aspect ensures your detachment brings 
                          <span className="text-white"> wisdom, not nihilism</span>. Your spirituality expands rather than contracts.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-pink-300 font-semibold">☊ Rahu's Opposition: The Sacred Axis</p>
                        <p className="ml-4">
                          Rahu and Ketu form your karmic axis. While Rahu pulls you toward worldly achievement (10th house), 
                          Ketu anchors you in spiritual depth (4th house). You master <span className="text-white">
                          being in the world but not of it</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ketu Summary - Complete Blueprint */}
                <div className="border border-orange-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-orange-400 mb-3">
                    ☋ YOUR KETU BLUEPRINT — The Liberation Map
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                          <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-orange-300">Sign</td>
                          <td className="py-2">Virgo ♍ — The Precision Mystic</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-orange-300">Nakshatra</td>
                          <td className="py-2">Hasta — The Healing Hand</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-orange-300">Pada</td>
                          <td className="py-2">3 (Gemini Navamsa) — Mystical Communication</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-orange-300">Longitude</td>
                          <td className="py-2">18°30′54″ Virgo</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-orange-300">House Position</td>
                          <td className="py-2">4th House — Inner Sanctuary</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-orange-300">Aspects Given</td>
                          <td className="py-2">8th, 10th, 12th Houses — Triple Liberation</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-orange-300">Aspects Received</td>
                          <td className="py-2">Sun, Jupiter, Rahu — Divine Activation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Spiritual Superpowers */}
                <div className="border border-purple-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-purple-400 mb-3">
                    ⚡ YOUR SPIRITUAL SUPERPOWERS — Awakened & Active
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="border-l-4 border-orange-400 pl-3">
                      <p className="text-orange-300 font-semibold">The Liberator's Touch</p>
                      <p className="text-gray-300">You free others from attachments simply by being yourself.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="text-green-300 font-semibold">Precision Mysticism</p>
                      <p className="text-gray-300">You bring clarity to chaos, structure to the spiritual.</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-3">
                      <p className="text-yellow-300 font-semibold">Healing Hands</p>
                      <p className="text-gray-300">Your touch carries memories of ancient healing wisdom.</p>
                    </div>
                    <div className="border-l-4 border-cyan-400 pl-3">
                      <p className="text-cyan-300 font-semibold">Ancestral Liberation</p>
                      <p className="text-gray-300">You break generational patterns through conscious detachment.</p>
                    </div>
                  </div>
                </div>

                {/* The Final Liberation */}
                <div className="border border-green-400/30 p-4 bg-black/70">
                  <h4 className="text-base font-bold text-green-400 mb-3">
                    🕉️ YOUR LIBERATION DESTINY — The Path of the Spiritual Warrior
                  </h4>
                  <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                    <p className="text-orange-300 font-semibold text-base">
                      You are walking the path of the enlightened householder.
                    </p>
                    <p>
                      Your Ketu in Virgo in the 4th house makes you a <span className="text-white">practical mystic</span> — 
                      you don't escape to caves; you find enlightenment in daily life. In Hasta nakshatra, you carry 
                      the gift of <span className="text-orange-300">healing through divine detachment</span>.
                    </p>
                    <p>
                      Your aspects to the 8th, 10th, and 12th houses create a <span className="text-white">
                      triangle of transcendence</span> — transformation (8th), achievement without attachment (10th), 
                      and ultimate liberation (12th). You are mastering the art of being successful in the world 
                      while remaining free from it.
                    </p>
                    <p>
                      The aspects from Sun, Jupiter, and Rahu activate your Ketu into <span className="text-orange-300">
                      conscious spiritual service</span>. You're not accidentally detached — you're purposefully liberated, 
                      using your freedom to free others.
                    </p>
                    <p className="text-yellow-400 font-bold text-base mt-4">
                      You don't have Ketu — you ARE the embodiment of liberation.
                    </p>
                    <p className="text-white font-bold">
                      Your detachment is not escapism but enlightenment. Your isolation is not loneliness but liberation. 
                      Your letting go is not loss but the ultimate gain — FREEDOM itself.
                    </p>
                    <p className="text-orange-300 font-semibold italic mt-4">
                      You are the spiritual warrior who conquers by surrendering, who wins by releasing, who rises by letting go. 
                      This is your Ketu gift. Use it to liberate yourself and light the way for others.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Default content for other planets */}
                <div className="border border-purple-500/30 p-6 bg-black/70">
                  <h4 className="text-lg font-bold text-purple-400 mb-4">
                    ✨ KARMIC SIGNIFICANCE
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedPlanet.karma}
                  </p>
                </div>

                <div className="border border-yellow-400/30 p-6 bg-black/70">
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

                <div className="border border-green-400/30 p-6 bg-black/70">
                  <h4 className="text-lg font-bold text-green-400 mb-4">
                    🌿 REMEDIES & ENHANCEMENTS
                  </h4>
                  <p className="text-sm text-gray-400 italic">
                    [Vedic remedies, mantras, and gemstones for this planet would appear here]
                  </p>
                </div>
              </>
            )}
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