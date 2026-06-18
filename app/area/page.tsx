import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'

export const metadata: Metadata = {
  title: '対応エリア | 関東・東海・近畿 7都府県対応',
  description: '東京都・埼玉県・千葉県・神奈川県・静岡県・大阪府・兵庫県に対応。FC本部・多店舗展開企業の店舗内装工事・原状回復工事を一括管理します。',
  alternates: { canonical: 'https://harima-shouji.co.jp/area' },
  openGraph: { title: '対応エリア | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/area' },
}

const areas = [
  {
    region: '関東',
    prefectures: [
      { name: '東京都', reading: 'Tokyo', slug: 'tokyo', note: '都内全域対応。23区・多摩地区ともに対応可能です。' },
      { name: '埼玉県', reading: 'Saitama', slug: 'saitama', note: 'さいたま市・川口市・川越市など主要エリアに対応。' },
      { name: '千葉県', reading: 'Chiba', slug: 'chiba', note: '千葉市・船橋市・柏市など主要エリアに対応。' },
      { name: '神奈川県', reading: 'Kanagawa', slug: 'kanagawa', note: '横浜市・川崎市・相模原市など主要エリアに対応。' },
    ],
  },
  {
    region: '東海',
    prefectures: [
      { name: '静岡県', reading: 'Shizuoka', slug: 'shizuoka', note: '静岡市・浜松市・沼津市など主要エリアに対応。' },
    ],
  },
  {
    region: '近畿',
    prefectures: [
      { name: '大阪府', reading: 'Osaka', slug: 'osaka', note: '大阪市内・堺市・東大阪市など主要エリアに対応。' },
      { name: '兵庫県', reading: 'Hyogo', slug: 'hyogo', note: '神戸市・姫路市・西宮市など主要エリアに対応。' },
    ],
  },
]

export default function AreaPage() {
  return (
    <div style={{ background: '#FAFAF8' }}>

      <PageHero
        label="AREA"
        title="対応エリア"
        subtitle="関東エリアを中心に、東海・近畿にも対応。複数エリアにまたがる案件もご相談ください。"
        image="/LINE_ALBUM_2026.6.10_260610_7.jpg"
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
                <span style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase' }}>REGION</span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em' }}>{area.region}</h2>
              </div>
              <div>
                {area.prefectures.map((pref) => (
                  <div
                    key={pref.name}
                    id={pref.slug}
                    style={{ padding: '2rem 0', borderBottom: '1px solid #F0EFEC' }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="md:grid-cols-[280px_1fr_auto]">
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                        <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em' }}>{pref.name}</span>
                        <span style={{ fontSize: '0.6875rem', color: '#C4C2BE', letterSpacing: '0.1em' }}>{pref.reading}</span>
                      </div>
                      <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 1.9, alignSelf: 'center' }}>{pref.note}</p>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignSelf: 'center' }}>
                        <Link href={`/area/${pref.slug}/shop-interior`} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0A0A0A', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #E5E3DF', whiteSpace: 'nowrap' }}>
                          内装工事
                        </Link>
                        <Link href={`/area/${pref.slug}/restoration`} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0A0A0A', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #E5E3DF', whiteSpace: 'nowrap' }}>
                          原状回復
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ padding: '2.5rem', background: '#F5F4F0', borderLeft: '2px solid #0A0A0A', marginTop: '2rem' }}>
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
