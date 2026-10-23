import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Original Second-Hand Maruti Ertiga Scrap Parts & Engine Price List | Car Scrap Hub',
  description: 'Get verified OEM second-hand spare parts for Maruti Ertiga (1.3L DDiS Diesel, 1.4L/1.5L Petrol & CNG). Save up to 70% with live video testing proof before dispatch.',
  keywords: [
    'used ertiga engine price',
    'ertiga second hand parts delhi',
    'ertiga 3rd row seats used',
    'ertiga scrap gearbox',
    'ertiga cng kit second hand'
  ],
};

export default function ErtigaScrapPage() {
  const whatsappNumber = "916395948240";
  const whatsappMsg = encodeURIComponent("Hello Car Scrap Hub, I need second-hand spare parts for Maruti Ertiga.");

  const priceList = [
    { name: "Ertiga 1.3L DDiS Diesel Engine Assembly", condition: "Tested Compression", price: "₹24,000 – ₹38,000", color: "bg-green-100 text-green-800" },
    { name: "Ertiga 1.5L K15B Petrol Engine Assembly", condition: "Low KM / Verified", price: "₹30,000 – ₹48,000", color: "bg-blue-100 text-blue-800" },
    { name: "Ertiga 5-Speed Manual / Automatic Transmission", condition: "Smooth Shift Tested", price: "₹11,000 – ₹20,000", color: "bg-green-100 text-green-800" },
    { name: "Original 2nd & 3rd Row Seat Set Assembly", condition: "OEM Clean Fabric", price: "₹8,000 – ₹14,000", color: "bg-purple-100 text-purple-800" },
    { name: "Factory CNG Injector Rail + ECU Unit", condition: "Original Working", price: "₹6,000 – ₹11,000", color: "bg-amber-100 text-amber-800" },
    { name: "Rear Tailgate (Diggi) & Bumper Assembly", condition: "OEM Scratchless", price: "₹4,500 – ₹8,500", color: "bg-blue-100 text-blue-800" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 font-sans">
      {/* Top Banner */}
      <div className="bg-amber-400 text-slate-900 font-bold text-center text-xs md:text-sm py-2 px-3 shadow-sm">
        ⚡ 100% Tested OEM Parts | Maruti Ertiga Diesel, Petrol & CNG Stock Ready | Live Video Testing
      </div>

      <div className="max-w-xl mx-auto px-4 pt-4">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-4">
          <span>Home</span> &gt; <span>Scrap Parts</span> &gt; <span className="font-semibold text-slate-700">Maruti Ertiga</span>
        </nav>

        {/* Main Hero Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-4 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-bold text-xs px-3 py-1 rounded-full mb-3">
            ✓ VERIFIED DISMANTLING YARD STOCK
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-3">
            Original Second-Hand Maruti Ertiga Scrap Parts
          </h1>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Find tested OEM second-hand parts for <strong className="text-slate-800">Maruti Ertiga (Petrol, Diesel & Company CNG)</strong>. Save up to 70% compared to showroom prices with 100% live video testing proof before dispatch.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-6 py-3.5 rounded-full w-full shadow-md transition-all active:scale-95"
          >
            <span>💬</span> Check Ertiga Parts & Price on WhatsApp
          </a>
        </div>

        {/* Feature Cards Grid */}
        <div className="space-y-3 mb-6">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100">
            <div className="text-2xl mb-1">🚐</div>
            <div className="font-bold text-slate-800 text-sm">Ertiga All Generations</div>
            <div className="text-xs text-slate-500">First Gen & Next-Gen Ertiga Stock Available</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100">
            <div className="text-2xl mb-1">📹</div>
            <div className="font-bold text-slate-800 text-sm">Live Video Proof</div>
            <div className="text-xs text-slate-500">Video test before payment</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100">
            <div className="text-2xl mb-1">🚚</div>
            <div className="font-bold text-slate-800 text-sm">Doorstep Shipping</div>
            <div className="text-xs text-slate-500">Fast Delhi NCR & UP delivery</div>
          </div>
        </div>

        {/* Price List Table Card */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Maruti Ertiga Scrap Parts & Engine Price List
          </h2>

          <div className="overflow-hidden rounded-xl border border-slate-100">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-slate-900 text-white font-semibold">
                <tr>
                  <th className="p-3">Spare Part Name</th>
                  <th className="p-3">Condition / Quality</th>
                  <th className="p-3 text-right">Estimated Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {priceList.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3 font-medium text-slate-800">{item.name}</td>
                    <td className="p-3">
                      <span className={`inline-block font-medium px-2 py-0.5 rounded-md text-[11px] ${item.color}`}>
                        {item.condition}
                      </span>
                    </td>
                    <td className="p-3 text-right font-bold text-slate-900 whitespace-nowrap">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Green WhatsApp Bar */}
      <div className="fixed bottom-3 left-0 right-0 px-4 z-50">
        <div className="max-w-xl mx-auto">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm md:text-base py-3.5 px-6 rounded-full shadow-lg border border-emerald-400 transition-all active:scale-95"
          >
            <span>💬</span> Click Here To Buy Ertiga Parts On WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
