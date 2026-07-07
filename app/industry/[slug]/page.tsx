import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'
import { industries, getIndustry } from '@/data/industries'
import { getIndustryLp } from '@/data/industry-lp'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return {}

  const lp = getIndustryLp(slug)
  const heroImage = lp?.heroImage ?? industry.heroImage

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: `https://harima-shouji.co.jp/industry/${slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://harima-shouji.co.jp/industry/${slug}`,
      images: [{ url: heroImage, width: 1200, height: 630 }],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()

  const lp = getIndustryLp(slug)
  const heroImage = lp?.heroImage ?? industry.heroImage
  const overviewImage = lp?.overviewImage ?? heroImage
  const gallery = lp?.galleryImages ?? industry.galleryImages

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

  // 主サービスと対になるサービスへの導線
  const secondaryHref = industry.serviceType === 'restoration' ? '/service/shop-interior' : '/service/restoration'
  const secondaryLabel = industry.serviceType === 'restoration' ? '店舗内装工事' : '原状回復工事'
  const secondaryNote = industry.serviceType === 'restoration' ? '新規出店・改装・夜間施工' : '退去・解体・内装復旧'

  const enWord = industry.serviceType === 'restoration' ? 'Restoration' : 'Interior'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${industry.industryJa}の${serviceLabel}`,
    description: industry.metaDescription,
    provider: {
      '@type': 'Organization',
      name: '株式会社播磨商事',
      url: 'https://harima-shouji.co.jp',
      telephone: '080-4724-0713',
    },
    areaServed: ['東京都', '埼玉県', '千葉県', '神奈川県', '静岡県', '大阪府', '兵庫県'],
    url: `https://harima-shouji.co.jp/industry/${slug}`,
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

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
      { '@type': 'ListItem', position: 2, name: '業種別対応', item: 'https://harima-shouji.co.jp/industry' },
      { '@type': 'ListItem', position: 3, name: industry.industryJa, item: `https://harima-shouji.co.jp/industry/${slug}` },
    ],
  }

  return (
    <div style={{ background: 'var(--paper)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <PageHero
        label={`${enWord.toUpperCase()} / INDUSTRY`}
        title={`${industry.industryJa}の\n${serviceLabel}`}
        subtitle={industry.metaDescription.split('。')[0] + '。'}
        image={heroImage}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '業種別対応', href: '/industry' },
          { label: industry.industryJa, href: `/industry/${slug}` },
        ]}
      />

      {/* 01 — Overview */}
      <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 6.5rem)', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>OVERVIEW</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.2, marginBottom: '1.75rem' }}>
                {industry.industryJa}の<br />{serviceLabel}について
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.2 }}>
                {industry.overview}
              </p>
              <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--line)' }}>
                <div>
                  <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.5rem' }}>AREA</div>
                  <div style={{ fontSize: '0.8125rem', color: '#57544D', lineHeight: 1.8 }}>関東・東海・近畿<br />7都府県対応</div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.5rem' }}>SURVEY</div>
                  <div style={{ fontSize: '0.8125rem', color: '#57544D', lineHeight: 1.8 }}>現地調査・見積り<br />無料</div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.5rem' }}>FC / CHAIN</div>
                  <div style={{ fontSize: '0.8125rem', color: '#57544D', lineHeight: 1.8 }}>多店舗一括管理<br />窓口一本化</div>
                </div>
              </div>
            </div>
            <div className="img-zoom lg:col-span-7" style={{ position: 'relative', aspectRatio: '16/11', overflow: 'hidden', background: 'var(--surface)' }}>
              <Image
                src={overviewImage}
                alt={`${industry.industryJa}の施工イメージ`}
                fill
                loading="lazy"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <span className="mono" style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', fontSize: '0.5625rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.85)', background: 'rgba(10,10,10,0.6)', padding: '0.4rem 0.8rem', textTransform: 'uppercase', backdropFilter: 'blur(4px)' }}>
                HARIMA — {enWord}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Pain points */}
      {lp?.painPoints && lp.painPoints.length > 0 && (
        <section style={{ background: 'var(--paper)', paddingTop: '8rem', paddingBottom: '8rem' }}>
          <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>PROBLEM</div>
                <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.18 }}>
                  {industry.industryJa}の{industry.serviceType === 'restoration' ? '退去' : '施工'}で<br />よくある課題
                </h2>
              </div>
              <span className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.24em', color: '#B5B0A4', textTransform: 'uppercase' }}>
                ( {String(lp.painPoints.length).padStart(2, '0')} ISSUES )
              </span>
            </div>
            <div style={{ borderTop: '1px solid var(--line-2)' }}>
              {lp.painPoints.map((p, i) => (
                <div key={i} style={{ display: 'grid', gap: '1.25rem 2.5rem', padding: '2.5rem 0', borderBottom: '1px solid var(--line-2)', alignItems: 'baseline' }} className="grid-cols-1 md:grid-cols-[auto_minmax(200px,320px)_1fr]">
                  <span className="mono" style={{ fontSize: '0.6875rem', color: '#C25E7F', letterSpacing: '0.1em' }}>({String(i + 1).padStart(2, '0')})</span>
                  <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.025em', lineHeight: 1.5 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2 }}>{p.body}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '2.5rem', fontSize: '0.9375rem', color: '#57544D', lineHeight: 2 }}>
              こうした課題を、播磨商事は<strong style={{ color: '#0A0A0A' }}>現地調査からの一括対応</strong>で解決します。
            </p>
          </div>
        </section>
      )}

      {/* 03 — Common Works */}
      <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>SCOPE OF WORK</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.18, marginBottom: '4rem' }}>
            主な工事内容
          </h2>
          <div style={{ display: 'grid', gap: '1px', background: 'var(--line)', border: '1px solid var(--line)' }} className="grid-cols-1 md:grid-cols-2">
            {industry.commonWorks.map((work, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '2.75rem 2.5rem' }}>
                <div className="mono" style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', color: '#C25E7F', marginBottom: '1.25rem' }}>
                  ({String(i + 1).padStart(2, '0')})
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '1rem', lineHeight: 1.4, letterSpacing: '-0.02em' }}>{work.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#57544D', lineHeight: 2 }}>{work.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Key Considerations (dark) */}
      {industry.keyConsiderations.length > 0 && (
        <section style={{ position: 'relative', background: '#101014', paddingTop: '9rem', paddingBottom: '9rem', overflow: 'hidden' }}>
          <div aria-hidden className="serif-en" style={{ position: 'absolute', right: '-1rem', top: '2.5rem', fontStyle: 'italic', fontSize: 'clamp(5rem, 13vw, 12rem)', color: 'rgba(255,255,255,0.035)', whiteSpace: 'nowrap', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
            Points
          </div>
          <div style={{ position: 'relative', maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
              <span style={{ width: '2.25rem', height: '1px', background: '#C25E7F', display: 'inline-block' }} />
              KEY POINTS
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1.18, marginBottom: '4rem' }}>
              {industry.industryJa}工事の重要ポイント
            </h2>
            <div style={{ display: 'grid', gap: '1px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)' }} className="grid-cols-1 md:grid-cols-3">
              {industry.keyConsiderations.map((item, i) => (
                <div key={i} style={{ background: '#101014', padding: '2.75rem 2.25rem' }}>
                  <div className="mono" style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', color: '#C25E7F', marginBottom: '1.25rem' }}>
                    ({String(i + 1).padStart(2, '0')})
                  </div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#F6F4EF', marginBottom: '1rem', lineHeight: 1.5, letterSpacing: '-0.02em' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 2 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 — Gallery */}
      {gallery && gallery.length > 0 && (
        <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
          <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>GALLERY</div>
                <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.18 }}>
                  施工イメージ
                </h2>
              </div>
              <span className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.16em', color: '#8F8B82' }}>
                ※ 掲載写真は施工イメージです
              </span>
            </div>
            <div style={{ display: 'grid', gap: '1.25rem' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((img, i) => (
                <figure key={i} style={{ margin: 0 }}>
                  <div className="img-zoom" style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: 'var(--surface)' }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <figcaption className="mono" style={{ fontSize: '0.625rem', color: '#8F8B82', marginTop: '0.75rem', letterSpacing: '0.08em' }}>
                    {String(i + 1).padStart(2, '0')} — {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 06 — Mid CTA banner */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line-2)', borderBottom: '1px solid var(--line-2)' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '3.5rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.24em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.875rem' }}>FREE SURVEY</div>
            <p style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.5 }}>
              {industry.industryJa}の{industry.serviceType === 'restoration' ? '退去・原状回復' : '出店・改装'}、まずは概算から。
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#6B675F', marginTop: '0.5rem' }}>現地調査・お見積りは無料です。図面があれば概算のご提示も可能です。</p>
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

      {/* 07 — Cost factors */}
      {lp?.costFactors && lp.costFactors.length > 0 && (
        <section style={{ background: 'var(--paper)', paddingTop: '8rem', paddingBottom: '8rem' }}>
          <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'grid', gap: 'clamp(3rem, 5vw, 5rem)' }} className="grid-cols-1 lg:grid-cols-[1fr_1.6fr]">
              <div className="lg:sticky lg:top-28" style={{ alignSelf: 'start' }}>
                <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>COST</div>
                <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.18, marginBottom: '1.75rem' }}>
                  費用を左右する<br />3つの要素
                </h2>
                <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 2.1 }}>
                  {industry.industryJa}の{serviceLabel}費用は、物件条件と工事範囲によって変わります。正確な金額は無料の現地調査でご提示しますが、費用が動く主なポイントは次の3つです。
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--line-2)' }}>
                {lp.costFactors.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '2rem', padding: '2.25rem 0', borderBottom: '1px solid var(--line-2)', alignItems: 'baseline' }}>
                    <span className="mono" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.04em', color: '#CFC9BD', lineHeight: 1, flexShrink: 0, width: '2ch' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>{c.title}</h3>
                      <p style={{ fontSize: '0.875rem', color: '#57544D', lineHeight: 2 }}>{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 08 — Checklist */}
      {lp?.checklist && lp.checklist.length > 0 && (
        <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>CHECKLIST</div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.18, marginBottom: '1.25rem' }}>
              {lp.checklistLabel ?? 'ご相談前チェックリスト'}
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 2, marginBottom: '3rem' }}>
              すべて揃っていなくても問題ありません。分かる範囲でお知らせいただければ、初回のご提案精度が上がります。
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--line)' }}>
              {lp.checklist.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.375rem 0.25rem', borderBottom: '1px solid var(--line)' }}>
                  <span aria-hidden style={{ flexShrink: 0, width: '1.375rem', height: '1.375rem', border: '1.5px solid #C25E7F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ width: '0.5rem', height: '0.5rem', background: 'var(--accent-soft)' }} />
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 1.8 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 09 — Related links */}
      <section style={{ background: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '2.5rem' }}>RELATED</div>
          <div style={{ display: 'grid', gap: '1px', background: 'var(--line-2)', border: '1px solid var(--line-2)' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: serviceHref, note: 'サービス詳細', label: `${serviceLabel}について` },
              { href: secondaryHref, note: secondaryNote, label: `${secondaryLabel}について` },
              { href: '/franchise', note: 'FC本部向け', label: 'FC本部の施工管理' },
              { href: '/works', note: '施工実績', label: '施工事例を見る' },
              { href: '/area', note: '対応エリア', label: '施工対応エリア一覧' },
              { href: '/contact', note: 'お問い合わせ', label: '現地調査・見積り無料' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="row-link" style={{ display: 'block', padding: '2rem 1.75rem', background: 'var(--paper)', textDecoration: 'none' }}>
                <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.18em', color: '#8F8B82', marginBottom: '0.625rem', textTransform: 'uppercase' }}>{item.note}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                  {item.label}
                  <span className="row-arrow" aria-hidden style={{ color: '#8F8B82' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.18, marginBottom: '3.5rem' }}>
            {industry.industryJa}の<br />よくある質問
          </h2>
          <FaqAccordion faqs={faqData} />
        </div>
      </section>

      <CtaSection
        heading={`${industry.industryJa}の${serviceLabel}を\nご検討中の方へ`}
        subtext="現地調査・お見積りは無料です。物件契約前のご相談も歓迎します。"
      />
    </div>
  )
}
