'use client'

import { motion } from 'framer-motion'

const tags = [
  'FC本部専属対応',
  '複数店舗一括管理',
  '原状回復工事',
  '夜間・短工期対応',
  '東京・関東圏全域',
]

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
        {/* Dark navy overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(2,10,24,0.65)' }}
        />
        {/* Subtle left vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(2,10,24,0.4)] via-transparent to-transparent" />
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
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-px w-10 bg-amber-500" />
            <span
              className="font-bold text-amber-400 uppercase tracking-[0.35em]"
              style={{ fontSize: '0.6875rem' }}
            >
              INTERIOR CONSTRUCTION PARTNER FOR FRANCHISE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold text-white leading-tight mb-12"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
              letterSpacing: '-0.03em',
              lineHeight: '1.18',
            }}
          >
            FC本部・多店舗展開企業の<br />
            店舗工事管理を<br />
            <span style={{ color: '#F59E0B' }}>一社に集約する。</span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-300 max-w-2xl"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.5rem)',
              lineHeight: '2.1',
            }}
          >
            店舗内装工事、原状回復、クロス張替え、店舗クリーニング、退去立会いまで。<br className="hidden md:block" />
            複数店舗の工事管理をまとめて任せられる体制で、<br className="hidden md:block" />
            FC本部・多店舗展開企業をサポートします。
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-16"
          >
            {tags.map((tag, i) => (
              <span
                key={tag}
                className="flex items-center gap-2"
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.42)',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                }}
              >
                {i > 0 && (
                  <span
                    className="hidden sm:block"
                    style={{
                      width: '1px',
                      height: '10px',
                      background: 'rgba(255,255,255,0.18)',
                      marginRight: '0.25rem',
                    }}
                  />
                )}
                {tag}
              </span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity: 0.28 }}
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
