'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const reasons = [
  {
    number: '01',
    title: '窓口を一本化',
    note: '内装・原状回復・立会いを一社で完結。担当者の連絡先は一つだけ。',
  },
  {
    number: '02',
    title: '複数店舗を同時管理',
    note: 'エリアをまたいだ同時並行施工・工程管理に対応。',
  },
  {
    number: '03',
    title: '夜間・短工期対応',
    note: '翌朝完了が必要な急ぎ案件、営業後施工もご相談ください。',
  },
  {
    number: '04',
    title: '原状回復まで一括',
    note: '退去立会い代行・解体・クリーニングも同時対応。',
  },
  {
    number: '05',
    title: '法人向け進行管理',
    note: '進捗・完了報告を定期共有。個別確認の手間を削減。',
  },
  {
    number: '06',
    title: '規模を問わず対応',
    note: 'クロス補修から大型改装、多店舗一括まで柔軟に受付。',
  },
]

export default function WhyHarima() {
  return (
    <section
      id="why"
      style={{ position: 'relative', background: '#101014', paddingTop: '10rem', paddingBottom: '10rem', overflow: 'hidden' }}
    >
      {/* ghost serif word */}
      <div
        aria-hidden
        className="serif-en"
        style={{
          position: 'absolute',
          right: '-1rem',
          top: '3rem',
          fontStyle: 'italic',
          fontSize: 'clamp(5rem, 14vw, 13rem)',
          color: 'rgba(255,255,255,0.035)',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        Reasons
      </div>

      <div style={{ position: 'relative', maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: '5rem' }}
        >
          <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
            <span style={{ width: '2.25rem', height: '1px', background: '#C25E7F', display: 'inline-block' }} />
            WHY HARIMA
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.4vw, 3.75rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.045em',
              lineHeight: 1.12,
            }}
          >
            選ばれる理由
          </h2>
        </motion.div>

        {/* Editorial list */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: EASE }}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                padding: '2.125rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.09)',
                gap: 'clamp(1.5rem, 3.5vw, 3.5rem)',
              }}
            >
              <span className="mono" style={{ flexShrink: 0, fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', color: '#C25E7F', width: '2.5rem' }}>
                ({reason.number})
              </span>

              <h3
                style={{
                  flexShrink: 0,
                  width: 'clamp(10rem, 24vw, 22rem)',
                  fontSize: 'clamp(1.15rem, 2.1vw, 1.75rem)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.35,
                }}
              >
                {reason.title}
              </h3>

              <p
                className="hidden md:block"
                style={{
                  flex: 1,
                  fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.42)',
                  lineHeight: 1.9,
                }}
              >
                {reason.note}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
