import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { cases } from '@/data/cases'

export const metadata: Metadata = {
  title: '施工事例｜FC本部・多店舗展開の店舗内装工事・原状回復なら株式会社播磨商事',
  description: '株式会社播磨商事の施工事例。飲食FC・美容室FC・小売FCなどの新規出店内装工事、退去時の原状回復工事の実績を紹介します。',
  keywords: ['施工事例', '内装工事 事例', '原状回復 事例', 'FC 施工事例', '多店舗 内装工事 事例'],
  alternates: { canonical: 'https://harima-shouji.co.jp/cases' },
  openGraph: { title: '施工事例 | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/cases' },
}

export default function CasesPage() {
  return (
    <div style={{ background: '#FAFAF8' }}>
      <PageHero
        label="CASES"
        title="施工事例"
        subtitle="FC本部・多店舗展開企業の施工事例を紹介します。業種・エリア・サービス種別でご参照ください。"
        image="/LINE_ALBUM_2026.6.10_260610_3.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '施工事例', href: '/cases' },
        ]}
      />

      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>ALL CASES</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            施工実績一覧
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <Link key={c.slug} href={`/cases/${c.slug}`} style={{ display: 'block', textDecoration: 'none', background: '#F5F4F0' }}>
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <Image
                    src={c.heroImage}
                    alt={c.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '1.75rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#5A5A5A', background: '#FFFFFF', padding: '0.2rem 0.6rem' }}>{c.serviceType}</span>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#9CA3AF', background: '#FFFFFF', padding: '0.2rem 0.6rem' }}>{c.industry}</span>
                  </div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.5, marginBottom: '0.5rem' }}>{c.title}</h3>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{c.area} / 工期: {c.duration}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="施工についてのご相談はお気軽に"
        subtext="現地調査・見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}
