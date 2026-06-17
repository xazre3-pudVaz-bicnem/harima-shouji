'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Video Background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'rgba(2,10,24,0.7)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(2,10,24,0.5)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div
        className="container relative"
        style={{ zIndex: 10, paddingTop: '14rem', paddingBottom: '10rem' }}
      >
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.15, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-10 bg-amber-500" />
            <span
              className="font-bold text-amber-400 uppercase tracking-[0.35em]"
              style={{ fontSize: '0.6875rem' }}
            >
              FC本部・多店舗企業向け施工パートナー
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold text-white leading-tight mb-10"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 6rem)',
              letterSpacing: '-0.03em',
              lineHeight: '1.18',
            }}
          >
            フランチャイズ店舗の<br />
            内装工事・原状回復を<br />
            <span style={{ color: '#F59E0B' }}>ワンストップ対応</span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              color: 'rgba(209,213,219,0.7)',
              fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
              lineHeight: '1.9',
            }}
          >
            多店舗展開企業・FC本部向け<br className="hidden md:block" />
            施工管理の負担を削減します
          </motion.p>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity: 0.3 }}
      >
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-white" />
        <span
          className="text-white tracking-[0.4em] uppercase"
          style={{ fontSize: '0.5625rem' }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
