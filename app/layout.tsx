import Script from 'next/script'

export const metadata = {
  title: 'Car Scrap Hub | Original Second Hand Auto Spare Parts & Engine Scrap',
  description: 'Buy original second-hand car engines, gearboxes & body parts directly from scrap dealers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
