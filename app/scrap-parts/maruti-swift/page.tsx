import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Second Hand Maruti Swift Spare Parts & Engine Price | Car Scrap Hub',
  description: 'Buy 100% original tested Maruti Swift second-hand parts. Tested Engines, Gearbox & Bumpers with live video testing.',
  alternates: {
    canonical: 'https://carscraphub.in/scrap-parts/maruti-swift',
  },
};

export default function SwiftScrapPage() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-800 font-sans pb-16">
      <div className="bg-yellow-400 text-black text-center text-sm font-bold py-2 px-4">
        ⚡ 100% Tested OEM Parts | Video Verification Before Payment | Fast Delivery
      </div>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Original Second-Hand Maruti Swift Scrap Parts & Engine
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Get tested OEM Maruti Swift spare parts from verified vehicle dismantling yards. Save up to 70% compared to showroom prices.
        </p>

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

        {/* Price Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-sm">
                <th className="p-4">Spare Part Name</th>
                <th className="p-4">Condition</th>
                <th className="p-4">Estimated Scrap Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              <tr>
                <td className="p-4 font-semibold">Swift K-Series / Diesel Engine Assembly</td>
                <td className="p-4">Tested Compression</td>
                <td className="p-4 font-bold text-slate-900">₹18,000 – ₹32,000</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Swift Manual / AMT Gearbox</td>
                <td className="p-4">Smooth Gear Shift Tested</td>
                <td className="p-4 font-bold text-slate-900">₹8,000 – ₹14,000</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Original Front & Rear Bumpers</td>
                <td className="p-4">OEM Scratchless</td>
                <td className="p-4 font-bold text-slate-900">₹1,800 – ₹3,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
