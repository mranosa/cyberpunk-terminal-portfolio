import { projects } from '../data/projects'

export function ProjectsCommand() {
  return (
    <div className="space-y-4">
      <div className="text-cyber-cyan mb-3">PROJECT REPOSITORIES:</div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="border border-cyber-purple/30 p-4 bg-black/20"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-cyber-green font-bold">
                [{index + 1}]
              </span>
              <span className="text-cyber-cyan text-lg">
                {project.title}
              </span>
            </div>
            <span
              className={`text-xs px-2 py-1 border ${
                project.status === 'DEPLOYED'
                  ? 'border-cyber-green text-cyber-green'
                  : project.status === 'ACTIVE'
                    ? 'border-cyber-cyan text-cyber-cyan'
                    : project.status === 'BETA'
                      ? 'border-cyber-orange text-cyber-orange'
                      : 'border-gray-500 text-gray-500'
              }`}
            >
              {project.status}
            </span>
          </div>

          <div className="text-gray-300 mb-3">{project.description}</div>

          <div>
            <div className="text-cyber-purple text-sm mb-2">
              Tech Stack:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-cyber-purple/30 px-2 py-1 text-gray-300"
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