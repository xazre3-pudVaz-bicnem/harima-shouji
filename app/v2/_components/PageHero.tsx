import Image from 'next/image'
import Link from 'next/link'

type Props = {
  label: string
  title: string
  subtitle?: string
  image: string
  breadcrumb: { label: string; href: string }[]
}

export default function PageHero({ label, title, subtitle, image, breadcrumb }: Props) {
  return (
    <section style={{ position: 'relative', height: '55vh', minHeight: '380px', overflow: 'hidden' }}>
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        priority
        sizes="100vw"
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,8,0.72) 0%, rgba(5,5,8,0.38) 60%, rgba(5,5,8,0.2) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,8,0.5) 0%, transparent 50%)' }} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '3.5rem 2rem',
          maxWidth: '1400px',
          margin: '0 auto',
          left: 0,
          right: 0,
        }}
      >
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {breadcrumb.map((item, i) => (
            <span key={item.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {i > 0 && <span style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.25)' }}>/</span>}
              <Link
                href={item.href}
                style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', letterSpacing: '0.04em' }}
              >
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
          {label}
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: subtitle ? '1rem' : 0 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '480px' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
