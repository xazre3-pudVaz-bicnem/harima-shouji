import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'
import JsonLd from '@/components/ui/JsonLd'
import { SITE_URL } from '@/data/company'
import {
  qaCategories,
  qaInCategory,
  qaAnswerHref,
  visibleQaCategories,
  visibleBasicQa,
  startPageVisible,
  pricePageVisible,
} from '@/data/qa'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'よくある質問',
  description:
    'サロン・ジム・ピラティススタジオの内装費用、物件選び、見積もりの見方、FC・多店舗展開、原状回復まで、店舗内装のよくある質問に播磨商事がお答えします。',
  keywords: ['店舗内装 よくある質問', 'サロン 内装 費用', 'ジム 内装 防音', '店舗 原状回復', '店舗内装 見積もり'],
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: { images: ['/og-image.jpg'], title: 'よくある質問 | 株式会社播磨商事', url: `${SITE_URL}/faq`, type: 'website' },
}

export default function FaqPage() {
  const categories = qaCategories
    .map((c) => ({ ...c, items: qaInCategory(c.slug), hasPage: visibleQaCategories.some((v) => v.slug === c.slug) }))
    .filter((c) => c.items.length > 0)

  const guides = [
    startPageVisible && { href: '/start', label: '初めて店舗を出店する方へ', note: '物件選びから予算内の提案まで' },
    pricePageVisible && { href: '/price', label: '店舗内装の費用の目安', note: '業種・坪数別の費用と工期' },
  ].filter((g): g is { href: string; label: string; note: string } => Boolean(g))

  return (
    <div style={{ background: 'var(--paper)' }}>
      <JsonLd data={breadcrumbSchema([{ name: 'TOP', url: '/' }, { name: 'よくある質問', url: '/faq' }])} />
      <JsonLd data={faqSchema(visibleBasicQa.flatMap((g) => g.items.map((it) => ({ question: it.q, answer: it.a }))))} />

      <PageHero
        label="FAQ"
        title="よくある質問"
        subtitle="費用・物件選び・工期から、FC・多店舗展開、原状回復まで。店舗内装のご質問に分野別にお答えします。"
        image="/LINE_ALBUM_2026.6.10_260610_8.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'FAQ', href: '/faq' },
        ]}
      />

      {/* 分野別のよくある質問 */}
      {categories.length > 0 && (
        <section style={{ paddingTop: '7rem', paddingBottom: '5rem', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>BY CATEGORY</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.035em', marginBottom: '3rem' }}>
              分野別のよくある質問
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
              {categories.map((c) => (
                <div key={c.slug} style={{ background: '#FFFFFF', padding: '2rem 1.75rem', border: '1px solid var(--line-2)' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                    {c.hasPage ? (
                      <Link href={`/faq/${c.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {c.name} →
                      </Link>
                    ) : (
                      c.name
                    )}
                  </h3>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {c.items.map((q) => (
                      <li key={q.slug} style={{ borderTop: '1px solid var(--line)' }}>
                        <Link href={qaAnswerHref(q)} className="row-link" style={{ display: 'block', padding: '0.75rem 0', fontSize: '0.875rem', color: '#3A3A3A', textDecoration: 'none', lineHeight: 1.7 }}>
                          {q.question}
                          {q.status === 'draft' && <span style={{ marginLeft: '0.5rem', fontSize: '0.6875rem', color: '#9B3F5F' }}>（下書き）</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {guides.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1rem', marginTop: '2rem' }}>
                {guides.map((g) => (
                  <Link key={g.href} href={g.href} className="row-link" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '1.5rem 1.75rem', background: 'var(--paper)', textDecoration: 'none' }}>
                    <span>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: '#8F8B82', marginBottom: '0.25rem' }}>{g.note}</span>
                      <span style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A' }}>{g.label}</span>
                    </span>
                    <span className="row-arrow" aria-hidden style={{ color: '#8F8B82' }}>→</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 基本的なご質問 */}
      <section style={{ paddingTop: '6rem', paddingBottom: '7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>BASICS</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.035em', marginBottom: '3.5rem' }}>
            ご依頼についての基本的なご質問
          </h2>
          <FaqAccordion faqs={visibleBasicQa.map((g) => ({ category: g.category, items: g.items.map(({ q, a }) => ({ q, a })) }))} />
        </div>
      </section>

      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#EDEAE2', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2, marginBottom: '2rem' }}>こちらに記載のない内容は、お気軽にお問い合わせください。</p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 3rem', background: '#0A0A0A', color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none' }}>
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  )
}
