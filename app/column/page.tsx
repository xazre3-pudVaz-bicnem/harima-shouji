import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { columns } from '@/data/columns'

export const metadata: Metadata = {
  title: 'コラム | FC本部・多店舗展開企業向け店舗工事の知識',
  description: 'FC本部・多店舗展開企業の担当者向けに、店舗内装工事・原状回復工事に関する実務的な知識をお届けします。',
  alternates: { canonical: 'https://harima-shouji.co.jp/column' },
  openGraph: { title: 'コラム | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/column' },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export default function ColumnPage() {
  return (
    <div style={{ background: '#F6F4EF' }}>
      <PageHero
        label="COLUMN"
        title="コラム"
        subtitle="FC本部・多店舗展開企業の担当者向けに、施工管理の実務的な知識をお届けします。"
        image="/LINE_ALBUM_2026.6.10_260610_6.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'コラム', href: '/column' },
        ]}
      />

      {/* Column list */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {columns.map((col) => (
              <Link key={col.slug} href={`/column/${col.slug}`} style={{ display: 'block', textDecoration: 'none', background: '#F6F4EF' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '1.75rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.6875rem', color: '#8F8B82', background: '#E7E3DA', padding: '0.25rem 0.75rem', fontWeight: 600 }}>{col.category}</span>
                    <span style={{ fontSize: '0.6875rem', color: '#8F8B82' }}>{formatDate(col.date)}</span>
                  </div>
                  <h2 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.6, marginBottom: '0.75rem' }}>{col.title}</h2>
                  <p style={{ fontSize: '0.8125rem', color: '#6B675F', lineHeight: 1.7 }}>{col.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="施工管理について\nご相談ください" subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。" />
    </div>
  )
}
