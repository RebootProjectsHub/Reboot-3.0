import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Reboot | Én partner for alt innen nettsider',
  description:
    'Moderne nettsider med fokus på synlighet på Google og i AI-søk. Designet og utviklet i Nydalen, Oslo.',
  generator: 'v0.app',
  icons: {
    icon: '/rfav.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F4ECE3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no" className={`${spaceMono.variable} bg-background`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/aah4tvk.css" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
