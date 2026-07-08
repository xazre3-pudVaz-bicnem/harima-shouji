import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { getAllColumns } from '@/lib/columns'
import { columnCategories } from '@/data/column-categories'

export const metadata: Metadata = {
  title: 'コラム | FC本部・多店舗展開企業向け店舗工事の知識',
  description: 'FC本部・多店舗展開企業の担当者向けに、店舗内装工事・原状回復工事・施工管理・退店対応の実務知識を専門コラムとしてお届けします。東京・関東〜関西で対応。',
  keywords: ['フランチャイズ 内装工事', 'FC本部 店舗工事', '多店舗 施工管理', '店舗 原状回復', '店舗内装工事 コラム'],
  alternates: { canonical: 'https://harima-shouji.co.jp/column' },
  openGraph: { title: 'コラム | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/column', type: 'website' },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

type SearchParams = { category?: string }

export default async function ColumnPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { category } = await searchParams
  const all = getAllColumns()
  const activeCat = category && columnCategories.some((c) => c.slug === category) ? category : undefined
  const items = activeCat ? all.filter((c) => c.categorySlug === activeCat) : all

  // 記事が1件以上あるカテゴリだけフィルタに出す
  const catCounts = new Map<string, number>()
  for (const c of all) if (c.categorySlug) catCounts.set(c.categorySlug, (catCounts.get(c.categorySlug) ?? 0) + 1)
  const availableCats = columnCategories.filter((c) => (catCounts.get(c.slug) ?? 0) > 0)

  const featured = all.slice(0, 3)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
      { '@type': 'ListItem', position: 2, name: 'コラム', item: 'https://harima-shouji.co.jp/column' },
    ],
  }

  return (
    <div style={{ background: 'var(--paper)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <PageHero
        label="COLUMN"
        title="コラム"
        subtitle="FC本部・多店舗展開企業の担当者に向けて、店舗内装工事・原状回復工事・施工管理の実務知識をお届けします。"
        image="/rest-10.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'コラム', href: '/column' },
        ]}
      />

      {/* Featured */}
      {!activeCat && featured.length >= 3 && (
        <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '2rem' }}>
          <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '2.5rem' }}>PICK UP</div>
            <div style={{ display: 'grid', gap: 'clamp(2rem,4vw,3rem)' }} className="grid-cols-1 lg:grid-cols-[1.6fr_1fr]">
              {/* Lead */}
              <Link href={`/column/${featured[0].slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="img-zoom" style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface)', marginBottom: '1.5rem' }}>
                  <Image src={featured[0].image} alt={featured[0].title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 60vw" priority />
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.875rem' }}>
                  <span className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#C25E7F', textTransform: 'uppercase' }}>{featured[0].categoryLabel}</span>
                  <time className="mono" style={{ fontSize: '0.625rem', color: '#8F8B82', letterSpacing: '0.08em' }}>{formatDate(featured[0].date)}</time>
                  <span className="mono" style={{ fontSize: '0.625rem', color: '#B5B0A4' }}>{featured[0].readingMinutes}分</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.45, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>{featured[0].title}</h2>
                <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 1.9 }}>{featured[0].description}</p>
              </Link>
              {/* Secondary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {featured.slice(1, 3).map((c) => (
                  <Link key={c.slug} href={`/column/${c.slug}`} style={{ display: 'flex', gap: '1.25rem', textDecoration: 'none', alignItems: 'flex-start' }}>
                    <div className="img-zoom" style={{ position: 'relative', width: 'clamp(96px,24vw,140px)', aspectRatio: '4/3', flexShrink: 0, overflow: 'hidden', background: 'var(--surface)' }}>
                      <Image src={c.image} alt={c.title} fill loading="lazy" style={{ objectFit: 'cover' }} sizes="140px" />
                    </div>
                    <div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span className="mono" style={{ fontSize: '0.5rem', fontWeight: 500, letterSpacing: '0.12em', color: '#C25E7F', textTransform: 'uppercase' }}>{c.categoryLabel}</span>
                        <span className="mono" style={{ fontSize: '0.5625rem', color: '#B5B0A4' }}>{c.readingMinutes}分</span>
                      </div>
                      <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.55, letterSpacing: '-0.01em' }}>{c.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* List with category filter */}
      <section style={{ background: '#FFFFFF', paddingTop: '5rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Category filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--line)' }}>
            <Link
              href="/column"
              className="mono"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.08em', padding: '0.5rem 1rem', textDecoration: 'none', textTransform: 'uppercase', border: '1px solid', borderColor: !activeCat ? '#0A0A0A' : 'var(--line-2)', background: !activeCat ? '#0A0A0A' : 'transparent', color: !activeCat ? '#FFFFFF' : '#57544D' }}
            >
              ALL
            </Link>
            {availableCats.map((c) => {
              const on = activeCat === c.slug
              return (
                <Link
                  key={c.slug}
                  href={`/column?category=${c.slug}`}
                  style={{ fontSize: '0.8125rem', fontWeight: on ? 700 : 500, padding: '0.5rem 1rem', textDecoration: 'none', border: '1px solid', borderColor: on ? '#0A0A0A' : 'var(--line-2)', background: on ? '#0A0A0A' : 'transparent', color: on ? '#FFFFFF' : '#57544D' }}
                >
                  {c.short}
                </Link>
              )
            })}
          </div>

          {/* Active category heading */}
          {activeCat && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
                {columnCategories.find((c) => c.slug === activeCat)?.label}
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 1.9, maxWidth: '640px' }}>
                {columnCategories.find((c) => c.slug === activeCat)?.description}
              </p>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', marginBottom: '2.5rem' }}>
            <div className="eyebrow-plain">{activeCat ? 'ARTICLES' : 'ALL ARTICLES'}</div>
            <span className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: '#B5B0A4' }}>( {String(items.length).padStart(2, '0')} )</span>
          </div>

          <div style={{ display: 'grid', gap: '2.5rem 1.5rem' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((col) => (
              <Link key={col.slug} href={`/column/${col.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="img-zoom" style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface)', marginBottom: '1.125rem' }}>
                  <Image src={col.image} alt={col.title} fill loading="lazy" style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#C25E7F', textTransform: 'uppercase' }}>{col.categoryLabel}</span>
                  <time dateTime={col.date} className="mono" style={{ fontSize: '0.625rem', color: '#8F8B82', letterSpacing: '0.08em' }}>{formatDate(col.date)}</time>
                  <span className="mono" style={{ fontSize: '0.625rem', color: '#B5B0A4' }}>{col.readingMinutes}分</span>
                </div>
                <h2 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.65, marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>{col.title}</h2>
                <p style={{ fontSize: '0.8125rem', color: '#6B675F', lineHeight: 1.8, marginBottom: '0.875rem' }}>{col.description}</p>
                {col.keywords.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {col.keywords.slice(0, 3).map((k) => (
                      <span key={k} className="mono" style={{ fontSize: '0.5625rem', color: '#8F8B82', border: '1px solid var(--line-2)', padding: '0.2rem 0.55rem', letterSpacing: '0.04em' }}>#{k}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* Category index links (SEO) */}
          <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--line)' }}>
            <div className="eyebrow-plain" style={{ marginBottom: '1.75rem' }}>CATEGORIES</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {availableCats.map((c) => (
                <Link key={c.slug} href={`/column/category/${c.slug}`} style={{ fontSize: '0.8125rem', color: '#57544D', textDecoration: 'none', border: '1px solid var(--line-2)', padding: '0.5rem 1rem', display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                  {c.label}
                  <span className="mono" style={{ fontSize: '0.5625rem', color: '#B5B0A4' }}>{catCounts.get(c.slug)}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection heading={'施工管理について\nご相談ください'} subtext="FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事をまとめてサポートします。" />
    </div>
  )
}
