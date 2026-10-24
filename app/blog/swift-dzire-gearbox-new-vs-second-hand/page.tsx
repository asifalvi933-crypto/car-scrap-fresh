import Link from 'next/link'
import { Metadata } from 'next'
import SafeImage from '@/components/SafeImage'

export const metadata: Metadata = {
  title: 'Swift & Dzire Gearbox: New Showroom vs Original Second-Hand Price Comparison',
  description:
    'Swift aur Dzire gearbox replacement price comparison. Learn how buying an original second-hand gearbox from Mayapuri scrap market saves 70% cost with live video testing.',
  keywords: [
    'Swift second hand gearbox price',
    'Dzire original gearbox scrap market Mayapuri',
    'Swift gearbox noise problem solution',
    'Second hand gearbox Moradabad Delhi NCR',
    'Maruti Suzuki original used spare parts',
  ],
}

const PHONE_NUMBER = '6395948240'
const WHATSAPP_URL = `https://wa.me/91${PHONE_NUMBER}?text=Hi%20Car%20Scrap%20Hub,%20I%20want%20to%20check%20Swift/Dzire%20gearbox%20price`

export default function GearboxComparisonBlog() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-28 font-sans">

      {/* 1. TOP NOTICE BANNER */}
      <div className="bg-yellow-500 text-black text-center py-2.5 px-4 font-bold text-[13px] tracking-wide">
        ⚡ 100% Tested OEM Parts | Swift Dzire Stock Ready | Live Video Testing Before Dispatch
      </div>

      <div className="max-w-3xl mx-auto px-4 py-4">

        {/* 2. BREADCRUMBS */}
        <nav className="text-[13px] text-blue-600 mb-4">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-1.5">›</span>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span className="mx-1.5">›</span>
          <span className="text-slate-500">Swift &amp; Dzire Gearbox</span>
        </nav>

        {/* 3. HERO CARD */}
        <div className="bg-white rounded-[20px] p-6 border border-slate-100 shadow-sm mb-5">
          <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-3.5">
            ✓ VERIFIED DISMANTLING YARD STOCK
          </div>

          <h1 className="text-[26px] font-extrabold text-slate-900 leading-tight mb-3">
            Original Second-Hand Maruti Swift &amp; Dzire Gearbox Guide
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            Agar aapki Maruti Swift ya Swift Dzire ke gearbox mein noise, gear slipping ya hard shifting ki problem hai, toh showroom ke ₹45,000+ spend karne ke bajaye original scrap gearbox lagayein. Live video compression proof ke sath.
          </p>

          {/* Double CTA — WhatsApp + Call */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white py-3.5 px-5 rounded-full font-bold text-[15px] shadow-lg shadow-green-500/30 transition"
            >
              💬 Check Price on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-5 rounded-full font-bold text-[15px] shadow-lg transition"
            >
              📞 Call: {PHONE_NUMBER}
            </a>
          </div>
        </div>

        {/* 4. FEATURE BADGES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {[
            { icon: '🔧', title: '100% OEM Original', sub: 'Genuine Factory Parts' },
            { icon: '📹', title: 'Live Video Proof', sub: 'Video test before payment' },
            { icon: '🚚', title: 'Doorstep Shipping', sub: 'Delhi NCR, UP & Pan India' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 rounded-2xl p-4 text-center shadow-sm"
            >
              <span className="text-2xl block mb-1.5">{item.icon}</span>
              <div className="text-sm font-bold text-slate-900">{item.title}</div>
              <div className="text-xs text-slate-500">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* 5. IMAGE 1 — with fallback */}
        <div className="bg-white rounded-[20px] p-4 border border-slate-100 mb-6 shadow-sm">
          <SafeImage
            src="/images/swift-dzire-gearbox-scrap.jpg"
            alt="Original Maruti Swift Dzire Second Hand Gearbox Mayapuri Scrap Market Moradabad"
            width={700}
            height={400}
            priority
          />
          <p className="text-[13px] text-slate-600 text-center mt-2.5 font-medium">
            📸 Original Dismantled Swift/Dzire Gearbox (100% Tested at Yard)
          </p>
        </div>

        {/* 6. PRICE TABLE */}
        <div className="bg-white rounded-[20px] p-5 border border-slate-100 shadow-sm mb-6">
          <h2 className="text-xl font-extrabold text-slate-900 mb-4">
            Maruti Swift / Dzire Gearbox Price List
          </h2>

          <div className="overflow-x-auto rounded-xl">
            <table className="w-full border-collapse text-[13px] text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 rounded-tl-lg">Part Name / Type</th>
                  <th className="p-3">Condition</th>
                  <th className="p-3 rounded-tr-lg">Estimated Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Showroom Brand New Gearbox Assembly',
                    badge: 'Brand New',
                    badgeColor: 'bg-red-50 text-red-600',
                    price: '₹42,000 – ₹55,000+',
                    priceColor: 'text-red-600',
                  },
                  {
                    name: 'Swift/Dzire Manual (DDiS/K-Series) Gearbox',
                    badge: 'Smooth Shift Tested',
                    badgeColor: 'bg-green-100 text-green-700',
                    price: '₹9,000 – ₹14,000',
                    priceColor: 'text-green-600',
                  },
                  {
                    name: 'Dzire AGS / AMT Automatic Gearbox Unit',
                    badge: 'Low KM Dismantled',
                    badgeColor: 'bg-green-100 text-green-700',
                    price: '₹12,000 – ₹18,000',
                    priceColor: 'text-green-600',
                  },
                  {
                    name: 'Swift / Dzire Engine Block & Assembly',
                    badge: 'Tested Compression',
                    badgeColor: 'bg-blue-100 text-blue-700',
                    price: '₹20,000 – ₹35,000',
                    priceColor: 'text-slate-900',
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    <td className="p-3 font-bold text-slate-900">{row.name}</td>
                    <td className="p-3">
                      <span className={`${row.badgeColor} px-2 py-0.5 rounded-md text-[11px] font-bold`}>
                        {row.badge}
                      </span>
                    </td>
                    <td className={`p-3 font-extrabold ${row.priceColor}`}>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 7. IMAGE 2 — with fallback */}
        <div className="bg-white rounded-[20px] p-4 border border-slate-100 mb-6 shadow-sm">
          <SafeImage
            src="/images/gearbox-testing-inspection.jpg"
            alt="Testing Maruti Swift Dzire Gearbox Shaft and Internal Teeth"
            width={700}
            height={400}
          />
          <p className="text-[13px] text-slate-600 text-center mt-2.5 font-medium">
            🛠️ Live Inspection of Gear Teeth &amp; Shafts Before Dispatch
          </p>
        </div>

        {/* 8. FAQ CARD */}
        <div className="bg-white rounded-[20px] p-5 border border-slate-100 mb-6">
          <h3 className="text-lg font-extrabold text-slate-900 mb-3">
            🔍 How to select the right gearbox for your Swift / Dzire?
          </h3>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1.5 leading-relaxed">
            <li>
              <strong>Swift / Dzire Petrol (2005 - Present):</strong> Uses 1.2L K-Series (K12) or 1.3L G13B petrol manual/AMT gearbox.
            </li>
            <li>
              <strong>Swift / Dzire Diesel (2007 - 2020):</strong> Uses 1.3L DDiS Fiat Multijet diesel gearbox assembly.
            </li>
            <li>
              <strong>Direct Call Support:</strong> Call us on{' '}
              <a href={`tel:${PHONE_NUMBER}`} className="text-blue-600 font-bold hover:underline">
                {PHONE_NUMBER}
              </a>{' '}
              to match exact compatibility.
            </li>
          </ul>
        </div>

        {/* 9. BOTTOM CTA CARD (extra conversion booster) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[20px] p-6 text-white text-center mb-6">
          <h3 className="text-lg font-extrabold mb-2">Ready to save 70% on your gearbox?</h3>
          <p className="text-sm text-slate-300 mb-4">
            Send us your car model &amp; year on WhatsApp — instant quote in 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-full font-bold text-sm transition"
            >
              💬 WhatsApp Now
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex-1 bg-white text-slate-900 hover:bg-slate-100 py-3 px-4 rounded-full font-bold text-sm transition"
            >
              📞 Call {PHONE_NUMBER}
            </a>
          </div>
        </div>

      </div>

      {/* 10. STICKY BOTTOM BAR (fixed zIndex bug) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2.5 px-4 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="max-w-3xl mx-auto flex gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-bold text-[14px] shadow-lg shadow-green-500/40 transition"
          >
            💬 WhatsApp
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-full font-bold text-[14px] transition"
          >
            📞 Call
          </a>
        </div>
      </div>

    </div>
  )
}
