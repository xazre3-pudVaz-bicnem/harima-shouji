import Link from 'next/link'
import { news, categoryLabels } from '@/data/news'

export default function NewsPreview() {
  const latest = news.slice(0, 3)

  return (
    <section style={{ background: 'var(--paper)', paddingTop: '7rem', paddingBottom: '8rem' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>NEWS</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.15 }}>
              ニュース
            </h2>
          </div>
          <Link
            href="/news"
            className="mono"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.22em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', paddingBottom: '0.5rem', borderBottom: '1px solid #0A0A0A' }}
          >
            ALL NEWS
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--line-2)' }}>
          {latest.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="row-link"
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 'clamp(1.25rem, 3vw, 2.5rem)',
                padding: '1.5rem 0',
                borderBottom: '1px solid var(--line-2)',
                textDecoration: 'none',
                flexWrap: 'wrap',
              }}
            >
              <time className="mono" dateTime={item.date} style={{ fontSize: '0.6875rem', color: '#8F8B82', letterSpacing: '0.1em', flexShrink: 0 }}>
                {item.date.replaceAll('-', '.')}
              </time>
              <span className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', color: '#C25E7F', textTransform: 'uppercase', flexShrink: 0 }}>
                {categoryLabels[item.category]}
              </span>
              <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.7, flex: 1, minWidth: '240px' }}>
                {item.title}
              </span>
              <span className="row-arrow hidden sm:inline" aria-hidden style={{ fontSize: '1rem', color: '#8F8B82', flexShrink: 0 }}>
                →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
