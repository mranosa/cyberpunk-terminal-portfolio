'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { workExperience } from '@/components/terminal/data/workExperience'
import MatrixRain from '@/components/MatrixRainWrapper'
import { ArrowLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function WorkPage() {
  const router = useRouter()

  const handleBackToTerminal = () => {
    // Navigate with query parameter to skip splash
    router.push('/?skipSplash=true')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      <MatrixRain />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-screen bg-black text-white p-8 overflow-auto"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <button
              onClick={handleBackToTerminal}
              className="mb-6 text-cyber-cyan hover:text-cyber-green transition-colors flex items-center gap-2 group"
            >
              <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Terminal</span>
            </button>
            
            <h1 className="text-4xl md:text-6xl font-bold text-cyber-green mb-2 glitch-text">
              WORK EXPERIENCE
            </h1>
            <div className="text-cyber-cyan">Professional Journey & Achievements</div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-8"
          >
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="border border-cyber-green/30 p-6 bg-black/60 backdrop-blur-sm hover:border-cyber-cyan/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyber-green font-bold text-xl">
                        [{index + 1}]
                      </span>
                      <h2 className="text-2xl font-bold text-cyber-cyan">
                        {job.position}
                      </h2>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {job.company}
                    </h3>
                    <div className="text-gray-400">
                      {job.location} • {job.type}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 text-cyber-green border border-cyber-green/30 px-3 py-1 inline-block">
                    {job.duration}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-pink-400 font-semibold mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-cyber-green mt-1">▸</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-pink-400 font-semibold mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="text-sm border border-cyber-cyan/30 px-3 py-1 text-gray-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 border border-cyber-green/30 p-6 bg-black/60 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4">DOWNLOAD CV</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-cyber-green font-mono text-lg mb-2">
                  SOFTWARE_ENGINEER_CV.pdf
                </div>
                <div className="text-gray-400 text-sm">
                  Complete technical resume with project portfolio, skills matrix,
                  and professional experience.
                </div>
              </div>
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/cv/SOFTWARE_ENGINEER_CV.pdf'
                  link.download = 'SOFTWARE_ENGINEER_CV.pdf'
                  link.click()
                }}
                className="text-cyber-green hover:text-white text-sm border border-cyber-green/50 
                         hover:border-cyber-green px-4 py-2 transition-colors flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                <span>DOWNLOAD PDF</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <button
              onClick={handleBackToTerminal}
              className="px-6 py-3 border border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 hover:border-cyber-green transition-all duration-300"
            >
              Return to Terminal
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}