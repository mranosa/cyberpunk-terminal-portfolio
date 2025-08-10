import { recommendations } from '../data/recommendations'

export function RecommendationsCommand() {
  return (
    <div className="space-y-6">
      <div className="text-cyber-cyan mb-4">PROFESSIONAL RECOMMENDATIONS:</div>
      {recommendations.map((rec, index) => (
        <div
          key={rec.id}
          className="border border-cyber-pink/30 p-4 bg-black/20"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="text-3xl">{rec.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyber-pink font-bold">
                  [{index + 1}]
                </span>
                <span className="text-cyber-cyan text-lg font-semibold">
                  {rec.name}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(rec.rating)].map((_, i) => (
                    <span key={i} className="text-cyber-orange">★</span>
                  ))}
                </div>
              </div>
              
              <div className="text-white font-medium mb-1">
                {rec.position} @ {rec.company}
              </div>
              
              <div className="text-gray-400 text-sm mb-2">
                {rec.relationship} • {rec.duration}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {rec.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs border border-cyber-pink/30 px-2 py-1 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-cyber-purple text-sm mb-2">
              Recommendation:
            </div>
            <blockquote className="text-gray-300 text-sm italic border-l-2 border-cyber-pink/30 pl-4">
              "{rec.recommendation}"
            </blockquote>
          </div>

          <div className="text-gray-500 text-xs">
            <div>📧 {rec.contact.email}</div>
            <div>🔗 {rec.contact.linkedin}</div>
          </div>
        </div>
      ))}
      
      <div className="text-center text-gray-500 text-sm mt-6">
        <div className="text-cyber-cyan mb-2">REFERENCES AVAILABLE UPON REQUEST</div>
        <div>All contacts have consented to serve as references</div>
      </div>
    </div>
  )
}