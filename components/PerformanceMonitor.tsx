'use client'

import { useEffect } from 'react'
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Log Core Web Vitals
      onCLS(console.log)
      onFCP(console.log)
      onLCP(console.log)
      onTTFB(console.log)
      onINP(console.log)

      // You can also send these metrics to an analytics service
      const sendToAnalytics = (metric: any) => {
        // Example: send to Google Analytics
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', metric.name, {
            value: Math.round(metric.value),
            metric_id: metric.id,
            metric_value: metric.value,
            metric_delta: metric.delta,
          })
        }
      }

      onCLS(sendToAnalytics)
      onFCP(sendToAnalytics)
      onLCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
      onINP(sendToAnalytics)
    }
  }, [])

  return null
}