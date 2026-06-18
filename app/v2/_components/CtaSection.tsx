import Link from 'next/link'

type Props = {
  heading?: string
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
}

export default function CtaSection({
  heading = 'まずはお気軽に\nご相談ください',
  subtext = '複数店舗の工事管理を相談する',
  primaryLabel = 'お問い合わせ',
  primaryHref = '/contact',
}: Props) {
  return (
    <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#0D1117', textAlign: 'center' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          CONTACT
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            lineHeight: 1.3,
            marginBottom: '1.5rem',
            whiteSpace: 'pre-line',
          }}
        >
          {heading}
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.4)', lineHeight: 2, marginBottom: '3rem' }}>
          {subtext}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href={primaryHref}
            style={{ display: 'inline-block', padding: '1rem 3rem', background: '#FFFFFF', color: '#0A0A0A', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none' }}
          >
            {primaryLabel}
          </Link>
          <a
            href="tel:080-4724-0713"
            style={{ display: 'inline-block', padding: '1rem 3rem', background: 'transparent', color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            080-4724-0713
          </a>
        </div>
      </div>
    </section>
  )
}
