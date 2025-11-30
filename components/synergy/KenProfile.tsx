'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { KEN_BIG_FIVE, BIG_FIVE_DETAILED, getTraitLevel } from '@/utils/bigFiveCalculator'
import { MBTI_INFO, KEN_FULL_TYPE, IDENTITY_INFO, KEN_IDENTITY, MBTI_DETAILED } from '@/utils/mbtiData'
import { ZODIAC_INFO, ZODIAC_DETAILED } from '@/utils/zodiacData'
import { CHINESE_ZODIAC_INFO, CHINESE_ZODIAC_DETAILED, ELEMENT_DETAILED, getElementName } from '@/utils/chineseZodiacData'

const kenInfo = {
  mbti: MBTI_INFO['ENFJ'],
  mbtiFullType: KEN_FULL_TYPE,
  mbtiIdentity: IDENTITY_INFO[KEN_IDENTITY],
  westernZodiac: ZODIAC_INFO['aries'],
  chineseZodiac: CHINESE_ZODIAC_INFO['rabbit'],
  chineseElement: 'fire' as const,
  bigFive: KEN_BIG_FIVE
}

const mbtiDetailed = MBTI_DETAILED['ENFJ']
const westernDetailed = ZODIAC_DETAILED['aries']
const chineseDetailed = CHINESE_ZODIAC_DETAILED['rabbit']
const elementDetailed = ELEMENT_DETAILED['fire']

const traits = [
  { key: 'openness', label: 'O', name: 'Openness' },
  { key: 'conscientiousness', label: 'C', name: 'Conscientiousness' },
  { key: 'extraversion', label: 'E', name: 'Extraversion' },
  { key: 'agreeableness', label: 'A', name: 'Agreeableness' },
  { key: 'neuroticism', label: 'N', name: 'Neuroticism' }
] as const

export default function KenProfile() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group bg-black backdrop-blur-sm border border-cyber-cyan/50 p-6 overflow-hidden"
      whileHover={{ borderColor: 'rgba(0, 255, 255, 0.6)' }}
    >
      {/* Gradient hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <h2 className="text-xl font-bold text-cyber-cyan mb-6 font-mono tracking-wider">
          OPERATOR.PROFILE // KEN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column - Personality systems */}
          <div className="space-y-4">
            {/* MBTI */}
            <motion.div
              className="relative group/card bg-black border border-nova-purple/50 p-4 overflow-hidden"
              whileHover={{ borderColor: 'rgba(147, 112, 219, 0.6)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-nova-purple/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-nova-purple font-mono tracking-wider">MBTI</span>
                  <span className="text-white font-bold font-mono text-lg">{kenInfo.mbtiFullType}</span>
                </div>
                <p className="text-white text-sm font-mono">{kenInfo.mbti.name} • {kenInfo.mbtiIdentity.label}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {kenInfo.mbti.traits.map(trait => (
                    <span key={trait} className="text-xs font-mono px-2 py-1 bg-nova-purple/20 text-nova-purple border border-nova-purple/40">
                      {trait}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => toggleSection('mbti')}
                  className="mt-4 text-nova-purple text-xs font-mono hover:text-cyber-cyan transition-colors"
                >
                  {expandedSection === 'mbti' ? '[-] COLLAPSE' : '[+] DETAILS'}
                </button>
              </div>
            </motion.div>

            {/* Western Zodiac */}
            <motion.div
              className="relative group/card bg-black border border-solar-yellow/50 p-4 overflow-hidden"
              whileHover={{ borderColor: 'rgba(255, 204, 0, 0.6)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-solar-yellow/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-solar-yellow font-mono tracking-wider">WESTERN.ZODIAC</span>
                  <span className="text-white font-bold font-mono">
                    {kenInfo.westernZodiac.symbol} {kenInfo.westernZodiac.name}
                  </span>
                </div>
                <p className="text-white text-sm font-mono capitalize">
                  {kenInfo.westernZodiac.element} • {kenInfo.westernZodiac.modality}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {kenInfo.westernZodiac.traits.map(trait => (
                    <span key={trait} className="text-xs font-mono px-2 py-1 bg-solar-yellow/20 text-solar-yellow border border-solar-yellow/40">
                      {trait}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => toggleSection('western')}
                  className="mt-4 text-solar-yellow text-xs font-mono hover:text-cyber-cyan transition-colors"
                >
                  {expandedSection === 'western' ? '[-] COLLAPSE' : '[+] DETAILS'}
                </button>
              </div>
            </motion.div>

            {/* Chinese Zodiac */}
            <motion.div
              className="relative group/card bg-black border border-alert-red/50 p-4 overflow-hidden"
              whileHover={{ borderColor: 'rgba(239, 68, 68, 0.6)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-alert-red/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-alert-red font-mono tracking-wider">CHINESE.ZODIAC</span>
                  <span className="text-white font-bold font-mono">
                    {kenInfo.chineseZodiac.emoji} {getElementName(kenInfo.chineseElement)} {kenInfo.chineseZodiac.name}
                  </span>
                </div>
                <p className="text-white text-sm font-mono">{kenInfo.chineseZodiac.trine} Trine</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {kenInfo.chineseZodiac.traits.map(trait => (
                    <span key={trait} className="text-xs font-mono px-2 py-1 bg-alert-red/20 text-alert-red border border-alert-red/40">
                      {trait}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => toggleSection('chinese')}
                  className="mt-4 text-alert-red text-xs font-mono hover:text-cyber-cyan transition-colors"
                >
                  {expandedSection === 'chinese' ? '[-] COLLAPSE' : '[+] DETAILS'}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right column - Big Five */}
          <motion.div
            className="relative group/card bg-black border border-cyber-green/50 p-4 overflow-hidden"
            whileHover={{ borderColor: 'rgba(0, 255, 136, 0.6)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-cyber-green font-mono tracking-wider">BIG.FIVE.OCEAN</span>
              </div>
              <div className="space-y-3">
                {traits.map(({ key, label }) => (
                  <div key={key} className="flex items-center gap-3">
                    <span className="text-cyber-green font-bold font-mono w-5">{label}</span>
                    <div className="flex-1 h-2 bg-gray-800 border border-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${kenInfo.bigFive[key]}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-cyber-green/60"
                      />
                    </div>
                    <span className="text-white text-sm font-mono w-10 text-right">{kenInfo.bigFive[key]}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-sm font-mono mt-4 leading-relaxed">
                Creative, organized, energetic, highly cooperative, emotionally stable
              </p>
              <button
                onClick={() => toggleSection('bigfive')}
                className="mt-4 text-cyber-green text-xs font-mono hover:text-cyber-cyan transition-colors"
              >
                {expandedSection === 'bigfive' ? '[-] COLLAPSE' : '[+] DETAILS'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Expandable Detailed Analysis Sections */}
        <AnimatePresence>
          {expandedSection === 'mbti' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-4"
            >
              <div className="bg-black backdrop-blur-sm border border-nova-purple/50 p-6">
                <h3 className="text-nova-purple font-mono text-sm mb-4 tracking-wider">
                  MBTI.PROFILE // {kenInfo.mbtiFullType}
                </h3>
                <p className="text-white font-mono text-sm mb-4">{mbtiDetailed.summary}</p>
                <ul className="space-y-2 mb-4">
                  {mbtiDetailed.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-white text-sm font-mono">
                      <span className="text-nova-purple">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-nova-purple/30 pt-4 mt-4">
                  <p className="text-nova-purple font-mono text-xs mb-2">COGNITIVE.STACK</p>
                  <p className="text-white/80 font-mono text-sm">{mbtiDetailed.cognitiveStack}</p>
                </div>
                <div className="border-t border-nova-purple/30 pt-4 mt-4">
                  <p className="text-nova-purple font-mono text-xs mb-2">IDENTITY // ASSERTIVE</p>
                  <p className="text-white font-mono text-sm mb-3">{kenInfo.mbtiIdentity.description}</p>
                  <p className="text-white/80 font-mono text-sm">{kenInfo.mbtiIdentity.workStyle}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {mbtiDetailed.professionalStrengths.map((strength, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-nova-purple/20 text-nova-purple border border-nova-purple/40">
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {expandedSection === 'western' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-4"
            >
              <div className="bg-black backdrop-blur-sm border border-solar-yellow/50 p-6">
                <h3 className="text-solar-yellow font-mono text-sm mb-4 tracking-wider">
                  ZODIAC.PROFILE // {kenInfo.westernZodiac.symbol} {kenInfo.westernZodiac.name.toUpperCase()}
                </h3>
                <p className="text-white font-mono text-sm mb-4">{westernDetailed.summary}</p>
                <ul className="space-y-2 mb-4">
                  {westernDetailed.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-white text-sm font-mono">
                      <span className="text-solar-yellow">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-solar-yellow/30 pt-4 mt-4">
                  <p className="text-solar-yellow font-mono text-xs mb-2">PROFESSIONAL.PROFILE</p>
                  <p className="text-white/80 font-mono text-sm">{westernDetailed.professionalProfile}</p>
                </div>
              </div>
            </motion.div>
          )}

          {expandedSection === 'chinese' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-4"
            >
              <div className="bg-black backdrop-blur-sm border border-alert-red/50 p-6">
                <h3 className="text-alert-red font-mono text-sm mb-4 tracking-wider">
                  CHINESE.ZODIAC // {kenInfo.chineseZodiac.emoji} {kenInfo.chineseZodiac.name.toUpperCase()}
                </h3>
                <p className="text-white font-mono text-sm mb-4">{chineseDetailed.summary}</p>
                <ul className="space-y-2 mb-4">
                  {chineseDetailed.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-white text-sm font-mono">
                      <span className="text-alert-red">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-alert-red/30 pt-4 mt-4">
                  <p className="text-alert-red font-mono text-xs mb-2">ELEMENT // FIRE</p>
                  <p className="text-white font-mono text-sm mb-2">{elementDetailed.summary}</p>
                  <p className="text-white/80 font-mono text-sm">{elementDetailed.workStyle}</p>
                </div>
                <div className="border-t border-alert-red/30 pt-4 mt-4">
                  <p className="text-alert-red font-mono text-xs mb-2">PROFESSIONAL.PROFILE</p>
                  <p className="text-white/80 font-mono text-sm">{chineseDetailed.professionalProfile}</p>
                </div>
              </div>
            </motion.div>
          )}

          {expandedSection === 'bigfive' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-4"
            >
              <div className="bg-black backdrop-blur-sm border border-cyber-green/50 p-6 space-y-6">
                <h3 className="text-cyber-green font-mono text-sm tracking-wider">BIG.FIVE.ANALYSIS</h3>
                {traits.map(({ key, name }) => {
                  const score = kenInfo.bigFive[key]
                  const level = getTraitLevel(score)
                  const traitDetail = BIG_FIVE_DETAILED[key][level]
                  return (
                    <div key={key} className="border-l-2 border-cyber-green/50 pl-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-cyber-green font-mono font-bold">
                          {name}: {score}
                        </span>
                        <span className="text-gray-500 text-xs font-mono uppercase">
                          ({level})
                        </span>
                      </div>
                      <p className="text-white text-sm font-mono mb-3">{traitDetail.summary}</p>
                      <ul className="space-y-1.5">
                        {traitDetail.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/80 text-sm font-mono">
                            <span className="text-cyber-green">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-white/60 text-sm font-mono mt-6 text-center">
          Calculate your synergy score below to see how we might work together
        </p>
      </div>
    </motion.div>
  )
}
