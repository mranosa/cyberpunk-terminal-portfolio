'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false)
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
  }, [])

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
      {/* Floating Contact Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-black border-2 border-cyber-cyan 
                   shadow-neon-cyan hover:shadow-neon-purple transition-all duration-300 
                   flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <span className="text-2xl text-cyber-cyan group-hover:text-cyber-purple transition-colors">
            ⟡
          </span>
          <div className="absolute inset-0 animate-ping text-2xl text-cyber-cyan opacity-30">
            ⟡
          </div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 px-3 py-1 bg-black border border-cyber-cyan 
                        text-cyber-cyan text-xs font-mono whitespace-nowrap opacity-0 
                        group-hover:opacity-100 transition-opacity pointer-events-none">
          ESTABLISH.CONNECTION
        </div>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-xl bg-cyber-darker border-l-2 
                       border-cyber-cyan shadow-2xl z-50 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="sticky top-0 bg-cyber-darker border-b border-cyber-cyan/30 p-6 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-cyber font-bold text-transparent bg-clip-text 
                                 bg-gradient-to-r from-cyber-purple to-cyber-pink">
                    ESTABLISH CONNECTION
                  </h2>
                  <p className="text-gray-400 font-mono text-xs mt-1">
                    PROTOCOL: SECURE_CHANNEL_v3
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 border-2 border-cyber-cyan/50 hover:border-cyber-cyan 
                             text-cyber-cyan hover:shadow-neon-cyan transition-all flex items-center 
                             justify-center text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Circuit Animation Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg className="w-full h-full">
                {[...Array(10)].map((_, i) => (
                  <line
                    key={i}
                    x1={`${i * 10}%`}
                    y1="0"
                    x2={`${i * 10}%`}
                    y2="100%"
                    stroke="cyan"
                    strokeWidth="0.5"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </svg>
            </div>

            {/* Form Content */}
            <div className="p-6 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-cyber-cyan font-mono text-sm mb-2">
                    NAME.INPUT
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-black/50 border-2 ${
                      focusedField === 'name' ? 'border-cyber-cyan shadow-neon-cyan' : 'border-cyber-cyan/30'
                    } text-white font-mono outline-none transition-all`}
                    placeholder="Enter your designation"
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-cyan animate-pulse" />
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-cyber-cyan font-mono text-sm mb-2">
                    EMAIL.ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-black/50 border-2 ${
                      focusedField === 'email' ? 'border-cyber-cyan shadow-neon-cyan' : 'border-cyber-cyan/30'
                    } text-white font-mono outline-none transition-all`}
                    placeholder="Protocol address"
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-cyan animate-pulse" />
                  )}
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <label className="block text-cyber-cyan font-mono text-sm mb-2">
                    SUBJECT.HEADER
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-black/50 border-2 ${
                      focusedField === 'subject' ? 'border-cyber-cyan shadow-neon-cyan' : 'border-cyber-cyan/30'
                    } text-white font-mono outline-none transition-all`}
                    placeholder="Transmission subject"
                  />
                  {focusedField === 'subject' && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-cyan animate-pulse" />
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-cyber-cyan font-mono text-sm mb-2">
                    MESSAGE.PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-black/50 border-2 ${
                      focusedField === 'message' ? 'border-cyber-cyan shadow-neon-cyan' : 'border-cyber-cyan/30'
                    } text-white font-mono outline-none transition-all resize-none`}
                    placeholder="Initialize data stream..."
                  />
                  {focusedField === 'message' && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-cyan animate-pulse" />
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full cyber-button relative disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⟳</span> TRANSMITTING...
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="text-cyber-green">✓ TRANSMISSION.COMPLETE</span>
                  ) : (
                    'TRANSMIT MESSAGE'
                  )}
                </button>

                {/* Status Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-cyber-green font-mono text-sm"
                  >
                    CONNECTION.ESTABLISHED.SUCCESSFULLY
                  </motion.div>
                )}
              </form>

              {/* Contact Links */}
              <div className="mt-12 pt-8 border-t border-cyber-cyan/20">
                <h3 className="text-cyber-cyan font-mono text-sm mb-6">
                  ALTERNATIVE.CHANNELS
                </h3>
                
                <div className="space-y-4">
                  {/* GitHub */}
                  <a href="#" className="block border border-cyber-purple/30 bg-black/30 p-4 
                                        hover:border-cyber-purple transition-all group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-cyber-purple font-mono text-sm">GITHUB.REPO</div>
                        <div className="text-gray-500 text-xs mt-1">@yourusername</div>
                      </div>
                      <span className="text-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href="#" className="block border border-cyber-cyan/30 bg-black/30 p-4 
                                        hover:border-cyber-cyan transition-all group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-cyber-cyan font-mono text-sm">LINKEDIN.PROFILE</div>
                        <div className="text-gray-500 text-xs mt-1">/in/yourprofile</div>
                      </div>
                      <span className="text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:hello@domain.com" className="block border border-cyber-pink/30 bg-black/30 p-4 
                                                               hover:border-cyber-pink transition-all group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-cyber-pink font-mono text-sm">EMAIL.DIRECT</div>
                        <div className="text-gray-500 text-xs mt-1">hello@domain.com</div>
                      </div>
                      <span className="text-cyber-pink opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}