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

export function BlogReadCommand({ postIndex }: { postIndex: number }) {
  if (postIndex < 0 || postIndex >= blogPosts.length) {
    return <span className="fusion-orange ultra-light">Error: Post not found</span>
  }

  const post = blogPosts[postIndex]
  
  return (
    <div className="space-y-2">
      <div className="solar-yellow text-lg ultra-thin">{post.title}</div>
      <div className="quantum-blue ultra-light">{post.date}</div>
      <div className="photon-white ultra-thin">{post.excerpt}</div>
      <div className="flex gap-2 mt-2">
        {post.tags.map((tag, i) => (
          <span
            key={i}
            className="nebula-pink text-xs ultra-thin border border-nova-purple/30 px-2 py-1"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}