import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Scrap Hub | Original Second Hand Auto Spare Parts & Engines',
  description: 'Buy original second-hand car engines, gearboxes & body parts with live video verification before payment. Best scrap rates in Moradabad & Delhi NCR.',
  keywords: [
    // Brand & General Scrap Keywords
    'Car Scrap Hub',
    'second hand car parts',
    'used car engine price',
    'car scrap dealer near me',
    'Delhi NCR auto scrap market',
    'Moradabad car scrap yard',
    
    // Maruti Suzuki Parts
    'Maruti Swift second hand parts',
    'Wagon R second hand engine',
    'Alto K10 used spare parts',
    'Baleno second hand body parts',
    'Dzire gearbox second hand',
    'Ertiga second hand spare parts',
    'Brezza scrap parts',

    // Hyundai Parts
    'i20 scrap spare parts Moradabad',
    'i10 Grand second hand engine',
    'Hyundai Creta used parts',
    'Verna second hand gearbox',
    'Santro old car parts',

    // Mahindra Parts
    'Mahindra Scorpio second hand parts',
    'Bolero used engine and gearbox',
    'Thar scrap spare parts',
    'XUV500 second hand parts',

    // Tata Parts
    'Tata Tiago second hand parts',
    'Nexon used spare parts',
    'Harrier scrap parts',

    // Honda & Toyota Parts
    'Honda City second hand engine',
    'Honda Amaze used parts',
    'Toyota Innova second hand parts',
    'Fortuner scrap spare parts',
  ],
  verification: {
    google: 'x6lcLJaRCxYS1JV',
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
