'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: '窓口を一本化',
    note: '内装・原状回復・クリーニング・立会いを一社で完結',
  },
  {
    number: '02',
    title: '複数店舗を同時管理',
    note: 'エリアをまたいだ同時並行施工・工程管理に対応',
  },
  {
    number: '03',
    title: '夜間・短工期対応',
    note: '翌朝完了が必要な急ぎ案件もご相談ください',
  },
  {
    number: '04',
    title: '原状回復まで一括',
    note: '退去立会い代行・解体・クリーニングも同時対応',
  },
  {
    number: '05',
    title: '法人向け進行管理',
    note: '進捗・完了報告を定期共有。個別確認の手間を削減',
  },
  {
    number: '06',
    title: '規模を問わず対応',
    note: 'クロス補修から大型改装まで柔軟に受付',
  },
]

export default function WhyFCSection() {
  return (
    <section className="bg-[#071322]" style={{ paddingTop: '14rem', paddingBottom: '14rem' }}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="section-label-light mb-7">WHY CHOOSE US</div>
          <h2 className="section-title-light">選ばれる理由</h2>
        </motion.div>

        {/* Horizontal editorial list */}
        <div>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center py-10 md:py-12 border-b border-white/[0.07] hover:border-white/[0.13] transition-colors group"
            >
              {/* Ghost number */}
              <div
                className="shrink-0 leading-none select-none text-right"
                style={{
                  width: '5rem',
                  marginRight: '3rem',
                  fontSize: 'clamp(3rem, 4.5vw, 5rem)',
                  color: 'rgba(255,255,255,0.05)',
                  letterSpacing: '-0.05em',
                  fontWeight: 700,
                }}
                aria-hidden="true"
              >
                {reason.number}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-white leading-tight group-hover:text-amber-300 transition-colors shrink-0"
                style={{
                  width: 'clamp(10rem, 22vw, 22rem)',
                  marginRight: '3rem',
                  fontSize: 'clamp(1.2rem, 2.2vw, 1.875rem)',
                  letterSpacing: '-0.025em',
                }}
              >
                {reason.title}
              </h3>

              {/* Note */}
              <p
                className="text-gray-500 flex-1 leading-relaxed hidden md:block"
                style={{ fontSize: '0.9375rem' }}
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
