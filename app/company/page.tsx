import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'

export const metadata: Metadata = {
  title: '会社概要',
  description: '株式会社播磨商事の会社概要・代表紹介。フランチャイズ本部・多店舗展開企業向けに店舗内装工事・原状回復工事をワンストップで提供します。東京都練馬区を拠点に首都圏・関西圏対応。',
  alternates: {
    canonical: 'https://harima-shouji.co.jp/company',
  },
  openGraph: {
    title: '会社概要 | 株式会社播磨商事',
    description: '株式会社播磨商事の会社概要・代表紹介。店舗内装工事・原状回復工事をワンストップで提供します。',
    locale: 'ja_JP',
    type: 'website',
  },
}

const ceoProfile = [
  { label: '氏名', value: '播磨 龍樹（はりま りゅうき）' },
  { label: '役職', value: '代表取締役' },
  { label: '拠点', value: '東京都練馬区' },
  { label: '担当領域', value: '店舗内装工事・原状回復工事の施工管理全般' },
  { label: '対応エリア', value: '関東（東京・埼玉・千葉・神奈川）／静岡・大阪・兵庫' },
]

const companyData = [
  { label: '商号', value: '株式会社播磨商事' },
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
    <div style={{ background: 'var(--paper)' }}>
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
        subtitle="フランチャイズ本部・多店舗展開企業の施工パートナーとして、店舗内装工事から原状回復工事までを一括で担います。"
        image="/fc-02.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '会社概要', href: '/company' },
        ]}
      />

      {/* 01 — 代表プロフィール */}
      <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>CEO PROFILE</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.2, marginBottom: '4rem' }}>
            代表紹介
          </h2>

          <div style={{ display: 'grid', gap: 'clamp(2.5rem, 5vw, 4.5rem)', alignItems: 'start' }} className="grid-cols-1 md:grid-cols-[280px_1fr]">
            {/* Photo + name */}
            <div>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--surface)' }}>
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_1.jpg"
                  alt="代表取締役 播磨龍樹"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
              <div style={{ marginTop: '1.25rem' }}>
                <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  CEO / FOUNDER
                </div>
                <div style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em' }}>播磨 龍樹</div>
                <div style={{ fontSize: '0.75rem', color: '#8F8B82', marginTop: '0.25rem', letterSpacing: '0.04em' }}>代表取締役</div>
              </div>
            </div>

            {/* Profile rows + message */}
            <div>
              <dl style={{ borderTop: '1px solid var(--line)', marginBottom: '3.5rem' }}>
                {ceoProfile.map(({ label, value }) => (
                  <div
                    key={label}
                    style={{ display: 'grid', gridTemplateColumns: 'minmax(6rem, 8rem) 1fr', gap: '1.5rem', padding: '1.125rem 0.25rem', borderBottom: '1px solid var(--line)' }}
                  >
                    <dt className="mono" style={{ fontSize: '0.625rem', fontWeight: 500, color: '#8F8B82', letterSpacing: '0.16em', paddingTop: '0.3rem', textTransform: 'uppercase' }}>{label}</dt>
                    <dd style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.24em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                MESSAGE
              </div>
              <p
                className="serif-jp"
                style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.625rem)', fontWeight: 500, color: '#0A0A0A', lineHeight: 1.95, letterSpacing: '0.01em', marginBottom: '1.75rem' }}
              >
                多店舗展開に伴う施工管理の煩雑さを、
                <br className="hidden md:block" />
                もっとシンプルにしたい。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.2, marginBottom: '1.25rem' }}>
                フランチャイズ本部の皆様が直面する課題は、店舗数が増えるほど複雑になります。複数の業者との調整、進捗の確認、品質の統一——これらすべてを一社に任せられる体制を整えることが私たちの使命です。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.2 }}>
                店舗内装工事から原状回復工事まで、ワンストップでお任せいただくことで、本部担当者様が本来の業務に集中できる環境をつくります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — 会社概要表 */}
      <section style={{ background: 'var(--paper)', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>PROFILE</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.2, marginBottom: '3.5rem' }}>
            会社情報
          </h2>
          <dl style={{ borderTop: '1px solid var(--line-2)' }}>
            {companyData.map(({ label, value }) => (
              <div
                key={label}
                style={{ display: 'grid', gridTemplateColumns: 'minmax(6.5rem, 9rem) 1fr', gap: '1.5rem', padding: '1.5rem 0.25rem', borderBottom: '1px solid var(--line-2)' }}
              >
                <dt style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '0.02em', paddingTop: '0.125rem' }}>{label}</dt>
                <dd style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2, whiteSpace: 'pre-line' }}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 03 — アクセス */}
      <section style={{ background: '#FFFFFF', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>ACCESS</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.2, marginBottom: '2.5rem' }}>
            アクセス
          </h2>
          <p style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 2.1, marginBottom: '0.875rem' }}>
            〒177-0053<br />
            東京都練馬区関町南2丁目2-4 山一ビル
          </p>
          <a href="tel:080-4724-0713" className="mono" style={{ fontSize: '1.0625rem', color: '#0A0A0A', textDecoration: 'none', display: 'inline-block', marginBottom: '0.375rem', letterSpacing: '0.04em' }}>
            080-4724-0713
          </a>
          <p className="mono" style={{ fontSize: '0.625rem', color: '#8F8B82', marginBottom: '2.5rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            OPEN — WEEKDAYS 9:00–18:00
          </p>
          <div style={{ background: 'var(--surface)', aspectRatio: '16/7', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line)' }}>
            <p className="mono" style={{ fontSize: '0.625rem', color: '#8F8B82', letterSpacing: '0.2em' }}>MAP</p>
          </div>
        </div>
      </section>

      <CtaSection
        heading={'お問い合わせ・ご相談'}
        subtext="店舗内装・原状回復工事のことは、お気軽にご相談ください。現地調査・お見積りは無料です。"
      />
    </div>
  )
}
