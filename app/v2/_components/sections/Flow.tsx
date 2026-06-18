'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'お問い合わせ',
    description: 'お電話またはフォームよりご連絡ください。複数店舗のまとめてのご相談も歓迎です。',
  },
  {
    number: '02',
    title: '現地調査（無料）',
    description: '工事内容・スケジュールのヒアリング後、対象店舗に伺います。調査費用は無料です。',
  },
  {
    number: '03',
    title: '施工・工程管理',
    description: '夜間・短工期にも対応。施工中は定期的に進捗をご報告します。',
  },
  {
    number: '04',
    title: '完了・引き渡し',
    description: '施工完了後にご確認いただき引き渡しとなります。引き渡し後も継続サポート可能です。',
  },
]

export default function Flow() {
  return (
    <section
      id="flow"
      style={{ background: '#F5F4F0', paddingTop: '9rem', paddingBottom: '9rem' }}
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
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            PROCESS
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.75rem)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            ご依頼の流れ
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#FFFFFF',
                padding: '3rem 2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Ghost number */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.25rem',
                  fontSize: '6rem',
                  fontWeight: 700,
                  letterSpacing: '-0.05em',
                  lineHeight: 1,
                  color: '#F5F4F0',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {step.number}
              </div>

              <div style={{ position: 'relative' }}>
                {/* Step indicator */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.25rem',
                    height: '2.25rem',
                    background: '#0A0A0A',
                    marginBottom: '2.5rem',
                  }}
                >
                  <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em' }}>
                    {step.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.375rem)',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#6B6B6B',
                    lineHeight: 2,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
