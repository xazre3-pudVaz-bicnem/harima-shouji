import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'

export const metadata: Metadata = {
  title: 'サービス一覧 | 店舗内装工事・原状回復工事',
  description: 'FC本部・多店舗展開企業向けの2つのサービス。店舗内装工事（新規出店・改装）と原状回復工事（退去・解体・内装復旧）を一括対応します。現地調査・見積無料。',
  alternates: { canonical: 'https://harima-shouji.co.jp/service' },
  openGraph: { title: 'サービス一覧 | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/service' },
}

const services = [
  {
    number: '01',
    label: 'INTERIOR WORKS',
    title: '店舗内装工事',
    description: '新規出店・改装・リノベーションから、複数店舗の同時施工まで。フランチャイズ仕様の統一施工に対応します。',
    image: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
    href: '/service/shop-interior',
    features: ['新規出店・改装・リノベーション', 'ブランド仕様の統一施工', '夜間・短工期対応', '複数店舗の同時進行管理'],
  },
  {
    number: '02',
    label: 'RESTORATION',
    title: '原状回復工事',
    description: '退去立会い代行・解体・内装復旧まで。複数店舗の退去スケジュールを一元管理します。',
    image: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
    href: '/service/restoration',
    features: ['退去立会い代行', '解体・撤去工事', 'クロス・床・設備の復旧', '複数店舗の退去一括管理'],
  },
]

export default function ServicePage() {
  return (
    <div style={{ background: '#F6F4EF' }}>
      <PageHero
        label="SERVICE"
        title="サービス"
        subtitle="播磨商事が対応するのは2つのサービスのみ。FC本部・多店舗展開企業の施工管理を一本化します。"
        image="/LINE_ALBUM_2026.6.10_260610_3.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'サービス', href: '/service' },
        ]}
      />

      {/* Service list */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {services.map((service) => (
              <div key={service.number} style={{ display: 'grid', minHeight: '60vh', background: '#F6F4EF' }} className="grid-cols-1 lg:grid-cols-2">
                <div style={{ position: 'relative', overflow: 'hidden', minHeight: '320px' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,8,0.12)' }} />
                  <div style={{ position: 'absolute', top: '2rem', left: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                    {service.label}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(3rem, 6vw, 5.5rem)' }}>
                  <div style={{ fontSize: '4rem', fontWeight: 700, color: '#E7E3DA', letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '-1rem' }}>{service.number}</div>
                  <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                    {service.title}
                  </h2>
                  <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2, marginBottom: '2.5rem' }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {service.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#3A3A3A' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#0A0A0A', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', paddingBottom: '0.5rem', borderBottom: '1px solid #0A0A0A', alignSelf: 'flex-start' }}
                  >
                    詳しく見る
                    <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                      <path d="M0 4H18M18 4L14 1M18 4L14 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#EDEAE2' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '2rem' }}>RELATED</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-3">
            {[
              { label: 'FC本部向けサービス', href: '/franchise', note: 'フランチャイズ本部の施工管理' },
              { label: '多店舗展開企業向け', href: '/multi-store', note: '複数店舗の一括管理' },
              { label: '店舗開発担当者向け', href: '/store-development', note: '出店から退店まで' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ display: 'block', padding: '2.5rem 2rem', background: '#FFFFFF', textDecoration: 'none' }}>
                <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>{item.note}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A' }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="店舗内装・原状回復について\n相談する" subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。" />
    </div>
  )
}
