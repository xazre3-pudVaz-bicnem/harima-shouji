'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: '複数店舗をまとめて管理',
    description: '単店舗の工事から、FC加盟店の複数店舗一括管理まで対応。窓口を一本化し、工程・進捗・完了報告を一元化します。',
  },
  {
    number: '02',
    title: '内装から退去立会いまで一社完結',
    description: '内装工事・クロス・クリーニング・原状回復・退去立会いまですべてご相談いただけます。複数業者への発注が不要になります。',
  },
  {
    number: '03',
    title: '退去費用の適正化サポート',
    description: '退去立会い代行・オーナー交渉・過剰な原状回復費用の適正化まで総合サポート。余計なコストを削減します。',
  },
  {
    number: '04',
    title: '夜間・短工期・急ぎ案件も対応',
    description: '営業中の店舗改装や翌朝完了が必要な案件にも対応。スケジュールが厳しい案件こそご相談ください。',
  },
  {
    number: '05',
    title: '法人担当者との一元対応',
    description: 'FC本部・店舗開発チームとの連絡・進捗報告を前提とした、スムーズなコミュニケーションで対応します。',
  },
  {
    number: '06',
    title: '現地調査から完了まで一貫担当',
    description: '現地調査・ヒアリング・見積・工程調整・施工・完了確認まで、担当者が一貫して対応します。',
  },
]

export default function Reasons() {
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
          <div className="section-label-light mb-7">WHY CHOOSE US</div>
          <h2 className="section-title-light max-w-2xl">
            フランチャイズ本部・<br />
            多店舗運営に選ばれる理由
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#071322] p-12 lg:p-16 group hover:bg-white/[0.02] transition-colors"
            >
              {/* Decorative number */}
              <div
                className="font-bold text-white/5 leading-none mb-8 select-none"
                style={{ fontSize: 'clamp(4.5rem, 7vw, 7rem)', letterSpacing: '-0.04em' }}
              >
                {reason.number}
              </div>
              <h3
                className="font-bold text-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', letterSpacing: '-0.02em' }}
              >
                {reason.title}
              </h3>
              <p
                className="text-gray-500 leading-relaxed"
                style={{ fontSize: '1.0625rem', lineHeight: '2' }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
