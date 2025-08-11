import { thoughts } from '../data/thoughts'

export function CVCommand() {
  return (
    <div className="space-y-3">
      <div className="text-cyber-cyan">CV DOWNLOAD INITIATED...</div>
      <div className="border border-cyber-green/30 bg-black/20 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-cyber-green font-mono text-sm">
            SOFTWARE_ENGINEER_CV.pdf
          </div>
          <div className="text-cyber-green text-xs">2.4MB</div>
        </div>
        <div className="text-gray-400 text-sm mb-4">
          Complete technical resume with project portfolio, skills matrix,
          and professional experience.
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/cv/SOFTWARE_ENGINEER_CV.pdf'
              link.download = 'SOFTWARE_ENGINEER_CV.pdf'
              link.click()
            }}
            className="text-cyber-green hover:text-white text-sm border border-cyber-green/50 
                     hover:border-cyber-green px-3 py-1 transition-colors"
          >
            DOWNLOAD.PDF →
          </button>
          <div className="text-gray-500 font-mono text-xs">
            STATUS: <span className="text-cyber-green">READY</span>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-xs font-mono">
        $ curl -O https://portfolio.domain/cv/SOFTWARE_ENGINEER_CV.pdf
      </div>
    </div>
  )
}

export function ThoughtsCommand() {
  const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)]
  return (
    <div className="text-pink-400 italic">"{randomThought}"</div>
  )
}

export function AboutCommand() {
  return (
    <div className="space-y-2 text-gray-300">
      <div className="text-cyber-cyan">{`// PERSONAL.INFO`}</div>
      <div>
        Hi! I'm Ken Ranosa, a Software Engineer from the Philippines.
      </div>
      <div>
        Built with Next.js, TypeScript, and a love for cyberpunk
        aesthetics.
      </div>
      <div className="text-cyber-green">Status: ONLINE</div>
    </div>
  )
}

export function MatrixCommand() {
  return (
    <div className="text-cyber-green font-mono text-xs">
      <pre>{`
Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

Knock, knock, Neo.
      `}</pre>
    </div>
  )
}