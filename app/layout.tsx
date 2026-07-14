import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const GA_ID = 'G-MXHZHBQVMB'

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const siteUrl = 'https://reboot.no'
const siteName = 'Reboot'
const defaultTitle = 'Reboot | Én partner for alt innen nettsider'
const defaultDescription =
  'Moderne nettsider med fokus på synlighet på Google og i AI-søk. Designet og utviklet i Nydalen, Oslo.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Reboot',
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/rfav.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName,
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  description: defaultDescription,
  email: 'hallo@reboot.no',
  telephone: '+4797675848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sandakerveien 138',
    postalCode: '0484',
    addressLocality: 'Oslo',
    addressCountry: 'NO',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
