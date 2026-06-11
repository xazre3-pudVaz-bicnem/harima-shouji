'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: '窓口を一本化',
    description: '内装工事・原状回復・クリーニング・退去立会いまで、複数業者に分けることなく相談窓口を一本化できます。本部担当者様の管理コストを大幅に削減します。',
  },
  {
    number: '02',
    title: '複数店舗を同時管理',
    description: 'エリアや店舗数が増えても、工程調整・現地確認・施工手配をまとめて相談できます。FC加盟店の同時並行施工にも対応しています。',
  },
  {
    number: '03',
    title: '夜間・短工期に対応',
    description: '営業への影響を最小限に抑えるため、夜間工事や短工期施工のご相談にも対応。翌朝完了が必要な急ぎ案件もご相談ください。',
  },
  {
    number: '04',
    title: '原状回復まで一括対応',
    description: '新装・改装だけでなく、退去時の原状回復工事・立会いサポートまで対応。退去後のクリーニングも同時に依頼できます。',
  },
  {
    number: '05',
    title: '法人向けの進行管理',
    description: '法人担当者様が社内共有しやすいよう、進捗・完了状況を整理してご報告。複数店舗の工程をまとめて把握できる体制を整えます。',
  },
  {
    number: '06',
    title: '小規模修繕にも対応',
    description: 'クロス張替え・床材補修・設備まわりのメンテナンスから大型改装まで、規模を問わず柔軟に対応します。',
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
          className="mb-24"
        >
          <div className="section-label-light mb-7">WHY CHOOSE US</div>
          <h2 className="section-title-light max-w-3xl">
            なぜFC本部・多店舗企業から<br />
            選ばれるのか
          </h2>
        </motion.div>

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
              <div
                className="font-bold text-white/5 leading-none mb-8 select-none"
                style={{ fontSize: 'clamp(4.5rem, 7vw, 7rem)', letterSpacing: '-0.04em' }}
                aria-hidden="true"
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
