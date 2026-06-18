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

export default function Process() {
  return (
    <section className="bg-white" style={{ paddingTop: '14rem', paddingBottom: '14rem' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="section-label mb-7">PROCESS</div>
          <h2 className="section-title">ご依頼の流れ</h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white px-10 py-14 lg:px-12 lg:py-16 group hover:bg-stone-50 transition-colors relative overflow-hidden"
            >
              {/* Giant ghost number */}
              <div
                className="absolute top-4 right-5 font-black leading-none select-none pointer-events-none"
                style={{
                  fontSize: '7rem',
                  color: '#FEF9EE',
                  letterSpacing: '-0.05em',
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {step.number}
              </div>

              <div className="relative">
                {/* Amber badge */}
                <div className="w-10 h-10 bg-amber-400 flex items-center justify-center mb-10">
                  <span className="text-[10px] font-black text-white tracking-widest">{step.number}</span>
                </div>

                <h3
                  className="font-bold text-gray-900 mb-5 leading-snug"
                  style={{
                    fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{ fontSize: '0.9375rem', lineHeight: '1.95' }}
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
