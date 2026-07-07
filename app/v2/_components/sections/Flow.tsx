'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    number: '01',
    en: 'CONTACT',
    title: 'お問い合わせ',
    description: 'お電話またはフォームよりご連絡ください。複数店舗のまとめてのご相談も歓迎です。',
  },
  {
    number: '02',
    en: 'SURVEY',
    title: '現地調査（無料）',
    description: '工事内容・スケジュールのヒアリング後、対象店舗に伺います。調査費用は無料です。',
  },
  {
    number: '03',
    en: 'CONSTRUCTION',
    title: '施工・工程管理',
    description: '夜間・短工期にも対応。施工中は定期的に進捗をご報告します。',
  },
  {
    number: '04',
    en: 'HANDOVER',
    title: '完了・引き渡し',
    description: '施工完了後にご確認いただき引き渡しとなります。引き渡し後も継続サポート可能です。',
  },
]

export default function Flow() {
  return (
    <section
      id="flow"
      style={{ background: 'var(--surface)', paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '5rem', flexWrap: 'wrap' }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>PROCESS</div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4.4vw, 3.75rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: '-0.045em',
                lineHeight: 1.12,
              }}
            >
              ご依頼の流れ
            </h2>
          </div>
          <span className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.24em', color: '#B5B0A4', textTransform: 'uppercase' }}>
            ( 04 STEPS )
          </span>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '3rem 0' }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.09, ease: EASE }}
              style={{
                borderLeft: '1px solid var(--line-2)',
                padding: '0.5rem 2rem 0.5rem 1.75rem',
              }}
            >
              <div className="mono" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 500, letterSpacing: '-0.05em', color: '#CFC9BD', lineHeight: 1, marginBottom: '1.75rem' }}>
                {step.number}
              </div>
              <div className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.26em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
                {step.en}
              </div>
              <h3
                style={{
                  fontSize: '1.1875rem',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  letterSpacing: '-0.025em',
                  marginBottom: '1rem',
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6B675F',
                  lineHeight: 2,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
