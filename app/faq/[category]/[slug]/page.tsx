import { Fragment } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import JsonLd from '@/components/ui/JsonLd'
import PendingText from '../../_components/PendingText'
import QaCta from '../../_components/QaCta'
import { SITE_URL } from '@/data/company'
import { detailQa, getQaCategory, qaAnswerHref, qaInCategory } from '@/data/qa'
import { realWorks, workCategoryLabels } from '@/data/works'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'

type Props = { params: Promise<{ category: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return detailQa.map((q) => ({ category: q.category, slug: q.slug }))
}

const findItem = (category: string, slug: string) => detailQa.find((q) => q.category === category && q.slug === slug)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params
  const item = findItem(category, slug)
  if (!item) return {}
  const url = `${SITE_URL}/faq/${category}/${slug}`
  const description = item.answer.slice(0, 120)
  return {
    title: item.question,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${item.question} | 株式会社播磨商事`, description, url, images: ['/og-image.jpg'], type: 'article', locale: 'ja_JP' },
    ...(item.status === 'draft' ? { robots: { index: false, follow: true } } : {}),
  }
}

// 個別の解説ページ：見出し（質問）→ 結論 → 確認済みの数値 → 解説 → 関連する施工事例 → 依頼導線
export default async function FaqDetailPage({ params }: Props) {
  const { category: categorySlug, slug } = await params
  const item = findItem(categorySlug, slug)
  const category = getQaCategory(categorySlug)
  if (!item || !category) notFound()

  const works = realWorks.filter((w) => item.relatedWorks?.includes(w.slug))
  const siblings = qaInCategory(category.slug).filter((q) => q.slug !== item.slug)
  const path = `/faq/${category.slug}/${item.slug}`

  return (
    <div style={{ background: 'var(--paper)' }}>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'TOP', url: '/' },
          { name: 'よくある質問', url: '/faq' },
          { name: category.name, url: `/faq/${category.slug}` },
          { name: item.question, url: path },
        ])}
      />
      {item.status === 'published' && (
        <JsonLd data={articleSchema({ title: item.question, description: item.answer, url: path, dateModified: item.updatedAt })} />
      )}

      <PageHero
        label="FAQ"
        title={item.question}
        image={category.image}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'FAQ', href: '/faq' },
          { label: category.name, href: `/faq/${category.slug}` },
          { label: '解説', href: path },
        ]}
      />

      <article style={{ background: '#FFFFFF', paddingTop: '5rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>
          {item.status === 'draft' && (
            <div style={{ marginBottom: '2rem', border: '1px dashed #C25E7F', background: 'rgba(194,94,127,0.05)', padding: '1rem 1.25rem', fontSize: '0.8125rem', color: '#57544D', lineHeight: 1.8 }}>
              <strong style={{ color: '#9B3F5F' }}>下書き（本番には表示されません）</strong>
              {item.needs && <span>：{item.needs.join('／')}</span>}
            </div>
          )}

          {/* 結論 */}
          <div style={{ background: 'var(--paper)', borderLeft: '2px solid #C25E7F', padding: '1.5rem 1.75rem' }}>
            <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '0.625rem' }}>
              ANSWER
            </div>
            <p style={{ fontSize: '1.0625rem', color: '#1C1C1C', lineHeight: 2, fontWeight: 500 }}>
              <PendingText text={item.answer} />
            </p>
          </div>

          {item.facts && item.facts.length > 0 && (
            <dl style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'minmax(7rem, 11rem) 1fr', borderTop: '1px solid var(--line)' }}>
              {item.facts.map((f) => (
                <Fragment key={f.label}>
                  <dt style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A0A0A', padding: '0.875rem 0.25rem', borderBottom: '1px solid var(--line)' }}>{f.label}</dt>
                  <dd style={{ fontSize: '0.875rem', color: '#57544D', padding: '0.875rem 0.25rem', borderBottom: '1px solid var(--line)', lineHeight: 1.8 }}>
                    <PendingText text={f.value} />
                  </dd>
                </Fragment>
              ))}
            </dl>
          )}

          {/* 解説 */}
          {item.detail?.map((section) => (
            <section key={section.heading} style={{ marginTop: '4rem' }}>
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.625rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.45, marginBottom: '1.25rem' }}>
                {section.heading}
              </h2>
              {section.body.map((p, i) => (
                <p key={i} style={{ fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 2.1, marginTop: i > 0 ? '1rem' : 0 }}>
                  <PendingText text={p} />
                </p>
              ))}
            </section>
          ))}

          {/* 関連する施工事例 */}
          {works.length > 0 && (
            <section style={{ marginTop: '4.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.625rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
                関連する施工事例
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1.5rem' }}>
                {works.map((w) => (
                  <Link key={w.slug} href={`/works/${w.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--surface)', marginBottom: '0.875rem' }}>
                      <Image src={w.imageUrl} alt={w.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, 420px" />
                    </div>
                    <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: '#8F8B82', marginBottom: '0.375rem' }}>
                      {workCategoryLabels[w.category]} / {w.area}
                    </div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.6 }}>{w.title}</div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--line-2)' }}>
            <QaCta text={item.cta ?? category.cta} />
          </div>

          {/* 同じ分野の質問 */}
          {siblings.length > 0 && (
            <section style={{ marginTop: '4.5rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '1rem' }}>{category.name}のほかの質問</h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
                {siblings.map((q) => (
                  <li key={q.slug} style={{ borderBottom: '1px solid var(--line)' }}>
                    <Link href={qaAnswerHref(q)} className="row-link" style={{ display: 'block', padding: '0.875rem 0.25rem', fontSize: '0.9375rem', color: '#1C1C1C', textDecoration: 'none', lineHeight: 1.7 }}>
                      {q.question}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>

      <CtaSection heading={'ご相談・お見積もりは\n無料です'} subtext="物件が決まる前のご相談も承ります。お気軽にお問い合わせください。" />
    </div>
  )
}
