import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'WagonR vs Baleno Spare Parts Compatibility | Delhi NCR & Moradabad Delivery',
  description: 'Janiye WagonR aur Baleno ke sabhi mechanical, engine, cooling aur suspension parts jo 100% same hain. Mayapuri yards se Delhi, Gurugram, Noida, Moradabad delivery.',
  keywords: 'wagonr baleno spare parts compatibility, maruti cross fitment parts price, wagonr engine interchange baleno, second hand parts mayapuri delhi ncr',
}

export default function WagonRBalenoFitmentPage() {
  const compatibilityTable = [
    {
      category: '1.2L Engine & Ignition',
      parts: 'Spark Plugs, Ignition Coils, O2 Sensor, MAP Sensor',
      fitment: '100% Same (K12 Engine Series)',
      scrapPrice: '₹1,500 - ₹4,500',
    },
    {
      category: 'Clutch & Transmission',
      parts: 'Clutch Plate, Pressure Plate, Release Bearing',
      fitment: '100% Direct Inter-fit',
      scrapPrice: '₹2,500 - ₹6,000',
    },
    {
      category: 'Braking System',
      parts: 'Front Brake Pads, Caliper Assemblies',
      fitment: '100% Compatible (Front Axle)',
      scrapPrice: '₹1,000 - ₹3,000',
    },
    {
      category: 'Suspension & Steering',
      parts: 'Lower Control Arm (Chimta), Tie Rod Ends',
      fitment: 'Identical Mountings & Bushings',
      scrapPrice: '₹1,200 - ₹3,500',
    },
    {
      category: 'Cooling & Sensors (Extra)',
      parts: 'Radiator Fan Motor, Thermostat Valve, Knock Sensor',
      fitment: '100% Direct Match',
      scrapPrice: '₹800 - ₹2,500',
    }
  ]

  // Yeh raha 3 Image Boxes ka data system
  const imageBoxes = [
    {
      title: '1. Engine, Clutch & Mechanical Parts',
      imagePath: '/images/wagonr-baleno-parts-1.jpg', // Pehli image yahan dalen
      desc: '100% identical K12 engine coils, spark plugs & clutch assembly.'
    },
    {
      title: '2. Sensors & Electrical Components',
      imagePath: '/images/wagonr-baleno-parts-2.jpg', // Doosri image yahan dalen
      desc: 'MAP sensor, O2 oxygen sensor & crankshaft position sensors.'
    },
    {
      title: '3. Suspension & Braking System',
      imagePath: '/images/wagonr-baleno-parts-3.jpg', // Teesri image yahan dalen
      desc: 'Lower control arm (chimta), brake pads & caliper assemblies.'
    }
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Banner Alert */}
      <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-6 rounded text-sm text-amber-900 font-medium">
        ⚡ <strong>Pan-NCR & UP Delivery</strong> | Delhi (Mayapuri), Gurugram, Noida, Ghaziabad, Moradabad, Bareilly Transport Available
      </div>

      <header className="mb-6">
        <nav className="text-xs text-blue-600 mb-2">
          <a href="/">Home</a> &gt; <a href="/blog">Blog</a> &gt; WagonR vs Baleno Cross-Fitment Guide
        </nav>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Maruti WagonR vs Baleno Spare Parts Cross-Fitment & Price Guide (Delhi NCR & UP)
        </h1>
        <p className="text-gray-600 text-sm">
          Car Scrap Hub Sourcing Team | Direct Mayapuri Yard Dispatch to Delhi, Gurugram, Noida, Moradabad & Bareilly
        </p>
      </header>

      {/* Main Banner Image Section */}
      <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden shadow-md bg-gray-100">
        <Image
          src="/images/wagonr-baleno-main-banner.jpg" 
          alt="WagonR and Baleno Cross-Fitment Spare Parts Stock"
          fill
          className="object-cover"
        />
      </div>

      <section className="space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
        <p>
          Agar aap <strong>Delhi, Gurugram, Noida, Faridabad, Ghaziabad</strong> ya Uttar Pradesh ke <strong>Moradabad, Bareilly, Rampur, Sambhal</strong> jaise ilako se hain aur aapko WagonR ya Baleno ke parts chahiye, toh yeh complete cross-fitment guide aapke liye hai. Mayapuri yard se hum in sabhi cities mein direct transport aur courier dispatch provide karte hain.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">
          WagonR aur Baleno ke Sabhi Matching Parts (Complete Table)
        </h2>

        {/* Price & Compatibility Table */}
        <div className="overflow-x-auto my-4 border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white text-xs md:text-sm">
                <th className="p-3">Category / System</th>
                <th className="p-3">Exact Spare Parts</th>
                <th className="p-3">Fitment Status</th>
                <th className="p-3">Estimated Scrap Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs md:text-sm bg-white">
              {compatibilityTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-3 font-semibold text-blue-900">{row.category}</td>
                  <td className="p-3 text-gray-700">{row.parts}</td>
                  <td className="p-3 font-medium text-green-700">{row.fitment}</td>
                  <td className="p-3 font-bold text-gray-900">{row.scrapPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Teen Image Box ka System (3 Image Gallery Cards) */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Verified Parts Image Gallery (Teeno Boxes mein Photos Dalen)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          {imageBoxes.map((box, idx) => (
            <div key={idx} className="border rounded-xl overflow-hidden shadow-sm bg-white flex flex-col justify-between">
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src={box.imagePath}
                  alt={box.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-blue-900 mb-1">{box.title}</h3>
                  <p className="text-xs text-gray-600 mb-3">{box.desc}</p>
                </div>
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded inline-block text-center">
                  100% Tested Stock
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-6">
          Delivery & Service Coverage Areas
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li><strong>Delhi NCR:</strong> New Delhi, Gurugram, Noida, Greater Noida, Faridabad, Ghaziabad, Meerut.</li>
          <li><strong>Western UP:</strong> Moradabad, Bareilly, Rampur, Sambhal, Aligarh, Bulandshahr, Hapur.</li>
        </ul>
      </section>

      {/* WhatsApp CTA Button */}
      <div className="mt-8 text-center bg-gray-50 border p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Apni City ke Liye Part Check Karein (WhatsApp)
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mb-4">
          Live WhatsApp video call par part dekhein aur Delhi NCR ya Moradabad/UP ke liye delivery book karein[span_2](start_span)[span_2](end_span).
        </p>
        <a
          href="https://wa.me/916395948240?text=Hello,%20Mujhe%20WagonR/Baleno%20ka%20part%20chahiye.%20Main%20NCR/UP%20se%20hoon."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all text-sm text-center"
        >
          💬 Order WagonR/Baleno Parts On WhatsApp (6395948240)
        </a>
      </div>
    </article>
  )
}
