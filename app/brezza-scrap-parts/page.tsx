import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Original Second-Hand Vitara Brezza Scrap Parts & Engine Price List | Car Scrap Hub',
  description: 'Get tested OEM second-hand parts for Maruti Vitara Brezza (DDiS Diesel & K15B/K15C Petrol). Save up to 70% with 100% live video testing guarantee before dispatch.',
  keywords: [
    'used brezza engine price',
    'vitara brezza second hand parts delhi',
    'brezza scrap parts moradabad',
    'brezza front bumper original used',
    'used brezza gearbox'
  ],
};

export default function BrezzaScrapPage() {
  const whatsappNumber = "916395948240";
  const whatsappMsg = encodeURIComponent("Hello Car Scrap Hub, I need second-hand spare parts for Maruti Vitara Brezza.");

  // Real Part Photos Array (Aap public/images folder me photo rakh kar path badal sakte ho)
  const partGallery = [
    { name: "Vitara Brezza DDiS Diesel Engine", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80", tag: "Tested Compression" },
    { name: "Front Bumper & LED Headlights", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=400&q=80", tag: "OEM Scratchless" },
    { name: "16-Inch Original Alloy Wheels", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80", tag: "Fresh Stock" },
  ];

  const priceList = [
    { name: "Vitara Brezza DDiS 200 Diesel Engine Assembly", condition: "Tested Compression", price: "₹25,000 – ₹42,000", color: "bg-green-100 text-green-800" },
    { name: "Brezza K15B / K15C Petrol Engine Assembly", condition: "Low KM / Verified", price: "₹28,000 – ₹45,000", color: "bg-blue-100 text-blue-800" },
    { name: "5-Speed Manual / AMT Automatic Gearbox Box", condition: "Smooth Shift Tested", price: "₹10,000 – ₹18,000", color: "bg-green-100 text-green-800" },
    { name: "Original Front Bumper & Chrome Grille Assembly", condition: "OEM Scratchless", price: "₹3,500 – ₹6,500", color: "bg-amber-100 text-amber-800" },
    { name: "LED Projector Headlight Set (L/R Pair)", condition: "Original Working", price: "₹5,000 – ₹9,500", color: "bg-purple-100 text-purple-800" },
    { name: "16-Inch Original Alloy Wheels (Set of 4)", condition: "Unbent / Fresh", price: "₹12,000 – ₹18,000", color: "bg-blue-100 text-blue-800" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 font-sans">
      {/* Top Banner */}
      <div className="bg-amber-400 text-slate-900 font-bold text-center text-xs md:text-sm py-2 px-3 shadow-sm">
        ⚡ 100% Tested OEM Parts | Vitara Brezza Diesel & Petrol Stock Ready | Live Video Testing Before Payment
      </div>

      <div className="max-w-xl mx-auto px-4 pt-4">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-4">
          <span>Home</span> &gt; <span>Scrap Parts</span> &gt; <span className="font-semibold text-slate-700">Maruti Vitara Brezza</span>
        </nav>

        {/* Main Hero Card with Main Car Photo */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-4 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-bold text-xs px-3 py-1 rounded-full mb-3">
            ✓ VERIFIED DISMANTLING YARD STOCK
          </div>
          
          {/* Featured Car Header Image */}
          <div className="relative w-full h-44 mb-4 rounded-2xl overflow-hidden bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80" 
              alt="Maruti Vitara Brezza Scrap Spare Parts" 
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded-md font-medium">
              Stock In Yard
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-3">
            Original Second-Hand Maruti Vitara Brezza Scrap Parts
          </h1>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Get tested OEM second-hand parts for <strong className="text-slate-800">Vitara Brezza (1.3L DDiS Diesel)</strong> and <strong className="text-slate-800">Petrol (K15B/K15C)</strong>. Save up to 70% compared to showroom prices with 100% live video testing guarantee before dispatch.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-6 py-3.5 rounded-full w-full shadow-md transition-all active:scale-95"
          >
            <span>💬</span> Check Brezza Parts & Price on WhatsApp
          </a>
        </div>

        {/* Real Dismantled Part Photos Gallery Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3 px-1">
            📷 Live Stock & Available Spare Parts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {partGallery.map((part, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-2">
                <div className="w-full h-28 bg-slate-100 rounded-xl overflow-hidden mb-2">
                  <img src={part.img} alt={part.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-xs font-bold text-slate-800 truncate mb-1">{part.name}</div>
