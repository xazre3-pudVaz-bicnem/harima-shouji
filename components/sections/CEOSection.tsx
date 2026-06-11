'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CEOSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Large Magazine Photo */}
      <div className="relative w-full overflow-hidden" style={{ height: '68vh', minHeight: '480px' }}>
        <Image
          src="/LINE_ALBUM_2026.6.10_260610_1.jpg"
          alt="代表取締役 播磨龍樹"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container pb-24 -mt-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="section-label mb-5">MESSAGE FROM CEO</div>
          <h2
            className="font-bold text-gray-900 leading-tight mb-10"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            店舗工事のすべてを、<br />
            まとめて任せられる会社へ。
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
            <p>
              多店舗展開を進める法人様が一番困るのは、工事業者の管理コストです。
              店舗ごとに発注先が違う、品質がバラつく、担当者が逐一確認しなければならない——
              この問題を解決したくて、播磨商事を立ち上げました。
            </p>
            <p>
              内装工事・クロス・クリーニング・原状回復・退去立会い。
              これらをすべて一社でまとめて対応できれば、
              FC本部や多店舗運営会社の担当者様の負担は大きく減ります。
            </p>
            <p>
              私たちは単なる施工業者ではなく、
              お客様の店舗展開を支える「パートナー」でありたいと思っています。
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="text-lg font-bold text-gray-900 tracking-wide">播磨 龍樹</div>
            <div className="text-sm text-gray-500 mt-1">株式会社播磨商事 代表取締役</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
