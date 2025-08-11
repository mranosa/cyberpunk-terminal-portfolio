import { thoughts } from '../data/thoughts'

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
        Hi! I'm Mark Kenneth Ranosa, a Software Engineer from Makati City, Philippines.
      </div>
      <div>
        Bachelor of Science in Information Technology - AMA Computer College (2010)
      </div>
      <div>
        Built with Next.js, TypeScript, and a love for cyberpunk aesthetics.
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