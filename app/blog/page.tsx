'use client'

import React from 'react'

export default function BlogListing() {
  const whatsappNumber = '916395948240'

  const blogs = [
    {
      id: 1,
      title: 'Maruti Swift Second Hand Engine Price in Delhi NCR & Moradabad (2026 Guide)',
      excerpt: 'Know the complete price breakdown of original Maruti Swift petrol & diesel second-hand engines with video compression test proof.',
      date: 'Oct 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: 'Mayapuri vs Moradabad Auto Scrap Market: Where to Buy Genuine i20 Spare Parts?',
      excerpt: 'Complete price comparison between Delhi Mayapuri and Moradabad scrap hubs for bumpers, headlights, and doors.',
      date: 'Oct 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60'
    }
  ]

  const getWhatsAppLink = (blogTitle: string) => {
    const text = `Hi Car Scrap Hub, I read your blog "${blogTitle}" and want to inquire about auto spare parts.`
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`
  }

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ padding: '20px 32px', backgroundColor: '#1e293b', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <a href="/" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '22px', fontWeight: 'bold' }}>CAR SCRAP HUB</a>
          <span style={{ color: '#94a3b8', marginLeft: '12px', fontSize: '14px' }}>| SEO Knowledge Center</span>
        </div>
        <a href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14px', backgroundColor: '#334155', padding: '8px 16px', borderRadius: '6px' }}>
          ← Back to Shop
        </a>
      </header>

      <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#0f172a' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#38bdf8', marginBottom: '10px' }}>
          Auto Scrap & Second-Hand Parts Buying Guides
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
          Learn how to buy verified OEM car parts, engine price breakdowns, and testing guides before making payment.
        </p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {blogs.map((post) => (
          <div key={post.id} style={{ backgroundColor: '#1e293b', borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155' }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <div style={{ fontSize: '12px', color: '#38bdf8', marginBottom: '8px' }}>{post.date} • {post.readTime}</div>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.4' }}>{post.title}</h2>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.5' }}>{post.excerpt}</p>
              <a 
                href={getWhatsAppLink(post.title)} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'inline-block', backgroundColor: '#22c55e', color: '#ffffff', padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
