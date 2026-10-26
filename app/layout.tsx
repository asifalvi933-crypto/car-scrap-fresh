import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Car Scrap Hub | Buy Original Second-Hand Auto Spare Parts & Engines',
  description: 'Verified second-hand car spare parts and tested engine assemblies marketplace in Delhi NCR & UP with live video verification.',
  verification: {
    google: 'x6lclJaRCxY51JVZfZ4YA8N7-IXvmjleVH4U7zVuk',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
