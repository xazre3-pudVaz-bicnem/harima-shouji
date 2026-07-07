import Link from 'next/link'

type Props = {
  heading?: string
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
}

export default function CtaSection({
  heading = 'まずはお気軽に\nご相談ください',
  subtext = '現地調査・お見積りは無料です。複数店舗のまとめてのご相談も歓迎します。',
  primaryLabel = 'お問い合わせ',
  primaryHref = '/contact',
}: Props) {
  return (
    <section style={{ position: 'relative', background: '#101014', overflow: 'hidden' }}>
      {/* ghost serif word */}
      <div
        aria-hidden
        className="serif-en"
        style={{
          position: 'absolute',
          right: '-1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          fontStyle: 'italic',
          fontSize: 'clamp(6rem, 18vw, 17rem)',
          color: 'rgba(255,255,255,0.04)',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        Contact
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1480px', margin: '0 auto', padding: '8rem 1.5rem' }}>
        <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '2rem' }}>
          <span style={{ width: '2.25rem', height: '1px', background: '#C25E7F', display: 'inline-block' }} />
          CONTACT
        </div>

        <h2
          style={{
            fontSize: 'clamp(2rem, 4.6vw, 4rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-0.04em',
            lineHeight: 1.2,
            marginBottom: '1.75rem',
            whiteSpace: 'pre-line',
          }}
        >
          {heading}
        </h2>

        <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', lineHeight: 2, marginBottom: '3.25rem', maxWidth: '480px' }}>
          {subtext}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href={primaryHref} className="btn btn-paper">
            {primaryLabel}
            <span aria-hidden>→</span>
          </Link>
          <a href="tel:080-4724-0713" className="btn btn-line-light mono" style={{ letterSpacing: '0.08em' }}>
            080-4724-0713
          </a>
          <span className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', marginLeft: '0.5rem' }}>
            SURVEY & ESTIMATE FREE
          </span>
        </div>
      </div>
    </section>
  )
}
