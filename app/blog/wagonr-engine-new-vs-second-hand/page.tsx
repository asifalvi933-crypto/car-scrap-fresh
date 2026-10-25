import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Maruti WagonR New vs Second Hand Engine Price Comparison | Save ₹40,000',
  description:
    'Comparing showroom new Maruti WagonR engine cost vs 100% tested second-hand scrap engine. Know K10B & F10D prices, testing process, and live video proof.',
  keywords: [
    'Maruti WagonR new vs second hand engine price',
    'WagonR K10B engine showroom price vs scrap price',
    'WagonR F10D engine overhaul cost vs replacement',
    'Is second hand car engine reliable in India',
    'WagonR second hand engine Mayapuri Moradabad',
    'WagonR engine replacement cost in Delhi NCR',
    'Original used WagonR engine with warranty',
    'Maruti scrap engine online buying guide India'
  ],
  alternates: {
    canonical: 'https://carscraphub.in/blog/wagonr-engine-new-vs-second-hand',
  },
}

const PHONE_NUMBER = '6395948240'
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=91${PHONE_NUMBER}&text=Hi%20Car%20Scrap%20Hub,%20I%20read%20your%20WagonR%20engine%20comparison.%20I%20want%20to%20check%20second-hand%20engine%20price.`

export default function WagonREngineComparisonPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Maruti WagonR New vs Second-Hand Engine Price Comparison Guide 2026',
    'description': 'Comprehensive buying guide comparing showroom new Maruti WagonR engines with tested OEM second-hand scrap engines.',
    'author': {
      '@type': 'Organization',
      'name': 'Car Scrap Hub'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Car Scrap Hub',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://carscraphub.in/logo.png'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0f172a', paddingBottom: '90px' }}>
        
        {/* ATTRACTIVE TOP BANNER */}
        <div style={{ backgroundColor: '#1e293b', color: '#facc15', textAlign: 'center', padding: '12px 16px', fontWeight: '800', fontSize: '14px', letterSpacing: '0.3px' }}>
          💡 SMART SAVINGS CALCULATOR: Save Up To 70% On WagonR Engine Replacement!
        </div>

        <main style={{ maxWidth: '850px', margin: '0 auto', padding: '20px 16px' }}>
          
          {/* BREADCRUMBS */}
          <nav style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</Link> &gt;{' '}
            <Link href="/blog" style={{ color: '#2563eb', textDecoration: 'none' }}>Blog</Link> &gt;{' '}
            <span style={{ color: '#475569', fontWeight: '600' }}>WagonR New vs Second Hand Engine</span>
          </nav>

          {/* MAIN ARTICLE HEADER */}
          <article style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '28px 24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '12px', fontWeight: '800', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase' }}>
              Car Buyer Guide &amp; Cost Analysis
            </span>

            <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginTop: '14px', marginBottom: '16px', lineHeight: '1.3' }}>
              Maruti WagonR Engine Kharaab Ho Gaya? Naya Showroom Engine vs Tested Second-Hand Engine: Kisme Fayda Hai?
            </h1>

            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '24px' }}>
              Kya aapki <strong>Maruti WagonR (K10B 1.0L, F10D ya K12M)</strong> ka engine white smoke de raha hai, oil consume kar raha hai, ya seize ho gaya hai? Naya engine lene se pehle yeh comparison zaroor padhein!
            </p>

            {/* HIGH-CONVERTING ATTRACTIVE SALES SCRIPT BOX */}
            <div style={{ backgroundColor: '#f0fdf4', border: '2px dashed #22c55e', borderRadius: '16px', padding: '20px', marginBottom: '28px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#15803d', marginTop: 0, marginBottom: '10px' }}>
                🔥 Mechanic Se Fraud Hue Bina ₹40,000 Kaam Me Kaise Bachayein?
              </h2>
              <p style={{ fontSize: '14px', color: '#166534', lineHeight: '1.6', margin: 0 }}>
                &quot;Showroom mein naya engine assembly lene par aapko ₹65,000+ aur 18% GST dena padta hai. Lekin <strong>Car Scrap Hub</strong> se aapko 100% original, low-mileage tested scrap engine **₹18,000 - ₹25,000** mein mil jata hai! Payment se pehle hum aapko <strong>Live Compression Video &amp; Engine Sound Test Proof</strong> WhatsApp par bhejte hain. Fraud ka ZERO chance!&quot;
              </p>
              <div style={{ marginTop: '16px' }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', backgroundColor: '#22c55e', color: '#ffffff', fontWeight: '800', fontSize: '14px', padding: '12px 22px', borderRadius: '30px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)' }}
                >
                  💬 Live Video Testing Request Karein (WhatsApp: 6395948240)
                </a>
              </div>
            </div>

            {/* COMPARISON TABLE */}
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
              📊 Direct Price &amp; Feature Comparison
            </h2>

            <div style={{ overflowX: 'auto', marginBottom: '28px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                    <th style={{ padding: '12px 14px', borderRadius: '8px 0 0 0' }}>Factor / Specification</th>
                    <th style={{ padding: '12px 14px' }}>Showroom Naya Engine</th>
                    <th style={{ padding: '12px 14px', borderRadius: '0 8px 0 0' }}>Car Scrap Hub Tested Engine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px 14px', fontWeight: '700' }}>WagonR K10B Complete Assembly Cost</td>
                    <td style={{ padding: '12px 14px', color: '#dc2626', fontWeight: '700' }}>₹65,000 – ₹75,000 + GST</td>
                    <td style={{ padding: '12px 14px', color: '#16a34a', fontWeight: '800' }}>₹18,000 – ₹26,000 (Net Cost)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px 14px', fontWeight: '700' }}>WagonR F10D Old Model Cost</td>
                    <td style={{ padding: '12px 14px', color: '#dc2626', fontWeight: '700' }}>Out of Stock / Discontinued</td>
                    <td style={{ padding: '12px 14px', color: '#16a34a', fontWeight: '800' }}>₹14,000 – ₹20,000 (Ready Stock)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px 14px', fontWeight: '700' }}>Fitting &amp; Delivery Time</td>
                    <td style={{ padding: '12px 14px' }}>15 – 30 Din (Booking Delay)</td>
                    <td style={{ padding: '12px 14px', fontWeight: '700', color: '#0f172a' }}>24-48 Ghante (Dispatch Ready)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px 14px', fontWeight: '700' }}>Testing Proof</td>
                    <td style={{ padding: '12px 14px' }}>Standard Warranty</td>
                    <td style={{ padding: '12px 14px', fontWeight: '700', color: '#2563eb' }}>Live Compression Video Proof</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 14px', fontWeight: '700' }}>Originality / OEM Quality</td>
                    <td style={{ padding: '12px 14px' }}>100% Maruti Genuine</td>
                    <td style={{ padding: '12px 14px', fontWeight: '700', color: '#16a34a' }}>100% Factory OEM Genuine</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* IMAGE SECTION */}
            <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '16px', border: '1px solid #e2e8f0', marginBottom: '28px', textAlign: 'center' }}>
              <div style={{ width: '100%', backgroundColor: '#e2e8f0', borderRadius: '12px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                <Image
                  src="/images/gearbox-testing-inspection.jpg"
                  alt="WagonR Engine Compression Test Live Video Inspection"
                  width={700}
                  height={380}
                  style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'cover' }}
                />
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', marginTop: '10px', marginBottom: 0, fontWeight: '600' }}>
                📸 Yard Live Video Inspection: Engine Compression &amp; No-Smoke Testing
              </p>
            </div>

            {/* KEY REASONS SECTION */}
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '14px' }}>
              🛠️ Second-Hand Engine Kyun Khareedein? Top 3 Reasons:
            </h2>

            <ul style={{ paddingLeft: '20px', fontSize: '15px', color: '#334155', lineHeight: '1.8', marginBottom: '28px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Massive Cost Savings:</strong> WagonR jaise commercial aur family car mein ₹45,000+ ki bachat direct aapke wallet mein rehti hai.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Instant Availability for Old Models:</strong> WagonR F10D (4-Cylinder) aur Old K10B ke showroom parts ab jaldi nahi milte, jabki humare scrap yard mein fully functional engines ready stock hain.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>No Engine Overhaul Headache:</strong> Local mechanic se engine rebuild karwane par 20,000 - 30,000 lag jate hain aur lagne ke baad bhi smoke ya noise ki problem rehti hai. Full assembly replace karna sabse safe aur durable solution hai.
              </li>
            </ul>

            {/* INTERNAL LINKING BLOCK */}
            <div style={{ backgroundColor: '#f1f5f9', borderRadius: '16px', padding: '20px', border: '1px solid #cbd5e1' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginTop: 0, marginBottom: '10px' }}>
                🔗 Related WagonR Scrap Parts &amp; Models:
              </h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '14px' }}>
                <Link href="/scrap-parts/maruti-wagonr" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'underline' }}>
                  Maruti WagonR Scrap Parts Price List
                </Link>
                <span style={{ color: '#94a3b8' }}>•</span>
                <Link href="/blog/swift-dzire-gearbox-new-vs-second-hand" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'underline' }}>
                  Swift &amp; Dzire Gearbox Comparison
                </Link>
                <span style={{ color: '#94a3b8' }}>•</span>
                <Link href="/scrap-parts/maruti-brezza" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'underline' }}>
                  Vitara Brezza Engine &amp; Body Parts
                </Link>
              </div>
            </div>

          </article>

        </main>

        {/* STICKY BOTTOM CALL TO ACTION */}
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '12px 16px', zIndex: 1000, boxShadow: '0 -4px 15px rgba(0,0,0,0.08)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: 2, backgroundColor: '#22c55e', color: '#ffffff', textAlign: 'center', padding: '14px', borderRadius: '30px', fontWeight: '800', fontSize: '15px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)' }}
            >
              💬 WhatsApp Engine Video Proof
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              style={{ flex: 1, backgroundColor: '#0f172a', color: '#ffffff', textAlign: 'center', padding: '14px', borderRadius: '30px', fontWeight: '800', fontSize: '15px', textDecoration: 'none' }}
            >
              📞 Call: {PHONE_NUMBER}
            </a>
          </div>
        </div>

      </div>
    </>
  )
}
