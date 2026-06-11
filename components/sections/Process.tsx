'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'お問い合わせ',
    description: 'お電話・メールフォームにてご連絡ください。複数店舗のまとめてのご相談も歓迎です。まずはお気軽に。',
  },
  {
    number: '02',
    title: '現地調査（無料）',
    description: '工事内容・スケジュールのヒアリング後、対象店舗に伺い現況を確認します。現地調査費用は完全無料です。',
  },
  {
    number: '03',
    title: '施工・工程管理',
    description: '承認後、施工スケジュールを調整のうえ施工を開始します。夜間・短工期にも対応。進捗は定期報告します。',
  },
  {
    number: '04',
    title: '完了・アフターフォロー',
    description: '施工完了後にご確認いただき、引き渡しとなります。引き渡し後のサポートも継続して対応します。',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
        >
          <div className="max-w-2xl">
            <div className="section-label mb-6">PROCESS</div>
            <h2 className="section-title mb-6">ご依頼の流れ</h2>
            <p className="body-text">
              お問い合わせから完了まで、担当者が一貫してサポートします。
            </p>
          </div>
          <div className="shrink-0 text-right hidden md:block">
            <div className="text-xs text-gray-400 tracking-widest uppercase mb-1">無料相談受付中</div>
            <div className="font-bold text-gray-900" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>080-4724-0713</div>
            <div className="text-xs text-gray-400 mt-1">平日 9:00〜18:00</div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-stone-50 p-10 lg:p-14 group hover:bg-white transition-colors relative overflow-hidden"
            >
              {/* Ghost number */}
              <div
                className="absolute top-4 right-6 font-black text-gray-100 select-none leading-none pointer-events-none"
                style={{ fontSize: '5rem' }}
                aria-hidden="true"
              >
                {step.number}
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-amber-400 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-black text-white tracking-widest">{step.number}</span>
                  </div>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <h3
                  className="font-bold text-gray-900 mb-5 leading-snug"
                  style={{ fontSize: 'clamp(1.15rem, 1.6vw, 1.5rem)', letterSpacing: '-0.015em' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: '0.9375rem', lineHeight: '1.95' }}>
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
