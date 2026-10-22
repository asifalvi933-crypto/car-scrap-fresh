import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Second Hand Maruti WagonR K-Series & F10D Spare Parts, Engine Price | Car Scrap Hub',
  description: 'Buy original tested Maruti WagonR K-Series, F10D & New Model second-hand scrap parts. Tested Engines, Gearbox, Doors & Suspension with live video proof.',
  keywords: [
    'WagonR K Series engine price',
    'WagonR F10D scrap parts',
    'WagonR second hand gearbox',
    'Maruti WagonR K10B engine assembly',
    'WagonR old model body parts',
    'WagonR scrap yard Delhi NCR UP'
  ],
  alternates: {
    canonical: 'https://carscraphub.in/scrap-parts/maruti-wagonr',
  },
};

export default function WagonRScrapPage() {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': 'Second Hand Maruti WagonR K-Series & F10D Original Tested Scrap Parts',
    'image': 'https://carscraphub.in/images/maruti-wagonr-part.jpg',
    'description': 'Original scrap yard tested Maruti WagonR K-Series, F10D, and New Shape spare parts including engines, gearboxes, headlights, and body panels with video proof.',
    'brand': {
      '@type': 'Brand',
      'name': 'Maruti Suzuki',
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'INR',
      'lowPrice': '1200',
      'highPrice': '28000',
      'offerCount': '60',
      'itemCondition': 'https://schema.org/UsedCondition',
      'availability': 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingBottom: '80px' }}>
        
        {/* Top Announcement Bar */}
        <div style={{ backgroundColor: '#eab308', color: '#000000', textAlign: 'center', fontWeight: 'bold', fontSize: '14px', padding: '10px 16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          ⚡ 100% Tested OEM Parts | K-Series & F10D Stock Ready | Video Testing Before Dispatch
        </div>

        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px 16px' }}>
          
          {/* Breadcrumb Navigation */}
          <nav style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
            <a href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</a> &gt; <a href="/scrap-parts" style={{ color: '#2563eb', textDecoration: 'none' }}>Scrap Parts</a> &gt; <span style={{ color: '#0f172a', fontWeight: '600' }}>Maruti WagonR</span>
          </nav>

          {/* Hero Heading Section */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
            <span style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              ✓ Verified Dismantling Yard Stock
            </span>
            
            <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginTop: '12px', marginBottom: '12px', lineHeight: '1.2' }}>
              Original Second-Hand Maruti WagonR Scrap Parts & K-Series Engine
            </h1>
            
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.5', marginBottom: '20px' }}>
              Find 100% original tested scrap spare parts for all WagonR variants including <strong>WagonR K-Series (K10B/1.2L)</strong>, <strong>F10D Old Model</strong>, and <strong>New Shape AGS/Automatic</strong>. Get live video compression testing proof before delivery.
            </p>

            {/* Direct WhatsApp Call To Action Button */}
            <a
              href="https://wa.me/916395948240?text=Hi,%20I%20need%20parts%20for%20Maruti%20WagonR%20K-Series"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#25d366', color: '#ffffff', fontWeight: 'bold', fontSize: '16px', padding: '14px 24px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)' }}
            >
              💬 Inquire WagonR K-Series / F10D Price on WhatsApp
            </a>
          </div>

          {/* Trust Badges Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '4px' }}>🏎️</div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>All Variants Stock</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>K10B, F10D & 1.2L DualJet</div>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '4px' }}>📹</div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Live Video Proof</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Video test before payment</div>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '4px' }}>🚚</div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Doorstep Shipping</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Fast Delhi NCR & UP delivery</div>
            </div>
          </div>

          {/* Comprehensive Model-Wise Price List Table */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#0f172a' }}>
              Maruti WagonR Scrap Parts & Engine Price List (Model Wise)
            </h2>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0f172a', color: '#ffffff', textAlign: 'left', fontSize: '14px' }}>
                    <th style={{ padding: '12px 16px', borderRadius: '8px 0 0 8px' }}>Model / Part Name</th>
                    <th style={{ padding: '12px 16px' }}>Variant Type</th>
                    <th style={{ padding: '12px 16px' }}>Estimated Price</th>
                    <th style={{ padding: '12px 16px', borderRadius: '0 8px 8px 0' }}>Action</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '14px' }}>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>WagonR K-Series K10B Engine Assembly</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>K-Series 1.0L</span>
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold', color: '#0f172a' }}>₹16,000 – ₹28,000</td>
                    <td style={{ padding: '14px 16px' }}>
                      <a href="https://wa.me/916395948240?text=I%20need%20WagonR%20K%20Series%20Engine" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Get Video Test</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>WagonR F10D Engine Assembly (Old Model)</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ backgroundColor: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>F10D 1.1L / Duo</span>
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold', color: '#0f172a' }}>₹12,000 – ₹18,000</td>
                    <td style={{ padding: '14px 16px' }}>
                      <a href="https://wa.me/916395948240?text=I%20need%20WagonR%20F10D%20Engine" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Check Stock</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>Manual 5-Speed / AGS Gearbox Box</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>Tested Smooth Shift</span>
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold', color: '#0f172a' }}>₹7,000 – ₹13,000</td>
                    <td style={{ padding: '14px 16px' }}>
                      <a href="https://wa.me/916395948240?text=I%20need%20WagonR%20Gearbox" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Get Quote</a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>Original Doors, Hood & Diggi (Tailgate)</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>OEM Scratchless</span>
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold', color: '#0f172a' }}>₹2,200 – ₹4,800</td>
                    <td style={{ padding: '14px 16px' }}>
                      <a href="https://wa.me/916395948240?text=I%20need%20WagonR%20Body%20Parts" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Check Colors</a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>EPS Steering Column & Suspension Set</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>Electric Steering Tested</span>
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold', color: '#0f172a' }}>₹2,800 – ₹5,500</td>
                    <td style={{ padding: '14px 16px' }}>
                      <a href="https://wa.me/916395948240?text=I%20need%20WagonR%20Steering%20Suspension" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Order Now</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Model Identification Guide Section for Buyers */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>
              🔍 How to select the right parts for your WagonR?
            </h3>
            <ul style={{ fontSize: '14px', color: '#475569', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li><strong>WagonR K-Series (2010 – Present):</strong> Uses 1.0L K10B / 1.2L DualJet petrol engine with electronic throttle body.</li>
              <li><strong>WagonR F10D Old Model (2003 – 2010):</strong> Uses 1.1L 4-Cylinder F10D engine (Type 1, Type 2, Type 3 & Duo LPG/CNG).</li>
              <li><strong>Need Help?</strong> Send us a photo or RC copy of your WagonR on WhatsApp, and we will match the exact compatible part for you!</li>
            </ul>
          </div>

        </main>

        {/* Sticky Mobile Floating WhatsApp Button */}
        <div style={{ position: 'fixed', bottom: '16px', left: '16px', right: '16px', zIndex: 100 }}>
          <a
            href="https://wa.me/916395948240?text=Hi,%20I%20am%20looking%20for%20Maruti%20WagonR%20K-Series%20or%20F10D%20Scrap%20Parts"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#25d366', color: '#ffffff', fontWeight: 'bold', fontSize: '16px', padding: '14px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
          >
            💬 Click Here To Buy WagonR Parts On WhatsApp
          </a>
        </div>

      </div>
    </>
  );
}
