'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cyber-darker flex items-center justify-center px-4">
          <div className="text-center space-y-6">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-4xl font-cyber font-bold text-cyber-cyan">
              SYSTEM.ERROR
            </h1>
            <p className="text-gray-400 font-mono max-w-md">
              An unexpected error occurred. Please refresh the page or contact the system administrator.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="cyber-button text-cyber-cyan hover:text-white transition-colors mt-6"
            >
              RELOAD.SYSTEM
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}