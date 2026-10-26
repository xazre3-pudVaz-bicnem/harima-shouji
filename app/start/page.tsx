import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import JsonLd from '@/components/ui/JsonLd'
import QaArticle from '@/app/faq/_components/QaArticle'
import { SITE_URL } from '@/data/company'
import { getQaCategory, startQa, startPageVisible, pricePageVisible, visibleQaCategories } from '@/data/qa'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

// 原稿：播磨商事 AIO改善 修正指示書（2026-10-21）「1. /start 初めて店舗を出店する方へ」
const TITLE = '初めての店舗出店、内装は誰に相談？｜物件選びから予算内の提案まで | 株式会社播磨商事'
const LEAD =
  '初めての出店では、物件を契約する前に内装会社へ相談するのがいちばん安全です。播磨商事は、物件の確認から予算に合わせた内装の提案、工事、引き渡しまでを一つの窓口で引き受けます。'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: LEAD,
  keywords: ['店舗 出店 内装 相談', '初めての出店 内装', 'サロン 開業 内装', 'ジム 開業 内装', '物件 内見 同行'],
  alternates: { canonical: `${SITE_URL}/start` },
  openGraph: { title: TITLE, description: LEAD, url: `${SITE_URL}/start`, images: ['/og-image.jpg'], type: 'website', locale: 'ja_JP' },
  ...(startQa.some((q) => q.status === 'draft') ? { robots: { index: false, follow: true } } : {}),
}

export default function StartPage() {
  if (!startPageVisible) notFound()

  const published = startQa.filter((q) => q.status === 'published')

  return (
    <div style={{ background: 'var(--paper)' }}>
      <JsonLd data={breadcrumbSchema([{ name: 'TOP', url: '/' }, { name: '初めて店舗を出店する方へ', url: '/start' }])} />
      {published.length > 0 && <JsonLd data={faqSchema(published.map((q) => ({ question: q.question, answer: q.answer })))} />}

      <PageHero
        label="FOR FIRST STORE"
        title={'初めて店舗を出す方へ。\n内装は物件を決める前からご相談ください'}
        subtitle={LEAD}
        image="/salon-01.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '初めての出店', href: '/start' },
        ]}
      />

      <section style={{ background: '#FFFFFF', paddingTop: '5rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          {startQa.map((q, i) => (
            <QaArticle key={`${q.category}/${q.slug}`} item={q} index={i} ctaText={getQaCategory(q.category)?.cta ?? ''} />
          ))}
          <div style={{ borderTop: '1px solid var(--line-2)' }} />
        </div>
      </section>

      <section style={{ background: 'var(--surface)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>NEXT</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              ...(pricePageVisible ? [{ label: '店舗内装の費用の目安', href: '/price' }] : []),
              ...visibleQaCategories.map((c) => ({ label: c.title, href: `/faq/${c.slug}` })),
              { label: 'よくある質問の一覧', href: '/faq' },
              { label: 'サロン内装工事', href: '/industry/salon-interior' },
              { label: 'ジム内装工事', href: '/industry/gym-interior' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ padding: '0.75rem 1.25rem', background: '#FFFFFF', border: '1px solid var(--line-2)', fontSize: '0.875rem', fontWeight: 600, color: '#0A0A0A', textDecoration: 'none' }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading={'物件が決まる前の\nご相談も歓迎です'} subtext="業種・坪数・ご予算をお聞かせください。現地調査・お見積もりは無料です。" />
    </div>
  )
}
