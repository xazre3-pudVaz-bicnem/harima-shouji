import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { works } from '@/data/works'
import type { WorkCategory } from '@/data/works'

export const metadata: Metadata = {
  title: '施工実績｜店舗内装・原状回復工事の実績',
  description:
    'FC飲食店・サロン・ジム・オフィスなど多業態の施工実績一覧。店舗内装工事・原状回復工事の実際の事例から対応エリア・工期・施工範囲をご確認いただけます。',
  keywords: ['施工実績', '店舗内装工事 実績', '原状回復工事 実績', 'FC内装工事 事例', '多店舗 施工管理'],
  openGraph: {
    title: '施工実績｜店舗内装・原状回復工事の実績 株式会社播磨商事',
    description:
      'FC飲食店・サロン・ジム・オフィスなど多業態の施工実績一覧。店舗内装工事・原状回復工事の実際の事例をご覧ください。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://harima-shouji.co.jp/works' },
}

const categoryConfig: Record<WorkCategory, { label: string; bg: string; color: string }> = {
  'shop-interior': { label: '店舗内装工事', bg: '#F0EFEC', color: '#1C1C1C' },
  restoration: { label: '原状回復工事', bg: '#E8EBF0', color: '#1C1C1C' },
  salon: { label: 'サロン内装', bg: '#F0EBF0', color: '#1C1C1C' },
  gym: { label: 'ジム内装', bg: '#EBF0EB', color: '#1C1C1C' },
}

const filterTabs = [
  { label: '全て', active: true },
  { label: '店舗内装工事', active: false },
  { label: '原状回復工事', active: false },
  { label: 'サロン内装', active: false },
  { label: 'ジム内装', active: false },
]

const internalLinks = [
  { label: 'フランチャイズ本部向けサービス', href: '/franchise', note: 'FC本部・チェーン店の施工管理を一本化' },
  { label: '店舗内装工事', href: '/service/shop-interior', note: '新規出店・改装・リノベーション対応' },
  { label: '原状回復工事', href: '/service/restoration', note: '退去立会い代行・費用適正化サポート' },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
    { '@type': 'ListItem', position: 2, name: '施工実績', item: 'https://harima-shouji.co.jp/works' },
  ],
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '施工実績一覧',
  url: 'https://harima-shouji.co.jp/works',
  numberOfItems: works.length,
  itemListElement: works.map((w, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: w.title,
    url: `https://harima-shouji.co.jp/works/${w.slug}`,
  })),
}

export default function WorksPage() {
  return (
    <div style={{ background: '#FAFAF8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <PageHero
        label="WORKS"
        title="施工実績"
        subtitle="FC飲食店・サロン・ジム・オフィスまで。対応可能な施工の一例をご紹介します。"
        image="/store-01.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '施工実績', href: '/works' },
        ]}
      />

      {/* Filter tabs */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid #F0EFEC', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {filterTabs.map((tab) => (
              <button
                key={tab.label}
                style={{
                  flexShrink: 0,
                  padding: '1.125rem 1.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: tab.active ? 700 : 400,
                  color: tab.active ? '#0A0A0A' : '#9CA3AF',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: tab.active ? '2px solid #0A0A0A' : '2px solid transparent',
                  cursor: 'default',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Works grid */}
      <section style={{ paddingTop: '5rem', paddingBottom: '7rem', background: '#FAFAF8' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              ALL WORKS
            </div>
            <p style={{ fontSize: '0.875rem', color: '#9CA3AF', marginBottom: '1rem' }}>
              {works.length}件の施工イメージ
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#6B6B6B', lineHeight: 1.9, background: '#F5F4F0', borderRadius: '4px', padding: '0.875rem 1.25rem', display: 'inline-block' }}>
              ※ 掲載している写真・事例は施工イメージです。実際の施工実績は準備が整い次第、順次公開してまいります。
            </p>
          </div>

          <div
            style={{ display: 'grid', gap: '2px' }}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {works.map((work) => {
              const cat = categoryConfig[work.category]
              return (
                <Link
                  key={work.slug}
                  href={`/works/${work.slug}`}
                  style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden' }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#F0EFEC' }}>
                    <Image
                      src={work.imageUrl}
                      alt={work.title}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.75rem' }}>
                    {/* Badge */}
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        background: cat.bg,
                        color: cat.color,
                        marginBottom: '1rem',
                      }}
                    >
                      {cat.label}
                    </span>

                    {/* Title */}
                    <h2
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#0A0A0A',
                        letterSpacing: '-0.015em',
                        lineHeight: 1.5,
                        marginBottom: '1rem',
                      }}
                    >
                      {work.title}
                    </h2>

                    {/* Meta */}
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem' }}>
                      <div>
                        <div style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.08em', color: '#C4C2BE', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                          AREA
                        </div>
                        <div style={{ fontSize: '0.8125rem', color: '#6B6B6B' }}>{work.area}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.08em', color: '#C4C2BE', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                          DURATION
                        </div>
                        <div style={{ fontSize: '0.8125rem', color: '#6B6B6B' }}>{work.duration}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: '#0A0A0A',
                        letterSpacing: '0.04em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                      }}
                    >
                      詳しく見る
                      <span style={{ fontSize: '0.75rem' }}>→</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: '#F5F4F0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            SERVICES
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: '-0.025em',
              marginBottom: '3rem',
            }}
          >
            関連サービス
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-3">
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '2rem',
                  background: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    letterSpacing: '-0.015em',
                    marginBottom: '0.625rem',
                  }}
                >
                  {link.label}
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#9CA3AF', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  {link.note}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0A0A0A', letterSpacing: '0.04em' }}>
                  詳しく見る →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading={'施工のご相談は\nお気軽にどうぞ'}
        subtext="現地調査・見積もり無料。複数店舗のまとめてのご相談も歓迎します。"
        primaryLabel="お問い合わせ"
        primaryHref="/v2/contact"
      />
    </div>
  )
}
