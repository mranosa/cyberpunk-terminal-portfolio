'use client'

import { ArrowDownIcon } from '@heroicons/react/24/outline'

export function CvCommand() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/cv/Ken_Ranosa_CV_2025.pdf'
    link.download = 'Ken_Ranosa_CV_2025.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="text-cyber-cyan mb-4 text-xl font-bold animate-pulse">
        === CURRICULUM VITAE ===
      </div>
      
      <div className="border border-cyber-cyan/30 p-4 bg-cyber-cyan/5">
        <div className="text-cyan-400 mb-4 font-semibold">
          📄 PROFESSIONAL PROFILE
        </div>
        <div className="space-y-2">
          <div className="ultra-light">
            <span className="plasma-cyan">Name:</span> Ken Ranosa
          </div>
          <div className="ultra-light">
            <span className="plasma-cyan">Role:</span> Software Engineer
          </div>
          <div className="ultra-light">
            <span className="plasma-cyan">Format:</span> PDF Document
          </div>
          <div className="ultra-light">
            <span className="plasma-cyan">Experience:</span> Full-Stack Development
          </div>
        </div>
      </div>

      <div className="border border-purple-500/30 p-4 bg-purple-900/10">
        <div className="text-purple-400 mb-2 font-semibold">
          ✨ WHAT'S INCLUDED:
        </div>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• Professional experience & achievements</li>
          <li>• Technical skills & expertise</li>
          <li>• Education & certifications</li>
          <li>• Key projects & contributions</li>
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleDownload}
          className="relative px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all duration-300 flex items-center gap-3 group font-bold text-lg animate-pulse hover:animate-none shadow-[0_0_20px_rgba(0,255,255,0.3)]"
        >
          <span>DOWNLOAD CV</span>
          <ArrowDownIcon className="w-5 h-5 group-hover:translate-y-2 transition-transform" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-2 rounded animate-pulse">
            PDF
          </span>
        </button>
      </div>

      <div className="text-center text-gray-500 text-xs">
        Download my complete professional profile • Software Engineer CV
      </div>
    </div>
  )
}