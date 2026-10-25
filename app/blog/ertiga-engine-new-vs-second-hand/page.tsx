import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Maruti Ertiga Engine New vs Second Hand Price | Scrap Ertiga Engine',
  description: 'Compare Maruti Ertiga 1.5L Petrol & DDiS Diesel engine showroom price vs tested second-hand scrap assembly. Save up to 65% with live WhatsApp video proof.',
  keywords: [
    'Maruti Ertiga engine price',
    'Ertiga second hand engine cost',
    'Ertiga diesel engine assembly price',
    'Ertiga scrap engine Delhi NCR',
    'Car Scrap Hub Ertiga parts'
  ],
  openGraph: {
    title: 'Maruti Ertiga Engine Seized? New vs Second-Hand Price Comparison',
    description: 'Get 100% original, low-mileage tested Ertiga engine with live WhatsApp video testing before dispatch.',
    url: 'https://carscraphub.in/blog/ertiga-engine-new-vs-second-hand',
    siteName: 'Car Scrap Hub',
    locale: 'en_IN',
    type: 'article',
  },
};

export default function ErtigaEngineBlog() {
  const whatsappNumber = "6395948240";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=Hello%20Car%20Scrap%20Hub,%20I%20need%20Maruti%20Ertiga%20engine%20price%20and%20video%20proof.`;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Banner */}
      <div className="bg-slate-900 text-yellow-400 py-3 px-4 text-center font-bold text-sm md:text-base shadow-md">
        💡 ERTIGA SAVINGS CALCULATOR: Save Up To 65% On Ertiga Petrol & Diesel Engine Replacement!
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:underline">Home</Link> &gt;{' '}
          <Link href="/blog" className="hover:underline">Blog</Link> &gt;{' '}
          <span className="text-gray-700">Ertiga New vs Second Hand Engine</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            CAB & FAMILY CAR GUIDE
          </span>
          
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            Maruti Ertiga Engine Seized Ya Black Smoke De Rahi Hai? New Showroom Engine vs Tested Second-Hand Assembly Mein Kya Behtar Hai?
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Kya aapki <strong>Maruti Ertiga (Petrol 1.5L K-Series ya DDiS Diesel)</strong> ka engine overheat ho gaya hai ya pickup poori tarah drop ho gayi hai? Authorized showroom ka ₹1 Lakh+ ka bill bharne se pehle yeh detailed price aur reliability comparison zaroor padhein!
          </p>

          {/* Quick Highlight Box */}
          <div className="bg-green-50 border-2 border-dashed border-green-500 rounded-xl p-5 mb-8">
            <h3 className="text-lg font-bold text-green-900 mb-2">
              🔥 Mechanic Ke Fraud Se Bachein Aur ₹40,000+ Bachayein!
            </h3>
            <p className="text-green-800 text-sm md:text-base leading-relaxed">
              Showroom ya authorized service center mein naya Ertiga engine lagwane par <strong>₹90,000 se ₹1,30,000+</strong> kharch ho jate hain. Lekin <strong>Car Scrap Hub</strong> se aapko 100% original, low-mileage tested scrap engine <strong>₹25,000 - ₹38,000</strong> mein mil jata hai! Dispatch se pehle hum aapko WhatsApp par <strong>Live Engine Compression & Starting Video Proof</strong> dete hain.
            </p>
            <div className="mt-4">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-green-700 transition text-sm md:text-base"
              >
                💬 Live Video Testing Request Karein (WhatsApp: {whatsappNumber})
              </a>
            </div>
          </div>

          {/* Price Table */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            📊 Maruti Ertiga Engine: Price & Specification Table
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 border border-gray-700">Evaluation Factor</th>
                  <th className="p-3 border border-gray-700">Showroom New Engine</th>
                  <th className="p-3 border border-gray-700">Car Scrap Hub Tested Engine</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 border font-semibold">Ertiga Petrol (1.5L K15B) Complete Cost</td>
                  <td className="p-3 border text-red-600 font-bold">₹85,000 - ₹1,10,000 + GST</td>
                  <td className="p-3 border text-green-600 font-bold">₹22,000 - ₹30,000 (Best Value)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 border font-semibold">Ertiga Diesel (1.3L / 1.5L DDiS) Complete Cost</td>
                  <td className="p-3 border text-red-600 font-bold">₹1,10,000 - ₹1,40,000 + GST</td>
                  <td className="p-3 border text-green-600 font-bold">₹28,000 - ₹38,000 (Ready Stock)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 border font-semibold">Delivery Timeline</td>
                  <td className="p-3 border">15 to 25 Days Waiting</td>
                  <td className="p-3 border font-semibold text-gray-900">24 – 48 Hours Express Dispatch</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 border font-semibold">Transparency & Proof</td>
                  <td className="p-3 border">Standard Invoice</td>
                  <td className="p-3 border text-blue-600 font-semibold">Live WhatsApp Video Testing</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Build & Quality</td>
                  <td className="p-3 border">OEM Genuine</td>
                  <td className="p-3 border text-green-700 font-semibold">100% Original Factory OEM</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Why Choose Scrap Engine */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            🛠️ Ertiga Engine Repair Karwayein Ya Second-Hand Assembly Dalein?
          </h2>
          <ul className="space-y-4 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">❌</span>
              <div>
                <strong>Commercial Vehicle Downtime Loss:</strong> Ertiga zyadatar commercial cabs ya large families ke liye use hoti hai. Local mechanic se engine overhaul (boring/sleeving) karwane mein 20-25 din lagte hain, jisse daily taxi income ka bhari nuksan hota hai. Tested assembly 2 din mein fit ho jati hai.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              <div>
                <strong>Massive Budget Relief:</strong> Commercial ya private use ke liye showroom par ₹1 Lakh barbad karne ke bajaye tested second-hand assembly lagakar smart savings hoti hai.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              <div>
                <strong>Pan-India Delivery & Support:</strong> Delhi NCR, Moradabad, Lucknow aur poore Uttar Pradesh mein fast transport service ke sath parts dispatch kiye jate hain.
              </div>
            </li>
          </ul>

          {/* Internal Links Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
            <h4 className="font-bold text-blue-900 mb-2">🔗 Related Maruti Scrap Parts & Guides:</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/alto-engine-new-vs-second-hand" className="text-blue-700 hover:underline">👉 Maruti Alto Engine Comparison Guide</Link></li>
              <li><Link href="/blog/wagonr-engine-new-vs-second-hand" className="text-blue-700 hover:underline">👉 WagonR Engine Price & Specs</Link></li>
              <li><Link href="/blog/swift-engine-guide" className="text-blue-700 hover:underline">👉 Maruti Swift Parts Hub</Link></li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Ertiga Engine Requirement Hai?</h3>
            <p className="text-gray-300 text-sm mb-4">Abhi WhatsApp par apne mechanic ki list ya engine photo bhejein aur live video proof payein.</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 text-base"
            >
              💬 WhatsApp Ertiga Video Proof
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
