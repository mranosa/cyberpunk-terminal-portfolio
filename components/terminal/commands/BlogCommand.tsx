import { blogPosts } from '../data/blogPosts'

export function BlogListCommand() {
  return (
    <div className="space-y-2">
      {blogPosts.map((post, index) => (
        <div key={index} className="flex items-start gap-2">
          <span className="text-cyber-green">[{index + 1}]</span>
          <div>
            <div className="text-cyber-cyan">{post.title}</div>
            <div className="text-gray-500 text-xs">{post.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function BlogReadCommand({ postIndex }: { postIndex: number }) {
  if (postIndex < 0 || postIndex >= blogPosts.length) {
    return <span className="text-red-500">Error: Post not found</span>
  }

  const post = blogPosts[postIndex]
  
  return (
    <div className="space-y-2">
      <div className="text-cyber-cyan text-lg">{post.title}</div>
      <div className="text-gray-500">{post.date}</div>
      <div className="text-gray-300">{post.excerpt}</div>
      <div className="flex gap-2 mt-2">
        {post.tags.map((tag, i) => (
          <span
            key={i}
            className="text-cyber-purple text-xs border border-cyber-purple/30 px-2 py-1"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}