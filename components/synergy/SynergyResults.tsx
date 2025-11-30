'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type SynergyResult } from '@/utils/synergyCalculator'
import { ZODIAC_INFO, ZODIAC_DETAILED } from '@/utils/zodiacData'
import { CHINESE_ZODIAC_INFO, CHINESE_ZODIAC_DETAILED, ELEMENT_DETAILED } from '@/utils/chineseZodiacData'
import { BIG_FIVE_DETAILED, getTraitLevel } from '@/utils/bigFiveCalculator'
import { MBTI_DETAILED, IDENTITY_INFO } from '@/utils/mbtiData'

interface SynergyResultsProps {
  result: SynergyResult
  onShare: () => void
  onCopyLink: () => void
  onReset: () => void
}

const LEVEL_COLORS: Record<string, string> = {
  cyan: 'text-cyber-cyan border-cyber-cyan',
  green: 'text-cyber-green border-cyber-green',
  yellow: 'text-solar-yellow border-solar-yellow',
  orange: 'text-orange-400 border-orange-400',
  red: 'text-alert-red border-alert-red'
}

const LEVEL_BG_COLORS: Record<string, string> = {
  cyan: 'from-cyber-cyan/10',
  green: 'from-cyber-green/10',
  yellow: 'from-solar-yellow/10',
  orange: 'from-orange-400/10',
  red: 'from-alert-red/10'
}

export default function SynergyResults({ result, onShare, onCopyLink, onReset }: SynergyResultsProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const levelColor = LEVEL_COLORS[result.synergyLevel.color] || 'text-gray-400 border-gray-400'
  const levelBgColor = LEVEL_BG_COLORS[result.synergyLevel.color] || 'from-gray-400/10'
  const westernInfo = ZODIAC_INFO[result.westernZodiac.sign]
  const chineseInfo = CHINESE_ZODIAC_INFO[result.chineseZodiac.animal]
  const westernDetailed = ZODIAC_DETAILED[result.westernZodiac.sign]
  const chineseDetailed = CHINESE_ZODIAC_DETAILED[result.chineseZodiac.animal]
  const mbtiDetailed = MBTI_DETAILED[result.mbti.baseType]
  const identityInfo = IDENTITY_INFO[result.mbti.identity]
  const elementDetailed = ELEMENT_DETAILED[result.chineseZodiac.element]

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Main Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative group bg-black backdrop-blur-sm border-2 ${levelColor.split(' ')[1]} p-8 text-center overflow-hidden`}
        whileHover={{ borderColor: 'rgba(0, 255, 255, 0.8)' }}
      >
        {/* Gradient hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${levelBgColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="mb-4"
          >
            <span className={`text-7xl font-bold font-mono ${levelColor.split(' ')[0]} score-reveal`}>
              {result.overallScore}
            </span>
            <span className="text-2xl text-gray-400 font-mono">%</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className={`text-2xl font-bold font-mono tracking-wider ${levelColor.split(' ')[0]}`}>
              {result.synergyLevel.label}
            </h2>
            <p className="text-white mt-2 font-mono text-sm">{result.synergyLevel.description}</p>
          </motion.div>

          {/* Copy link button */}
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCopyLink}
              className="px-4 py-2 bg-black border border-nova-purple text-nova-purple font-mono text-sm
                       hover:bg-nova-purple hover:text-black transition-all duration-200"
            >
              COPY.LINK
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Highlights */}
      {result.highlights.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative group bg-black backdrop-blur-sm border border-nova-purple/50 p-6 overflow-hidden"
          whileHover={{ borderColor: 'rgba(147, 112, 219, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-nova-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-nova-purple font-mono text-sm mb-4 tracking-wider">NOTABLE.MATCHES</h3>
            <div className="space-y-3">
              {result.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`relative group/highlight p-4 border overflow-hidden ${
                    highlight.type === 'best'
                      ? 'border-cyber-green/50 bg-cyber-green/5'
                      : 'border-solar-yellow/50 bg-solar-yellow/5'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    highlight.type === 'best' ? 'from-cyber-green/5' : 'from-solar-yellow/5'
                  } to-transparent opacity-0 group-hover/highlight:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`font-mono font-bold ${
                        highlight.type === 'best' ? 'text-cyber-green' : 'text-solar-yellow'
                      }`}>
                        {highlight.label}
                      </span>
                      <span className="text-gray-500 text-xs font-mono">({highlight.system})</span>
                    </div>
                    <p className="text-white text-sm font-mono leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Breakdown by system - Now with expandable details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* MBTI */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group bg-black backdrop-blur-sm border border-nova-purple/50 p-6 overflow-hidden"
          whileHover={{ borderColor: 'rgba(147, 112, 219, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-nova-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-nova-purple font-mono tracking-wider">MBTI // {result.mbti.fullType}</h3>
              <span className="text-white font-bold font-mono text-lg">{result.mbti.score}%</span>
            </div>
            <p className="text-white font-mono text-sm mb-3">{result.mbti.typeName} • {result.mbti.identityLabel}</p>
            {result.mbti.specialLabel && (
              <div className="text-cyber-green text-sm font-mono mb-3">{result.mbti.specialLabel}</div>
            )}
            {/* Identity match indicator */}
            <div className={`text-xs font-mono mb-3 px-3 py-1.5 inline-block border ${
              result.mbti.identityMatch === 'same'
                ? 'border-cyber-cyan/50 text-cyber-cyan bg-cyber-cyan/10'
                : 'border-nova-purple/50 text-nova-purple bg-nova-purple/10'
            }`}>
              {result.mbti.identityMatch === 'same' ? 'SAME IDENTITY' : 'COMPLEMENTARY IDENTITY'}
            </div>
            <p className="text-white/80 text-sm font-mono mb-3">{result.mbti.identityDescription}</p>
            <p className="text-white text-sm font-mono leading-relaxed">{result.mbti.description}</p>
            <div className="mt-4 space-y-2">
              <p className="text-cyber-green text-sm font-mono">+ {result.mbti.strengths[0]}</p>
              {result.mbti.challenges[0] && (
                <p className="text-solar-yellow text-sm font-mono">! {result.mbti.challenges[0]}</p>
              )}
            </div>
            {/* Expand button */}
            <button
              onClick={() => toggleSection('mbti')}
              className="mt-4 text-nova-purple text-xs font-mono hover:text-cyber-cyan transition-colors"
            >
              {expandedSection === 'mbti' ? '[-] COLLAPSE.ANALYSIS' : '[+] DETAILED.ANALYSIS'}
            </button>
          </div>
        </motion.div>

        {/* Big Five */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative group bg-black backdrop-blur-sm border border-cyber-green/50 p-6 overflow-hidden"
          whileHover={{ borderColor: 'rgba(0, 255, 136, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-cyber-green font-mono tracking-wider">BIG.FIVE</h3>
              <span className="text-white font-bold font-mono text-lg">{result.bigFive.score}%</span>
            </div>
            <p className="text-white font-mono text-sm mb-4">{result.bigFive.summary}</p>
            <div className="space-y-2">
              {result.bigFive.traitComparisons.map(tc => (
                <div key={tc.trait} className="flex items-center gap-3 text-sm font-mono">
                  <span className="text-gray-400 w-28">{tc.traitName}</span>
                  <div className="flex-1 h-2 bg-gray-800 border border-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tc.similarity}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-cyber-green/60"
                    />
                  </div>
                  <span className={`w-12 text-right ${tc.isSignificantGap ? 'text-solar-yellow' : 'text-white'}`}>
                    {tc.similarity}%
                  </span>
                </div>
              ))}
            </div>
            {/* Expand button */}
            <button
              onClick={() => toggleSection('bigfive')}
              className="mt-4 text-cyber-green text-xs font-mono hover:text-cyber-cyan transition-colors"
            >
              {expandedSection === 'bigfive' ? '[-] COLLAPSE.ANALYSIS' : '[+] DETAILED.ANALYSIS'}
            </button>
          </div>
        </motion.div>

        {/* Western Zodiac */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="relative group bg-black backdrop-blur-sm border border-solar-yellow/50 p-6 overflow-hidden"
          whileHover={{ borderColor: 'rgba(255, 204, 0, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-solar-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-solar-yellow font-mono tracking-wider">
                WESTERN // {westernInfo.symbol} {westernInfo.name}
              </h3>
              <span className="text-white font-bold font-mono text-lg">{result.westernZodiac.score}%</span>
            </div>
            <p className="text-white font-mono text-sm capitalize mb-3">
              {westernInfo.element} • {westernInfo.modality}
            </p>
            {result.westernZodiac.isSpecialMatch && (
              <div className="text-cyber-green text-sm font-mono mb-3">
                {result.westernZodiac.isSpecialMatch.replace('_', ' ').toUpperCase()}
              </div>
            )}
            <p className="text-white text-sm font-mono leading-relaxed">{result.westernZodiac.description}</p>
            {/* Expand button */}
            <button
              onClick={() => toggleSection('western')}
              className="mt-4 text-solar-yellow text-xs font-mono hover:text-cyber-cyan transition-colors"
            >
              {expandedSection === 'western' ? '[-] COLLAPSE.ANALYSIS' : '[+] DETAILED.ANALYSIS'}
            </button>
          </div>
        </motion.div>

        {/* Chinese Zodiac */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="relative group bg-black backdrop-blur-sm border border-alert-red/50 p-6 overflow-hidden"
          whileHover={{ borderColor: 'rgba(239, 68, 68, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-alert-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-alert-red font-mono tracking-wider">
                CHINESE // {chineseInfo.emoji} {result.chineseZodiac.elementName} {chineseInfo.name}
              </h3>
              <span className="text-white font-bold font-mono text-lg">{result.chineseZodiac.score}%</span>
            </div>
            <p className="text-white font-mono text-sm mb-3">{chineseInfo.trine} Trine</p>
            {result.chineseZodiac.specialLabel && (
              <div className={`text-sm font-mono mb-3 ${
                result.chineseZodiac.specialRelation === 'secret_friend' ||
                result.chineseZodiac.specialRelation === 'trine'
                  ? 'text-cyber-green'
                  : 'text-solar-yellow'
              }`}>
                {result.chineseZodiac.specialLabel}
              </div>
            )}
            <p className="text-white text-sm font-mono leading-relaxed">{result.chineseZodiac.description}</p>
            {/* Expand button */}
            <button
              onClick={() => toggleSection('chinese')}
              className="mt-4 text-alert-red text-xs font-mono hover:text-cyber-cyan transition-colors"
            >
              {expandedSection === 'chinese' ? '[-] COLLAPSE.ANALYSIS' : '[+] DETAILED.ANALYSIS'}
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
            className="overflow-hidden"
          >
            <div className="bg-black backdrop-blur-sm border border-nova-purple/50 p-6">
              <h3 className="text-nova-purple font-mono text-sm mb-4 tracking-wider">
                YOUR.MBTI.PROFILE // {result.mbti.fullType}
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
                <p className="text-nova-purple font-mono text-xs mb-2">IDENTITY // {result.mbti.identity === 'A' ? 'ASSERTIVE' : 'TURBULENT'}</p>
                <p className="text-white font-mono text-sm mb-3">{identityInfo.description}</p>
                <p className="text-white/80 font-mono text-sm">{identityInfo.workStyle}</p>
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

        {expandedSection === 'bigfive' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-black backdrop-blur-sm border border-cyber-green/50 p-6 space-y-6">
              <h3 className="text-cyber-green font-mono text-sm tracking-wider">YOUR.BIG.FIVE.ANALYSIS</h3>
              {result.bigFive.traitComparisons.map((tc) => {
                const level = getTraitLevel(tc.visitorScore)
                const traitDetail = BIG_FIVE_DETAILED[tc.trait][level]
                return (
                  <div key={tc.trait} className="border-l-2 border-cyber-green/50 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyber-green font-mono font-bold">
                        {tc.traitName}: {tc.visitorScore}
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
                    <p className="text-gray-500 text-xs font-mono mt-3 italic">{tc.insight}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}

        {expandedSection === 'western' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-black backdrop-blur-sm border border-solar-yellow/50 p-6">
              <h3 className="text-solar-yellow font-mono text-sm mb-4 tracking-wider">
                YOUR.ZODIAC.PROFILE // {westernInfo.symbol} {westernInfo.name.toUpperCase()}
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
              <div className="flex flex-wrap gap-2 mt-4">
                {westernInfo.traits.map((trait, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 bg-solar-yellow/20 text-solar-yellow border border-solar-yellow/40">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {expandedSection === 'chinese' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-black backdrop-blur-sm border border-alert-red/50 p-6">
              <h3 className="text-alert-red font-mono text-sm mb-4 tracking-wider">
                YOUR.CHINESE.ZODIAC // {chineseInfo.emoji} {chineseInfo.name.toUpperCase()}
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
                <p className="text-alert-red font-mono text-xs mb-2">ELEMENT // {result.chineseZodiac.elementName.toUpperCase()}</p>
                <p className="text-white font-mono text-sm mb-2">{elementDetailed.summary}</p>
                <p className="text-white/80 font-mono text-sm">{elementDetailed.workStyle}</p>
              </div>
              <div className="border-t border-alert-red/30 pt-4 mt-4">
                <p className="text-alert-red font-mono text-xs mb-2">PROFESSIONAL.PROFILE</p>
                <p className="text-white/80 font-mono text-sm">{chineseDetailed.professionalProfile}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {chineseInfo.traits.map((trait, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 bg-alert-red/20 text-alert-red border border-alert-red/40">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Work Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative group bg-black backdrop-blur-sm border border-cyber-cyan/50 p-6 overflow-hidden"
        whileHover={{ borderColor: 'rgba(0, 255, 255, 0.6)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <h3 className="text-cyber-cyan font-mono text-sm mb-4 tracking-wider">COLLABORATION.PROTOCOL</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...result.mbti.workTips.slice(0, 2), ...result.westernZodiac.workTips.slice(0, 1)].map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-cyber-cyan font-mono">&gt;</span>
                <p className="text-white text-sm font-mono">{tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Reset button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.02, borderColor: 'rgba(147, 112, 219, 0.8)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onReset}
        className="w-full py-4 bg-black border-2 border-gray-600 text-gray-400
                 font-mono uppercase tracking-wider hover:border-nova-purple
                 hover:text-nova-purple transition-all duration-300"
      >
        RECALCULATE
      </motion.button>
    </motion.div>
  )
}
