'use client'

import { motion } from 'framer-motion'

const problems = [
  '複数店舗の内装工事を、まとめて管理・発注できる業者が見つからない',
  '退去立会いや原状回復対応に、担当者の時間が取られすぎている',
  '店舗ごとに業者が違い、施工品質のバラつきが課題になっている',
  '夜間工事・短工期・急な修繕に対応できる業者が少ない',
  'FC加盟店の内装工事を、本部としてまとめて一元管理したい',
  '施工品質・コスト・スケジュールを本部で統一したい',
]

export default function Problems() {
  return (
    <section className="bg-[#071322]" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="section-label-light mb-7">PROBLEMS</div>
          <h2 className="section-title-light max-w-2xl">
            こんなお悩み、<br />ありませんか？
          </h2>
        </motion.div>

        {/* Problem List — large text, one item at a time */}
        <div className="divide-y divide-white/8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center gap-10 md:gap-16 py-10 md:py-12 cursor-default"
            >
              <span
                className="font-bold text-amber-500/25 tracking-[0.25em] shrink-0 group-hover:text-amber-500/60 transition-colors duration-300 hidden md:block"
                style={{ fontSize: 'clamp(0.75rem, 1vw, 0.85rem)', width: '2.5rem' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p
                className="text-white/50 group-hover:text-white/95 transition-colors duration-400 leading-snug font-bold"
                style={{ fontSize: 'clamp(1.35rem, 2.5vw, 2.1rem)', letterSpacing: '-0.01em' }}
              >
                {problem}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-16 border-t border-white/8"
        >
          <p className="text-gray-500 leading-relaxed max-w-3xl" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
            播磨商事は、FC本部・多店舗展開企業のご担当者様が抱えるこれらの課題を、<br className="hidden md:block" />
            内装工事から退去立会いまで、ワンストップで解決する施工パートナーです。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
