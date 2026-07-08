import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://harima-shouji.co.jp'
  // 旧デザイン(/v2/*)・重複ページは各ページの noindex メタで除外するため、
  // クロール自体は許可する（disallowするとnoindexが読まれず除外されないため）。
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
