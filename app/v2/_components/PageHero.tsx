import Image from 'next/image'
import Link from 'next/link'

type Props = {
  label: string
  title: string
  subtitle?: string
  image: string
  breadcrumb: { label: string; href: string }[]
}

function toGhostWord(label: string) {
  const lower = label.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}

export default function PageHero({ label, title, subtitle, image, breadcrumb }: Props) {
  return (
    <section style={{ position: 'relative', minHeight: '62vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', background: '#101014' }}>
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: 'cover', opacity: 0.82 }}
        priority
        sizes="100vw"
      />

      {/* overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,8,10,0.78) 0%, rgba(8,8,10,0.42) 55%, rgba(8,8,10,0.18) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,10,0.68) 0%, transparent 55%)' }} />

      {/* ghost serif word */}
      <div
        aria-hidden
        className="serif-en rise rise-3"
        style={{
          position: 'absolute',
          right: '-0.5rem',
          bottom: '-1.5rem',
          fontStyle: 'italic',
          fontSize: 'clamp(4.5rem, 13vw, 12rem)',
          color: 'rgba(255,255,255,0.07)',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        {toGhostWord(label)}
      </div>

      {/* content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1480px', margin: '0 auto', padding: '9rem 1.5rem 0' }}>
        {/* Breadcrumb */}
        <nav className="rise rise-1" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '2.25rem', flexWrap: 'wrap' }}>
          {breadcrumb.map((item, i) => (
            <span key={item.href} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              {i > 0 && <span className="mono" style={{ fontSize: '0.5625rem', color: 'rgba(255,255,255,0.25)' }}>/</span>}
              <Link
                href={item.href}
                className="mono"
                style={{ fontSize: '0.625rem', color: i === breadcrumb.length - 1 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.38)', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="mono rise rise-2" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
          <span style={{ width: '2.25rem', height: '1px', background: '#C25E7F', display: 'inline-block', flexShrink: 0 }} />
          {label}
        </div>

        <h1
          className="rise rise-2"
          style={{
            fontSize: 'clamp(2.1rem, 5.2vw, 4.5rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-0.04em',
            lineHeight: 1.14,
            marginBottom: subtitle ? '1.375rem' : 0,
            whiteSpace: 'pre-line',
            maxWidth: '20em',
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="rise rise-3" style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.9, maxWidth: '520px' }}>
            {subtitle}
          </p>
        )}

        {/* bottom meta rule */}
        <div style={{ marginTop: '3.5rem', borderTop: '1px solid rgba(255,255,255,0.14)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.125rem 0 1.375rem', gap: '1rem' }} className="line-grow">
          <span className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.26em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>
            HARIMA SHOUJI — CONSTRUCTION MANAGEMENT
          </span>
          <span className="mono hidden sm:inline" style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>
            TOKYO / KANTO — KANSAI
          </span>
        </div>
      </div>
    </section>
  )
}
