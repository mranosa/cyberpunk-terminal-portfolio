export function HelpCommand() {
  return (
    <div className="space-y-1">
      <div className="solar-yellow ultra-thin">Available commands:</div>
      <div className="ultra-light">
        <span className="plasma-cyan">ls</span> - List all blog posts
      </div>
      <div className="ultra-light">
        <span className="plasma-cyan">read [number]</span> - Read a specific post
      </div>
      <div className="ultra-light">
        <span className="quantum-blue">work</span> - Display work experience, skills, projects, recommendations and CV
      </div>
      <div className="ultra-light">
        <span className="aurora-green">thoughts</span> - Display random thoughts
      </div>
      <div className="ultra-light">
        <span className="nebula-pink">about</span> - About this terminal
      </div>
      <div className="ultra-light">
        <span className="nebula-pink">clear</span> - Clear terminal
      </div>
      <div className="ultra-light">
        <span className="fusion-orange">matrix</span> - Enter the matrix
      </div>
    </div>
  )
}