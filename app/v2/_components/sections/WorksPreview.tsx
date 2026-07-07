import Link from 'next/link'
import Image from 'next/image'
import { works } from '@/data/works'
import type { WorkCategory } from '@/data/works'

const categoryLabels: Record<WorkCategory, string> = {
  'shop-interior': '店舗内装工事',
  restoration: '原状回復工事',
  salon: 'サロン内装',
  gym: 'ジム内装',
}

export default function WorksPreview() {
  const featured = works.slice(0, 3)

  return (
    <section style={{ background: 'var(--surface)', paddingTop: '9rem', paddingBottom: '9rem' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>WORKS</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.4vw, 3.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.045em', lineHeight: 1.12 }}>
              施工実績
            </h2>
          </div>
          <Link
            href="/works"
            className="mono row-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.22em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', paddingBottom: '0.5rem', borderBottom: '1px solid #0A0A0A' }}
          >
            VIEW ALL
            <span className="row-arrow" aria-hidden>→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem' }}>
          {featured.map((work, i) => (
            <Link key={work.slug} href={`/works/${work.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <div className="img-zoom" style={{ position: 'relative', aspectRatio: '4/3', background: '#DDD8CE', marginBottom: '1.375rem' }}>
                <Image
                  src={work.imageUrl}
                  alt={`${categoryLabels[work.category]}の施工イメージ`}
                  fill
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className="mono"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    fontSize: '0.5625rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    color: 'rgba(255,255,255,0.9)',
                    background: 'rgba(10,10,10,0.66)',
                    padding: '0.375rem 0.75rem',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')} — {categoryLabels[work.category]}
                </span>
              </div>
              <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.16em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '0.625rem' }}>
                {work.area}　/　{work.duration}
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.5 }}>
                {work.title}
              </h3>
            </Link>
          ))}
        </div>

        <p className="mono" style={{ marginTop: '2.75rem', fontSize: '0.5625rem', letterSpacing: '0.14em', color: '#8F8B82' }}>
          ※ 掲載写真は施工イメージです。実際の施工実績は準備が整い次第、順次公開いたします。
        </p>
      </div>
    </section>
  )
}
