import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Car Scrap Hub | Original Second Hand Auto Spare Parts & Engine Scrap',
  description: 'Buy original second-hand car engines, gearboxes & body parts directly from scrap dealers.',
  keywords: [
    'Car Scrap Hub',
    'second hand car parts',
    'used car engine price',
    'car scrap dealer near me',
    'Delhi NCR auto scrap market',
    'Moradabad car scrap yard',
    'Maruti Swift second hand parts',
    'Wagon R second hand engine',
    'Alto K10 used spare parts',
    'Baleno second hand body parts',
    'Dzire gearbox second hand',
    'Ertiga second hand spare parts',
    'Brezza scrap parts',
    'i20 scrap spare parts Moradabad',
    'i10 Grand second hand engine',
    'Hyundai Creta used parts',
    'Verna second hand gearbox',
    'Santro old car parts',
    'Mahindra Scorpio second hand parts',
    'Bolero used engine and gearbox',
    'Thar scrap spare parts',
    'XUV500 second hand parts',
    'Tata Tiago second hand parts',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-52HXQBQKSB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-52HXQBQKSB');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
