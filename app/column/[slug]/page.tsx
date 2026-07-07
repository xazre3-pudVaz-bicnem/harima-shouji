import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { columns, getColumn } from '@/data/columns'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return columns.map((col) => ({ slug: col.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const col = getColumn(slug)
  if (!col) return {}

  return {
    title: `${col.title} | 播磨商事コラム`,
    description: col.description,
    keywords: col.keywords,
    alternates: { canonical: `https://harima-shouji.co.jp/column/${slug}` },
    openGraph: {
      title: `${col.title} | 株式会社播磨商事`,
      description: col.description,
      url: `https://harima-shouji.co.jp/column/${slug}`,
      images: [{ url: col.image, width: 1200, height: 630 }],
    },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export default async function ColumnDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const col = getColumn(slug)

  if (!col) notFound()

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: col.title,
    description: col.description,
    datePublished: col.date,
    author: { '@type': 'Organization', name: '株式会社播磨商事' },
    publisher: { '@type': 'Organization', name: '株式会社播磨商事' },
    image: `https://harima-shouji.co.jp${col.image}`,
  }

  return (
    <div style={{ background: '#F6F4EF' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <PageHero
        label={col.category.toUpperCase()}
        title={col.title}
        image={col.image}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'コラム', href: '/column' },
          { label: col.title.slice(0, 20) + (col.title.length > 20 ? '...' : ''), href: `/column/${slug}` },
        ]}
      />

      {/* Article */}
      <article style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid #E7E3DA' }}>
            <span style={{ fontSize: '0.6875rem', color: '#8F8B82', background: '#E7E3DA', padding: '0.375rem 1rem', fontWeight: 600 }}>{col.category}</span>
            <time dateTime={col.date} style={{ fontSize: '0.8125rem', color: '#8F8B82' }}>{formatDate(col.date)}</time>
          </div>

          {/* Cover image */}
          <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '4rem' }}>
            <Image src={col.image} alt={col.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 800px) 100vw, 800px" priority />
          </div>

          {/* Sections */}
          {col.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.4, marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #0A0A0A' }}>
                {section.heading}
              </h2>
              <div>
                {section.body.split('\n\n').map((para, j) => (
                  <p key={j} style={{ fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 2, marginBottom: '1.25rem' }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Related services */}
          {col.relatedService.length > 0 && (
            <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#EDEAE2' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}>RELATED SERVICES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.relatedService.map((s) => (
                  <Link key={s.href} href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none' }}>
                    <svg width="16" height="6" viewBox="0 0 16 6" fill="none">
                      <path d="M0 3H14M14 3L11 1M14 3L11 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* More columns */}
      <section style={{ background: '#EDEAE2', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '2rem' }}>MORE COLUMNS</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-3">
            {columns
              .filter((c) => c.slug !== slug)
              .slice(0, 3)
              .map((c) => (
                <Link key={c.slug} href={`/column/${c.slug}`} style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', padding: '2rem' }}>
                  <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>{c.category}</div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.5 }}>{c.title}</div>
                </Link>
              ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/column" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid #0A0A0A', paddingBottom: '2px' }}>
              コラム一覧へ
            </Link>
          </div>
        </div>
      </section>

      <CtaSection heading="施工管理について\nご相談ください" subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。" />
    </div>
  )
}
