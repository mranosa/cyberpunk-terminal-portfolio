'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { workExperience } from '@/components/terminal/data/workExperience'
import { recommendations } from '@/components/terminal/data/recommendations'
import { skills } from '@/components/terminal/data/skills'
import { projects } from '@/components/terminal/data/projects'
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
            <div className="text-cyber-cyan">Experience • Skills • Projects • Recommendations • CV</div>
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
              <div className="grid md:grid-cols-3 gap-6">
                {/* Languages */}
                <div className="border border-cyber-cyan/20 p-4 bg-black/40 hover:border-cyber-cyan/40 transition-all">
                  <h3 className="text-cyber-cyan font-semibold mb-3 uppercase tracking-wider text-sm">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages && skills.languages.map((skill) => (
                      <span 
                        key={skill.name} 
                        className="text-xs border border-cyber-cyan/30 px-2 py-1 text-gray-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-all"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div className="border border-nova-purple/20 p-4 bg-black/40 hover:border-nova-purple/40 transition-all">
                  <h3 className="text-nova-purple font-semibold mb-3 uppercase tracking-wider text-sm">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks && skills.frameworks.map((skill) => (
                      <span 
                        key={skill.name} 
                        className="text-xs border border-nova-purple/30 px-2 py-1 text-gray-300 hover:border-nova-purple hover:text-nova-purple transition-all"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="border border-cyber-green/20 p-4 bg-black/40 hover:border-cyber-green/40 transition-all">
                  <h3 className="text-cyber-green font-semibold mb-3 uppercase tracking-wider text-sm">Tools & Testing</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools && skills.tools.map((skill) => (
                      <span 
                        key={skill.name} 
                        className="text-xs border border-cyber-green/30 px-2 py-1 text-gray-300 hover:border-cyber-green hover:text-cyber-green transition-all"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="border border-cyber-orange/20 p-4 bg-black/40 hover:border-cyber-orange/40 transition-all">
                  <h3 className="text-cyber-orange font-semibold mb-3 uppercase tracking-wider text-sm">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases && skills.databases.map((skill) => (
                      <span 
                        key={skill.name} 
                        className="text-xs border border-cyber-orange/30 px-2 py-1 text-gray-300 hover:border-cyber-orange hover:text-cyber-orange transition-all"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI/ML if exists */}
                {skills.aiml && (
                  <div className="border border-purple-500/20 p-4 bg-black/40 hover:border-purple-500/40 transition-all">
                    <h3 className="text-purple-400 font-semibold mb-3 uppercase tracking-wider text-sm">AI/ML</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.aiml.map((skill) => (
                        <span 
                          key={skill.name} 
                          className="text-xs border border-purple-500/30 px-2 py-1 text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-nova-purple mb-6">PET PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="border border-nova-purple/30 p-6 bg-black/60 backdrop-blur-sm hover:border-nova-purple/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-cyber-cyan mb-1">
                        {project.title}
                      </h3>
                      <div className="text-sm text-nova-purple font-semibold">
                        {project.type}
                      </div>
                    </div>
                    <div className={`text-xs px-2 py-1 border ${
                      project.status === 'DEPLOYED' 
                        ? 'border-cyber-green text-cyber-green' 
                        : project.status === 'ACTIVE'
                        ? 'border-cyber-cyan text-cyber-cyan'
                        : project.status === 'MVP'
                        ? 'border-cyber-orange text-cyber-orange'
                        : project.status === 'BETA'
                        ? 'border-nova-purple text-nova-purple'
                        : 'border-gray-500 text-gray-500'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <div className="mb-4">
                      <div className="text-pink-400 text-xs font-semibold mb-2">KEY FEATURES:</div>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-400 text-xs flex items-start gap-1">
                            <span className="text-cyber-green mt-0.5">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 8).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs border border-nova-purple/30 px-2 py-0.5 text-gray-400 hover:border-nova-purple hover:text-nova-purple transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 8 && (
                      <div className="relative group inline-block">
                        <span className="text-xs text-gray-500 cursor-help">
                          +{project.tech.length - 8} more
                        </span>
                        <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block z-10">
                          <div className="bg-black/95 border border-nova-purple/50 p-2 rounded">
                            <div className="flex flex-wrap gap-1 max-w-xs">
                              {project.tech.slice(8).map((tech, i) => (
                                <span
                                  key={i}
                                  className="text-xs border border-nova-purple/30 px-2 py-0.5 text-gray-300 whitespace-nowrap"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
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