import { workExperience } from '../data/workExperience'

export function WorkExperienceCommand() {
  return (
    <div className="space-y-6">
      <div className="text-cyber-cyan mb-4">WORK EXPERIENCE:</div>
      {workExperience.map((job, index) => (
        <div
          key={job.id}
          className="border border-cyber-green/30 p-4 bg-black/20"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-cyber-green font-bold">
                  [{index + 1}]
                </span>
                <span className="text-cyber-cyan text-lg font-semibold">
                  {job.position}
                </span>
              </div>
              <div className="text-white font-medium">{job.company}</div>
              <div className="text-gray-400 text-sm">
                {job.location} • {job.type}
              </div>
            </div>
            <div className="text-cyber-green text-sm border border-cyber-green/30 px-2 py-1">
              {job.duration}
            </div>
          </div>

          <div className="mb-3">
            <div className="text-cyber-purple text-sm mb-2">
              Key Achievements:
            </div>
            <ul className="space-y-1">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="text-cyber-green mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-cyber-purple text-sm mb-2">
              Technologies:
            </div>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-cyber-cyan/30 px-2 py-1 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}