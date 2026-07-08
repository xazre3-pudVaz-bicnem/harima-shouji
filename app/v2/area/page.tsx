import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../_components/PageHero'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: '対応エリア',
  description: '東京都・埼玉県・千葉県・神奈川県・静岡県・大阪府・兵庫県に対応。関東・東海・近畿エリアの店舗内装工事・原状回復工事。',
}

const areas = [
  {
    region: '関東',
    prefectures: [
      { name: '東京都', reading: 'Tokyo', note: '都内全域対応。23区・多摩地区ともに対応可能です。' },
      { name: '埼玉県', reading: 'Saitama', note: 'さいたま市・川口市・川越市など主要エリアに対応。' },
      { name: '千葉県', reading: 'Chiba', note: '千葉市・船橋市・柏市など主要エリアに対応。' },
      { name: '神奈川県', reading: 'Kanagawa', note: '横浜市・川崎市・相模原市など主要エリアに対応。' },
    ],
  },
  {
    region: '東海',
    prefectures: [
      { name: '静岡県', reading: 'Shizuoka', note: '静岡市・浜松市・沼津市など主要エリアに対応。' },
    ],
  },
  {
    region: '近畿',
    prefectures: [
      { name: '大阪府', reading: 'Osaka', note: '大阪市内・堺市・東大阪市など主要エリアに対応。' },
      { name: '兵庫県', reading: 'Hyogo', note: '神戸市・姫路市・西宮市など主要エリアに対応。' },
    ],
  },
]

export default function AreaPage() {
  return (
    <div style={{ background: '#F6F4EF' }}>

      <PageHero
        label="AREA"
        title="対応エリア"
        subtitle="関東エリアを中心に、東海・近畿にも対応。複数エリアにまたがる案件もご相談ください。"
        image="/LINE_ALBUM_2026.6.10_260610_7.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/v2' },
          { label: '対応エリア', href: '/v2/area' },
        ]}
      />

      {/* Area list */}
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
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '1rem',
                      padding: '2rem 0',
                      borderBottom: '1px solid #E7E3DA',
                    }}
                    className="md:grid-cols-[280px_1fr]"
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                      <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
                        {pref.name}
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: '#B5B0A4', letterSpacing: '0.1em' }}>{pref.reading}</span>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 1.9, alignSelf: 'center' }}>{pref.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Note */}
          <div style={{ padding: '2.5rem 2.5rem', background: '#EDEAE2', borderLeft: '2px solid #0A0A0A', marginTop: '2rem' }}>
            <p style={{ fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 2.1 }}>
              上記エリア外についても、案件内容・規模によってはご対応可能な場合があります。<br />
              まずはお気軽にお問い合わせください。
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#101014', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '2rem' }}>エリアのご確認・ご相談</h2>
          <Link href="/v2/contact" style={{ display: 'inline-block', padding: '1rem 3rem', background: '#FFFFFF', color: '#0A0A0A', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none' }}>
            お問い合わせ
          </Link>
        </div>
      </section>

    </div>
  )
}
