'use client'

import { motion } from 'framer-motion'
import { type SynergyResult } from '@/utils/synergyCalculator'
import { ZODIAC_INFO } from '@/utils/zodiacData'
import { CHINESE_ZODIAC_INFO } from '@/utils/chineseZodiacData'

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
  const levelColor = LEVEL_COLORS[result.synergyLevel.color] || 'text-gray-400 border-gray-400'
  const levelBgColor = LEVEL_BG_COLORS[result.synergyLevel.color] || 'from-gray-400/10'
  const westernInfo = ZODIAC_INFO[result.westernZodiac.sign]
  const chineseInfo = CHINESE_ZODIAC_INFO[result.chineseZodiac.animal]

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
        className={`relative group bg-black/50 border-2 ${levelColor.split(' ')[1]} p-8 text-center overflow-hidden`}
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
            <span className="text-2xl text-gray-400">%</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className={`text-2xl font-bold font-mono tracking-wider ${levelColor.split(' ')[0]}`}>
              {result.synergyLevel.label}
            </h2>
            <p className="text-gray-400 mt-2">{result.synergyLevel.description}</p>
          </motion.div>

          {/* Share buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onShare}
              className="px-4 py-2 bg-black border border-cyber-cyan text-cyber-cyan font-mono text-sm
                       hover:bg-cyber-cyan hover:text-black transition-all duration-200"
            >
              SHARE.X
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCopyLink}
              className="px-4 py-2 bg-black border border-cyber-purple text-cyber-purple font-mono text-sm
                       hover:bg-cyber-purple hover:text-black transition-all duration-200"
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
          className="relative group bg-black/50 border border-cyber-purple/30 p-4 overflow-hidden"
          whileHover={{ borderColor: 'rgba(191, 90, 242, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-cyber-purple font-mono text-sm mb-3">NOTABLE.MATCHES</h3>
            <div className="space-y-2">
              {result.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`relative group/highlight p-3 border overflow-hidden ${
                    highlight.type === 'best'
                      ? 'border-cyber-green/30 bg-cyber-green/5'
                      : 'border-solar-yellow/30 bg-solar-yellow/5'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    highlight.type === 'best' ? 'from-cyber-green/5' : 'from-solar-yellow/5'
                  } to-transparent opacity-0 group-hover/highlight:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-bold ${
                        highlight.type === 'best' ? 'text-cyber-green' : 'text-solar-yellow'
                      }`}>
                        {highlight.label}
                      </span>
                      <span className="text-gray-500 text-xs">({highlight.system})</span>
                    </div>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Breakdown by system */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* MBTI */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group bg-black/50 border border-cyber-purple/30 p-4 overflow-hidden"
          whileHover={{ scale: 1.01, borderColor: 'rgba(191, 90, 242, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-cyber-purple font-mono text-sm">MBTI // {result.mbti.fullType}</h3>
              <span className="text-white font-bold">{result.mbti.score}%</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">{result.mbti.typeName} • {result.mbti.identityLabel}</p>
            {result.mbti.specialLabel && (
              <div className="text-cyber-green text-xs font-mono mb-2">{result.mbti.specialLabel}</div>
            )}
            {/* Identity match indicator */}
            <div className={`text-xs font-mono mb-2 px-2 py-1 inline-block border ${
              result.mbti.identityMatch === 'same'
                ? 'border-cyber-cyan/40 text-cyber-cyan bg-cyber-cyan/10'
                : 'border-cyber-purple/40 text-cyber-purple bg-cyber-purple/10'
            }`}>
              {result.mbti.identityMatch === 'same' ? 'SAME IDENTITY' : 'COMPLEMENTARY IDENTITY'}
            </div>
            <p className="text-gray-500 text-xs mb-2">{result.mbti.identityDescription}</p>
            <p className="text-gray-600 text-xs">{result.mbti.description}</p>
            <div className="mt-3 space-y-1">
              <p className="text-cyber-green text-xs">+ {result.mbti.strengths[0]}</p>
              {result.mbti.challenges[0] && (
                <p className="text-solar-yellow text-xs">! {result.mbti.challenges[0]}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Big Five */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative group bg-black/50 border border-cyber-green/30 p-4 overflow-hidden"
          whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 136, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-cyber-green font-mono text-sm">BIG.FIVE</h3>
              <span className="text-white font-bold">{result.bigFive.score}%</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">{result.bigFive.summary}</p>
            <div className="space-y-1">
              {result.bigFive.traitComparisons.slice(0, 3).map(tc => (
                <div key={tc.trait} className="flex items-center gap-2 text-xs">
                  <span className="text-gray-500 w-24">{tc.traitName}</span>
                  <div className="flex-1 h-1 bg-gray-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tc.similarity}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-cyber-green/50 trait-fill"
                    />
                  </div>
                  <span className={tc.isSignificantGap ? 'text-solar-yellow' : 'text-gray-400'}>
                    {tc.similarity}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Western Zodiac */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="relative group bg-black/50 border border-solar-yellow/30 p-4 overflow-hidden"
          whileHover={{ scale: 1.01, borderColor: 'rgba(255, 204, 0, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-solar-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-solar-yellow font-mono text-sm">
                WESTERN // {westernInfo.symbol} {westernInfo.name}
              </h3>
              <span className="text-white font-bold">{result.westernZodiac.score}%</span>
            </div>
            <p className="text-gray-400 text-sm capitalize mb-2">
              {westernInfo.element} • {westernInfo.modality}
            </p>
            {result.westernZodiac.isSpecialMatch && (
              <div className="text-cyber-green text-xs font-mono mb-2">
                {result.westernZodiac.isSpecialMatch.replace('_', ' ').toUpperCase()}
              </div>
            )}
            <p className="text-gray-500 text-xs">{result.westernZodiac.description}</p>
          </div>
        </motion.div>

        {/* Chinese Zodiac */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="relative group bg-black/50 border border-alert-red/30 p-4 overflow-hidden"
          whileHover={{ scale: 1.01, borderColor: 'rgba(239, 68, 68, 0.6)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-alert-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-alert-red font-mono text-sm">
                CHINESE // {chineseInfo.emoji} {result.chineseZodiac.elementName} {chineseInfo.name}
              </h3>
              <span className="text-white font-bold">{result.chineseZodiac.score}%</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">{chineseInfo.trine} Trine</p>
            {result.chineseZodiac.specialLabel && (
              <div className={`text-xs font-mono mb-2 ${
                result.chineseZodiac.specialRelation === 'secret_friend' ||
                result.chineseZodiac.specialRelation === 'trine'
                  ? 'text-cyber-green'
                  : 'text-solar-yellow'
              }`}>
                {result.chineseZodiac.specialLabel}
              </div>
            )}
            <p className="text-gray-500 text-xs">{result.chineseZodiac.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Work Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative group bg-black/50 border border-cyber-cyan/30 p-4 overflow-hidden"
        whileHover={{ borderColor: 'rgba(0, 255, 255, 0.6)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <h3 className="text-cyber-cyan font-mono text-sm mb-3">COLLABORATION.PROTOCOL</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[...result.mbti.workTips.slice(0, 2), ...result.westernZodiac.workTips.slice(0, 1)].map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-cyber-cyan">&gt;</span>
                <p className="text-gray-400 text-sm">{tip}</p>
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
        whileHover={{ scale: 1.02, borderColor: 'rgba(191, 90, 242, 0.8)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onReset}
        className="w-full py-3 bg-black border-2 border-gray-600 text-gray-400
                 font-mono uppercase tracking-wider hover:border-cyber-purple
                 hover:text-cyber-purple transition-all duration-300"
      >
        RECALCULATE
      </motion.button>
    </motion.div>
  )
}
