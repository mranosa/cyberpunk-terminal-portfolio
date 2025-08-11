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