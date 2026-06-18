import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/wordpress'
import { areas } from '@/data/areas'
import { columns } from '@/data/columns'
import { industries } from '@/data/industries'
import { solutions } from '@/data/solutions'
import { cases } from '@/data/cases'
import { cities } from '@/data/cities'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://harima-shouji.co.jp'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/service/shop-interior`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/service/restoration`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/franchise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/multi-store`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/store-development`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/area`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/industry`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solution`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cases`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/column`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.75 },
    { url: `${baseUrl}/company`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  // Prefecture overview pages (7)
  const prefectureRoutes: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${baseUrl}/area/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Regional service pages (7 areas × 2 services = 14)
  const areaRoutes: MetadataRoute.Sitemap = areas.flatMap((area) => [
    { url: `${baseUrl}/area/${area.slug}/shop-interior`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${baseUrl}/area/${area.slug}/restoration`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.75 },
  ])

  // City/ward pages (~44)
  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/area/${city.prefectureSlug}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Industry pages (13)
  const industryRoutes: MetadataRoute.Sitemap = industries.map((ind) => ({
    url: `${baseUrl}/industry/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Solution pages (10)
  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((sol) => ({
    url: `${baseUrl}/solution/${sol.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Case study pages (10)
  const caseRoutes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${baseUrl}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Column routes (6)
  const columnRoutes: MetadataRoute.Sitemap = columns.map((col) => ({
    url: `${baseUrl}/column/${col.slug}`,
    lastModified: new Date(col.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog routes from WordPress
  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const posts = await getPosts(50)
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch {
    // WordPress not connected
  }

  return [
    ...staticRoutes,
    ...prefectureRoutes,
    ...areaRoutes,
    ...cityRoutes,
    ...industryRoutes,
    ...solutionRoutes,
    ...caseRoutes,
    ...columnRoutes,
    ...blogRoutes,
  ]
}
