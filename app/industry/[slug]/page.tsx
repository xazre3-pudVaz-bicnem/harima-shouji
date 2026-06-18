import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'
import { industries, getIndustry } from '@/data/industries'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return {}

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: `https://harima-shouji.co.jp/industry/${slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://harima-shouji.co.jp/industry/${slug}`,
      images: [{ url: industry.heroImage, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()

  const faqData = [{ category: `${industry.industryJa}に関するよくある質問`, items: industry.faqs }]

  const serviceHref = industry.serviceType === 'interior'
    ? '/service/shop-interior'
    : industry.serviceType === 'restoration'
    ? '/service/restoration'
    : '/service'

  const serviceLabel = industry.serviceType === 'interior'
    ? '店舗内装工事'
    : industry.serviceType === 'restoration'
    ? '原状回復工事'
    : '店舗内装・原状回復工事'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${industry.industryJa}の${serviceLabel}`,
    provider: {
      '@type': 'Organization',
      name: '株式会社播磨商事',
      url: 'https://harima-shouji.co.jp',
    },
    description: industry.metaDescription,
    areaServed: { '@type': 'Country', name: 'JP' },
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div style={{ background: '#FAFAF8' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <PageHero
        label="INDUSTRY"
        title={`${industry.industryJa}の${serviceLabel}`}
        subtitle={industry.metaDescription}
        image={industry.heroImage}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '業種別対応', href: '/industry' },
          { label: `${industry.industryJa}の${serviceLabel}`, href: `/industry/${slug}` },
        ]}
      />

      {/* Overview */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>OVERVIEW</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                {industry.industryJa}の<br />{serviceLabel}について
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2 }}>
                {industry.overview}
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image
                src={industry.heroImage}
                alt={`${industry.industryJa}の${serviceLabel}の施工事例`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Works */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>COMMON WORKS</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            主な工事内容
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {industry.commonWorks.map((work, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '2.5rem 2rem' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.2em', color: '#9CA3AF', marginBottom: '1rem' }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.75rem', lineHeight: 1.4 }}>{work.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5A5A5A', lineHeight: 1.9 }}>{work.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      {industry.keyConsiderations.length > 0 && (
        <section style={{ background: '#0D1117', paddingTop: '7rem', paddingBottom: '7rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#4B5563', textTransform: 'uppercase', marginBottom: '1rem' }}>CONSIDERATIONS</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
              {industry.industryJa}工事の<br />重要ポイント
            </h2>
            <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-3">
              {industry.keyConsiderations.map((item, i) => (
                <div key={i} style={{ background: '#161B22', padding: '2.5rem 2rem' }}>
                  <div style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.2em', color: '#4B5563', marginBottom: '1rem' }}>0{i + 1}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#F0EFE9', marginBottom: '0.75rem', lineHeight: 1.4 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.9 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Service Links */}
      <section style={{ background: '#FFFFFF', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '2rem' }}>RELATED</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={serviceHref} style={{ display: 'block', padding: '2rem 1.5rem', background: '#F5F4F0', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>サービス詳細</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{serviceLabel}について →</div>
            </Link>
            <Link href="/franchise" style={{ display: 'block', padding: '2rem 1.5rem', background: '#F5F4F0', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>FC本部向け</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>FC本部の施工管理 →</div>
            </Link>
            <Link href="/area" style={{ display: 'block', padding: '2rem 1.5rem', background: '#F5F4F0', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>対応エリア</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>施工対応エリア一覧 →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            {industry.industryJa}の<br />よくある質問
          </h2>
          <FaqAccordion faqs={faqData} />
        </div>
      </section>

      <CtaSection
        heading={`${industry.industryJa}の${serviceLabel}について\nご相談ください`}
        subtext="現地調査・見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}
