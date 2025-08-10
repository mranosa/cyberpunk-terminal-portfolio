export function HelpCommand() {
  return (
    <div className="space-y-1">
      <div className="text-cyber-cyan">Available commands:</div>
      <div>
        <span className="text-cyber-purple">ls</span> - List all blog posts
      </div>
      <div>
        <span className="text-cyber-purple">read [number]</span> - Read a specific post
      </div>
      <div>
        <span className="text-cyber-purple">projects</span> - List all project repositories
      </div>
      <div>
        <span className="text-cyber-purple">work</span> - Display work experience and career history
      </div>
      <div>
        <span className="text-cyber-purple">skills [category]</span> - Display skills matrix (languages, frameworks, tools)
      </div>
      <div>
        <span className="text-cyber-purple">cv</span> - Download curriculum vitae
      </div>
      <div>
        <span className="text-cyber-purple">thoughts</span> - Display random thoughts
      </div>
      <div>
        <span className="text-cyber-purple">about</span> - About this terminal
      </div>
      <div>
        <span className="text-cyber-purple">clear</span> - Clear terminal
      </div>
      <div>
        <span className="text-cyber-purple">matrix</span> - Enter the matrix
      </div>
    </div>
  )
}