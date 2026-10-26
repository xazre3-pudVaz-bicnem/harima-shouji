import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/data/company'

export default function robots(): MetadataRoute.Robots {
  // 旧デザイン(/v2/*)・重複ページは各ページの noindex メタで除外するため、
  // クロール自体は許可する（disallowするとnoindexが読まれず除外されないため）。
  // Host: 行は Google・Bing が使わない非標準の指定のため出力しない（修正指示書 課題1）。
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
