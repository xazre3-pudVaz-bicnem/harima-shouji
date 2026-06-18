import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { industries } from '@/data/industries'

export const metadata: Metadata = {
  title: '業種別対応｜飲食・美容・クリニック・小売など FC本部向け 株式会社播磨商事',
  description: '業種ごとの内装工事・原状回復工事の特徴と対応内容を紹介します。飲食店・美容室・クリニック・学習塾・小売店・ジムなど業種別の施工に対応。',
  keywords: ['業種別 内装工事', '飲食店 内装工事', '美容室 内装工事', 'クリニック 内装工事', '業種別 原状回復'],
  alternates: { canonical: 'https://harima-shouji.co.jp/industry' },
  openGraph: { title: '業種別対応 | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/industry' },
}

const serviceTypes = [
  { label: '店舗内装工事', value: 'interior' },
  { label: '原状回復工事', value: 'restoration' },
  { label: '内装・原状回復', value: 'both' },
]

export default function IndustryIndexPage() {
  const interiorIndustries = industries.filter((i) => i.serviceType === 'interior')
  const restorationIndustries = industries.filter((i) => i.serviceType === 'restoration')

  return (
    <div style={{ background: '#FAFAF8' }}>
      <PageHero
        label="INDUSTRY"
        title="業種別対応"
        subtitle="業種ごとの施工ニーズに合わせた内装工事・原状回復工事に対応しています。FC本部・多店舗展開企業の施工管理を一括で担当します。"
        image="/LINE_ALBUM_2026.6.10_260610_9.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '業種別対応', href: '/industry' },
        ]}
      />

      {/* Interior */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>INTERIOR WORK</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            店舗内装工事｜業種別対応
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {interiorIndustries.map((ind) => (
              <Link key={ind.slug} href={`/industry/${ind.slug}`} style={{ display: 'block', textDecoration: 'none', background: '#F5F4F0' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image
                    src={ind.heroImage}
                    alt={`${ind.industryJa}の内装工事`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '1.75rem 1.5rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '0.5rem' }}>INTERIOR</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.5rem' }}>{ind.industryJa}の内装工事</h3>
                  <p style={{ fontSize: '0.8125rem', color: '#5A5A5A', lineHeight: 1.7 }}>{ind.metaDescription.slice(0, 60)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration */}
      <section style={{ background: '#F5F4F0', paddingTop: '5rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>RESTORATION WORK</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            原状回復工事｜業種別対応
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {restorationIndustries.map((ind) => (
              <Link key={ind.slug} href={`/industry/${ind.slug}`} style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image
                    src={ind.heroImage}
                    alt={`${ind.industryJa}の原状回復工事`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '1.75rem 1.5rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '0.5rem' }}>RESTORATION</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.5rem' }}>{ind.industryJa}の原状回復工事</h3>
                  <p style={{ fontSize: '0.8125rem', color: '#5A5A5A', lineHeight: 1.7 }}>{ind.metaDescription.slice(0, 60)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="業種別の施工についてご相談ください"
        subtext="現地調査・見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}
