'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ClearSession() {
  const router = useRouter()
  
  useEffect(() => {
    // Clear all session storage
    sessionStorage.clear()
    console.log('Session storage cleared!')
    
    // Redirect to home after a short delay
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }, [router])
  
  return (
    <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl mb-4">Clearing Session Storage...</h1>
        <p className="text-cyber-cyan">Redirecting to home page with splash screen...</p>
      </div>
    </div>
  )
}