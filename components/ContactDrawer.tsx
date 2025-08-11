'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { slideInFromRight, fadeIn, staggerContainer, staggerItem, easings } from '@/utils/animations'

interface ContactDrawerProps {
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

const drawerVariants: Variants = {
  hidden: { 
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 280, damping: 20 }
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.3 }
  }
}

const formFieldVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
}

export default function ContactDrawer({ isOpen: externalIsOpen, onOpenChange }: ContactDrawerProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen
  const setIsOpen = onOpenChange || setInternalIsOpen
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [setIsOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => {
      setSubmitStatus('idle')
      setIsOpen(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Enhanced Floating Contact Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: 1,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-black border-2 border-cyber-cyan 
                   shadow-neon-cyan hover:shadow-neon-purple transition-all duration-300 
                   flex items-center justify-center group overflow-hidden"
        whileHover={{ 
          scale: 1.1,
          borderColor: '#ff00ff',
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="relative"
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          <motion.span 
            className="text-2xl plasma-cyan group-hover:text-solar-yellow transition-all duration-300 
                       group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]
                       group-hover:filter group-hover:brightness-150"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ☎
          </motion.span>
          <motion.div 
            className="absolute inset-0 text-2xl plasma-cyan"
            animate={{
              scale: [1, 1.5, 2],
              opacity: [0.5, 0.2, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            ☎
          </motion.div>
        </motion.div>
        
        {/* Enhanced Tooltip */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full mb-2 px-3 py-1 bg-black border border-plasma-cyan 
                     plasma-cyan text-xs font-mono ultra-thin whitespace-nowrap 
                     pointer-events-none right-0"
        >
          ESTABLISH.CONNECTION
        </motion.div>
      </motion.button>

      {/* Enhanced Backdrop with blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            style={{
              backdropFilter: 'blur(8px) saturate(1.5)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-cyber-darker border-l-2 
                       border-cyber-cyan shadow-2xl z-50 overflow-y-auto"
            style={{
              boxShadow: '-10px 0 40px rgba(0, 255, 255, 0.3)',
            }}
          >
            {/* Enhanced Close Button */}
            <motion.button
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center 
                         border-2 border-cyber-purple text-cyber-purple hover:bg-cyber-purple 
                         hover:text-black transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl group-hover:animate-spin">×</span>
            </motion.button>

            {/* Enhanced Content */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="p-8 pt-20"
            >
              {/* Enhanced Header */}
              <motion.div 
                variants={staggerItem}
                className="mb-8"
              >
                <motion.h2 
                  className="text-3xl font-bold text-cyber-cyan mb-2"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(0, 255, 255, 0.5)',
                      '0 0 20px rgba(0, 255, 255, 0.8)',
                      '0 0 10px rgba(0, 255, 255, 0.5)',
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ESTABLISH CONNECTION
                </motion.h2>
                <motion.p 
                  variants={staggerItem}
                  className="text-gray-400 font-mono text-sm"
                >
                  {/* Initialize secure communication protocol */}
                </motion.p>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                    className="mb-6 p-4 bg-cyber-green/20 border border-cyber-green text-cyber-green"
                  >
                    <motion.p 
                      className="font-mono"
                      animate={{
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{
                        duration: 1,
                        repeat: 3
                      }}
                    >
                      CONNECTION.ESTABLISHED.SUCCESSFULLY
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Enhanced Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', label: 'IDENTIFIER', type: 'text', placeholder: 'Your designation...' },
                  { name: 'email', label: 'COMM.CHANNEL', type: 'email', placeholder: 'your.signal@cyberspace.net' },
                  { name: 'subject', label: 'TRANSMISSION.SUBJECT', type: 'text', placeholder: 'Mission briefing...' },
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    custom={index}
                    variants={formFieldVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-2"
                  >
                    <label className="block text-cyber-cyan font-mono text-sm uppercase tracking-wider">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-black border-2 border-cyber-purple/50 
                               text-white placeholder-gray-500 font-mono
                               focus:border-cyber-cyan focus:outline-none focus:shadow-neon-cyan
                               transition-all duration-300"
                      whileFocus={{
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      animate={{
                        borderColor: focusedField === field.name ? '#00ffff' : 'rgba(255, 0, 255, 0.5)',
                        boxShadow: focusedField === field.name 
                          ? '0 0 20px rgba(0, 255, 255, 0.5)' 
                          : '0 0 0px rgba(0, 255, 255, 0)'
                      }}
                      required
                    />
                  </motion.div>
                ))}

                {/* Enhanced Message Field */}
                <motion.div
                  custom={3}
                  variants={formFieldVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  <label className="block text-cyber-cyan font-mono text-sm uppercase tracking-wider">
                    DATA.PAYLOAD
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Transmit your data stream..."
                    rows={6}
                    className="w-full px-4 py-3 bg-black border-2 border-cyber-purple/50 
                             text-white placeholder-gray-500 font-mono resize-none
                             focus:border-cyber-cyan focus:outline-none focus:shadow-neon-cyan
                             transition-all duration-300"
                    animate={{
                      borderColor: focusedField === 'message' ? '#00ffff' : 'rgba(255, 0, 255, 0.5)',
                      boxShadow: focusedField === 'message' 
                        ? '0 0 20px rgba(0, 255, 255, 0.5)' 
                        : '0 0 0px rgba(0, 255, 255, 0)'
                    }}
                    required
                  />
                </motion.div>

                {/* Enhanced Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-black border-2 border-cyber-cyan text-cyber-cyan 
                           font-mono font-bold uppercase tracking-wider
                           hover:bg-cyber-cyan hover:text-black hover:shadow-neon-cyan
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    animate={isSubmitting ? {
                      opacity: [1, 0.5, 1]
                    } : {}}
                    transition={{
                      duration: 1,
                      repeat: Infinity
                    }}
                  >
                    {isSubmitting ? 'TRANSMITTING...' : 'INITIATE.TRANSMISSION'}
                  </motion.span>
                  
                  {/* Scanning effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{
                      x: '100%',
                      transition: {
                        duration: 0.8,
                        repeat: Infinity,
                        ease: 'linear'
                      }
                    }}
                  />
                </motion.button>
              </form>

              {/* Enhanced Footer */}
              <motion.div 
                variants={staggerItem}
                className="mt-8 pt-8 border-t border-cyber-purple/30"
              >
                <p className="text-gray-500 font-mono text-xs text-center">
                  ENCRYPTED.END-TO-END // QUANTUM.SECURED
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}