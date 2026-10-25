import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carscraphub.in'

  // Yahan aap apne static pages ki list rakh sakte hain
  const staticPages = [
    '',
    '/blog',
    '/blog/alto-engine-new-vs-second-hand',
    '/blog/vitara-brezza-engine-new-vs-second-hand',
    '/sambhal-car-scrap-market',
    // Jaise-jaise aap naye pages banayein, unke path yahan add kar sakte hain
    // '/bareilly-used-car-parts',
    // '/moradabad-car-scrap-yard',
  ]

  const currentDate = new Date()

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}
