import Link from 'next/link'
import { getColumnsForCategories } from '@/lib/columns'

// サービスページ・業種ページの下部に「関連コラム」を表示する共有セクション。
// categorySlugs に合致するコラムを新着順で最大 limit 件表示する。
export default function RelatedColumns({
  categorySlugs,
  heading = '関連コラム',
  limit = 4,
  background = 'var(--paper)',
}: {
  categorySlugs: string[]
  heading?: string
  limit?: number
  background?: string
}) {
  const items = getColumnsForCategories(categorySlugs, limit)
  if (items.length === 0) return null

  return (
    <section style={{ background, paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>COLUMN</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.2 }}>
              {heading}
            </h2>
          </div>
          <Link href="/column" className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', paddingBottom: '0.375rem', borderBottom: '1px solid #0A0A0A' }}>
            ALL COLUMNS
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div style={{ display: 'grid', gap: '1px', background: 'var(--line-2)', border: '1px solid var(--line-2)' }} className="grid-cols-1 sm:grid-cols-2">
          {items.map((c) => (
            <Link key={c.slug} href={`/column/${c.slug}`} className="row-link" style={{ display: 'block', padding: '1.75rem', background: '#FFFFFF', textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.75rem' }}>
                <span className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#C25E7F', textTransform: 'uppercase' }}>{c.categoryLabel}</span>
                <span className="mono" style={{ fontSize: '0.5625rem', color: '#B5B0A4', letterSpacing: '0.06em' }}>{c.readingMinutes}分</span>
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.6, display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <span>{c.title}</span>
                <span className="row-arrow" aria-hidden style={{ color: '#8F8B82', flexShrink: 0 }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
