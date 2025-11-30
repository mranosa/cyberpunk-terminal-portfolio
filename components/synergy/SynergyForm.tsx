'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type MBTIType, MBTI_INFO } from '@/utils/mbtiData'
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
  const [bigFive, setBigFive] = useState<BigFiveScores>({
    openness: 50,
    conscientiousness: 50,
    extraversion: 50,
    agreeableness: 50,
    neuroticism: 50
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!birthDate || !mbtiType) return

    onSubmit({
      birthDate: new Date(birthDate),
      mbtiType,
      bigFive
    })
  }

  const canProceedStep1 = birthDate !== ''
  const canProceedStep2 = mbtiType !== ''
  const canSubmit = canProceedStep1 && canProceedStep2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-black/50 border border-cyber-purple/30 p-6"
    >
      <h2 className="text-xl font-bold text-cyber-purple mb-6 font-mono tracking-wider">
        SYNERGY.ANALYSIS // INPUT.REQUIRED
      </h2>

      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <motion.div
              className={`w-8 h-8 flex items-center justify-center border-2 font-mono text-sm ${
                step >= s
                  ? 'border-cyber-cyan text-cyber-cyan'
                  : 'border-gray-600 text-gray-600'
              }`}
              animate={step === s ? {
                boxShadow: ['0 0 0px rgba(0, 255, 255, 0)', '0 0 10px rgba(0, 255, 255, 0.5)', '0 0 0px rgba(0, 255, 255, 0)']
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {s}
            </motion.div>
            {s < 3 && (
              <div className={`w-8 h-0.5 ${step > s ? 'bg-cyber-cyan' : 'bg-gray-600'}`} />
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
              <label className="block text-cyber-cyan font-mono text-sm uppercase tracking-wider">
                BIRTH.DATE
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 bg-black border-2 border-cyber-purple/50
                         text-white font-mono focus:border-cyber-cyan focus:outline-none
                         focus:shadow-neon-cyan transition-all duration-300"
                required
              />
              <p className="text-gray-500 text-sm">
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
              <label className="block text-cyber-cyan font-mono text-sm uppercase tracking-wider">
                MBTI.TYPE
              </label>
              <div className="grid grid-cols-4 gap-2">
                {MBTI_TYPES.map((type) => (
                  <motion.button
                    key={type}
                    type="button"
                    onClick={() => setMbtiType(type)}
                    className={`py-2 px-2 border-2 font-mono text-sm transition-all duration-200 ${
                      mbtiType === type
                        ? 'border-cyber-cyan bg-cyber-cyan/20 text-cyber-cyan'
                        : 'border-gray-600 text-gray-400 hover:border-cyber-purple hover:text-cyber-purple'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {type}
                  </motion.button>
                ))}
              </div>
              {mbtiType && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-400 text-sm"
                >
                  {MBTI_INFO[mbtiType].name} - {MBTI_INFO[mbtiType].traits.join(', ')}
                </motion.p>
              )}
              <p className="text-gray-500 text-xs">
                Don&apos;t know your MBTI?{' '}
                <a
                  href="https://www.16personalities.com/free-personality-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-cyan hover:underline"
                >
                  Take the test
                </a>
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 bg-black border-2 border-gray-600 text-gray-400
                           font-mono uppercase tracking-wider hover:border-cyber-purple
                           hover:text-cyber-purple transition-all duration-300"
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
              <label className="block text-cyber-cyan font-mono text-sm uppercase tracking-wider">
                BIG.FIVE.TRAITS
              </label>
              <p className="text-gray-500 text-xs mb-4">
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

              <div className="space-y-4">
                {BIG_FIVE_TRAITS.map(({ key, label, description }) => (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-cyber-green font-mono text-sm">{label}</span>
                      <span className="text-white font-mono">{bigFive[key]}%</span>
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
                      className="w-full h-2 bg-black border border-cyber-green/30 appearance-none cursor-pointer
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4
                               [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-cyber-green
                               [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <p className="text-gray-600 text-xs">{description}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 bg-black border-2 border-gray-600 text-gray-400
                           font-mono uppercase tracking-wider hover:border-cyber-purple
                           hover:text-cyber-purple transition-all duration-300"
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
    </motion.div>
  )
}
