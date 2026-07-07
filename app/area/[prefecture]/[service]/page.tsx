import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'
import { areas, getArea } from '@/data/areas'
import { cities, getCity, getCitiesByPrefecture } from '@/data/cities'

type Params = { prefecture: string; service: string }

export async function generateStaticParams(): Promise<Params[]> {
  const params: Params[] = []
  for (const area of areas) {
    params.push({ prefecture: area.slug, service: 'shop-interior' })
    params.push({ prefecture: area.slug, service: 'restoration' })
  }
  for (const city of cities) {
    params.push({ prefecture: city.prefectureSlug, service: city.slug })
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { prefecture, service } = await params
  const area = getArea(prefecture)
  if (!area) return {}

  if (service === 'shop-interior' || service === 'restoration') {
    const isInterior = service === 'shop-interior'
    const serviceLabel = isInterior ? '店舗内装工事' : '原状回復工事'
    const keyword = isInterior ? `${area.name} 店舗内装工事` : `${area.name} 原状回復工事`

    return {
      title: `${area.name}の${serviceLabel} | FC本部・多店舗展開企業向け`,
      description: isInterior
        ? `${area.name}の店舗内装工事。フランチャイズ本部・多店舗展開企業の出店・改装施工を一括管理。現地調査・見積無料。`
        : `${area.name}の原状回復工事。退去立会い代行・解体・内装復旧まで一括対応。複数店舗の退去管理も対応。現地調査無料。`,
      keywords: [keyword, `${area.name} フランチャイズ 施工`, `${area.name} 多店舗 工事`],
      alternates: { canonical: `https://harima-shouji.co.jp/area/${prefecture}/${service}` },
      openGraph: {
        title: `${area.name}の${serviceLabel} | 株式会社播磨商事`,
        url: `https://harima-shouji.co.jp/area/${prefecture}/${service}`,
      },
    }
  }

  const city = getCity(service)
  if (city && city.prefectureSlug === prefecture) {
    return {
      title: city.metaTitle,
      description: city.metaDescription,
      keywords: city.keywords,
      alternates: { canonical: `https://harima-shouji.co.jp/area/${prefecture}/${service}` },
      openGraph: {
        title: city.metaTitle,
        description: city.metaDescription,
        url: `https://harima-shouji.co.jp/area/${prefecture}/${service}`,
      },
    }
  }

  return {}
}

export default async function AreaServicePage({ params }: { params: Promise<Params> }) {
  const { prefecture, service } = await params
  const area = getArea(prefecture)
  if (!area) notFound()

  if (service === 'shop-interior' || service === 'restoration') {
    return <PrefectureServicePage area={area} prefecture={prefecture} service={service} />
  }

  const city = getCity(service)
  if (city && city.prefectureSlug === prefecture) {
    return <CityPage city={city} prefecture={prefecture} area={area} />
  }

  notFound()
}

// Prefecture-level service page (shop-interior / restoration)
function PrefectureServicePage({
  area,
  prefecture,
  service,
}: {
  area: ReturnType<typeof getArea> & {}
  prefecture: string
  service: string
}) {
  const isInterior = service === 'shop-interior'
  const data = isInterior ? area!.interior : area!.restoration
  const serviceLabel = isInterior ? '店舗内装工事' : '原状回復工事'
  const serviceHref = isInterior ? '/service/shop-interior' : '/service/restoration'
  const heroImage = isInterior ? '/LINE_ALBUM_2026.6.10_260610_22.jpg' : '/LINE_ALBUM_2026.6.10_260610_19.jpg'

  const faqData = [{ category: 'よくある質問', items: data.faq }]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${area!.name}の${serviceLabel}`,
    provider: { '@type': 'LocalBusiness', name: '株式会社播磨商事', address: { '@type': 'PostalAddress', addressRegion: '東京都' } },
    description: data.description,
    areaServed: { '@type': 'AdministrativeArea', name: area!.name },
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((faq: { q: string; a: string }) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div style={{ background: '#F6F4EF' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <PageHero
        label={area!.reading.toUpperCase()}
        title={`${area!.name}の${serviceLabel}`}
        subtitle={data.description}
        image={heroImage}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '対応エリア', href: '/area' },
          { label: area!.name, href: `/area/${prefecture}` },
          { label: serviceLabel, href: `/area/${prefecture}/${service}` },
        ]}
      />

      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {area!.name.toUpperCase()} / {serviceLabel.toUpperCase()}
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                {area!.name}での<br />{serviceLabel}課題
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2, marginBottom: '2rem' }}>
                {data.challenge}
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2 }}>
                {data.merit}
              </p>
            </div>
            <div style={{ background: '#EDEAE2', padding: '3rem 2.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AREA INFO</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#8F8B82', marginBottom: '0.25rem' }}>エリア</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A' }}>{area!.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#8F8B82', marginBottom: '0.25rem' }}>地域</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A' }}>{area!.region}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#8F8B82', marginBottom: '0.25rem' }}>対応サービス</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A' }}>{serviceLabel}</div>
                </div>
                <div style={{ paddingTop: '1rem', borderTop: '1px solid #DDD8CE' }}>
                  <Link href={serviceHref} style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid #0A0A0A', paddingBottom: '2px' }}>
                    サービス詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#EDEAE2', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '2rem' }}>{area!.name}の他のサービス</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2">
            <Link href={`/area/${prefecture}/${isInterior ? 'restoration' : 'shop-interior'}`} style={{ display: 'block', padding: '2.5rem 2rem', background: '#FFFFFF', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>{area!.name}</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A' }}>
                {isInterior ? '原状回復工事' : '店舗内装工事'}
              </div>
            </Link>
            <Link href="/area" style={{ display: 'block', padding: '2.5rem 2rem', background: '#FFFFFF', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>全エリア</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A' }}>対応エリア一覧</div>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            {area!.name}に関する<br />よくある質問
          </h2>
          <FaqAccordion faqs={faqData} />
        </div>
      </section>

      <CtaSection
        heading={`${area!.name}の${serviceLabel}について\nご相談ください`}
        subtext="現地調査・見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}

// City / Ward page
function CityPage({
  city,
  prefecture,
  area,
}: {
  city: NonNullable<ReturnType<typeof getCity>>
  prefecture: string
  area: NonNullable<ReturnType<typeof getArea>>
}) {
  const faqData = [{ category: `${city.cityName}に関するよくある質問`, items: city.faqs }]

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '株式会社播磨商事',
    url: 'https://harima-shouji.co.jp',
    areaServed: [
      { '@type': 'AdministrativeArea', name: city.cityName },
      { '@type': 'AdministrativeArea', name: area.name },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${city.cityName}の施工サービス`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${city.cityName}の店舗内装工事` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${city.cityName}の原状回復工事` } },
      ],
    },
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div style={{ background: '#F6F4EF' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <PageHero
        label={city.prefectureJa}
        title={`${city.cityName}の店舗工事`}
        subtitle={city.metaDescription}
        image="/LINE_ALBUM_2026.6.10_260610_7.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '対応エリア', href: '/area' },
          { label: area.name, href: `/area/${prefecture}` },
          { label: city.cityName, href: `/area/${prefecture}/${city.slug}` },
        ]}
      />

      {/* Area Note */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AREA INFO</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                {city.cityName}の<br />エリア概要
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2 }}>
                {city.areaNote}
              </p>
            </div>
            <div style={{ background: '#EDEAE2', padding: '3rem 2.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}>SERVICES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#8F8B82', marginBottom: '0.5rem' }}>店舗内装工事</div>
                  <p style={{ fontSize: '0.875rem', color: '#3A3A3A', lineHeight: 1.9 }}>{city.shopInteriorNote}</p>
                </div>
                <div style={{ paddingTop: '1rem', borderTop: '1px solid #DDD8CE' }}>
                  <div style={{ fontSize: '0.75rem', color: '#8F8B82', marginBottom: '0.5rem' }}>原状回復工事</div>
                  <p style={{ fontSize: '0.875rem', color: '#3A3A3A', lineHeight: 1.9 }}>{city.restorationNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section style={{ background: '#EDEAE2', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '2rem' }}>SERVICES</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Link href={`/area/${prefecture}/shop-interior`} style={{ display: 'block', padding: '2rem 1.5rem', background: '#FFFFFF', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>{area.name}全域</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>店舗内装工事 →</div>
            </Link>
            <Link href={`/area/${prefecture}/restoration`} style={{ display: 'block', padding: '2rem 1.5rem', background: '#FFFFFF', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>{area.name}全域</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>原状回復工事 →</div>
            </Link>
            <Link href="/service/shop-interior" style={{ display: 'block', padding: '2rem 1.5rem', background: '#FFFFFF', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>サービス詳細</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>店舗内装工事について →</div>
            </Link>
            <Link href="/service/restoration" style={{ display: 'block', padding: '2rem 1.5rem', background: '#FFFFFF', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>サービス詳細</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>原状回復工事について →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            {city.cityName}に関する<br />よくある質問
          </h2>
          <FaqAccordion faqs={faqData} />
        </div>
      </section>

      <CtaSection
        heading={`${city.cityName}の施工について\nご相談ください`}
        subtext="現地調査・見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}
