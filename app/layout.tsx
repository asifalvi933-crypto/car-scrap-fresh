import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Scrap Hub - Verified Auto Parts Marketplace',
  description: 'Buy original second-hand car spare parts with video verification before payment.',
  verification: {
    google: 'tKlBFs9kdPBeJvSkWd07gRh6x1Tdxs_LhyT0QwAwXSM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
