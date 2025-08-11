'use client'

export default function ScanLines() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 3 }}>
      <div 
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 2.5px
          )`,
          animation: 'scan-lines-move 8s linear infinite'
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            0deg,
            transparent 0%,
            rgba(0, 255, 255, 0.02) 50%,
            transparent 100%
          )`,
          height: '40%',
          animation: 'scan-bar 6s ease-in-out infinite'
        }}
      />
      <style jsx>{`
        @keyframes scan-lines-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10px);
          }
        }
        
        @keyframes scan-bar {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(250%);
          }
        }
      `}</style>
    </div>
  )
}