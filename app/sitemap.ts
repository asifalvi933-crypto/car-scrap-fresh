import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carscraphub.in'

  const staticPages = [
    '',
    '/blog',
    // Blog paths
    '/blog/alto-engine-new-vs-second-hand',
    '/blog/vitara-brezza-engine-new-vs-second-hand',
    '/blog/ertiga-engine-new-vs-second-hand',
    '/blog/scorpio-bolero-engine-parts',
    '/blog/swift-dzire-gearbox-new-vs-second-hand',
    '/blog/swift-engine-guide',
    '/blog/wagonr-engine-new-vs-second-hand',
    
    // Scrap parts wale 7 pages
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
