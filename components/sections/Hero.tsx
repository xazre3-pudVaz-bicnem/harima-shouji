'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 800], [0, -100])
  const videoScale = useTransform(scrollY, [0, 800], [1, 1.08])

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Video background with scale parallax */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
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
        </motion.div>
        <div className="absolute inset-0" style={{ background: 'rgba(2,10,24,0.72)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(2,10,24,0.5)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="container relative"
        style={{ zIndex: 10, paddingTop: '16rem', paddingBottom: '12rem', y: textY }}
      >
        <div className="max-w-5xl">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold text-white leading-tight mb-12"
            style={{
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              letterSpacing: '-0.04em',
              lineHeight: '1.1',
            }}
          >
            フランチャイズ本部と<br />
            多店舗展開企業のための<br />
            <span style={{ color: '#F59E0B' }}>施工パートナー</span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              color: 'rgba(209,213,219,0.6)',
              fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
              lineHeight: '2',
            }}
          >
            店舗内装工事から原状回復工事まで。<br className="hidden md:block" />
            施工管理の負担を軽減します。
          </motion.p>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ zIndex: 10, opacity: 0.28 }}
      >
        <motion.div
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-14 bg-gradient-to-b from-transparent to-white origin-top"
        />
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
