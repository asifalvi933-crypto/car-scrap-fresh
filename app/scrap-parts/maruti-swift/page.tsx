import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Second Hand Maruti Swift Spare Parts & Engine Price | Car Scrap Hub',
  description: 'Buy 100% original tested Maruti Swift second-hand parts (Gen 1 to Gen 4). Tested Engines, Gearbox, Bumpers & LED Headlights with live video testing in Delhi NCR & UP.',
  keywords: ['Second hand Maruti Swift parts', 'Swift scrap engine price', 'Swift gearbox second hand', 'Swift original headlight'],
  alternates: {
    canonical: 'https://carscraphub.in/scrap-parts/maruti-swift',
  },
};

export default function SwiftScrapPage() {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': 'Second Hand Maruti Swift Original Tested Parts & Engine',
    'image': 'https://carscraphub.in/images/maruti-swift-part.jpg',
    'description': 'Original scrap yard tested Maruti Swift spare parts including K-Series engines, gearboxes, headlights, and bumpers with video proof.',
    'brand': {
      '@type': 'Brand',
      'name': 'Maruti Suzuki',
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'INR',
      'lowPrice': '1500',
      'highPrice': '32000',
      'offerCount': '45',
      'itemCondition': 'https://schema.org/UsedCondition',
      'availability': 'https://schema.org/InStock',
    },
  };

  return (
    <>
      {/* Google Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-gray-50 min-h-screen text-gray-800 font-sans pb-16">
        {/* Top Announcement Bar */}
        <div className="bg-yellow-400 text-black text-center text-sm font-bold py-2 px-4">
          ⚡ 100% Tested OEM Parts | Video Verification Available Before Payment | Fast NCR & UP Delivery
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/" className="hover:underline">Home</a> &gt; <a href="/scrap-parts" className="hover:underline">Scrap Parts</a> &gt; <span className="text-gray-800 font-medium">Maruti Swift</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Original Second-Hand Maruti Swift Scrap Parts & Engine
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Get tested OEM Maruti Swift spare parts from verified vehicle dismantling yards. Save up to 70% compared to showroom prices with 100% video testing guarantee before dispatch.
          </p>

          {/* Action CTA Button */}
          <div className="mb-8">
            <a
              href="https://wa.me/916395948240?text=Hi,%20I%20need%20parts%20for%20Maruti%20Swift"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg text-lg"
            >
              💬 Inquire Price on WhatsApp
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <span className="text-2xl">🔧</span>
              <h3 className="font-bold mt-1 text-sm">100% OEM Original</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <span className="text-2xl">📹</span>
              <h3 className="font-bold mt-1 text-sm">Live Video Proof</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <span className="text-2xl">🚚</span>
              <h3 className="font-bold mt-1 text-sm">Fast NCR & UP Delivery</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <span className="text-2xl">💵</span>
              <h3 className="font-bold mt-1 text-sm">Best Scrap Rates</h3>
            </div>
          </div>
        </section>

        {/* Swift Generation Selection */}
        <section className="max-w-6xl mx-auto px-4 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Select Maruti Swift Generation / Model Year</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white border-2 border-yellow-400 p-4 rounded-lg text-center cursor-pointer">
              <span className="block font-bold text-slate-900">Swift Gen 1</span>
              <span className="text-xs text-gray-500">(2005 - 2011) G13B / DDiS</span>
            </div>
            <div className="bg-white border p-4 rounded-lg text-center hover:border-yellow-400 cursor-pointer">
              <span className="block font-bold text-slate-900">Swift Gen 2</span>
              <span className="text-xs text-gray-500">(2011 - 2017) K12 / DDiS</span>
            </div>
            <div className="bg-white border p-4 rounded-lg text-center hover:border-yellow-400 cursor-pointer">
              <span className="block font-bold text-slate-900">Swift Gen 3</span>
              <span className="text-xs text-gray-500">(2018 - 2024) DualJet K-Series</span>
            </div>
            <div className="bg-white border p-4 rounded-lg text-center hover:border-yellow-400 cursor-pointer">
              <span className="block font-bold text-slate-900">Swift New Gen</span>
              <span className="text-xs text-gray-500">(2024+) Z-Series Engine</span>
            </div>
          </div>
        </section>

        {/* Estimated Price List Table */}
        <section className="max-w-6xl mx-auto px-4 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Maruti Swift Used Spare Parts Estimated Price List
          </h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm">
                  <th className="p-4">Spare Part Name</th>
                  <th className="p-4">Condition / Guarantee</th>
                  <th className="p-4">Estimated Scrap Price</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                <tr>
                  <td className="p-4 font-semibold">Swift K-Series / Diesel Engine Assembly</td>
                  <td className="p-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Tested Compression</span></td>
                  <td className="p-4 font-bold text-slate-900">₹18,000 – ₹32,000</td>
                  <td className="p-4"><a href="https://wa.me/916395948240?text=Need%20Swift%20Engine" className="text-green-600 font-bold hover:underline">Get Video Proof</a></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Swift Manual / AMT Gearbox</td>
                  <td className="p-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Smooth Gear Shift Tested</span></td>
                  <td className="p-4 font-bold text-slate-900">₹8,000 – ₹14,000
