import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { areas } from '@/data/areas'
import { cities } from '@/data/cities'
import { industries } from '@/data/industries'
import { solutions } from '@/data/solutions'
import { columnCategories } from '@/data/column-categories'
import { getAllColumns } from '@/lib/columns'

export const metadata: Metadata = {
  title: 'サイトマップ | 全ページ一覧',
  description: '株式会社播磨商事のサイトマップ。店舗内装工事・原状回復工事のサービス、業種別対応、対応エリア、コラムなど全ページの一覧です。',
  alternates: { canonical: 'https://harima-shouji.co.jp/sitemap-index' },
  openGraph: { title: 'サイトマップ | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/sitemap-index', type: 'website' },
}

const eyebrow = { fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', fontWeight: 500 as const, letterSpacing: '0.24em', color: '#C25E7F', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }
const h2Style = { fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 700 as const, color: '#0A0A0A', letterSpacing: '-0.03em', marginBottom: '1.5rem' }
const linkStyle = { fontSize: '0.875rem', color: '#3A3A3A', textDecoration: 'none', lineHeight: 2 }

function LinkList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, columnGap: '2rem' }}>
      {items.map((it) => (
        <li key={it.href} style={{ padding: '0.375rem 0', borderBottom: '1px solid var(--line)' }}>
          <Link href={it.href} style={linkStyle}>{it.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default function SitemapIndexPage() {
  const main = [
    { href: '/', label: 'トップ' },
    { href: '/service', label: 'サービス一覧' },
    { href: '/service/shop-interior', label: '店舗内装工事' },
    { href: '/service/restoration', label: '原状回復工事' },
    { href: '/franchise', label: 'FC本部向けサービス' },
    { href: '/multi-store', label: '多店舗展開企業向け' },
    { href: '/store-development', label: '店舗開発向け' },
    { href: '/works', label: '施工実績' },
    { href: '/voice', label: 'お客様の声' },
    { href: '/company', label: '会社概要' },
    { href: '/area', label: '対応エリア' },
    { href: '/industry', label: '業種別対応' },
    { href: '/solution', label: 'ソリューション' },
    { href: '/column', label: 'コラム' },
    { href: '/news', label: 'ニュース' },
    { href: '/faq', label: 'よくある質問' },
    { href: '/contact', label: 'お問い合わせ' },
  ]

  const areaLinks = areas.flatMap((a) => [
    { href: `/area/${a.slug}`, label: `${a.name}` },
    { href: `/area/${a.slug}/shop-interior`, label: `${a.name}の店舗内装工事` },
    { href: `/area/${a.slug}/restoration`, label: `${a.name}の原状回復工事` },
  ])
  const cityLinks = cities.map((c) => ({ href: `/area/${c.prefectureSlug}/${c.slug}`, label: `${c.prefectureJa} ${c.cityName}` }))
  const industryLinks = industries.map((i) => ({ href: `/industry/${i.slug}`, label: i.industryJa }))
  const solutionLinks = solutions.map((s) => ({ href: `/solution/${s.slug}`, label: s.title }))
  const categoryLinks = columnCategories.map((c) => ({ href: `/column/category/${c.slug}`, label: c.label }))
  const columnLinks = getAllColumns().map((c) => ({ href: `/column/${c.slug}`, label: c.title }))

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
      { '@type': 'ListItem', position: 2, name: 'サイトマップ', item: 'https://harima-shouji.co.jp/sitemap-index' },
    ],
  }

  const Section = ({ label, title, items }: { label: string; title: string; items: { href: string; label: string }[] }) => (
    <div style={{ marginBottom: '4rem' }}>
      <div style={eyebrow}>{label}</div>
      <h2 style={h2Style}>{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '0 2rem' }}>
        <LinkList items={items} />
      </div>
    </div>
  )

  return (
    <div style={{ background: 'var(--paper)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <PageHero
        label="SITEMAP"
        title="サイトマップ"
        subtitle="サイト内の全ページの一覧です。目的のページへ素早くアクセスできます。"
        image="/store-04.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'サイトマップ', href: '/sitemap-index' },
        ]}
      />

      <section style={{ background: '#FFFFFF', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Section label="MAIN" title="主要ページ" items={main} />
          <Section label="INDUSTRY" title="業種別対応" items={industryLinks} />
          <Section label="AREA" title="対応エリア" items={areaLinks} />
          <Section label="CITY" title="市区町村別" items={cityLinks} />
          <Section label="SOLUTION" title="ソリューション" items={solutionLinks} />
          <Section label="COLUMN CATEGORY" title="コラムカテゴリ" items={categoryLinks} />
          <Section label="COLUMN" title="コラム記事" items={columnLinks} />
        </div>
      </section>

      <CtaSection heading={'お探しの内容が\n見つからない場合は'} subtext="店舗内装工事・原状回復工事のご相談は、お気軽にお問い合わせください。" />
    </div>
  )
}
