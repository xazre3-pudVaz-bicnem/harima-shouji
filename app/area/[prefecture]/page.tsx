import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'
import { areas, getArea } from '@/data/areas'
import { getCitiesByPrefecture } from '@/data/cities'

type Params = { prefecture: string }

export async function generateStaticParams(): Promise<Params[]> {
  return areas.map((a) => ({ prefecture: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { prefecture } = await params
  const area = getArea(prefecture)
  if (!area) return {}

  return {
    title: `${area.name}の店舗内装工事・原状回復｜FC本部・多店舗展開`,
    description: `${area.name}の店舗内装工事・原状回復工事に対応。FC本部・多店舗展開企業の施工管理を一括対応。${area.name}全域・主要都市の施工実績あり。現地調査・見積無料。`,
    keywords: [`${area.name} 内装工事`, `${area.name} 原状回復`, `${area.name} FC 内装工事`, `${area.name} 多店舗 内装`],
    alternates: { canonical: `https://harima-shouji.co.jp/area/${prefecture}` },
    openGraph: {
    images: ['/og-image.jpg'],
      title: `${area.name}の店舗内装工事・原状回復 | 株式会社播磨商事`,
      url: `https://harima-shouji.co.jp/area/${prefecture}`,
    },
  }
}

export default async function PrefecturePage({ params }: { params: Promise<Params> }) {
  const { prefecture } = await params
  const area = getArea(prefecture)
  if (!area) notFound()

  const cities = getCitiesByPrefecture(prefecture)

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '株式会社播磨商事',
    url: 'https://harima-shouji.co.jp',
    areaServed: { '@type': 'AdministrativeArea', name: area.name },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${area.name}の施工サービス`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${area.name}の店舗内装工事` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${area.name}の原状回復工事` } },
      ],
    },
  }

  const faqItems = [
    { q: `${area.name}の店舗内装工事に対応していますか？`, a: `はい、${area.name}全域の店舗内装工事に対応しています。FC本部・多店舗展開企業の施工管理を一括で担当します。` },
    { q: `${area.name}の原状回復工事に対応していますか？`, a: `はい、${area.name}のテナント退去時の原状回復工事に対応しています。退去立会い代行・費用適正化サポートも行います。` },
    { q: `${area.name}で夜間施工は対応できますか？`, a: 'はい、閉店後の夜間施工に対応しています。翌朝の営業開始に間に合わせるスケジュール管理を行います。' },
    { q: `${area.name}の複数店舗を同時に施工できますか？`, a: `はい、${area.name}内の複数案件の同時進行管理に対応しています。担当者様の窓口を1つに集約します。` },
    { q: '現地調査・見積りは無料ですか？', a: 'はい、現地調査・見積りは無料です。まずはお気軽にご相談ください。' },
    { q: `${area.name}エリア外の案件も対応できますか？`, a: '関東（東京・埼玉・千葉・神奈川）、静岡、大阪、兵庫に対応しています。エリア外についてもご相談ください。' },
  ]

  const faqData = [{ category: `${area.name}に関するよくある質問`, items: faqItems }]

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
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
        label={area.reading.toUpperCase()}
        title={`${area.name}の店舗工事`}
        subtitle={`${area.name}の店舗内装工事・原状回復工事に対応。FC本部・多店舗展開企業の施工管理を一括でサポートします。`}
        image="/LINE_ALBUM_2026.6.10_260610_7.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '対応エリア', href: '/area' },
          { label: area.name, href: `/area/${prefecture}` },
        ]}
      />

      {/* Services in this prefecture */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>SERVICES</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1rem' }}>
            {area.name}の対応サービス
          </h2>
          <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2, maxWidth: '600px', marginBottom: '3rem' }}>
            {area.interior.description}
          </p>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2">
            <Link href={`/area/${prefecture}/shop-interior`} style={{ display: 'block', textDecoration: 'none', background: '#EDEAE2' }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_22.jpg"
                  alt={`${area.name}の店舗内装工事`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '0.5rem' }}>SERVICE 01</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.75rem' }}>店舗内装工事</h3>
                <p style={{ fontSize: '0.875rem', color: '#57544D', lineHeight: 1.8, marginBottom: '1rem' }}>
                  {area.interior.description}
                </p>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0A0A0A', borderBottom: '1px solid #0A0A0A', paddingBottom: '2px' }}>詳しく見る →</span>
              </div>
            </Link>
            <Link href={`/area/${prefecture}/restoration`} style={{ display: 'block', textDecoration: 'none', background: '#EDEAE2' }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_19.jpg"
                  alt={`${area.name}の原状回復工事`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '0.5rem' }}>SERVICE 02</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.75rem' }}>原状回復工事</h3>
                <p style={{ fontSize: '0.875rem', color: '#57544D', lineHeight: 1.8, marginBottom: '1rem' }}>
                  {area.restoration.description}
                </p>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0A0A0A', borderBottom: '1px solid #0A0A0A', paddingBottom: '2px' }}>詳しく見る →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* City links (if cities data exists) */}
      {cities.length > 0 && (
        <section style={{ background: '#EDEAE2', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {prefecture === 'tokyo' ? 'WARDS' : 'CITIES'}
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              {prefecture === 'tokyo' ? '東京23区・各区の対応状況' : `${area.name}の主要エリア`}
            </h2>
            <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/area/${prefecture}/${city.slug}`}
                  style={{ display: 'block', padding: '1.5rem 1rem', background: '#FFFFFF', textDecoration: 'none' }}
                >
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.25rem' }}>{city.cityName}</div>
                  <div style={{ fontSize: '0.6875rem', color: '#8F8B82' }}>内装・原状回復 →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Area info */}
      <section style={{ background: '#101014', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#756F64', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AREA CHARACTERISTICS</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '2rem' }}>
            {area.name}エリアの特徴
          </h2>
          <p style={{ fontSize: '1rem', color: '#8F8B82', lineHeight: 2, maxWidth: '720px', marginBottom: '3rem' }}>
            {area.interior.challenge}
          </p>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2">
            <Link href={`/area/${prefecture}/shop-interior`} style={{ display: 'block', padding: '2rem', background: '#191A20', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#756F64', marginBottom: '0.5rem' }}>店舗内装工事</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#E7E3DA' }}>{area.name}の店舗内装工事について詳しく →</div>
            </Link>
            <Link href={`/area/${prefecture}/restoration`} style={{ display: 'block', padding: '2rem', background: '#191A20', textDecoration: 'none' }}>
              <div style={{ fontSize: '0.6875rem', color: '#756F64', marginBottom: '0.5rem' }}>原状回復工事</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#E7E3DA' }}>{area.name}の原状回復工事について詳しく →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            {area.name}に関する<br />よくある質問
          </h2>
          <FaqAccordion faqs={faqData} />
        </div>
      </section>

      <CtaSection
        heading={`${area.name}の施工について\nご相談ください`}
        subtext="現地調査・見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}
