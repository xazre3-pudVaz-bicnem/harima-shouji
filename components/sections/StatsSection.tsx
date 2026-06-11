'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: '対応案件数', note: '開業以来の累計' },
  { number: '関東一円', label: '対応エリア', note: '首都圏全域' },
  { number: '即日', label: '最短対応', note: 'お問い合わせから' },
  { number: '無料', label: '現地調査・見積', note: '費用は一切不要' },
]

export default function StatsSection() {
  return (
    <section className="bg-[#06111F]">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/5 lg:divide-y-0">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="px-10 py-16 lg:py-20 text-center"
          >
            <div
              className="font-bold text-white leading-none mb-3"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              {stat.number}
            </div>
            <div className="text-[10px] font-semibold tracking-[0.25em] text-amber-400 uppercase mb-1.5">
              {stat.label}
            </div>
            <div className="text-xs text-gray-600">{stat.note}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
