import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'
import { solutions, getSolution } from '@/data/solutions'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolution(slug)
  if (!solution) return {}

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: solution.keywords,
    alternates: { canonical: `https://harima-shouji.co.jp/solution/${slug}` },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      url: `https://harima-shouji.co.jp/solution/${slug}`,
      images: [{ url: solution.heroImage, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function SolutionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const solution = getSolution(slug)
  if (!solution) notFound()

  const faqData = [{ category: 'よくある質問', items: solution.faqs }]

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: solution.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div style={{ background: '#FAFAF8' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <PageHero
        label="SOLUTION"
        title={solution.title}
        subtitle={solution.metaDescription}
        image={solution.heroImage}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'ソリューション', href: '/solution' },
          { label: solution.title, href: `/solution/${slug}` },
        ]}
      />

      {/* Problem */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>PROBLEM</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                {solution.problemTitle}
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2 }}>
                {solution.problemDesc}
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image
                src={solution.heroImage}
                alt={solution.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section style={{ background: '#0D1117', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#4B5563', textTransform: 'uppercase', marginBottom: '1.5rem' }}>OUR SOLUTION</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '2rem' }}>
            播磨商事のアプローチ
          </h2>
          <p style={{ fontSize: '1rem', color: '#9CA3AF', lineHeight: 2, maxWidth: '720px' }}>
            {solution.ourSolution}
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>FEATURES</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            具体的な対応内容
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((feature, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '2.5rem 2rem' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.2em', color: '#9CA3AF', marginBottom: '1rem' }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.75rem', lineHeight: 1.4 }}>{feature.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5A5A5A', lineHeight: 1.9 }}>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: '#FFFFFF', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '2rem' }}>RELATED</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/franchise" style={{ display: 'block', padding: '2rem 1.5rem', background: '#F5F4F0', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>FC本部向け</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>FC本部の施工管理 →</div>
            </Link>
            <Link href="/multi-store" style={{ display: 'block', padding: '2rem 1.5rem', background: '#F5F4F0', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>多店舗展開向け</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>多店舗展開企業向け →</div>
            </Link>
            <Link href="/contact" style={{ display: 'block', padding: '2rem 1.5rem', background: '#F5F4F0', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>まずは相談</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>お問い合わせ →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            よくある質問
          </h2>
          <FaqAccordion faqs={faqData} />
        </div>
      </section>

      <CtaSection
        heading={`${solution.title}について\nご相談ください`}
        subtext="現地調査・見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}
