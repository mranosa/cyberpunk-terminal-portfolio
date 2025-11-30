'use client'

import { motion } from 'framer-motion'
import { KEN_BIG_FIVE, getTraitDescription } from '@/utils/bigFiveCalculator'
import { MBTI_INFO } from '@/utils/mbtiData'
import { ZODIAC_INFO } from '@/utils/zodiacData'
import { CHINESE_ZODIAC_INFO, getElementName } from '@/utils/chineseZodiacData'

const kenInfo = {
  mbti: MBTI_INFO['ENFJ'],
  westernZodiac: ZODIAC_INFO['aries'],
  chineseZodiac: CHINESE_ZODIAC_INFO['rabbit'],
  chineseElement: 'fire' as const,
  bigFive: KEN_BIG_FIVE
}

const traits = [
  { key: 'openness', label: 'O', name: 'Openness' },
  { key: 'conscientiousness', label: 'C', name: 'Conscientiousness' },
  { key: 'extraversion', label: 'E', name: 'Extraversion' },
  { key: 'agreeableness', label: 'A', name: 'Agreeableness' },
  { key: 'neuroticism', label: 'N', name: 'Neuroticism' }
] as const

export default function KenProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/50 border border-cyber-cyan/30 p-6"
    >
      <h2 className="text-xl font-bold text-cyber-cyan mb-4 font-mono tracking-wider">
        OPERATOR.PROFILE // KEN
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column - Personality systems */}
        <div className="space-y-4">
          {/* MBTI */}
          <div className="border border-cyber-purple/30 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-cyber-purple text-sm font-mono">MBTI</span>
              <span className="text-white font-bold">{kenInfo.mbti.type}</span>
            </div>
            <p className="text-gray-400 text-sm">{kenInfo.mbti.name}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {kenInfo.mbti.traits.map(trait => (
                <span key={trait} className="text-xs px-2 py-0.5 bg-cyber-purple/20 text-cyber-purple">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Western Zodiac */}
          <div className="border border-solar-yellow/30 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-solar-yellow text-sm font-mono">WESTERN.ZODIAC</span>
              <span className="text-white font-bold">
                {kenInfo.westernZodiac.symbol} {kenInfo.westernZodiac.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm capitalize">
              {kenInfo.westernZodiac.element} • {kenInfo.westernZodiac.modality}
            </p>
          </div>

          {/* Chinese Zodiac */}
          <div className="border border-alert-red/30 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-alert-red text-sm font-mono">CHINESE.ZODIAC</span>
              <span className="text-white font-bold">
                {kenInfo.chineseZodiac.emoji} {getElementName(kenInfo.chineseElement)} {kenInfo.chineseZodiac.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{kenInfo.chineseZodiac.trine} Trine</p>
          </div>
        </div>

        {/* Right column - Big Five */}
        <div className="border border-cyber-green/30 p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-cyber-green text-sm font-mono">BIG.FIVE.OCEAN</span>
          </div>
          <div className="space-y-2">
            {traits.map(({ key, label, name }) => (
              <div key={key} className="flex items-center gap-2">
                <span className="text-cyber-green font-bold w-4">{label}</span>
                <div className="flex-1 h-2 bg-black border border-cyber-green/30">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${kenInfo.bigFive[key]}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-cyber-green/50"
                  />
                </div>
                <span className="text-gray-400 text-sm w-8 text-right">{kenInfo.bigFive[key]}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Creative, organized, energetic, highly cooperative, emotionally stable
          </p>
        </div>
      </div>

      <p className="text-gray-500 text-xs mt-4 font-mono text-center">
        Calculate your synergy score below to see how we might work together
      </p>
    </motion.div>
  )
}
