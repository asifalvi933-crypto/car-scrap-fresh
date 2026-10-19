import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://car-scrap-fresh-6s1b.vercel.app/sitemap.xml',
  }
}
