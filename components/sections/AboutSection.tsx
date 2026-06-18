'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section style={{ paddingTop: '12rem', paddingBottom: '12rem' }} className="bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-gray-100"
            style={{ aspectRatio: '4 / 3' }}
          >
            <Image
              src="/LINE_ALBUM_2026.6.10_260610_4.jpg"
              alt="店舗施工"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label mb-8">ABOUT</div>
            <h2 className="section-title mb-10">
              店舗運営を支える<br />施工体制
            </h2>
            <p
              className="text-gray-500 leading-relaxed"
              style={{ fontSize: '1.125rem', lineHeight: '2.1' }}
            >
              一社で解決できる体制と、複数店舗を同時に管理できる経験。<br className="hidden lg:block" />
              播磨商事は、FC本部・多店舗展開企業の<br className="hidden lg:block" />
              施工管理パートナーです。
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
