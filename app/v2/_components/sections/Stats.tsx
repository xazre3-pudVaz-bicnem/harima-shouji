const stats = [
  { value: '07', en: 'PREFECTURES', ja: '対応都府県 — 関東・東海・近畿' },
  { value: '14', en: 'INDUSTRIES', ja: '対応業種 — 飲食・美容・ジムほか' },
  { value: '01', en: 'ONE CONTACT', ja: '発注窓口 — 内装から原状回復まで' },
]

export default function Stats() {
  return (
    <section style={{ background: 'var(--paper)', paddingTop: '9rem', paddingBottom: '9rem' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]" style={{ gap: 'clamp(4rem, 7vw, 8rem)', alignItems: 'start' }}>

          {/* Statement */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '2.25rem' }}>ABOUT US</div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4.4vw, 3.75rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: '-0.045em',
                lineHeight: 1.28,
                marginBottom: '2.25rem',
              }}
            >
              施工管理の煩雑さを、
              <br />
              <span className="serif-jp" style={{ fontWeight: 500 }}>シンプル</span>に。
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.2, maxWidth: '560px', marginBottom: '1.25rem' }}>
              店舗数が増えるほど、業者への発注・進捗確認・品質の統一は複雑になります。播磨商事は、店舗内装工事から原状回復工事までを一社で引き受け、本部担当者様の窓口をひとつに集約します。
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.2, maxWidth: '560px' }}>
              夜間施工・短工期・複数店舗の同時進行。多店舗展開の現場で求められる施工管理を、仕組みで支えます。
            </p>
          </div>

          {/* Stats */}
          <div>
            {stats.map((s) => (
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
                    width: '3ch',
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
          </div>

        </div>
      </div>
    </section>
  )
}
