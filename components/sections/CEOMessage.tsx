'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CEOMessage() {
  return (
    <section style={{ paddingTop: '12rem', paddingBottom: '12rem' }} className="bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="section-label mb-10">MESSAGE</div>

          <blockquote className="mb-14">
            <p
              className="font-bold text-gray-900 leading-relaxed"
              style={{
                fontSize: 'clamp(1.5rem, 2.6vw, 2.6rem)',
                letterSpacing: '-0.025em',
                lineHeight: '1.65',
              }}
            >
              フランチャイズ本部・多店舗展開企業の担当者様が、
              施工管理に時間をとられることなく
              店舗運営に集中できる環境をつくること。
              それが私たちの使命です。
            </p>
          </blockquote>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-5 pt-8 border-t border-gray-100"
          >
            <div className="relative w-14 h-14 overflow-hidden bg-gray-100 shrink-0 rounded-full">
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_1.jpg"
                alt="代表 播磨龍樹"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <div
                className="font-bold tracking-[0.22em] uppercase mb-1"
                style={{ fontSize: '0.6rem', color: '#9ca3af' }}
              >
                Representative Director
              </div>
              <div
                className="font-bold text-gray-900"
                style={{ fontSize: '1.125rem', letterSpacing: '-0.01em' }}
              >
                播磨 龍樹
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
