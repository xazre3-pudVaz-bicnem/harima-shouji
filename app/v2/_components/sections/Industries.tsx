import Link from 'next/link'

const industries = [
  { href: '/industry/restaurant-interior', ja: '飲食店', en: 'RESTAURANT' },
  { href: '/industry/cafe-interior', ja: 'カフェ・ベーカリー', en: 'CAFE / BAKERY' },
  { href: '/industry/bar-interior', ja: 'バー・ダイニングバー', en: 'BAR' },
  { href: '/industry/beauty-salon-interior', ja: '美容室・ヘアサロン', en: 'BEAUTY SALON' },
  { href: '/industry/salon-interior', ja: 'エステ・ネイルサロン', en: 'SALON' },
  { href: '/industry/gym-interior', ja: 'フィットネス・ジム', en: 'GYM' },
  { href: '/industry/clinic-interior', ja: 'クリニック', en: 'CLINIC' },
  { href: '/industry/dental-interior', ja: '歯科医院', en: 'DENTAL' },
  { href: '/industry/seikotsuin-interior', ja: '整骨院・接骨院', en: 'SEIKOTSUIN' },
  { href: '/industry/retail-interior', ja: '小売・アパレル', en: 'RETAIL' },
]

export default function Industries() {
  return (
    <section style={{ background: 'var(--paper)', paddingTop: '9rem', paddingBottom: '9rem' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>INDUSTRIES</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.4vw, 3.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.045em', lineHeight: 1.12 }}>
              業種別対応
            </h2>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 2, maxWidth: '380px' }}>
            業種ごとに異なる施工要件に対応します。FC・多店舗展開の統一施工もお任せください。
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--line-2)' }}>
          {industries.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="row-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                padding: '1.625rem 0',
                borderBottom: '1px solid var(--line-2)',
                textDecoration: 'none',
              }}
            >
              <span className="mono" style={{ fontSize: '0.6875rem', fontWeight: 500, color: '#B5B0A4', letterSpacing: '0.1em', flexShrink: 0, width: '2.5rem' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 'clamp(1.25rem, 2.6vw, 1.9rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em' }}>
                {item.ja}
              </span>
              <span className="mono hidden sm:inline" style={{ fontSize: '0.5625rem', letterSpacing: '0.24em', color: '#B5B0A4', textTransform: 'uppercase', marginLeft: 'auto' }}>
                {item.en}
              </span>
              <span className="row-arrow sm:ml-0" aria-hidden style={{ fontSize: '1.125rem', color: '#8F8B82', marginLeft: 'auto', flexShrink: 0 }}>
                →
              </span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link
            href="/industry"
            className="mono"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.22em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', paddingBottom: '0.5rem', borderBottom: '1px solid #0A0A0A' }}
          >
            ALL INDUSTRIES
            <span aria-hidden>→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
