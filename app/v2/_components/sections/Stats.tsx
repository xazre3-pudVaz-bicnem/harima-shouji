import Link from 'next/link'
import { serviceAreas, serviceRegions } from '@/data/company'
import { specialtyStatement } from '@/data/expertise'
import { publishedAchievements, achievementsNote } from '@/data/achievements'
import { startPageVisible } from '@/data/qa'

// 会社の専門分野・対応範囲（紹介文は data/expertise.ts。構造化データの description と同じ文）
const facts = [
  { value: '03', en: 'SPECIALTIES', ja: '専門分野 — サロン・ジム・ピラティススタジオ' },
  { value: String(serviceAreas.length).padStart(2, '0'), en: 'PREFECTURES', ja: `対応エリア — ${serviceRegions.join('・')}` },
  { value: '01', en: 'ONE STOP', ja: '窓口 — 物件の内見同行から現場管理まで' },
]

export default function Stats() {
  // 実績件数は、集計時点・集計対象が確認できたものだけを表示する（data/achievements.ts）
  const rows = [
    ...facts,
    ...publishedAchievements.map((a) => ({ value: String(a.count), en: a.en, ja: `${a.label}の施工実績（${a.unit}）` })),
  ]

  return (
    <section id="about" style={{ background: 'var(--paper)', paddingTop: '9rem', paddingBottom: '9rem' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]" style={{ gap: 'clamp(4rem, 7vw, 8rem)', alignItems: 'start' }}>

          {/* Statement */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '2.25rem' }}>ABOUT US</div>
            {/* 語句の途中で改行されないよう、句ごとに inline-block でまとめる */}
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.4vw, 3rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: '-0.045em',
                lineHeight: 1.36,
                marginBottom: '2.25rem',
              }}
            >
              <span className="inline-block">サロン・ジム・</span>
              <span className="inline-block">ピラティスの</span>
              <br />
              <span className="inline-block">店舗内装を、</span>
              <span className="inline-block">
                <span className="serif-jp" style={{ fontWeight: 500 }}>一貫</span>して。
              </span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#3A3A3A', lineHeight: 2.1, maxWidth: '600px', marginBottom: '1.25rem' }}>
              {specialtyStatement[0]}
              {specialtyStatement[1]}
            </p>
            <p style={{ fontSize: '1rem', color: '#3A3A3A', lineHeight: 2.1, maxWidth: '600px' }}>
              {specialtyStatement[2]}
              {specialtyStatement[3]}
            </p>
            {startPageVisible && (
              <Link
                href="/start"
                style={{ display: 'inline-block', marginTop: '2.25rem', fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none', paddingBottom: '0.375rem', borderBottom: '1px solid #0A0A0A' }}
              >
                初めて店舗を出店する方へ →
              </Link>
            )}
          </div>

          {/* Facts */}
          <div>
            {rows.map((s) => (
              <div
                key={s.en}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '2rem',
                  borderTop: '1px solid var(--line-2)',
                  padding: '2.25rem 0',
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 'clamp(3rem, 5.5vw, 4.75rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.05em',
                    color: '#0A0A0A',
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: '3ch',
                  }}
                >
                  {s.value}
                </span>
                <div>
                  <div className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.26em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {s.en}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#57544D', lineHeight: 1.7 }}>{s.ja}</div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--line-2)' }} />
            {achievementsNote && (
              <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#8F8B82', lineHeight: 1.8 }}>※ {achievementsNote}</p>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
