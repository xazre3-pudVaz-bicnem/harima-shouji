const items = [
  'SHOP INTERIOR',
  '店舗内装工事',
  'RESTORATION',
  '原状回復工事',
  'FC CONSTRUCTION MANAGEMENT',
  '夜間・短工期施工',
  '7 PREFECTURES',
  '多店舗一括管理',
]

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
          <span
            className="mono"
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </span>
          <span aria-hidden style={{ width: '4px', height: '4px', background: '#C25E7F', flexShrink: 0, transform: 'rotate(45deg)' }} />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" style={{ background: '#0A0A0A', padding: '1.2rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <Track />
      <Track ariaHidden />
    </div>
  )
}
