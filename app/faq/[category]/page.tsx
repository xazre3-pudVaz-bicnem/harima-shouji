import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import JsonLd from '@/components/ui/JsonLd'
import QaArticle, { QaPointer } from '../_components/QaArticle'
import { SITE_URL } from '@/data/company'
import { getQaCategory, homeOf, qaInCategory, visibleQaCategories, qaAnswerHref } from '@/data/qa'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

type Props = { params: Promise<{ category: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return visibleQaCategories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = getQaCategory(slug)
  if (!category) return {}
  const hasDrafts = qaInCategory(category.slug).some((q) => q.status === 'draft')
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `${SITE_URL}/faq/${category.slug}` },
    openGraph: { title: `${category.title} | 株式会社播磨商事`, description: category.description, url: `${SITE_URL}/faq/${category.slug}`, images: ['/og-image.jpg'], type: 'website', locale: 'ja_JP' },
    ...(hasDrafts ? { robots: { index: false, follow: true } } : {}),
  }
}

export default async function FaqCategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = visibleQaCategories.find((c) => c.slug === slug)
  if (!category) notFound()

  const items = qaInCategory(category.slug)
  const answeredHere = items.filter((q) => homeOf(q) === 'category')
  const otherCategories = visibleQaCategories.filter((c) => c.slug !== category.slug)

  return (
    <div style={{ background: 'var(--paper)' }}>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'TOP', url: '/' },
          { name: 'よくある質問', url: '/faq' },
          { name: category.name, url: `/faq/${category.slug}` },
        ])}
      />
      {answeredHere.some((q) => q.status === 'published') && (
        <JsonLd
          data={faqSchema(answeredHere.filter((q) => q.status === 'published').map((q) => ({ question: q.question, answer: q.answer })))}
        />
      )}

      <PageHero
        label="FAQ"
        title={category.title}
        subtitle={category.lead}
        image={category.image}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'FAQ', href: '/faq' },
          { label: category.name, href: `/faq/${category.slug}` },
        ]}
      />

      {/* 目次 */}
      <section style={{ background: '#FFFFFF', paddingTop: '5rem', paddingBottom: '1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>QUESTIONS</div>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
            {items.map((q, i) => (
              <li key={q.slug} style={{ borderBottom: '1px solid var(--line)' }}>
                <Link
                  href={homeOf(q) === 'category' ? `#${q.slug}` : qaAnswerHref(q)}
                  className="row-link"
                  style={{ display: 'flex', gap: '1.25rem', padding: '0.875rem 0.25rem', textDecoration: 'none', alignItems: 'baseline' }}
                >
                  <span className="mono" style={{ fontSize: '0.625rem', color: '#B5B0A4', letterSpacing: '0.1em', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 1.7 }}>{q.question}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 質問と回答 */}
      <section style={{ background: '#FFFFFF', paddingTop: '3rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          {items.map((q, i) =>
            homeOf(q) === 'category' ? (
              <QaArticle key={q.slug} item={q} index={i} ctaText={category.cta} />
            ) : (
              <QaPointer key={q.slug} item={q} index={i} />
            ),
          )}
          <div style={{ borderTop: '1px solid var(--line-2)' }} />
        </div>
      </section>

      {/* 関連ページ */}
      <section style={{ background: 'var(--surface)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>RELATED</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[...category.related, ...otherCategories.map((c) => ({ label: c.title, href: `/faq/${c.slug}` })), { label: 'よくある質問の一覧', href: '/faq' }].map((link) => (
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

      <CtaSection heading={'ご相談・お見積もりは\n無料です'} subtext="ここにないご質問も、お気軽にお問い合わせください。" />
    </div>
  )
}
