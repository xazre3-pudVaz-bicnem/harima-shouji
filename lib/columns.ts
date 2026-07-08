import { columns } from '@/data/columns'
import { getBlogPosts } from '@/lib/blog'
import { categorySlugFromLabel } from '@/data/column-categories'

// 専門コラムの統合ビュー。
// - data/columns.ts（手書きの構造化コラム）
// - content/blog/*.md（自動・大量生成コラム）
// の2ソースを、一覧・カテゴリ・関連表示で使う共通型にまとめる。

export type ColumnListItem = {
  slug: string
  title: string
  description: string
  date: string
  categoryLabel: string
  categorySlug: string | undefined
  image: string
  keywords: string[]
  readingMinutes: number
  source: 'markdown' | 'static'
}

// 手書きコラムの本文量から読了時間を概算
function staticReadingMinutes(sections: { heading: string; body: string }[]): number {
  const chars = sections.reduce((n, s) => n + s.heading.length + s.body.length, 0)
  return Math.max(3, Math.round(chars / 500))
}

// md本文（HTML）からタグを除いた文字量で読了時間を概算
function htmlReadingMinutes(html: string): number {
  const text = html.replace(/<[^>]+>/g, '')
  return Math.max(3, Math.round(text.length / 500))
}

export function getAllColumns(): ColumnListItem[] {
  const md: ColumnListItem[] = getBlogPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    categoryLabel: p.category,
    categorySlug: categorySlugFromLabel(p.category),
    image: p.image,
    keywords: p.tags,
    readingMinutes: htmlReadingMinutes(p.html),
    source: 'markdown',
  }))

  const staticItems: ColumnListItem[] = columns.map((c) => ({
    slug: c.slug,
    title: c.title,
    description: c.description,
    date: c.date,
    categoryLabel: c.category,
    categorySlug: categorySlugFromLabel(c.category),
    image: c.image,
    keywords: c.keywords,
    readingMinutes: staticReadingMinutes(c.sections),
    source: 'static',
  }))

  return [...md, ...staticItems].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getColumnsByCategory(categorySlug: string): ColumnListItem[] {
  return getAllColumns().filter((c) => c.categorySlug === categorySlug)
}

// 指定slugに関連するコラムを返す（同カテゴリ優先→不足分は新着で補完）
export function getRelatedColumns(currentSlug: string, categorySlug: string | undefined, limit = 3): ColumnListItem[] {
  const all = getAllColumns().filter((c) => c.slug !== currentSlug)
  const sameCat = categorySlug ? all.filter((c) => c.categorySlug === categorySlug) : []
  const rest = all.filter((c) => !sameCat.includes(c))
  return [...sameCat, ...rest].slice(0, limit)
}

// カテゴリslugの配列に一致するコラムを新着順で返す（サービス/業種ページの「関連コラム」用）
export function getColumnsForCategories(categorySlugs: string[], limit = 4): ColumnListItem[] {
  const set = new Set(categorySlugs)
  const matched = getAllColumns().filter((c) => c.categorySlug && set.has(c.categorySlug))
  return matched.slice(0, limit)
}
