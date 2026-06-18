import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'
import { cases, getCase } from '@/data/cases'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCase(slug)
  if (!c) return {}

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: { canonical: `https://harima-shouji.co.jp/cases/${slug}` },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `https://harima-shouji.co.jp/cases/${slug}`,
      images: [{ url: c.heroImage, width: 1200, height: 630 }],
      type: 'article',
    },
  }
}

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const c = getCase(slug)
  if (!c) notFound()

  const faqData = c.faqs.length > 0 ? [{ category: 'この事例に関するよくある質問', items: c.faqs }] : null

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.metaDescription,
    image: `https://harima-shouji.co.jp${c.heroImage}`,
    author: { '@type': 'Organization', name: '株式会社播磨商事' },
    publisher: { '@type': 'Organization', name: '株式会社播磨商事', url: 'https://harima-shouji.co.jp' },
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
      { '@type': 'ListItem', position: 2, name: '施工事例', item: 'https://harima-shouji.co.jp/cases' },
      { '@type': 'ListItem', position: 3, name: c.title, item: `https://harima-shouji.co.jp/cases/${slug}` },
    ],
  }

  return (
    <div style={{ background: '#FAFAF8' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <PageHero
        label="CASE STUDY"
        title={c.title}
        subtitle={c.metaDescription}
        image={c.heroImage}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '施工事例', href: '/cases' },
          { label: c.title, href: `/cases/${slug}` },
        ]}
      />

      {/* Tags */}
      <section style={{ background: '#FFFFFF', paddingTop: '4rem', paddingBottom: '0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#F5F4F0', color: '#0A0A0A', padding: '0.4rem 1rem' }}>{c.serviceType}</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#F5F4F0', color: '#0A0A0A', padding: '0.4rem 1rem' }}>{c.industry}</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#F5F4F0', color: '#0A0A0A', padding: '0.4rem 1rem' }}>{c.area}</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#F5F4F0', color: '#0A0A0A', padding: '0.4rem 1rem' }}>工期: {c.duration}</span>
            {c.nightWork && <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#0D1117', color: '#FFFFFF', padding: '0.4rem 1rem' }}>夜間施工対応</span>}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section style={{ background: '#FFFFFF', paddingTop: '4rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-[1fr_400px]">
            <div>
              {/* Scope */}
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>SCOPE</div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>施工範囲</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {c.scope.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 1.7 }}>
                      <span style={{ width: '4px', height: '4px', background: '#0A0A0A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenge */}
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>CHALLENGE</div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>課題・状況</h2>
                <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2 }}>{c.challenge}</p>
              </div>

              {/* Approach */}
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>APPROACH</div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>対応・施工アプローチ</h2>
                <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2 }}>{c.approach}</p>
              </div>

              {/* Management Points */}
              <div>
                <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>MANAGEMENT POINTS</div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>施工管理のポイント</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {c.managementPoints.map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1rem', fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 1.7, padding: '1rem 1.25rem', background: '#F5F4F0' }}>
                      <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#9CA3AF', flexShrink: 0, marginTop: '0.2rem' }}>0{i + 1}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side info */}
            <div style={{ background: '#F5F4F0', padding: '2.5rem 2rem', position: 'sticky', top: '6rem' }}>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>CASE INFO</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '0.25rem' }}>業種</div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{c.industry}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '0.25rem' }}>エリア</div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{c.area}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '0.25rem' }}>サービス種別</div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{c.serviceType}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '0.25rem' }}>工期</div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{c.duration}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '0.25rem' }}>夜間施工</div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{c.nightWork ? '対応' : '通常施工'}</div>
                </div>
              </div>

              <div style={{ paddingTop: '2rem', marginTop: '2rem', borderTop: '1px solid #E5E3DF', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {c.relatedService.map((rel) => (
                  <Link key={rel.href} href={rel.href} style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none', borderBottom: '1px solid #0A0A0A', paddingBottom: '2px', alignSelf: 'flex-start' }}>
                    {rel.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completion Report */}
      <section style={{ background: '#0D1117', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#4B5563', textTransform: 'uppercase', marginBottom: '1rem' }}>COMPLETION REPORT</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>完了報告について</h2>
          <p style={{ fontSize: '0.9375rem', color: '#9CA3AF', lineHeight: 2, maxWidth: '720px' }}>{c.completionReport}</p>
        </div>
      </section>

      {/* FAQ */}
      {faqData && (
        <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
              この事例に関する<br />よくある質問
            </h2>
            <FaqAccordion faqs={faqData} />
          </div>
        </section>
      )}

      {/* Related */}
      <section style={{ background: '#F5F4F0', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '2rem' }}>MORE CASES</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cases
              .filter((other) => other.slug !== slug)
              .slice(0, 3)
              .map((other) => (
                <Link key={other.slug} href={`/cases/${other.slug}`} style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <Image
                      src={other.heroImage}
                      alt={other.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>{other.industry} / {other.area}</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.5 }}>{other.title}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="施工についてのご相談はお気軽に"
        subtext="現地調査・見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}
