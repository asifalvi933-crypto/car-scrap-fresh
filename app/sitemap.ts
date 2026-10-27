import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carscraphub.in'

  const staticPages = [
    '',
    '/blog',
    '/blog/alto-engine-new-vs-second-hand',
    '/blog/vitara-brezza-engine-new-vs-second-hand',
    '/sambhal-car-scrap-market',
    // Yeh saare 7 scrap-parts wale pages yahan add kar dein:
    '/scrap-parts/maruti-brezza',
    '/scrap-parts/maruti-ertiga',
    '/scrap-parts/maruti-alto',
    '/scrap-parts/maruti-dzire',
    '/scrap-parts/maruti-wagonr',
    '/scrap-parts/maruti-swift',
  ]

  const currentDate = new Date()

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}
