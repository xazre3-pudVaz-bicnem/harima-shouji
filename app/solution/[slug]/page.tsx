import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'
import { solutions, getSolution } from '@/data/solutions'
import { getSolutionLp } from '@/data/solution-lp'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolution(slug)
  if (!solution) return {}

  const lp = getSolutionLp(slug)
  const heroImage = lp?.heroImage ?? solution.heroImage

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: solution.keywords,
    alternates: { canonical: `https://harima-shouji.co.jp/solution/${slug}` },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      url: `https://harima-shouji.co.jp/solution/${slug}`,
      images: [{ url: heroImage, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function SolutionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const solution = getSolution(slug)
  if (!solution) notFound()

  const lp = getSolutionLp(slug)
  const heroImage = lp?.heroImage ?? solution.heroImage
  const related = solutions.filter((s) => s.slug !== slug).slice(0, 3)

  const faqData = [{ category: `${solution.title}のよくある質問`, items: solution.faqs }]

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: solution.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: solution.title,
    description: solution.metaDescription,
    provider: {
      '@type': 'Organization',
      name: '株式会社播磨商事',
      url: 'https://harima-shouji.co.jp',
      telephone: '080-4724-0713',
    },
    areaServed: ['東京都', '埼玉県', '千葉県', '神奈川県', '静岡県', '大阪府', '兵庫県'],
    url: `https://harima-shouji.co.jp/solution/${slug}`,
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
      { '@type': 'ListItem', position: 2, name: 'ソリューション', item: 'https://harima-shouji.co.jp/solution' },
      { '@type': 'ListItem', position: 3, name: solution.title, item: `https://harima-shouji.co.jp/solution/${slug}` },
    ],
  }

  return (
    <div style={{ background: 'var(--paper)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <PageHero
        label="SOLUTION"
        title={solution.title}
        subtitle={solution.metaDescription}
        image={heroImage}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'ソリューション', href: '/solution' },
          { label: solution.title, href: `/solution/${slug}` },
        ]}
      />

      {/* 01 — Problem */}
      <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 6.5rem)', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>PROBLEM</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.25, marginBottom: '1.75rem' }}>
                {solution.problemTitle}
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.2 }}>
                {solution.problemDesc}
              </p>
            </div>
            <div className="img-zoom" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--surface)' }}>
              <Image
                src={heroImage}
                alt={`${solution.title}のイメージ`}
                fill
                loading="lazy"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Our Solution (dark) */}
      <section style={{ position: 'relative', background: '#101014', paddingTop: '9rem', paddingBottom: '9rem', overflow: 'hidden' }}>
        <div aria-hidden className="serif-en" style={{ position: 'absolute', right: '-1rem', top: '2.5rem', fontStyle: 'italic', fontSize: 'clamp(5rem, 13vw, 12rem)', color: 'rgba(255,255,255,0.035)', whiteSpace: 'nowrap', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
          Solution
        </div>
        <div style={{ position: 'relative', maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
            <span style={{ width: '2.25rem', height: '1px', background: '#C25E7F', display: 'inline-block' }} />
            OUR SOLUTION
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1.18, marginBottom: '2.25rem' }}>
            播磨商事のアプローチ
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 2.2, maxWidth: '760px' }}>
            {solution.ourSolution}
          </p>
        </div>
      </section>

      {/* 03 — Features */}
      <section style={{ background: 'var(--surface)', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>FEATURES</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.18 }}>
                具体的な対応内容
              </h2>
            </div>
            <span className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.24em', color: '#B5B0A4', textTransform: 'uppercase' }}>
              ( {String(solution.features.length).padStart(2, '0')} FEATURES )
            </span>
          </div>
          <div style={{ display: 'grid', gap: '1px', background: 'var(--line-2)', border: '1px solid var(--line-2)' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((feature, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '2.75rem 2.25rem' }}>
                <div className="mono" style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', color: '#C25E7F', marginBottom: '1.25rem' }}>
                  ({String(i + 1).padStart(2, '0')})
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.875rem', lineHeight: 1.5, letterSpacing: '-0.02em' }}>{feature.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#57544D', lineHeight: 2 }}>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Steps */}
      {lp?.steps && lp.steps.length > 0 && (
        <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
          <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '4.5rem', flexWrap: 'wrap' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>PROCESS</div>
                <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.18 }}>
                  進め方
                </h2>
              </div>
              <span className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.24em', color: '#B5B0A4', textTransform: 'uppercase' }}>
                ( {String(lp.steps.length).padStart(2, '0')} STEPS )
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '3rem 0' }}>
              {lp.steps.map((step, i) => (
                <div key={i} style={{ borderLeft: '1px solid var(--line-2)', padding: '0.5rem 2rem 0.5rem 1.75rem' }}>
                  <div className="mono" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 500, letterSpacing: '-0.05em', color: '#CFC9BD', lineHeight: 1, marginBottom: '1.5rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.025em', marginBottom: '1rem', lineHeight: 1.4 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 2 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 — Mid CTA banner */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line-2)', borderBottom: '1px solid var(--line-2)' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '3.5rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.24em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.875rem' }}>FREE CONSULTATION</div>
            <p style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.5 }}>
              {lp?.midCta ?? 'まずは現状の課題からお聞かせください。'}
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#6B675F', marginTop: '0.5rem' }}>ご相談・現地調査・お見積りは無料です。</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-ink">
              無料で相談する
              <span aria-hidden>→</span>
            </Link>
            <a href="tel:080-4724-0713" className="btn btn-line mono" style={{ letterSpacing: '0.06em' }}>
              080-4724-0713
            </a>
          </div>
        </div>
      </section>

      {/* 06 — Related solutions */}
      <section style={{ background: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <div className="eyebrow">OTHER SOLUTIONS</div>
            <Link href="/solution" className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', paddingBottom: '0.375rem', borderBottom: '1px solid #0A0A0A' }}>
              VIEW ALL
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div style={{ borderTop: '1px solid var(--line-2)' }}>
            {related.map((s, i) => (
              <Link key={s.slug} href={`/solution/${s.slug}`} className="row-link" style={{ display: 'flex', alignItems: 'baseline', gap: '1.75rem', padding: '1.5rem 0', borderBottom: '1px solid var(--line-2)', textDecoration: 'none' }}>
                <span className="mono" style={{ fontSize: '0.6875rem', color: '#B5B0A4', letterSpacing: '0.1em', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 'clamp(1.0625rem, 2vw, 1.375rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', flex: 1 }}>{s.title}</span>
                <span className="row-arrow" aria-hidden style={{ fontSize: '1rem', color: '#8F8B82', flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
          <div style={{ display: 'grid', gap: '1px', background: 'var(--line-2)', border: '1px solid var(--line-2)', marginTop: '2.5rem' }} className="grid-cols-1 sm:grid-cols-3">
            {[
              { href: '/franchise', note: 'FC本部向け', label: 'FC本部の施工管理' },
              { href: '/multi-store', note: '多店舗展開向け', label: '多店舗展開企業向け' },
              { href: '/works', note: '施工実績', label: '施工事例を見る' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="row-link" style={{ display: 'block', padding: '1.75rem 1.5rem', background: 'var(--paper)', textDecoration: 'none' }}>
                <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.18em', color: '#8F8B82', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{item.note}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                  {item.label}
                  <span className="row-arrow" aria-hidden style={{ color: '#8F8B82' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — FAQ */}
      <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.18, marginBottom: '3.5rem' }}>
            よくある質問
          </h2>
          <FaqAccordion faqs={faqData} />
        </div>
      </section>

      <CtaSection
        heading={`${solution.title}について\nご相談ください`}
        subtext="現地調査・お見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}
