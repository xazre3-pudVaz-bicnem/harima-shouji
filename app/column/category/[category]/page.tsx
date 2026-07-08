import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { columnCategories, getCategory } from '@/data/column-categories'
import { getColumnsByCategory } from '@/lib/columns'

type Params = { category: string }

export function generateStaticParams(): Params[] {
  return columnCategories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) return {}
  const title = `${cat.label}のコラム`
  return {
    title,
    description: cat.description,
    alternates: { canonical: `https://harima-shouji.co.jp/column/category/${category}` },
    openGraph: {
      title: `${title} | 株式会社播磨商事`,
      description: cat.description,
      url: `https://harima-shouji.co.jp/column/category/${category}`,
      images: [{ url: cat.image, width: 1200, height: 630 }],
      type: 'website',
    },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export default async function ColumnCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) notFound()

  const items = getColumnsByCategory(category)
  const otherCats = columnCategories.filter((c) => c.slug !== category)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
      { '@type': 'ListItem', position: 2, name: 'コラム', item: 'https://harima-shouji.co.jp/column' },
      { '@type': 'ListItem', position: 3, name: cat.label, item: `https://harima-shouji.co.jp/column/category/${category}` },
    ],
  }

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://harima-shouji.co.jp/column/${c.slug}`,
      name: c.title,
    })),
  }

  return (
    <div style={{ background: 'var(--paper)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <PageHero
        label={`COLUMN / ${cat.short}`}
        title={cat.label}
        subtitle={cat.description}
        image={cat.image}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'コラム', href: '/column' },
          { label: cat.label, href: `/column/category/${category}` },
        ]}
      />

      <section style={{ background: '#FFFFFF', paddingTop: '6rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', marginBottom: '2.5rem' }}>
            <div className="eyebrow-plain">ARTICLES</div>
            <span className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: '#B5B0A4' }}>( {String(items.length).padStart(2, '0')} )</span>
          </div>

          {items.length === 0 ? (
            <p style={{ fontSize: '0.9375rem', color: '#8F8B82', padding: '3rem 0' }}>このカテゴリの記事は準備中です。</p>
          ) : (
            <div style={{ display: 'grid', gap: '2.5rem 1.5rem' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((col) => (
                <Link key={col.slug} href={`/column/${col.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="img-zoom" style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface)', marginBottom: '1.125rem' }}>
                    <Image src={col.image} alt={col.title} fill loading="lazy" style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <time dateTime={col.date} className="mono" style={{ fontSize: '0.625rem', color: '#8F8B82', letterSpacing: '0.08em' }}>{formatDate(col.date)}</time>
                    <span className="mono" style={{ fontSize: '0.625rem', color: '#B5B0A4' }}>{col.readingMinutes}分</span>
                  </div>
                  <h2 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.65, marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>{col.title}</h2>
                  <p style={{ fontSize: '0.8125rem', color: '#6B675F', lineHeight: 1.8 }}>{col.description}</p>
                </Link>
              ))}
            </div>
          )}

          {/* Other categories */}
          <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--line)' }}>
            <div className="eyebrow-plain" style={{ marginBottom: '1.75rem' }}>OTHER CATEGORIES</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {otherCats.map((c) => (
                <Link key={c.slug} href={`/column/category/${c.slug}`} style={{ fontSize: '0.8125rem', color: '#57544D', textDecoration: 'none', border: '1px solid var(--line-2)', padding: '0.5rem 1rem' }}>
                  {c.label}
                </Link>
              ))}
              <Link href="/column" className="mono" style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', color: '#0A0A0A', textDecoration: 'none', border: '1px solid #0A0A0A', padding: '0.5rem 1rem', textTransform: 'uppercase' }}>
                ALL →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection heading={'施工管理について\nご相談ください'} subtext="FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事をまとめてサポートします。" />
    </div>
  )
}
