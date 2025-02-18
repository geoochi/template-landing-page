import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StreamLine - Simplify Your Workflow',
  description:
    'StreamLine is a SaaS platform that helps you streamline your business processes and boost productivity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
