'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type MBTIType, type MBTIIdentity, MBTI_INFO, IDENTITY_INFO } from '@/utils/mbtiData'
import { type BigFiveScores } from '@/utils/bigFiveCalculator'
import { type SynergyInput } from '@/utils/synergyCalculator'

interface SynergyFormProps {
  onSubmit: (input: SynergyInput) => void
  isCalculating: boolean
}

const MBTI_TYPES: MBTIType[] = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
]

const IDENTITY_OPTIONS: { value: MBTIIdentity; label: string; suffix: string }[] = [
  { value: 'A', label: 'Assertive', suffix: '-A' },
  { value: 'T', label: 'Turbulent', suffix: '-T' }
]

const BIG_FIVE_TRAITS = [
  { key: 'openness', label: 'Openness', description: 'Creativity, curiosity, openness to new experiences' },
  { key: 'conscientiousness', label: 'Conscientiousness', description: 'Organization, dependability, self-discipline' },
  { key: 'extraversion', label: 'Extraversion', description: 'Sociability, assertiveness, positive emotions' },
  { key: 'agreeableness', label: 'Agreeableness', description: 'Cooperation, trust, altruism' },
  { key: 'neuroticism', label: 'Neuroticism', description: 'Emotional instability, anxiety, moodiness' }
] as const

export default function SynergyForm({ onSubmit, isCalculating }: SynergyFormProps) {
  const [step, setStep] = useState(1)
  const [birthDate, setBirthDate] = useState('')
  const [mbtiType, setMbtiType] = useState<MBTIType | ''>('')
  const [mbtiIdentity, setMbtiIdentity] = useState<MBTIIdentity | ''>('')
  const [bigFive, setBigFive] = useState<BigFiveScores>({
    openness: 50,
    conscientiousness: 50,
    extraversion: 50,
    agreeableness: 50,
    neuroticism: 50
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!birthDate || !mbtiType || !mbtiIdentity) return

    onSubmit({
      birthDate: new Date(birthDate),
      mbtiType,
      mbtiIdentity,
      bigFive
    })
  }

  const canProceedStep1 = birthDate !== ''
  const canProceedStep2 = mbtiType !== '' && mbtiIdentity !== ''
  const canSubmit = canProceedStep1 && canProceedStep2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative group bg-black backdrop-blur-sm border border-nova-purple/50 p-6 overflow-hidden"
      whileHover={{ borderColor: 'rgba(191, 90, 242, 0.6)' }}
    >
      {/* Gradient hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-nova-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <h2 className="text-xl font-bold text-nova-purple mb-6 font-mono tracking-wider">
          SYNERGY.ANALYSIS // INPUT.REQUIRED
        </h2>

      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <motion.div
              className={`w-10 h-10 flex items-center justify-center border-2 font-mono ${
                step >= s
                  ? 'border-cyber-cyan text-cyber-cyan'
                  : 'border-gray-600 text-gray-600'
              }`}
              animate={step === s ? {
                boxShadow: ['0 0 0px rgba(0, 255, 255, 0)', '0 0 15px rgba(0, 255, 255, 0.5)', '0 0 0px rgba(0, 255, 255, 0)']
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {s}
            </motion.div>
            {s < 3 && (
              <div className={`w-10 h-0.5 ${step > s ? 'bg-cyber-cyan' : 'bg-gray-600'}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {/* Step 1: Birth Date */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <label className="block text-cyber-cyan font-mono tracking-wider">
                BIRTH.DATE
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 bg-black border-2 border-nova-purple/50
                         text-white font-mono focus:border-cyber-cyan focus:outline-none
                         focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                required
              />
              <p className="text-white/80 text-sm font-mono">
                Used to calculate Western and Chinese zodiac compatibility
              </p>
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
                className="w-full py-3 bg-black border-2 border-cyber-cyan text-cyber-cyan
                         font-mono uppercase tracking-wider hover:bg-cyber-cyan hover:text-black
                         disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                PROCEED &gt;&gt;
              </button>
            </motion.div>
          )}

          {/* Step 2: MBTI */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <label className="block text-cyber-cyan font-mono tracking-wider">
                MBTI.TYPE
              </label>
              <div className="grid grid-cols-4 gap-2">
                {MBTI_TYPES.map((type) => (
                  <motion.button
                    key={type}
                    type="button"
                    onClick={() => setMbtiType(type)}
                    className={`py-3 px-2 border-2 font-mono transition-all duration-200 ${
                      mbtiType === type
                        ? 'border-cyber-cyan bg-cyber-cyan/20 text-cyber-cyan'
                        : 'border-gray-600 text-gray-400 hover:border-nova-purple hover:text-nova-purple'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {type}
                  </motion.button>
                ))}
              </div>

              {/* Identity selector - only show when base type is selected */}
              <AnimatePresence>
                {mbtiType && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 overflow-hidden"
                  >
                    <label className="block text-nova-purple font-mono tracking-wider">
                      IDENTITY.TYPE
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {IDENTITY_OPTIONS.map(({ value, label, suffix }) => (
                        <motion.button
                          key={value}
                          type="button"
                          onClick={() => setMbtiIdentity(value)}
                          className={`relative group/id p-4 border-2 font-mono text-left transition-all duration-200 overflow-hidden ${
                            mbtiIdentity === value
                              ? 'border-nova-purple bg-nova-purple/20'
                              : 'border-gray-600 hover:border-nova-purple/50'
                          }`}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-nova-purple/5 to-transparent opacity-0 group-hover/id:opacity-100 transition-opacity duration-300" />
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-lg font-bold ${mbtiIdentity === value ? 'text-nova-purple' : 'text-gray-400'}`}>
                                {mbtiType}{suffix}
                              </span>
                              <span className={`text-xs px-2 py-1 border ${
                                mbtiIdentity === value
                                  ? 'border-nova-purple text-nova-purple'
                                  : 'border-gray-600 text-gray-500'
                              }`}>
                                {suffix}
                              </span>
                            </div>
                            <span className={`text-sm ${mbtiIdentity === value ? 'text-nova-purple' : 'text-gray-500'}`}>
                              {label}
                            </span>
                            <p className="text-gray-500 text-xs mt-2 line-clamp-2">
                              {IDENTITY_INFO[value].traits.slice(0, 3).join(' • ')}
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Selected type info */}
                    {mbtiIdentity && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-4 border border-nova-purple/50 bg-nova-purple/5"
                      >
                        <p className="text-nova-purple text-sm font-bold font-mono mb-2">
                          {mbtiType}-{mbtiIdentity} • {MBTI_INFO[mbtiType].name}
                        </p>
                        <p className="text-white text-sm font-mono">
                          {IDENTITY_INFO[mbtiIdentity].description}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-gray-500 text-xs font-mono">
                Don&apos;t know your MBTI?{' '}
                <a
                  href="https://www.16personalities.com/free-personality-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-cyan hover:underline"
                >
                  Take the test at 16personalities.com
                </a>
                {' '}(includes -A/-T result)
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 bg-black border-2 border-gray-600 text-gray-400
                           font-mono uppercase tracking-wider hover:border-nova-purple
                           hover:text-nova-purple transition-all duration-300"
                >
                  &lt;&lt; BACK
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                  className="flex-1 py-3 bg-black border-2 border-cyber-cyan text-cyber-cyan
                           font-mono uppercase tracking-wider hover:bg-cyber-cyan hover:text-black
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  PROCEED &gt;&gt;
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Big Five */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <label className="block text-cyber-cyan font-mono tracking-wider">
                BIG.FIVE.TRAITS
              </label>
              <p className="text-white/80 text-sm font-mono mb-4">
                Don&apos;t know your scores?{' '}
                <a
                  href="https://www.truity.com/test/big-five-personality-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-cyan hover:underline"
                >
                  Take the Big Five test on Truity
                </a>
                , then enter your scores below.
              </p>

              <div className="space-y-5">
                {BIG_FIVE_TRAITS.map(({ key, label, description }) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-cyber-green font-mono">{label}</span>
                      <span className="text-white font-mono font-bold">{bigFive[key]}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={bigFive[key]}
                      onChange={(e) => setBigFive(prev => ({
                        ...prev,
                        [key]: parseInt(e.target.value)
                      }))}
                      className="w-full h-2 bg-gray-800 border border-gray-700 appearance-none cursor-pointer
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4
                               [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-cyber-green
                               [&::-webkit-slider-thumb]:cursor-pointer
                               [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4
                               [&::-moz-range-thumb]:bg-cyber-green [&::-moz-range-thumb]:cursor-pointer
                               [&::-moz-range-thumb]:border-0"
                    />
                    <p className="text-white/60 text-sm font-mono">{description}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 bg-black border-2 border-gray-600 text-gray-400
                           font-mono uppercase tracking-wider hover:border-nova-purple
                           hover:text-nova-purple transition-all duration-300"
                >
                  &lt;&lt; BACK
                </button>
                <motion.button
                  type="submit"
                  disabled={!canSubmit || isCalculating}
                  className="flex-1 py-3 bg-black border-2 border-cyber-cyan text-cyber-cyan
                           font-mono uppercase tracking-wider hover:bg-cyber-cyan hover:text-black
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
                           relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    animate={isCalculating ? { opacity: [1, 0.5, 1] } : {}}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    {isCalculating ? 'CALCULATING...' : 'CALCULATE.SYNERGY'}
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      </div>
    </motion.div>
  )
}
