'use client'

import React, { useState } from 'react'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const whatsappNumber = '916395948240'

  const categories = ['All', 'Engine & Transmission', 'Body Parts', 'Lights & Electrical', 'Suspension']

  const products = [
    {
      id: 1,
      title: 'Maruti Swift Dzire K12 Petrol Engine Assembly',
      category: 'Engine & Transmission',
      location: 'Mayapuri Industrial Area, Delhi',
      date: 'Oct 2026',
      price: '₹18,500',
      condition: '42,000 km Tested',
      videoProof: true,
      image: '/maruti-swift-vvt-engine-assembly.jpg.jpeg',
      description: '100% Original tested engine with complete wiring and compression test video proof.'
    },
    {
      id: 2,
      title: 'Hyundai i20 Elite Front Bumper & Chrome Grille Assembly',
      category: 'Body Parts',
      location: 'Sikandrabad & Moradabad Hub',
      date: 'Oct 2026',
      price: '₹4,200',
      condition: 'Original OEM Paint',
      videoProof: true,
      image: '/car-scrap-hub-yard-engine-stock.jpg.jpeg',
      description: 'Zero clip damage, minor surface scratches. Original factory paint.'
    },
    {
      id: 3,
      title: 'Hyundai Creta Original LED Headlight Pair',
      category: 'Lights & Electrical',
      location: 'Moradabad Warehouse',
      date: 'Oct 2026',
      price: '₹9,800',
      condition: 'Scratchless Glass',
      videoProof: true,
      image: '/maruti-suzuki-tested-engine-front-view.jpg.jpeg',
      description: 'Original factory fitted LED headlight assembly. Tested matrix bulbs.'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getWhatsAppLink = (itemTitle?: string) => {
    const text = itemTitle 
      ? `Hi Car Scrap Hub, I want to inquire about: ${itemTitle}` 
      : 'Hi Car Scrap Hub, I want to inquire about second-hand auto spare parts.'
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`
  }

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Top Banner */}
      <div style={{ backgroundColor: '#1e293b', padding: '8px 16px', textAlign: 'center', fontSize: '14px', borderBottom: '1px solid #334155', color: '#38bdf8' }}>
        ⚡ 100% Tested Second-Hand Parts with Video Proof & Cash on Delivery Available in NCR / UP
      </div>

      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b', position: 'sticky', top: 0, zIndex: 50 }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#38bdf8', margin: 0 }}>CAR SCRAP HUB</h1>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Verified Auto Parts Marketplace</p>
        </div>
        <a 
          href={getWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ backgroundColor: '#22c55e', color: '#ffffff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <span>💬 Instant WhatsApp Quote</span>
        </a>
      </header>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#1e293b' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px' }}>
          Buy Original Second-Hand Parts With Video Verification Before Payment
        </h2>
        <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '16px' }}>
          Watch actual part testing videos, check genuine prices, and get original Swift, i20, Creta, and Scorpio parts delivered directly to your garage.
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <input 
            type="text" 
            placeholder="Search parts (e.g. Swift Engine, Creta Headlight)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '14px 20px', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#ffffff', fontSize: '15px', outline: 'none' }}
          />
        </div>
      </div>

      {/* Real Yard & Engine Photo Showcase Section */}
      <div style={{ maxWidth: '1000px', margin: '30px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '8px' }}>
            📸 Live Yard Stock &amp; Tested Engine Assemblies
          </h3>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>
            Direct Delhi NCR &amp; Moradabad yard se 100% original tested parts. Dispatch se pehle WhatsApp par live video proof dekhein.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={{ overflow: 'hidden', borderRadius: '10px', border: '1px solid #334155' }}>
              <img 
                src="/maruti-swift-vvt-engine-assembly.jpg.jpeg" 
                alt="Maruti Swift VVT Engine Assembly" 
                style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ padding: '8px', fontSize: '12px', background: '#0f172a', color: '#cbd5e1' }}>Swift VVT Engine Assembly</div>
            </div>
            
            <div style={{ overflow: 'hidden', borderRadius: '10px', border: '1px solid #334155' }}>
              <img 
                src="/car-scrap-hub-yard-engine-stock.jpg.jpeg" 
                alt="Car Scrap Hub Yard Stock" 
                style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ padding: '8px', fontSize: '12px', background: '#0f172a', color: '#cbd5e1' }}>Yard Stock View</div>
            </div>

            <div style={{ overflow: 'hidden', borderRadius: '10px', border: '1px solid #334155' }}>
              <img 
                src="/maruti-suzuki-tested-engine-front-view.jpg.jpeg" 
                alt="Maruti Tested Engine Front View" 
                style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ padding: '8px', fontSize: '12px', background: '#0f172a', color: '#cbd5e1' }}>Tested Engine Front View</div>
            </div>

            <div style={{ overflow: 'hidden', borderRadius: '10px', border: '1px solid #334155' }}>
              <img 
                src="/maruti-second-hand-engine-delhi-ncr.jpg.jpeg" 
                alt="Scrap Engine Assemblies Yard" 
                style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ padding: '8px', fontSize: '12px', background: '#0f172a', color: '#cbd5e1' }}>Delhi NCR Yard Stock</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', padding: '20px', borderBottom: '1px solid #1e293b', fontSize: '14px', color: '#cbd5e1' }}>
        <span>✅ 100% Original OEM Parts</span>
        <span>🎥 Video Testing Proof</span>
        <span>🚚 Express NCR & UP Delivery</span>
      </div>

      {/* Category Filters */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', padding: '24px 16px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: activeCategory === cat ? '#38bdf8' : '#1e293b',
              color: activeCategory === cat ? '#0f172a' : '#f8fafc',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 60px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            style={{ backgroundColor: '#1e293b', borderRadius: '16px', overflow: 'hidden', border: '1px solid #334155', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ position: 'relative', height: '200px' }}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: 'rgba(15, 23, 42, 0.85)', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
                  📍 {product.location}
                </span>
                {product.videoProof && (
                  <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#ef4444', color: '#ffffff', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
                    ▶ Video Tested
                  </span>
                )}
              </div>

              <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '12px', color: '#38bdf8', fontWeight: 'bold', marginBottom: '6px' }}>
                  {product.category} • {product.condition}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.4' }}>
                  {product.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '16px', lineHeight: '1.5' }}>
                  {product.description}
                </p>
              </div>
            </div>

            <div style={{ padding: '0 20px 20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #334155', paddingTop: '16px' }}>
              <div>
                <span style={{ fontSize: '12px', color: '#94a3b8', display: 'block' }}>Expected Price</span>
                <span style={{ fontSize: '22px', fontWeight: '800', color: '#22c55e' }}>{product.price}</span>
              </div>
              <a 
                href={getWhatsAppLink(product.title)} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ backgroundColor: '#22c55e', color: '#ffffff', padding: '10px 16px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #1e293b', padding: '30px 20px', textAlign: 'center', color: '#64748b', fontSize: '14px' }}>
        <p>© 2026 Car Scrap Hub. Premium Second Hand Spare Parts Marketplace.</p>
        <p style={{ fontSize: '12px', marginTop: '6px' }}>Moradabad • Mayapuri Delhi NCR • Sikandrabad</p>
      </footer>

    </div>
  )
}
