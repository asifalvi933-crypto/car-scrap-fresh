
import type { Metadata } from 'next';
import './globals.css';



export const metadata: Metadata = {
  title: 'Car Scrap Hub | Buy Original Second-Hand Auto Spare Parts',
  description: 'Verified second-hand car spare parts marketplace in Delhi NCR & UP.',
  verification: {
    google: 'x6lcLJaRCxYS1JVZfZ4YA8N7-IXvmjlje6vH4U7zVuk',
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
