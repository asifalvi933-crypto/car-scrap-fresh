import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Second Hand Maruti Alto 800 & Alto K10 Spare Parts, Engine Price | Car Scrap Hub',
  description: 'Buy 100% original tested Maruti Alto 800 & Alto K10 second-hand scrap parts. Tested Engines, Gearbox, Doors & Bumpers with live video proof.',
  keywords: [
    'Maruti Alto 800 engine price second hand',
    'Alto K10 scrap parts price',
    'Alto 800 gearbox scrap market'
  ],
  alternates: {
    canonical: 'https://carscraphub.in/scrap-parts/maruti-alto',
  },
};

export default function AltoScrapPage() {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': 'Second Hand Maruti Alto 800 & Alto K10 Original Tested Scrap Parts',
    'image': 'https://carscraphub.in/images/maruti-alto-part.jpg',
    'description': 'Original scrap yard tested Maruti Alto 800 and Alto K10 spare parts.',
    'brand': {
      '@type': 'Brand',
      'name': 'Maruti Suzuki',
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'INR',
      'lowPrice': '1000',
      'highPrice': '22000',
      'offerCount': '50',
      'itemCondition': 'https://schema.org/UsedCondition',
      'availability': 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingBottom: '80px' }}>
        
        <div style={{ backgroundColor: '#eab308', color: '#000000', textAlign: 'center', fontWeight: 'bold', fontSize: '14px', padding: '10px 16px' }}>
          ⚡ 100% Tested OEM Parts | Alto 800 & K10 Stock Ready | Live Video Testing Before Payment
        </div>

        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px 16px' }}>
          
          <nav style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
            <a href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</a> &gt; <a href="/scrap-parts" style={{ color: '#2563eb', textDecoration: 'none' }}>Scrap Parts</a> &gt; <span style={{ color: '#0f172a', fontWeight: '600' }}>Maruti Alto</span>
          </nav>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
            <span style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>
              ✓ Verified Dismantling Yard Stock
            </span>
            
            <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginTop: '12px', marginBottom: '12px', lineHeight: '1.2' }}>
              Original Second-Hand Maruti Alto 800 & Alto K10 Scrap Parts
            </h1>

            {/* REAL PRODUCT/CAR IMAGE BLOCK */}
            <div style={{ width: '100%', height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px', border: '1px solid #e2e8f0' }}>
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" 
                alt="Maruti Alto 800 and K10 Second Hand Parts" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.5', marginBottom: '20px' }}>
              Get tested OEM second-hand parts for <strong>Maruti Alto 800 (F8D Engine)</strong> and <strong>Alto K10 (K10B Engine)</strong>.
            </p>

            <a href="https://wa.me/916395948240?text=Hi,%20I%20need%20parts%20for%20Maruti%20Alto" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#25d366', color: '#ffffff', fontWeight: 'bold', fontSize: '16px', padding: '14px 24px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)' }}>
              💬 Check Alto Parts & Price on WhatsApp
            </a>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#0f172a' }}>
              Maruti Alto Scrap Parts Price List
            </h2>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0f172a', color: '#ffffff', textAlign: 'left', fontSize: '14px' }}>
                    <th style={{ padding: '12px 16px' }}>Spare Part Name</th>
                    <th style={{ padding: '12px 16px' }}>Condition / Quality</th>
                    <th style={{ padding: '12px 16px' }}>Estimated Price</th>
                    <th style={{ padding: '12px 16px' }}>Action</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '14px' }}>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>Alto 800 F8D / K10 Engine Assembly</td>
                    <td style={{ padding: '14px 16px' }}><span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>Tested Compression</span></td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold' }}>₹10,000 – ₹22,000</td>
                    <td style={{ padding: '14px 16px' }}><a href="https://wa.me/916395948240?text=I%20need%20Alto%20Engine" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Get Video Test</a></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>Alto 5-Speed Manual / AGS Gearbox</td>
                    <td style={{ padding: '14px 16px' }}><span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>Smooth Shift Tested</span></td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold' }}>₹5,500 – ₹10,000</td>
                    <td style={{ padding: '14px 16px' }}><a href="https://wa.me/916395948240?text=I%20need%20Alto%20Gearbox" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Get Quote</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>

        <div style={{ position: 'fixed', bottom: '16px', left: '16px', right: '16px', zIndex: 100 }}>
          <a href="https://wa.me/916395948240?text=Hi,%20I%20am%20looking%20for%20Maruti%20Alto%20Parts" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#25d366', color: '#ffffff', fontWeight: 'bold', fontSize: '16px', padding: '14px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}>
            💬 Click Here To Buy Alto Parts On WhatsApp
          </a>
        </div>

      </div>
    </>
  );
}
