import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { Space_Mono } from 'next/font/google'
import { OpenAiPixelPageViews } from '@/components/openai-pixel'
import './globals.css'

const GA_ID = 'G-MXHZHBQVMB'
const OPENAI_PIXEL_ID = 'XW21DTQw698Emg3CaaF6P7'

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
    icon: '/Reboot-icon-round.png',
    apple: '/Reboot-icon-round.png',
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
        {/* OpenAI Ads conversion pixel. Loads its SDK async, so it does not
            block the render-critical font CSS below. */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"${OPENAI_PIXEL_ID}",debug:true});`,
            }}
          />
        )}
        {/* use.typekit.net serves both the render-blocking stylesheet and the
            font files it references. Those use different fetch modes, and a
            preconnect is only reused by a request in the matching mode — hence
            two tags: the plain one warms the connection for the stylesheet,
            the anonymous one for the woff2 files.
            The kit CSS then @imports a second blocking stylesheet from
            p.typekit.net, which the browser cannot discover until the first one
            lands — so warming that origin up front overlaps its handshake with
            the first request instead of paying for it serially. */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/aah4tvk.css" />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {process.env.NODE_ENV === 'production' && <OpenAiPixelPageViews />}
        {children}
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
