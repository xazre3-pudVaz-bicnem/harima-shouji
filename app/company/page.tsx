import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import JsonLd from '@/components/ui/JsonLd'
import { SITE_URL, companyInfo, fullAddress, serviceAreaShortText, serviceAreaText } from '@/data/company'
import { aboutPageSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '会社概要',
  description: `株式会社播磨商事の会社概要・代表紹介。東京都練馬区を拠点に、サロン・ジム・ピラティススタジオなどの店舗内装工事、FC・多店舗展開の内装、原状回復工事を${serviceAreaShortText}で承ります。`,
  alternates: {
    canonical: `${SITE_URL}/company`,
  },
  openGraph: {
    images: ['/og-image.jpg'],
    title: '会社概要 | 株式会社播磨商事',
    description: '株式会社播磨商事の会社概要・代表紹介。サロン・ジム・ピラティススタジオなどの店舗内装工事を専門とする内装会社です。',
    locale: 'ja_JP',
    type: 'website',
  },
}

const ceoProfile = [
  { label: '氏名', value: `${companyInfo.representative.name}（${companyInfo.representative.reading}）` },
  { label: '役職', value: companyInfo.representative.title },
  { label: '拠点', value: `${companyInfo.address.prefecture}${companyInfo.address.city}` },
  { label: '担当領域', value: '店舗内装工事・原状回復工事の施工管理全般' },
  { label: '対応エリア', value: serviceAreaShortText },
]

// 会社情報の表（data/company.ts から生成。空欄の項目は表示しない）
const companyData = [
  { label: '商号', value: companyInfo.name },
  { label: '代表取締役', value: companyInfo.representative.name },
  { label: '所在地', value: `〒${companyInfo.address.postalCode}\n${fullAddress}` },
  { label: '電話番号', value: companyInfo.tel },
  { label: 'メール', value: companyInfo.email },
  { label: '営業時間', value: `${companyInfo.businessHours}\n（${companyInfo.businessNote}）` },
  { label: '設立', value: companyInfo.foundingDate },
  { label: '資本金', value: companyInfo.capital },
  { label: '従業員数', value: companyInfo.employees },
  { label: '事業内容', value: 'サロン・ジム・ピラティススタジオなどの店舗内装工事\nFC・多店舗展開の内装工事\n原状回復工事' },
  { label: '対応エリア', value: serviceAreaText },
  { label: '建設業許可', value: companyInfo.license },
  { label: '法人番号', value: companyInfo.corporateNumber },
  { label: '適格請求書発行事業者登録番号', value: companyInfo.invoiceNumber },
].filter((row) => row.value)

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`

export default function CompanyPage() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <JsonLd data={breadcrumbSchema([{ name: 'TOP', url: '/' }, { name: '会社概要', url: '/company' }])} />
      {/* 会社の実体（GeneralContractor）は layout.tsx で出力済み。ここでは会社概要ページであることだけを示す */}
      <JsonLd data={aboutPageSchema('/company')} />

      <PageHero
        label="COMPANY"
        title="会社概要"
        subtitle="サロン・ジム・ピラティススタジオなどの店舗内装を専門に、FC・多店舗展開の内装工事から原状回復工事までを一括で担います。"
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
            〒{companyInfo.address.postalCode}<br />
            {fullAddress}
          </p>
          <a href={`tel:${companyInfo.tel}`} className="mono" style={{ fontSize: '1.0625rem', color: '#0A0A0A', textDecoration: 'none', display: 'inline-block', marginBottom: '0.375rem', letterSpacing: '0.04em' }}>
            {companyInfo.tel}
          </a>
          <p className="mono" style={{ fontSize: '0.625rem', color: '#8F8B82', marginBottom: '2.5rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            OPEN — WEEKDAYS 9:00–18:00
          </p>
          <div style={{ background: 'var(--surface)', aspectRatio: '16/7', minHeight: '280px', width: '100%', border: '1px solid var(--line)' }}>
            <iframe
              src={mapSrc}
              title={`${companyInfo.name}の所在地（Googleマップ）`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, width: '100%', height: '100%', display: 'block' }}
            />
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
