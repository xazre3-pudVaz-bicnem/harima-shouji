import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { columns } from '@/data/columns'
import { getBlogPosts } from '@/lib/blog'

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

type ListItem = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  image: string
}

export default function ColumnPage() {
  // 静的コラム（data/columns.ts）と自動生成コラム（content/blog/*.md）を統合して日付降順で表示
  const items: ListItem[] = [
    ...getBlogPosts().map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      category: p.category,
      image: p.image,
    })),
    ...columns.map((c) => ({
      slug: c.slug,
      title: c.title,
      description: c.description,
      date: c.date,
      category: c.category,
      image: c.image,
    })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div style={{ background: 'var(--paper)' }}>
      <PageHero
        label="COLUMN"
        title="コラム"
        subtitle="FC本部・多店舗展開企業の担当者向けに、施工管理の実務的な知識をお届けします。"
        image="/rest-10.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'コラム', href: '/column' },
        ]}
      />

      {/* Column list */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div className="eyebrow">ALL ARTICLES</div>
            <span className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: '#B5B0A4', textTransform: 'uppercase' }}>
              ( {String(items.length).padStart(2, '0')} POSTS )
            </span>
          </div>
          <div style={{ display: 'grid', gap: '2rem 1.5rem' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((col) => (
              <Link key={col.slug} href={`/column/${col.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="img-zoom" style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface)', marginBottom: '1.125rem' }}>
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    loading="lazy"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#C25E7F', textTransform: 'uppercase' }}>{col.category}</span>
                  <time dateTime={col.date} className="mono" style={{ fontSize: '0.625rem', color: '#8F8B82', letterSpacing: '0.08em' }}>{formatDate(col.date)}</time>
                </div>
                <h2 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.65, marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>{col.title}</h2>
                <p style={{ fontSize: '0.8125rem', color: '#6B675F', lineHeight: 1.8 }}>{col.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading={'施工管理について\nご相談ください'} subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。" />
    </div>
  )
}
