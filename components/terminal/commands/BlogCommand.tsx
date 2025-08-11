import { blogPosts } from '../data/blogPosts'

export function BlogListCommand() {
  return (
    <div className="space-y-2">
      {blogPosts.map((post, index) => (
        <div key={index} className="flex items-start gap-2">
          <span className="pulsar-lime ultra-thin">[{index + 1}]</span>
          <div>
            <div className="plasma-cyan ultra-light">{post.title}</div>
            <div className="quantum-blue text-xs ultra-thin">{post.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

