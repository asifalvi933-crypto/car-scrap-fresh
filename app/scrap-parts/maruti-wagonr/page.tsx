import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Second Hand Maruti WagonR K-Series & F10D Spare Parts, Engine Price | Car Scrap Hub',
  description: 'Buy original tested Maruti WagonR K-Series, F10D & New Model second-hand scrap parts. Tested Engines, Gearbox, Doors & Suspension with live video proof.',
  keywords: [
    'WagonR K Series engine price',
    'WagonR F10D scrap parts',
    'WagonR second hand gearbox',
    'Maruti WagonR K10B engine assembly'
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
    'description': 'Original scrap yard tested Maruti WagonR K-Series and F10D spare parts with live video testing.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingBottom: '80px' }}>
        
        <div style={{ backgroundColor: '#eab308', color: '#000000', textAlign: 'center', fontWeight: 'bold', fontSize: '14px', padding: '10px 16px' }}>
          ⚡ 100% Tested OEM Parts | K-Series & F10D Stock Ready | Video Testing Before Dispatch
        </div>

        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px 16px' }}>
          
          <nav style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
            <a href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</a> &gt; <a href="/scrap-parts" style={{ color: '#2563eb', textDecoration: 'none' }}>Scrap Parts</a> &gt; <span style={{ color: '#0f172a', fontWeight: '600' }}>Maruti WagonR</span>
          </nav>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
            <span style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>
              ✓ Verified Dismantling Yard Stock
            </span>
            
            <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginTop: '12px', marginBottom: '12px', lineHeight: '1.2' }}>
              Original Second-Hand Maruti WagonR Scrap Parts & K-Series Engine
            </h1>

            {/* REAL PRODUCT/CAR IMAGE BLOCK */}
            <div style={{ width: '100%', height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px', border: '1px solid #e2e8f0' }}>
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80" 
                alt="Maruti WagonR K-Series and F10D Scrap Parts" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.5', marginBottom: '20px' }}>
              Find 100% original tested scrap spare parts for all WagonR variants including <strong>WagonR K-Series (K10B/1.2L)</strong> and <strong>F10D Old Model</strong>.
            </p>

            <a href="https://wa.me/916395948240?text=Hi,%20I%20need%20parts%20for%20Maruti%20WagonR%20K-Series" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#25d366', color: '#ffffff', fontWeight: 'bold', fontSize: '16px', padding: '14px 24px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)' }}>
              💬 Inquire WagonR K-Series / F10D Price on WhatsApp
            </a>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#0f172a' }}>
              Maruti WagonR Scrap Parts Price List
            </h2>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0f172a', color: '#ffffff', textAlign: 'left', fontSize: '14px' }}>
                    <th style={{ padding: '12px 16px' }}>Model / Part Name</th>
                    <th style={{ padding: '12px 16px' }}>Variant Type</th>
                    <th style={{ padding: '12px 16px' }}>Estimated Price</th>
                    <th style={{ padding: '12px 16px' }}>Action</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '14px' }}>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>WagonR K-Series K10B Engine Assembly</td>
                    <td style={{ padding: '14px 16px' }}><span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>K-Series 1.0L</span></td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold' }}>₹16,000 – ₹28,000</td>
                    <td style={{ padding: '14px 16px' }}><a href="https://wa.me/916395948240?text=I%20need%20WagonR%20K%20Series%20Engine" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Get Video Test</a></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>WagonR F10D Engine Assembly (Old Model)</td>
                    <td style={{ padding: '14px 16px' }}><span style={{ backgroundColor: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>F10D 1.1L / Duo</span></td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold' }}>₹12,000 – ₹18,000</td>
                    <td style={{ padding: '14px 16px' }}><a href="https://wa.me/916395948240?text=I%20need%20WagonR%20F10D%20Engine" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Check Stock</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>

        <div style={{ position: 'fixed', bottom: '16px', left: '16px', right: '16px', zIndex: 100 }}>
          <a href="https://wa.me/916395948240?text=Hi,%20I%20am%20looking%20for%20Maruti%20WagonR%20Parts" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#25d366', color: '#ffffff', fontWeight: 'bold', fontSize: '16px', padding: '14px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}>
            💬 Click Here To Buy WagonR Parts On WhatsApp
          </a>
        </div>

      </div>
    </>
  );
}
