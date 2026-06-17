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
    <section className="bg-[#071322]" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="section-label-light mb-7">WHY CHOOSE US</div>
          <h2 className="section-title-light">
            FC本部・多店舗企業から<br />選ばれる理由
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#071322] px-12 py-14 lg:px-16 lg:py-16 group hover:bg-white/[0.025] transition-colors"
            >
              <div
                className="font-bold leading-none mb-8 select-none"
                style={{
                  fontSize: 'clamp(4rem, 6vw, 6rem)',
                  letterSpacing: '-0.04em',
                  color: 'rgba(255,255,255,0.04)',
                }}
                aria-hidden="true"
              >
                {reason.number}
              </div>
              <h3
                className="font-bold text-white mb-3 leading-tight"
                style={{ fontSize: 'clamp(1.4rem, 2vw, 1.75rem)', letterSpacing: '-0.02em' }}
              >
                {reason.title}
              </h3>
              <p
                className="text-gray-500 leading-relaxed"
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
