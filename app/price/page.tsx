import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import JsonLd from '@/components/ui/JsonLd'
import PendingText from '@/app/faq/_components/PendingText'
import QaArticle from '@/app/faq/_components/QaArticle'
import { SITE_URL } from '@/data/company'
import { budgetBasis, budgetGuides, budgetPlans, publishedBudgetGuides, publishedBudgetPlans } from '@/data/expertise'
import { getQaCategory, priceQa, pricePageVisible } from '@/data/qa'
import { showDrafts } from '@/lib/content-status'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

const DESCRIPTION =
  'エステ・ネイルサロン、パーソナルジム、ピラティススタジオなどの店舗内装の費用と工期の目安を、坪数・工事内容別にまとめました。播磨商事の実際の施工案件をもとにしています。'

export const metadata: Metadata = {
  title: '店舗内装の費用の目安｜サロン・ジム・ピラティスの坪数別',
  description: DESCRIPTION,
  keywords: ['店舗内装 費用 目安', 'サロン 内装 費用', '10坪 サロン 内装 費用', 'パーソナルジム 内装 費用', 'ピラティス 内装 費用', '原状回復 費用'],
  alternates: { canonical: `${SITE_URL}/price` },
  openGraph: { title: '店舗内装の費用の目安 | 株式会社播磨商事', description: DESCRIPTION, url: `${SITE_URL}/price`, images: ['/og-image.jpg'], type: 'website', locale: 'ja_JP' },
  ...(showDrafts ? { robots: { index: false, follow: true } } : {}),
}

// 確認済みの金額が1件もない間は、本番ではこのページ自体を公開しない
export default function PricePage() {
  if (!pricePageVisible) notFound()

  const rows = showDrafts ? budgetGuides : publishedBudgetGuides
  const plans = showDrafts ? budgetPlans : publishedBudgetPlans
  const publishedQa = priceQa.filter((q) => q.status === 'published')
  const basis = [budgetBasis.source, budgetBasis.tax && `金額は${budgetBasis.tax}`].filter(Boolean).join('。')

  return (
    <div style={{ background: 'var(--paper)' }}>
      <JsonLd data={breadcrumbSchema([{ name: 'TOP', url: '/' }, { name: '店舗内装の費用の目安', url: '/price' }])} />
      {publishedQa.length > 0 && <JsonLd data={faqSchema(publishedQa.map((q) => ({ question: q.question, answer: q.answer })))} />}

      <PageHero
        label="PRICE"
        title="店舗内装の費用の目安"
        subtitle="業種・坪数・工事内容ごとの費用と工期の目安です。播磨商事の実際の施工案件をもとにしています。"
        image="/store-04.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '費用の目安', href: '/price' },
        ]}
      />

      {/* 費用の目安の表 */}
      {rows.length > 0 && (
        <section style={{ background: '#FFFFFF', paddingTop: '6rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>BUDGET GUIDE</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.035em', marginBottom: '2.5rem' }}>
              業種・坪数別の費用と工期
            </h2>
            <table className="budget-table">
              <thead>
                <tr>
                  <th scope="col">例</th>
                  <th scope="col">坪数</th>
                  <th scope="col">工事内容</th>
                  <th scope="col">費用の目安</th>
                  <th scope="col">工期</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} id={r.id}>
                    <th scope="row" data-label="例">{r.example}</th>
                    <td data-label="坪数">{r.size}</td>
                    <td data-label="工事内容">{r.scope}</td>
                    <td data-label="費用の目安" style={{ fontWeight: 700, color: '#0A0A0A' }}>
                      <PendingText text={r.price || '【要確認】'} />
                    </td>
                    <td data-label="工期">
                      <PendingText text={r.duration || '【要確認】'} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: '1.5rem', fontSize: '0.8125rem', color: '#6B675F', lineHeight: 1.9 }}>
              {basis && <>※ <PendingText text={basis} />。</>}
              {budgetBasis.note}
            </p>
          </div>
        </section>
      )}

      {/* 予算○万円でできること */}
      {plans.length > 0 && (
        <section style={{ background: 'var(--paper)', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', gap: '2.5rem' }}>
            {plans.map((p) => (
              <section key={p.id} id={p.id} style={{ scrollMarginTop: '6rem' }}>
                <h2 style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.625rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
                  {p.title}
                </h2>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 2 }}>
                  {(p.items.length > 0 ? p.items : ['【要確認：実際の施工案件から、この予算でできた内容を箇条書きで入力】']).map((it) => (
                    <li key={it}>
                      <PendingText text={it} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      )}

      {/* 費用のよくある質問 */}
      {priceQa.length > 0 && (
        <section style={{ background: '#FFFFFF', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.035em', marginBottom: '2rem' }}>
              費用についてのよくある質問
            </h2>
            {priceQa.map((q, i) => (
              <QaArticle key={`${q.category}/${q.slug}`} item={q} index={i} headingLevel={3} ctaText={getQaCategory(q.category)?.cta ?? ''} />
            ))}
            <div style={{ borderTop: '1px solid var(--line-2)' }} />
            <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#57544D' }}>
              <Link href="/faq" style={{ color: '#0A0A0A', borderBottom: '1px solid #0A0A0A', textDecoration: 'none' }}>
                よくある質問の一覧へ →
              </Link>
            </p>
          </div>
        </section>
      )}

      <CtaSection heading={'ご予算に合わせて\nご提案します'} subtext="業種・坪数・ご予算をお聞かせください。現地調査・お見積もりは無料です。" />
    </div>
  )
}
