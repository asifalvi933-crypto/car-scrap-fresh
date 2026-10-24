import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swift & Dzire Gearbox: New Showroom vs Original Second-Hand Price Comparison',
  description: 'Swift aur Dzire gearbox replacement price comparison. Learn how buying an original second-hand gearbox from Mayapuri scrap market saves 70% cost with live video testing.',
  keywords: [
    'Swift second hand gearbox price',
    'Dzire original gearbox scrap market Mayapuri',
    'Swift gearbox noise problem solution',
    'Second hand gearbox Moradabad Delhi NCR',
    'Maruti Suzuki original used spare parts'
  ]
}

export default function GearboxComparisonBlog() {
  const whatsappUrl = "https://wa.me/916395948240?text=Hi%20Car%20Scrap%20Hub,%20I%20want%20to%20check%20Swift/Dzire%20gearbox%20price"

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b', paddingBottom: '90px' }}>
      
      {/* 1. TOP YELLOW NOTICE BANNER */}
      <div style={{ backgroundColor: '#eab308', color: '#000000', textAlign: 'center', padding: '10px 15px', fontWeight: '700', fontSize: '13px', letterSpacing: '0.2px' }}>
        ⚡ 100% Tested OEM Parts | Swift Dzire Stock Ready | Live Video Testing Before Dispatch
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '15px' }}>
        
        {/* 2. BREADCRUMBS */}
        <nav style={{ fontSize: '13px', color: '#2563eb', marginBottom: '15px' }}>
          <Link href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</Link> &gt;{' '}
          <Link href="/blog" style={{ color: '#2563eb', textDecoration: 'none' }}>Blog</Link> &gt;{' '}
          <span style={{ color: '#64748b' }}>Swift & Dzire Gearbox</span>
        </nav>

        {/* 3. MAIN HERO CARD */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px', border: '1px solid #f1f5f9', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
          
          <div style={{ display: 'inline-block', backgroundColor: '#dcfce7', color: '#15803d', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '14px' }}>
            ✓ VERIFIED DISMANTLING YARD STOCK
          </div>

          <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', lineHeight: '1.3', marginBottom: '12px', marginTop: 0 }}>
            Original Second-Hand Maruti Swift & Dzire Gearbox Guide
          </h1>

          <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
            Agar aapki Maruti Swift ya Swift Dzire ke gearbox mein noise, gear slipping ya hard shifting ki problem hai, toh showroom ke ₹45,000+ spend karne ke bajaye original scrap gearbox lagayein. Live video compression proof ke sath.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', width: '100%', backgroundColor: '#22c55e', color: '#ffffff', textAlign: 'center', padding: '14px 20px', borderRadius: '30px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)', boxSizing: 'border-box' }}
          >
            💬 Check Swift / Dzire Gearbox Price on WhatsApp
          </a>
        </div>

        {/* 4. FEATURE BADGES (3-CARDS GRID) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '25px' }}>
          
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '16px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <span style={{ fontSize: '24px', display: 'block', marginBottom: '6px' }}>🔧</span>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>100% OEM Original</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>Genuine Factory Parts</div>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '16px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <span style={{ fontSize: '24px', display: 'block', marginBottom: '6px' }}>📹</span>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Live Video Proof</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>Video test before payment</div>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '16px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <span style={{ fontSize: '24px', display: 'block', marginBottom: '6px' }}>🚚</span>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Doorstep Shipping</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>Fast Delhi NCR, UP & Pan India</div>
          </div>

        </div>

        {/* 5. SHARP & NON-BLURRY FEATURED IMAGE 1 */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '15px', border: '1px solid #f1f5f9', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <div style={{ width: '100%', backgroundColor: '#f1f5f9', borderRadius: '12px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src="/images/swift-dzire-gearbox-scrap.jpg"
              alt="Original Maruti Swift Dzire Second Hand Gearbox Mayapuri Scrap Market Moradabad"
              width={700}
              height={400}
              priority
              style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'contain' }}
            />
          </div>
          <p style={{ fontSize: '13px', color: '#475569', textAlign: 'center', marginTop: '10px', marginBottom: '0', fontWeight: '500' }}>
            📸 Original Dismantled Swift/Dzire Gearbox (100% Tested at Yard)
          </p>
        </div>

        {/* 6. PRICE COMPARISON TABLE CARD */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)', marginBottom: '25px' }}>
          
          <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', marginTop: 0 }}>
            Maruti Swift / Dzire Gearbox Price List
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                  <th style={{ padding: '12px 10px', borderRadius: '8px 0 0 0' }}>Part Name / Type</th>
                  <th style={{ padding: '12px 10px' }}>Condition / Quality</th>
                  <th style={{ padding: '12px 10px', borderRadius: '0 8px 0 0' }}>Estimated Price</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px 10px', fontWeight: '700', color: '#0f172a' }}>
                    Showroom Brand New Gearbox Assembly
                  </td>
                  <td style={{ padding: '12px 10px' }}>
                    <span style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>
                      Brand New
                    </span>
                  </td>
                  <td style={{ padding: '12px 10px', fontWeight: '800', color: '#dc2626' }}>
                    ₹42,000 – ₹55,000+
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px 10px', fontWeight: '700', color: '#0f172a' }}>
                    Swift/Dzire Manual (DDiS/K-Series) Gearbox
                  </td>
                  <td style={{ padding: '12px 10px' }}>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>
                      Smooth Shift Tested
                    </span>
                  </td>
                  <td style={{ padding: '12px 10px', fontWeight: '800', color: '#16a34a' }}>
                    ₹9,000 – ₹14,000
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px 10px', fontWeight: '700', color: '#0f172a' }}>
                    Dzire AGS / AMT Automatic Gearbox Casing Unit
                  </td>
                  <td style={{ padding: '12px 10px' }}>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>
                      Low KM Dismantled
                    </span>
                  </td>
                  <td style={{ padding: '12px 10px', fontWeight: '800', color: '#16a34a' }}>
                    ₹12,000 – ₹18,000
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: '12px 10px', fontWeight: '700', color: '#0f172a' }}>
                    Swift / Dzire Engine Block & Assembly
                  </td>
                  <td style={{ padding: '12px 10px' }}>
                    <span style={{ backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>
                      Tested Compression
                    </span>
                  </td>
                  <td style={{ padding: '12px 10px', fontWeight: '800', color: '#0f172a' }}>
                    ₹20,000 – ₹35,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 7. SHARP SECONDARY IMAGE 2 */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '15px', border: '1px solid #f1f5f9', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <div style={{ width: '100%', backgroundColor: '#f1f5f9', borderRadius: '12px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src="/images/gearbox-testing-inspection.jpg"
              alt="Testing Maruti Swift Dzire Gearbox Shaft and Internal Teeth"
              width={700}
              height={400}
              style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'contain' }}
            />
          </div>
          <p style={{ fontSize: '13px', color: '#475569', textAlign: 'center', marginTop: '10px', marginBottom: '0', fontWeight: '500' }}>
            🛠️ Live Inspection of Gear Teeth & Shafts Before Dispatch
          </p>
        </div>

        {/* 8. INFO / FAQ CARD */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #f1f5f9', marginBottom: '25px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '12px', marginTop: 0 }}>
            🔍 How to select the right gearbox for your Swift / Dzire?
          </h3>
          <ul style={{ fontSize: '14px', color: '#334155', paddingLeft: '20px', margin: 0, lineHeight: '1.7' }}>
            <li><strong>Swift / Dzire Petrol (2005 - Present):</strong> Uses 1.2L K-Series (K12) or 1.3L G13B petrol manual/AMT gearbox.</li>
            <li><strong>Swift / Dzire Diesel (2007 - 2020):</strong> Uses 1.3L DDiS Fiat Multijet diesel gearbox assembly.</li>
            <li><strong>Direct Call Support:</strong> Call us on <a href="tel:6395948240" style={{ color: '#2563eb', fontWeight: '700' }}>6395948240</a> to match exact compatibility.</li>
          </ul>
        </div>

      </div>

      {/* 9. STICKY BOTTOM FLOATING WHATSAPP BAR (MOBILE PERFECT) */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '10px 15px', zindex: 1000, boxShadow: '0 -4px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', backgroundColor: '#22c55e', color: '#ffffff', textAlign: 'center', padding: '13px', borderRadius: '30px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)' }}
          >
            💬 Click Here To Buy Swift / Dzire Parts On WhatsApp
          </a>
        </div>
      </div>

    </div>
  )
}
