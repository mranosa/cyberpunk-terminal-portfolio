import type { Metadata } from 'next'
import Script from 'next/script'
import ErrorBoundary from '@/components/ErrorBoundary'
import CircuitBoard from '@/components/CircuitBoard'
import DataStream from '@/components/DataStream'
import HolographicOverlay from '@/components/HolographicOverlay'
import ScanLines from '@/components/ScanLines'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import { CSPostHogProvider } from './providers'
import PostHogPageView from './PostHogPageView'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ken Ranosa | Software Engineer Portfolio',
  description: 'Interactive cyberpunk-themed portfolio showcasing my software engineering journey, skills, and projects. Built with Next.js and TypeScript.',
  keywords: 'Ken Ranosa, software engineer, developer, portfolio, cyberpunk, full-stack, React, Next.js, TypeScript, Philippines',
  authors: [{ name: 'Ken Ranosa' }],
  creator: 'Ken Ranosa',
  publisher: 'Ken Ranosa',
  openGraph: {
    title: 'Ken Ranosa | Software Engineer Portfolio',
    description: 'Interactive cyberpunk-themed portfolio showcasing my software engineering journey, skills, and projects.',
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
    siteName: 'Ken Ranosa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ken Ranosa | Software Engineer Portfolio',
    description: 'Interactive cyberpunk-themed portfolio',
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0f" />
        
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Optimize viewport for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="antialiased overflow-x-hidden">
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <ErrorBoundary>
          <CSPostHogProvider>
            <PostHogPageView />
            <div className="fixed inset-0 bg-cyber-darker -z-50 overflow-hidden" />
            <div className="fixed inset-0 opacity-30 -z-40 overflow-hidden">
              <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px]" />
            </div>
            <CircuitBoard />
            <HolographicOverlay />
            <DataStream />
            <ScanLines />
            {children}
            <PerformanceMonitor />
          </CSPostHogProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}