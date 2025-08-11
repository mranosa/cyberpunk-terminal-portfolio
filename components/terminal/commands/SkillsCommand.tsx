import { skills } from '../data/skills'

export function SkillsCommand() {
  return (
    <div className="space-y-4">
      <div className="solar-yellow ultra-thin mb-3">SKILLS MATRIX:</div>

      {/* Languages */}
      <div className="mb-4">
        <div className="nebula-pink text-sm ultra-thin mb-2 uppercase tracking-wider">
          Languages
        </div>
        {skills.languages.map((skill, index) => (
          <div key={skill.name} className="flex items-center gap-3 mb-2">
            <div className="w-24 photon-white font-mono text-sm ultra-light">
              {skill.name}
            </div>
            <div className="flex-1 max-w-md">
              <div className="bg-black/50 border border-cyber-cyan/20 h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-plasma-cyan to-quantum-blue transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
            <div className="plasma-cyan font-mono text-sm ultra-thin w-10">
              {skill.level}%
            </div>
          </div>
        ))}
      </div>

      {/* Frameworks */}
      <div className="mb-4">
        <div className="nova-purple text-sm ultra-thin mb-2 uppercase tracking-wider">
          Frameworks
        </div>
        {skills.frameworks.map((skill, index) => (
          <div key={skill.name} className="flex items-center gap-3 mb-2">
            <div className="w-24 photon-white font-mono text-sm ultra-light">
              {skill.name}
            </div>
            <div className="flex-1 max-w-md">
              <div className="bg-black/50 border border-cyber-purple/20 h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-nova-purple to-nebula-pink transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
            <div className="text-pink-400 font-mono text-sm w-10">
              {skill.level}%
            </div>
          </div>
        ))}
      </div>

      {/* Tools */}
      <div className="mb-4">
        <div className="text-pink-400 text-sm mb-2 uppercase tracking-wider">
          Tools
        </div>
        {skills.tools.map((skill, index) => (
          <div key={skill.name} className="flex items-center gap-3 mb-2">
            <div className="w-24 photon-white font-mono text-sm ultra-light">
              {skill.name}
            </div>
            <div className="flex-1 max-w-md">
              <div className="bg-black/50 border border-cyber-green/20 h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyber-green to-green-600 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
            <div className="text-cyber-green font-mono text-sm w-10">
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkillsCategoryCommand({ category }: { category: keyof typeof skills }) {
  if (!skills[category]) return null

  return (
    <div className="space-y-3">
      <div className="text-cyber-cyan mb-3">
        {category.toUpperCase()} SKILLS:
      </div>
      {skills[category].map((skill, index) => (
        <div key={skill.name} className="flex items-center gap-3">
          <div className="w-32 text-gray-300 font-mono text-sm">
            {skill.name}
          </div>
          <div className="flex-1 max-w-lg">
            <div className="bg-black/50 border border-cyber-cyan/20 h-4 overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${
                  category === 'languages'
                    ? 'bg-gradient-to-r from-cyber-cyan to-cyan-600'
                    : category === 'frameworks'
                      ? 'bg-gradient-to-r from-cyber-purple to-purple-600'
                      : 'bg-gradient-to-r from-cyber-green to-green-600'
                }`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
          <div
            className={`font-mono text-sm w-10 ${
              category === 'languages'
                ? 'text-cyber-cyan'
                : category === 'frameworks'
                  ? 'text-pink-400'
                  : 'text-cyber-green'
            }`}
          >
            {skill.level}%
          </div>
        </div>
      ))}
    </div>
  )
}