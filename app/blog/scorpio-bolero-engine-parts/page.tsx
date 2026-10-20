import Link from 'next/link';

export default function ScorpioBoleroPartsPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#ffffff', padding: '24px', fontFamily: 'sans-serif' }}>
      <header style={{ maxWidth: '56rem', margin: '0 auto', padding: '24px 0', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#f59e0b', textDecoration: 'none' }}>
          ← CAR SCRAP HUB
        </Link>
        <a 
          href="https://wa.me/916395948240?text=I%20need%20Scorpio%20Bolero%20Engine%20Parts" 
          style={{ backgroundColor: '#16a34a', color: '#ffffff', padding: '8px 16px', borderRadius: '8px', fontWeight: '500', fontSize: '0.875rem', textDecoration: 'none' }}
        >
          WhatsApp Verified Parts
        </a>
      </header>

      <article style={{ maxWidth: '56rem', margin: '0 auto', padding: '32px 0' }}>
        <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', fontSize: '0.75rem', padding: '4px 12px', borderRadius: '9999px', fontWeight: '600', textTransform: 'uppercase' }}>
          Mayapuri & Moradabad Scrap Yard Prices
        </span>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', margin: '16px 0', color: '#ffffff', lineHeight: '1.2' }}>
          Mahindra Scorpio & Bolero Second-Hand Engine & Scrap Parts Guide
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '32px' }}>
          Get original mHawk 2.2L & m2DiCR engine assemblies with live video compression test proof before dispatch to Delhi-NCR & Moradabad.
        </p>

        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px', color: '#fbbf24' }}>Scrap Yard Market Price List</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left', fontSize: '0.875rem', color: '#cbd5e1', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#1e293b', color: '#fbbf24', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  <th style={{ padding: '12px' }}>Part Name</th>
                  <th style={{ padding: '12px' }}>Condition</th>
                  <th style={{ padding: '12px' }}>Approx Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #1e293b' }}>
                  <td style={{ padding: '12px' }}>Scorpio mHawk 2.2L Half Engine</td>
                  <td style={{ padding: '12px' }}>Tested / Video Proof</td>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#4ade80' }}>₹28,000 - ₹38,000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #1e293b' }}>
                  <td style={{ padding: '12px' }}>Bolero m2DiCR Full Engine Block</td>
                  <td style={{ padding: '12px' }}>Video Verified</td>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#4ade80' }}>₹22,000 - ₹30,000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #1e293b' }}>
                  <td style={{ padding: '12px' }}>Scorpio / Bolero Gearbox (5-Speed)</td>
                  <td style={{ padding: '12px' }}>Original OEM</td>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#4ade80' }}>₹12,000 - ₹18,000</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px' }}>Bosch Diesel Injectors (Set of 4)</td>
                  <td style={{ padding: '12px' }}>Calibrated / Tested</td>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#4ade80' }}>₹14,000 - ₹18,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <a 
            href="https://wa.me/916395948240?text=I%20want%20to%20buy%20Scorpio/Bolero%20parts" 
            style={{ display: 'inline-block', backgroundColor: '#16a34a', color: '#ffffff', fontWeight: 'bold', padding: '16px 32px', borderRadius: '12px', fontSize: '1.125rem', textDecoration: 'none' }}
          >
            Check Live Video Stock On WhatsApp →
          </a>
        </div>
      </article>
    </main>
  );
}
