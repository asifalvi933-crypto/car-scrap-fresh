import Image from 'next/image';

export default function WagonRVsBalenoBlog() {
  return (
    <main style={{ padding: '16px', backgroundColor: '#f9fafb', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Top Notification Banner */}
      <div style={{ backgroundColor: '#f59e0b', color: '#000', padding: '10px', textAlign: 'center', fontWeight: 'bold', borderRadius: '6px', marginBottom: '16px', fontSize: '14px' }}>
        ⚡ 100% Tested OEM Parts | WagonR & Baleno Stock Ready | Live Video Testing Before Dispatch
      </div>

      {/* Breadcrumb */}
      <div style={{ fontSize: '13px', color: '#4b5563', marginBottom: '16px' }}>
        <a href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</a> &gt; <a href="/blog" style={{ color: '#2563eb', textDecoration: 'none' }}>Blog</a> &gt; WagonR vs Baleno Cross-Fitment Guide
      </div>

      {/* Main Content Card */}
      <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        <span style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '4px 10px', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px', display: 'inline-block' }}>
          ✓ VERIFIED DISMANTLING YARD STOCK
        </span>

        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '12px', color: '#111827', lineHeight: '1.3' }}>
          Maruti WagonR vs Baleno Spare Parts Cross-Fitment & Price Guide (Delhi NCR & UP)
        </h1>

        <p style={{ fontSize: '14px', color: '#4b5563', marginTop: '8px', fontStyle: 'italic' }}>
          Car Scrap Hub Sourcing Team | Direct Mayapuri Yard Dispatch to Delhi, Gurugram, Noida, Moradabad & Bareilly
        </p>

        <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', marginTop: '14px' }}>
          Agar aap Delhi, Gurugram, Noida, Faridabad ya Uttar Pradesh ke Moradabad, Bareilly, Rampur, Sambhal jaise ilako se hain aur aapko WagonR ya Baleno ke parts chahiye, toh yeh complete cross-fitment guide aapke liye hai. Mayapuri yard se hum in sabhi cities mein direct transport aur courier dispatch provide karte hain.
        </p>

        {/* WhatsApp CTA Button Inside Card */}
        <div style={{ marginTop: '20px', marginBottom: '25px' }}>
          <a 
            href="https://wa.me/916395948240?text=Hello,%20mujhe%20WagonR%20aur%20Baleno%20spare%20parts%20chahiye" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'block', backgroundColor: '#22c55e', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '15px' }}
          >
            💬 Order WagonR/Baleno Parts On WhatsApp (6395948240)
          </a>
        </div>

        {/* Table Section */}
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginTop: '25px', marginBottom: '12px' }}>
          📊 WagonR aur Baleno ke Matching Parts (Complete Table)
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#111827', color: '#fff' }}>
                <th style={{ padding: '10px', border: '1px solid #374151' }}>Category / System</th>
                <th style={{ padding: '10px', border: '1px solid #374151' }}>Exact Spare Parts</th>
                <th style={{ padding: '10px', border: '1px solid #374151' }}>Fitment Status</th>
                <th style={{ padding: '10px', border: '1px solid #374151' }}>Estimated Scrap Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: '500' }}>1.2L Engine & Ignition</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Spark Plugs, Ignition Coils, O2 Sensor, MAP Sensor</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}><span style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>100% Same (K12 Engine Series)</span></td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: 'bold', color: '#047857' }}>₹1,500 - ₹4,500</td>
              </tr>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: '500' }}>Clutch & Transmission</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Clutch Plate, Pressure Plate, Release Bearing</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}><span style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>100% Direct Inter-fit</span></td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: 'bold', color: '#047857' }}>₹2,500 - ₹6,000</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: '500' }}>Braking System</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Front Brake Pads, Caliper Assemblies</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}><span style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>100% Compatible (Front Axle)</span></td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: 'bold', color: '#047857' }}>₹1,000 - ₹3,000</td>
              </tr>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: '500' }}>Suspension & Steering</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Lower Control Arm (Chimta), Tie Rod Ends</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}><span style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>Identical Mountings & Bushings</span></td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: 'bold', color: '#047857' }}>₹1,200 - ₹3,500</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: '500' }}>Cooling & Sensors</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Radiator Fan Motor, Thermostat Valve, Knock Sensor</td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}><span style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>100% Direct Match</span></td>
                <td style={{ padding: '10px', border: '1px solid #e5e7eb', fontWeight: 'bold', color: '#047857' }}>₹800 - ₹2,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Coverage Section */}
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827', marginTop: '25px', marginBottom: '8px' }}>
          Delivery & Service Coverage Areas
        </h3>
        <ul style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', paddingLeft: '20px' }}>
          <li><strong>Delhi NCR:</strong> New Delhi, Gurugram, Noida, Greater Noida, Faridabad, Ghaziabad, Meerut.</li>
          <li><strong>Western UP:</strong> Moradabad, Bareilly, Rampur, Sambhal, Aligarh, Bulandshahr, Hapur.</li>
        </ul>

      </div>

      {/* Bottom Fixed WhatsApp Bar */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a 
          href="https://wa.me/916395948240?text=Hello,%20mujhe%20WagonR%20aur%20Baleno%20spare%20parts%20chahiye" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'block', backgroundColor: '#22c55e', color: '#fff', textAlign: 'center', padding: '14px', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px', boxShadow: '0 4px 10px rgba(34, 197, 94, 0.3)' }}
        >
          💬 WhatsApp WagonR & Baleno Parts Inquiry (6395948240)
        </a>
      </div>

    </main>
  );
}
