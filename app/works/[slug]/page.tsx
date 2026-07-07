import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { works, getWork } from '@/data/works'
import type { WorkCategory } from '@/data/works'

type Props = { params: Promise<{ slug: string }> }

const categoryConfig: Record<WorkCategory, { label: string; bg: string; color: string }> = {
  'shop-interior': { label: '店舗内装工事', bg: '#E7E3DA', color: '#1C1C1C' },
  restoration: { label: '原状回復工事', bg: '#E8EBF0', color: '#1C1C1C' },
  salon: { label: 'サロン内装', bg: '#F0EBF0', color: '#1C1C1C' },
  gym: { label: 'ジム内装', bg: '#EBF0EB', color: '#1C1C1C' },
}

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) return {}

  const cat = categoryConfig[work.category]
  const title = `${work.title}｜施工実績`
  const description = `${work.area}の${cat.label}施工実績。${work.summary.slice(0, 80)}`

  return {
    title,
    description,
    keywords: [work.title, cat.label, work.area, 'FC内装工事', '施工実績'],
    openGraph: {
      title,
      description,
      images: [{ url: work.imageUrl, width: 1200, height: 900 }],
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: { card: 'summary_large_image' },
    alternates: { canonical: `https://harima-shouji.co.jp/works/${slug}` },
  }
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) notFound()

  const cat = categoryConfig[work.category]

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
      { '@type': 'ListItem', position: 2, name: '施工実績', item: 'https://harima-shouji.co.jp/works' },
      { '@type': 'ListItem', position: 3, name: work.title, item: `https://harima-shouji.co.jp/works/${slug}` },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: work.title,
    description: work.summary,
    image: `https://harima-shouji.co.jp${work.imageUrl}`,
    url: `https://harima-shouji.co.jp/works/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: '株式会社播磨商事',
      url: 'https://harima-shouji.co.jp',
    },
    author: {
      '@type': 'Organization',
      name: '株式会社播磨商事',
    },
  }

  return (
    <div style={{ background: '#F6F4EF' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <PageHero
        label="WORKS"
        title={work.title}
        subtitle={work.summary}
        image={work.imageUrl}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '施工実績', href: '/works' },
          { label: work.title, href: `/works/${slug}` },
        ]}
      />

      {/* Info bar */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E7E3DA' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#B5B0A4', textTransform: 'uppercase', marginBottom: '0.375rem' }}>
                CATEGORY
              </div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  background: cat.bg,
                  color: cat.color,
                }}
              >
                {cat.label}
              </span>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#B5B0A4', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                AREA
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1C1C1C' }}>{work.area}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#B5B0A4', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                DURATION
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1C1C1C' }}>{work.duration}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Image */}
          <div style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden', background: '#E7E3DA', marginBottom: '5rem' }}>
            <Image
              src={work.imageUrl}
              alt={`${cat.label}の施工イメージ`}
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, background: 'rgba(10,10,10,0.72)', color: 'rgba(255,255,255,0.85)', fontSize: '0.6875rem', letterSpacing: '0.04em', padding: '0.4rem 0.9rem' }}>
              ※ 施工イメージ
            </div>
          </div>

          {/* Scope */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              SCOPE OF WORK
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: '-0.025em',
                marginBottom: '2rem',
              }}
            >
              施工範囲
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-2">
              {work.scope.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.125rem 1.5rem',
                    background: '#F6F4EF',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: '1.25rem',
                      height: '1.25rem',
                      background: '#0A0A0A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '1px',
                    }}
                  >
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                      <path d="M1 3L3 5L7 1" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenge & Approach */}
          <div style={{ display: 'grid', gap: '4rem', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                CHALLENGE
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.4,
                  marginBottom: '1.5rem',
                }}
              >
                課題
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2 }}>
                {work.challenge}
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                APPROACH
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.4,
                  marginBottom: '1.5rem',
                }}
              >
                対応
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2 }}>
                {work.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: '#EDEAE2' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            RELATED
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: '-0.025em',
              marginBottom: '2.5rem',
            }}
          >
            関連ページ
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            {work.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: '#FFFFFF',
                  color: '#0A0A0A',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  border: '1px solid #DDD8CE',
                }}
              >
                {link.label} →
              </Link>
            ))}
            <Link
              href="/works"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: '#6B675F',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                border: '1px solid #B5B0A4',
              }}
            >
              施工実績一覧へ戻る
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        heading={'この事例と同様の工事を\nご検討の方へ'}
        subtext="現地調査・見積もり無料。まずはお気軽にご相談ください。"
        primaryLabel="お問い合わせ"
        primaryHref="/v2/contact"
      />
    </div>
  )
}
