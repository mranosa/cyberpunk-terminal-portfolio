import { projects } from '../data/projects'

export function ProjectsCommand() {
  return (
    <div className="space-y-4">
      <div className="solar-yellow ultra-thin mb-3">PROJECT REPOSITORIES:</div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="border border-cyber-purple/30 p-4 bg-black/20"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="pulsar-lime ultra-light">
                [{index + 1}]
              </span>
              <span className="plasma-cyan text-lg ultra-thin">
                {project.title}
              </span>
            </div>
            <span
              className={`text-xs px-2 py-1 border ultra-thin ${
                project.status === 'DEPLOYED'
                  ? 'border-aurora-green aurora-green'
                  : project.status === 'ACTIVE'
                    ? 'border-plasma-cyan plasma-cyan'
                    : project.status === 'BETA'
                      ? 'border-fusion-orange fusion-orange'
                      : 'border-gray-500 text-gray-500'
              }`}
            >
              {project.status}
            </span>
          </div>

          <div className="photon-white ultra-light mb-3">{project.description}</div>

          <div>
            <div className="nebula-pink text-sm ultra-thin mb-2">
              Tech Stack:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-nova-purple/30 px-2 py-1 quantum-blue ultra-thin"
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