import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Second Hand Maruti Vitara Brezza Spare Parts, Engine Price | Car Scrap Hub',
  description: 'Buy 100% original tested Maruti Vitara Brezza (Diesel DDiS & Petrol K15) second-hand scrap parts. Tested Engines, Gearbox, Doors & Bumpers with live video proof.',
  keywords: [
    'Maruti Vitara Brezza engine price second hand',
    'Brezza scrap parts price',
    'Vitara Brezza gearbox scrap market'
  ],
  alternates: {
    canonical: 'https://carscraphub.in/scrap-parts/maruti-brezza',
  },
};

export default function BrezzaScrapPage() {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': 'Second Hand Maruti Vitara Brezza Original Tested Scrap Parts',
    'image': 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    'description': 'Original scrap yard tested Maruti Vitara Brezza spare parts.',
    'brand': {
      '@type': 'Brand',
      'name': 'Maruti Suzuki',
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'INR',
      'lowPrice': '3500',
      'highPrice': '45000',
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
          ⚡ 100% Tested OEM Parts | Vitara Brezza Stock Ready | Live Video Testing Before Payment
        </div>

        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px 16px' }}>
          
          <nav style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
            <a href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</a> &gt; <a href="/scrap-parts" style={{ color: '#2563eb', textDecoration: 'none' }}>Scrap Parts</a> &gt; <span style={{ color: '#0f172a', fontWeight: '600' }}>Maruti Vitara Brezza</span>
          </nav>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
            <span style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>
              ✓ Verified Dismantling Yard Stock
            </span>
            
            <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginTop: '12px', marginBottom: '12px', lineHeight: '1.2' }}>
              Original Second-Hand Maruti Vitara Brezza Scrap Parts
            </h1>

            {/* REAL MARUTI VITARA BREZZA CAR IMAGE */}
            <div style={{ width: '100%', height: '230px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px', border: '1px solid #e2e8f0', position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80" 
                alt="Maruti Vitara Brezza Dismantled Car Stock" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'rgba(15, 23, 42, 0.85)', color: '#ffffff', fontSize: '11px', padding: '4px 10px', borderRadius: '6px', fontWeight: 'bold' }}>
                Maruti Vitara Brezza SUV Stock
              </span>
            </div>
            
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.5', marginBottom: '20px' }}>
              Get tested OEM second-hand parts for <strong>Maruti Vitara Brezza (1.3L DDiS Diesel)</strong> and <strong>Petrol (K15B/K15C Engine)</strong>.
            </p>

            <a href="https://wa.me/916395948240?text=Hi,%20I%20need%20parts%20for%20Maruti%20Vitara%20Brezza" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#25d366', color: '#ffffff', fontWeight: 'bold', fontSize: '16px', padding: '14px 24px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)' }}>
              💬 Check Brezza Parts & Price on WhatsApp
            </a>
          </div>

          {/* SECOND HAND PARTS PHOTO GALLERY */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#0f172a' }}>
              📷 Available Brezza Dismantled Second-Hand Parts
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px', textAlign: 'center' }}>
                <div style={{ width: '100%', height: '120px', borderRadius: '8px', overflow: 'hidden', marginBottom: '8px' }}>
                  <img src="https://images.unsplash.com/photo-1597766353815-5e634cb19941?auto=format&fit=crop&w=400&q=80" alt="Brezza Diesel Engine" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#0f172a' }}>Brezza DDiS Engine Assembly</div>
                <span style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold', display: 'inline-block', marginTop: '4px' }}>Tested Compression</span>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px', textAlign: 'center' }}>
                <div style={{ width: '100%', height: '120px', borderRadius: '8px', overflow: 'hidden', marginBottom: '8px' }}>
                  <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=400&q=80" alt="Brezza Bumper Parts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#0f172a' }}>Front Bumper & Headlights</div>
                <span style={{ backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold', display: 'inline-block', marginTop: '4px' }}>OEM Scratchless</span>
              </div>
            </div>
          </div>

          {/* PRICE LIST TABLE */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#0f172a' }}>
              Maruti Vitara Brezza Scrap Parts Price List
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
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>Brezza DDiS Diesel / K15 Petrol Engine Assembly</td>
                    <td style={{ padding: '14px 16px' }}><span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>Tested Compression</span></td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold' }}>₹25,000 – ₹45,000</td>
                    <td style={{ padding: '14px 16px' }}><a href="https://wa.me/916395948240?text=I%20need%20Brezza%20Engine" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Get Video Test</a></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>Brezza 5-Speed Manual / AMT Automatic Gearbox</td>
                    <td style={{ padding: '14px 16px' }}><span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>Smooth Shift Tested</span></td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold' }}>₹10,000 – ₹18,000</td>
                    <td style={{ padding: '14px 16px' }}><a href="https://wa.me/916395948240?text=I%20need%20Brezza%20Gearbox" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Get Quote</a></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>Original Front Bumper & Chrome Grille Assembly</td>
                    <td style={{ padding: '14px 16px' }}><span style={{ backgroundColor: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>OEM Scratchless</span></td>
                    <td style={{ padding: '14px 16px', fontWeight: 'bold' }}>₹3,500 – ₹6,500</td>
                    <td style={{ padding: '14px 16px' }}><a href="https://wa.me/916395948240?text=I%20need%20Brezza%20Bumper" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>Get Quote</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>

        <div style={{ position: 'fixed', bottom: '16px', left: '16px', right: '16px', zIndex: 100 }}>
          <a href="https://wa.me/916395948240?text=Hi,%20I%20am%20looking%20for%20Maruti%20Vitara%20Brezza%20Parts" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#25d366', color: '#ffffff', fontWeight: 'bold', fontSize: '16px', padding: '14px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}>
            💬 Click Here To Buy Brezza Parts On WhatsApp
          </a>
        </div>

      </div>
    </>
  );
}
