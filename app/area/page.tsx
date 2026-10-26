import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { SITE_URL, serviceAreas, serviceAreaSummary, serviceAreaText } from '@/data/company'

export const metadata: Metadata = {
  title: `対応エリア | ${serviceAreaSummary}`,
  description: `${serviceAreaText}で施工に対応。サロン・ジム・ピラティススタジオなどの店舗内装工事、FC・多店舗展開の内装、原状回復工事を承ります。`,
  alternates: { canonical: `${SITE_URL}/area` },
  openGraph: {
    images: ['/og-image.jpg'], title: '対応エリア | 株式会社播磨商事', url: `${SITE_URL}/area` },
}

// 各都府県の補足（対応エリアそのものは data/company.ts で管理）
const prefectureNotes: Record<string, string> = {
  tokyo: '都内全域対応。23区・多摩地区ともに対応可能です。',
  kanagawa: '横浜市・川崎市・相模原市など主要エリアに対応。',
  chiba: '千葉市・船橋市・柏市など主要エリアに対応。',
  saitama: 'さいたま市・川口市・川越市など主要エリアに対応。',
  osaka: '大阪市内・堺市・東大阪市など主要エリアに対応。',
  hyogo: '神戸市・姫路市・西宮市など主要エリアに対応。',
  kyoto: '京都市をはじめ府内の主要エリアに対応。',
  aichi: '名古屋市をはじめ県内の主要エリアに対応。',
  gifu: '岐阜市をはじめ県内の主要エリアに対応。',
  shizuoka: '静岡市・浜松市・沼津市など主要エリアに対応。',
}

const areas = [...new Set(serviceAreas.map((a) => a.region))].map((region) => ({
  region,
  prefectures: serviceAreas
    .filter((a) => a.region === region)
    .map((a) => ({ name: a.name, reading: a.en.charAt(0) + a.en.slice(1).toLowerCase(), slug: a.slug, note: prefectureNotes[a.slug] ?? '' })),
}))

export default function AreaPage() {
  return (
    <div style={{ background: '#F6F4EF' }}>

      <PageHero
        label="AREA"
        title="対応エリア"
        subtitle={`${serviceAreaSummary}で施工に対応しています。複数エリアにまたがる案件もご相談ください。`}
        image="/beauty-09.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '対応エリア', href: '/area' },
        ]}
      />

      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          {areas.map((area) => (
            <div key={area.region} style={{ marginBottom: '5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase' }}>REGION</span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em' }}>{area.region}</h2>
              </div>
              <div>
                {area.prefectures.map((pref) => (
                  <div
                    key={pref.name}
                    id={pref.slug}
                    style={{ padding: '2rem 0', borderBottom: '1px solid #E7E3DA' }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="md:grid-cols-[280px_1fr_auto]">
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                        <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em' }}>{pref.name}</span>
                        <span style={{ fontSize: '0.6875rem', color: '#B5B0A4', letterSpacing: '0.1em' }}>{pref.reading}</span>
                      </div>
                      <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 1.9, alignSelf: 'center' }}>{pref.note}</p>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignSelf: 'center' }}>
                        <Link href={`/area/${pref.slug}/shop-interior`} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0A0A0A', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #DDD8CE', whiteSpace: 'nowrap' }}>
                          内装工事
                        </Link>
                        <Link href={`/area/${pref.slug}/restoration`} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0A0A0A', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #DDD8CE', whiteSpace: 'nowrap' }}>
                          原状回復
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ padding: '2.5rem', background: '#EDEAE2', borderLeft: '2px solid #0A0A0A', marginTop: '2rem' }}>
            <p style={{ fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 2.1 }}>
              上記エリア外についても、案件内容・規模によってはご対応可能な場合があります。<br />まずはお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <CtaSection heading="エリアのご確認・ご相談" subtext="記載エリア外についてもご相談ください。まずはお気軽にお問い合わせください。" />

    </div>
  )
}
