'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { workExperience } from '@/components/terminal/data/workExperience'
import { recommendations } from '@/components/terminal/data/recommendations'
import { skills } from '@/components/terminal/data/skills'
import MatrixRain from '@/components/MatrixRainWrapper'
import { ArrowLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { StarIcon, LinkIcon } from '@heroicons/react/24/solid'

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
              PROFESSIONAL PORTFOLIO
            </h1>
            <div className="text-cyber-cyan">Experience • Skills • Recommendations • CV</div>
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
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-cyber-cyan mb-6">SKILLS & EXPERTISE</h2>
            <div className="border border-cyber-cyan/30 p-6 bg-black/60 backdrop-blur-sm mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Languages */}
                <div>
                  <h3 className="text-pink-400 font-semibold mb-4 uppercase tracking-wider">Languages</h3>
                  {skills.languages && skills.languages.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 mb-3">
                      <div className="w-24 text-gray-300 font-mono text-sm">
                        {skill.name}
                      </div>
                      <div className="flex-1">
                        <div className="bg-black/50 border border-cyber-cyan/20 h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyber-cyan to-cyan-600 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-cyber-cyan font-mono text-xs w-10">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Frameworks */}
                <div>
                  <h3 className="text-pink-400 font-semibold mb-4 uppercase tracking-wider">Frameworks</h3>
                  {skills.frameworks && skills.frameworks.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 mb-3">
                      <div className="w-24 text-gray-300 font-mono text-sm">
                        {skill.name}
                      </div>
                      <div className="flex-1">
                        <div className="bg-black/50 border border-cyber-purple/20 h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-nova-purple to-nebula-pink transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-pink-400 font-mono text-xs w-10">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-pink-400 font-semibold mb-4 uppercase tracking-wider">Tools & Testing</h3>
                  {skills.tools && skills.tools.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 mb-3">
                      <div className="w-24 text-gray-300 font-mono text-sm">
                        {skill.name}
                      </div>
                      <div className="flex-1">
                        <div className="bg-black/50 border border-cyber-green/20 h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyber-green to-green-600 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-cyber-green font-mono text-xs w-10">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Databases */}
                <div>
                  <h3 className="text-pink-400 font-semibold mb-4 uppercase tracking-wider">Databases</h3>
                  {skills.databases && skills.databases.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 mb-3">
                      <div className="w-24 text-gray-300 font-mono text-sm">
                        {skill.name}
                      </div>
                      <div className="flex-1">
                        <div className="bg-black/50 border border-cyber-orange/20 h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyber-orange to-orange-600 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-cyber-orange font-mono text-xs w-10">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI/ML if exists */}
                {skills.aiml && (
                  <div>
                    <h3 className="text-pink-400 font-semibold mb-4 uppercase tracking-wider">AI/ML</h3>
                    {skills.aiml.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-3 mb-3">
                        <div className="w-24 text-gray-300 font-mono text-sm">
                          {skill.name}
                        </div>
                        <div className="flex-1">
                          <div className="bg-black/50 border border-purple-500/20 h-3 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                        <div className="text-purple-400 font-mono text-xs w-10">
                          {skill.level}%
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-cyber-pink mb-6">RECOMMENDATIONS</h2>
            <div className="grid gap-6">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="border border-cyber-pink/30 p-6 bg-black/60 backdrop-blur-sm hover:border-cyber-pink/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{rec.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-cyber-pink font-bold text-lg">
                          [{index + 1}]
                        </span>
                        <span className="text-cyber-cyan text-xl font-semibold">
                          {rec.name}
                        </span>
                        <div className="flex items-center gap-0.5">
                          {[...Array(rec.rating)].map((_, i) => (
                            <StarIcon key={i} className="w-4 h-4 text-cyber-orange" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-white font-medium mb-1">
                        {rec.position} @ {rec.company}
                      </div>
                      
                      <div className="text-gray-400 text-sm mb-3">
                        {rec.relationship} • {rec.duration}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {rec.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs border border-cyber-pink/30 px-2 py-1 text-gray-300 hover:border-cyber-pink hover:text-cyber-pink transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-pink-400 text-sm mb-2 font-semibold">
                      Recommendation:
                    </div>
                    <blockquote className="text-gray-300 text-sm italic border-l-2 border-cyber-pink/30 pl-4">
                      "{rec.recommendation}"
                    </blockquote>
                  </div>

                  <div className="text-gray-500 text-xs">
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      <a 
                        href={`https://${rec.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyber-cyan transition-colors"
                      >
                        {rec.contact.linkedin}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center text-gray-500 text-sm mt-8 border border-cyber-pink/20 p-4 bg-black/40">
              <div className="text-cyber-cyan mb-2 font-semibold">REFERENCES AVAILABLE UPON REQUEST</div>
              <div>All contacts have consented to serve as references</div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 border border-cyber-green/30 p-6 bg-black/60 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4">DOWNLOAD CV</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-cyber-green font-mono text-lg mb-2">
                  Mark_Kenneth_Ranosa_CV.pdf
                </div>
                <div className="text-gray-400 text-sm">
                  Complete technical resume with 15+ years of experience,
                  project portfolio, and comprehensive skills matrix.
                </div>
              </div>
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/cv/SOFTWARE_ENGINEER_CV.pdf'
                  link.download = 'Mark_Kenneth_Ranosa_CV.pdf'
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