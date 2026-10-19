export const metadata = {
  title: 'Car Scrap Hub - Verified Auto Parts',
  description: 'Buy Original Second-Hand Parts With Video Verification',
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
