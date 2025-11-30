'use client'

import { motion } from 'framer-motion'
import { KEN_BIG_FIVE, getTraitDescription } from '@/utils/bigFiveCalculator'
import { MBTI_INFO, KEN_FULL_TYPE, IDENTITY_INFO, KEN_IDENTITY } from '@/utils/mbtiData'
import { ZODIAC_INFO } from '@/utils/zodiacData'
import { CHINESE_ZODIAC_INFO, getElementName } from '@/utils/chineseZodiacData'

const kenInfo = {
  mbti: MBTI_INFO['ENFJ'],
  mbtiFullType: KEN_FULL_TYPE,
  mbtiIdentity: IDENTITY_INFO[KEN_IDENTITY],
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
      className="relative group bg-black/50 border border-cyber-cyan/30 p-6 overflow-hidden"
      whileHover={{ borderColor: 'rgba(0, 255, 255, 0.6)' }}
    >
      {/* Gradient hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <h2 className="text-xl font-bold text-cyber-cyan mb-4 font-mono tracking-wider">
          OPERATOR.PROFILE // KEN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column - Personality systems */}
          <div className="space-y-4">
            {/* MBTI */}
            <motion.div
              className="relative group/card border border-cyber-purple/30 p-3 overflow-hidden"
              whileHover={{ borderColor: 'rgba(191, 90, 242, 0.6)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cyber-purple text-sm font-mono">MBTI</span>
                  <span className="text-white font-bold">{kenInfo.mbtiFullType}</span>
                </div>
                <p className="text-gray-400 text-sm">{kenInfo.mbti.name} • {kenInfo.mbtiIdentity.label}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {kenInfo.mbti.traits.map(trait => (
                    <span key={trait} className="text-xs px-2 py-0.5 bg-cyber-purple/20 text-cyber-purple">
                      {trait}
                    </span>
                  ))}
                  <span className="text-xs px-2 py-0.5 bg-cyber-purple/30 text-cyber-purple border border-cyber-purple/40">
                    {kenInfo.mbtiIdentity.label}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Western Zodiac */}
            <motion.div
              className="relative group/card border border-solar-yellow/30 p-3 overflow-hidden"
              whileHover={{ borderColor: 'rgba(255, 204, 0, 0.6)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-solar-yellow/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
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
            </motion.div>

            {/* Chinese Zodiac */}
            <motion.div
              className="relative group/card border border-alert-red/30 p-3 overflow-hidden"
              whileHover={{ borderColor: 'rgba(239, 68, 68, 0.6)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-alert-red/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-alert-red text-sm font-mono">CHINESE.ZODIAC</span>
                  <span className="text-white font-bold">
                    {kenInfo.chineseZodiac.emoji} {getElementName(kenInfo.chineseElement)} {kenInfo.chineseZodiac.name}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{kenInfo.chineseZodiac.trine} Trine</p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Big Five */}
          <motion.div
            className="relative group/card border border-cyber-green/30 p-3 overflow-hidden"
            whileHover={{ borderColor: 'rgba(0, 255, 136, 0.6)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
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
          </motion.div>
        </div>

        <p className="text-gray-500 text-xs mt-4 font-mono text-center">
          Calculate your synergy score below to see how we might work together
        </p>
      </div>
    </motion.div>
  )
}
