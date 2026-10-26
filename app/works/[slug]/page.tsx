import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import JsonLd from '@/components/ui/JsonLd'
import { SITE_URL } from '@/data/company'
import { visibleWorks, getWork, workCategoryLabels } from '@/data/works'
import type { WorkCategory, WorkData } from '@/data/works'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'

type Props = { params: Promise<{ slug: string }> }

const categoryStyle: Record<WorkCategory, { bg: string; color: string }> = {
  'shop-interior': { bg: '#E7E3DA', color: '#1C1C1C' },
  restoration: { bg: '#E8EBF0', color: '#1C1C1C' },
  salon: { bg: '#F0EBF0', color: '#1C1C1C' },
  gym: { bg: '#EBF0EB', color: '#1C1C1C' },
  pilates: { bg: '#EEF0EB', color: '#1C1C1C' },
}

export const dynamicParams = false

export function generateStaticParams() {
  return visibleWorks.map((w) => ({ slug: w.slug }))
}

const formatMonth = (ym: string) => {
  const [y, m] = ym.split('-')
  return m ? `${y}年${Number(m)}月` : `${y}年`
}

/** 施工概要（入力されている項目だけ） */
function specRows(w: WorkData) {
  return [
    w.industry && { label: '業種', value: w.industry },
    { label: '施工エリア', value: w.area },
    w.tsubo !== undefined && { label: '坪数', value: `${w.tsubo}坪` },
    w.cost && { label: '施工費用', value: `${w.cost.range}（${w.cost.tax}）` },
    { label: '工期', value: w.duration },
    w.completedAt && { label: '竣工', value: formatMonth(w.completedAt) },
  ].filter((r): r is { label: string; value: string } => Boolean(r))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) return {}

  const label = workCategoryLabels[work.category]
  const title = `${work.title}｜${work.isIllustration ? '施工イメージ' : '施工実績'}`
  const description = work.isIllustration
    ? `${label}の施工イメージ（実際の施工実績ではない参考例）。${work.summary.slice(0, 60)}`
    : `${work.area}の${work.industry ?? label}の施工事例。${work.tsubo !== undefined ? `${work.tsubo}坪・` : ''}工期${work.duration}。${work.summary.slice(0, 60)}`

  return {
    title,
    description,
    keywords: [work.title, label, work.area, '施工事例'],
    openGraph: {
      title,
      description,
      images: [{ url: work.imageUrl, width: 1200, height: 900 }],
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: { card: 'summary_large_image' },
    alternates: { canonical: `${SITE_URL}/works/${slug}` },
    // 施工イメージ・下書きは検索エンジンに登録しない（実績と誤認されないように）
    ...(work.isIllustration || work.status === 'draft' ? { robots: { index: false, follow: true } } : {}),
  }
}

const eyebrowStyle = { fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }
const h2Style = { fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.025em', marginBottom: '2rem' }

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) notFound()

  const label = workCategoryLabels[work.category]
  const style = categoryStyle[work.category]
  const specs = specRows(work)
  const path = `/works/${slug}`

  return (
    <div style={{ background: '#F6F4EF' }}>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'TOP', url: '/' },
          { name: '施工実績', url: '/works' },
          { name: work.title, url: path },
        ])}
      />
      {!work.isIllustration && work.status === 'published' && (
        <JsonLd
          data={articleSchema({
            title: work.title,
            description: work.summary,
            url: path,
            imageUrl: work.imageUrl,
            ...(work.completedAt ? { datePublished: work.completedAt } : {}),
          })}
        />
      )}

      <PageHero
        label="WORKS"
        title={work.title}
        subtitle={work.summary}
        image={work.imageUrl}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '施工実績', href: '/works' },
          { label: work.title, href: path },
        ]}
      />

      {work.isIllustration && (
        <div style={{ background: '#101014', color: 'rgba(255,255,255,0.78)' }}>
          <p style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem', fontSize: '0.8125rem', lineHeight: 1.8 }}>
            ※ このページは「施工イメージ」です。実際の施工実績ではなく、対応できる工事の内容を示す参考例として掲載しています。
          </p>
        </div>
      )}

      {/* 施工概要 */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E7E3DA' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.75rem 2.75rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ ...eyebrowStyle, color: '#B5B0A4', marginBottom: '0.375rem' }}>CATEGORY</div>
              <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em', background: style.bg, color: style.color }}>
                {label}
              </span>
            </div>
            {specs.map((r) => (
              <div key={r.label}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#B5B0A4', marginBottom: '0.375rem' }}>{r.label}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1C1C1C' }}>{r.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

          {/* 施工前後の写真 */}
          {work.beforeAfter && work.beforeAfter.length > 0 ? (
            <div style={{ marginBottom: '5rem' }}>
              <div style={eyebrowStyle}>BEFORE / AFTER</div>
              <h2 style={h2Style}>施工前後の写真</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {work.beforeAfter.map((pair, i) => (
                  <figure key={i} style={{ margin: 0 }}>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1rem' }}>
                      {[
                        { tag: 'BEFORE', photo: pair.before },
                        { tag: 'AFTER', photo: pair.after },
                      ].map(({ tag, photo }) => (
                        <div key={tag} style={{ position: 'relative', aspectRatio: '4/3', background: '#E7E3DA', overflow: 'hidden' }}>
                          <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 680px" />
                          <span className="mono" style={{ position: 'absolute', top: 0, left: 0, background: tag === 'AFTER' ? '#0A0A0A' : 'rgba(10,10,10,0.6)', color: '#FFFFFF', fontSize: '0.625rem', letterSpacing: '0.2em', padding: '0.4rem 0.9rem' }}>
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                    {pair.caption && (
                      <figcaption style={{ marginTop: '0.875rem', fontSize: '0.875rem', color: '#6B675F', lineHeight: 1.8 }}>{pair.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden', background: '#E7E3DA', marginBottom: '5rem' }}>
              <Image
                src={work.imageUrl}
                alt={work.isIllustration ? `${label}の施工イメージ` : work.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
              {work.isIllustration && (
                <div style={{ position: 'absolute', bottom: 0, left: 0, background: 'rgba(10,10,10,0.72)', color: 'rgba(255,255,255,0.85)', fontSize: '0.6875rem', letterSpacing: '0.04em', padding: '0.4rem 0.9rem' }}>
                  ※ 施工イメージ
                </div>
              )}
            </div>
          )}

          {/* 工事範囲 */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={eyebrowStyle}>SCOPE OF WORK</div>
            <h2 style={h2Style}>工事範囲</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-2">
              {work.scope.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.125rem 1.5rem', background: '#F6F4EF' }}>
                  <span style={{ flexShrink: 0, width: '1.25rem', height: '1.25rem', background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                      <path d="M1 3L3 5L7 1" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 工事のポイント */}
          {work.points && work.points.length > 0 && (
            <div style={{ marginBottom: '5rem' }}>
              <div style={eyebrowStyle}>POINTS</div>
              <h2 style={h2Style}>工事のポイント</h2>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid #E7E3DA' }}>
                {work.points.map((pt, i) => (
                  <li key={pt.title} className="grid grid-cols-1 md:grid-cols-[4rem_1fr]" style={{ gap: '0.5rem 1.5rem', padding: '1.75rem 0', borderBottom: '1px solid #E7E3DA' }}>
                    <span className="mono" style={{ fontSize: '0.75rem', color: '#C25E7F', letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.625rem' }}>{pt.title}</h3>
                      <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.1 }}>{pt.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* 課題と対応（施工イメージの既存項目） */}
          {(work.challenge || work.approach) && (
            <div style={{ display: 'grid', gap: '4rem', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-2">
              {work.challenge && (
                <div>
                  <div style={eyebrowStyle}>CHALLENGE</div>
                  <h3 style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.4, marginBottom: '1.5rem' }}>課題</h3>
                  <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2 }}>{work.challenge}</p>
                </div>
              )}
              {work.approach && (
                <div>
                  <div style={eyebrowStyle}>APPROACH</div>
                  <h3 style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.4, marginBottom: '1.5rem' }}>対応</h3>
                  <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2 }}>{work.approach}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Related links */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: '#EDEAE2' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={eyebrowStyle}>RELATED</div>
          <h2 style={{ ...h2Style, marginBottom: '2.5rem' }}>関連ページ</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            {work.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: '#FFFFFF', color: '#0A0A0A', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.02em', textDecoration: 'none', border: '1px solid #DDD8CE' }}
              >
                {link.label} →
              </Link>
            ))}
            <Link
              href="/works"
              style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'transparent', color: '#6B675F', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.02em', textDecoration: 'none', border: '1px solid #B5B0A4' }}
            >
              施工実績一覧へ戻る
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        heading={'この事例と同様の工事を\nご検討の方へ'}
        subtext="現地調査・見積もり無料。まずはお気軽にご相談ください。"
        primaryLabel="お問い合わせ"
        primaryHref="/contact"
      />
    </div>
  )
}
