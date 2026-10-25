import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const WHATSAPP_NUMBER = '6395948240';
const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello Car Scrap Hub, I need Maruti Ertiga engine price and video proof.'
)}`;

export const metadata: Metadata = {
  metadataBase: new URL('https://carscraphub.in'),
  title: 'Maruti Ertiga Engine New vs Second Hand Price | Scrap Ertiga Engine',
  description:
    'Compare Maruti Ertiga petrol & diesel engine showroom price vs tested second-hand assembly. Save up to 65% with live WhatsApp video proof.',
  keywords: [
    'Maruti Ertiga engine price',
    'Ertiga second hand engine cost',
    'Ertiga diesel engine assembly price',
    'Ertiga scrap engine Delhi NCR',
    'Car Scrap Hub Ertiga parts',
  ],
  alternates: {
    canonical: 'https://carscraphub.in/blog/ertiga-engine-new-vs-second-hand',
  },
  openGraph: {
    title: 'Maruti Ertiga Engine Seized? New vs Second-Hand Price Comparison',
    description:
      'Get 100% original, low-mileage tested Ertiga engine with live WhatsApp video testing before dispatch.',
    url: 'https://carscraphub.in/blog/ertiga-engine-new-vs-second-hand',
    siteName: 'Car Scrap Hub',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maruti Ertiga Engine New vs Second-Hand Price',
    description: 'Save up to 65% on Ertiga engine replacement with live video proof.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Maruti Ertiga Engine New vs Second Hand Price Comparison',
  description:
    'Compare Maruti Ertiga petrol & diesel engine showroom price vs tested second-hand scrap assembly.',
  author: { '@type': 'Organization', name: 'Car Scrap Hub' },
  publisher: {
    '@type': 'Organization',
    name: 'Car Scrap Hub',
    url: 'https://carscraphub.in',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://carscraphub.in/blog/ertiga-engine-new-vs-second-hand',
  },
};

export default function ErtigaEngineBlog() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', color: '#1f2937', fontFamily: 'sans-serif', paddingBottom: '40px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Top Banner */}
      <div style={{ backgroundColor: '#0f172a', color: '#facc15', padding: '12px 16px', textAlign: 'center', fontWeight: 'bold', fontSize: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        💡 ERTIGA SAVINGS CALCULATOR: Save Up To 65% On Ertiga Petrol &amp; Diesel Engine Replacement!
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 16px' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
          <Link href="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>Home</Link> &gt;{' '}
          <Link href="/blog" style={{ color: '#2563eb', textDecoration: 'underline' }}>Blog</Link> &gt;{' '}
          <span style={{ color: '#374151' }}>Ertiga New vs Second Hand Engine</span>
        </nav>

        <article style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', padding: '24px', border: '1px solid #e5e7eb' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '12px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '9999px', marginBottom: '12px' }}>
            CAB &amp; FAMILY CAR GUIDE
          </span>

          <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#111827', marginBottom: '16px', lineHeight: '1.4' }}>
            Maruti Ertiga Engine Seized Ya Black Smoke De Rahi Hai? New Showroom Engine vs Tested Second-Hand Assembly Mein Kya Behtar Hai?
          </h1>

          <p style={{ fontSize: '17px', color: '#4b5563', marginBottom: '24px', lineHeight: '1.6' }}>
            Kya aapki <strong>Maruti Ertiga (Petrol 1.5L K-Series ya DDiS Diesel)</strong> ka engine overheat ho gaya hai ya pickup poori tarah drop ho gayi hai? Authorized showroom ka ₹1 Lakh+ ka bill bharne se pehle yeh detailed price aur reliability comparison zaroor padhein!
          </p>

          {/* Quick Highlight Box */}
          <div style={{ backgroundColor: '#f0fdf4', border: '2px dashed #22c55e', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#14532d', marginBottom: '8px' }}>
              🔥 Mechanic Ke Fraud Se Bachein Aur ₹40,000+ Bachayein!
            </h2>
            <p style={{ color: '#166534', fontSize: '15px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
              Showroom ya authorized service center mein naya Ertiga engine lagwane par <strong>₹90,000 se ₹1,30,000+</strong> kharch ho jate hain. Lekin <strong>Car Scrap Hub</strong> se aapko 100% original, low-mileage tested scrap engine <strong>₹25,000 - ₹38,000</strong> mein mil jata hai! Dispatch se pehle hum aapko WhatsApp par <strong>Live Engine Compression &amp; Starting Video Proof</strong> dete hain.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp par Ertiga live video testing request karein. Number: ${WHATSAPP_NUMBER}`}
              style={{ display: 'inline-block', backgroundColor: '#16a34a', color: '#ffffff', fontWeight: 'bold', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            >
              💬 Live Video Testing Request Karein (WhatsApp: {WHATSAPP_NUMBER})
            </a>
          </div>

          {/* Price Table */}
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            📊 Maruti Ertiga Engine: Price &amp; Specification Table
          </h2>
          <div style={{ overflowX: 'auto', marginBottom: '12px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #d1d5db', textAlign: 'left', fontSize: '14px' }}>
              <caption style={{ display: 'none' }}>Maruti Ertiga price comparison</caption>
              <thead>
                <tr style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                  <th style={{ padding: '12px', border: '1px solid #334155' }}>Evaluation Factor</th>
                  <th style={{ padding: '12px', border: '1px solid #334155' }}>Showroom New Engine</th>
                  <th style={{ padding: '12px', border: '1px solid #334155' }}>Car Scrap Hub Tested Engine</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <th scope="row" style={{ padding: '12px', border: '1px solid #e5e7eb', textAlign: 'left' }}>Ertiga Petrol (1.5L K15B) Complete Cost</th>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb', color: '#dc2626', fontWeight: 'bold' }}>₹85,000 - ₹1,10,000 + GST</td>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb', color: '#16a34a', fontWeight: 'bold' }}>₹22,000 - ₹30,000 (Best Value)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f8fafc' }}>
                  <th scope="row" style={{ padding: '12px', border: '1px solid #e5e7eb', textAlign: 'left' }}>Ertiga Diesel (1.3L / 1.5L DDiS) Complete Cost</th>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb', color: '#dc2626', fontWeight: 'bold' }}>₹1,10,000 - ₹1,40,000 + GST</td>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb', color: '#16a34a', fontWeight: 'bold' }}>₹28,000 - ₹38,000 (Ready Stock)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <th scope="row" style={{ padding: '12px', border: '1px solid #e5e7eb', textAlign: 'left' }}>Delivery Timeline</th>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>15 to 25 Days Waiting</td>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb', fontWeight: 'bold', color: '#111827' }}>24 – 48 Hours Express Dispatch</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f8fafc' }}>
                  <th scope="row" style={{ padding: '12px', border: '1px solid #e5e7eb', textAlign: 'left' }}>Transparency &amp; Proof</th>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>Standard Invoice</td>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb', color: '#2563eb', fontWeight: 'bold' }}>Live WhatsApp Video Testing</td>
                </tr>
                <tr>
                  <th scope="row" style={{ padding: '12px', border: '1px solid #e5e7eb', textAlign: 'left' }}>Build &amp; Quality</th>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>OEM Genuine</td>
                  <td style={{ padding: '12px', border: '1px solid #e5e7eb', color: '#15803d', fontWeight: 'bold' }}>100% Original Factory OEM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '32px', fontStyle: 'italic' }}>
            * All prices are indicative and may vary by location, condition, and availability. Final quotation WhatsApp par confirm kiya jayega.
          </p>

          {/* Visual Proof Section */}
          <div style={{ marginBottom: '32px', backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '100%', height: '280px', marginBottom: '12px', borderRadius: '8px', overflow: 'hidden' }}>
              <Image
                src="/blog/ertiga-engine-inspection.jpg"
                alt="Car Scrap Hub yard mein Maruti Ertiga engine compression aur turbo health testing"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                priority
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
            <p style={{ fontSize: '13px', color: '#4b5563', fontWeight: '500', margin: 0 }}>
              📸 Scrap Yard Inspection: Ertiga Engine Compression, Fuel Injector &amp; Turbo Health Check
            </p>
          </div>

          {/* Why Choose Scrap Engine */}
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            🛠️ Ertiga Engine Repair Karwayein Ya Second-Hand Assembly Dalein?
          </h2>
          <ul style={{ paddingLeft: '0', listStyle: 'none', marginBottom: '32px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ color: '#dc2626', fontWeight: 'bold', marginRight: '10px', fontSize: '18px' }}>❌</span>
              <div style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6' }}>
                <strong>Commercial Vehicle Downtime Loss:</strong> Ertiga zyadatar commercial cabs ya large families ke liye use hoti hai. Local mechanic se engine overhaul (boring/sleeving) karwane mein 20-25 din lagte hain, jisse daily taxi income ka bhari nuksan hota hai. Tested assembly 2 din mein fit ho jati hai.
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold', marginRight: '10px', fontSize: '18px' }}>✔</span>
              <div style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6' }}>
                <strong>Massive Budget Relief:</strong> Commercial ya private use ke liye showroom par ₹1 Lakh barbad karne ke bajaye tested second-hand assembly lagakar smart savings hoti hai.
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold', marginRight: '10px', fontSize: '18px' }}>✔</span>
              <div style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6' }}>
                <strong>Pan-India Delivery &amp; Support:</strong> Delhi NCR, Moradabad, Lucknow aur poore Uttar Pradesh mein fast transport service ke sath parts dispatch kiye jate hain.
              </div>
            </li>
          </ul>

          {/* Internal Links Box */}
          <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '20px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '12px', marginTop: 0 }}>
              🔗 Related Maruti Scrap Parts &amp; Guides:
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
              <li><Link href="/blog/alto-engine-new-vs-second-hand" style={{ color: '#1d4ed8', textDecoration: 'underline' }}>👉 Maruti Alto Engine Comparison Guide</Link></li>
              <li><Link href="/blog/wagonr-engine-new-vs-second-hand" style={{ color: '#1d4ed8', textDecoration: 'underline' }}>👉 WagonR Engine Price &amp; Specs</Link></li>
              <li><Link href="/blog/swift-engine-guide" style={{ color: '#1d4ed8', textDecoration: 'underline' }}>👉 Maruti Swift Parts Hub</Link></li>
            </ul>
          </div>

          {/* Final CTA */}
          <div style={{ textAlign: 'center', backgroundColor: '#0f172a', color: '#ffffff', padding: '28px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', marginTop: 0 }}>Ertiga Engine Requirement Hai?</h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '20px' }}>
              Abhi WhatsApp par apne mechanic ki list ya engine photo bhejein aur live video proof payein.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp par Ertiga engine video proof request karein. Number: ${WHATSAPP_NUMBER}`}
              style={{ display: 'inline-block', backgroundColor: '#16a34a', color: '#ffffff', fontWeight: 'extrabold', padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
            >
              💬 WhatsApp Ertiga Video Proof
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
