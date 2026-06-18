'use client'

import { motion } from 'framer-motion'

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
      style={{ background: '#0D1117', paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '5rem' }}
        >
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            WHY HARIMA
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.75rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            選ばれる理由
          </h2>
        </motion.div>

        {/* Editorial list */}
        <div>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '2.25rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                gap: '2rem',
              }}
            >
              {/* Ghost number */}
              <div
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: '4.5rem',
                  textAlign: 'right',
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.05em',
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                }}
              >
                {reason.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  flexShrink: 0,
                  width: 'clamp(9rem, 20vw, 20rem)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.625rem)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.3,
                }}
              >
                {reason.title}
              </h3>

              {/* Note */}
              <p
                className="hidden md:block"
                style={{
                  flex: 1,
                  fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.38)',
                  lineHeight: 1.8,
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
