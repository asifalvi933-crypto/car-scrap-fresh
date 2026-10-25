import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// ✅ FIX: Constants ko component ke bahar nikala (re-render pe recompute nahi hoga)
const WHATSAPP_NUMBER = '6395948240';
const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello Car Scrap Hub, I need Maruti Ertiga engine price and video proof.'
)}`;

// ✅ FIX: metadataBase add kiya (Next.js 14+ ke liye zaroori)
// ✅ FIX: keywords array se leading space hataya
// ✅ FIX: description ko 155-160 chars ke andar short kiya
export const metadata: Metadata = {
  metadataBase: new URL('https://carscraphub.in'),
  title: 'Maruti Ertiga Engine New vs Second Hand Price | Scrap Ertiga Engine',
  description:
    'Compare Maruti Ertiga petrol & diesel engine showroom price vs tested second-hand assembly. Save up to 65% with live WhatsApp video proof.',
  keywords: [
    'Maruti Ertiga engine price',
    'Ertiga second hand engine cost',
    'Ertiga diesel engine assembly price',
    'Ertiga scrap engine Delhi NCR', // ✅ FIX: leading space removed
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

// ✅ FIX: JSON-LD Article Schema add kiya (SEO ke liye)
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
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* ✅ FIX: JSON-LD structured data inject kiya */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Top Banner */}
      {/* ✅ FIX: duplicate bg-navy-900 bg-slate-900 hataya — sirf slate-900 rakha */}
      <div className="bg-slate-900 text-yellow-400 py-3 px-4 text-center font-bold text-sm md:text-base shadow-md">
        💡 ERTIGA SAVINGS CALCULATOR: Save Up To 65% On Ertiga Petrol &amp; Diesel
        Engine Replacement!
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* ✅ FIX: nav pe aria-label add kiya (a11y) */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>{' '}
          <span aria-hidden="true">&gt;</span>{' '}
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>{' '}
          <span aria-hidden="true">&gt;</span>{' '}
          <span className="text-gray-700">Ertiga New vs Second Hand Engine</span>
        </nav>

        <article className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            CAB &amp; FAMILY CAR GUIDE
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            Maruti Ertiga Engine Seized Ya Black Smoke De Rahi Hai? New Showroom
            Engine vs Tested Second-Hand Assembly Mein Kya Behtar Hai?
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Kya aapki{' '}
            <strong>Maruti Ertiga (Petrol 1.5L K-Series ya DDiS Diesel)</strong> ka
            engine overheat ho gaya hai ya pickup poori tarah drop ho gayi hai?
            Authorized showroom ka ₹1 Lakh+ ka bill bharne se pehle yeh detailed
            price aur reliability comparison zaroor padhein!
          </p>

          {/* Quick Highlight Box */}
          <div className="bg-green-50 border-2 border-dashed border-green-500 rounded-xl p-5 mb-8">
            <h2 className="text-lg font-bold text-green-900 mb-2">
              🔥 Mechanic Ke Fraud Se Bachein Aur ₹40,000+ Bachayein!
            </h2>
            <p className="text-green-800 text-sm md:text-base leading-relaxed">
              Showroom ya authorized service center mein naya Ertiga engine lagwane
              par <strong>₹90,000 se ₹1,30,000+</strong> kharch ho jate hain. Lekin{' '}
              <strong>Car Scrap Hub</strong> se aapko 100% original, low-mileage
              tested scrap engine <strong>₹25,000 - ₹38,000</strong> mein mil jata
              hai! Dispatch se pehle hum aapko WhatsApp par{' '}
              <strong>Live Engine Compression &amp; Starting Video Proof</strong> dete
              hain.
            </p>
            <div className="mt-4">
              {/* ✅ FIX: aria-label add kiya (new tab clarity) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp par Ertiga live video testing request karein (new tab). Number: ${WHATSAPP_NUMBER}`}
                className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-green-700 transition text-sm md:text-base"
              >
                💬 Live Video Testing Request Karein (WhatsApp: {WHATSAPP_NUMBER})
              </a>
            </div>
          </div>

          {/* Price Table */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            📊 Maruti Ertiga Engine: Price &amp; Specification Table
          </h2>
          <div className="overflow-x-auto mb-3">
            {/* ✅ FIX: table pe caption add kiya (a11y) */}
            <table className="w-full text-left border-collapse border border-gray-200">
              <caption className="sr-only">
                Maruti Ertiga new engine vs tested second-hand engine price
                comparison
              </caption>
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th scope="col" className="p-3 border border-gray-700">
                    Evaluation Factor
                  </th>
                  <th scope="col" className="p-3 border border-gray-700">
                    Showroom New Engine
                  </th>
                  <th scope="col" className="p-3 border border-gray-700">
                    Car Scrap Hub Tested Engine
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <th scope="row" className="p-3 border font-semibold text-left">
                    Ertiga Petrol (1.5L K15B) Complete Cost
                  </th>
                  <td className="p-3 border text-red-600 font-bold">
                    ₹85,000 - ₹1,10,000 + GST
                  </td>
                  <td className="p-3 border text-green-600 font-bold">
                    ₹22,000 - ₹30,000 (Best Value)
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <th scope="row" className="p-3 border font-semibold text-left">
                    Ertiga Diesel (1.3L / 1.5L DDiS) Complete Cost
                  </th>
                  <td className="p-3 border text-red-600 font-bold">
                    ₹1,10,000 - ₹1,40,000 + GST
                  </td>
                  <td className="p-3 border text-green-600 font-bold">
                    ₹28,000 - ₹38,000 (Ready Stock)
                  </td>
                </tr>
                <tr className="border-b">
                  <th scope="row" className="p-3 border font-semibold text-left">
                    Delivery Timeline
                  </th>
                  <td className="p-3 border">15 to 25 Days Waiting</td>
                  <td className="p-3 border font-semibold text-gray-900">
                    24 – 48 Hours Express Dispatch
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <th scope="row" className="p-3 border font-semibold text-left">
                    Transparency &amp; Proof
                  </th>
                  <td className="p-3 border">Standard Invoice</td>
                  <td className="p-3 border text-blue-600 font-semibold">
                    Live WhatsApp Video Testing
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="p-3 border font-semibold text-left">
                    Build &amp; Quality
                  </th>
                  <td className="p-3 border">OEM Genuine</td>
                  <td className="p-3 border text-green-700 font-semibold">
                    100% Original Factory OEM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* ✅ FIX: legal disclaimer add kiya (compliance) */}
          <p className="text-xs text-gray-500 mb-8 italic">
            * All prices are indicative and may vary by location, condition, and
            availability. Final quotation WhatsApp par confirm kiya jayega.
          </p>

          {/* Scrap Yard Visual Proof Section */}
          <div className="mb-8 bg-gray-100 p-4 rounded-xl border border-gray-200 text-center">
            <div className="relative w-full h-64 md:h-80 mb-3 rounded-lg overflow-hidden shadow-inner">
              {/* ✅ FIX: sizes prop + priority added (LCP performance) */}
              <Image
                src="/blog/ertiga-engine-inspection.jpg"
                alt="Car Scrap Hub yard mein Maruti Ertiga engine compression aur turbo health testing"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
                priority
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-xs md:text-sm text-gray-600 font-medium">
              📸 Scrap Yard Inspection: Ertiga Engine Compression, Fuel Injector &amp;
              Turbo Health Check
            </p>
          </div>

          {/* Why Choose Scrap Engine */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            🛠️ Ertiga Engine Repair Karwayein Ya Second-Hand Assembly Dalein?
          </h2>
          <ul className="space-y-4 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2" aria-hidden="true">
                ❌
              </span>
              <div>
                <strong>Commercial Vehicle Downtime Loss:</strong> Ertiga zyadatar
                commercial cabs ya large families ke liye use hoti hai. Local
                mechanic se engine overhaul (boring/sleeving) karwane mein 20-25 din
                lagte hain, jisse daily taxi income ka bhari nuksan hota hai. Tested
                assembly 2 din mein fit ho jati hai.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2" aria-hidden="true">
                ✔
              </span>
              <div>
                <strong>Massive Budget Relief:</strong> Commercial ya private use ke
                liye showroom par ₹1 Lakh barbad karne ke bajaye tested second-hand
                assembly lagakar smart savings hoti hai.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2" aria-hidden="true">
                ✔
              </span>
              <div>
                <strong>Pan-India Delivery &amp; Support:</strong> Delhi NCR,
                Moradabad, Lucknow aur poore Uttar Pradesh mein fast transport
                service ke sath parts dispatch kiye jate hain.
              </div>
            </li>
          </ul>

          {/* Internal Links Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
            <h3 className="font-bold text-blue-900 mb-2">
              🔗 Related Maruti Scrap Parts &amp; Guides:
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog/alto-engine-new-vs-second-hand"
                  className="text-blue-700 hover:underline"
                >
                  👉 Maruti Alto Engine Comparison Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/wagonr-engine-new-vs-second-hand"
                  className="text-blue-700 hover:underline"
                >
                  👉 WagonR Engine Price &amp; Specs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/swift-engine-guide"
                  className="text-blue-700 hover:underline"
                >
                  👉 Maruti Swift Parts Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Ertiga Engine Requirement Hai?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Abhi WhatsApp par apne mechanic ki list ya engine photo bhejein aur
              live video proof payein.
            </p>
            {/* ✅ FIX: consistent green-600 style + aria-label add kiya */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp par Ertiga engine video proof request karein (new tab). Number: ${WHATSAPP_NUMBER}`}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 text-base"
            >
              💬 WhatsApp Ertiga Video Proof
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
