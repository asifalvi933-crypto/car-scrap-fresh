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

  // Maruti Suzuki Parts Gallery Images (Exact Brezza / Suzuki Spare Parts)
  const partGallery = [
    { 
      name: "Vitara Brezza DDiS Diesel Engine", 
      img: "https://images.unsplash.com/photo-1597766353815-5e634cb19941?auto=format&fit=crop&w=500&q=80", 
      tag: "Tested Compression" 
    },
    { 
      name: "Front Bumper & Headlight Assembly", 
      img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=500&q=80", 
      tag: "OEM Scratchless" 
    },
    { 
      name: "16-Inch Brezza Original Alloy Wheels", 
      img: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0d?auto=format&fit=crop&w=500&q=80", 
      tag: "Fresh Stock" 
    },
  ];

  const priceList = [
    { name: "Vitara Brezza DDiS 200 Diesel Engine Assembly", condition: "Tested Compression", price: "₹25,000 – ₹42,000", color: "#dcfce7", textColor: "#166534" },
    { name: "Brezza K15B / K15C Petrol Engine Assembly", condition: "Low KM / Verified", price: "₹28,000 – ₹45,000", color: "#dbeafe", textColor: "#1e40af" },
    { name: "5-Speed Manual / AMT Automatic Gearbox Box", condition: "Smooth Shift Tested", price: "₹10,000 – ₹18,000", color: "#dcfce7", textColor: "#166534" },
    { name: "Original Front Bumper & Chrome Grille Assembly", condition: "OEM Scratchless", price: "₹3,500 – ₹6,500", color: "#fef3c7", textColor: "#92400e" },
    { name: "LED Projector Headlight Set (L/R Pair)", condition: "Original Working", price: "₹5,000 – ₹9,500", color: "#f3e8ff", textColor: "#6b21a8" },
    { name: "16-Inch Original Alloy Wheels (Set of 4)", condition: "Unbent / Fresh", price: "₹12,000 – ₹18,000", color: "#dbeafe", textColor: "#1e40af" },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#1e293b', minHeight: '100vh', paddingBottom: '100px', fontFamily: 'sans-serif' }}>
      {/* Top Yellow Banner */}
      <div style={{ backgroundColor: '#fbbf24', color: '#0f172a', fontWeight: 'bold', textAlign: 'center', fontSize: '13px', padding: '8px 12px' }}>
        ⚡ 100% Tested OEM Parts | Vitara Brezza Diesel & Petrol Stock Ready | Live Video Testing Before Payment
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>
          <span>Home</span> &gt; <span>Scrap Parts</span> &gt; <span style={{ fontWeight: 'bold', color: '#334155' }}>Maruti Vitara Brezza</span>
        </nav>

        {/* Main Hero Card */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '20px', border: '1px solid #e2e8f0', textAlign: 'center', marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#dcfce7', color: '#166534', fontWeight: 'bold', fontSize: '12px', padding: '4px 12px', borderRadius: '9999px', marginBottom: '12px' }}>
            ✓ VERIFIED DISMANTLING YARD STOCK
          </div>
          
          {/* Exact Maruti Vitara Brezza SUV Image */}
          <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#f1f5f9', marginBottom: '16px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80" 
              alt="Maruti Suzuki Vitara Brezza Scrap Parts" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span style={{ position: 'absolute', bottom: '8px', right: '8px', backgroundColor: 'rgba(15, 23, 42, 0.85)', color: '#ffffff', fontSize: '10px', padding: '2px 8px', borderRadius: '6px' }}>
              Brezza Stock In Yard
            </span>
          </div>

          <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', lineHeight: '1.3', marginBottom: '12px' }}>
            Original Second-Hand Maruti Vitara Brezza Scrap Parts
          </h1>
          <p style={{ fontSize: '13px', color: '#475569', marginBottom: '20px', lineHeight: '1.5' }}>
            Get tested OEM second-hand parts for <strong>Vitara Brezza (1.3L DDiS Diesel)</strong> and <strong>Petrol (K15B/K15C)</strong>. Save up to 70% compared to showroom prices with 100% live video testing guarantee before dispatch.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyCenter: 'center', gap: '8px', backgroundColor: '#10b981', color: '#ffffff', fontWeight: 'bold', fontSize: '15px', padding: '14px 20px', borderRadius: '9999px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(16,185,129,0.3)', width: '100%', boxSizing: 'border-box' }}
          >
            <span>💬</span> Check Brezza Parts & Price on WhatsApp
          </a>
        </div>

        {/* Real Part Photos Gallery */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px' }}>
            📷 Live Stock & Available Spare Parts
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {partGallery.map((part, index) => (
              <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '8px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '90px', borderRadius: '10px', overflow: 'hidden', marginBottom: '8px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={part.img} alt={part.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#1e293b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{part.name}</div>
                <span style={{ display: 'inline-block', backgroundColor: '#dcfce7', color: '#166534', fontSize: '9px', fontWeight: '600', padding: '2px 6px', borderRadius: '4px', marginTop: '4px' }}>
                  {part.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '14px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '20px' }}>🚗</div>
            <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#1e293b' }}>Vitara Brezza All Models</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>LDi, VDi, ZDi, LXi, VXi, ZXi & Smart Hybrid</div>
          </div>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '14px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '20px' }}>📹</div>
            <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#1e293b' }}>Live Video Proof</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>Video test & compression proof before payment</div>
          </div>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '14px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '20px' }}>🚚</div>
            <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#1e293b' }}>Doorstep Shipping</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>Fast Delhi NCR, UP & Nationwide delivery</div>
          </div>
        </div>

        {/* Price List Table Card */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '16px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px' }}>
            Maruti Vitara Brezza Scrap Parts Price List
          </h2>

          <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
              <thead style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                <tr>
                  <th style={{ padding: '10px' }}>Spare Part Name</th>
                  <th style={{ padding: '10px' }}>Condition</th>
                  <th style={{ padding: '10px', textAlign: 'right' }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {priceList.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '10px', fontWeight: '500', color: '#334155' }}>{item.name}</td>
                    <td style={{ padding: '10px' }}>
                      <span style={{ backgroundColor: item.color, color: item.textColor, padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>
                        {item.condition}
                      </span>
                    </td>
                    <td style={{ padding: '10px', textAlign: 'right', fontWeight: 'bold', color: '#0f172a', whiteSpace: 'nowrap' }}>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Green WhatsApp Bar */}
      <div style={{ position: 'fixed', bottom: '12px', left: '0', right: '0', padding: '0 16px', zIndex: 1000 }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#10b981', color: '#ffffff', fontWeight: 'bold', fontSize: '14px', padding: '14px 20px', borderRadius: '9999px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(16,185,129,0.4)', border: '1px solid #34d399' }}
          >
            <span>💬</span> Click Here To Buy Brezza Parts On WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
