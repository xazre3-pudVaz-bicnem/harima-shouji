import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'

export const metadata: Metadata = {
  title: '会社概要',
  description: '株式会社播磨商事の会社概要。フランチャイズ本部・多店舗展開企業向けに店舗内装工事・原状回復工事をワンストップで提供します。東京都練馬区を拠点に首都圏・関西圏対応。',
  alternates: {
    canonical: 'https://harima-shouji.co.jp/company',
  },
  openGraph: {
    title: '会社概要 | 株式会社播磨商事',
    description: '株式会社播磨商事の会社概要。店舗内装工事・原状回復工事をワンストップで提供します。',
    locale: 'ja_JP',
    type: 'website',
  },
}

const companyData = [
  { label: '会社名', value: '株式会社播磨商事' },
  { label: '代表取締役', value: '播磨 龍樹' },
  { label: '所在地', value: '〒177-0053\n東京都練馬区関町南2丁目2-4 山一ビル' },
  { label: '電話番号', value: '080-4724-0713' },
  { label: 'メール', value: 'naisou@harima-shouji.co.jp' },
  { label: '営業時間', value: '平日 9:00〜18:00\n（夜間・土日は要相談）' },
  { label: '事業内容', value: '店舗内装工事\n原状回復工事' },
  { label: '対応エリア', value: '東京都・埼玉県・千葉県・神奈川県\n静岡県・大阪府・兵庫県' },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'TOP',
      item: 'https://harima-shouji.co.jp/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '会社概要',
      item: 'https://harima-shouji.co.jp/company',
    },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社播磨商事',
  url: 'https://harima-shouji.co.jp',
  logo: 'https://harima-shouji.co.jp/logo.png',
  description: '店舗内装工事・原状回復工事をワンストップで提供。フランチャイズ本部・多店舗展開企業を専門にサポートする施工会社。',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '関町南2丁目2-4 山一ビル',
    addressLocality: '練馬区',
    addressRegion: '東京都',
    postalCode: '177-0053',
    addressCountry: 'JP',
  },
  telephone: '080-4724-0713',
  email: 'naisou@harima-shouji.co.jp',
  founder: {
    '@type': 'Person',
    name: '播磨 龍樹',
  },
  areaServed: ['東京都', '埼玉県', '千葉県', '神奈川県', '静岡県', '大阪府', '兵庫県'],
}

export default function CompanyPage() {
  return (
    <div style={{ background: '#F6F4EF' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <PageHero
        label="COMPANY"
        title="会社概要"
        image="/LINE_ALBUM_2026.6.10_260610_2.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '会社概要', href: '/company' },
        ]}
      />

      {/* Profile */}
      <section style={{ paddingTop: '7rem', paddingBottom: '5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>PROFILE</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '3rem' }}>会社情報</h2>
          <dl>
            {companyData.map(({ label, value }) => (
              <div key={label} style={{ display: 'grid', gridTemplateColumns: '8rem 1fr', gap: '1.5rem', padding: '1.375rem 0', borderBottom: '1px solid #E7E3DA' }}>
                <dt style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8F8B82', letterSpacing: '0.04em', paddingTop: '0.125rem' }}>{label}</dt>
                <dd style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Message */}
      <section style={{ paddingTop: '5rem', paddingBottom: '7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ borderTop: '1px solid #E7E3DA', paddingTop: '4rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>MESSAGE</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '2.5rem' }}>代表挨拶</h2>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div style={{ flexShrink: 0, width: '80px', height: '100px', position: 'relative', overflow: 'hidden', background: '#EDEAE2' }}>
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_1.jpg"
                  alt="代表取締役 播磨龍樹"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="80px"
                />
              </div>
              <div style={{ paddingTop: '0.25rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>播磨 龍樹</div>
                <div style={{ fontSize: '0.75rem', color: '#8F8B82', marginTop: '4px' }}>代表取締役</div>
              </div>
            </div>

            <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2, marginBottom: '1.5rem' }}>多店舗展開に伴う施工管理の煩雑さを、もっとシンプルにしたい。それが私たちの出発点です。</p>
            <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2, marginBottom: '1.5rem' }}>フランチャイズ本部の皆様が直面する課題は、店舗数が増えるほど複雑になります。複数の業者との調整、進捗の確認、品質の統一——これらすべてを一社に任せられる体制を整えることが私たちの使命です。</p>
            <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2 }}>店舗内装工事から原状回復工事まで、ワンストップでお任せいただくことで、本部担当者様が本来の業務に集中できる環境をつくります。</p>
          </div>
        </div>
      </section>

      {/* Access */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#EDEAE2' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>ACCESS</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '2rem' }}>アクセス</h2>
          <p style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 2.1, marginBottom: '0.75rem' }}>
            〒177-0053<br />
            東京都練馬区関町南2丁目2-4 山一ビル
          </p>
          <a href="tel:080-4724-0713" style={{ fontSize: '0.9375rem', color: '#0A0A0A', textDecoration: 'none', display: 'inline-block', marginBottom: '0.375rem' }}>080-4724-0713</a>
          <p style={{ fontSize: '0.8125rem', color: '#8F8B82', marginBottom: '2.5rem' }}>平日 9:00〜18:00</p>
          <div style={{ background: '#DDD8CE', aspectRatio: '16/7', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: '#8F8B82' }}>Map</p>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
